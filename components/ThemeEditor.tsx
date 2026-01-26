import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FRAMEWORKS, FONTS } from '../constants';
import { generateThemeFromPrompt } from '../services/geminiService';
import { ColorPicker } from './ColorPicker';
import { ColorPaletteGenerator } from './ColorPaletteGenerator';
import { FrameworkType } from '../types';
import { toast } from './ui/Toaster';

interface ThemeEditorProps {
    onClose?: () => void;
    isMobile: boolean;
}

export const ThemeEditor: React.FC<ThemeEditorProps> = ({ onClose, isMobile }) => {
  const { theme, setTheme, updateColor, updateTypography, updateEffect, updateSpacing, updateBorderRadius, resetTheme } = useTheme();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

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

  const handlePaletteApply = (colors: { primary: string; secondary: string; accent: string }) => {
      setTheme(prev => ({
          ...prev,
          colors: {
              ...prev.colors,
              primary: colors.primary,
              secondary: colors.secondary,
              accent: colors.accent
          }
      }));
  };

  return (
    <div className="p-6 pb-24 space-y-8 min-h-full">
      <div className="flex items-center justify-between">
         <h2 className="text-xl font-bold text-gray-900 tracking-tight">Theme Architect</h2>
         {isMobile && <button onClick={onClose} className="p-2 text-gray-500">✕</button>}
      </div>

      {/* AI Generator */}
      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
        <label className="block text-xs font-bold text-indigo-900 mb-2 uppercase tracking-wide">✨ Magic Generation</label>
        <textarea 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'Cyberpunk neon city with pink and cyan' or 'Cozy warm coffee shop'"
          className="w-full text-sm p-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 outline-none mb-3 h-20 resize-none bg-white"
        />
        <button 
          onClick={handleMagicTheme}
          disabled={isGenerating || !prompt}
          className={`w-full py-2 rounded-lg text-sm font-semibold text-white transition-all
            ${isGenerating ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'}
          `}
        >
          {isGenerating ? 'Generating...' : 'Generate Theme'}
        </button>
      </div>

      {/* Color Palette Generator Tool */}
      <ColorPaletteGenerator 
        initialColor={theme.colors.primary} 
        onApply={handlePaletteApply}
      />

      {/* Framework Selector */}
      <section>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Framework</h3>
        <div className="grid grid-cols-2 gap-2">
            {FRAMEWORKS.map(fw => (
                <button
                    key={fw.id}
                    onClick={() => setTheme(prev => ({ ...prev, framework: fw.id as FrameworkType }))}
                    className={`
                        text-xs py-2 px-3 rounded-md border text-left transition-all
                        ${theme.framework === fw.id 
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold ring-1 ring-indigo-600' 
                            : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                        }
                    `}
                >
                    {fw.name}
                </button>
            ))}
        </div>
        <p className="text-xs text-gray-500 mt-2 italic">
            {FRAMEWORKS.find(f => f.id === theme.framework)?.description}
        </p>
      </section>

      {/* Colors */}
      <section>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Full Palette</h3>
        <div className="space-y-1">
            <ColorPicker label="Primary" value={theme.colors.primary} onChange={(v) => updateColor('primary', v)} />
            <ColorPicker label="Secondary" value={theme.colors.secondary} onChange={(v) => updateColor('secondary', v)} />
            <ColorPicker label="Background" value={theme.colors.background} onChange={(v) => updateColor('background', v)} />
            <ColorPicker label="Surface" value={theme.colors.surface} onChange={(v) => updateColor('surface', v)} />
            <ColorPicker label="Text Main" value={theme.colors.text} onChange={(v) => updateColor('text', v)} />
            <ColorPicker label="Text Dim" value={theme.colors.textSecondary} onChange={(v) => updateColor('textSecondary', v)} />
            <ColorPicker label="Accent" value={theme.colors.accent} onChange={(v) => updateColor('accent', v)} />
            <ColorPicker label="Success" value={theme.colors.success} onChange={(v) => updateColor('success', v)} />
            <ColorPicker label="Error" value={theme.colors.error} onChange={(v) => updateColor('error', v)} />
        </div>
      </section>

      {/* Typography */}
      <section>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Typography</h3>
        <div className="space-y-4">
            <div>
                <label className="text-xs font-medium text-gray-600 mb-1.5 block">Font Family</label>
                <select 
                    value={theme.typography.fontFamily}
                    onChange={(e) => updateTypography('fontFamily', e.target.value)}
                    className="w-full text-sm border border-gray-200 rounded-md p-2 outline-none focus:border-indigo-500"
                >
                    {FONTS.map(f => (
                        <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                </select>
            </div>
             <div>
                <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-gray-600">Base Font Size</label>
                    <span className="text-xs text-gray-400 font-mono">{theme.typography.baseSize}px</span>
                </div>
                <input 
                    type="range" 
                    min="12" max="24" step="1"
                    value={theme.typography.baseSize}
                    onChange={(e) => updateTypography('baseSize', parseInt(e.target.value))}
                    className="w-full accent-indigo-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
            </div>
            <div>
                 <label className="text-xs font-medium text-gray-600 mb-1.5 block">Heading Weight</label>
                 <div className="flex bg-gray-100 rounded-lg p-1">
                    {['400', '600', '700', '800'].map(w => (
                        <button
                           key={w}
                           onClick={() => updateTypography('headingWeight', w)}
                           className={`flex-1 text-xs py-1 rounded-md transition-all ${theme.typography.headingWeight === w ? 'bg-white shadow text-indigo-600 font-bold' : 'text-gray-500'}`}
                        >
                           {w}
                        </button>
                    ))}
                 </div>
            </div>
        </div>
      </section>

      {/* Component Styles */}
      <section>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Component Styles</h3>
        <div className="space-y-4">
             <div>
                 <label className="text-xs font-medium text-gray-600 mb-1.5 block">Global Button Style</label>
                 <div className="flex gap-2">
                     {['solid', 'outline', 'ghost'].map(s => (
                         <button
                            key={s}
                            onClick={() => setTheme(prev => ({...prev, buttonStyle: s as any}))}
                            className={`flex-1 py-1.5 px-2 text-xs border rounded capitalize ${theme.buttonStyle === s ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-white text-gray-600'}`}
                         >
                             {s}
                         </button>
                     ))}
                 </div>
             </div>
             <div>
                <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-gray-600">Border Width</label>
                    <span className="text-xs text-gray-400 font-mono">{theme.effects.borderWidth}</span>
                </div>
                <input 
                    type="range" 
                    min="0" max="8" step="1"
                    value={parseInt(theme.effects.borderWidth)}
                    onChange={(e) => updateEffect('borderWidth', `${e.target.value}px`)}
                    className="w-full accent-indigo-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
             </div>
        </div>
      </section>

      {/* Shape & Effects */}
      <section>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Shape & Effects</h3>
        <div className="space-y-4">
            <div>
                <label className="text-xs font-medium text-gray-600 mb-1.5 block">Button Radius</label>
                <input 
                    type="range" 
                    min="0" max="32" 
                    value={parseInt(theme.borderRadius.button)}
                    onChange={(e) => updateBorderRadius('button', `${e.target.value}px`)}
                    className="w-full accent-indigo-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
            </div>
            <div>
                <label className="text-xs font-medium text-gray-600 mb-1.5 block">Card Radius</label>
                <input 
                    type="range" 
                    min="0" max="40" 
                    value={parseInt(theme.borderRadius.card)}
                    onChange={(e) => updateBorderRadius('card', `${e.target.value}px`)}
                    className="w-full accent-indigo-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">Small Radius (Inputs)</label>
                    <input 
                        type="text" 
                        value={theme.borderRadius.sm}
                        onChange={(e) => updateBorderRadius('sm', e.target.value)}
                        className="w-full text-xs p-1 border rounded"
                    />
                 </div>
                 <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">Large Radius (Modals)</label>
                    <input 
                        type="text" 
                        value={theme.borderRadius.lg}
                        onChange={(e) => updateBorderRadius('lg', e.target.value)}
                        className="w-full text-xs p-1 border rounded"
                    />
                 </div>
            </div>

            <div>
                <label className="text-xs font-medium text-gray-600 mb-1.5 block">Shadow Depth</label>
                <div className="flex gap-1 flex-wrap">
                    {['none', 'sm', 'md', 'lg', 'hard'].map(s => (
                        <button
                            key={s}
                            onClick={() => updateEffect('shadow', s)}
                            className={`
                                flex-1 py-1 px-2 text-xs rounded border min-w-[3rem]
                                ${theme.effects.shadow === s 
                                    ? 'bg-gray-800 text-white border-gray-800' 
                                    : 'bg-white text-gray-600 border-gray-200'
                                }
                            `}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                 <label className="text-xs font-medium text-gray-900">Glassmorphism Blur</label>
                 <input 
                    type="checkbox"
                    checked={theme.effects.glassBlur}
                    onChange={(e) => updateEffect('glassBlur', e.target.checked)}
                    className="w-4 h-4 accent-indigo-600"
                 />
            </div>
        </div>
      </section>

      {/* Spacing & Layout */}
      <section>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Layout & Spacing</h3>
        <div className="space-y-4">
            <div>
                <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-gray-600">Spacing Unit (4px Grid)</label>
                    <span className="text-xs text-gray-400 font-mono">{theme.spacing.unit}px</span>
                </div>
                 <input 
                    type="range" 
                    min="2" max="12" step="1"
                    value={theme.spacing.unit}
                    onChange={(e) => updateSpacing('unit', parseInt(e.target.value))}
                    className="w-full accent-indigo-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
            </div>
            
            <div>
                 <label className="text-xs font-medium text-gray-600 mb-1.5 block">Page Padding</label>
                 <div className="flex gap-2">
                    <input 
                        type="text"
                        value={theme.spacing.pagePadding}
                        onChange={(e) => updateSpacing('pagePadding', e.target.value)}
                        className="flex-1 text-sm border border-gray-200 rounded-md p-2 outline-none focus:border-indigo-500"
                    />
                 </div>
                 <div className="flex gap-1 mt-2 flex-wrap">
                    {['1rem', '2rem', '4rem', '5vw', '10%'].map(val => (
                        <button 
                            key={val}
                            onClick={() => updateSpacing('pagePadding', val)}
                            className="text-[10px] px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
                        >
                            {val}
                        </button>
                    ))}
                 </div>
            </div>
        </div>
      </section>
      
      <div className="pt-4 border-t">
          <button onClick={resetTheme} className="text-xs text-red-500 hover:text-red-700 underline w-full text-center">
              Reset to Defaults
          </button>
      </div>
    </div>
  );
};