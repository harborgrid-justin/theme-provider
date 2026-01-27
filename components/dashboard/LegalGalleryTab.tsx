import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full">{children}</div>
);

export const LegalGalleryTab: React.FC = () => {
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
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Legal Micro-Elements (45 Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Specialized UI tokens for contract management, compliance, and legal workflows. 
        </p>

        {/* Micro Elements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {/* --- 1. Document Statuses --- */}
            <CardWrapper title="Status: Draft">
                <Centered>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border border-dashed whitespace-nowrap" style={{ borderColor: theme.colors.text + '60', color: theme.colors.textSecondary }}>
                        Draft v0.1
                    </span>
                </Centered>
            </CardWrapper>
            {/* ... Rest of legal items ... */}
        </div>
        
        {/* ... */}
        
        <div style={sectionTitleStyle}>Complex Legal Modules</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
             <CardWrapper title="Contract Header" className="col-span-2 md:col-span-6 min-h-[100px]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        <div className="w-12 h-12 rounded flex items-center justify-center shadow-sm border shrink-0" style={{ backgroundColor: theme.colors.error + '10', borderColor: theme.colors.error + '20', color: theme.colors.error }}>
                             <Icons.File size="lg"/>
                        </div>
                        <div className="min-w-0 flex-1">
                             <div className="text-xl font-bold truncate" style={{ color: theme.colors.text }}>Master Services Agreement</div>
                             <div className="flex items-center gap-3 text-xs opacity-60 flex-wrap" style={{ color: theme.colors.text }}>
                                 <span className="whitespace-nowrap">ID: MSA-2024-99</span>
                                 <span className="hidden sm:inline">•</span>
                                 <span className="whitespace-nowrap">Last edit: 2 hrs ago</span>
                             </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto shrink-0 justify-end">
                        <ThemedButton size="sm" variant="outline" className="flex-1 md:flex-none whitespace-nowrap">Export PDF</ThemedButton>
                        <ThemedButton size="sm" className="flex-1 md:flex-none whitespace-nowrap">Send for Sign</ThemedButton>
                    </div>
                </div>
            </CardWrapper>
        </div>
    </div>
  );
};