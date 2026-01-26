import React, { useState, useEffect } from 'react';
import { generatePalettes, Palette } from '../utils/colorUtils';
import { toast } from './ui/Toaster';

interface ColorPaletteGeneratorProps {
  onApply: (colors: { primary: string; secondary: string; accent: string }) => void;
  initialColor: string;
}

export const ColorPaletteGenerator: React.FC<ColorPaletteGeneratorProps> = ({ onApply, initialColor }) => {
  const [baseColor, setBaseColor] = useState(initialColor);
  const [palettes, setPalettes] = useState<Palette[]>([]);

  useEffect(() => {
    setPalettes(generatePalettes(baseColor));
  }, [baseColor]);

  const handleApply = (palette: Palette) => {
    // Map palette colors to theme roles
    const primary = palette.colors[0]; // Base is usually primary
    const secondary = palette.colors[1]; 
    const accent = palette.colors[2] || palette.colors[1]; // Fallback for 2-color palettes

    onApply({ primary, secondary, accent });
    toast.success(`Applied ${palette.name} palette`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-gray-900 uppercase tracking-wide">🎨 Palette Generator</label>
        <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Base</span>
            <div className="relative overflow-hidden w-6 h-6 rounded-full shadow-sm border border-gray-200 cursor-pointer">
                <input 
                    type="color" 
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="absolute inset-0 w-[150%] h-[150%] -top-1/4 -left-1/4 cursor-pointer p-0 border-0"
                />
            </div>
        </div>
      </div>

      <div className="space-y-3">
        {palettes.map((p) => (
          <div key={p.name} className="group">
             <div className="flex items-center justify-between mb-1.5">
                 <span className="text-xs font-medium text-gray-600">{p.name}</span>
                 <button 
                    onClick={() => handleApply(p)}
                    className="text-[10px] font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wide bg-indigo-50 px-2 py-0.5 rounded hover:bg-indigo-100"
                 >
                    Apply
                 </button>
             </div>
             <div 
                className="flex h-8 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow ring-1 ring-gray-100"
                onClick={() => handleApply(p)}
             >
                {p.colors.map((c, i) => (
                    <div 
                        key={i} 
                        style={{ backgroundColor: c }} 
                        className="flex-1 transition-all hover:flex-[1.5]"
                        title={c}
                    />
                ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};