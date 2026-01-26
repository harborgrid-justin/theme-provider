import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { toast } from './ui/Toaster';

interface CodeExportModalProps {
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ onClose }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'tailwind' | 'css' | 'json'>('tailwind');

  const getTailwindConfig = () => {
    return `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${theme.colors.primary}',
        secondary: '${theme.colors.secondary}',
        accent: '${theme.colors.accent}',
        success: '${theme.colors.success}',
        error: '${theme.colors.error}',
        background: '${theme.colors.background}',
        surface: '${theme.colors.surface}',
      },
      fontFamily: {
        sans: ['${theme.typography.fontFamily}', 'sans-serif'],
      },
      borderRadius: {
        'btn': '${theme.borderRadius.button}',
        'card': '${theme.borderRadius.card}',
      },
      boxShadow: {
        'theme': '${theme.effects.shadow === 'hard' ? '4px 4px 0px 0px rgba(0,0,0,1)' : theme.effects.shadow}',
      }
    },
  },
  plugins: [],
}`;
  };

  const getCssVars = () => {
    return `:root {
  /* Colors */
  --color-primary: ${theme.colors.primary};
  --color-secondary: ${theme.colors.secondary};
  --color-background: ${theme.colors.background};
  --color-surface: ${theme.colors.surface};
  --color-text: ${theme.colors.text};
  
  /* Typography */
  --font-family-base: '${theme.typography.fontFamily}', sans-serif;
  --font-size-base: ${theme.typography.baseSize}px;
  
  /* Spacing */
  --radius-btn: ${theme.borderRadius.button};
  --radius-card: ${theme.borderRadius.card};
  --spacing-unit: ${theme.spacing.unit}px;
}`;
  };

  const getContent = () => {
    switch (activeTab) {
        case 'tailwind': return getTailwindConfig();
        case 'css': return getCssVars();
        case 'json': return JSON.stringify(theme, null, 2);
    }
  };

  const handleCopy = () => {
      navigator.clipboard.writeText(getContent());
      toast.success("Copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Export Theme Code</h3>
                <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            
            <div className="flex border-b border-gray-100 bg-gray-50/50">
                {(['tailwind', 'css', 'json'] as const).map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === tab ? 'border-indigo-600 text-indigo-600 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-auto bg-gray-900 p-4">
                <pre className="font-mono text-xs md:text-sm text-gray-300 whitespace-pre-wrap font-medium leading-relaxed">
                    {getContent()}
                </pre>
            </div>

            <div className="p-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
                <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Close</button>
                <button 
                    onClick={handleCopy}
                    className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                    Copy Code
                </button>
            </div>
        </div>
    </div>
  );
};