import React from 'react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center justify-between py-2 group hover:bg-gray-50 -mx-2 px-2 rounded-md transition-colors">
      <label className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors cursor-pointer select-none">{label}</label>
      <div className="flex items-center gap-2">
        <input 
            type="text" 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
            className="w-20 text-xs border border-gray-200 rounded px-2 py-1 font-mono text-gray-500 focus:text-gray-900 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition-all text-center uppercase"
        />
        <div className="relative overflow-hidden w-6 h-6 rounded-md shadow-sm border border-gray-200 cursor-pointer ring-offset-1 group-hover:ring-2 ring-transparent group-hover:ring-gray-200 transition-all">
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