import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const GraphGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  // Reusable SVG props
  const svgStyle = { overflow: 'visible' as const };
  const strokeProps = {
      stroke: theme.colors.text,
      vectorEffect: "non-scaling-stroke",
      strokeWidth: "1.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
  };
  const primaryFill = { fill: theme.colors.primary, stroke: 'none' };
  const textFill = { fill: theme.colors.text, stroke: 'none' };
  const surfaceFill = { fill: theme.colors.surface, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Data & Diagram Primitives (120+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Visual language tokens for dashboards, flowcharts, data storytelling, and complex analytics.
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
                            <div className="absolute top-1/2 w-full h-px" style={{ backgroundColor: theme.colors.text + '20' }}></div>
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
                    <div className="absolute top-0 bottom-0 left-[60%] w-1 rounded-full h-full" style={{ backgroundColor: theme.colors.error }}></div>
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
                <div className="w-12 h-12 rounded-full border-[3px] border-gray-100 relative" style={{ borderColor: theme.colors.text + '10' }}>
                    <div className="absolute inset-0 rounded-full border-[3px] border-transparent transform rotate-45" style={{ borderTopColor: theme.colors.primary, borderRightColor: theme.colors.primary }}></div>
                    <div className="absolute inset-1.5 rounded-full border-[3px] border-transparent transform -rotate-12" style={{ borderTopColor: theme.colors.success, borderLeftColor: theme.colors.success }}></div>
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
                    <div className="flex-1" style={{ backgroundColor: theme.colors.success }}></div>
                    <div className="flex-1" style={{ backgroundColor: theme.colors.success }}></div>
                    <div className="flex-1" style={{ backgroundColor: theme.colors.warning }}></div>
                    <div className="flex-1" style={{ backgroundColor: theme.colors.text + '20' }}></div>
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
                    <div className="h-8 w-1/2 border relative z-10 flex items-center justify-center" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface }}>
                        <div className="w-px h-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                    <div className="absolute left-4 h-3 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="absolute right-4 h-3 w-px" style={{ backgroundColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            
            <GalleryItem title="Candlestick" centered>
                    <div className="flex gap-2 items-end h-12">
                        <div className="w-2 h-8 relative" style={{ backgroundColor: theme.colors.success }}><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-12" style={{ backgroundColor: theme.colors.success }}></div></div>
                        <div className="w-2 h-4 relative mb-4" style={{ backgroundColor: theme.colors.error }}><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-8" style={{ backgroundColor: theme.colors.error }}></div></div>
                        <div className="w-2 h-6 relative" style={{ backgroundColor: theme.colors.success }}><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-10" style={{ backgroundColor: theme.colors.success }}></div></div>
                    </div>
            </GalleryItem>

            <GalleryItem title="Waterfall" centered>
                <div className="flex items-end gap-1 h-12">
                    <div className="w-3 h-5 mb-0" style={{ backgroundColor: theme.colors.success }}></div>
                    <div className="w-3 h-4 mb-5" style={{ backgroundColor: theme.colors.success }}></div>
                    <div className="w-3 h-3 mb-6" style={{ backgroundColor: theme.colors.error }}></div>
                    <div className="w-3 h-6 mb-0" style={{ backgroundColor: theme.colors.primary }}></div>
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
                    <div className="w-16 h-16 relative border-l border-b" style={{ borderColor: theme.colors.text + '30' }}>
                        <div className="absolute left-2 bottom-2 w-1.5 h-1.5 rounded-full" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="absolute left-6 bottom-8 w-1.5 h-1.5 rounded-full opacity-60" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="absolute left-10 bottom-5 w-1.5 h-1.5 rounded-full" style={{backgroundColor: theme.colors.accent}}></div>
                        <div className="absolute left-4 bottom-12 w-1.5 h-1.5 rounded-full" style={{backgroundColor: theme.colors.secondary}}></div>
                    </div>
            </GalleryItem>

            <GalleryItem title="Bubble Chart" centered>
                    <div className="w-16 h-16 relative border-l border-b" style={{ borderColor: theme.colors.text + '30' }}>
                        <div className="absolute left-2 bottom-2 w-3 h-3 rounded-full opacity-50" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="absolute left-8 bottom-8 w-6 h-6 rounded-full opacity-50" style={{backgroundColor: theme.colors.secondary}}></div>
                        <div className="absolute left-10 bottom-3 w-4 h-4 rounded-full opacity-50" style={{backgroundColor: theme.colors.accent}}></div>
                    </div>
            </GalleryItem>

            <GalleryItem title="Histogram" centered>
                <div className="flex items-end gap-px h-12 opacity-80">
                    <div className="w-2 h-3" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-2 h-6" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-2 h-10" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-2 h-8" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-2 h-4" style={{ backgroundColor: theme.colors.primary }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Bell Curve" centered>
                <svg viewBox="0 0 60 30" width="100%" height="40" style={svgStyle}>
                    <path d="M0,30 C10,30 20,5 30,5 C40,5 50,30 60,30" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                    <line x1="30" y1="5" x2="30" y2="30" stroke={theme.colors.text} strokeDasharray="2 2" strokeWidth="1" opacity="0.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Error Bar" centered>
                <div className="w-16 h-16 border-b border-l relative flex items-center justify-center" style={{ borderColor: theme.colors.text + '30' }}>
                    <div className="relative h-10 w-px mb-2" style={{ backgroundColor: theme.colors.text }}>
                        <div className="absolute top-0 -left-1.5 w-3 h-px" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute bottom-0 -left-1.5 w-3 h-px" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Dot Plot" centered>
                <div className="flex flex-col gap-2 w-full px-2">
                    <div className="h-px w-full relative flex items-center" style={{ backgroundColor: theme.colors.text + '20' }}>
                        <div className="absolute left-1/4 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                    <div className="h-px w-full relative flex items-center" style={{ backgroundColor: theme.colors.text + '20' }}>
                        <div className="absolute left-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.error }}></div>
                    </div>
                    <div className="h-px w-full relative flex items-center" style={{ backgroundColor: theme.colors.text + '20' }}>
                        <div className="absolute left-3/4 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.success }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Pyramid" centered>
                <div className="flex flex-col items-center justify-end h-12 gap-px">
                    <div className="w-4 h-4" style={{clipPath: 'polygon(50% 0, 100% 100%, 0 100%)', backgroundColor: theme.colors.warning}}></div>
                    <div className="w-8 h-4" style={{ backgroundColor: theme.colors.secondary }}></div>
                    <div className="w-12 h-4" style={{ backgroundColor: theme.colors.error }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="OHLC" centered>
                    <div className="flex gap-3 items-center h-12">
                        <div className="w-px h-10 relative" style={{ backgroundColor: theme.colors.text }}>
                            <div className="absolute top-2 left-0 w-2 h-px" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="absolute bottom-2 -left-2 w-2 h-px" style={{ backgroundColor: theme.colors.text }}></div>
                        </div>
                        <div className="w-px h-8 relative" style={{ backgroundColor: theme.colors.text }}>
                            <div className="absolute top-1 -left-2 w-2 h-px" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="absolute bottom-1 left-0 w-2 h-px" style={{ backgroundColor: theme.colors.text }}></div>
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
                            <div className="flex-1" style={{ backgroundColor: theme.colors.primary }}></div>
                            <div className="flex-1" style={{ backgroundColor: theme.colors.error }}></div>
                            <div className="flex-1" style={{ backgroundColor: theme.colors.warning }}></div>
                        </div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Grouped Bar" centered>
                <div className="flex gap-1 items-end h-12">
                    <div className="w-2 h-8" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-2 h-10 mr-1" style={{ backgroundColor: theme.colors.secondary }}></div>
                    <div className="w-2 h-5" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-2 h-6" style={{ backgroundColor: theme.colors.secondary }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Lollipop" centered>
                <div className="flex items-end gap-3 h-12">
                    <div className="w-px h-8 relative" style={{ backgroundColor: theme.colors.text + '60' }}><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div></div>
                    <div className="w-px h-10 relative" style={{ backgroundColor: theme.colors.text + '60' }}><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div></div>
                    <div className="w-px h-6 relative" style={{ backgroundColor: theme.colors.text + '60' }}><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Dumbbell Plot" centered>
                <div className="flex flex-col justify-center gap-3 w-full px-2">
                    <div className="h-px relative w-full flex items-center justify-between px-4" style={{ backgroundColor: theme.colors.text + '30' }}>
                        <div className="w-2 h-2 rounded-full -ml-1" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="w-2 h-2 rounded-full -mr-1" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                    <div className="h-px relative w-full flex items-center justify-center gap-4" style={{ backgroundColor: theme.colors.text + '30' }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Pie Chart" centered>
                <div className="w-12 h-12 rounded-full border-[12px] transform rotate-45 box-border" style={{ borderLeftColor: theme.colors.primary, borderTopColor: theme.colors.primary, borderRightColor: theme.colors.secondary, borderBottomColor: theme.colors.accent }}></div>
            </GalleryItem>

            <GalleryItem title="Donut Chart" centered>
                <div className="w-12 h-12 rounded-full border-[8px] relative box-border" style={{ borderColor: theme.colors.text+'10', borderTopColor: theme.colors.primary, borderRightColor: theme.colors.secondary, transform: 'rotate(-45deg)'}}></div>
            </GalleryItem>

            <GalleryItem title="Semi-Circle" centered>
                <div className="w-16 h-8 overflow-hidden relative flex justify-center items-end">
                        <div className="w-16 h-16 rounded-full border-[8px] border-b-transparent border-r-transparent transform -rotate-45 mb-[-8px]" style={{ borderColor: theme.colors.primary, borderBottomColor: 'transparent', borderRightColor: 'transparent' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Treemap" centered>
                <div className="w-12 h-12 flex flex-wrap border border-white" style={{ backgroundColor: theme.colors.surface }}>
                    <div className="w-2/3 h-full border-r border-white" style={{ backgroundColor: theme.colors.primary + '40' }}></div>
                    <div className="w-1/3 h-1/2 border-b border-white" style={{ backgroundColor: theme.colors.primary + '60' }}></div>
                    <div className="w-1/3 h-1/2" style={{ backgroundColor: theme.colors.primary + '80' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Waffle Chart" centered>
                <div className="grid grid-cols-3 gap-1">
                    {[1,1,1,1,1,0,0,0,0].map((v, i) => (
                        <div key={i} className={`w-3 h-3 rounded-sm`} style={{ backgroundColor: v ? theme.colors.primary : theme.colors.text + '20', opacity: v ? 1 : 0.5 }}></div>
                    ))}
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Advanced Table Layouts --- */}
        <SectionTitle>Advanced Table Layouts</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Frozen Header" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="12" rx="2" {...primaryFill} opacity="0.1" />
                    <rect x="5" y="20" width="90" height="35" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="5" y1="30" x2="95" y2="30" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="5" y1="40" x2="95" y2="40" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Frozen Column" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="5" y="5" width="25" height="50" rx="2" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="30" y1="20" x2="95" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="30" y1="35" x2="95" y2="35" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Nested Rows" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="12" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="15" y="20" width="80" height="8" rx="1" {...primaryFill} opacity="0.1" />
                    <rect x="15" y="30" width="80" height="8" rx="1" {...primaryFill} opacity="0.1" />
                    <path d="M10,10 V35 H15" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Grouped Rows" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="10" rx="1" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <text x="10" y="12" fontSize="6" {...textFill} fontWeight="bold">Group A</text>
                    <rect x="5" y="18" width="90" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="5" y="28" width="90" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Summary Footer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="35" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="5" y="45" width="90" height="10" rx="1" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.3" />
                    <text x="75" y="52" fontSize="6" {...textFill} fontWeight="bold">Total</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Pivot Layout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="25" height="50" rx="1" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="35" y="5" width="60" height="15" rx="1" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="35" y="25" width="60" height="30" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tree Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="5" y="15" width="90" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <circle cx="10" cy="9" r="2" {...textFill} opacity="0.5" />
                    <line x1="10" y1="11" x2="10" y2="19" stroke={theme.colors.text} strokeWidth="0.5" />
                    <line x1="10" y1="19" x2="15" y2="19" stroke={theme.colors.text} strokeWidth="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Editable Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="12" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="35" y="5" width="28" height="12" rx="1" {...primaryFill} opacity="0.1" stroke={theme.colors.primary} />
                    <rect x="65" y="5" width="28" height="12" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filter Row" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="10" rx="1" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="10" y="7" width="20" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="35" y="7" width="20" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <line x1="5" y1="20" x2="95" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sort Indicators" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <text x="10" y="13" fontSize="8" {...textFill}>Name</text>
                    <path d="M30,10 L32,8 L34,10" fill="none" stroke={theme.colors.primary} strokeWidth="1" />
                    <path d="M30,12 L32,14 L34,12" fill="none" stroke={theme.colors.text} strokeOpacity="0.3" strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pagination Bar" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <rect x="5" y="5" width="10" height="10" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="20" y="5" width="10" height="10" rx="2" {...primaryFill} />
                    <rect x="35" y="5" width="10" height="10" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="80" y="12" fontSize="6" {...textFill} opacity="0.5">1-10 of 50</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Density Control" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="5" x2="90" y2="5" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="10" y1="15" x2="90" y2="15" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Column Resizer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="30" height="40" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="40" y="10" width="40" height="40" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="40" y1="5" x2="40" y2="55" stroke={theme.colors.primary} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Row Selector" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="8" height="8" rx="1" {...primaryFill} />
                    <rect x="20" y="10" width="70" height="8" rx="1" fill={theme.colors.primary} opacity="0.1" />
                    <rect x="5" y="25" width="8" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="20" y="25" width="70" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Batch Actions" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="100" height="30" rx="4" {...primaryFill} opacity="0.1" />
                    <text x="20" y="18" fontSize="8" fill={theme.colors.primary} fontWeight="bold">3 Selected</text>
                    <rect x="70" y="8" width="20" height="14" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Dashboard Structures --- */}
        <SectionTitle>Dashboard Structures</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="KPI Grid (4-up)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="2" y="5" width="22" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="26" y="5" width="22" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="50" y="5" width="22" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="74" y="5" width="22" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="KPI (3-up) + Chart" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="2" y="5" width="30" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="34" y="5" width="30" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="66" y="5" width="30" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="2" y="28" width="94" height="25" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Chart Grid (2x2)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="2" y="2" width="47" height="27" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="51" y="2" width="47" height="27" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="2" y="31" width="47" height="27" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="51" y="31" width="47" height="27" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sidebar Filter Layout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="25" height="60" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="30" y="5" width="65" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="30" y="30" width="65" height="25" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Top Filter Bar Layout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="15" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="5" y="20" width="43" height="35" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="52" y="20" width="43" height="35" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Master-Detail (List)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="30" height="50" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="40" y="5" width="55" height="50" rx="2" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="45" y="10" width="20" height="4" rx="1" {...textFill} opacity="0.5" />
                    <rect x="45" y="20" width="45" height="2" rx="1" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Master-Detail (Table)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="5" y="30" width="90" height="25" rx="2" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <path d="M50,25 L45,30 L55,30 Z" {...surfaceFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Widget: Header" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <text x="5" y="13" fontSize="8" fontWeight="bold" {...textFill}>Revenue</text>
                    <circle cx="85" cy="10" r="2" {...textFill} opacity="0.5" />
                    <circle cx="92" cy="10" r="2" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Widget: Resize" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="80" height="40" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M85,45 L90,50 M82,50 L90,42" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Widget: Drag" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <rect x="0" y="0" width="100" height="20" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <path d="M45,8 H55 M45,12 H55" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Drill-down Breadcrumb" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <text x="5" y="13" fontSize="6" {...textFill} opacity="0.5">Sales</text>
                    <text x="25" y="13" fontSize="6" {...textFill} opacity="0.3">></text>
                    <text x="35" y="13" fontSize="6" {...textFill} fontWeight="bold">Q4</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Tabbed Dash" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="20" height="8" rx="2" {...primaryFill} opacity="0.1" />
                    <rect x="30" y="10" width="20" height="8" rx="2" fill="none" />
                    <line x1="5" y1="18" x2="95" y2="18" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="5" y="25" width="90" height="30" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Data Entry Structures --- */}
        <SectionTitle>Data Entry Structures</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Inline Edit Form" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="60" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="10" y="18" fontSize="8" {...textFill}>$1,200</text>
                    <rect x="70" y="5" width="20" height="20" rx="2" {...primaryFill} />
                    <path d="M76,15 L80,19 L86,11" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bulk Edit Panel" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="0" y="0" width="100" height="40" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <text x="10" y="22" fontSize="8" {...textFill}>Edit 5 items</text>
                    <rect x="65" y="10" width="25" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filter Drawer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="60" height="60" fill="none" />
                    <rect x="60" y="0" width="40" height="60" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="65" y="10" width="30" height="4" rx="1" {...textFill} opacity="0.2" />
                    <rect x="65" y="20" width="30" height="4" rx="1" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Search Builder" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="5" y="10" width="90" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="10" y="14" width="20" height="12" rx="2" {...primaryFill} opacity="0.1" />
                    <text x="15" y="22" fontSize="6" {...textFill}>Status</text>
                    <rect x="35" y="14" width="20" height="12" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <text x="40" y="22" fontSize="6" {...textFill}>is</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Range Slider" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="10" y1="15" x2="90" y2="15" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="2" />
                    <line x1="30" y1="15" x2="70" y2="15" stroke={theme.colors.primary} strokeWidth="2" />
                    <circle cx="30" cy="15" r="3" {...surfaceFill} stroke={theme.colors.primary} strokeWidth="1" />
                    <circle cx="70" cy="15" r="3" {...surfaceFill} stroke={theme.colors.primary} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tag Input" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="10" y="8" width="25" height="14" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <text x="15" y="17" fontSize="6" {...textFill}>Tags</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Date Range" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="15" y="17" fontSize="8" {...textFill}>Jan 1 - Jan 31</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Import Step" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <circle cx="20" cy="20" r="8" {...primaryFill} />
                    <text x="20" y="23" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">1</text>
                    <line x1="30" y1="20" x2="50" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="60" cy="20" r="8" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="60" y="23" fontSize="8" {...textFill} fontWeight="bold" textAnchor="middle">2</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Validation Error" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill={theme.colors.error + '10'} stroke={theme.colors.error} strokeWidth="1" />
                    <text x="15" y="18" fontSize="8" fill={theme.colors.error}>Invalid Value</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Success Banner" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill={theme.colors.success + '10'} stroke={theme.colors.success} strokeWidth="1" />
                    <text x="15" y="18" fontSize="8" fill={theme.colors.success}>Import Complete</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Chart Chrome & Annotations --- */}
        <SectionTitle>Chart Chrome</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Legend: Right" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="60" height="50" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="75" y="10" width="6" height="6" rx="1" {...primaryFill} />
                    <rect x="85" y="12" width="10" height="2" {...textFill} opacity="0.5" />
                    <rect x="75" y="20" width="6" height="6" rx="1" fill={theme.colors.secondary} />
                    <rect x="85" y="22" width="10" height="2" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Legend: Bottom" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="35" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="20" y="48" width="6" height="6" rx="1" {...primaryFill} />
                    <rect x="30" y="50" width="10" height="2" {...textFill} opacity="0.5" />
                    <rect x="50" y="48" width="6" height="6" rx="1" fill={theme.colors.secondary} />
                    <rect x="60" y="50" width="10" height="2" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tooltip: Standard" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="30" y="10" width="40" height="25" rx="2" {...surfaceFill} filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))" />
                    <text x="50" y="20" fontSize="6" {...textFill} textAnchor="middle" fontWeight="bold">Oct 24</text>
                    <text x="50" y="30" fontSize="8" {...textFill} textAnchor="middle">1,240</text>
                    <path d="M50,35 L45,30 H55 Z" {...surfaceFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tooltip: Compare" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="25" y="5" width="50" height="35" rx="2" {...surfaceFill} filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.2))" />
                    <rect x="30" y="15" width="4" height="4" rx="1" {...primaryFill} />
                    <text x="40" y="18" fontSize="6" {...textFill}>$500</text>
                    <rect x="30" y="25" width="4" height="4" rx="1" fill={theme.colors.secondary} />
                    <text x="40" y="28" fontSize="6" {...textFill}>$300</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Axis: Time" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="5" y1="5" x2="95" y2="5" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <line x1="10" y1="5" x2="10" y2="10" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <text x="10" y="20" fontSize="6" {...textFill} textAnchor="middle">Jan</text>
                    <line x1="50" y1="5" x2="50" y2="10" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <text x="50" y="20" fontSize="6" {...textFill} textAnchor="middle">Feb</text>
                    <line x1="90" y1="5" x2="90" y2="10" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <text x="90" y="20" fontSize="6" {...textFill} textAnchor="middle">Mar</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Axis: Log" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="5" y1="25" x2="95" y2="25" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <line x1="10" y1="25" x2="10" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <line x1="20" y1="25" x2="20" y2="22" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <line x1="35" y1="25" x2="35" y2="22" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <line x1="60" y1="25" x2="60" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Grid Lines" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <line x1="0" y1="10" x2="100" y2="10" stroke={theme.colors.text} strokeOpacity="0.1" strokeDasharray="2 2" strokeWidth="1.5" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" strokeDasharray="2 2" strokeWidth="1.5" />
                    <line x1="0" y1="30" x2="100" y2="30" stroke={theme.colors.text} strokeOpacity="0.1" strokeDasharray="2 2" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Threshold" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <line x1="0" y1="20" x2="100" y2="20" stroke={theme.colors.error} strokeWidth="1" strokeDasharray="4 2" />
                    <text x="5" y="15" fontSize="6" fill={theme.colors.error}>Limit</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Band Annot" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="0" y="10" width="100" height="20" fill={theme.colors.success} fillOpacity="0.1" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke={theme.colors.success} strokeOpacity="0.5" strokeDasharray="2 2" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Callout" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <circle cx="20" cy="20" r="3" {...primaryFill} />
                    <line x1="20" y1="20" x2="40" y2="10" stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="40" y="5" width="30" height="10" rx="1" {...surfaceFill} stroke={theme.colors.text} strokeWidth="0.5" />
                    <text x="45" y="12" fontSize="4" {...textFill}>Peak</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Crosshair" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <line x1="50" y1="0" x2="50" y2="40" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="20" r="3" fill="none" stroke={theme.colors.primary} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Zoom Controls" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="30" y="5" width="40" height="20" rx="10" {...surfaceFill} stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <text x="40" y="18" fontSize="10" {...textFill} opacity="0.5">-</text>
                    <text x="60" y="18" fontSize="10" {...textFill} opacity="0.5">+</text>
                    <line x1="50" y1="5" x2="50" y2="25" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mini-map" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="10" width="100" height="15" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1.5" />
                    <path d="M0,20 L20,15 L40,18 L60,12 L80,22 L100,15" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1.5" />
                    <rect x="30" y="10" width="30" height="15" fill={theme.colors.primary} fillOpacity="0.1" stroke={theme.colors.primary} strokeWidth="0.5" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 8. Report Structures --- */}
        <SectionTitle>Report Structures</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Title Page" centered>
                <svg viewBox="0 0 60 80" className="w-12 h-16">
                    <rect x="0" y="0" width="60" height="80" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1.5" />
                    <rect x="10" y="20" width="40" height="4" rx="1" {...primaryFill} />
                    <rect x="15" y="30" width="30" height="2" rx="0.5" {...textFill} opacity="0.5" />
                    <rect x="25" y="60" width="10" height="2" rx="0.5" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="TOC" centered>
                <svg viewBox="0 0 60 80" className="w-12 h-16">
                    <rect x="0" y="0" width="60" height="80" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1.5" />
                    <rect x="10" y="10" width="20" height="3" {...textFill} />
                    <rect x="10" y="20" width="30" height="2" {...textFill} opacity="0.3" />
                    <rect x="50" y="20" width="2" height="2" {...textFill} opacity="0.3" />
                    <rect x="10" y="25" width="30" height="2" {...textFill} opacity="0.3" />
                    <rect x="50" y="25" width="2" height="2" {...textFill} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Section Header" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="28" width="100" height="1" {...textFill} opacity="0.2" />
                    <rect x="0" y="10" width="40" height="6" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Exec Summary" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="0" y="0" width="100" height="40" fill={theme.colors.primary} fillOpacity="0.05" />
                    <rect x="10" y="10" width="80" height="4" {...primaryFill} opacity="0.5" />
                    <rect x="10" y="18" width="60" height="3" {...textFill} opacity="0.3" />
                    <rect x="10" y="24" width="70" height="3" {...textFill} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Footnote" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <rect x="0" y="5" width="20" height="1" {...textFill} opacity="0.2" />
                    <text x="0" y="15" fontSize="6" {...textFill} opacity="0.5">* Data sourced from API</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Source Citation" centered>
                <div className="text-[8px] italic opacity-60 px-2 text-center" style={{ color: theme.colors.text }}>Source: U.S. Census Bureau 2024</div>
            </GalleryItem>
            <GalleryItem title="Page Number" centered>
                <div className="w-full text-center text-[10px] font-mono opacity-40" style={{ color: theme.colors.text }}>- 12 -</div>
            </GalleryItem>
            <GalleryItem title="Watermark" centered>
                <div className="text-xl font-bold uppercase opacity-10 transform -rotate-45" style={{ color: theme.colors.text }}>Draft</div>
            </GalleryItem>
            <GalleryItem title="Print Wrapper" centered>
                <div className="w-12 h-16 border mx-auto shadow-md bg-white"></div>
            </GalleryItem>
        </div>

        {/* --- 9. Comparative & Analytical --- */}
        <SectionTitle>Comparative & Analytical</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Diff View (Side)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="48" height="60" fill={theme.colors.error} fillOpacity="0.05" />
                    <rect x="52" y="0" width="48" height="60" fill={theme.colors.success} fillOpacity="0.05" />
                    <rect x="10" y="10" width="30" height="4" fill={theme.colors.error} opacity="0.3" />
                    <rect x="62" y="10" width="30" height="4" fill={theme.colors.success} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Diff View (Inline)" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="10" y="10" width="30" height="6" fill={theme.colors.error} fillOpacity="0.2" />
                    <text x="12" y="15" fontSize="4" fill={theme.colors.error} style={{textDecoration: 'line-through'}}>Old</text>
                    <rect x="45" y="10" width="30" height="6" fill={theme.colors.success} fillOpacity="0.2" />
                    <text x="47" y="15" fontSize="4" fill={theme.colors.success}>New</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Trend Cell" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <path d="M0,15 L10,12 L20,18 L30,5 L40,8 L50,2" fill="none" stroke={theme.colors.success} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Delta Value" centered>
                <span className="text-xs font-bold" style={{ color: theme.colors.success }}>+12.5%</span>
            </GalleryItem>
            <GalleryItem title="Heatmap Cell" centered>
                <div className="w-full h-full" style={{ backgroundColor: theme.colors.error }}></div>
            </GalleryItem>
            <GalleryItem title="Progress Cell" centered>
                <div className="w-full h-2 rounded bg-gray-100 overflow-hidden mx-2">
                    <div className="h-full w-2/3" style={{ backgroundColor: theme.colors.primary }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Rating Cell" centered>
                <div className="flex text-[8px]" style={{ color: theme.colors.warning }}>
                    ★★★★☆
                </div>
            </GalleryItem>
            <GalleryItem title="Status Badge" centered>
                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase" style={{ backgroundColor: theme.colors.info + '20', color: theme.colors.info }}>Open</span>
            </GalleryItem>
            <GalleryItem title="Avatar Cell" centered>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.text + '20' }}></div>
            </GalleryItem>
            <GalleryItem title="Action Cell" centered>
                <div className="flex gap-1">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 10. Specialized Data --- */}
        <SectionTitle>Specialized Data</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Code Block" centered>
                <div className="font-mono text-[6px] bg-black/5 p-2 rounded w-full" style={{ color: theme.colors.text }}>
                    {'{ "id": 1 }'}
                </div>
            </GalleryItem>
            <GalleryItem title="Log Row" centered>
                <div className="w-full px-2 font-mono text-[6px]" style={{ color: theme.colors.text }}>
                    <span style={{ color: theme.colors.textSecondary }}>12:00</span> [INFO] Started
                </div>
            </GalleryItem>
            <GalleryItem title="Key-Value" centered>
                <div className="flex justify-between w-full px-4 text-[8px]">
                    <span className="opacity-60">ID</span>
                    <span className="font-mono">#A82</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Property Grid" centered>
                <div className="grid grid-cols-2 gap-px bg-gray-200 w-full border" style={{ borderColor: theme.colors.text + '10' }}>
                    <div className="bg-white p-1 text-[6px]">Name</div><div className="bg-white p-1 text-[6px]">Value</div>
                    <div className="bg-white p-1 text-[6px]">Type</div><div className="bg-white p-1 text-[6px]">String</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Tag Cloud" centered>
                <div className="flex flex-wrap gap-1 justify-center p-2">
                    {['Data', 'Viz', 'AI', 'ML'].map(t => (
                        <span key={t} className="text-[6px] px-1 bg-gray-100 rounded" style={{ color: theme.colors.text }}>{t}</span>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="File Node" centered>
                <div className="flex items-center gap-1 text-[8px]" style={{ color: theme.colors.text }}>
                    <Icons.File size="sm"/> data.csv
                </div>
            </GalleryItem>
            <GalleryItem title="Metadata" centered>
                <div className="flex flex-col text-[6px] opacity-60" style={{ color: theme.colors.text }}>
                    <span>Created: Oct 1</span>
                    <span>Size: 24KB</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 11. Network & Hierarchy (NEW) --- */}
        <SectionTitle>Network & Hierarchy</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Node Link" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <line x1="30" y1="30" x2="10" y2="10" stroke={theme.colors.text} strokeWidth="1" />
                    <line x1="30" y1="30" x2="50" y2="10" stroke={theme.colors.text} strokeWidth="1" />
                    <line x1="30" y1="30" x2="30" y2="50" stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="30" cy="30" r="5" fill={theme.colors.primary} />
                    <circle cx="10" cy="10" r="3" fill={theme.colors.secondary} />
                    <circle cx="50" cy="10" r="3" fill={theme.colors.secondary} />
                    <circle cx="30" cy="50" r="3" fill={theme.colors.secondary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sankey" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,10 C30,10 30,30 55,30" fill="none" stroke={theme.colors.primary} strokeWidth="8" opacity="0.5" />
                    <path d="M5,30 C30,30 30,10 55,10" fill="none" stroke={theme.colors.secondary} strokeWidth="4" opacity="0.5" />
                    <rect x="0" y="5" width="5" height="30" fill={theme.colors.text} />
                    <rect x="55" y="5" width="5" height="10" fill={theme.colors.text} />
                    <rect x="55" y="25" width="5" height="10" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Chord" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.text} strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M30,10 Q30,30 45,30" fill="none" stroke={theme.colors.primary} strokeWidth="1" opacity="0.6" />
                    <path d="M30,10 Q30,30 15,30" fill="none" stroke={theme.colors.secondary} strokeWidth="1" opacity="0.6" />
                    <path d="M15,30 Q30,30 45,30" fill="none" stroke={theme.colors.accent} strokeWidth="1" opacity="0.6" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tree" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <circle cx="30" cy="5" r="3" fill={theme.colors.text} />
                    <line x1="30" y1="8" x2="15" y2="20" stroke={theme.colors.text} strokeWidth="1" />
                    <line x1="30" y1="8" x2="45" y2="20" stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="15" cy="20" r="3" fill={theme.colors.text} opacity="0.6" />
                    <circle cx="45" cy="20" r="3" fill={theme.colors.text} opacity="0.6" />
                    <line x1="15" y1="23" x2="10" y2="35" stroke={theme.colors.text} strokeWidth="1" />
                    <line x1="15" y1="23" x2="20" y2="35" stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="10" cy="35" r="2" fill={theme.colors.text} opacity="0.4" />
                    <circle cx="20" cy="35" r="2" fill={theme.colors.text} opacity="0.4" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Force Layout" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <line x1="20" y1="20" x2="40" y2="25" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="20" y1="20" x2="25" y2="40" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="40" y1="25" x2="25" y2="40" stroke={theme.colors.text} opacity="0.3" />
                    <circle cx="20" cy="20" r="4" fill={theme.colors.primary} />
                    <circle cx="40" cy="25" r="6" fill={theme.colors.secondary} />
                    <circle cx="25" cy="40" r="3" fill={theme.colors.accent} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Arc Diagram" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <line x1="0" y1="25" x2="60" y2="25" stroke={theme.colors.text} opacity="0.2" />
                    <path d="M10,25 A20,20 0 0,1 50,25" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                    <path d="M20,25 A5,5 0 0,1 30,25" fill="none" stroke={theme.colors.secondary} strokeWidth="1.5" />
                    <circle cx="10" cy="25" r="2" fill={theme.colors.text} />
                    <circle cx="20" cy="25" r="2" fill={theme.colors.text} />
                    <circle cx="30" cy="25" r="2" fill={theme.colors.text} />
                    <circle cx="50" cy="25" r="2" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 12. Geospatial Visualization (NEW) --- */}
        <SectionTitle>Geospatial Visualization</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Choropleth" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,10 L30,5 L35,20 L20,25 Z" fill={theme.colors.primary} stroke="white" strokeWidth="0.5" />
                    <path d="M30,5 L50,10 L45,30 L35,20 Z" fill={theme.colors.secondary} stroke="white" strokeWidth="0.5" />
                    <path d="M20,25 L35,20 L45,30 L30,35 Z" fill={theme.colors.accent} stroke="white" strokeWidth="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bubble Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,10 Q30,5 55,10 Q50,30 30,35 Q10,30 5,10" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="20" cy="20" r="5" fill={theme.colors.error} opacity="0.6" />
                    <circle cx="40" cy="15" r="3" fill={theme.colors.error} opacity="0.6" />
                    <circle cx="35" cy="28" r="7" fill={theme.colors.error} opacity="0.6" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hexbin Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,10 L15,5 L20,10 L15,15 Z" fill={theme.colors.primary} />
                    <path d="M20,10 L25,5 L30,10 L25,15 Z" fill={theme.colors.primary} opacity="0.5" />
                    <path d="M15,15 L20,10 L25,15 L20,20 Z" fill={theme.colors.primary} opacity="0.8" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Connection Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,20 Q30,0 55,20" fill="none" stroke={theme.colors.accent} strokeWidth="1.5" strokeDasharray="2 1" />
                    <circle cx="5" cy="20" r="2" fill={theme.colors.text} />
                    <circle cx="55" cy="20" r="2" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Flow Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,20 L50,20" stroke={theme.colors.primary} strokeWidth="4" markerEnd="url(#arrow)" opacity="0.5" />
                    <path d="M10,20 L50,20" stroke={theme.colors.primary} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cluster Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <circle cx="30" cy="20" r="12" fill={theme.colors.warning} opacity="0.3" />
                    <text x="30" y="23" fontSize="8" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>12</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 13. Scientific & Engineering (NEW) --- */}
        <SectionTitle>Scientific & Engineering</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Contour Plot" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,30 Q30,10 50,30 Q30,50 10,30" fill="none" stroke={theme.colors.primary} opacity="0.2" />
                    <path d="M15,30 Q30,15 45,30 Q30,45 15,30" fill="none" stroke={theme.colors.primary} opacity="0.5" />
                    <path d="M20,30 Q30,20 40,30 Q30,40 20,30" fill="none" stroke={theme.colors.primary} opacity="0.8" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Ternary Plot" centered>
                <svg viewBox="0 0 60 50" className="w-16 h-14">
                    <polygon points="30,5 5,45 55,45" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="30" cy="25" r="2" fill={theme.colors.error} />
                    <circle cx="20" cy="35" r="2" fill={theme.colors.success} />
                    <circle cx="40" cy="35" r="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Vector Field" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    {[10, 20, 30, 40, 50].map(x => (
                        [10, 20, 30, 40, 50].map(y => (
                            <line key={`${x}-${y}`} x1={x} y1={y} x2={x+3} y2={y-3} stroke={theme.colors.text} strokeWidth="1" opacity="0.5" />
                        ))
                    ))}
                </svg>
            </GalleryItem>
            <GalleryItem title="Parallel Coord" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <line x1="10" y1="5" x2="10" y2="35" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="30" y1="5" x2="30" y2="35" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="50" y1="5" x2="50" y2="35" stroke={theme.colors.text} opacity="0.3" />
                    <path d="M10,10 L30,25 L50,15" fill="none" stroke={theme.colors.primary} />
                    <path d="M10,30 L30,15 L50,20" fill="none" stroke={theme.colors.secondary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Polar Plot" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.text} opacity="0.2" />
                    <circle cx="30" cy="30" r="10" fill="none" stroke={theme.colors.text} opacity="0.2" />
                    <line x1="30" y1="30" x2="50" y2="30" stroke={theme.colors.text} opacity="0.2" />
                    <path d="M30,30 L45,20 L35,10 L25,15 Z" fill={theme.colors.primary} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Streamgraph" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M0,20 Q15,10 30,20 Q45,30 60,20 L60,25 Q45,35 30,25 Q15,15 0,25 Z" fill={theme.colors.secondary} />
                    <path d="M0,20 Q15,5 30,15 Q45,25 60,15 L60,20 Q45,30 30,20 Q15,10 0,20 Z" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 14. Text & Qualitative (NEW) --- */}
        <SectionTitle>Text & Qualitative</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Word Cloud" centered>
                <div className="flex flex-wrap justify-center items-center gap-1 p-2 text-center">
                    <span className="text-xs font-bold" style={{ color: theme.colors.primary }}>Data</span>
                    <span className="text-[8px]" style={{ color: theme.colors.secondary }}>Viz</span>
                    <span className="text-[10px] font-bold" style={{ color: theme.colors.accent }}>Graph</span>
                    <span className="text-[6px]" style={{ color: theme.colors.text }}>Chart</span>
                    <span className="text-[9px]" style={{ color: theme.colors.success }}>Map</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Sentiment Bar" centered>
                <div className="w-full h-4 rounded overflow-hidden flex mx-2">
                    <div className="w-[60%] bg-green-500"></div>
                    <div className="w-[10%] bg-gray-300"></div>
                    <div className="w-[30%] bg-red-500"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Timeline Event" centered>
                <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mb-1"></div>
                    <div className="text-[6px] font-bold">Launch</div>
                    <div className="text-[4px] opacity-60">2023</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Venn Diagram" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.primary} opacity="0.5" />
                    <circle cx="40" cy="20" r="15" fill={theme.colors.secondary} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Matrix" centered>
                <div className="grid grid-cols-3 gap-0.5 w-12 h-12 bg-gray-200 p-0.5">
                    {[1,0,1,0,1,0,1,0,1].map((v,i) => <div key={i} className={`w-full h-full ${v?'bg-blue-500':'bg-white'}`}></div>)}
                </div>
            </GalleryItem>
            <GalleryItem title="Hierarchy Text" centered>
                <div className="text-[6px] leading-tight">
                    <div>1. Root</div>
                    <div className="pl-2">1.1 Child</div>
                    <div className="pl-4">1.1.1 Leaf</div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
