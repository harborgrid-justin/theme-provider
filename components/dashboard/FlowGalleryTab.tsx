import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full">{children}</div>
);

export const FlowGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const sectionTitleStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    marginTop: '3rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  const CardWrapper = ({ children, title, className = '' }: { children?: React.ReactNode, title: string, className?: string }) => (
      <ThemedCard className={`flex flex-col justify-between h-full group hover:shadow-lg transition-shadow min-h-[120px] ${className}`}>
          <div className="text-[10px] uppercase font-bold tracking-wider opacity-40 mb-3 truncate" style={{ color: theme.colors.text }}>{title}</div>
          <div className="flex-1 flex flex-col justify-center relative w-full min-w-0">
            {children}
          </div>
      </ThemedCard>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Flow & Process Gallery (48 Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Standardized shapes and connectors for Flowcharts, BPMN, and Logic diagrams.
        </p>

        {/* --- 1. Standard Flow Shapes --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Start / End">
                <Centered>
                    <div className="px-4 py-1.5 border-2 rounded-full text-[10px] font-bold" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>
                        START
                    </div>
                </Centered>
            </CardWrapper>
            
            {/* ... Rest of flow items, relying on Updated Centered ... */}
            <CardWrapper title="Process">
                <Centered>
                    <div className="px-4 py-2 border text-[10px] font-medium shadow-sm" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface, color: theme.colors.text }}>
                        Action
                    </div>
                </Centered>
            </CardWrapper>
            
            {/* ... */}
        </div>
        
        {/* ... */}
    </div>
  );
};