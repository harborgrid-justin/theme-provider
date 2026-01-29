
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';

interface GalleryItemProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
  /* If true, centers content vertically and horizontally with standard padding */
  centered?: boolean;
}

export const GalleryItem: React.FC<GalleryItemProps> = React.memo(({ title, children, className = '', centered = false }) => {
  const { theme } = useTheme();

  // Determine if height class is provided, otherwise default to h-32
  const hasHeightClass = className.includes('h-') || className.includes('min-h-');
  const baseClasses = `flex flex-col group hover:shadow-lg transition-shadow ${hasHeightClass ? '' : 'h-32'} ${className}`;

  return (
      <ThemedCard className={baseClasses}>
          <div className="text-[10px] uppercase font-bold tracking-wider opacity-40 mb-1 truncate px-1 pt-1" style={{ color: theme.colors.text }}>
            {title}
          </div>
          {centered ? (
             <div className="flex-1 min-h-0 w-full h-full flex justify-center items-center p-4 relative overflow-hidden">
                {children}
             </div>
          ) : (
             <div className="flex-1 flex flex-col justify-center relative w-full min-w-0">
                {children}
             </div>
          )}
      </ThemedCard>
  );
});
