import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center h-full relative overflow-hidden">{children}</div>
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

            <CardWrapper title="Sparkline: Area">
                <Centered>
                    <svg viewBox="0 0 100 40" className="w-full h-10 overflow-visible">
                        <path d="M0,30 Q25,5 50,20 T100,10 V40 H0 Z" fill={theme.colors.primary} stroke="none" opacity="0.2" />
                        <path d="M0,30 Q25,5 50,20 T100,10" fill="none" stroke={theme.colors.primary} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Pie: Simple">
                <Centered>
                    <div className="w-10 h-10 rounded-full relative overflow-hidden" style={{ background: `conic-gradient(${theme.colors.primary} 0% 60%, ${theme.colors.text+'20'} 60% 100%)` }}></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Donut: Micro">
                <Centered>
                    <div className="w-10 h-10 rounded-full relative flex items-center justify-center" style={{ background: `conic-gradient(${theme.colors.accent} 0% 75%, ${theme.colors.text+'10'} 75% 100%)` }}>
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.surface }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Plot: Scatter">
                <Centered>
                    <div className="w-12 h-12 relative border-l border-b" style={{ borderColor: theme.colors.text + '20' }}>
                        <div className="absolute left-2 bottom-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="absolute left-5 bottom-6 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="absolute left-8 bottom-4 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Heatmap Cell">
                <Centered>
                    <div className="grid grid-cols-3 gap-0.5">
                        {[0.2, 0.5, 0.8, 0.4, 0.9, 0.3, 0.7, 0.1, 0.6].map((o, i) => (
                            <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: theme.colors.primary, opacity: o }}></div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Bullet Chart">
                <Centered>
                    <div className="w-full h-3 bg-gray-200 rounded-full relative overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div className="absolute top-0 left-0 h-full w-3/4 opacity-30" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-1 left-0 h-1 w-1/2 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-0 left-[60%] h-full w-0.5 bg-red-500"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Win/Loss">
                <Centered>
                    <div className="flex gap-0.5 items-center">
                        <div className="w-2 h-4 rounded-sm bg-green-500"></div>
                        <div className="w-2 h-4 rounded-sm bg-green-500"></div>
                        <div className="w-2 h-4 rounded-sm bg-red-400 opacity-50 translate-y-2"></div>
                        <div className="w-2 h-4 rounded-sm bg-green-500"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Gauge: Half">
                <Centered>
                    <div className="w-12 h-6 overflow-hidden relative">
                        <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-l-transparent" style={{ borderColor: theme.colors.text + '10', transform: 'rotate(-45deg)' }}></div>
                        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-t-transparent border-l-transparent border-r-transparent" style={{ borderColor: theme.colors.success, transform: 'rotate(-45deg)', borderBottomColor: theme.colors.success }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Waterfall Step">
                <Centered>
                    <div className="flex items-end gap-0.5 h-10">
                        <div className="w-2 h-4 mb-4" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="w-2 h-3 mb-1" style={{ backgroundColor: theme.colors.error }}></div>
                        <div className="w-2 h-5 mb-0" style={{ backgroundColor: theme.colors.success }}></div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 2. Statistical & Financial --- */}
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

            <CardWrapper title="Violin Plot">
                <Centered>
                    <svg viewBox="0 0 40 40" className="h-10 w-10 overflow-visible">
                        <path d="M20,0 C10,5 5,15 15,20 C5,25 10,35 20,40 C30,35 35,25 25,20 C35,15 30,5 20,0 Z" fill={theme.colors.accent} opacity="0.3" stroke={theme.colors.accent} strokeWidth="1" />
                        <line x1="20" y1="5" x2="20" y2="35" stroke={theme.colors.text} strokeWidth="1" />
                    </svg>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Candlestick">
                <Centered>
                    <div className="flex gap-2 items-end h-10">
                        <div className="w-2 relative h-8 bg-transparent">
                            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="absolute top-2 bottom-2 left-0 right-0" style={{ backgroundColor: theme.colors.success }}></div>
                        </div>
                        <div className="w-2 relative h-6 bg-transparent">
                            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="absolute top-1 bottom-3 left-0 right-0" style={{ backgroundColor: theme.colors.error }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Lollipop Chart">
                <Centered>
                    <div className="flex items-end gap-2 h-10">
                        {[60, 80, 40].map((h, i) => (
                            <div key={i} className="flex flex-col items-center h-full justify-end">
                                <div className="w-2 h-2 rounded-full mb-px" style={{ backgroundColor: theme.colors.primary }}></div>
                                <div className="w-px" style={{ height: `${h}%`, backgroundColor: theme.colors.text + '40' }}></div>
                            </div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Dumbbell Plot">
                <Centered>
                    <div className="w-full flex items-center px-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="h-0.5 flex-1" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Slope Chart">
                <Centered>
                    <svg viewBox="0 0 40 40" className="w-full h-10 overflow-visible">
                        <line x1="0" y1="10" x2="40" y2="30" stroke={theme.colors.error} strokeWidth="1.5" />
                        <line x1="0" y1="30" x2="40" y2="10" stroke={theme.colors.success} strokeWidth="1.5" />
                        <circle cx="0" cy="10" r="2" fill={theme.colors.error} />
                        <circle cx="40" cy="30" r="2" fill={theme.colors.error} />
                        <circle cx="0" cy="30" r="2" fill={theme.colors.success} />
                        <circle cx="40" cy="10" r="2" fill={theme.colors.success} />
                    </svg>
                </Centered>
            </CardWrapper>

            <CardWrapper title="OHLC Bar">
                <Centered>
                    <div className="w-10 h-10 flex items-center justify-center relative">
                        <div className="h-8 w-px bg-black" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute left-2 top-2 h-px w-3 bg-black" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute right-2 bottom-2 h-px w-3 bg-black" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Renko Block">
                <Centered>
                    <div className="flex flex-col-reverse -space-y-px rotate-45">
                        <div className="w-3 h-3 border" style={{ backgroundColor: theme.colors.success, borderColor: theme.colors.text }}></div>
                        <div className="w-3 h-3 border" style={{ backgroundColor: theme.colors.success, borderColor: theme.colors.text }}></div>
                        <div className="w-3 h-3 border ml-3" style={{ backgroundColor: theme.colors.error, borderColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Funnel Segment">
                <Centered>
                    <div className="w-10 h-8 bg-opacity-50" style={{ 
                        backgroundColor: theme.colors.primary, 
                        clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' 
                    }}></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Kagi Line">
                <Centered>
                    <svg viewBox="0 0 40 40" className="w-full h-10">
                        <path d="M0,30 V10 H10 V35 H20 V20 H30 V5" fill="none" stroke={theme.colors.text} strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Dot Plot">
                <Centered>
                    <div className="flex gap-1 items-end h-8">
                        <div className="flex flex-col gap-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Radial Bar">
                <Centered>
                    <div className="relative w-10 h-10">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="20" cy="20" r="16" stroke={theme.colors.text} strokeWidth="4" fill="none" opacity="0.1" />
                            <circle cx="20" cy="20" r="16" stroke={theme.colors.primary} strokeWidth="4" fill="none" strokeDasharray="100" strokeDashoffset="30" strokeLinecap="round" />
                        </svg>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 3. Flowchart Primitives --- */}
        <div style={sectionTitleStyle}>Diagram Nodes & Connectors</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            
            <CardWrapper title="Node: Process">
                <Centered>
                    <div className="px-3 py-1.5 border rounded text-[10px] font-medium shadow-sm" style={{ borderColor: theme.colors.text + '40', backgroundColor: theme.colors.surface, color: theme.colors.text }}>
                        Process
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Node: Decision">
                <Centered>
                    <div className="w-8 h-8 border rotate-45 flex items-center justify-center shadow-sm" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.primary + '10' }}>
                        <div className="-rotate-45 text-[8px] font-bold" style={{ color: theme.colors.primary }}>?</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Node: Start/End">
                <Centered>
                    <div className="px-3 py-1 border rounded-full text-[10px] font-bold" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.text, color: theme.colors.surface }}>
                        Start
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Node: Database">
                <Centered>
                    <div className="w-8 h-10 border rounded-lg flex flex-col items-center justify-center relative shadow-sm" style={{ borderColor: theme.colors.text + '40', borderRadius: '50% / 10%' }}>
                         {/* Cylinder look hack */}
                         <div className="absolute inset-x-0 top-0 h-2 border-b rounded-[50%]" style={{ borderColor: theme.colors.text + '40' }}></div>
                         <Icons.Search size="sm" className="opacity-40 mt-1"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Connector: Straight">
                <Centered>
                    <div className="flex items-center w-full px-4">
                        <div className="w-2 h-2 rounded-full border" style={{ borderColor: theme.colors.text }}></div>
                        <div className="h-px flex-1" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="w-2 h-2 rounded-full bg-current" style={{ color: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Connector: Elbow">
                <Centered>
                    <div className="w-8 h-8 border-l border-b flex items-end justify-start relative ml-2" style={{ borderColor: theme.colors.primary }}>
                        <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-current border-b-[3px] border-b-transparent absolute -right-1.5 -bottom-1" style={{ color: theme.colors.primary }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Swimlane Header">
                <Centered>
                    <div className="w-full h-8 border-b-2 flex items-center justify-center bg-gray-50" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.primary + '05' }}>
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme.colors.primary }}>Phase 1</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Group Container">
                <Centered>
                    <div className="w-16 h-12 border border-dashed rounded flex items-start justify-start p-1" style={{ borderColor: theme.colors.text + '40', backgroundColor: theme.colors.text + '05' }}>
                        <span className="text-[6px] uppercase font-bold opacity-50">Cluster</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Annotation">
                <Centered>
                    <div className="relative">
                        <div className="w-2 h-2 rounded-full absolute -left-3 top-1" style={{ backgroundColor: theme.colors.accent }}></div>
                        <div className="text-[10px] italic opacity-60 max-w-[80px] leading-tight" style={{ color: theme.colors.text }}>
                            Note: Check latency here.
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Port: Input">
                <Centered>
                    <div className="w-4 h-4 border-2 rounded-full flex items-center justify-center" style={{ borderColor: theme.colors.success }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current" style={{ color: theme.colors.success }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Port: Output">
                <Centered>
                    <div className="w-4 h-4 border-2 rounded-sm flex items-center justify-center" style={{ borderColor: theme.colors.error }}>
                        <Icons.ChevronRight size="sm" className="text-[10px]" style={{ color: theme.colors.error }}/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Subprocess">
                <Centered>
                    <div className="w-12 h-8 border flex items-center justify-center relative" style={{ borderColor: theme.colors.text }}>
                        <div className="absolute left-1 top-0 bottom-0 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute right-1 top-0 bottom-0 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                        <span className="text-[8px] font-bold">+</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="BPMN Event">
                <Centered>
                    <div className="w-8 h-8 rounded-full border-2 border-double flex items-center justify-center" style={{ borderColor: theme.colors.primary }}>
                        <Icons.Clock size="sm" style={{ color: theme.colors.primary }}/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="BPMN Gateway">
                <Centered>
                    <div className="w-8 h-8 border rotate-45 flex items-center justify-center" style={{ borderColor: theme.colors.secondary }}>
                        <div className="-rotate-45 text-xs font-bold" style={{ color: theme.colors.secondary }}>+</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="ER Entity">
                <Centered>
                    <div className="w-12 h-8 border rounded-sm flex items-center justify-center relative shadow-sm" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}>
                        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-black"></div>
                        <span className="text-[8px] font-bold uppercase">USER</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="ER Relationship">
                <Centered>
                    <div className="w-10 h-6 border rotate-0 transform skew-x-12 flex items-center justify-center bg-gray-50" style={{ borderColor: theme.colors.text + '60' }}>
                        <span className="text-[6px] font-bold uppercase transform -skew-x-12">Owns</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="UML Class">
                <Centered>
                    <div className="w-12 border flex flex-col" style={{ borderColor: theme.colors.text }}>
                        <div className="h-4 border-b flex items-center justify-center text-[6px] font-bold" style={{ borderColor: theme.colors.text }}>User</div>
                        <div className="h-4 border-b flex items-center px-1 text-[5px]" style={{ borderColor: theme.colors.text }}>+ name: str</div>
                        <div className="h-4 flex items-center px-1 text-[5px]">+ login()</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="UML Interface">
                <Centered>
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full border flex items-center justify-center text-[6px]" style={{ borderColor: theme.colors.accent }}>I</div>
                        <div className="h-2 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="w-8 h-px" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 4. Network & Topology --- */}
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

            <CardWrapper title="Cloud Resource">
                <Centered>
                    <div className="w-12 h-8 border-2 border-dashed rounded-full flex items-center justify-center" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                        <Icons.Cloud size="sm"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Firewall">
                <Centered>
                    <div className="w-8 h-10 border-l-4 pl-1 flex flex-col justify-around" style={{ borderColor: theme.colors.error }}>
                        <div className="h-0.5 w-4 bg-gray-300"></div>
                        <div className="h-0.5 w-4 bg-gray-300"></div>
                        <div className="h-0.5 w-4 bg-gray-300"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Load Balancer">
                <Centered>
                    <div className="w-10 h-10 border rounded transform rotate-45 flex items-center justify-center" style={{ borderColor: theme.colors.accent }}>
                        <div className="-rotate-45 flex flex-col items-center gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-current" style={{ color: theme.colors.accent }}></div>
                            <div className="w-4 h-0.5 bg-current" style={{ color: theme.colors.accent }}></div>
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-current" style={{ color: theme.colors.accent }}></div>
                                <div className="w-1 h-1 rounded-full bg-current" style={{ color: theme.colors.accent }}></div>
                            </div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="User Group">
                <Centered>
                    <div className="relative w-8 h-8">
                        <div className="absolute top-0 left-0 w-6 h-6 rounded-full border bg-white flex items-center justify-center z-10" style={{ borderColor: theme.colors.text + '20' }}><Icons.User size="sm"/></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full border bg-white flex items-center justify-center" style={{ borderColor: theme.colors.text + '20' }}><Icons.User size="sm"/></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Edge: Encrypted">
                <Centered>
                    <div className="flex items-center w-full px-2 gap-1 text-[10px]" style={{ color: theme.colors.success }}>
                        <Icons.Lock size="sm" className="w-3 h-3"/>
                        <div className="h-0.5 flex-1 border-t border-dashed" style={{ borderColor: theme.colors.success }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Database Cluster">
                <Centered>
                    <div className="relative">
                        <div className="w-6 h-8 border rounded-lg bg-white absolute top-0 left-0 z-10 shadow-sm" style={{ borderColor: theme.colors.text + '40' }}></div>
                        <div className="w-6 h-8 border rounded-lg bg-white absolute top-1 left-1 z-20 shadow-sm" style={{ borderColor: theme.colors.text + '40' }}></div>
                        <div className="w-6 h-8 border rounded-lg bg-white relative z-30 flex items-center justify-center shadow-sm" style={{ borderColor: theme.colors.text + '40' }}>
                            <div className="w-4 h-1 border-b" style={{ borderColor: theme.colors.text + '20' }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="API Endpoint">
                <Centered>
                    <div className="w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center text-[8px] font-mono font-bold" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                        /api
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Lambda Function">
                <Centered>
                    <div className="w-8 h-8 rounded border flex items-center justify-center" style={{ borderColor: '#F59E0B', color: '#F59E0B' }}>
                        <span className="font-bold text-xs">λ</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Queue / Buffer">
                <Centered>
                    <div className="flex gap-0.5 border p-1 rounded bg-gray-50" style={{ borderColor: theme.colors.text + '20' }}>
                        <div className="w-2 h-4 bg-gray-300"></div>
                        <div className="w-2 h-4 bg-gray-300"></div>
                        <div className="w-2 h-4 bg-gray-300"></div>
                        <div className="w-2 h-4" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Mobile Device">
                <Centered>
                    <div className="w-6 h-10 border-2 rounded-md flex flex-col items-center justify-between py-1" style={{ borderColor: theme.colors.text }}>
                        <div className="w-2 h-0.5 bg-current rounded-full"></div>
                        <div className="w-1 h-1 rounded-full border border-current"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="IoT Sensor">
                <Centered>
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center relative" style={{ borderColor: theme.colors.success }}>
                        <div className="w-2 h-2 rounded-full bg-current animate-ping absolute" style={{ color: theme.colors.success }}></div>
                        <div className="w-2 h-2 rounded-full bg-current relative z-10" style={{ color: theme.colors.success }}></div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 5. Advanced Data Viz --- */}
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

            <CardWrapper title="Tree Graph" className="col-span-2">
                <Centered>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: theme.colors.text }}></div>
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="h-3 w-px bg-gray-300"></div>
                                <div className="w-px h-2 bg-gray-300 -mt-1 transform -rotate-45 origin-top"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300 mt-1"></div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-3 w-px bg-gray-300"></div>
                                <div className="w-2 h-2 rounded-full border-2 mt-2" style={{ borderColor: theme.colors.primary }}></div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-3 w-px bg-gray-300"></div>
                                <div className="w-px h-2 bg-gray-300 -mt-1 transform rotate-45 origin-top"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300 mt-1"></div>
                            </div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Circular Dependency" className="col-span-2">
                <Centered>
                    <div className="relative w-12 h-12">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
                        <svg className="absolute inset-0 w-full h-full animate-spin-slow">
                            <circle cx="24" cy="24" r="16" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
                        </svg>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Funnel Chart" className="col-span-2">
                <Centered>
                    <div className="flex flex-col items-center w-full max-w-[120px] gap-0.5">
                        <div className="h-3 w-full rounded-sm" style={{ backgroundColor: theme.colors.primary, opacity: 1 }}></div>
                        <div className="h-3 w-[80%] rounded-sm" style={{ backgroundColor: theme.colors.primary, opacity: 0.8 }}></div>
                        <div className="h-3 w-[60%] rounded-sm" style={{ backgroundColor: theme.colors.primary, opacity: 0.6 }}></div>
                        <div className="h-3 w-[40%] rounded-sm" style={{ backgroundColor: theme.colors.primary, opacity: 0.4 }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Gantt Bar" className="col-span-2">
                <Centered>
                    <div className="w-full px-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-1/4 h-2 rounded-full opacity-10" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="w-1/2 h-2 rounded-full shadow-sm" style={{ backgroundColor: theme.colors.primary }}></div>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                            <div className="w-1/3 h-2 rounded-full shadow-sm" style={{ backgroundColor: theme.colors.secondary }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Mini Map" className="col-span-2">
                <Centered>
                    <div className="w-20 h-14 border rounded bg-gray-50 relative overflow-hidden" style={{ borderColor: theme.colors.text + '20' }}>
                        <div className="absolute top-2 left-2 w-4 h-4 bg-gray-200 rounded-sm"></div>
                        <div className="absolute bottom-4 right-6 w-6 h-2 bg-gray-200 rounded-sm"></div>
                        <div className="absolute inset-0 border-2 border-dashed m-1 rounded-sm opacity-50" style={{ borderColor: theme.colors.primary }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Treemap Node" className="col-span-2">
                <Centered>
                    <div className="w-full h-16 p-1 flex">
                        <div className="w-2/3 h-full flex flex-col gap-1 pr-1">
                            <div className="h-2/3 w-full rounded-sm" style={{ backgroundColor: theme.colors.primary }}></div>
                            <div className="h-1/3 w-full rounded-sm" style={{ backgroundColor: theme.colors.primary, opacity: 0.7 }}></div>
                        </div>
                        <div className="w-1/3 h-full flex flex-col gap-1">
                            <div className="h-1/2 w-full rounded-sm" style={{ backgroundColor: theme.colors.secondary }}></div>
                            <div className="h-1/2 w-full rounded-sm" style={{ backgroundColor: theme.colors.accent }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Sunburst Segment" className="col-span-2">
                <Centered>
                    <div className="w-20 h-20 relative flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-[8px] opacity-20" style={{ borderColor: theme.colors.text }}></div>
                        <div className="absolute w-3/4 h-3/4 rounded-full border-[8px]" style={{ borderColor: theme.colors.primary, borderRightColor: 'transparent', transform: 'rotate(45deg)' }}></div>
                        <div className="absolute w-1/2 h-1/2 rounded-full border-[8px]" style={{ borderColor: theme.colors.secondary }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Hexbin Grid" className="col-span-2">
                <Centered>
                    <div className="flex flex-col -space-y-1">
                        <div className="flex gap-1 justify-center">
                            <div className="w-4 h-4 bg-current opacity-20" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', color: theme.colors.primary }}></div>
                            <div className="w-4 h-4 bg-current" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', color: theme.colors.primary }}></div>
                        </div>
                        <div className="flex gap-1 justify-center">
                            <div className="w-4 h-4 bg-current" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', color: theme.colors.primary }}></div>
                            <div className="w-4 h-4 bg-current opacity-40" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', color: theme.colors.primary }}></div>
                            <div className="w-4 h-4 bg-current opacity-60" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', color: theme.colors.primary }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Streamgraph Layer" className="col-span-2">
                <Centered>
                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                        <path d="M0,20 Q25,10 50,20 T100,20 V40 H0 Z" fill={theme.colors.secondary} opacity="0.5" />
                        <path d="M0,25 Q25,15 50,25 T100,25 V40 H0 Z" fill={theme.colors.primary} opacity="0.8" />
                        <path d="M0,30 Q25,20 50,30 T100,30 V40 H0 Z" fill={theme.colors.accent} />
                    </svg>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Parallel Coords" className="col-span-2">
                <Centered>
                    <div className="w-full h-16 flex justify-between px-4 relative">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-full w-px bg-gray-200" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        ))}
                        <svg className="absolute inset-0 w-full h-full px-4 overflow-visible">
                            <polyline points="0,10 33,40 66,20 100,50" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                            <polyline points="0,50 33,20 66,30 100,10" fill="none" stroke={theme.colors.secondary} strokeWidth="1.5" vectorEffect="non-scaling-stroke" opacity="0.5" />
                        </svg>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Chord Diagram" className="col-span-2">
                <Centered>
                    <div className="w-16 h-16 rounded-full border-4 relative" style={{ borderColor: theme.colors.text + '10' }}>
                        <svg className="absolute inset-0 w-full h-full overflow-visible">
                            <path d="M10,5 Q32,32 54,10" fill="none" stroke={theme.colors.primary} strokeWidth="2" opacity="0.5" />
                            <path d="M10,54 Q32,32 54,54" fill="none" stroke={theme.colors.secondary} strokeWidth="2" opacity="0.5" />
                            <path d="M5,32 Q32,32 59,32" fill="none" stroke={theme.colors.accent} strokeWidth="2" opacity="0.5" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-current border-r-current" style={{ color: theme.colors.primary, transform: 'rotate(15deg)' }}></div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>
    </div>
  );
};