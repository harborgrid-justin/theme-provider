import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ThemedCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const { theme } = useTheme();
  
  let classes = "transition-all duration-300 ";
  
  if (theme.framework === 'neobrutalism') {
    classes += "border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ";
  } else if (theme.framework === 'glass') {
    classes += "backdrop-blur-xl bg-white/40 border border-white/40 shadow-xl ";
  } else if (theme.framework === 'terminal') {
    classes += "border border-green-500/50 bg-black text-green-500 shadow-none ";
  } else if (theme.framework === 'material') {
    classes += "shadow-md hover:shadow-lg border-t-4 ";
  } else if (theme.framework === 'lucid') {
    classes += "border border-gray-200 shadow-sm hover:border-gray-400 ";
  } else if (theme.framework === 'fluent') {
    classes += "shadow-[0_1.6px_3.6px_0_rgba(0,0,0,0.13),0_0.3px_0.9px_0_rgba(0,0,0,0.11)] hover:shadow-[0_6.4px_14.4px_0_rgba(0,0,0,0.13),0_1.2px_3.6px_0_rgba(0,0,0,0.11)] border border-gray-100 ";
  } else {
    // Modern & Bootstrap
    classes += `shadow-${theme.effects.shadow} border border-gray-100 `;
  }

  const dynamicStyle: React.CSSProperties = {
    borderRadius: theme.borderRadius.card,
    backgroundColor: theme.framework === 'glass' ? undefined : theme.colors.surface,
    borderColor: theme.framework === 'material' ? theme.colors.primary : undefined, // Top border for material
    padding: `${theme.spacing.unit * 6}px`, // Dynamic padding
  };

  if (theme.framework === 'terminal') {
     dynamicStyle.backgroundColor = '#0c0c0c';
     dynamicStyle.borderColor = theme.colors.primary;
  }
  
  if (theme.framework === 'lucid') {
      dynamicStyle.backgroundColor = '#ffffff';
      // Ensure slight border differentiation
      if (!dynamicStyle.borderColor) dynamicStyle.borderColor = '#e5e7eb';
  }

  return (
    <div className={`${classes} ${className}`} style={dynamicStyle}>
      {children}
    </div>
  );
};