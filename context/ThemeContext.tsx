
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { ThemeConfig, ThemeContextType } from '../types';
import { DEFAULT_THEME } from '../constants';
import { toast } from '../components/ui/Toaster';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// --- Reducer Logic ---

type Action = 
  | { type: 'SET_THEME'; payload: ThemeConfig }
  | { type: 'UPDATE_COLOR'; payload: { key: keyof ThemeConfig['colors']; value: string } }
  | { type: 'UPDATE_TYPOGRAPHY'; payload: { key: string; value: any } }
  | { type: 'UPDATE_EFFECT'; payload: { key: string; value: any } }
  | { type: 'UPDATE_SPACING'; payload: { key: string; value: any } }
  | { type: 'UPDATE_BORDER_RADIUS'; payload: { key: string; value: any } }
  | { type: 'RESET_THEME' }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'LOAD_FROM_STORAGE'; payload: ThemeConfig };

interface State {
  theme: ThemeConfig;
  history: ThemeConfig[];
  future: ThemeConfig[];
}

const initialState: State = {
  theme: DEFAULT_THEME,
  history: [],
  future: [],
};

const MAX_HISTORY = 20;

function themeReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_THEME':
      return {
        theme: action.payload,
        history: [...state.history, state.theme].slice(-MAX_HISTORY),
        future: [], // Clear redo stack on new change
      };
    case 'UPDATE_COLOR':
      return {
        theme: { ...state.theme, colors: { ...state.theme.colors, [action.payload.key]: action.payload.value } },
        history: [...state.history, state.theme].slice(-MAX_HISTORY),
        future: [],
      };
    case 'UPDATE_TYPOGRAPHY':
      return {
        theme: { ...state.theme, typography: { ...state.theme.typography, [action.payload.key]: action.payload.value } },
        history: [...state.history, state.theme].slice(-MAX_HISTORY),
        future: [],
      };
    case 'UPDATE_EFFECT':
      return {
        theme: { ...state.theme, effects: { ...state.theme.effects, [action.payload.key]: action.payload.value } },
        history: [...state.history, state.theme].slice(-MAX_HISTORY),
        future: [],
      };
    case 'UPDATE_SPACING':
      return {
        theme: { ...state.theme, spacing: { ...state.theme.spacing, [action.payload.key]: action.payload.value } },
        history: [...state.history, state.theme].slice(-MAX_HISTORY),
        future: [],
      };
    case 'UPDATE_BORDER_RADIUS':
      return {
        theme: { ...state.theme, borderRadius: { ...state.theme.borderRadius, [action.payload.key]: action.payload.value } },
        history: [...state.history, state.theme].slice(-MAX_HISTORY),
        future: [],
      };
    case 'RESET_THEME':
      return {
        ...initialState,
        theme: DEFAULT_THEME // Ensure explicit reset
      };
    case 'UNDO':
      if (state.history.length === 0) return state;
      const previous = state.history[state.history.length - 1];
      const newHistory = state.history.slice(0, -1);
      return {
        theme: previous,
        history: newHistory,
        future: [state.theme, ...state.future],
      };
    case 'REDO':
      if (state.future.length === 0) return state;
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      return {
        theme: next,
        history: [...state.history, state.theme],
        future: newFuture,
      };
    case 'LOAD_FROM_STORAGE':
      return {
        ...state,
        theme: action.payload,
        history: [], // Reset history on fresh load to prevent undoing into oblivion
        future: [],
      };
    default:
      return state;
  }
}

// --- Provider ---

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Persistence: Load on mount
  useEffect(() => {
    const saved = localStorage.getItem('chameleon_theme');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        dispatch({ type: 'LOAD_FROM_STORAGE', payload: parsed });
      } catch (e) {
        console.error("Failed to load theme from storage", e);
      }
    }
  }, []);

  // Persistence: Save on change (Debounce handled by effect dependency mostly, but lets debounce strictly)
  useEffect(() => {
    const handler = setTimeout(() => {
        localStorage.setItem('chameleon_theme', JSON.stringify(state.theme));
    }, 500);
    return () => clearTimeout(handler);
  }, [state.theme]);

  // Actions wrappers
  const setTheme = (val: React.SetStateAction<ThemeConfig> | ThemeConfig) => {
      // Handle functional state update pattern if necessary, though simpler to just pass value for now
      const value = typeof val === 'function' ? (val as Function)(state.theme) : val;
      dispatch({ type: 'SET_THEME', payload: value });
  };

  const updateColor = (key: keyof ThemeConfig['colors'], value: string) => {
    dispatch({ type: 'UPDATE_COLOR', payload: { key, value } });
  };

  const updateTypography = <K extends keyof ThemeConfig['typography']>(key: K, value: ThemeConfig['typography'][K]) => {
    dispatch({ type: 'UPDATE_TYPOGRAPHY', payload: { key: key as string, value } });
  };

  const updateEffect = <K extends keyof ThemeConfig['effects']>(key: K, value: ThemeConfig['effects'][K]) => {
    dispatch({ type: 'UPDATE_EFFECT', payload: { key: key as string, value } });
  };

  const updateSpacing = <K extends keyof ThemeConfig['spacing']>(key: K, value: ThemeConfig['spacing'][K]) => {
    dispatch({ type: 'UPDATE_SPACING', payload: { key: key as string, value } });
  };

  const updateBorderRadius = <K extends keyof ThemeConfig['borderRadius']>(key: K, value: ThemeConfig['borderRadius'][K]) => {
    dispatch({ type: 'UPDATE_BORDER_RADIUS', payload: { key: key as string, value } });
  };

  const resetTheme = () => {
      dispatch({ type: 'RESET_THEME' });
      toast.info("Theme reset to defaults");
  };

  const undo = () => {
      dispatch({ type: 'UNDO' });
      toast.info("Undo");
  }

  const redo = () => {
      dispatch({ type: 'REDO' });
      toast.info("Redo");
  }

  return (
    <ThemeContext.Provider value={{ 
        theme: state.theme, 
        setTheme, 
        updateColor, 
        updateTypography, 
        updateEffect, 
        updateSpacing, 
        updateBorderRadius, 
        resetTheme,
        undo,
        redo,
        canUndo: state.history.length > 0,
        canRedo: state.future.length > 0
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
