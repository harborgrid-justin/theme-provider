import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const EditorLayout: React.FC = () => {
  const { theme, updateSpacing } = useTheme();

  return (
    <section className="space-y-6">
        <div className="space-y-4">
            <div>
                <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-gray-600">Spacing Unit (Grid)</label>
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
  );
};