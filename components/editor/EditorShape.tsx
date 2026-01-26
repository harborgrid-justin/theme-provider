import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const EditorShape: React.FC = () => {
  const { theme, updateBorderRadius, updateEffect } = useTheme();

  return (
    <section className="space-y-6">
        <div className="space-y-5">
            {/* Sliders */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-medium text-gray-700">Button Radius</label>
                    <span className="text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 border border-gray-200">{theme.borderRadius.button}</span>
                </div>
                <input 
                    type="range" 
                    min="0" max="32" 
                    value={parseInt(theme.borderRadius.button)}
                    onChange={(e) => updateBorderRadius('button', `${e.target.value}px`)}
                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:bg-gray-200 transition-colors"
                />
            </div>
            
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-medium text-gray-700">Card Radius</label>
                    <span className="text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 border border-gray-200">{theme.borderRadius.card}</span>
                </div>
                <input 
                    type="range" 
                    min="0" max="40" 
                    value={parseInt(theme.borderRadius.card)}
                    onChange={(e) => updateBorderRadius('card', `${e.target.value}px`)}
                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:bg-gray-200 transition-colors"
                />
            </div>
            
            {/* Grid Inputs */}
            <div className="grid grid-cols-2 gap-3">
                 <div>
                    <label className="text-xs font-medium text-gray-700 mb-1.5 block">Small Radius</label>
                    <input 
                        type="text" 
                        value={theme.borderRadius.sm}
                        onChange={(e) => updateBorderRadius('sm', e.target.value)}
                        className="w-full text-xs p-2 border border-gray-200 rounded-md outline-none focus:border-indigo-500 text-center font-mono"
                    />
                 </div>
                 <div>
                    <label className="text-xs font-medium text-gray-700 mb-1.5 block">Large Radius</label>
                    <input 
                        type="text" 
                        value={theme.borderRadius.lg}
                        onChange={(e) => updateBorderRadius('lg', e.target.value)}
                        className="w-full text-xs p-2 border border-gray-200 rounded-md outline-none focus:border-indigo-500 text-center font-mono"
                    />
                 </div>
            </div>

            {/* Shadow Select */}
            <div className="space-y-2">
                <label className="text-xs font-medium text-gray-700 block">Shadow Depth</label>
                <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
                    {['none', 'sm', 'md', 'lg', 'hard'].map(s => (
                        <button
                            key={s}
                            onClick={() => updateEffect('shadow', s)}
                            className={`
                                flex-1 py-1.5 px-1 text-[10px] font-medium rounded-md transition-all uppercase tracking-wide
                                ${theme.effects.shadow === s 
                                    ? 'bg-white shadow-sm text-indigo-600 ring-1 ring-black/5' 
                                    : 'text-gray-500 hover:text-gray-700'
                                }
                            `}
                        >
                            {s === 'hard' ? 'Hard' : s}
                        </button>
                    ))}
                </div>
            </div>

            {/* Toggle */}
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => updateEffect('glassBlur', !theme.effects.glassBlur)}>
                 <label className="text-xs font-medium text-gray-700 cursor-pointer">Glassmorphism Blur</label>
                 <div className={`w-8 h-4 rounded-full relative transition-colors ${theme.effects.glassBlur ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                     <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${theme.effects.glassBlur ? 'left-4.5 translate-x-0.5' : 'left-0.5'}`}></div>
                 </div>
            </div>
        </div>
    </section>
  );
};