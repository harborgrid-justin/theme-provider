import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const DataGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  // Helper for common SVG props
  const svgStyle = { overflow: 'visible' as const };
  const primaryFill = { fill: theme.colors.primary };
  const textFill = { fill: theme.colors.text };
  const surfaceFill = { fill: theme.colors.surface };
  const strokeProps = { stroke: theme.colors.text, vectorEffect: "non-scaling-stroke" };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Component Gallery (100+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            A comprehensive collection of data-rich UI micro-components and visualization primitives.
        </p>
        
        {/* --- 1. KPI & Metrics --- */}
        <SectionTitle>KPIs & Metrics</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <GalleryItem title="Metric Simple" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <text x="50" y="25" fontSize="24px" fontWeight="bold" fill={theme.colors.primary} textAnchor="middle" dominantBaseline="middle">$12k</text>
                    <text x="50" y="38" fontSize="6px" fill={theme.colors.text} opacity="0.6" textAnchor="middle">REVENUE</text>
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Metric Trend" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <text x="30" y="22" fontSize="18px" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">2,543</text>
                    <text x="30" y="32" fontSize="6px" fill={theme.colors.text} opacity="0.6" textAnchor="middle">DAILY</text>
                    <rect x="60" y="10" width="30" height="14" rx="2" fill={theme.colors.success} fillOpacity="0.1" />
                    <path d="M65,17 L70,12 L75,17" stroke={theme.colors.success} strokeWidth="1.5" fill="none" />
                    <text x="80" y="19" fontSize="8px" fontWeight="bold" fill={theme.colors.success} dominantBaseline="middle">12%</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Sparkline Area" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <text x="20" y="25" fontSize="16px" fontWeight="bold" fill={theme.colors.text}>84%</text>
                    <path d="M40,30 L50,20 L60,25 L70,15 L80,22 L90,10 V40 H40 Z" fill={theme.colors.primary} fillOpacity="0.2" stroke="none" />
                    <path d="M40,30 L50,20 L60,25 L70,15 L80,22 L90,10" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Sparkline Bar" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <text x="20" y="25" fontSize="16px" fontWeight="bold" fill={theme.colors.text}>120</text>
                    {[40, 60, 30, 80, 50].map((h, i) => (
                        <rect key={i} x={45 + i*10} y={35-h*0.3} width="6" height={h*0.3} rx="1" fill={theme.colors.secondary} />
                    ))}
                </svg>
            </GalleryItem>

            <GalleryItem title="Comparison" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <text x="50" y="15" fontSize="12px" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">$450</text>
                    <line x1="20" y1="20" x2="80" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="50" y="32" fontSize="10px" fill={theme.colors.text} opacity="0.5" textAnchor="middle">vs $400</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Target Meter" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="10" y="18" width="80" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="10" y="18" width="60" height="4" rx="2" fill={theme.colors.primary} />
                    <rect x="65" y="14" width="2" height="12" fill={theme.colors.text} />
                    <text x="50" y="35" fontSize="6px" fill={theme.colors.text} opacity="0.6" textAnchor="middle">75% / 80% Goal</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Chart Primitives --- */}
        <SectionTitle>Chart Primitives</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <GalleryItem title="Bar: Vertical" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    {[10, 25, 15, 30].map((h, i) => (
                        <rect key={i} x={5 + i*8} y={35-h} width="6" height={h} rx="1" fill={theme.colors.primary} opacity={0.8} />
                    ))}
                    <line x1="2" y1="35" x2="38" y2="35" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Bar: Horizontal" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    {[10, 25, 15, 30].map((w, i) => (
                        <rect key={i} x="5" y={5 + i*8} width={w} height="6" rx="1" fill={theme.colors.primary} opacity={0.8} />
                    ))}
                    <line x1="5" y1="2" x2="5" y2="38" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Bar: Stacked" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="15" y="25" width="10" height="10" fill={theme.colors.primary} />
                    <rect x="15" y="15" width="10" height="10" fill={theme.colors.secondary} />
                    <rect x="15" y="5" width="10" height="10" fill={theme.colors.accent} />
                    <line x1="2" y1="35" x2="38" y2="35" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Line: Smooth" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,30 Q15,10 20,20 T35,15" fill="none" stroke={theme.colors.primary} strokeWidth="2" strokeLinecap="round" />
                    <line x1="2" y1="35" x2="38" y2="35" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Line: Step" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,30 H15 V20 H25 V10 H35" fill="none" stroke={theme.colors.secondary} strokeWidth="2" strokeLinecap="round" />
                    <line x1="2" y1="35" x2="38" y2="35" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Area Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,30 Q15,15 20,25 T35,10 V35 H5 Z" fill={theme.colors.primary} fillOpacity="0.2" stroke="none" />
                    <path d="M5,30 Q15,15 20,25 T35,10" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Pie Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.text} fillOpacity="0.1" />
                    <path d="M20,20 L20,5 A15,15 0 0,1 35,20 Z" fill={theme.colors.primary} />
                    <path d="M20,20 L35,20 A15,15 0 0,1 20,35 Z" fill={theme.colors.secondary} />
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
                    <line x1="2" y1="35" x2="38" y2="35" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="5" y1="5" x2="5" y2="35" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Bubble Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="10" cy="25" r="3" fill={theme.colors.primary} opacity="0.5" />
                    <circle cx="20" cy="15" r="6" fill={theme.colors.secondary} opacity="0.5" />
                    <circle cx="30" cy="20" r="4" fill={theme.colors.accent} opacity="0.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Radar Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <polygon points="20,5 35,15 30,35 10,35 5,15" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" />
                    <polygon points="20,10 30,18 25,30 15,30 10,18" fill={theme.colors.primary} fillOpacity="0.3" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Funnel Chart" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="5" width="30" height="6" rx="1" fill={theme.colors.primary} opacity="1" />
                    <rect x="8" y="13" width="24" height="6" rx="1" fill={theme.colors.primary} opacity="0.7" />
                    <rect x="11" y="21" width="18" height="6" rx="1" fill={theme.colors.primary} opacity="0.4" />
                    <rect x="14" y="29" width="12" height="6" rx="1" fill={theme.colors.primary} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Heatmap" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    {[0,1,2].map(r => [0,1,2].map(c => (
                        <rect key={`${r}-${c}`} x={5 + c*10} y={5 + r*10} width="8" height="8" rx="1" fill={theme.colors.primary} opacity={Math.random()} />
                    )))}
                </svg>
            </GalleryItem>

            <GalleryItem title="Gauge Half" centered>
                <svg viewBox="0 0 40 25" className="w-12 h-8">
                    <path d="M5,20 A15,15 0 0,1 35,20" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="4" strokeLinecap="round" />
                    <path d="M5,20 A15,15 0 0,1 20,5" fill="none" stroke={theme.colors.primary} strokeWidth="4" strokeLinecap="round" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Candlestick" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="12" y1="10" x2="12" y2="30" stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="10" y="15" width="4" height="10" fill={theme.colors.success} />
                    <line x1="28" y1="5" x2="28" y2="35" stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="26" y="10" width="4" height="20" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Advanced Table Layouts --- */}
        <SectionTitle>Advanced Table Layouts</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Frozen Header" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="12" rx="2" {...primaryFill} opacity="0.1" />
                    <rect x="5" y="20" width="90" height="35" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <line x1="5" y1="30" x2="95" y2="30" {...strokeProps} strokeOpacity="0.1" />
                    <line x1="5" y1="40" x2="95" y2="40" {...strokeProps} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Frozen Column" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="5" y="5" width="25" height="50" rx="2" {...surfaceFill} {...strokeProps} strokeOpacity="0.2" />
                    <line x1="30" y1="20" x2="95" y2="20" {...strokeProps} strokeOpacity="0.1" />
                    <line x1="30" y1="35" x2="95" y2="35" {...strokeProps} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Nested Rows" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="12" rx="1" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="15" y="20" width="80" height="8" rx="1" {...primaryFill} opacity="0.1" />
                    <rect x="15" y="30" width="80" height="8" rx="1" {...primaryFill} opacity="0.1" />
                    <path d="M10,10 V35 H15" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Grouped Rows" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="10" rx="1" {...surfaceFill} {...strokeProps} strokeOpacity="0.1" />
                    <text x="10" y="12" fontSize="6" {...textFill} fontWeight="bold">Group A</text>
                    <rect x="5" y="18" width="90" height="8" rx="1" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="5" y="28" width="90" height="8" rx="1" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Summary Footer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="35" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="5" y="45" width="90" height="10" rx="1" {...surfaceFill} {...strokeProps} strokeOpacity="0.3" />
                    <text x="75" y="52" fontSize="6" {...textFill} fontWeight="bold">Total</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Pivot Layout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="25" height="50" rx="1" {...surfaceFill} {...strokeProps} strokeOpacity="0.2" />
                    <rect x="35" y="5" width="60" height="15" rx="1" {...surfaceFill} {...strokeProps} strokeOpacity="0.2" />
                    <rect x="35" y="25" width="60" height="30" rx="1" fill="none" {...strokeProps} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tree Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="8" rx="1" fill="none" {...strokeProps} strokeOpacity="0.1" />
                    <rect x="5" y="15" width="90" height="8" rx="1" fill="none" {...strokeProps} strokeOpacity="0.1" />
                    <circle cx="10" cy="9" r="2" {...textFill} opacity="0.5" />
                    <line x1="10" y1="11" x2="10" y2="19" {...strokeProps} strokeWidth="0.5" />
                    <line x1="10" y1="19" x2="15" y2="19" {...strokeProps} strokeWidth="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Editable Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="12" rx="1" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="35" y="5" width="28" height="12" rx="1" {...primaryFill} opacity="0.1" {...strokeProps} stroke={theme.colors.primary} />
                    <rect x="65" y="5" width="28" height="12" rx="1" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filter Row" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="10" rx="1" {...surfaceFill} {...strokeProps} strokeOpacity="0.2" />
                    <rect x="10" y="7" width="20" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="35" y="7" width="20" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <line x1="5" y1="20" x2="95" y2="20" {...strokeProps} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sort Indicators" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <text x="10" y="13" fontSize="8" {...textFill}>Name</text>
                    <path d="M30,10 L32,8 L34,10" fill="none" stroke={theme.colors.primary} strokeWidth="1" />
                    <path d="M30,12 L32,14 L34,12" fill="none" {...strokeProps} strokeOpacity="0.3" strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pagination Bar" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <rect x="5" y="5" width="10" height="10" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="20" y="5" width="10" height="10" rx="2" {...primaryFill} />
                    <rect x="35" y="5" width="10" height="10" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <text x="80" y="12" fontSize="6" {...textFill} opacity="0.5">1-10 of 50</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Density Control" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="5" x2="90" y2="5" {...strokeProps} strokeWidth="2" />
                    <line x1="10" y1="10" x2="90" y2="10" {...strokeProps} strokeWidth="2" />
                    <line x1="10" y1="15" x2="90" y2="15" {...strokeProps} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Column Resizer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="30" height="40" fill="none" {...strokeProps} strokeOpacity="0.1" />
                    <rect x="40" y="10" width="40" height="40" fill="none" {...strokeProps} strokeOpacity="0.1" />
                    <line x1="40" y1="5" x2="40" y2="55" stroke={theme.colors.primary} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Row Selector" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="8" height="8" rx="1" {...primaryFill} />
                    <rect x="20" y="10" width="70" height="8" rx="1" fill={theme.colors.primary} opacity="0.1" />
                    <rect x="5" y="25" width="8" height="8" rx="1" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="20" y="25" width="70" height="8" rx="1" fill="none" {...strokeProps} strokeOpacity="0.1" />
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

        {/* --- 6. Dashboard Structures --- */}
        <SectionTitle>Dashboard Structures</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="KPI Grid (4-up)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="2" y="5" width="22" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="26" y="5" width="22" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="50" y="5" width="22" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="74" y="5" width="22" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="KPI (3-up) + Chart" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="2" y="5" width="30" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="34" y="5" width="30" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="66" y="5" width="30" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="2" y="28" width="94" height="25" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Chart Grid (2x2)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="2" y="2" width="47" height="27" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="51" y="2" width="47" height="27" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="2" y="31" width="47" height="27" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="51" y="31" width="47" height="27" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sidebar Filter Layout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="25" height="60" {...surfaceFill} {...strokeProps} strokeOpacity="0.1" />
                    <rect x="30" y="5" width="65" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="30" y="30" width="65" height="25" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Top Filter Bar Layout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="15" {...surfaceFill} {...strokeProps} strokeOpacity="0.1" />
                    <rect x="5" y="20" width="43" height="35" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="52" y="20" width="43" height="35" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Master-Detail (List)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="30" height="50" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="40" y="5" width="55" height="50" rx="2" {...surfaceFill} {...strokeProps} strokeOpacity="0.1" />
                    <rect x="45" y="10" width="20" height="4" rx="1" {...textFill} opacity="0.5" />
                    <rect x="45" y="20" width="45" height="2" rx="1" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Master-Detail (Table)" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="5" y="30" width="90" height="25" rx="2" {...surfaceFill} {...strokeProps} strokeOpacity="0.1" />
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
                    <rect x="10" y="10" width="80" height="40" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <path d="M85,45 L90,50 M82,50 L90,42" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Widget: Drag" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <rect x="0" y="0" width="100" height="20" fill="none" {...strokeProps} strokeOpacity="0.1" />
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
                    <line x1="5" y1="18" x2="95" y2="18" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="5" y="25" width="90" height="30" rx="2" fill="none" {...strokeProps} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Data Entry Structures --- */}
        <SectionTitle>Data Entry Structures</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Inline Edit Form" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="60" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <text x="10" y="18" fontSize="8" {...textFill}>$1,200</text>
                    <rect x="70" y="5" width="20" height="20" rx="2" {...primaryFill} />
                    <path d="M76,15 L80,19 L86,11" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bulk Edit Panel" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="0" y="0" width="100" height="40" {...surfaceFill} {...strokeProps} strokeOpacity="0.1" />
                    <text x="10" y="22" fontSize="8" {...textFill}>Edit 5 items</text>
                    <rect x="65" y="10" width="25" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filter Drawer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="60" height="60" fill="none" />
                    <rect x="60" y="0" width="40" height="60" {...surfaceFill} {...strokeProps} strokeOpacity="0.1" />
                    <rect x="65" y="10" width="30" height="4" rx="1" {...textFill} opacity="0.2" />
                    <rect x="65" y="20" width="30" height="4" rx="1" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Search Builder" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="5" y="10" width="90" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="10" y="14" width="20" height="12" rx="2" {...primaryFill} opacity="0.1" />
                    <text x="15" y="22" fontSize="6" {...textFill}>Status</text>
                    <rect x="35" y="14" width="20" height="12" rx="2" fill="none" {...strokeProps} strokeOpacity="0.1" />
                    <text x="40" y="22" fontSize="6" {...textFill}>is</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Range Slider" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="10" y1="15" x2="90" y2="15" {...strokeProps} strokeOpacity="0.2" strokeWidth="2" />
                    <line x1="30" y1="15" x2="70" y2="15" stroke={theme.colors.primary} strokeWidth="2" />
                    <circle cx="30" cy="15" r="3" {...surfaceFill} stroke={theme.colors.primary} strokeWidth="1" />
                    <circle cx="70" cy="15" r="3" {...surfaceFill} stroke={theme.colors.primary} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tag Input" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <rect x="10" y="8" width="25" height="14" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <text x="15" y="17" fontSize="6" {...textFill}>Tags</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Date Range" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill="none" {...strokeProps} strokeOpacity="0.2" />
                    <text x="15" y="17" fontSize="8" {...textFill}>Jan 1 - Jan 31</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Import Step" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <circle cx="20" cy="20" r="8" {...primaryFill} />
                    <text x="20" y="23" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">1</text>
                    <line x1="30" y1="20" x2="50" y2="20" {...strokeProps} strokeOpacity="0.2" />
                    <circle cx="60" cy="20" r="8" fill="none" {...strokeProps} />
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

        {/* --- 8. Chart Chrome & Annotations --- */}
        <SectionTitle>Chart Chrome</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Legend: Right" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="60" height="50" rx="2" fill="none" {...strokeProps} strokeOpacity="0.1" />
                    <rect x="75" y="10" width="6" height="6" rx="1" {...primaryFill} />
                    <rect x="85" y="12" width="10" height="2" {...textFill} opacity="0.5" />
                    <rect x="75" y="20" width="6" height="6" rx="1" fill={theme.colors.secondary} />
                    <rect x="85" y="22" width="10" height="2" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Legend: Bottom" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="35" rx="2" fill="none" {...strokeProps} strokeOpacity="0.1" />
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
                    <line x1="5" y1="5" x2="95" y2="5" {...strokeProps} strokeOpacity="0.2" />
                    <line x1="10" y1="5" x2="10" y2="10" {...strokeProps} strokeOpacity="0.2" />
                    <text x="10" y="20" fontSize="6" {...textFill} textAnchor="middle">Jan</text>
                    <line x1="50" y1="5" x2="50" y2="10" {...strokeProps} strokeOpacity="0.2" />
                    <text x="50" y="20" fontSize="6" {...textFill} textAnchor="middle">Feb</text>
                    <line x1="90" y1="5" x2="90" y2="10" {...strokeProps} strokeOpacity="0.2" />
                    <text x="90" y="20" fontSize="6" {...textFill} textAnchor="middle">Mar</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Axis: Log" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="5" y1="25" x2="95" y2="25" {...strokeProps} strokeOpacity="0.2" />
                    <line x1="10" y1="25" x2="10" y2="20" {...strokeProps} strokeOpacity="0.2" />
                    <line x1="20" y1="25" x2="20" y2="22" {...strokeProps} strokeOpacity="0.2" />
                    <line x1="35" y1="25" x2="35" y2="22" {...strokeProps} strokeOpacity="0.2" />
                    <line x1="60" y1="25" x2="60" y2="20" {...strokeProps} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Grid Lines" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <line x1="0" y1="10" x2="100" y2="10" {...strokeProps} strokeOpacity="0.1" strokeDasharray="2 2" />
                    <line x1="0" y1="20" x2="100" y2="20" {...strokeProps} strokeOpacity="0.1" strokeDasharray="2 2" />
                    <line x1="0" y1="30" x2="100" y2="30" {...strokeProps} strokeOpacity="0.1" strokeDasharray="2 2" />
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
                    <line x1="0" y1="20" x2="100" y2="20" stroke={theme.colors.success} strokeOpacity="0.5" strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Callout" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <circle cx="20" cy="20" r="3" {...primaryFill} />
                    <line x1="20" y1="20" x2="40" y2="10" {...strokeProps} />
                    <rect x="40" y="5" width="30" height="10" rx="1" {...surfaceFill} {...strokeProps} strokeWidth="0.5" />
                    <text x="45" y="12" fontSize="4" {...textFill}>Peak</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Crosshair" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <line x1="50" y1="0" x2="50" y2="40" {...strokeProps} strokeDasharray="2 2" />
                    <line x1="0" y1="20" x2="100" y2="20" {...strokeProps} strokeDasharray="2 2" />
                    <circle cx="50" cy="20" r="3" fill="none" stroke={theme.colors.primary} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Zoom Controls" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="30" y="5" width="40" height="20" rx="10" {...surfaceFill} {...strokeProps} strokeOpacity="0.2" />
                    <text x="40" y="18" fontSize="10" {...textFill} opacity="0.5">-</text>
                    <text x="60" y="18" fontSize="10" {...textFill} opacity="0.5">+</text>
                    <line x1="50" y1="5" x2="50" y2="25" {...strokeProps} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mini-map" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="10" width="100" height="15" fill="none" {...strokeProps} strokeOpacity="0.1" />
                    <path d="M0,20 L20,15 L40,18 L60,12 L80,22 L100,15" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="30" y="10" width="30" height="15" fill={theme.colors.primary} fillOpacity="0.1" stroke={theme.colors.primary} strokeWidth="0.5" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 9. Report Structures --- */}
        <SectionTitle>Report Structures</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Title Page" centered>
                <svg viewBox="0 0 60 80" className="w-12 h-16">
                    <rect x="0" y="0" width="60" height="80" fill="none" {...strokeProps} strokeOpacity="0.1" />
                    <rect x="10" y="20" width="40" height="4" rx="1" {...primaryFill} />
                    <rect x="15" y="30" width="30" height="2" rx="0.5" {...textFill} opacity="0.5" />
                    <rect x="25" y="60" width="10" height="2" rx="0.5" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="TOC" centered>
                <svg viewBox="0 0 60 80" className="w-12 h-16">
                    <rect x="0" y="0" width="60" height="80" fill="none" {...strokeProps} strokeOpacity="0.1" />
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

        {/* --- 10. Comparative & Analytical --- */}
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

        {/* --- 11. Specialized Data --- */}
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

        {/* --- 3. Data Lists & Tables (Originals) --- */}
        <SectionTitle>Data Lists & Tables</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <GalleryItem title="User Badge" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <circle cx="20" cy="20" r="12" fill={theme.colors.text} fillOpacity="0.1" />
                    <text x="20" y="23" fontSize="8px" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">JD</text>
                    <circle cx="29" cy="29" r="3" fill={theme.colors.success} stroke={theme.colors.surface} strokeWidth="1" />
                    <text x="40" y="18" fontSize="8px" fontWeight="bold" fill={theme.colors.text} textAnchor="start">Jane Doe</text>
                    <text x="40" y="28" fontSize="6px" fill={theme.colors.text} opacity="0.6" textAnchor="start">Online</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Avatar Group" centered>
                 <svg viewBox="0 0 100 40" className="w-32 h-12">
                     <circle cx="30" cy="20" r="12" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" />
                     <text x="30" y="23" fontSize="8px" fill={theme.colors.text} textAnchor="middle">U1</text>
                     <circle cx="45" cy="20" r="12" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" />
                     <text x="45" y="23" fontSize="8px" fill={theme.colors.text} textAnchor="middle">U2</text>
                     <circle cx="60" cy="20" r="12" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" />
                     <text x="60" y="23" fontSize="8px" fill={theme.colors.text} textAnchor="middle">U3</text>
                 </svg>
            </GalleryItem>

            <GalleryItem title="File Row" centered>
                 <svg viewBox="0 0 100 40" className="w-32 h-12">
                     <rect x="5" y="5" width="90" height="30" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1" />
                     <path d="M15,10 H23 L25,12 H15 Z M15,12 V28 H27 V12 H15" fill={theme.colors.text} fillOpacity="0.1" />
                     <text x="32" y="18" fontSize="8px" fontWeight="bold" fill={theme.colors.text} textAnchor="start">report.pdf</text>
                     <text x="32" y="28" fontSize="6px" fill={theme.colors.text} opacity="0.6" textAnchor="start">2.4MB</text>
                 </svg>
            </GalleryItem>

            <GalleryItem title="Key Value" centered>
                 <svg viewBox="0 0 100 40" className="w-32 h-12">
                     <text x="10" y="15" fontSize="8px" fill={theme.colors.text} opacity="0.6" textAnchor="start">ID</text>
                     <text x="90" y="15" fontSize="8px" fontFamily="monospace" fill={theme.colors.text} textAnchor="end">#8492</text>
                     <line x1="10" y1="20" x2="90" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" strokeDasharray="2 2" />
                     <text x="10" y="30" fontSize="8px" fill={theme.colors.text} opacity="0.6" textAnchor="start">Date</text>
                     <text x="90" y="30" fontSize="8px" fill={theme.colors.text} textAnchor="end">Oct 24</text>
                 </svg>
            </GalleryItem>

            <GalleryItem title="Table Row Text" centered>
                <svg viewBox="0 0 100 20" className="w-full h-8">
                    <text x="5" y="13" fontSize="8px" fill={theme.colors.text} fontWeight="bold">Item Name</text>
                    <text x="95" y="13" fontSize="8px" fill={theme.colors.text} opacity="0.6" textAnchor="end">Details</text>
                    <line x1="0" y1="19" x2="100" y2="19" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Table Header" centered>
                <svg viewBox="0 0 100 20" className="w-full h-8">
                    <rect x="0" y="0" width="100" height="20" fill={theme.colors.text} fillOpacity="0.05" />
                    <text x="5" y="13" fontSize="7px" fill={theme.colors.text} fontWeight="bold" opacity="0.7" style={{textTransform: 'uppercase'}}>Column 1</text>
                    <text x="50" y="13" fontSize="7px" fill={theme.colors.text} fontWeight="bold" opacity="0.7" style={{textTransform: 'uppercase'}}>Column 2</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="List Item Rich" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="5" y="10" width="20" height="20" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <text x="30" y="18" fontSize="8px" fontWeight="bold" fill={theme.colors.text}>Product Title</text>
                    <text x="30" y="28" fontSize="6px" fill={theme.colors.text} opacity="0.6">Secondary description</text>
                    <text x="95" y="23" fontSize="12px" fill={theme.colors.text} opacity="0.2" textAnchor="end">›</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Status & Feedback --- */}
        <SectionTitle>Status & Feedback</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
             <GalleryItem title="Status: Active" centered>
                <svg viewBox="0 0 80 24" className="w-24 h-8">
                    <rect x="1" y="1" width="78" height="22" rx="11" fill={theme.colors.success + '10'} stroke={theme.colors.success + '40'} strokeWidth="1" />
                    <circle cx="15" cy="12" r="3" fill={theme.colors.success} />
                    <text x="40" y="15" fontSize="9px" fontWeight="bold" fill={theme.colors.success} textAnchor="middle">Active</text>
                </svg>
            </GalleryItem>

             <GalleryItem title="Status: Offline" centered>
                <svg viewBox="0 0 80 24" className="w-24 h-8">
                    <rect x="1" y="1" width="78" height="22" rx="11" fill={theme.colors.text + '05'} stroke={theme.colors.text + '20'} strokeWidth="1" />
                    <circle cx="15" cy="12" r="3" fill={theme.colors.text} opacity="0.4" />
                    <text x="40" y="15" fontSize="9px" fontWeight="bold" fill={theme.colors.text} opacity="0.6" textAnchor="middle">Offline</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Status: Error" centered>
                <svg viewBox="0 0 80 24" className="w-24 h-8">
                    <rect x="1" y="1" width="78" height="22" rx="11" fill={theme.colors.error + '10'} stroke={theme.colors.error + '40'} strokeWidth="1" />
                    <circle cx="15" cy="12" r="3" fill={theme.colors.error} />
                    <text x="40" y="15" fontSize="9px" fontWeight="bold" fill={theme.colors.error} textAnchor="middle">Error</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Status: Warning" centered>
                <svg viewBox="0 0 80 24" className="w-24 h-8">
                    <rect x="1" y="1" width="78" height="22" rx="11" fill={theme.colors.warning + '10'} stroke={theme.colors.warning + '40'} strokeWidth="1" />
                    <circle cx="15" cy="12" r="3" fill={theme.colors.warning} />
                    <text x="40" y="15" fontSize="9px" fontWeight="bold" fill={theme.colors.warning} textAnchor="middle">Warning</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Tag Group" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="5" y="10" width="40" height="16" rx="4" fill={theme.colors.primary} fillOpacity="0.1" stroke={theme.colors.primary} strokeWidth="1" />
                    <text x="25" y="20" fontSize="7px" fontWeight="bold" fill={theme.colors.primary} textAnchor="middle" dominantBaseline="middle">Design</text>
                    <rect x="50" y="10" width="35" height="16" rx="4" fill={theme.colors.secondary} fillOpacity="0.1" stroke={theme.colors.secondary} strokeWidth="1" />
                    <text x="67.5" y="20" fontSize="7px" fontWeight="bold" fill={theme.colors.secondary} textAnchor="middle" dominantBaseline="middle">Dev</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Badge Count" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" fill={theme.colors.error} />
                    <text x="20" y="24" fontSize="10px" fontWeight="bold" fill="white" textAnchor="middle">5</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Alert Inline" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="2" y="5" width="96" height="30" rx="4" fill={theme.colors.info} fillOpacity="0.1" stroke={theme.colors.info} strokeWidth="1" />
                    <circle cx="15" cy="20" r="4" fill={theme.colors.info} />
                    <text x="25" y="23" fontSize="8px" fill={theme.colors.text} textAnchor="start">Update available</text>
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
