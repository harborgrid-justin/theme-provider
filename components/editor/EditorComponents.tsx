import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const EditorComponents: React.FC = () => {
  const { theme, setTheme, updateEffect } = useTheme();

  return (
    <section className="space-y-6">
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
    </section>
  );
};