import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FRAMEWORKS } from '../constants';
import { generateThemeFromPrompt } from '../services/geminiService';
import { FrameworkType } from '../types';
import { toast } from './ui/Toaster';

import { EditorColors } from './editor/EditorColors';
import { EditorTypography } from './editor/EditorTypography';
import { EditorComponents } from './editor/EditorComponents';
import { EditorShape } from './editor/EditorShape';
import { EditorLayout } from './editor/EditorLayout';

interface ThemeEditorProps {
    onClose?: () => void;
    isMobile: boolean;
}

export const ThemeEditor: React.FC<ThemeEditorProps> = ({ onClose, isMobile }) => {
  const { theme, setTheme, resetTheme } = useTheme();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'colors' | 'type' | 'shape' | 'layout'>('colors');
  const [isAIExpanded, setIsAIExpanded] = useState(false);

  const handleMagicTheme = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    toast.info("Consulting the AI architect...");
    
    try {
      const generatedTheme = await generateThemeFromPrompt(prompt);
      if (generatedTheme) {
        setTheme(prev => ({
          ...prev,
          ...generatedTheme,
          colors: { ...prev.colors, ...(generatedTheme.colors || {}) },
          borderRadius: { ...prev.borderRadius, ...(generatedTheme.borderRadius || {}) }
        }));
        toast.success(`Theme "${generatedTheme.name}" generated!`);
        setIsAIExpanded(false); // Auto collapse on success
      } else {
        toast.error("Failed to generate theme. Try a different prompt.");
      }
    } catch (e) {
        toast.error("Something went wrong.");
    } finally {
      setIsGenerating(false);
    }
  };

  const tabs = [
      { id: 'colors', label: 'Colors' },
      { id: 'type', label: 'Typography' },
      { id: 'shape', label: 'Components' },
      { id: 'layout', label: 'Layout' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50/50">
        {/* Header */}
        <div className="p-4 border-b bg-white flex justify-between items-center shrink-0 shadow-sm z-10">
             <div className="flex items-center gap-2">
                <div className="bg-indigo-600 text-white p-1 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                </div>
                <h2 className="text-sm font-bold text-gray-900 tracking-tight uppercase">Theme Architect</h2>
             </div>
             {isMobile && <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">✕</button>}
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden">
             
             {/* AI Generator Section */}
            <div className={`border-b bg-white transition-all duration-300 ease-in-out ${isAIExpanded ? 'bg-indigo-50/30' : ''}`}>
                <button 
                    onClick={() => setIsAIExpanded(!isAIExpanded)}
                    className="w-full flex items-center justify-between p-4 text-xs font-bold text-indigo-700 uppercase tracking-wide hover:bg-indigo-50/50 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <span>✨ AI Magic Generator</span>
                    </div>
                    <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isAIExpanded ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isAIExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 pt-0">
                        <textarea 
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Describe your dream theme (e.g., 'Cyberpunk dark mode with neon pink accents')..."
                            className="w-full text-sm p-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 outline-none mb-3 h-20 resize-none bg-white"
                        />
                        <button 
                            onClick={handleMagicTheme}
                            disabled={isGenerating || !prompt}
                            className={`w-full py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all
                                ${isGenerating ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'}
                            `}
                        >
                            {isGenerating ? 'Designing...' : 'Generate Theme'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Framework Selector */}
            <div className="p-4 border-b bg-white">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 block">Base Framework</label>
                 <div className="grid grid-cols-2 gap-2">
                    {FRAMEWORKS.map(fw => (
                        <button
                            key={fw.id}
                            onClick={() => setTheme(prev => ({ ...prev, framework: fw.id as FrameworkType }))}
                            className={`
                                text-left p-2 rounded-lg border transition-all relative overflow-hidden group
                                ${theme.framework === fw.id 
                                    ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600' 
                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }
                            `}
                        >
                            <div className={`text-xs font-bold mb-0.5 ${theme.framework === fw.id ? 'text-indigo-700' : 'text-gray-700'}`}>{fw.name}</div>
                            <div className="text-[10px] text-gray-500 leading-tight line-clamp-1 opacity-80">{fw.description}</div>
                            {theme.framework === fw.id && (
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-600"></div>
                            )}
                        </button>
                    ))}
                 </div>
            </div>

            {/* Main Editor Tabs */}
            <div className="p-4 space-y-6">
                {/* Segmented Control */}
                <div className="flex bg-gray-200 p-1 rounded-lg">
                    {tabs.map(t => (
                        <button
                            key={t.id}
                            onClick={() => setActiveTab(t.id as any)}
                            className={`
                                flex-1 py-1.5 text-xs font-semibold rounded-md transition-all
                                ${activeTab === t.id 
                                    ? 'bg-white text-gray-900 shadow-sm' 
                                    : 'text-gray-500 hover:text-gray-700'
                                }
                            `}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
                
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 min-h-[300px]">
                    {activeTab === 'colors' && <EditorColors />}
                    {activeTab === 'type' && <EditorTypography />}
                    {activeTab === 'shape' && (
                        <>
                            <EditorComponents />
                            <div className="h-px bg-gray-200 my-6"></div>
                            <EditorShape />
                        </>
                    )}
                    {activeTab === 'layout' && <EditorLayout />}
                </div>
            </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t bg-white shrink-0">
            <button 
                onClick={resetTheme} 
                className="w-full py-2.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all flex items-center justify-center gap-2"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Reset to Defaults
            </button>
        </div>
    </div>
  );
};