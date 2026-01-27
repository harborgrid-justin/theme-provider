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
        <SectionTitle style={{ marginTop: '1rem' }}>Data & Diagram Primitives (95 Items)</SectionTitle>
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
    </div>
  );
};