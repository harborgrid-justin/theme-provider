import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full overflow-hidden">{children}</div>
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
            
            <CardWrapper title="Process">
                <Centered>
                    <div className="px-4 py-2 border text-[10px] font-medium shadow-sm" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface, color: theme.colors.text }}>
                        Action
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Decision">
                <Centered>
                    <div className="w-10 h-10 border transform rotate-45 flex items-center justify-center shadow-sm" style={{ borderColor: theme.colors.secondary, backgroundColor: theme.colors.surface }}>
                        <span className="transform -rotate-45 text-[8px] font-bold text-center" style={{ color: theme.colors.text }}>?</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Input / Output">
                <Centered>
                    <div className="px-4 py-2 border text-[10px] font-medium transform -skew-x-12 shadow-sm" style={{ borderColor: theme.colors.accent, backgroundColor: theme.colors.surface, color: theme.colors.text }}>
                        <span className="transform skew-x-12 block">Data</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Document">
                 <Centered>
                    <div className="w-10 h-8 border relative bg-white shadow-sm flex items-center justify-center text-[8px]" style={{ borderColor: theme.colors.text }}>
                        Doc
                        <div className="absolute -bottom-2 left-0 w-full h-4 bg-white border-b border-l border-r" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0', borderColor: theme.colors.text }}></div>
                    </div>
                 </Centered>
            </CardWrapper>
            
            <CardWrapper title="Database">
                <Centered>
                    <div className="w-8 h-10 border-l border-r relative flex items-center justify-center" style={{ borderColor: theme.colors.text }}>
                         <div className="absolute -top-1.5 w-full h-3 border rounded-full bg-white" style={{ borderColor: theme.colors.text }}></div>
                         <div className="absolute -bottom-1.5 w-full h-3 border-b border-l border-r rounded-b-full bg-white" style={{ borderColor: theme.colors.text }}></div>
                         <span className="text-[8px]">DB</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Connector: Straight">
                <Centered>
                    <div className="w-full h-px bg-gray-400 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-400"></div>
                    </div>
                </Centered>
            </CardWrapper>
            
            <CardWrapper title="Connector: Elbow">
                <Centered>
                    <div className="w-full h-8 relative">
                        <div className="absolute left-1/4 top-1/2 w-1/4 h-px bg-gray-400"></div>
                        <div className="absolute left-1/2 top-0 h-1/2 w-px bg-gray-400"></div>
                        <div className="absolute left-1/2 top-0 w-1/4 h-px bg-gray-400"></div>
                    </div>
                </Centered>
            </CardWrapper>
            
             <CardWrapper title="Subroutine">
                <Centered>
                    <div className="px-2 py-2 border flex justify-between items-center w-full max-w-[80px]" style={{ borderColor: theme.colors.text }}>
                        <div className="w-1 h-4 border-r"></div>
                        <span className="text-[8px]">Sub</span>
                        <div className="w-1 h-4 border-l"></div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>
        
        <div style={sectionTitleStyle}>BPMN Elements</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Event: Start">
                 <Centered>
                     <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={{borderColor: theme.colors.text}}></div>
                 </Centered>
            </CardWrapper>
            
            <CardWrapper title="Event: Intermediate">
                 <Centered>
                     <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center" style={{borderColor: theme.colors.text}}>
                         <div className="w-6 h-6 rounded-full border"></div>
                     </div>
                 </Centered>
            </CardWrapper>
            
             <CardWrapper title="Event: End">
                 <Centered>
                     <div className="w-8 h-8 rounded-full border-4 flex items-center justify-center" style={{borderColor: theme.colors.text}}></div>
                 </Centered>
            </CardWrapper>
            
            <CardWrapper title="Gateway: XOR">
                 <Centered>
                     <div className="w-8 h-8 border transform rotate-45 flex items-center justify-center" style={{borderColor: theme.colors.text}}>
                         <span className="transform -rotate-45 text-xs font-bold">X</span>
                     </div>
                 </Centered>
            </CardWrapper>
             <CardWrapper title="Gateway: Parallel">
                 <Centered>
                     <div className="w-8 h-8 border transform rotate-45 flex items-center justify-center" style={{borderColor: theme.colors.text}}>
                         <span className="transform -rotate-45 text-xs font-bold">+</span>
                     </div>
                 </Centered>
            </CardWrapper>
        </div>
    </div>
  );
};