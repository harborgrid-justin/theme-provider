import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Icon: React.FC<IconProps> = ({ name, size = 'md', className = '', ...props }) => {
  const sizeClasses = {
    sm: 'text-[16px] leading-none',
    md: 'text-[20px] leading-none',
    lg: 'text-[24px] leading-none',
    xl: 'text-[32px] leading-none'
  };

  return (
    <span 
      className={`material-icons select-none ${sizeClasses[size]} ${className}`} 
      style={{ fontSize: sizeClasses[size].split(' ')[0].replace('text-[', '').replace(']', '') }}
      {...props}
    >
      {name}
    </span>
  );
};