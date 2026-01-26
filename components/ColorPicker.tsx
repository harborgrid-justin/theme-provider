import React from 'react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center justify-between py-2 group">
      <label className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{label}</label>
      <div className="flex items-center gap-2">
        <input 
            type="text" 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
            className="w-20 text-xs border border-gray-200 rounded px-1 py-0.5 font-mono text-gray-500 focus:text-gray-900 focus:border-gray-400 outline-none"
        />
        <div className="relative overflow-hidden w-8 h-8 rounded-full shadow-sm border border-gray-100 cursor-pointer">
            <input 
                type="color" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="absolute inset-0 w-[150%] h-[150%] -top-1/4 -left-1/4 cursor-pointer p-0 border-0"
            />
        </div>
      </div>
    </div>
  );
};