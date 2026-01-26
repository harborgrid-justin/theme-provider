import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const EditorLayout: React.FC = () => {
  const { theme, updateSpacing } = useTheme();

  return (
    <section className="space-y-6">
        <div className="space-y-5">
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-medium text-gray-700">Grid Unit</label>
                    <span className="text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 border border-gray-200">{theme.spacing.unit}px</span>
                </div>
                 <input 
                    type="range" 
                    min="2" max="12" step="1"
                    value={theme.spacing.unit}
                    onChange={(e) => updateSpacing('unit', parseInt(e.target.value))}
                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:bg-gray-200 transition-colors"
                />
            </div>
            
            <div className="space-y-2">
                 <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-gray-700 block">Page Padding</label>
                 </div>
                 <div className="flex gap-2">
                    <input 
                        type="text"
                        value={theme.spacing.pagePadding}
                        onChange={(e) => updateSpacing('pagePadding', e.target.value)}
                        className="w-full text-xs border border-gray-200 rounded-md p-2 outline-none focus:border-indigo-500 font-mono text-center"
                    />
                 </div>
                 <div className="grid grid-cols-5 gap-1 pt-1">
                    {['1rem', '2rem', '4rem', '5vw', '10%'].map(val => (
                        <button 
                            key={val}
                            onClick={() => updateSpacing('pagePadding', val)}
                            className={`text-[10px] px-1 py-1.5 rounded border transition-all ${theme.spacing.pagePadding === val ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-bold' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                        >
                            {val}
                        </button>
                    ))}
                 </div>
            </div>
        </div>
    </section>
  );
};