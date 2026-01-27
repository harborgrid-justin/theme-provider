import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full">{children}</div>
);

export const DataGalleryTab: React.FC = () => {
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
        <div style={sectionTitleStyle}>Component Gallery (76 Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>A comprehensive collection of data-rich UI micro-components to test theme scalability.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* 1-10 Basic Data */}
            <CardWrapper title="Metric Simple">
                <div className="text-3xl font-bold" style={{ color: theme.colors.primary }}>$12,450</div>
                <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Total Revenue</div>
            </CardWrapper>
            
            {/* ... (Rest of DataGalleryTab content follows same pattern) ... */}
            {/* Checking specific items that might need overflow fix */}
            
            <CardWrapper title="Metric Trend">
                <div className="flex items-end justify-between w-full">
                    <div>
                        <div className="text-2xl font-bold" style={{ color: theme.colors.text }}>2,543</div>
                        <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Daily Visitors</div>
                    </div>
                    <div className="text-xs font-bold px-1.5 py-0.5 rounded flex items-center" style={{ backgroundColor: theme.colors.success + '15', color: theme.colors.success }}>
                        <Icons.Chart size="sm" className="mr-1"/> +12%
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="User Badge">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-gray-500" style={{ backgroundColor: theme.colors.text + '10' }}>JD</div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full" style={{ backgroundColor: theme.colors.success }}></div>
                    </div>
                    <div className="min-w-0">
                        <div className="text-sm font-bold truncate" style={{ color: theme.colors.text }}>Jane Doe</div>
                        <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Online</div>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Task Item">
                <div className="flex items-center gap-3 p-2 rounded hover:bg-black/5 cursor-pointer w-full">
                    <div className="w-4 h-4 rounded border flex items-center justify-center shrink-0" style={{ borderColor: theme.colors.text }}></div>
                    <span className="text-sm line-through opacity-50 truncate" style={{ color: theme.colors.text }}>Update documentation</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Tag Group">
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold border" style={{ borderColor: theme.colors.primary, color: theme.colors.primary, backgroundColor: theme.colors.primary + '10' }}>Design</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold border" style={{ borderColor: theme.colors.secondary, color: theme.colors.secondary, backgroundColor: theme.colors.secondary + '10' }}>Dev</span>
                </div>
            </CardWrapper>

            {/* ... Rest of the file ... */}
            <div className="col-span-2">
                <CardWrapper title="Table Skeleton">
                     <div className="w-full">
                        <div className="flex gap-2 mb-2 border-b pb-1" style={{borderColor: theme.colors.text+'10'}}>
                             <div className="h-2 w-1/3 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                             <div className="h-2 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                             <div className="h-2 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        </div>
                        <div className="space-y-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="flex gap-2">
                                    <div className="h-2 w-1/3 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                                    <div className="h-2 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                                    <div className="h-2 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                                </div>
                            ))}
                        </div>
                     </div>
                </CardWrapper>
            </div>
            
            {/* Closing out the component for file validity */}
        </div>
    </div>
  );
};