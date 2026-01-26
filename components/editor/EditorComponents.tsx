import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const EditorComponents: React.FC = () => {
  const { theme, setTheme, updateEffect } = useTheme();

  return (
    <section className="space-y-6">
        <div className="space-y-5">
             <div className="space-y-2">
                 <label className="text-xs font-medium text-gray-700 block">Button Style</label>
                 <div className="flex gap-2">
                     {['solid', 'outline', 'ghost'].map(s => (
                         <button
                            key={s}
                            onClick={() => setTheme(prev => ({...prev, buttonStyle: s as any}))}
                            className={`flex-1 py-1.5 px-2 text-[10px] font-medium border rounded-md capitalize transition-all ${theme.buttonStyle === s ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'}`}
                         >
                             {s}
                         </button>
                     ))}
                 </div>
             </div>
             
             <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-medium text-gray-700">Border Width</label>
                    <span className="text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 border border-gray-200">{theme.effects.borderWidth}</span>
                </div>
                <input 
                    type="range" 
                    min="0" max="8" step="1"
                    value={parseInt(theme.effects.borderWidth)}
                    onChange={(e) => updateEffect('borderWidth', `${e.target.value}px`)}
                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:bg-gray-200 transition-colors"
                />
             </div>
        </div>
    </section>
  );
};