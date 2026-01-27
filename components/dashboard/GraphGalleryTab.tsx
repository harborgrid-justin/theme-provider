import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full overflow-hidden">{children}</div>
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

  const CardWrapper: React.FC<{ children?: React.ReactNode; title: string; className?: string }> = ({ children, title, className = '' }) => (
      <ThemedCard className={`flex flex-col justify-between h-full group hover:shadow-lg transition-shadow min-h-[120px] ${className}`}>
          <div className="text-[10px] uppercase font-bold tracking-wider opacity-40 mb-3 truncate" style={{ color: theme.colors.text }}>{title}</div>
          <div className="flex-1 flex flex-col justify-center relative w-full min-w-0">
            {children}
          </div>
      </ThemedCard>
  );

  // Reusable SVG props
  const svgStyle = { overflow: 'visible' as const };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Data & Diagram Primitives (84 Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Visual language tokens for dashboards, flowcharts, and data storytelling.
        </p>

        {/* --- 1. Micro Charts --- */}
        <div style={sectionTitleStyle}>Micro Charts & KPIs</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Sparkline: Line">
                <Centered>
                    <svg viewBox="0 0 100 30" width="100%" height="40" style={svgStyle}>
                        <path d="M0,25 Q20,5 40,20 T100,10" fill="none" stroke={theme.colors.primary} strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </Centered>
            </CardWrapper>
            
            <CardWrapper title="Sparkline: Area">
                <Centered>
                    <svg viewBox="0 0 100 30" width="100%" height="40" style={svgStyle}>
                        <path d="M0,25 Q20,5 40,20 T100,10 V30 H0 Z" fill={theme.colors.primary} opacity="0.2" />
                        <path d="M0,25 Q20,5 40,20 T100,10" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                    </svg>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Sparkline: Bar">
                <Centered>
                    <div className="flex items-end gap-1 h-8">
                        {[40, 70, 35, 80, 50, 60, 45].map((h, i) => (
                            <div key={i} className="w-1.5 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: theme.colors.primary }}></div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Win / Loss">
                <Centered>
                    <div className="flex items-center gap-1 h-8">
                        {[1, 1, -1, 1, -1, 1, 1].map((v, i) => (
                            <div key={i} className="w-1.5 h-full relative">
                                <div 
                                    className="absolute w-full rounded-sm" 
                                    style={{ 
                                        height: '40%', 
                                        top: v > 0 ? '0' : 'auto', 
                                        bottom: v < 0 ? '0' : 'auto',
                                        backgroundColor: v > 0 ? theme.colors.success : theme.colors.error 
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Bullet Chart">
                <Centered>
                    <div className="w-full h-3 bg-gray-200 rounded-sm relative overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div className="absolute top-0 left-0 h-full w-3/4 opacity-30" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-1 left-0 h-1 w-1/2 rounded-sm" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-0 left-[60%] h-full w-0.5 bg-red-500"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Progress Bar">
                <Centered>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div className="h-full w-2/3 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Progress Ring">
                 <Centered>
                    <div className="w-10 h-10 rounded-full border-4 relative flex items-center justify-center text-[8px] font-bold" style={{ borderColor: theme.colors.text+'10', color: theme.colors.primary}}>
                        75%
                        <div className="absolute -top-1 -left-1 w-full h-full rounded-full border-4 border-t-transparent border-r-transparent transform -rotate-45" style={{borderColor: theme.colors.primary}}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Activity Gauge">
                 <Centered>
                    <div className="w-10 h-10 rounded-full border-4 border-gray-100 relative">
                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 transform rotate-45"></div>
                        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-green-500 border-l-green-500 transform -rotate-12"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Solid Gauge">
                 <Centered>
                    <div className="w-12 h-6 overflow-hidden relative">
                         <div className="w-12 h-12 rounded-full border-[6px] border-t-transparent border-r-transparent border-b-transparent transform rotate-45" style={{borderColor: theme.colors.text+'10'}}></div>
                         <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-[6px] border-transparent border-t-current transform rotate-45" style={{color: theme.colors.primary}}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Meter">
                <Centered>
                    <div className="w-full h-2 rounded-full flex gap-0.5 overflow-hidden">
                        <div className="flex-1 bg-green-500"></div>
                        <div className="flex-1 bg-green-500"></div>
                        <div className="flex-1 bg-yellow-500"></div>
                        <div className="flex-1 bg-gray-200"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Rating Bar">
                <Centered>
                    <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className={`w-1.5 h-4 rounded-sm ${i < 4 ? 'opacity-100' : 'opacity-20'}`} style={{ backgroundColor: theme.colors.warning }}></div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Step Progress">
                <Centered>
                    <div className="flex items-center w-full px-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="flex-1 h-px bg-blue-500"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
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
                        <div className="absolute left-2 right-2 h-px" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                        <div className="w-12 h-6 border bg-white relative z-10 flex items-center justify-center" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface }}>
                            <div className="w-px h-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        </div>
                        <div className="absolute left-2 h-2 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute right-2 h-2 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>
            
            <CardWrapper title="Candlestick">
                <Centered>
                     <div className="flex gap-1 items-end h-10">
                         <div className="w-1.5 h-6 bg-green-500 relative"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-8 bg-green-500"></div></div>
                         <div className="w-1.5 h-3 bg-red-500 relative mb-3"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-5 bg-red-500"></div></div>
                         <div className="w-1.5 h-5 bg-green-500 relative"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-7 bg-green-500"></div></div>
                     </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Waterfall">
                <Centered>
                    <div className="flex items-end gap-0.5 h-10">
                        <div className="w-2 h-4 bg-green-500 mb-0"></div>
                        <div className="w-2 h-3 bg-green-500 mb-4"></div>
                        <div className="w-2 h-2 bg-red-500 mb-5"></div>
                        <div className="w-2 h-5 bg-blue-500 mb-0"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Funnel">
                <Centered>
                    <div className="flex flex-col items-center gap-0.5">
                        <div className="h-1.5 w-12 opacity-100" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="h-1.5 w-10 opacity-80" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="h-1.5 w-8 opacity-60" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="h-1.5 w-6 opacity-40" style={{backgroundColor: theme.colors.primary}}></div>
                    </div>
                </Centered>
            </CardWrapper>
            
            <CardWrapper title="Scatter Plot">
                 <Centered>
                     <div className="w-12 h-12 relative border-l border-b border-gray-300">
                         <div className="absolute left-2 bottom-2 w-1.5 h-1.5 rounded-full" style={{backgroundColor: theme.colors.primary}}></div>
                         <div className="absolute left-4 bottom-6 w-1.5 h-1.5 rounded-full opacity-60" style={{backgroundColor: theme.colors.primary}}></div>
                         <div className="absolute left-7 bottom-4 w-1.5 h-1.5 rounded-full" style={{backgroundColor: theme.colors.accent}}></div>
                     </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Bubble Chart">
                 <Centered>
                     <div className="w-12 h-12 relative border-l border-b border-gray-300">
                         <div className="absolute left-2 bottom-2 w-2 h-2 rounded-full opacity-50" style={{backgroundColor: theme.colors.primary}}></div>
                         <div className="absolute left-6 bottom-6 w-4 h-4 rounded-full opacity-50" style={{backgroundColor: theme.colors.secondary}}></div>
                         <div className="absolute left-8 bottom-2 w-3 h-3 rounded-full opacity-50" style={{backgroundColor: theme.colors.accent}}></div>
                     </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Histogram">
                <Centered>
                    <div className="flex items-end gap-px h-10 opacity-80">
                        <div className="w-1.5 h-2 bg-blue-500"></div>
                        <div className="w-1.5 h-4 bg-blue-500"></div>
                        <div className="w-1.5 h-8 bg-blue-500"></div>
                        <div className="w-1.5 h-6 bg-blue-500"></div>
                        <div className="w-1.5 h-3 bg-blue-500"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Bell Curve">
                <Centered>
                    <svg viewBox="0 0 50 20" width="100%" height="30" style={svgStyle}>
                        <path d="M0,20 C10,20 15,0 25,0 C35,0 40,20 50,20" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                        <line x1="25" y1="0" x2="25" y2="20" stroke={theme.colors.text} strokeDasharray="2 2" strokeWidth="0.5" opacity="0.5" />
                    </svg>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Error Bar">
                <Centered>
                    <div className="w-16 h-10 border-b border-l relative">
                        <div className="absolute left-3 bottom-4 w-1 h-1 rounded-full bg-blue-500"></div>
                        <div className="absolute left-2 bottom-2 w-3 h-px bg-black"></div>
                        <div className="absolute left-2 bottom-6 w-3 h-px bg-black"></div>
                        <div className="absolute left-3.5 bottom-2 w-px h-4 bg-black"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Dot Plot">
                <Centered>
                    <div className="flex flex-col gap-1 w-full px-2">
                        <div className="h-px bg-gray-200 w-full relative"><div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"></div></div>
                        <div className="h-px bg-gray-200 w-full relative"><div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-500"></div></div>
                        <div className="h-px bg-gray-200 w-full relative"><div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-500"></div></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Pyramid">
                <Centered>
                    <div className="flex flex-col items-center justify-end h-10 gap-px">
                        <div className="w-2 h-2 bg-yellow-500" style={{clipPath: 'polygon(50% 0, 100% 100%, 0 100%)'}}></div>
                        <div className="w-6 h-3 bg-orange-500"></div>
                        <div className="w-10 h-3 bg-red-500"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="OHLC">
                <Centered>
                     <div className="flex gap-2 items-center h-10">
                         <div className="w-px h-8 bg-gray-800 relative">
                             <div className="absolute top-2 left-0 w-2 h-px bg-gray-800"></div>
                             <div className="absolute bottom-2 -left-2 w-2 h-px bg-gray-800"></div>
                         </div>
                         <div className="w-px h-6 bg-gray-800 relative">
                             <div className="absolute top-1 -left-2 w-2 h-px bg-gray-800"></div>
                             <div className="absolute bottom-1 left-0 w-2 h-px bg-gray-800"></div>
                         </div>
                     </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 3. Comparison & Part-to-Whole --- */}
        <div style={sectionTitleStyle}>Comparison & Part-to-Whole</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Bar: Vertical">
                <Centered>
                    <div className="flex items-end gap-1 h-10">
                        {[40, 70, 35, 80].map((h, i) => (
                            <div key={i} className="w-2 rounded-t-sm opacity-80" style={{ height: `${h}%`, backgroundColor: i % 2 === 0 ? theme.colors.primary : theme.colors.secondary }}></div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Bar: Horizontal">
                <Centered>
                    <div className="flex flex-col gap-1 w-full px-2">
                        {[40, 70, 35].map((w, i) => (
                            <div key={i} className="h-2 rounded-r-sm opacity-80" style={{ width: `${w}%`, backgroundColor: theme.colors.primary }}></div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Bar: Stacked">
                <Centered>
                    <div className="w-6 flex flex-col gap-0.5 h-12 justify-end">
                        <div className="w-full h-1/4 rounded-sm" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="w-full h-1/3 rounded-sm" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="w-full h-1/6 rounded-sm" style={{ backgroundColor: theme.colors.accent }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Bar: 100% Stacked">
                <Centered>
                    <div className="flex gap-1 h-10">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-2 flex flex-col h-full rounded-sm overflow-hidden">
                                <div className="flex-1 bg-blue-500"></div>
                                <div className="flex-1 bg-red-500"></div>
                                <div className="flex-1 bg-yellow-500"></div>
                            </div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Grouped Bar">
                <Centered>
                    <div className="flex gap-1 items-end h-10">
                        <div className="w-1.5 h-6 bg-blue-500"></div>
                        <div className="w-1.5 h-8 bg-red-500 mr-1"></div>
                        <div className="w-1.5 h-4 bg-blue-500"></div>
                        <div className="w-1.5 h-5 bg-red-500"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Lollipop">
                <Centered>
                    <div className="flex items-end gap-2 h-10">
                        <div className="w-px h-6 bg-gray-400 relative"><div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-blue-500"></div></div>
                        <div className="w-px h-8 bg-gray-400 relative"><div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-blue-500"></div></div>
                        <div className="w-px h-4 bg-gray-400 relative"><div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-blue-500"></div></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Dumbbell Plot">
                <Centered>
                    <div className="flex flex-col justify-center gap-2 w-full px-2">
                        <div className="h-px bg-gray-300 relative w-full flex items-center justify-between px-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="h-px bg-gray-300 relative w-full flex items-center justify-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Pie Chart">
                 <Centered>
                    <div className="w-10 h-10 rounded-full border-[10px] border-l-blue-500 border-t-blue-500 border-r-red-500 border-b-yellow-500 transform rotate-45"></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Donut Chart">
                 <Centered>
                    <div className="w-10 h-10 rounded-full border-[6px] relative" style={{ borderColor: theme.colors.text+'10', borderTopColor: theme.colors.primary, borderRightColor: theme.colors.secondary, transform: 'rotate(-45deg)'}}></div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Semi-Circle">
                 <Centered>
                    <div className="w-12 h-6 overflow-hidden relative">
                         <div className="w-12 h-12 rounded-full border-[8px] border-blue-500 border-b-transparent border-r-transparent transform -rotate-45"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Treemap">
                <Centered>
                    <div className="w-12 h-12 flex flex-wrap border border-white">
                        <div className="w-2/3 h-full bg-blue-200 border-r border-white"></div>
                        <div className="w-1/3 h-1/2 bg-blue-300 border-b border-white"></div>
                        <div className="w-1/3 h-1/2 bg-blue-400"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Waffle Chart">
                <Centered>
                    <div className="grid grid-cols-3 gap-0.5">
                        {[1,1,1,1,1,0,0,0,0].map((v, i) => (
                            <div key={i} className={`w-3 h-3 rounded-sm ${v ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 4. Network & Infrastructure --- */}
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
            
             <CardWrapper title="Database Node">
                <Centered>
                    <div className="w-8 h-8 rounded-full border-2 flex flex-col items-center justify-center shadow-sm text-[8px] font-mono" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}>
                        <div className="w-full h-px bg-current opacity-20 mb-1"></div>
                        SQL
                        <div className="w-full h-px bg-current opacity-20 mt-1"></div>
                    </div>
                </Centered>
            </CardWrapper>
            
             <CardWrapper title="Load Balancer">
                <Centered>
                    <div className="flex items-center gap-1">
                        <div className="w-1 h-8 bg-gray-300 rounded-full"></div>
                        <div className="flex flex-col gap-1">
                             <Icons.ChevronRight size="sm" className="w-2 h-2"/>
                             <Icons.ChevronRight size="sm" className="w-2 h-2"/>
                             <Icons.ChevronRight size="sm" className="w-2 h-2"/>
                        </div>
                         <div className="w-6 h-6 border rounded bg-white flex items-center justify-center font-bold text-[8px]">LB</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Cloud Instance">
                <Centered>
                    <div className="relative">
                        <Icons.Cloud size="md" className="text-blue-400" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Firewall">
                <Centered>
                    <div className="w-8 h-8 border-2 border-orange-500 rounded flex items-center justify-center relative bg-orange-50">
                        <div className="w-4 h-0.5 bg-orange-500"></div>
                        <div className="absolute w-0.5 h-4 bg-orange-500"></div>
                        <div className="absolute -top-2 -right-2"><Icons.Lock size="sm" className="w-3 h-3 text-orange-600"/></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Storage Bucket">
                <Centered>
                    <div className="w-8 h-8 border-b-2 border-x-2 rounded-b-lg relative mt-2 flex items-center justify-center" style={{ borderColor: theme.colors.text }}>
                        <div className="absolute -top-2 w-8 h-4 border-2 rounded-[50%]" style={{ borderColor: theme.colors.text, backgroundColor: '#fff' }}></div>
                        <span className="text-[8px] pt-1">S3</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Cluster">
                <Centered>
                    <div className="grid grid-cols-2 gap-1">
                        <div className="w-3 h-3 border rounded bg-blue-100"></div>
                        <div className="w-3 h-3 border rounded bg-blue-100"></div>
                        <div className="w-3 h-3 border rounded bg-blue-100"></div>
                        <div className="w-3 h-3 border rounded bg-blue-100"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="API Gateway">
                <Centered>
                    <div className="w-8 h-8 border rounded flex items-center justify-center text-[8px] font-bold tracking-tighter" style={{borderColor: theme.colors.accent}}>
                        {'{api}'}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="VPN Tunnel">
                <Centered>
                    <div className="w-full h-4 border-y border-dashed relative flex items-center justify-center">
                        <div className="w-full h-2 bg-gray-100 opacity-50"></div>
                        <Icons.Lock size="sm" className="absolute w-3 h-3"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="CDN Edge">
                <Centered>
                    <div className="relative w-8 h-8">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="absolute inset-0 border rounded-full opacity-30 border-blue-500"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Pod (K8s)">
                <Centered>
                    <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center p-1">
                        <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                            <div className="bg-blue-200 rounded-sm"></div>
                            <div className="bg-blue-200 rounded-sm"></div>
                            <div className="bg-blue-200 rounded-sm"></div>
                            <div className="bg-blue-200 rounded-sm"></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Lambda">
                <Centered>
                    <div className="text-orange-500 font-serif font-bold text-xl">λ</div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 5. Advanced Visualization --- */}
        <div style={sectionTitleStyle}>Advanced Visualization</div>
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

            <CardWrapper title="Radar Chart">
                <Centered>
                    <div className="w-12 h-12 relative flex items-center justify-center">
                         <div className="w-full h-full border border-dashed rounded-full opacity-30"></div>
                         <div className="absolute w-8 h-8 bg-blue-500 opacity-30 transform rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                         <div className="absolute w-8 h-8 bg-blue-500 opacity-30 transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Heatmap Cell">
                 <Centered>
                    <div className="grid grid-cols-3 gap-0.5">
                        {[0.2, 0.4, 0.6, 0.8, 1, 0.3, 0.5, 0.7, 0.9].map((o,i) => (
                            <div key={i} className="w-3 h-3 rounded-sm" style={{backgroundColor: theme.colors.primary, opacity: o}}></div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Choropleth">
                <Centered>
                    <svg viewBox="0 0 40 30" className="w-10 h-8">
                        <path d="M0,0 H20 V15 H0 Z" fill={theme.colors.primary} opacity="0.4"/>
                        <path d="M20,0 H40 V15 H20 Z" fill={theme.colors.primary} opacity="0.8"/>
                        <path d="M0,15 H20 V30 H0 Z" fill={theme.colors.primary} opacity="0.2"/>
                        <path d="M20,15 H40 V30 H20 Z" fill={theme.colors.primary} opacity="0.6"/>
                    </svg>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Chord Diagram">
                <Centered>
                    <div className="w-10 h-10 rounded-full border-2 border-gray-300 relative overflow-hidden">
                        <svg viewBox="0 0 40 40" className="absolute inset-0">
                            <path d="M20,20 Q10,10 20,0" fill="none" stroke={theme.colors.primary} strokeWidth="1" opacity="0.5" />
                            <path d="M20,20 Q30,10 20,0" fill="none" stroke={theme.colors.secondary} strokeWidth="1" opacity="0.5" />
                            <path d="M20,20 Q10,30 20,40" fill="none" stroke={theme.colors.accent} strokeWidth="1" opacity="0.5" />
                        </svg>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Tree Diagram">
                <Centered>
                    <div className="flex flex-col items-center">
                        <div className="w-2 h-2 bg-black rounded-full mb-1"></div>
                        <div className="w-8 h-px bg-black mb-1"></div>
                        <div className="flex justify-between w-8">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Network Graph">
                <Centered>
                    <div className="relative w-10 h-10">
                        <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="absolute bottom-0 left-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <line x1="4" y1="4" x2="36" y2="4" stroke="black" strokeWidth="0.5" opacity="0.2"/>
                            <line x1="4" y1="4" x2="12" y2="36" stroke="black" strokeWidth="0.5" opacity="0.2"/>
                            <line x1="36" y1="4" x2="12" y2="36" stroke="black" strokeWidth="0.5" opacity="0.2"/>
                        </svg>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Org Chart">
                <Centered>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-6 h-3 border rounded bg-white"></div>
                        <div className="w-px h-1 bg-black"></div>
                        <div className="w-8 h-px bg-black"></div>
                        <div className="flex gap-2">
                            <div className="flex flex-col items-center"><div className="w-px h-1 bg-black"></div><div className="w-4 h-3 border rounded bg-white"></div></div>
                            <div className="flex flex-col items-center"><div className="w-px h-1 bg-black"></div><div className="w-4 h-3 border rounded bg-white"></div></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Arc Diagram">
                <Centered>
                    <div className="flex items-end gap-1 h-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <path d="M10,25 Q15,5 20,25" fill="none" stroke="black" opacity="0.2"/>
                            <path d="M10,25 Q20,0 30,25" fill="none" stroke="black" opacity="0.2"/>
                        </svg>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Mind Map">
                <Centered>
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-400 rounded-full z-10"></div>
                        <div className="absolute top-0 left-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="absolute bottom-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                        <svg className="absolute inset-0 w-full h-full">
                            <line x1="20" y1="20" x2="4" y2="4" stroke="black" opacity="0.1"/>
                            <line x1="20" y1="20" x2="36" y2="4" stroke="black" opacity="0.1"/>
                            <line x1="20" y1="20" x2="20" y2="36" stroke="black" opacity="0.1"/>
                        </svg>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Dependency Wheel">
                <Centered>
                    <div className="w-10 h-10 rounded-full border border-dashed relative">
                        <div className="absolute inset-2 rounded-full border opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Surface 3D">
                <Centered>
                    <div className="w-10 h-8 border border-gray-300 transform -skew-x-12 relative overflow-hidden bg-gray-50">
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10">
                            {Array.from({length: 16}).map((_, i) => <div key={i} className="border border-gray-400"></div>)}
                        </div>
                        <path d="M0,20 Q20,0 40,20" stroke="blue" fill="none" strokeWidth="2" />
                    </div>
                </Centered>
            </CardWrapper>
        </div>
    </div>
  );
};