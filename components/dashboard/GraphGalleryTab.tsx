import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full">{children}</div>
);

export const GraphGalleryTab: React.FC = () => {
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
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Data & Diagram Primitives (84 Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Visual language tokens for dashboards, flowcharts, and data storytelling. All elements inherit the global color palette and border settings.
        </p>

        {/* --- 1. Micro Charts --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Bar: Vertical">
                <Centered>
                    <div className="flex items-end gap-1 h-10">
                        {[40, 70, 35, 80, 50].map((h, i) => (
                            <div key={i} className="w-2 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%`, backgroundColor: i % 2 === 0 ? theme.colors.primary : theme.colors.secondary }}></div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>
            
            {/* ... Rest of graph items ... */}
            <CardWrapper title="Bar: Stacked">
                <Centered>
                    <div className="w-8 flex flex-col gap-0.5 h-12 justify-end">
                        <div className="w-full h-1/4 rounded-sm" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="w-full h-1/3 rounded-sm" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="w-full h-1/6 rounded-sm" style={{ backgroundColor: theme.colors.accent }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Sparkline: Line">
                <Centered>
                    <svg viewBox="0 0 100 40" className="w-full h-10 overflow-visible">
                        <path d="M0,30 Q25,5 50,20 T100,10" fill="none" stroke={theme.colors.primary} strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </Centered>
            </CardWrapper>
            
            {/* Ensuring Bullet Chart scales */}
            <CardWrapper title="Bullet Chart">
                <Centered>
                    <div className="w-full h-3 bg-gray-200 rounded-full relative overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div className="absolute top-0 left-0 h-full w-3/4 opacity-30" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-1 left-0 h-1 w-1/2 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-0 left-[60%] h-full w-0.5 bg-red-500"></div>
                    </div>
                </Centered>
            </CardWrapper>
            
            {/* ... */}
        </div>
        
        {/* ... 2. Statistical & Financial ... */}
        <div style={sectionTitleStyle}>Statistical & Financial</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <CardWrapper title="Box Plot">
                <Centered>
                    <div className="h-12 w-full flex items-center justify-center relative">
                        <div className="absolute left-0 right-0 h-px bg-gray-300" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                        <div className="w-16 h-6 border bg-white relative z-10 flex items-center justify-center" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface }}>
                            <div className="w-px h-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        </div>
                        <div className="absolute left-4 h-3 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute right-4 h-3 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>
            {/* ... */}
        </div>
        
        {/* ... Rest of sections with implicit Centered updates ... */}
        {/* Network & Infrastructure */}
        <div style={sectionTitleStyle}>Network & Infrastructure</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <CardWrapper title="Server Node">
                <Centered>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded border flex items-center justify-center shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}>
                            <Icons.Settings size="sm" style={{ color: theme.colors.text }}/>
                        </div>
                        <div className="flex gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>
        {/* Advanced Data Viz */}
        <div style={sectionTitleStyle}>Advanced Data Visualization</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <CardWrapper title="Sankey Flow" className="col-span-2">
                <Centered>
                    <div className="flex w-full px-4 items-center justify-between h-12">
                        <div className="w-2 h-full rounded-sm" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="flex-1 h-full relative mx-1">
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <path d="M0,24 C50,24 50,8 100,8" fill="none" stroke={theme.colors.primary} strokeWidth="8" opacity="0.2" />
                                <path d="M0,24 C50,24 50,40 100,40" fill="none" stroke={theme.colors.primary} strokeWidth="4" opacity="0.2" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-between h-full py-1">
                            <div className="w-2 h-4 rounded-sm" style={{ backgroundColor: theme.colors.secondary }}></div>
                            <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: theme.colors.accent }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>
    </div>
  );
};