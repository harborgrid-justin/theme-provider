import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FONTS } from '../../constants';

export const EditorTypography: React.FC = () => {
  const { theme, updateTypography } = useTheme();

  return (
    <section className="space-y-6">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Typography</h3>
        <div className="space-y-4">
            <div>
                <label className="text-xs font-medium text-gray-600 mb-1.5 block">Font Family</label>
                <select 
                    value={theme.typography.fontFamily}
                    onChange={(e) => updateTypography('fontFamily', e.target.value)}
                    className="w-full text-sm border border-gray-200 rounded-md p-2 outline-none focus:border-indigo-500 bg-white"
                >
                    {FONTS.map(f => (
                        <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                </select>
            </div>
             <div>
                <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-gray-600">Base Scale (px)</label>
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
  );
};