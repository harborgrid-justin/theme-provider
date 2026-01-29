
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

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

  const isOutlineGlobal = theme.buttonStyle === 'outline' && (variant === 'primary' || variant === 'secondary');
  const isGhostGlobal = theme.buttonStyle === 'ghost' && (variant === 'primary' || variant === 'secondary');

  const shadowClass = (theme.effects.shadow !== 'none' && variant !== 'ghost' && !isGhostGlobal)
    ? (theme.effects.shadow === 'hard' ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : `shadow-${theme.effects.shadow}`)
    : '';

  const frameworkClasses = {
      material: 'uppercase tracking-wider font-medium',
      neobrutalism: 'font-bold uppercase border-2 border-black hover:-translate-y-1 hover:translate-x-1 active:translate-x-0 active:translate-y-0 active:shadow-none',
      terminal: 'font-mono uppercase tracking-widest hover:bg-green-900/20',
      lucid: 'font-semibold tracking-tight border border-gray-900 hover:brightness-110 shadow-sm',
      fluent: 'font-semibold tracking-wide hover:brightness-95 active:scale-[0.97] transition-all duration-100',
      glass: 'backdrop-blur-md border border-white/20 shadow-lg',
      modern: 'font-medium hover:opacity-90 active:scale-[0.98]',
      bootstrap: 'font-medium',
  };

  const dynamicStyle: React.CSSProperties = { 
      borderRadius: theme.borderRadius.button,
      ...style 
  };
  
  // Framework specific logic remains for complex style injections
  if (['modern', 'bootstrap', 'material'].includes(theme.framework)) {
      dynamicStyle.borderWidth = theme.effects.borderWidth;
  }

  // Color Logic
  if (variant === 'ghost' || isGhostGlobal) {
      dynamicStyle.backgroundColor = 'transparent';
      dynamicStyle.color = variant === 'secondary' ? theme.colors.textSecondary : theme.colors.primary;
      dynamicStyle.borderColor = 'transparent';
  } else if (variant === 'outline' || isOutlineGlobal) {
      const color = variant === 'secondary' ? theme.colors.secondary : theme.colors.primary;
      dynamicStyle.backgroundColor = 'transparent';
      dynamicStyle.borderColor = color;
      dynamicStyle.color = color;
  } else {
      // Solid
      const baseColor = variant === 'secondary' ? theme.colors.secondary : theme.colors.primary;
      dynamicStyle.backgroundColor = baseColor;
      dynamicStyle.borderColor = baseColor;
      dynamicStyle.color = '#ffffff'; 
  }

  // Framework Overrides (Specific Style Injection)
  if (theme.framework === 'neobrutalism') {
     dynamicStyle.borderRadius = '0px';
     dynamicStyle.borderColor = '#000000';
     dynamicStyle.color = '#000000';
     if (variant === 'primary' || variant === 'secondary') {
         dynamicStyle.backgroundColor = variant === 'secondary' ? theme.colors.secondary : theme.colors.primary;
     }
  }
  
  if (theme.framework === 'glass' && variant === 'primary') {
      dynamicStyle.backgroundColor = `${theme.colors.primary}99`;
  }
  
  if (theme.framework === 'terminal') {
      dynamicStyle.borderRadius = '0px';
      dynamicStyle.borderColor = theme.colors.primary;
      dynamicStyle.color = theme.colors.primary;
      if (variant === 'primary') {
          dynamicStyle.backgroundColor = theme.colors.primary;
          dynamicStyle.color = '#000000';
      } else {
          dynamicStyle.backgroundColor = 'transparent';
      }
  }

  if (theme.framework === 'lucid' && variant !== 'ghost') {
      dynamicStyle.borderWidth = '1px';
      dynamicStyle.borderColor = theme.colors.text;
      if (variant === 'primary') {
          dynamicStyle.backgroundColor = theme.colors.primary;
          dynamicStyle.color = '#ffffff';
      } else if (variant === 'secondary') {
          dynamicStyle.backgroundColor = 'white';
          dynamicStyle.color = theme.colors.text;
      }
  }

  return (
    <button 
        className={cn(
            'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1',
            sizeStyles[size],
            shadowClass,
            // @ts-ignore
            frameworkClasses[theme.framework] || 'font-medium',
            variant === 'ghost' && 'hover:bg-gray-100/50',
            (variant === 'outline' || isOutlineGlobal) && 'hover:bg-gray-50',
            className
        )} 
        style={dynamicStyle} 
        aria-label={typeof children === 'string' ? children : undefined}
        {...props}
    >
      {children}
    </button>
  );
};
