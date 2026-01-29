
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeSlider } from '../ui-elements/ThemeSlider';

export const EditorLayout: React.FC = () => {
  const { theme, updateSpacing } = useTheme();

  return (
    <section className="space-y-6">
        <div className="space-y-5">
            <div className="space-y-2">
                <label className="text-xs font-medium text-gray-700 block">Density & Scale</label>
                <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
                    {[
                        { label: 'Compact', val: 0.85 }, 
                        { label: 'Normal', val: 1 }, 
                        { label: 'Spacious', val: 1.15 }
                    ].map(opt => (
                        <button
                            key={opt.label}
                            onClick={() => updateSpacing('density', opt.val)}
                            className={`
                                flex-1 py-1.5 px-1 text-[10px] font-medium rounded-md transition-all
                                ${theme.spacing.density === opt.val 
                                    ? 'bg-white shadow-sm text-indigo-600 ring-1 ring-black/5' 
                                    : 'text-gray-500 hover:text-gray-700'
                                }
                            `}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <ThemeSlider 
                label="Grid Unit"
                value={theme.spacing.unit}
                min={2}
                max={12}
                onChange={(v) => updateSpacing('unit', v)}
            />
            
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
