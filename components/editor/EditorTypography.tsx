import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FONTS } from '../../constants';

export const EditorTypography: React.FC = () => {
  const { theme, updateTypography } = useTheme();

  return (
    <section className="space-y-6">
        <div className="space-y-5">
            {/* Font Family Row */}
            <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700">Typeface</label>
                <div className="relative w-40">
                    <select 
                        value={theme.typography.fontFamily}
                        onChange={(e) => updateTypography('fontFamily', e.target.value)}
                        className="w-full text-xs border border-gray-200 rounded-md py-1.5 pl-2 pr-6 outline-none focus:border-indigo-500 bg-white appearance-none cursor-pointer hover:border-gray-300 transition-colors"
                    >
                        {FONTS.map(f => (
                            <option key={f.id} value={f.id}>{f.name}</option>
                        ))}
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>

            {/* Base Size Stacked */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-medium text-gray-700">Base Scale</label>
                    <span className="text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 border border-gray-200">{theme.typography.baseSize}px</span>
                </div>
                <input 
                    type="range" 
                    min="12" max="24" step="1"
                    value={theme.typography.baseSize}
                    onChange={(e) => updateTypography('baseSize', parseInt(e.target.value))}
                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:bg-gray-200 transition-colors"
                />
            </div>
            
            {/* Heading Weight Stacked */}
            <div className="space-y-2">
                 <label className="text-xs font-medium text-gray-700 block">Heading Weight</label>
                 <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
                    {['400', '600', '700', '800'].map(w => (
                        <button
                           key={w}
                           onClick={() => updateTypography('headingWeight', w)}
                           className={`flex-1 text-[10px] font-medium py-1.5 rounded-md transition-all ${theme.typography.headingWeight === w ? 'bg-white shadow-sm text-indigo-600 ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                           {w}
                        </button>
                    ))}
                 </div>
            </div>
        </div>
    </section>
  );
};