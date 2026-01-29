
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../context/ThemeContext';

interface PreviewFrameProps {
  children: React.ReactNode;
  width: string | number;
  height?: string | number;
  className?: string;
}

export const PreviewFrame: React.FC<PreviewFrameProps> = ({ 
  children, 
  width, 
  height = '100%', 
  className = '' 
}) => {
  const { theme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const setupIframe = () => {
        const doc = iframe.contentDocument;
        if (!doc) return;
        
        if (doc.getElementById('root-mount')) return;

        doc.open();
        doc.write('<!DOCTYPE html><html class="h-full"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head><body class="h-full bg-transparent overflow-y-auto overflow-x-hidden"><div id="root-mount" class="h-full"></div></body></html>');
        doc.close();

        // Inject Tailwind
        const script = doc.createElement('script');
        script.src = "https://cdn.tailwindcss.com";
        script.onload = () => {
             const configScript = doc.createElement('script');
             // Map Tailwind colors to CSS variables for dynamic updates
             configScript.innerHTML = `
                tailwind.config = {
                    theme: {
                        extend: {
                            fontFamily: {
                                sans: ['var(--font-family-base)', 'sans-serif'],
                                mono: ['JetBrains Mono', 'monospace'],
                                serif: ['Playfair Display', 'serif'],
                            },
                            colors: {
                                primary: 'var(--color-primary)',
                                secondary: 'var(--color-secondary)',
                                background: 'var(--color-background)',
                                surface: 'var(--color-surface)',
                                accent: 'var(--color-accent)',
                                success: 'var(--color-success)',
                                warning: 'var(--color-warning)',
                                error: 'var(--color-error)',
                                info: 'var(--color-info)',
                                // Override defaults to force theme usage
                                gray: {
                                    50: 'var(--color-background)',
                                    100: 'var(--color-surface-dim)',
                                    200: 'rgba(var(--color-text-rgb), 0.1)',
                                    300: 'rgba(var(--color-text-rgb), 0.2)',
                                    400: 'rgba(var(--color-text-rgb), 0.4)',
                                    500: 'rgba(var(--color-text-rgb), 0.6)',
                                    600: 'rgba(var(--color-text-rgb), 0.8)',
                                    700: 'var(--color-text-secondary)',
                                    800: 'var(--color-text)',
                                    900: 'var(--color-text)',
                                }
                            },
                            borderRadius: {
                                'sm': 'var(--radius-sm)',
                                'md': 'var(--radius-md)',
                                'lg': 'var(--radius-lg)',
                                'xl': 'calc(var(--radius-lg) * 1.5)',
                                '2xl': 'calc(var(--radius-lg) * 2)',
                            }
                        }
                    }
                }
             `;
             doc.head.appendChild(configScript);
        };
        doc.head.appendChild(script);

        // Inject Fonts & Icons
        const fontLink = doc.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;600;700&family=Roboto:wght@300;400;500;700&display=swap";
        fontLink.rel = "stylesheet";
        doc.head.appendChild(fontLink);

        const iconLink = doc.createElement('link');
        iconLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        iconLink.rel = "stylesheet";
        doc.head.appendChild(iconLink);

        // Hide Scrollbars
        const style = doc.createElement('style');
        style.textContent = `
            body::-webkit-scrollbar { display: none; }
            body { -ms-overflow-style: none; scrollbar-width: none; }
        `;
        doc.head.appendChild(style);

        setMountNode(doc.getElementById('root-mount'));
    };

    setupIframe();
  }, []);

  // Sync Theme CSS Variables
  useEffect(() => {
      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentDocument || !iframe.contentDocument.body) return;
      
      const doc = iframe.contentDocument;
      const body = doc.body;

      // Helper to convert hex to rgb for opacity handling in Tailwind
      const hexToRgb = (hex: string) => {
          const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0,0,0';
      }

      // 1. Color System
      body.style.setProperty('--color-primary', theme.colors.primary);
      body.style.setProperty('--color-secondary', theme.colors.secondary);
      body.style.setProperty('--color-background', theme.colors.background);
      body.style.setProperty('--color-surface', theme.colors.surface);
      // Create a slightly dimmer surface for "gray-100" mapping
      body.style.setProperty('--color-surface-dim', theme.colors.background === '#ffffff' ? '#f3f4f6' : theme.colors.background); 
      
      body.style.setProperty('--color-text', theme.colors.text);
      body.style.setProperty('--color-text-rgb', hexToRgb(theme.colors.text));
      body.style.setProperty('--color-text-secondary', theme.colors.textSecondary);
      
      body.style.setProperty('--color-accent', theme.colors.accent);
      body.style.setProperty('--color-success', theme.colors.success);
      body.style.setProperty('--color-warning', theme.colors.warning);
      body.style.setProperty('--color-error', theme.colors.error);
      body.style.setProperty('--color-info', theme.colors.info);

      // 2. Typography
      let fontFamily = 'Inter, sans-serif';
      if (theme.typography.fontFamily === 'serif') fontFamily = '"Playfair Display", serif';
      if (theme.typography.fontFamily === 'mono') fontFamily = '"JetBrains Mono", monospace';
      if (theme.typography.fontFamily === 'roboto') fontFamily = 'Roboto, sans-serif';
      
      body.style.setProperty('--font-family-base', fontFamily);
      body.style.fontFamily = fontFamily;
      
      // Phase 6: Accurate Sizing via Density
      // We scale the base font size. If density is 0.75 (Compact), font size drops slightly, 
      // but more importantly, we might want to scale spacing units.
      // However, changing root font size scales 1rem, which is effective for global UI scaling.
      const scaledSize = theme.typography.baseSize * (theme.spacing.density || 1);
      doc.documentElement.style.fontSize = `${scaledSize}px`;

      // 3. Spacing & Radius
      body.style.setProperty('--radius-sm', theme.borderRadius.sm);
      body.style.setProperty('--radius-md', theme.borderRadius.md);
      body.style.setProperty('--radius-lg', theme.borderRadius.lg);

  }, [theme]);

  return (
    <>
        <iframe 
            ref={iframeRef} 
            className={`transition-all duration-300 ease-out bg-white shadow-2xl border-0 mx-auto block ${className}`}
            style={{ width: typeof width === 'number' ? `${width}px` : width, height }}
            title="Preview"
        />
        {mountNode && createPortal(children, mountNode)}
    </>
  );
};
