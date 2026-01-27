import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center h-full relative overflow-hidden">{children}</div>
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
                    <div className="w-10 h-10 border rotate-45 flex items-center justify-center" style={{ borderColor: theme.colors.secondary, backgroundColor: theme.colors.secondary + '10' }}>
                        <div className="-rotate-45 text-[8px] font-bold" style={{ color: theme.colors.secondary }}>Y/N</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Input / Output">
                <Centered>
                    <div className="px-4 py-2 border transform -skew-x-12 text-[10px]" style={{ borderColor: theme.colors.accent, backgroundColor: theme.colors.accent + '05', color: theme.colors.text }}>
                        <div className="transform skew-x-12">Data I/O</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Document">
                <Centered>
                    <div className="w-10 h-12 border relative flex items-center justify-center bg-white" style={{ borderColor: theme.colors.text + '60' }}>
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-white" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0', transform: 'translateY(50%)', borderBottom: `1px solid ${theme.colors.text}60` }}></div>
                        <Icons.File size="sm" className="opacity-40"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Multi-Document">
                <Centered>
                    <div className="relative w-12 h-12">
                        <div className="absolute top-0 right-0 w-8 h-10 border bg-white shadow-sm" style={{ borderColor: theme.colors.text + '40' }}></div>
                        <div className="absolute top-1 right-1 w-8 h-10 border bg-white shadow-sm" style={{ borderColor: theme.colors.text + '40' }}></div>
                        <div className="absolute top-2 right-2 w-8 h-10 border bg-white flex items-center justify-center shadow-sm" style={{ borderColor: theme.colors.text + '40' }}>
                            <div className="w-4 h-0.5 bg-gray-300"></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Database">
                <Centered>
                    <div className="w-10 h-12 border flex flex-col items-center relative" style={{ borderColor: theme.colors.text, borderRadius: '0 0 50% 50% / 0 0 10% 10%' }}>
                        <div className="absolute top-0 w-full h-3 border-b" style={{ borderRadius: '50%', borderColor: theme.colors.text, transform: 'translateY(-50%)', backgroundColor: theme.colors.surface }}></div>
                        <div className="absolute top-0 w-full h-3" style={{ borderRadius: '50%', borderTop: `1px solid ${theme.colors.text}`, transform: 'translateY(-50%)' }}></div>
                        <div className="mt-4 w-6 h-0.5 bg-current opacity-20" style={{ color: theme.colors.text }}></div>
                        <div className="mt-1 w-6 h-0.5 bg-current opacity-20" style={{ color: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Manual Input">
                <Centered>
                    <div className="w-12 h-8 border-l border-b border-r flex items-center justify-center relative" style={{ borderColor: theme.colors.text }}>
                        <div className="absolute top-0 w-full h-4 bg-white" style={{ transform: 'translateY(-50%) skewY(5deg)', borderTop: `1px solid ${theme.colors.text}` }}></div>
                        <Icons.Edit size="sm" className="opacity-40 -mt-1"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Manual Operation">
                <Centered>
                    <div className="w-12 h-8 border-b border-l border-r relative flex items-center justify-center" style={{ borderColor: theme.colors.text }}>
                        <div className="absolute top-0 w-16 h-12 border-t" style={{ borderColor: theme.colors.text, transform: 'perspective(20px) rotateX(10deg) translateY(-2px)' }}></div>
                        <span className="text-[8px] uppercase font-bold mt-1">Ops</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Merge">
                <Centered>
                    <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px]" style={{ borderTopColor: theme.colors.secondary }}></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Connector Node">
                <Centered>
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                        A
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Delay">
                <Centered>
                    <div className="w-12 h-8 border rounded-r-full flex items-center justify-center pl-1" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0' }}>
                        <span className="text-[8px] font-mono">WAIT</span>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 2. BPMN Elements --- */}
        <div style={sectionTitleStyle}>BPMN 2.0 Elements</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            
            <CardWrapper title="Event: Start">
                <Centered>
                    <div className="w-8 h-8 rounded-full border border-green-500 bg-green-50"></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Event: End">
                <Centered>
                    <div className="w-8 h-8 rounded-full border-[3px] border-red-500 bg-red-50"></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Event: Intermediate">
                <Centered>
                    <div className="w-8 h-8 rounded-full border-2 border-double border-yellow-500 bg-yellow-50 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full border border-yellow-600"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Task: User">
                <Centered>
                    <div className="w-12 h-8 border rounded flex items-center justify-center relative" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                        <div className="absolute top-0.5 left-0.5"><Icons.User size="sm" className="w-3 h-3"/></div>
                        <span className="text-[8px]">User</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Task: Service">
                <Centered>
                    <div className="w-12 h-8 border rounded flex items-center justify-center relative" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>
                        <div className="absolute top-0.5 left-0.5"><Icons.Settings size="sm" className="w-3 h-3"/></div>
                        <span className="text-[8px]">Auto</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Task: Script">
                <Centered>
                    <div className="w-12 h-8 border rounded flex items-center justify-center relative" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>
                        <div className="absolute top-0.5 left-0.5"><Icons.File size="sm" className="w-3 h-3"/></div>
                        <span className="text-[8px] font-mono">JS</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Gateway: Exclusive">
                <Centered>
                    <div className="w-8 h-8 border rotate-45 flex items-center justify-center" style={{ borderColor: theme.colors.text }}>
                        <span className="-rotate-45 font-bold text-lg leading-none" style={{ color: theme.colors.text }}>×</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Gateway: Parallel">
                <Centered>
                    <div className="w-8 h-8 border rotate-45 flex items-center justify-center" style={{ borderColor: theme.colors.text }}>
                        <span className="-rotate-45 font-bold text-lg leading-none" style={{ color: theme.colors.text }}>+</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Gateway: Complex">
                <Centered>
                    <div className="w-8 h-8 border rotate-45 flex items-center justify-center" style={{ borderColor: theme.colors.text }}>
                        <span className="-rotate-45 font-bold text-lg leading-none" style={{ color: theme.colors.text }}>*</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Message Flow">
                <Centered>
                    <div className="w-full flex items-center px-4 border-b border-dashed relative" style={{ borderColor: theme.colors.text }}>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r rotate-45" style={{ borderColor: theme.colors.text }}></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border bg-white" style={{ borderColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Data Association">
                <Centered>
                    <div className="w-full h-px border-t border-dotted flex items-center" style={{ borderColor: theme.colors.textSecondary }}>
                        <div className="w-1.5 h-1.5 border-t border-r rotate-45 ml-auto" style={{ borderColor: theme.colors.textSecondary }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Text Annotation">
                <Centered>
                    <div className="flex items-center">
                        <div className="h-8 w-2 border-l border-t border-b" style={{ borderColor: theme.colors.text }}></div>
                        <div className="text-[8px] ml-1 opacity-60 leading-tight">Validation<br/>Required</div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 3. Logic & Circuits --- */}
        <div style={sectionTitleStyle}>Logic Gates & Circuits</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            
            <CardWrapper title="Gate: AND">
                <Centered>
                    <div className="w-10 h-8 border border-r-0 rounded-r-full flex items-center justify-center relative" style={{ borderColor: theme.colors.text }}>
                        <div className="absolute left-0 top-1/3 w-2 h-px bg-current" style={{ color: theme.colors.text, transform: 'translateX(-100%)' }}></div>
                        <div className="absolute left-0 bottom-1/3 w-2 h-px bg-current" style={{ color: theme.colors.text, transform: 'translateX(-100%)' }}></div>
                        <div className="absolute right-0 top-1/2 w-2 h-px bg-current" style={{ color: theme.colors.text, transform: 'translateX(100%)' }}></div>
                        <span className="text-[8px] font-bold">&</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Gate: OR">
                <Centered>
                    <div className="relative w-10 h-8">
                        <svg viewBox="0 0 40 32" className="w-full h-full overflow-visible" style={{ stroke: theme.colors.text, fill: 'none', strokeWidth: 1.5 }}>
                            <path d="M0,0 Q20,5 40,16 Q20,27 0,32 Q10,16 0,0" />
                            <line x1="-5" y1="5" x2="0" y2="5" />
                            <line x1="-5" y1="27" x2="0" y2="27" />
                            <line x1="40" y1="16" x2="45" y2="16" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold pl-1">≥1</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Gate: NOT">
                <Centered>
                    <div className="relative flex items-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-current border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent mr-1" style={{ color: theme.colors.text }}></div>
                        <div className="w-1.5 h-1.5 rounded-full border bg-white" style={{ borderColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Buffer">
                <Centered>
                    <div className="w-0 h-0 border-l-[14px] border-l-current border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent" style={{ color: theme.colors.primary }}></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Summing Junction">
                <Centered>
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center relative" style={{ borderColor: theme.colors.text }}>
                        <span className="text-xs font-bold">∑</span>
                        <div className="absolute top-0 text-[8px] font-bold -mt-2">+</div>
                        <div className="absolute bottom-0 text-[8px] font-bold -mb-2">-</div>
                        <div className="absolute left-0 text-[8px] font-bold -ml-2">+</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Delay Element">
                <Centered>
                    <div className="w-8 h-8 border flex items-center justify-center" style={{ borderColor: theme.colors.text }}>
                        <span className="font-serif italic">e<sup>-sT</sup></span>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 4. Grouping & Layout --- */}
        <div style={sectionTitleStyle}>Grouping & Swimlanes</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            
            <CardWrapper title="Swimlane: Horizontal" className="col-span-2">
                <div className="flex h-12 w-full border rounded overflow-hidden" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="w-8 bg-gray-100 border-r flex items-center justify-center" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '05' }}>
                        <span className="text-[8px] font-bold -rotate-90 whitespace-nowrap" style={{ color: theme.colors.text }}>Role A</span>
                    </div>
                    <div className="flex-1 bg-white relative" style={{ backgroundColor: theme.colors.surface }}>
                        <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed" style={{ borderColor: theme.colors.text + '10' }}></div>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Swimlane: Vertical" className="col-span-2">
                <div className="flex flex-col h-16 w-full border rounded overflow-hidden" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="h-6 bg-gray-100 border-b flex items-center justify-center" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '05' }}>
                        <span className="text-[8px] font-bold" style={{ color: theme.colors.text }}>Phase 1</span>
                    </div>
                    <div className="flex-1 flex">
                        <div className="flex-1 border-r border-dashed" style={{ borderColor: theme.colors.text + '10' }}></div>
                        <div className="flex-1"></div>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Group: Dashed">
                <Centered>
                    <div className="w-16 h-12 border-2 border-dashed rounded flex p-1" style={{ borderColor: theme.colors.text + '40' }}>
                        <span className="text-[6px] font-bold opacity-50 uppercase">Scope</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Group: Solid">
                <Centered>
                    <div className="w-16 h-12 border-2 rounded flex p-1 relative" style={{ borderColor: theme.colors.primary + '60', backgroundColor: theme.colors.primary + '05' }}>
                        <div className="absolute -top-2 left-2 px-1 bg-white text-[6px] font-bold border rounded" style={{ borderColor: theme.colors.primary + '60', color: theme.colors.primary }}>Region</div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>
    </div>
  );
};