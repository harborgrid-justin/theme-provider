
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeSliderProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}

export const ThemeSlider: React.FC<ThemeSliderProps> = ({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1,
  unit = 'px'
}) => {
  return (
    <div className="space-y-2">
        <div className="flex justify-between items-center">
            <label className="text-xs font-medium text-gray-700">{label}</label>
            <span className="text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 border border-gray-200">
                {value}{unit}
            </span>
        </div>
        <input 
            type="range" 
            min={min} 
            max={max} 
            step={step}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:bg-gray-200 transition-colors"
        />
    </div>
  );
};
