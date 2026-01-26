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

      // Map theme to CSS variables for Tailwind consumption inside iframe
      body.style.setProperty('--color-primary', theme.colors.primary);
      body.style.setProperty('--color-secondary', theme.colors.secondary);
      body.style.setProperty('--color-background', theme.colors.background);
      body.style.setProperty('--color-surface', theme.colors.surface);
      
      let fontFamily = 'Inter, sans-serif';
      if (theme.typography.fontFamily === 'serif') fontFamily = '"Playfair Display", serif';
      if (theme.typography.fontFamily === 'mono') fontFamily = '"JetBrains Mono", monospace';
      if (theme.typography.fontFamily === 'roboto') fontFamily = 'Roboto, sans-serif';
      
      body.style.setProperty('--font-family-base', fontFamily);
      body.style.fontFamily = fontFamily;
      
      // Base font size scaling
      doc.documentElement.style.fontSize = `${theme.typography.baseSize}px`;

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