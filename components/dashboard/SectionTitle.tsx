import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '', style }) => {
  const { theme } = useTheme();

  const baseStyle: React.CSSProperties = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    marginTop: '3rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`,
    ...style
  };

  return <div style={baseStyle} className={className}>{children}</div>;
};