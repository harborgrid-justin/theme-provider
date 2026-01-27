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

  const CardWrapper: React.FC<{ children?: React.ReactNode; title: string; className?: string }> = ({ children, title, className = '' }) => (
      <ThemedCard className={`flex flex-col justify-between h-full group hover:shadow-lg transition-shadow min-h-[120px] ${className}`}>
          <div className="text-[10px] uppercase font-bold tracking-wider opacity-40 mb-3 truncate" style={{ color: theme.colors.text }}>{title}</div>
          <div className="flex-1 flex flex-col justify-center relative w-full min-w-0">
            {children}
          </div>
      </ThemedCard>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Flow & Process Gallery (110+ Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Standardized shapes for Flowcharts, BPMN 2.0, UML Activity/State diagrams, and Logic circuits.
        </p>

        {/* --- 1. Standard Flowchart Shapes --- */}
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
                    <div className="px-4 py-2 border text-[10px] font-medium shadow-sm w-full text-center" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface, color: theme.colors.text }}>
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

            <CardWrapper title="Multi-Document">
                 <Centered>
                    <div className="relative w-10 h-8">
                        <div className="absolute top-0 right-0 w-8 h-6 border bg-white shadow-sm" style={{ borderColor: theme.colors.text }}></div>
                        <div className="absolute top-1 right-1 w-8 h-6 border bg-white shadow-sm" style={{ borderColor: theme.colors.text }}></div>
                        <div className="absolute top-2 right-2 w-8 h-6 border bg-white shadow-sm flex items-center justify-center text-[6px]" style={{ borderColor: theme.colors.text }}>Docs</div>
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

            <CardWrapper title="Direct Data">
                <Centered>
                    <div className="w-10 h-10 border-2 rounded-r-full flex items-center justify-center text-[8px]" style={{ borderColor: theme.colors.text, borderLeft: `2px solid ${theme.colors.text}` }}>
                        HDD
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Manual Input">
                <Centered>
                    <div className="w-12 h-8 border-b border-l border-r flex items-center justify-center pt-2" style={{ borderColor: theme.colors.text }}>
                        <div className="absolute top-0 w-full h-4 border-t" style={{ borderColor: theme.colors.text, transform: 'skewY(10deg)' }}></div>
                        <span className="text-[8px]">Key</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Manual Op">
                <Centered>
                    <div className="w-10 h-8 border-t border-b border-l border-r transform skew-x-12" style={{ borderColor: theme.colors.text }}>
                       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -skew-x-12 text-[8px]">Op</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Preparation">
                <Centered>
                    <div className="h-8 w-12 border flex items-center justify-center text-[8px]" style={{ borderColor: theme.colors.text, clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                        Prep
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Merge">
                <Centered>
                    <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-transparent" style={{ borderTopColor: theme.colors.text }}></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Extract">
                <Centered>
                    <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-transparent" style={{ borderBottomColor: theme.colors.text }}></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Delay">
                <Centered>
                    <div className="w-10 h-8 border flex items-center justify-center rounded-r-full" style={{ borderColor: theme.colors.text }}>
                        Wait
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Display">
                <Centered>
                    <div className="w-10 h-8 border flex items-center justify-center rounded-r-full" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0', borderLeft: `2px solid ${theme.colors.text}` }}>
                        <div className="absolute left-0 top-0 bottom-0 w-2 border-r bg-transparent" style={{ borderColor: theme.colors.text }}></div>
                        Screen
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Subroutine">
                <Centered>
                    <div className="px-2 py-2 border flex justify-between items-center w-full max-w-[80px]" style={{ borderColor: theme.colors.text }}>
                        <div className="w-1 h-4 border-r" style={{ borderColor: theme.colors.text }}></div>
                        <span className="text-[8px]">Sub</span>
                        <div className="w-1 h-4 border-l" style={{ borderColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Connector">
                <Centered>
                    <div className="w-6 h-6 rounded-full border flex items-center justify-center text-[8px]" style={{ borderColor: theme.colors.text }}>A</div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Off-Page">
                <Centered>
                    <div className="w-8 h-8 border-t border-l border-r flex items-center justify-center" style={{ borderColor: theme.colors.text, clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }}>
                        <span className="mb-1 text-[8px]">B</span>
                    </div>
                </Centered>
            </CardWrapper>
        </div>
        
        {/* --- 2. BPMN Events --- */}
        <div style={sectionTitleStyle}>BPMN Events</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {/* Start Events */}
            <CardWrapper title="Start: None">
                 <Centered><div className="w-8 h-8 rounded-full border border-green-600"></div></Centered>
            </CardWrapper>
            <CardWrapper title="Start: Message">
                 <Centered><div className="w-8 h-8 rounded-full border border-green-600 flex items-center justify-center"><Icons.Chat size="sm" className="text-green-600 w-4 h-4"/></div></Centered>
            </CardWrapper>
            <CardWrapper title="Start: Timer">
                 <Centered><div className="w-8 h-8 rounded-full border border-green-600 flex items-center justify-center"><Icons.Clock size="sm" className="text-green-600 w-4 h-4"/></div></Centered>
            </CardWrapper>
            <CardWrapper title="Start: Error">
                 <Centered><div className="w-8 h-8 rounded-full border border-green-600 flex items-center justify-center"><Icons.Flag size="sm" className="text-green-600 w-4 h-4"/></div></Centered>
            </CardWrapper>

            {/* Intermediate Events */}
            <CardWrapper title="Inter: None">
                 <Centered><div className="w-8 h-8 rounded-full border-2 border-double border-yellow-600"></div></Centered>
            </CardWrapper>
            <CardWrapper title="Inter: Message">
                 <Centered><div className="w-8 h-8 rounded-full border-2 border-double border-yellow-600 flex items-center justify-center"><Icons.Chat size="sm" className="text-yellow-600 w-4 h-4"/></div></Centered>
            </CardWrapper>
            <CardWrapper title="Inter: Timer">
                 <Centered><div className="w-8 h-8 rounded-full border-2 border-double border-yellow-600 flex items-center justify-center"><Icons.Clock size="sm" className="text-yellow-600 w-4 h-4"/></div></Centered>
            </CardWrapper>
            <CardWrapper title="Inter: Link">
                 <Centered><div className="w-8 h-8 rounded-full border-2 border-double border-yellow-600 flex items-center justify-center"><Icons.Link size="sm" className="text-yellow-600 w-4 h-4"/></div></Centered>
            </CardWrapper>

            {/* End Events */}
            <CardWrapper title="End: None">
                 <Centered><div className="w-8 h-8 rounded-full border-4 border-red-600"></div></Centered>
            </CardWrapper>
            <CardWrapper title="End: Message">
                 <Centered><div className="w-8 h-8 rounded-full border-4 border-red-600 flex items-center justify-center"><Icons.Chat size="sm" className="text-red-600 w-4 h-4"/></div></Centered>
            </CardWrapper>
            <CardWrapper title="End: Error">
                 <Centered><div className="w-8 h-8 rounded-full border-4 border-red-600 flex items-center justify-center"><Icons.Close size="sm" className="text-red-600 w-4 h-4"/></div></Centered>
            </CardWrapper>
            <CardWrapper title="End: Terminate">
                 <Centered><div className="w-8 h-8 rounded-full border-4 border-red-600 flex items-center justify-center"><div className="w-4 h-4 rounded-full bg-red-600"></div></div></Centered>
            </CardWrapper>
        </div>

        {/* --- 3. BPMN Gateways --- */}
        <div style={sectionTitleStyle}>BPMN Gateways</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Exclusive (XOR)">
                 <Centered>
                     <div className="w-8 h-8 border transform rotate-45 flex items-center justify-center" style={{borderColor: theme.colors.text}}>
                         <span className="transform -rotate-45 text-sm font-bold">X</span>
                     </div>
                 </Centered>
            </CardWrapper>
            <CardWrapper title="Parallel (AND)">
                 <Centered>
                     <div className="w-8 h-8 border transform rotate-45 flex items-center justify-center" style={{borderColor: theme.colors.text}}>
                         <span className="transform -rotate-45 text-xl font-bold">+</span>
                     </div>
                 </Centered>
            </CardWrapper>
            <CardWrapper title="Inclusive (OR)">
                 <Centered>
                     <div className="w-8 h-8 border transform rotate-45 flex items-center justify-center" style={{borderColor: theme.colors.text}}>
                         <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: theme.colors.text }}></div>
                     </div>
                 </Centered>
            </CardWrapper>
            <CardWrapper title="Complex">
                 <Centered>
                     <div className="w-8 h-8 border transform rotate-45 flex items-center justify-center" style={{borderColor: theme.colors.text}}>
                         <span className="transform -rotate-45 text-lg font-bold">*</span>
                     </div>
                 </Centered>
            </CardWrapper>
            <CardWrapper title="Event-Based">
                 <Centered>
                     <div className="w-8 h-8 border transform rotate-45 flex items-center justify-center" style={{borderColor: theme.colors.text}}>
                         <div className="transform -rotate-45 w-4 h-4 border rounded-full flex items-center justify-center text-[8px] font-bold">E</div>
                     </div>
                 </Centered>
            </CardWrapper>
        </div>

        {/* --- 4. BPMN Tasks & Activities --- */}
        <div style={sectionTitleStyle}>BPMN Activities</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Task: User">
                <Centered>
                    <div className="px-2 py-1.5 border rounded w-full flex gap-1 items-start" style={{ borderColor: theme.colors.text }}>
                        <Icons.User size="sm" className="w-3 h-3"/>
                        <div className="w-full h-1 bg-gray-200 mt-1"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Task: Service">
                <Centered>
                    <div className="px-2 py-1.5 border rounded w-full flex gap-1 items-start" style={{ borderColor: theme.colors.text }}>
                        <Icons.Settings size="sm" className="w-3 h-3"/>
                        <div className="w-full h-1 bg-gray-200 mt-1"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Task: Send">
                <Centered>
                    <div className="px-2 py-1.5 border rounded w-full flex gap-1 items-start" style={{ borderColor: theme.colors.text }}>
                        <Icons.Send size="sm" className="w-3 h-3"/>
                        <div className="w-full h-1 bg-gray-200 mt-1"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Task: Receive">
                <Centered>
                    <div className="px-2 py-1.5 border rounded w-full flex gap-1 items-start" style={{ borderColor: theme.colors.text }}>
                        <Icons.Chat size="sm" className="w-3 h-3"/>
                        <div className="w-full h-1 bg-gray-200 mt-1"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Sub-Process">
                <Centered>
                    <div className="px-2 py-2 border rounded w-full flex items-center justify-center gap-1" style={{ borderColor: theme.colors.text }}>
                        <span className="text-[8px] font-bold">+</span>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Transaction">
                <Centered>
                    <div className="px-2 py-2 border-2 border-double rounded w-full flex items-center justify-center gap-1" style={{ borderColor: theme.colors.text }}>
                        <span className="text-[8px]">TX</span>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 5. UML State & Activity --- */}
        <div style={sectionTitleStyle}>UML State & Activity</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Initial State">
                 <Centered><div className="w-6 h-6 rounded-full bg-black"></div></Centered>
            </CardWrapper>
            <CardWrapper title="Final State">
                 <Centered>
                     <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                         <div className="w-3 h-3 rounded-full bg-black"></div>
                     </div>
                 </Centered>
            </CardWrapper>
            <CardWrapper title="State">
                <Centered>
                    <div className="px-3 py-1.5 border rounded-xl w-full text-center text-[10px]" style={{ borderColor: theme.colors.text }}>State A</div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Composite State">
                <Centered>
                    <div className="px-3 py-2 border rounded-xl w-full flex gap-1 items-end" style={{ borderColor: theme.colors.text }}>
                        <span className="text-[8px]">Composite</span>
                        <div className="text-[8px] font-bold ml-auto">o-o</div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Decision (Diamond)">
                 <Centered><div className="w-6 h-6 border border-black transform rotate-45"></div></Centered>
            </CardWrapper>
            <CardWrapper title="Fork / Join">
                 <Centered><div className="w-full h-1.5 bg-black rounded"></div></Centered>
            </CardWrapper>
            <CardWrapper title="History">
                 <Centered><div className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-[10px] font-bold">H</div></Centered>
            </CardWrapper>
            <CardWrapper title="Object Node">
                <Centered><div className="px-3 py-1 border w-full text-center text-[10px]" style={{ borderColor: theme.colors.text }}>[Object]</div></Centered>
            </CardWrapper>
        </div>

        {/* --- 6. Logic Gates --- */}
        <div style={sectionTitleStyle}>Logic Gates</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="AND Gate">
                <Centered>
                    <div className="w-10 h-8 border border-l-2 flex items-center justify-center" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0' }}>&</div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="OR Gate">
                <Centered>
                    <div className="w-10 h-8 border flex items-center justify-center" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0', borderLeft: 'none' }}>
                        <div className="w-2 h-full border-r rounded-r-full" style={{ borderColor: theme.colors.text }}></div>
                        <span className="ml-1">≥1</span>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="NOT Gate">
                <Centered>
                    <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-transparent relative" style={{ borderBottomColor: theme.colors.text }}>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border bg-white" style={{ borderColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="NAND Gate">
                <Centered>
                    <div className="w-10 h-8 border flex items-center justify-center relative" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0' }}>
                        &
                        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border bg-white" style={{ borderColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="XOR Gate">
                <Centered>
                    <div className="flex items-center">
                        <div className="w-1 h-6 border-r-2 mr-1" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0' }}></div>
                        <div className="w-8 h-8 border flex items-center justify-center" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0', borderLeft: 'none' }}>=1</div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Buffer">
                <Centered>
                    <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-transparent" style={{ borderBottomColor: theme.colors.text }}></div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 7. Connectors & Lines --- */}
        <div style={sectionTitleStyle}>Connectors & Lines</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Solid">
                <Centered><div className="w-full h-px bg-black"></div></Centered>
            </CardWrapper>
            <CardWrapper title="Dashed">
                <Centered><div className="w-full h-px border-t border-dashed border-black"></div></Centered>
            </CardWrapper>
            <CardWrapper title="Dotted">
                <Centered><div className="w-full h-px border-t border-dotted border-black"></div></Centered>
            </CardWrapper>
            <CardWrapper title="Arrow">
                <Centered>
                    <div className="w-full h-px bg-black relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-black"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Double Arrow">
                <Centered>
                    <div className="w-full h-px bg-black relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-black"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-black"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Diamond (Agg)">
                <Centered>
                    <div className="w-full h-px bg-black relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border border-black bg-white transform rotate-45"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Filled Diamond">
                <Centered>
                    <div className="w-full h-px bg-black relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-black transform rotate-45"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Elbow">
                <Centered>
                    <div className="w-full h-8 relative">
                        <div className="absolute left-1/4 top-1/2 w-1/4 h-px bg-black"></div>
                        <div className="absolute left-1/2 top-0 h-1/2 w-px bg-black"></div>
                        <div className="absolute left-1/2 top-0 w-1/4 h-px bg-black"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Jump">
                <Centered>
                    <div className="w-full h-px bg-black relative flex justify-center items-center">
                        <div className="w-2 h-2 border-t border-r border-black rounded-full bg-white transform -rotate-45 translate-y-[-1px]"></div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Message Flow">
                <Centered>
                    <div className="w-full h-px border-t border-dashed border-black relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-black bg-white"></div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>
    </div>
  );
};