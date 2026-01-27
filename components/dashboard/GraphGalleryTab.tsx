import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const GraphGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  // Reusable SVG props
  const svgStyle = { overflow: 'visible' as const };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Data & Diagram Primitives (84 Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Visual language tokens for dashboards, flowcharts, and data storytelling.
        </p>

        {/* --- 1. Micro Charts --- */}
        <SectionTitle>Micro Charts & KPIs</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Sparkline: Line" centered>
                <svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none" style={svgStyle}>
                    <path d="M5,25 Q25,5 50,20 T95,10" fill="none" stroke={theme.colors.primary} strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Sparkline: Area" centered>
                <svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none" style={svgStyle}>
                    <path d="M0,25 Q25,5 50,20 T100,10 V35 H0 Z" fill={theme.colors.primary} opacity="0.2" />
                    <path d="M0,25 Q25,5 50,20 T100,10" fill="none" stroke={theme.colors.primary} strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Sparkline: Bar" centered>
                <div className="flex items-end justify-between w-full h-8 px-2 gap-1">
                    {[40, 70, 35, 80, 50, 60, 45].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: theme.colors.primary }}></div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Win / Loss" centered>
                <div className="flex items-center justify-between w-full h-10 px-2 gap-1">
                    {[1, 1, -1, 1, -1, 1, 1].map((v, i) => (
                        <div key={i} className="flex-1 h-full relative">
                            <div 
                                className="absolute w-full rounded-sm" 
                                style={{ 
                                    height: '40%', 
                                    top: v > 0 ? '50%' : 'auto', 
                                    bottom: v < 0 ? '50%' : 'auto',
                                    transform: v > 0 ? 'translateY(-100%)' : 'translateY(0)',
                                    backgroundColor: v > 0 ? theme.colors.success : theme.colors.error 
                                }}
                            ></div>
                            <div className="absolute top-1/2 w-full h-px bg-gray-200"></div>
                        </div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Bullet Chart" centered>
                <div className="w-full h-4 relative flex items-center">
                    <div className="w-full h-2 rounded-full overflow-hidden relative" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div className="absolute top-0 left-0 h-full w-3/4 opacity-30" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-0 left-0 h-full w-1/2" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-[60%] w-1 bg-red-500 rounded-full h-full"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Progress Bar" centered>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                    <div className="h-full w-2/3 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Progress Ring" centered>
                <div className="w-12 h-12 rounded-full border-[3px] relative flex items-center justify-center text-[10px] font-bold" style={{ borderColor: theme.colors.text+'10', color: theme.colors.primary}}>
                    75%
                    <div className="absolute -top-[3px] -left-[3px] -right-[3px] -bottom-[3px] rounded-full border-[3px] border-t-transparent border-r-transparent transform -rotate-45" style={{borderColor: theme.colors.primary}}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Activity Gauge" centered>
                <div className="w-12 h-12 rounded-full border-[3px] border-gray-100 relative">
                    <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-blue-500 transform rotate-45"></div>
                    <div className="absolute inset-1.5 rounded-full border-[3px] border-transparent border-t-green-500 border-l-green-500 transform -rotate-12"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Solid Gauge" centered>
                <div className="w-16 h-8 overflow-hidden relative flex justify-center">
                        <div className="w-16 h-16 rounded-full border-[8px] border-t-transparent border-r-transparent border-b-transparent transform rotate-45 absolute top-0" style={{borderColor: theme.colors.text+'10'}}></div>
                        <div className="w-16 h-16 rounded-full border-[8px] border-transparent border-t-current transform rotate-45 absolute top-0" style={{color: theme.colors.primary}}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Meter" centered>
                <div className="w-full h-2 rounded-full flex gap-0.5 overflow-hidden">
                    <div className="flex-1 bg-green-500"></div>
                    <div className="flex-1 bg-green-500"></div>
                    <div className="flex-1 bg-yellow-500"></div>
                    <div className="flex-1 bg-gray-200" style={{ opacity: 0.2 }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Rating Bar" centered>
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-2 h-6 rounded-sm transition-opacity ${i < 4 ? 'opacity-100' : 'opacity-20'}`} style={{ backgroundColor: theme.colors.warning }}></div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Step Progress" centered>
                <div className="flex items-center w-full justify-between relative px-2">
                    <div className="absolute top-1/2 left-2 right-2 h-px -z-10 -translate-y-1/2" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                    <div className="absolute top-1/2 left-2 right-1/2 h-px -z-10 -translate-y-1/2" style={{ backgroundColor: theme.colors.primary }}></div>
                    
                    <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm box-content" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm box-content" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm box-content" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                </div>
            </GalleryItem>
        </div>
        
        {/* --- 2. Statistical & Financial --- */}
        <SectionTitle>Statistical & Financial</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Box Plot" centered>
                <div className="h-full w-full flex items-center justify-center relative px-2">
                    <div className="absolute left-4 right-4 h-px" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                    <div className="h-8 w-1/2 border relative z-10 flex items-center justify-center bg-white" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface }}>
                        <div className="w-px h-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                    <div className="absolute left-4 h-3 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="absolute right-4 h-3 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            
            <GalleryItem title="Candlestick" centered>
                    <div className="flex gap-2 items-end h-12">
                        <div className="w-2 h-8 bg-green-500 relative"><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-12 bg-green-500"></div></div>
                        <div className="w-2 h-4 bg-red-500 relative mb-4"><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-8 bg-red-500"></div></div>
                        <div className="w-2 h-6 bg-green-500 relative"><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-10 bg-green-500"></div></div>
                    </div>
            </GalleryItem>

            <GalleryItem title="Waterfall" centered>
                <div className="flex items-end gap-1 h-12">
                    <div className="w-3 h-5 bg-green-500 mb-0"></div>
                    <div className="w-3 h-4 bg-green-500 mb-5"></div>
                    <div className="w-3 h-3 bg-red-500 mb-6"></div>
                    <div className="w-3 h-6 bg-blue-500 mb-0"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Funnel" centered>
                <div className="flex flex-col items-center gap-0.5 w-full">
                    <div className="h-2 w-3/4 opacity-100 rounded-sm" style={{backgroundColor: theme.colors.primary}}></div>
                    <div className="h-2 w-2/3 opacity-80 rounded-sm" style={{backgroundColor: theme.colors.primary}}></div>
                    <div className="h-2 w-1/2 opacity-60 rounded-sm" style={{backgroundColor: theme.colors.primary}}></div>
                    <div className="h-2 w-1/3 opacity-40 rounded-sm" style={{backgroundColor: theme.colors.primary}}></div>
                </div>
            </GalleryItem>
            
            <GalleryItem title="Scatter Plot" centered>
                    <div className="w-16 h-16 relative border-l border-b border-gray-300">
                        <div className="absolute left-2 bottom-2 w-1.5 h-1.5 rounded-full" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="absolute left-6 bottom-8 w-1.5 h-1.5 rounded-full opacity-60" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="absolute left-10 bottom-5 w-1.5 h-1.5 rounded-full" style={{backgroundColor: theme.colors.accent}}></div>
                        <div className="absolute left-4 bottom-12 w-1.5 h-1.5 rounded-full" style={{backgroundColor: theme.colors.secondary}}></div>
                    </div>
            </GalleryItem>

            <GalleryItem title="Bubble Chart" centered>
                    <div className="w-16 h-16 relative border-l border-b border-gray-300">
                        <div className="absolute left-2 bottom-2 w-3 h-3 rounded-full opacity-50" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="absolute left-8 bottom-8 w-6 h-6 rounded-full opacity-50" style={{backgroundColor: theme.colors.secondary}}></div>
                        <div className="absolute left-10 bottom-3 w-4 h-4 rounded-full opacity-50" style={{backgroundColor: theme.colors.accent}}></div>
                    </div>
            </GalleryItem>

            <GalleryItem title="Histogram" centered>
                <div className="flex items-end gap-px h-12 opacity-80">
                    <div className="w-2 h-3 bg-blue-500"></div>
                    <div className="w-2 h-6 bg-blue-500"></div>
                    <div className="w-2 h-10 bg-blue-500"></div>
                    <div className="w-2 h-8 bg-blue-500"></div>
                    <div className="w-2 h-4 bg-blue-500"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Bell Curve" centered>
                <svg viewBox="0 0 60 30" width="100%" height="40" style={svgStyle}>
                    <path d="M0,30 C10,30 20,5 30,5 C40,5 50,30 60,30" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                    <line x1="30" y1="5" x2="30" y2="30" stroke={theme.colors.text} strokeDasharray="2 2" strokeWidth="1" opacity="0.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Error Bar" centered>
                <div className="w-16 h-16 border-b border-l relative flex items-center justify-center">
                    <div className="relative h-10 w-px bg-black mb-2">
                        <div className="absolute top-0 -left-1.5 w-3 h-px bg-black"></div>
                        <div className="absolute bottom-0 -left-1.5 w-3 h-px bg-black"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Dot Plot" centered>
                <div className="flex flex-col gap-2 w-full px-2">
                    <div className="h-px w-full relative flex items-center" style={{ backgroundColor: theme.colors.text + '20' }}>
                        <div className="absolute left-1/4 w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="h-px w-full relative flex items-center" style={{ backgroundColor: theme.colors.text + '20' }}>
                        <div className="absolute left-1/2 w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <div className="h-px w-full relative flex items-center" style={{ backgroundColor: theme.colors.text + '20' }}>
                        <div className="absolute left-3/4 w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Pyramid" centered>
                <div className="flex flex-col items-center justify-end h-12 gap-px">
                    <div className="w-4 h-4 bg-yellow-500" style={{clipPath: 'polygon(50% 0, 100% 100%, 0 100%)'}}></div>
                    <div className="w-8 h-4 bg-orange-500"></div>
                    <div className="w-12 h-4 bg-red-500"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="OHLC" centered>
                    <div className="flex gap-3 items-center h-12">
                        <div className="w-px h-10 relative bg-gray-800">
                            <div className="absolute top-2 left-0 w-2 h-px bg-gray-800"></div>
                            <div className="absolute bottom-2 -left-2 w-2 h-px bg-gray-800"></div>
                        </div>
                        <div className="w-px h-8 relative bg-gray-800">
                            <div className="absolute top-1 -left-2 w-2 h-px bg-gray-800"></div>
                            <div className="absolute bottom-1 left-0 w-2 h-px bg-gray-800"></div>
                        </div>
                    </div>
            </GalleryItem>
        </div>

        {/* --- 3. Comparison & Part-to-Whole --- */}
        <SectionTitle>Comparison & Part-to-Whole</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Bar: Vertical" centered>
                <div className="flex items-end gap-1 h-12">
                    {[40, 70, 35, 80].map((h, i) => (
                        <div key={i} className="w-3 rounded-t-sm opacity-80" style={{ height: `${h}%`, backgroundColor: i % 2 === 0 ? theme.colors.primary : theme.colors.secondary }}></div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Bar: Horizontal" centered>
                <div className="flex flex-col gap-1 w-full px-2">
                    {[40, 70, 35].map((w, i) => (
                        <div key={i} className="h-2 rounded-r-sm opacity-80" style={{ width: `${w}%`, backgroundColor: theme.colors.primary }}></div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Bar: Stacked" centered>
                <div className="w-8 flex flex-col gap-0.5 h-16 justify-end">
                    <div className="w-full h-1/4 rounded-sm" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-full h-1/3 rounded-sm" style={{ backgroundColor: theme.colors.secondary }}></div>
                    <div className="w-full h-1/6 rounded-sm" style={{ backgroundColor: theme.colors.accent }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Bar: 100% Stacked" centered>
                <div className="flex gap-1 h-12 w-full px-4 justify-center">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-4 flex flex-col h-full rounded-sm overflow-hidden">
                            <div className="flex-1 bg-blue-500"></div>
                            <div className="flex-1 bg-red-500"></div>
                            <div className="flex-1 bg-yellow-500"></div>
                        </div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Grouped Bar" centered>
                <div className="flex gap-1 items-end h-12">
                    <div className="w-2 h-8 bg-blue-500"></div>
                    <div className="w-2 h-10 bg-red-500 mr-1"></div>
                    <div className="w-2 h-5 bg-blue-500"></div>
                    <div className="w-2 h-6 bg-red-500"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Lollipop" centered>
                <div className="flex items-end gap-3 h-12">
                    <div className="w-px h-8 bg-gray-400 relative"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500"></div></div>
                    <div className="w-px h-10 bg-gray-400 relative"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500"></div></div>
                    <div className="w-px h-6 bg-gray-400 relative"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500"></div></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Dumbbell Plot" centered>
                <div className="flex flex-col justify-center gap-3 w-full px-2">
                    <div className="h-px bg-gray-300 relative w-full flex items-center justify-between px-4">
                        <div className="w-2 h-2 rounded-full bg-red-500 -ml-1"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500 -mr-1"></div>
                    </div>
                    <div className="h-px bg-gray-300 relative w-full flex items-center justify-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Pie Chart" centered>
                <div className="w-12 h-12 rounded-full border-[12px] border-l-blue-500 border-t-blue-500 border-r-red-500 border-b-yellow-500 transform rotate-45 box-border"></div>
            </GalleryItem>

            <GalleryItem title="Donut Chart" centered>
                <div className="w-12 h-12 rounded-full border-[8px] relative box-border" style={{ borderColor: theme.colors.text+'10', borderTopColor: theme.colors.primary, borderRightColor: theme.colors.secondary, transform: 'rotate(-45deg)'}}></div>
            </GalleryItem>

            <GalleryItem title="Semi-Circle" centered>
                <div className="w-16 h-8 overflow-hidden relative flex justify-center items-end">
                        <div className="w-16 h-16 rounded-full border-[8px] border-blue-500 border-b-transparent border-r-transparent transform -rotate-45 mb-[-8px]"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Treemap" centered>
                <div className="w-12 h-12 flex flex-wrap border border-white bg-white">
                    <div className="w-2/3 h-full bg-blue-200 border-r border-white"></div>
                    <div className="w-1/3 h-1/2 bg-blue-300 border-b border-white"></div>
                    <div className="w-1/3 h-1/2 bg-blue-400"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Waffle Chart" centered>
                <div className="grid grid-cols-3 gap-1">
                    {[1,1,1,1,1,0,0,0,0].map((v, i) => (
                        <div key={i} className={`w-3 h-3 rounded-sm ${v ? 'bg-blue-500' : 'bg-gray-200'}`} style={{ opacity: v ? 1 : 0.2 }}></div>
                    ))}
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Network & Infrastructure --- */}
        <SectionTitle>Network & Infrastructure</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Server Node" centered>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded border flex items-center justify-center shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}>
                        <Icons.Settings size="sm" style={{ color: theme.colors.text }}/>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </GalleryItem>
            
             <GalleryItem title="Database Node" centered>
                <div className="w-10 h-10 rounded-full border-2 flex flex-col items-center justify-center shadow-sm text-[8px] font-mono bg-white" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}>
                    <div className="w-full h-px bg-current opacity-20 mb-1"></div>
                    SQL
                    <div className="w-full h-px bg-current opacity-20 mt-1"></div>
                </div>
            </GalleryItem>
            
             <GalleryItem title="Load Balancer" centered>
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-10 rounded-full" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                    <div className="flex flex-col gap-1 text-gray-400">
                            <Icons.ChevronRight size="sm" className="w-3 h-3"/>
                            <Icons.ChevronRight size="sm" className="w-3 h-3"/>
                            <Icons.ChevronRight size="sm" className="w-3 h-3"/>
                    </div>
                        <div className="w-8 h-8 border rounded flex items-center justify-center font-bold text-[8px]" style={{ backgroundColor: theme.colors.surface }}>LB</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Cloud Instance" centered>
                <div className="relative">
                    <Icons.Cloud size="lg" className="text-blue-400" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Firewall" centered>
                <div className="w-10 h-10 border-2 border-orange-500 rounded flex items-center justify-center relative bg-orange-50">
                    <div className="w-6 h-0.5 bg-orange-500"></div>
                    <div className="absolute w-0.5 h-6 bg-orange-500"></div>
                    <div className="absolute -top-2 -right-2 bg-white rounded-full"><Icons.Lock size="sm" className="w-3 h-3 text-orange-600"/></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Storage Bucket" centered>
                <div className="w-10 h-10 border-b-2 border-x-2 rounded-b-xl relative mt-2 flex items-center justify-center" style={{ borderColor: theme.colors.text }}>
                    <div className="absolute -top-2 w-10 h-4 border-2 rounded-[50%]" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}></div>
                    <span className="text-[10px] pt-1 font-bold">S3</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Cluster" centered>
                <div className="grid grid-cols-2 gap-1 p-1 border rounded-lg border-dashed border-blue-300">
                    <div className="w-3 h-3 border rounded bg-blue-100"></div>
                    <div className="w-3 h-3 border rounded bg-blue-100"></div>
                    <div className="w-3 h-3 border rounded bg-blue-100"></div>
                    <div className="w-3 h-3 border rounded bg-blue-100"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="API Gateway" centered>
                <div className="w-10 h-10 border rounded flex items-center justify-center text-[10px] font-bold tracking-tighter" style={{borderColor: theme.colors.accent, color: theme.colors.accent}}>
                    {'{api}'}
                </div>
            </GalleryItem>

            <GalleryItem title="VPN Tunnel" centered>
                <div className="w-full h-6 border-y border-dashed relative flex items-center justify-center">
                    <div className="w-full h-3 bg-gray-100 opacity-50 absolute"></div>
                    <Icons.Lock size="sm" className="absolute w-3 h-3 z-10"/>
                </div>
            </GalleryItem>

            <GalleryItem title="CDN Edge" centered>
                <div className="relative w-10 h-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    <div className="absolute inset-1 border rounded-full opacity-30 border-blue-500"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Pod (K8s)" centered>
                <div className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center p-1.5">
                    <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                        <div className="bg-blue-200 rounded-sm"></div>
                        <div className="bg-blue-200 rounded-sm"></div>
                        <div className="bg-blue-200 rounded-sm"></div>
                        <div className="bg-blue-200 rounded-sm"></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Lambda" centered>
                <div className="text-orange-500 font-serif font-bold text-2xl">λ</div>
            </GalleryItem>
        </div>

        {/* --- 5. Advanced Visualization --- */}
        <SectionTitle>Advanced Visualization</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Sankey Flow" className="col-span-2" centered>
                <div className="flex w-full px-6 items-center justify-between h-16">
                    <div className="w-3 h-full rounded-sm" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="flex-1 h-full relative mx-1 opacity-20">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <path d="M0,32 C50,32 50,10 100,10" fill="none" stroke={theme.colors.primary} strokeWidth="10" />
                            <path d="M0,32 C50,32 50,54 100,54" fill="none" stroke={theme.colors.primary} strokeWidth="6" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-between h-full py-2">
                        <div className="w-3 h-6 rounded-sm" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="w-3 h-4 rounded-sm" style={{ backgroundColor: theme.colors.accent }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Radar Chart" centered>
                <div className="w-14 h-14 relative flex items-center justify-center">
                        <div className="w-full h-full border border-dashed rounded-full opacity-30"></div>
                        <div className="absolute inset-0 m-auto w-10 h-10 bg-blue-500 opacity-30 transform rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                        <div className="absolute inset-0 m-auto w-10 h-10 bg-blue-500 opacity-30 transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Heatmap Cell" centered>
                <div className="grid grid-cols-3 gap-1">
                    {[0.2, 0.4, 0.6, 0.8, 1, 0.3, 0.5, 0.7, 0.9].map((o,i) => (
                        <div key={i} className="w-4 h-4 rounded-sm" style={{backgroundColor: theme.colors.primary, opacity: o}}></div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Choropleth" centered>
                <svg viewBox="0 0 40 30" className="w-12 h-10">
                    <path d="M0,0 H20 V15 H0 Z" fill={theme.colors.primary} opacity="0.4"/>
                    <path d="M20,0 H40 V15 H20 Z" fill={theme.colors.primary} opacity="0.8"/>
                    <path d="M0,15 H20 V30 H0 Z" fill={theme.colors.primary} opacity="0.2"/>
                    <path d="M20,15 H40 V30 H20 Z" fill={theme.colors.primary} opacity="0.6"/>
                </svg>
            </GalleryItem>

            <GalleryItem title="Chord Diagram" centered>
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 relative overflow-hidden">
                    <svg viewBox="0 0 40 40" className="absolute inset-0">
                        <path d="M20,20 Q10,10 20,0" fill="none" stroke={theme.colors.primary} strokeWidth="1" opacity="0.5" />
                        <path d="M20,20 Q30,10 20,0" fill="none" stroke={theme.colors.secondary} strokeWidth="1" opacity="0.5" />
                        <path d="M20,20 Q10,30 20,40" fill="none" stroke={theme.colors.accent} strokeWidth="1" opacity="0.5" />
                    </svg>
                </div>
            </GalleryItem>

            <GalleryItem title="Tree Diagram" centered>
                <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full mb-1" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="w-8 h-px mb-1 bg-black" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="flex justify-between w-10">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.textSecondary }}></div>
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.textSecondary }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Network Graph" centered>
                <div className="relative w-12 h-12">
                    <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full z-10"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full z-10"></div>
                    <div className="absolute bottom-0 left-2 w-3 h-3 bg-blue-500 rounded-full z-10"></div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="6" y1="6" x2="42" y2="6" stroke="black" strokeWidth="1" opacity="0.2"/>
                        <line x1="6" y1="6" x2="14" y2="42" stroke="black" strokeWidth="1" opacity="0.2"/>
                        <line x1="42" y1="6" x2="14" y2="42" stroke="black" strokeWidth="1" opacity="0.2"/>
                    </svg>
                </div>
            </GalleryItem>

            <GalleryItem title="Org Chart" centered>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-4 border rounded bg-white" style={{ backgroundColor: theme.colors.surface }}></div>
                    <div className="w-px h-2 bg-black"></div>
                    <div className="w-12 h-px bg-black"></div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center"><div className="w-px h-2 bg-black"></div><div className="w-5 h-4 border rounded bg-white" style={{ backgroundColor: theme.colors.surface }}></div></div>
                        <div className="flex flex-col items-center"><div className="w-px h-2 bg-black"></div><div className="w-5 h-4 border rounded bg-white" style={{ backgroundColor: theme.colors.surface }}></div></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Arc Diagram" centered>
                <div className="flex items-end gap-1.5 h-8 relative">
                    <div className="w-2 h-2 rounded-full z-10" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="w-2 h-2 rounded-full z-10" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="w-2 h-2 rounded-full z-10" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="w-2 h-2 rounded-full z-10" style={{ backgroundColor: theme.colors.text }}></div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <path d="M4,10 Q10,-10 18,10" fill="none" stroke="black" opacity="0.2"/>
                        <path d="M4,10 Q20,-15 32,10" fill="none" stroke="black" opacity="0.2"/>
                    </svg>
                </div>
            </GalleryItem>

            <GalleryItem title="Mind Map" centered>
                <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-400 rounded-full z-10 shadow-sm border border-white"></div>
                    <div className="absolute top-0 left-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="absolute bottom-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                    <svg className="absolute inset-0 w-full h-full">
                        <line x1="24" y1="24" x2="6" y2="6" stroke="black" opacity="0.2"/>
                        <line x1="24" y1="24" x2="42" y2="6" stroke="black" opacity="0.2"/>
                        <line x1="24" y1="24" x2="24" y2="42" stroke="black" opacity="0.2"/>
                    </svg>
                </div>
            </GalleryItem>

            <GalleryItem title="Dependency Wheel" centered>
                <div className="w-12 h-12 rounded-full border border-dashed relative">
                    <div className="absolute inset-2 rounded-full border opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Surface 3D" centered>
                <div className="w-12 h-10 border border-gray-300 transform -skew-x-12 relative overflow-hidden bg-gray-50 shadow-sm">
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10">
                        {Array.from({length: 16}).map((_, i) => <div key={i} className="border border-gray-400"></div>)}
                    </div>
                    <path d="M0,30 Q25,0 50,30" stroke="blue" fill="none" strokeWidth="2" />
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};