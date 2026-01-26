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
        
        // Check if already initialized to prevent flicker
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
                                sans: ['Inter', 'sans-serif'],
                                mono: ['JetBrains Mono', 'monospace'],
                                serif: ['Playfair Display', 'serif'],
                                roboto: ['Roboto', 'sans-serif'],
                                system: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
                            },
                        }
                    }
                }
             `;
             doc.head.appendChild(configScript);
        };
        doc.head.appendChild(script);

        // Inject Fonts from Google
        const fontLink = doc.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;600;700&family=Roboto:wght@300;400;500;700&display=swap";
        fontLink.rel = "stylesheet";
        doc.head.appendChild(fontLink);

        // Inject Material Icons
        const iconLink = doc.createElement('link');
        iconLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        iconLink.rel = "stylesheet";
        doc.head.appendChild(iconLink);

        // Inject Styles
        document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
            const linkElement = link as HTMLLinkElement;
            // Avoid duplicating the google fonts we just manually added to prevent conflicts/double loading if existing in parent
            if (linkElement.href && !linkElement.href.includes('fonts.googleapis.com')) {
               doc.head.appendChild(linkElement.cloneNode(true));
            }
        });

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

  // Sync Theme to Iframe HTML/Body for Global Scaling & Backgrounds
  useEffect(() => {
      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentDocument) return;
      
      const doc = iframe.contentDocument;
      
      // Update Root Font Size for Dynamic Scaling (Tailwind rem units will scale)
      // Default browser font size is 16px. If we set this to theme.baseSize, 1rem = theme.baseSize
      doc.documentElement.style.fontSize = `${theme.typography.baseSize}px`;

      // Font Family Injection into Body to ensure it trickles down
      let fontFamily = 'Inter, sans-serif';
      if (theme.typography.fontFamily === 'serif') fontFamily = '"Playfair Display", serif';
      if (theme.typography.fontFamily === 'mono') fontFamily = '"JetBrains Mono", monospace';
      if (theme.typography.fontFamily === 'roboto') fontFamily = 'Roboto, sans-serif';
      if (theme.typography.fontFamily === 'system') fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
      
      doc.body.style.fontFamily = fontFamily;
      
  }, [theme.typography.baseSize, theme.typography.fontFamily]);

  return (
    <>
        <iframe 
            ref={iframeRef} 
            className={`transition-all duration-500 ease-in-out bg-white shadow-2xl border-0 mx-auto block ${className}`}
            style={{ width: typeof width === 'number' ? `${width}px` : width, height }}
            title="Preview"
        />
        {mountNode && createPortal(children, mountNode)}
    </>
  );
};