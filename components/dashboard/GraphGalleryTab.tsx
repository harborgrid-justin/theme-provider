
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const GraphGalleryTab: React.FC = () => {
  const { theme, strokeProps, layoutProps, primaryFill, textFill, surfaceFill, faintFill, textStyle, corner, cornerSm, strokeWidth, strokeWidthNum } = useSvgTheme();

  // Enhanced SVG props with dynamic radius where applicable
  const svgStyle = { overflow: 'visible' as const };
  
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
                    <path d="M5,25 Q25,5 50,20 T95,10" fill="none" stroke={theme.colors.primary} strokeWidth={Math.max(2, strokeWidthNum * 1.5)} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Sparkline: Area" centered>
                <svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none" style={svgStyle}>
                    <path d="M0,25 Q25,5 50,20 T100,10 V35 H0 Z" fill={theme.colors.primary} opacity="0.2" />
                    <path d="M0,25 Q25,5 50,20 T100,10" fill="none" stroke={theme.colors.primary} strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Sparkline: Bar" centered>
                <div className="flex items-end justify-between w-full h-8 px-2 gap-1">
                    {[40, 70, 35, 80, 50, 60, 45].map((h, i) => (
                        <div key={i} className="flex-1" style={{ height: `${h}%`, backgroundColor: theme.colors.primary, borderTopLeftRadius: cornerSm, borderTopRightRadius: cornerSm }}></div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Win / Loss" centered>
                <div className="flex items-center justify-between w-full h-10 px-2 gap-1">
                    {[1, 1, -1, 1, -1, 1, 1].map((v, i) => (
                        <div key={i} className="flex-1 h-full relative">
                            <div 
                                className="absolute w-full" 
                                style={{ 
                                    height: '40%', 
                                    top: v > 0 ? '50%' : 'auto', 
                                    bottom: v < 0 ? '50%' : 'auto',
                                    transform: v > 0 ? 'translateY(-100%)' : 'translateY(0)',
                                    backgroundColor: v > 0 ? theme.colors.success : theme.colors.error,
                                    borderRadius: cornerSm
                                }}
                            ></div>
                            <div className="absolute top-1/2 w-full h-px" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        </div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Bullet Chart" centered>
                <div className="w-full h-4 relative flex items-center">
                    <div className="w-full h-2 overflow-hidden relative" style={{ backgroundColor: theme.colors.text + '10', borderRadius: corner }}>
                        <div className="absolute top-0 left-0 h-full w-3/4 opacity-30" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-0 left-0 h-full w-1/2" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-[60%] w-1 h-full" style={{ backgroundColor: theme.colors.error, borderRadius: cornerSm }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Progress Bar" centered>
                <div className="w-full h-2 overflow-hidden" style={{ backgroundColor: theme.colors.text + '10', borderRadius: corner }}>
                    <div className="h-full w-2/3" style={{ backgroundColor: theme.colors.primary, borderRadius: corner }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Progress Ring" centered>
                <div className="w-12 h-12 rounded-full border-[3px] relative flex items-center justify-center text-[10px] font-bold" style={{ borderColor: theme.colors.text+'10', color: theme.colors.primary}}>
                    75%
                    <div className="absolute -top-[3px] -left-[3px] -right-[3px] -bottom-[3px] rounded-full border-[3px] border-t-transparent border-r-transparent transform -rotate-45" style={{borderColor: theme.colors.primary}}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Solid Gauge" centered>
                <div className="w-16 h-8 overflow-hidden relative flex justify-center">
                        <div className="w-16 h-16 rounded-full border-[8px] border-t-transparent border-r-transparent border-b-transparent transform rotate-45 absolute top-0" style={{borderColor: theme.colors.text+'10'}}></div>
                        <div className="w-16 h-16 rounded-full border-[8px] border-transparent border-t-current transform rotate-45 absolute top-0" style={{color: theme.colors.primary}}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Meter" centered>
                <div className="w-full h-2 flex gap-0.5 overflow-hidden" style={{ borderRadius: corner }}>
                    <div className="flex-1" style={{ backgroundColor: theme.colors.success }}></div>
                    <div className="flex-1" style={{ backgroundColor: theme.colors.success }}></div>
                    <div className="flex-1" style={{ backgroundColor: theme.colors.warning }}></div>
                    <div className="flex-1" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Rating Bar" centered>
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-2 h-6 transition-opacity ${i < 4 ? 'opacity-100' : 'opacity-20'}`} style={{ backgroundColor: theme.colors.warning, borderRadius: cornerSm }}></div>
                    ))}
                </div>
            </GalleryItem>
        </div>
        
        {/* --- 2. Chart Primitives --- */}
        <SectionTitle>Chart Primitives</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <GalleryItem title="Bar: Vertical" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    {[10, 25, 15, 30].map((h, i) => (
                        <rect key={i} x={5 + i*8} y={35-h} width="6" height={h} rx={cornerSm} fill={theme.colors.primary} opacity={0.8} />
                    ))}
                    <line x1="2" y1="35" x2="38" y2="35" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Bar: Horizontal" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    {[10, 25, 15, 30].map((w, i) => (
                        <rect key={i} x="5" y={5 + i*8} width={w} height="6" rx={cornerSm} fill={theme.colors.primary} opacity={0.8} />
                    ))}
                    <line x1="5" y1="2" x2="5" y2="38" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Bar: Stacked" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="15" y="25" width="10" height="10" fill={theme.colors.primary} />
                    <rect x="15" y="15" width="10" height="10" fill={theme.colors.secondary} />
                    <rect x="15" y="5" width="10" height="10" fill={theme.colors.accent} rx={cornerSm} />
                    <line x1="2" y1="35" x2="38" y2="35" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Line: Smooth" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,30 Q15,10 20,20 T35,15" fill="none" stroke={theme.colors.primary} strokeWidth={Math.max(2, strokeWidthNum)} strokeLinecap="round" />
                    <line x1="2" y1="35" x2="38" y2="35" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Area Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,30 Q15,15 20,25 T35,10 V35 H5 Z" fill={theme.colors.primary} fillOpacity="0.2" stroke="none" />
                    <path d="M5,30 Q15,15 20,25 T35,10" fill="none" stroke={theme.colors.primary} strokeWidth={Math.max(2, strokeWidthNum)} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Donut Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="5" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.primary} strokeWidth="5" strokeDasharray="60 100" strokeDashoffset="25" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Scatter Plot" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    {[1,2,3,4,5].map(i => (
                        <circle key={i} cx={5+i*6} cy={35 - Math.random()*20} r="2" fill={theme.colors.primary} />
                    ))}
                    <line x1="2" y1="35" x2="38" y2="35" {...strokeProps} strokeOpacity="0.2" />
                    <line x1="5" y1="5" x2="5" y2="35" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Radar Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <polygon points="20,5 35,15 30,35 10,35 5,15" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" />
                    <polygon points="20,10 30,18 25,30 15,30 10,18" fill={theme.colors.primary} fillOpacity="0.3" stroke={theme.colors.primary} strokeWidth={strokeWidth} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Advanced Table Layouts --- */}
        <SectionTitle>Advanced Table Layouts</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Frozen Header" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="12" rx={cornerSm} {...primaryFill} opacity="0.1" />
                    <rect x="5" y="20" width="90" height="35" rx={cornerSm} fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <line x1="5" y1="30" x2="95" y2="30" {...strokeProps} strokeOpacity="0.1" />
                    <line x1="5" y1="40" x2="95" y2="40" {...strokeProps} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Nested Rows" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="12" rx={cornerSm} fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="15" y="20" width="80" height="8" rx={cornerSm} {...primaryFill} opacity="0.1" />
                    <rect x="15" y="30" width="80" height="8" rx={cornerSm} {...primaryFill} opacity="0.1" />
                    <path d="M10,10 V35 H15" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Summary Footer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="35" rx={cornerSm} fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="5" y="45" width="90" height="10" rx={Math.max(1, cornerSm - 1)} {...surfaceFill} {...strokeProps} strokeOpacity="0.3" />
                    <text x="75" y="52" fontSize="6" {...textFill} fontWeight="bold">Total</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Dashboard Structures --- */}
        <SectionTitle>Dashboard Structures</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="KPI Grid (4-up)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="2" y="5" width="22" height="20" rx={cornerSm} fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="26" y="5" width="22" height="20" rx={cornerSm} fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="50" y="5" width="22" height="20" rx={cornerSm} fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="74" y="5" width="22" height="20" rx={cornerSm} fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sidebar Filter" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="25" height="60" {...surfaceFill} {...strokeProps} strokeOpacity="0.1" />
                    <rect x="30" y="5" width="65" height="20" rx={corner} fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="30" y="30" width="65" height="25" rx={corner} fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Widget: Header" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <text x="5" y="13" fontSize="8" fontWeight="bold" {...textFill}>Revenue</text>
                    <circle cx="85" cy="10" r="2" {...textFill} opacity="0.5" />
                    <circle cx="92" cy="10" r="2" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
