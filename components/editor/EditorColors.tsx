import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ColorPicker } from '../ColorPicker';
import { ColorPaletteGenerator } from '../ColorPaletteGenerator';

export const EditorColors: React.FC = () => {
  const { theme, updateColor, setTheme } = useTheme();

  const handlePaletteApply = (colors: { primary: string; secondary: string; accent: string }) => {
    setTheme(prev => ({
        ...prev,
        colors: {
            ...prev.colors,
            primary: colors.primary,
            secondary: colors.secondary,
            accent: colors.accent
        }
    }));
  };

  return (
    <section className="space-y-6">
        <ColorPaletteGenerator 
            initialColor={theme.colors.primary} 
            onApply={handlePaletteApply}
        />
        
        <div>
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">Semantic Palette</h3>
            <div className="space-y-1">
                <ColorPicker label="Primary" value={theme.colors.primary} onChange={(v) => updateColor('primary', v)} />
                <ColorPicker label="Secondary" value={theme.colors.secondary} onChange={(v) => updateColor('secondary', v)} />
                <ColorPicker label="Accent" value={theme.colors.accent} onChange={(v) => updateColor('accent', v)} />
                <div className="h-px bg-gray-100 my-2"></div>
                <ColorPicker label="Background" value={theme.colors.background} onChange={(v) => updateColor('background', v)} />
                <ColorPicker label="Surface" value={theme.colors.surface} onChange={(v) => updateColor('surface', v)} />
                <div className="h-px bg-gray-100 my-2"></div>
                <ColorPicker label="Text Main" value={theme.colors.text} onChange={(v) => updateColor('text', v)} />
                <ColorPicker label="Text Dim" value={theme.colors.textSecondary} onChange={(v) => updateColor('textSecondary', v)} />
                <div className="h-px bg-gray-100 my-2"></div>
                <ColorPicker label="Success" value={theme.colors.success} onChange={(v) => updateColor('success', v)} />
                <ColorPicker label="Error" value={theme.colors.error} onChange={(v) => updateColor('error', v)} />
            </div>
        </div>
    </section>
  );
};