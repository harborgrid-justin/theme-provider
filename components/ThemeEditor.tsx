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
      { id: 'colors', icon: 'palette', label: 'Colors' },
      { id: 'type', icon: 'text_fields', label: 'Type' },
      { id: 'shape', icon: 'category', label: 'Shape' },
      { id: 'layout', icon: 'grid_view', label: 'Layout' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
        <div className="p-4 border-b flex-shrink-0">
             <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Theme Architect</h2>
                {isMobile && <button onClick={onClose} className="p-2 text-gray-500">✕</button>}
             </div>
             
             {/* Framework Selector Compact */}
             <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
                {FRAMEWORKS.map(fw => (
                    <button
                        key={fw.id}
                        onClick={() => setTheme(prev => ({ ...prev, framework: fw.id as FrameworkType }))}
                        className={`
                            whitespace-nowrap text-xs py-1.5 px-3 rounded-full border transition-all
                            ${theme.framework === fw.id 
                                ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm' 
                                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                            }
                        `}
                    >
                        {fw.name}
                    </button>
                ))}
             </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-8">
             {/* AI Generator */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
                <label className="block text-xs font-bold text-indigo-900 mb-2 uppercase tracking-wide">✨ Magic Generation</label>
                <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your dream theme..."
                className="w-full text-sm p-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 outline-none mb-3 h-16 resize-none bg-white/80 backdrop-blur-sm"
                />
                <button 
                onClick={handleMagicTheme}
                disabled={isGenerating || !prompt}
                className={`w-full py-2 rounded-lg text-sm font-semibold text-white transition-all
                    ${isGenerating ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-md'}
                `}
                >
                {isGenerating ? 'Designing...' : 'Generate Theme'}
                </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b">
                {tabs.map(t => (
                    <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id as any)}
                        className={`flex-1 py-2 text-xs font-medium flex flex-col items-center gap-1 border-b-2 transition-colors ${activeTab === t.id ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                    >
                        <span className="material-icons text-lg">{t.icon}</span>
                        {t.label}
                    </button>
                ))}
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                {activeTab === 'colors' && <EditorColors />}
                {activeTab === 'type' && <EditorTypography />}
                {activeTab === 'shape' && (
                    <>
                        <EditorComponents />
                        <div className="h-6"></div>
                        <EditorShape />
                    </>
                )}
                {activeTab === 'layout' && <EditorLayout />}
            </div>
            
            <div className="pt-4 border-t pb-8">
                <button onClick={resetTheme} className="text-xs text-red-500 hover:text-red-700 underline w-full text-center">
                    Reset to Defaults
                </button>
            </div>
        </div>
    </div>
  );
};