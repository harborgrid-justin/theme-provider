import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FrameworkType } from '../../types';

interface ThemedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const ThemedButton: React.FC<ThemedButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  style, 
  ...props 
}) => {
  const { theme } = useTheme();
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  // Determine effective styling based on global preferences
  const isOutlineGlobal = theme.buttonStyle === 'outline' && (variant === 'primary' || variant === 'secondary');
  const isGhostGlobal = theme.buttonStyle === 'ghost' && (variant === 'primary' || variant === 'secondary');

  // Base classes
  let classes = `inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${sizeStyles[size]} `;
  
  // Shadow logic
  if (theme.effects.shadow !== 'none' && variant !== 'ghost' && !isGhostGlobal) {
     classes += theme.effects.shadow === 'hard' 
        ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ' 
        : `shadow-${theme.effects.shadow} `;
  }

  // Framework font & style adjustments
  if (theme.framework === 'material') classes += 'uppercase tracking-wider font-medium ';
  else if (theme.framework === 'neobrutalism') classes += 'font-bold uppercase border-2 border-black ';
  else if (theme.framework === 'terminal') classes += 'font-mono uppercase tracking-widest ';
  else if (theme.framework === 'lucid') classes += 'font-semibold tracking-tight border border-gray-900 ';
  else if (theme.framework === 'fluent') classes += 'font-semibold tracking-wide '; // Fluent usually standard weight or semibold
  else classes += 'font-medium ';

  // Dynamic Styles
  const dynamicStyle: React.CSSProperties = { 
      borderRadius: theme.borderRadius.button,
      ...style 
  };
  
  // Handle Border Width (except for frameworks that enforce their own)
  if (theme.framework !== 'neobrutalism' && theme.framework !== 'terminal' && theme.framework !== 'lucid' && theme.framework !== 'fluent') {
      dynamicStyle.borderWidth = theme.effects.borderWidth;
  }

  // Color Logic
  if (variant === 'ghost' || isGhostGlobal) {
      dynamicStyle.backgroundColor = 'transparent';
      dynamicStyle.color = variant === 'secondary' ? theme.colors.textSecondary : theme.colors.primary;
      dynamicStyle.borderColor = 'transparent';
      classes += "hover:bg-gray-100/50 ";
  } else if (variant === 'outline' || isOutlineGlobal) {
      const color = variant === 'secondary' ? theme.colors.secondary : theme.colors.primary;
      dynamicStyle.backgroundColor = 'transparent';
      dynamicStyle.borderColor = color;
      dynamicStyle.color = color;
      classes += "hover:bg-gray-50 ";
  } else {
      // Solid (Primary/Secondary)
      const baseColor = variant === 'secondary' ? theme.colors.secondary : theme.colors.primary;
      dynamicStyle.backgroundColor = baseColor;
      dynamicStyle.borderColor = baseColor;
      dynamicStyle.color = '#ffffff'; // Assuming light text on colored buttons for now
      classes += "hover:opacity-90 active:scale-[0.98] ";
  }

  // Framework Overrides
  if (theme.framework === 'neobrutalism') {
     dynamicStyle.borderRadius = '0px';
     dynamicStyle.borderWidth = '2px';
     dynamicStyle.borderColor = '#000000';
     if (variant === 'primary') dynamicStyle.backgroundColor = theme.colors.primary;
     if (variant === 'secondary') dynamicStyle.backgroundColor = theme.colors.secondary;
     dynamicStyle.color = '#000000';
     
     classes += "hover:-translate-y-1 hover:translate-x-1 active:translate-x-0 active:translate-y-0 active:shadow-none ";
  }
  
  if (theme.framework === 'glass') {
      classes += "backdrop-blur-md border border-white/20 shadow-lg ";
      if (variant === 'primary') {
         dynamicStyle.backgroundColor = `${theme.colors.primary}99`; // Opacity
      }
  }
  
  if (theme.framework === 'terminal') {
      dynamicStyle.borderRadius = '0px';
      dynamicStyle.borderWidth = '1px';
      dynamicStyle.borderColor = theme.colors.primary;
      dynamicStyle.color = theme.colors.primary;
      dynamicStyle.backgroundColor = 'transparent';
      
      if (variant === 'primary') {
          dynamicStyle.backgroundColor = theme.colors.primary;
          dynamicStyle.color = '#000000';
      }
      classes += "hover:bg-green-900/20 ";
  }

  if (theme.framework === 'lucid') {
      // Lucid: Crisp borders, usually white background or very stark colors
      if (variant !== 'ghost') {
          dynamicStyle.borderWidth = '1px';
          dynamicStyle.borderColor = theme.colors.text; // Dark borders usually
          
          if (variant === 'primary') {
              dynamicStyle.backgroundColor = theme.colors.primary;
              dynamicStyle.color = '#ffffff';
          } else if (variant === 'secondary') {
              dynamicStyle.backgroundColor = 'white';
              dynamicStyle.color = theme.colors.text;
          }
      }
      classes += "hover:brightness-110 shadow-sm ";
  }

  if (theme.framework === 'fluent') {
      if (variant === 'primary' && !isOutlineGlobal && !isGhostGlobal) {
          // Fluent specific: subtly darker hover, very subtle click scale (desktop feel)
          classes += "hover:brightness-95 active:scale-[0.97] transition-all duration-100 ";
      }
      if (variant === 'secondary' || isOutlineGlobal) {
         dynamicStyle.borderWidth = '1px';
         dynamicStyle.borderColor = theme.colors.textSecondary + '40'; // Much softer border
         dynamicStyle.color = theme.colors.text;
         if (variant === 'secondary') dynamicStyle.backgroundColor = '#ffffff';
         classes += "hover:bg-gray-50 active:scale-[0.97] ";
      }
  }

  return (
    <button className={`${classes} ${className}`} style={dynamicStyle} {...props}>
      {children}
    </button>
  );
};