
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const GraphGalleryTab: React.FC = () => {
  const { theme, strokeProps, layoutProps, primaryFill, textFill, surfaceFill, faintFill, textStyle, corner, cornerSm, strokeWidth, strokeWidthNum } = useSvgTheme();

  // Enhanced SVG props with dynamic radius where applicable
  const svgStyle = { overflow: 'visible' as const };
  
  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Data & Diagram Primitives (200+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Visual language tokens for dashboards, flowcharts, data storytelling, scientific plotting, and complex analytics.
        </p>

        {/* --- 1. Micro Charts --- */}
        <SectionTitle>1. Micro Charts & KPIs</SectionTitle>
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
        <SectionTitle>2. Chart Primitives</SectionTitle>
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

        {/* --- 3. Statistical Analysis --- */}
        <SectionTitle>3. Statistical Analysis</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Box Plot" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="20" y1="5" x2="20" y2="35" stroke={theme.colors.text} strokeWidth="1" />
                    <line x1="15" y1="5" x2="25" y2="5" stroke={theme.colors.text} strokeWidth="1" />
                    <line x1="15" y1="35" x2="25" y2="35" stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="12" y="12" width="16" height="16" fill={theme.colors.surface} stroke={theme.colors.primary} strokeWidth="1.5" />
                    <line x1="12" y1="20" x2="28" y2="20" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Histogram" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    {[5, 15, 30, 20, 10].map((h, i) => (
                        <rect key={i} x={5 + i*6} y={35-h} width="6" height={h} fill={theme.colors.primary} opacity={0.8} />
                    ))}
                    <line x1="2" y1="35" x2="38" y2="35" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Violin Plot" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 Q28,10 28,20 Q28,30 20,35 Q12,30 12,20 Q12,10 20,5" fill={theme.colors.accent} fillOpacity="0.2" stroke={theme.colors.accent} strokeWidth="1.5" />
                    <line x1="20" y1="10" x2="20" y2="30" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Error Bars" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    {[10, 20, 30].map(x => (
                        <g key={x}>
                            <circle cx={x} cy={20} r="2" fill={theme.colors.text} />
                            <line x1={x} y1={15} x2={x} y2={25} stroke={theme.colors.text} strokeWidth="1" />
                            <line x1={x-2} y1={15} x2={x+2} y2={15} stroke={theme.colors.text} strokeWidth="1" />
                            <line x1={x-2} y1={25} x2={x+2} y2={25} stroke={theme.colors.text} strokeWidth="1" />
                        </g>
                    ))}
                </svg>
            </GalleryItem>
            <GalleryItem title="Waterfall" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="20" width="10" height="15" fill={theme.colors.success} />
                    <rect x="15" y="15" width="10" height="5" fill={theme.colors.success} />
                    <rect x="25" y="15" width="10" height="5" fill={theme.colors.error} />
                    <rect x="35" y="10" width="10" height="10" fill={theme.colors.success} />
                    <rect x="45" y="10" width="10" height="25" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Stream Graph" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M0,20 Q15,10 30,20 Q45,30 60,20 Q45,35 30,25 Q15,40 0,20" fill={theme.colors.info} opacity="0.5" />
                    <path d="M0,20 Q15,15 30,20 Q45,25 60,20 Q45,15 30,20 Q15,5 0,20" fill={theme.colors.primary} opacity="0.5" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Part-to-Whole & Hierarchy --- */}
        <SectionTitle>4. Part-to-Whole & Hierarchy</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Treemap" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="0" y="0" width="30" height="40" fill={theme.colors.primary} stroke="white" />
                    <rect x="30" y="0" width="30" height="20" fill={theme.colors.secondary} stroke="white" />
                    <rect x="30" y="20" width="15" height="20" fill={theme.colors.accent} stroke="white" />
                    <rect x="45" y="20" width="15" height="20" fill={theme.colors.warning} stroke="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sunburst" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="10" fill={theme.colors.surface} stroke={theme.colors.primary} strokeWidth="10" />
                    <path d="M20,0 V10 M20,30 V40 M0,20 H10 M30,20 H40" stroke="white" strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Voronoi" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M0,0 L20,10 L10,30 L0,20 Z" fill={theme.colors.primary} stroke="white" />
                    <path d="M40,0 L20,10 L30,20 L40,10 Z" fill={theme.colors.secondary} stroke="white" />
                    <path d="M0,40 L10,30 L30,20 L20,40 Z" fill={theme.colors.accent} stroke="white" />
                    <path d="M40,40 L20,40 L30,20 L40,10 Z" fill={theme.colors.warning} stroke="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mosaic" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="0" y="0" width="25" height="15" fill={theme.colors.primary} stroke="white" />
                    <rect x="25" y="0" width="15" height="15" fill={theme.colors.secondary} stroke="white" />
                    <rect x="0" y="15" width="25" height="25" fill={theme.colors.accent} stroke="white" />
                    <rect x="25" y="15" width="15" height="25" fill={theme.colors.warning} stroke="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Circle Packing" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" fill="none" stroke={theme.colors.text} />
                    <circle cx="15" cy="15" r="8" fill={theme.colors.primary} opacity="0.5" />
                    <circle cx="28" cy="25" r="6" fill={theme.colors.secondary} opacity="0.5" />
                    <circle cx="25" cy="12" r="4" fill={theme.colors.accent} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dendrogram" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,20 H15 M15,20 L25,10 M15,20 L25,30 M25,10 H35 M25,30 H35 M35,10 L45,5 M35,10 L45,15" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="5" cy="20" r="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Network & Flow --- */}
        <SectionTitle>5. Network & Flow</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Sankey" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,10 C25,10 25,30 55,30" fill="none" stroke={theme.colors.primary} strokeWidth="8" opacity="0.5" />
                    <path d="M5,30 C25,30 25,10 55,10" fill="none" stroke={theme.colors.secondary} strokeWidth="4" opacity="0.5" />
                    <rect x="0" y="5" width="5" height="10" fill={theme.colors.text} />
                    <rect x="0" y="25" width="5" height="10" fill={theme.colors.text} />
                    <rect x="55" y="5" width="5" height="10" fill={theme.colors.text} />
                    <rect x="55" y="25" width="5" height="10" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Chord" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" fill="none" stroke={theme.colors.text} strokeWidth="1" opacity="0.2" />
                    <path d="M20,2 A18,18 0 0,1 38,20" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                    <path d="M20,38 A18,18 0 0,1 2,20" fill="none" stroke={theme.colors.secondary} strokeWidth="2" />
                    <path d="M20,2 Q20,20 38,20" fill="none" stroke={theme.colors.primary} opacity="0.3" />
                    <path d="M20,38 Q20,20 2,20" fill="none" stroke={theme.colors.secondary} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Node-Link" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <line x1="10" y1="20" x2="30" y2="10" stroke={theme.colors.text} strokeOpacity="0.3" />
                    <line x1="10" y1="20" x2="30" y2="30" stroke={theme.colors.text} strokeOpacity="0.3" />
                    <line x1="30" y1="10" x2="50" y2="20" stroke={theme.colors.text} strokeOpacity="0.3" />
                    <circle cx="10" cy="20" r="4" fill={theme.colors.primary} />
                    <circle cx="30" cy="10" r="4" fill={theme.colors.secondary} />
                    <circle cx="30" cy="30" r="4" fill={theme.colors.accent} />
                    <circle cx="50" cy="20" r="4" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Arc Diagram" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <circle cx="10" cy="25" r="2" fill={theme.colors.text} />
                    <circle cx="30" cy="25" r="2" fill={theme.colors.text} />
                    <circle cx="50" cy="25" r="2" fill={theme.colors.text} />
                    <path d="M10,25 Q30,5 50,25" fill="none" stroke={theme.colors.primary} />
                    <path d="M10,25 Q20,15 30,25" fill="none" stroke={theme.colors.secondary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Parallel Sets" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="5" width="5" height="30" fill={theme.colors.text} opacity="0.2" />
                    <rect x="50" y="5" width="5" height="30" fill={theme.colors.text} opacity="0.2" />
                    <path d="M10,10 L50,25 V35 L10,20 Z" fill={theme.colors.primary} opacity="0.5" />
                    <path d="M10,25 L50,10 V20 L10,35 Z" fill={theme.colors.secondary} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hive Plot" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="20" y1="20" x2="20" y2="5" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="20" y1="20" x2="35" y2="30" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="20" y1="20" x2="5" y2="30" stroke={theme.colors.text} opacity="0.3" />
                    <path d="M20,10 Q30,25 30,28" fill="none" stroke={theme.colors.primary} />
                    <circle cx="20" cy="10" r="2" fill={theme.colors.text} />
                    <circle cx="30" cy="28" r="2" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Geospatial & Maps --- */}
        <SectionTitle>6. Geospatial & Maps</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Choropleth" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,10 L30,5 L40,20 L20,25 Z" fill={theme.colors.primary} opacity="0.4" stroke="white" />
                    <path d="M30,5 L50,10 L55,30 L40,20 Z" fill={theme.colors.primary} opacity="0.8" stroke="white" />
                    <path d="M10,10 L20,25 L15,35 L5,20 Z" fill={theme.colors.primary} opacity="0.6" stroke="white" />
                    <path d="M20,25 L40,20 L55,30 L35,35 Z" fill={theme.colors.primary} opacity="0.2" stroke="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bubble Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,10 Q30,0 55,10 Q60,30 30,35 Q0,30 5,10" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="20" cy="20" r="5" fill={theme.colors.error} opacity="0.6" />
                    <circle cx="40" cy="15" r="3" fill={theme.colors.error} opacity="0.6" />
                    <circle cx="35" cy="25" r="4" fill={theme.colors.error} opacity="0.6" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hexbin" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    {[0,1,2].map(r => [0,1,2].map(c => (
                        <path key={`${r}-${c}`} d="M5,0 L15,0 L20,10 L15,20 L5,20 L0,10 Z" transform={`translate(${c*16 + (r%2)*8}, ${r*10}) scale(0.8)`} fill={theme.colors.primary} opacity={Math.random()} />
                    )))}
                </svg>
            </GalleryItem>
            <GalleryItem title="Connection Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,20 Q30,0 55,20" fill="none" stroke={theme.colors.accent} strokeDasharray="3 3" />
                    <circle cx="5" cy="20" r="2" fill={theme.colors.text} />
                    <circle cx="55" cy="20" r="2" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dot Density" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="5" width="50" height="30" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    {Array.from({length: 20}).map((_, i) => (
                        <circle key={i} cx={Math.random()*40+10} cy={Math.random()*20+10} r="0.5" fill={theme.colors.text} />
                    ))}
                </svg>
            </GalleryItem>
            <GalleryItem title="Flow Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,20 L50,10 L50,30 Z" fill={theme.colors.primary} opacity="0.3" />
                    <path d="M10,20 L50,10" stroke={theme.colors.primary} />
                    <path d="M10,20 L50,30" stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Scientific & Engineering --- */}
        <SectionTitle>7. Scientific & Engineering</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Ternary Plot" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <polygon points="20,5 35,35 5,35" fill="none" stroke={theme.colors.text} />
                    <circle cx="20" cy="20" r="2" fill={theme.colors.error} />
                    <circle cx="15" cy="30" r="2" fill={theme.colors.primary} />
                    <circle cx="25" cy="30" r="2" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Smith Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="30" cy="20" r="9" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="35" cy="20" r="4.5" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M20,38 A18,18 0 0,1 20,2" fill="none" stroke={theme.colors.accent} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Parallel Coord" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <line x1="10" y1="5" x2="10" y2="35" stroke={theme.colors.text} strokeOpacity="0.3" />
                    <line x1="30" y1="5" x2="30" y2="35" stroke={theme.colors.text} strokeOpacity="0.3" />
                    <line x1="50" y1="5" x2="50" y2="35" stroke={theme.colors.text} strokeOpacity="0.3" />
                    <path d="M10,10 L30,30 L50,15" fill="none" stroke={theme.colors.primary} />
                    <path d="M10,25 L30,15 L50,20" fill="none" stroke={theme.colors.secondary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Box & Whisker" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="20" y1="5" x2="20" y2="35" stroke={theme.colors.text} />
                    <rect x="15" y="12" width="10" height="16" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <line x1="15" y1="20" x2="25" y2="20" stroke={theme.colors.text} />
                    <line x1="15" y1="5" x2="25" y2="5" stroke={theme.colors.text} />
                    <line x1="15" y1="35" x2="25" y2="35" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Spectrogram" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="0" y="0" width="60" height="40" fill={theme.colors.text} opacity="0.1" />
                    {[0,1,2,3,4].map(i => (
                        <path key={i} d={`M0,${10+i*5} Q30,${i*8} 60,${10+i*5}`} fill="none" stroke={theme.colors.accent} opacity={0.5} />
                    ))}
                </svg>
            </GalleryItem>
            <GalleryItem title="Contour" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <ellipse cx="20" cy="20" rx="15" ry="10" fill="none" stroke={theme.colors.primary} opacity="0.3" />
                    <ellipse cx="20" cy="20" rx="10" ry="6" fill="none" stroke={theme.colors.primary} opacity="0.6" />
                    <ellipse cx="20" cy="20" rx="5" ry="3" fill="none" stroke={theme.colors.primary} />
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
