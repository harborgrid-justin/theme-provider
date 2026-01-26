import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const EditorShape: React.FC = () => {
  const { theme, updateBorderRadius, updateEffect } = useTheme();

  return (
    <section className="space-y-6">
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
                        className="w-full text-xs p-2 border rounded outline-none focus:border-indigo-500"
                    />
                 </div>
                 <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">Large Radius (Modal)</label>
                    <input 
                        type="text" 
                        value={theme.borderRadius.lg}
                        onChange={(e) => updateBorderRadius('lg', e.target.value)}
                        className="w-full text-xs p-2 border rounded outline-none focus:border-indigo-500"
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
  );
};