import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ThemedInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const { theme } = useTheme();
  
  let classes = "w-full px-4 py-2 outline-none transition-all ";
  
  if (theme.framework === 'neobrutalism') {
    classes += "border-2 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:translate-x-1 font-bold ";
  } else if (theme.framework === 'glass') {
    classes += "bg-white/20 border border-white/30 text-gray-800 placeholder-gray-500 focus:bg-white/40 ";
  } else if (theme.framework === 'material') {
    classes += "bg-gray-100 border-b-2 border-gray-300 focus:border-primary focus:bg-gray-50 rounded-t-md px-3 ";
  } else if (theme.framework === 'terminal') {
    classes += "bg-transparent border-b border-green-500/50 text-green-400 placeholder-green-800 focus:border-green-400 font-mono ";
  } else if (theme.framework === 'lucid') {
    classes += "bg-white border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 ";
  } else if (theme.framework === 'fluent') {
    // Fluent: White bg, light border, bottom border highlight on focus, NO ring
    classes += "bg-white border border-gray-300 focus:border-b-2 focus:ring-0 ";
  } else {
    // Modern & Bootstrap
    classes += "focus:ring-2 focus:border-transparent ";
  }

  const dynamicStyle: React.CSSProperties = {
    borderRadius: theme.framework === 'material' ? '0.25rem 0.25rem 0 0' : theme.borderRadius.sm,
  };

  // Apply customizable border width for frameworks that support it
  if (theme.framework === 'modern' || theme.framework === 'bootstrap') {
     dynamicStyle.borderWidth = theme.effects.borderWidth;
     dynamicStyle.borderColor = '#d1d5db'; // gray-300
     dynamicStyle.borderStyle = 'solid';
     dynamicStyle.borderRadius = theme.borderRadius.md;
  }
  
  // Enforce sharp corners for lucid if desired, or just use theme radius
  if (theme.framework === 'lucid') {
     dynamicStyle.borderWidth = '1px';
  }

  // Fluent: 1px default, focus is handled by class but we ensure solid style
  if (theme.framework === 'fluent') {
      dynamicStyle.borderWidth = '1px';
      // We manually override borderColor on focus via class, but base is needed
      if (!dynamicStyle.borderColor) dynamicStyle.borderColor = '#e5e7eb';
      // We use the primary color for the active bottom border
      dynamicStyle.borderBottomColor = theme.colors.primary; 
  }

  return (
    <input 
      {...props} 
      className={classes} 
      style={{
         ...dynamicStyle,
      }}
    />
  );
};