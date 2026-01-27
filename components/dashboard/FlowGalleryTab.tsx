import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Icons } from './DashboardIcons';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const FlowGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Flow & Process Gallery (110+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Standardized shapes for Flowcharts, BPMN 2.0, UML Activity/State diagrams, and Logic circuits.
        </p>

        {/* --- 1. Standard Flowchart Shapes --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Start / End" centered>
                <div className="px-6 py-2 border-2 rounded-full text-[10px] font-bold tracking-widest uppercase" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>
                    Start
                </div>
            </GalleryItem>
            
            <GalleryItem title="Process" centered>
                <div className="w-20 h-10 border text-[10px] font-medium shadow-sm flex items-center justify-center bg-white" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface, color: theme.colors.text }}>
                    Process
                </div>
            </GalleryItem>

            <GalleryItem title="Decision" centered>
                <div className="w-12 h-12 border transform rotate-45 flex items-center justify-center shadow-sm bg-white" style={{ borderColor: theme.colors.secondary, backgroundColor: theme.colors.surface }}>
                    <span className="transform -rotate-45 text-[10px] font-bold" style={{ color: theme.colors.text }}>?</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Input / Output" centered>
                <div className="w-20 h-10 border text-[10px] font-medium transform -skew-x-12 shadow-sm flex items-center justify-center bg-white" style={{ borderColor: theme.colors.accent, backgroundColor: theme.colors.surface, color: theme.colors.text }}>
                    <span className="transform skew-x-12">I/O</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Document" centered>
                <div className="w-16 h-12 border relative shadow-sm flex items-center justify-center text-[8px] bg-white pt-2 pb-4" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface, borderRadius: '0 0 50% 50% / 0 0 15% 15%' }}>
                    Doc
                    <div className="absolute bottom-0 w-full h-2 border-t-0 border-b border-l border-r bg-white" style={{borderRadius: '50% 50% 0 0 / 100% 100% 0 0', borderColor: theme.colors.text, backgroundColor: theme.colors.surface}}></div>
                        {/* Visual trick for wave bottom */}
                        <svg className="absolute -bottom-[1px] left-0 w-full h-3" viewBox="0 0 64 12" preserveAspectRatio="none">
                            <path d="M0,0 Q16,12 32,0 T64,0 V12 H0 Z" fill="white" stroke={theme.colors.text} strokeWidth="1" />
                        </svg>
                </div>
            </GalleryItem>

            <GalleryItem title="Multi-Document" centered>
                <div className="relative w-16 h-12">
                    <div className="absolute top-0 right-0 w-12 h-10 border shadow-sm bg-white" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}></div>
                    <div className="absolute top-1 right-1 w-12 h-10 border shadow-sm bg-white" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}></div>
                    <div className="absolute top-2 right-2 w-12 h-10 border shadow-sm flex items-center justify-center text-[8px] bg-white" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}>Docs</div>
                </div>
            </GalleryItem>
            
            <GalleryItem title="Database" centered>
                <div className="w-10 h-12 border-l border-r relative flex items-center justify-center bg-white" style={{ borderColor: theme.colors.text }}>
                        <div className="absolute -top-1.5 w-full h-3 border rounded-full bg-white" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}></div>
                        <div className="absolute -bottom-1.5 w-full h-3 border-b border-l border-r rounded-b-full bg-white" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}></div>
                        <span className="text-[8px] font-bold">DB</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Direct Data" centered>
                <div className="w-12 h-12 border-2 rounded-r-full flex items-center justify-center text-[8px] bg-white" style={{ borderColor: theme.colors.text, borderLeft: `2px solid ${theme.colors.text}` }}>
                    HDD
                </div>
            </GalleryItem>

            <GalleryItem title="Manual Input" centered>
                <div className="w-16 h-10 border-b border-l border-r flex items-center justify-center pt-3 bg-white" style={{ borderColor: theme.colors.text }}>
                    <div className="absolute top-0 w-full h-4 border-t bg-white" style={{ borderColor: theme.colors.text, transform: 'skewY(5deg)' }}></div>
                    <span className="text-[8px]">Key</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Manual Op" centered>
                <div className="w-16 h-10 border-t border-b border-l border-r transform skew-x-12 bg-white" style={{ borderColor: theme.colors.text }}>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -skew-x-12 text-[8px]">Op</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Preparation" centered>
                <div className="h-10 w-16 border flex items-center justify-center text-[8px] bg-white" style={{ borderColor: theme.colors.text, clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                    Prep
                </div>
            </GalleryItem>

            <GalleryItem title="Merge" centered>
                <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-transparent" style={{ borderTopColor: theme.colors.text }}></div>
            </GalleryItem>

            <GalleryItem title="Extract" centered>
                <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-transparent" style={{ borderBottomColor: theme.colors.text }}></div>
            </GalleryItem>

            <GalleryItem title="Delay" centered>
                <div className="w-14 h-10 border flex items-center justify-center rounded-r-full bg-white" style={{ borderColor: theme.colors.text }}>
                    Wait
                </div>
            </GalleryItem>

            <GalleryItem title="Display" centered>
                <div className="w-14 h-10 border flex items-center justify-center rounded-r-full relative bg-white" style={{ borderColor: theme.colors.text, borderRadius: '50% 50% 50% 50% / 100% 50% 50% 100%' }}>
                    <div className="absolute left-0 top-0 bottom-0 w-4 border-l border-t border-b bg-white" style={{ borderRadius: '50%', borderColor: theme.colors.text, transform: 'translateX(-50%)' }}></div>
                    Screen
                </div>
            </GalleryItem>

            <GalleryItem title="Subroutine" centered>
                <div className="px-3 py-2 border flex justify-between items-center w-20 bg-white" style={{ borderColor: theme.colors.text }}>
                    <div className="w-1 h-6 border-r" style={{ borderColor: theme.colors.text }}></div>
                    <span className="text-[8px] font-bold">Sub</span>
                    <div className="w-1 h-6 border-l" style={{ borderColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Connector" centered>
                <div className="w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold bg-white" style={{ borderColor: theme.colors.text }}>A</div>
            </GalleryItem>

            <GalleryItem title="Off-Page" centered>
                <div className="w-10 h-10 border-t border-l border-r flex items-center justify-center bg-white" style={{ borderColor: theme.colors.text, clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }}>
                    <span className="mb-2 text-[8px] font-bold">B</span>
                </div>
            </GalleryItem>
        </div>
        
        {/* --- 2. BPMN Events --- */}
        <SectionTitle>BPMN Events</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {/* Start Events */}
            <GalleryItem title="Start: None" centered><div className="w-10 h-10 rounded-full border border-green-600"></div></GalleryItem>
            <GalleryItem title="Start: Message" centered><div className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center"><Icons.Chat size="sm" className="text-green-600 w-5 h-5"/></div></GalleryItem>
            <GalleryItem title="Start: Timer" centered><div className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center"><Icons.Clock size="sm" className="text-green-600 w-5 h-5"/></div></GalleryItem>
            <GalleryItem title="Start: Error" centered><div className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center"><Icons.Flag size="sm" className="text-green-600 w-5 h-5"/></div></GalleryItem>

            {/* Intermediate Events */}
            <GalleryItem title="Inter: None" centered><div className="w-10 h-10 rounded-full border-2 border-double border-yellow-600"></div></GalleryItem>
            <GalleryItem title="Inter: Message" centered><div className="w-10 h-10 rounded-full border-2 border-double border-yellow-600 flex items-center justify-center"><Icons.Chat size="sm" className="text-yellow-600 w-5 h-5"/></div></GalleryItem>
            <GalleryItem title="Inter: Timer" centered><div className="w-10 h-10 rounded-full border-2 border-double border-yellow-600 flex items-center justify-center"><Icons.Clock size="sm" className="text-yellow-600 w-5 h-5"/></div></GalleryItem>
            <GalleryItem title="Inter: Link" centered><div className="w-10 h-10 rounded-full border-2 border-double border-yellow-600 flex items-center justify-center"><Icons.Link size="sm" className="text-yellow-600 w-5 h-5"/></div></GalleryItem>

            {/* End Events */}
            <GalleryItem title="End: None" centered><div className="w-10 h-10 rounded-full border-4 border-red-600"></div></GalleryItem>
            <GalleryItem title="End: Message" centered><div className="w-10 h-10 rounded-full border-4 border-red-600 flex items-center justify-center"><Icons.Chat size="sm" className="text-red-600 w-5 h-5"/></div></GalleryItem>
            <GalleryItem title="End: Error" centered><div className="w-10 h-10 rounded-full border-4 border-red-600 flex items-center justify-center"><Icons.Close size="sm" className="text-red-600 w-5 h-5"/></div></GalleryItem>
            <GalleryItem title="End: Terminate" centered><div className="w-10 h-10 rounded-full border-4 border-red-600 flex items-center justify-center"><div className="w-5 h-5 rounded-full bg-red-600"></div></div></GalleryItem>
        </div>

        {/* --- 3. BPMN Gateways --- */}
        <SectionTitle>BPMN Gateways</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Exclusive (XOR)" centered>
                 <div className="w-10 h-10 border transform rotate-45 flex items-center justify-center bg-white" style={{borderColor: theme.colors.text}}>
                     <span className="transform -rotate-45 text-lg font-bold">X</span>
                 </div>
            </GalleryItem>
            <GalleryItem title="Parallel (AND)" centered>
                 <div className="w-10 h-10 border transform rotate-45 flex items-center justify-center bg-white" style={{borderColor: theme.colors.text}}>
                     <span className="transform -rotate-45 text-2xl font-bold">+</span>
                 </div>
            </GalleryItem>
            <GalleryItem title="Inclusive (OR)" centered>
                 <div className="w-10 h-10 border transform rotate-45 flex items-center justify-center bg-white" style={{borderColor: theme.colors.text}}>
                     <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: theme.colors.text }}></div>
                 </div>
            </GalleryItem>
            <GalleryItem title="Complex" centered>
                 <div className="w-10 h-10 border transform rotate-45 flex items-center justify-center bg-white" style={{borderColor: theme.colors.text}}>
                     <span className="transform -rotate-45 text-xl font-bold">*</span>
                 </div>
            </GalleryItem>
            <GalleryItem title="Event-Based" centered>
                 <div className="w-10 h-10 border transform rotate-45 flex items-center justify-center bg-white" style={{borderColor: theme.colors.text}}>
                     <div className="transform -rotate-45 w-5 h-5 border rounded-full flex items-center justify-center text-[8px] font-bold">E</div>
                 </div>
            </GalleryItem>
        </div>

        {/* --- 4. BPMN Tasks & Activities --- */}
        <SectionTitle>BPMN Activities</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Task: User" centered>
                <div className="px-3 py-2 border rounded-lg w-full flex gap-2 items-start bg-white" style={{ borderColor: theme.colors.text }}>
                    <Icons.User size="sm" className="w-4 h-4"/>
                    <div className="w-full h-1.5 bg-gray-200 mt-1 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Task: Service" centered>
                <div className="px-3 py-2 border rounded-lg w-full flex gap-2 items-start bg-white" style={{ borderColor: theme.colors.text }}>
                    <Icons.Settings size="sm" className="w-4 h-4"/>
                    <div className="w-full h-1.5 bg-gray-200 mt-1 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Task: Send" centered>
                <div className="px-3 py-2 border rounded-lg w-full flex gap-2 items-start bg-white" style={{ borderColor: theme.colors.text }}>
                    <Icons.Send size="sm" className="w-4 h-4"/>
                    <div className="w-full h-1.5 bg-gray-200 mt-1 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Task: Receive" centered>
                <div className="px-3 py-2 border rounded-lg w-full flex gap-2 items-start bg-white" style={{ borderColor: theme.colors.text }}>
                    <Icons.Chat size="sm" className="w-4 h-4"/>
                    <div className="w-full h-1.5 bg-gray-200 mt-1 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Sub-Process" centered>
                <div className="px-3 py-3 border rounded-lg w-full flex items-center justify-center gap-1 bg-white" style={{ borderColor: theme.colors.text }}>
                    <span className="text-xs font-bold px-1.5 border border-black">+</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Transaction" centered>
                <div className="px-3 py-3 border-2 border-double rounded-lg w-full flex items-center justify-center gap-1 bg-white" style={{ borderColor: theme.colors.text }}>
                    <span className="text-[10px] font-bold">TX</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 5. UML State & Activity --- */}
        <SectionTitle>UML State & Activity</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Initial State" centered><div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.text }}></div></GalleryItem>
            <GalleryItem title="Final State" centered>
                 <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white" style={{ borderColor: theme.colors.text }}>
                     <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>
                 </div>
            </GalleryItem>
            <GalleryItem title="State" centered>
                <div className="px-4 py-2 border rounded-2xl w-full text-center text-xs bg-white font-medium" style={{ borderColor: theme.colors.text }}>Active</div>
            </GalleryItem>
            <GalleryItem title="Composite State" centered>
                <div className="px-4 py-2 border rounded-2xl w-full flex gap-1 items-end bg-white" style={{ borderColor: theme.colors.text }}>
                    <span className="text-[8px]">Composite</span>
                    <div className="text-[10px] font-bold ml-auto opacity-50">o-o</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Decision (Diamond)" centered><div className="w-8 h-8 border transform rotate-45 bg-white" style={{ borderColor: theme.colors.text }}></div></GalleryItem>
            <GalleryItem title="Fork / Join" centered><div className="w-16 h-2 rounded bg-black" style={{ backgroundColor: theme.colors.text }}></div></GalleryItem>
            <GalleryItem title="History" centered><div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold bg-white" style={{ borderColor: theme.colors.text }}>H</div></GalleryItem>
            <GalleryItem title="Object Node" centered><div className="px-4 py-1.5 border w-full text-center text-[10px] bg-white shadow-sm" style={{ borderColor: theme.colors.text }}>[Object]</div></GalleryItem>
        </div>

        {/* --- 6. Logic Gates --- */}
        <SectionTitle>Logic Gates</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="AND Gate" centered>
                <div className="w-12 h-10 border border-l-2 flex items-center justify-center bg-white" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0' }}>&</div>
            </GalleryItem>
            <GalleryItem title="OR Gate" centered>
                <div className="w-12 h-10 border flex items-center justify-center bg-white" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0', borderLeft: 'none' }}>
                    <div className="w-3 h-full border-r rounded-r-full" style={{ borderColor: theme.colors.text }}></div>
                    <span className="ml-1 text-xs">≥1</span>
                </div>
            </GalleryItem>
            <GalleryItem title="NOT Gate" centered>
                <div className="relative flex flex-col items-center">
                    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent" style={{ borderBottomColor: theme.colors.text }}></div>
                    <div className="w-2 h-2 rounded-full border bg-white mt-0.5" style={{ borderColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="NAND Gate" centered>
                <div className="w-12 h-10 border flex items-center justify-center relative bg-white" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0' }}>
                    &
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border bg-white" style={{ borderColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="XOR Gate" centered>
                <div className="flex items-center">
                    <div className="w-1.5 h-8 border-r-2 mr-1" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0' }}></div>
                    <div className="w-10 h-10 border flex items-center justify-center bg-white" style={{ borderColor: theme.colors.text, borderRadius: '0 50% 50% 0 / 0 50% 50% 0', borderLeft: 'none' }}>=1</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Buffer" centered>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent" style={{ borderBottomColor: theme.colors.text }}></div>
            </GalleryItem>
        </div>

        {/* --- 7. Connectors & Lines --- */}
        <SectionTitle>Connectors & Lines</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Solid" centered><div className="w-full h-0.5" style={{ backgroundColor: theme.colors.text }}></div></GalleryItem>
            <GalleryItem title="Dashed" centered><div className="w-full h-0.5 border-t-2 border-dashed" style={{ borderColor: theme.colors.text }}></div></GalleryItem>
            <GalleryItem title="Dotted" centered><div className="w-full h-0.5 border-t-2 border-dotted" style={{ borderColor: theme.colors.text }}></div></GalleryItem>
            <GalleryItem title="Arrow" centered>
                <div className="w-full h-0.5 relative flex items-center" style={{ backgroundColor: theme.colors.text }}>
                    <div className="absolute right-0 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-transparent" style={{ borderLeftColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Double Arrow" centered>
                <div className="w-full h-0.5 relative flex items-center justify-between" style={{ backgroundColor: theme.colors.text }}>
                    <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-transparent" style={{ borderRightColor: theme.colors.text }}></div>
                    <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-transparent" style={{ borderLeftColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Diamond (Agg)" centered>
                <div className="w-full h-0.5 relative flex items-center justify-end" style={{ backgroundColor: theme.colors.text }}>
                    <div className="w-3 h-3 border-2 transform rotate-45 bg-white -mr-1.5" style={{ borderColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Filled Diamond" centered>
                <div className="w-full h-0.5 relative flex items-center justify-end" style={{ backgroundColor: theme.colors.text }}>
                    <div className="w-3 h-3 transform rotate-45 -mr-1.5" style={{ backgroundColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Elbow" centered>
                <div className="w-16 h-10 relative">
                    <div className="absolute left-0 bottom-0 w-8 h-0.5" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="absolute left-8 bottom-0 h-10 w-0.5" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="absolute left-8 top-0 w-8 h-0.5" style={{ backgroundColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Jump" centered>
                <div className="w-full h-0.5 relative flex justify-center items-center" style={{ backgroundColor: theme.colors.text }}>
                    <div className="w-4 h-4 border-t-2 border-r-2 rounded-full transform -rotate-45 translate-y-[-2px] bg-white z-10" style={{ borderColor: theme.colors.text }}></div>
                    <div className="absolute left-0 right-0 h-0.5" style={{ backgroundColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Message Flow" centered>
                <div className="w-full h-0.5 border-t-2 border-dashed relative flex items-center justify-end" style={{ borderColor: theme.colors.text }}>
                    <div className="w-3 h-3 rounded-full border-2 bg-white -mr-1.5" style={{ borderColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};