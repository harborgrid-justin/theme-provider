import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { ThemeConfig, ThemeContextType } from '../types';
import { DEFAULT_THEME } from '../constants';
import { toast } from '../components/ui/Toaster';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(DEFAULT_THEME);
  
  // History Management
  const [history, setHistory] = useState<ThemeConfig[]>([]);
  const [future, setFuture] = useState<ThemeConfig[]>([]);
  
  // We keep track of the "last stable" theme to detect changes
  const snapshotRef = useRef<ThemeConfig>(DEFAULT_THEME);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-save history on changes (debounced)
  useEffect(() => {
    // If current theme differs from our snapshot
    if (JSON.stringify(theme) !== JSON.stringify(snapshotRef.current)) {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        
        debounceRef.current = setTimeout(() => {
            setHistory(prev => {
                const newHistory = [...prev, snapshotRef.current].slice(-20); // Keep last 20
                return newHistory;
            });
            setFuture([]); // Clear redo on new change
            snapshotRef.current = theme; // Update snapshot to current
        }, 800); // 800ms debounce
    }
  }, [theme]);

  const undo = () => {
    if (history.length === 0) return;
    
    // Cancel any pending debounce save to avoid overwriting what we are about to restore
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const previous = history[history.length - 1];
    const newHistory = history.slice(0, -1);

    setFuture(prev => [theme, ...prev]);
    setHistory(newHistory);
    setTheme(previous);
    snapshotRef.current = previous; // Reset snapshot so effect doesn't fire
    toast.info("Undo");
  };

  const redo = () => {
    if (future.length === 0) return;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    const next = future[0];
    const newFuture = future.slice(1);

    setHistory(prev => [...prev, theme]);
    setFuture(newFuture);
    setTheme(next);
    snapshotRef.current = next;
    toast.info("Redo");
  };

  const updateColor = (key: keyof ThemeConfig['colors'], value: string) => {
    setTheme(prev => ({
      ...prev,
      colors: { ...prev.colors, [key]: value }
    }));
  };

  const updateTypography = (key: keyof ThemeConfig['typography'], value: any) => {
    setTheme(prev => ({
      ...prev,
      typography: { ...prev.typography, [key]: value }
    }));
  };

  const updateEffect = (key: keyof ThemeConfig['effects'], value: any) => {
    setTheme(prev => ({
      ...prev,
      effects: { ...prev.effects, [key]: value }
    }));
  };

  const updateSpacing = (key: keyof ThemeConfig['spacing'], value: any) => {
    setTheme(prev => ({
      ...prev,
      spacing: { ...prev.spacing, [key]: value }
    }));
  };

  const updateBorderRadius = (key: keyof ThemeConfig['borderRadius'], value: any) => {
    setTheme(prev => ({
      ...prev,
      borderRadius: { ...prev.borderRadius, [key]: value }
    }));
  };

  const resetTheme = () => {
      setTheme(DEFAULT_THEME);
      setHistory([]);
      setFuture([]);
      snapshotRef.current = DEFAULT_THEME;
  };

  return (
    <ThemeContext.Provider value={{ 
        theme, 
        setTheme, 
        updateColor, 
        updateTypography, 
        updateEffect, 
        updateSpacing, 
        updateBorderRadius, 
        resetTheme,
        undo,
        redo,
        canUndo: history.length > 0,
        canRedo: future.length > 0
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};