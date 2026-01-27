import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const DataGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  // Helper for common SVG props
  const svgProps = {
    vectorEffect: "non-scaling-stroke",
    fill: theme.colors.surface,
    stroke: theme.colors.text,
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const textStyle = {
      fill: theme.colors.text,
      fontSize: "8px",
      fontFamily: theme.typography.fontFamily === 'mono' ? 'monospace' : 'inherit',
      textAnchor: "middle" as const,
      dominantBaseline: "middle" as const,
      fontWeight: "bold",
      pointerEvents: "none" as const
  };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Component Gallery (76 Items)</SectionTitle>
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

        {/* --- 3. Data Lists & Tables --- */}
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
                    <rect x="1" y="1" width="78" height="22" rx="11" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1" />
                    <circle cx="15" cy="12" r="3" fill="#22C55E" />
                    <text x="40" y="15" fontSize="9px" fontWeight="bold" fill="#15803D" textAnchor="middle">Active</text>
                </svg>
            </GalleryItem>

             <GalleryItem title="Status: Offline" centered>
                <svg viewBox="0 0 80 24" className="w-24 h-8">
                    <rect x="1" y="1" width="78" height="22" rx="11" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
                    <circle cx="15" cy="12" r="3" fill="#9CA3AF" />
                    <text x="40" y="15" fontSize="9px" fontWeight="bold" fill="#4B5563" textAnchor="middle">Offline</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Status: Error" centered>
                <svg viewBox="0 0 80 24" className="w-24 h-8">
                    <rect x="1" y="1" width="78" height="22" rx="11" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
                    <circle cx="15" cy="12" r="3" fill="#EF4444" />
                    <text x="40" y="15" fontSize="9px" fontWeight="bold" fill="#B91C1C" textAnchor="middle">Error</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Status: Warning" centered>
                <svg viewBox="0 0 80 24" className="w-24 h-8">
                    <rect x="1" y="1" width="78" height="22" rx="11" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                    <circle cx="15" cy="12" r="3" fill="#F59E0B" />
                    <text x="40" y="15" fontSize="9px" fontWeight="bold" fill="#B45309" textAnchor="middle">Warning</text>
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

        {/* --- 5. Progress & Activity --- */}
        <SectionTitle>Progress & Activity</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <GalleryItem title="Progress Ring" centered>
                 <svg viewBox="0 0 40 40" className="w-12 h-12">
                     <circle cx="20" cy="20" r="16" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="3" />
                     <circle cx="20" cy="20" r="16" fill="none" stroke={theme.colors.primary} strokeWidth="3" strokeDasharray="75 100" strokeLinecap="round" transform="rotate(-90 20 20)" />
                     <text x="20" y="23" fontSize="8px" fontWeight="bold" fill={theme.colors.primary} textAnchor="middle">75%</text>
                 </svg>
            </GalleryItem>

            <GalleryItem title="Progress Bar" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="5" y="18" width="90" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="5" y="18" width="60" height="4" rx="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Step Horizontal" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <line x1="15" y1="20" x2="85" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="15" cy="20" r="6" fill={theme.colors.primary} />
                    <text x="15" y="23" fontSize="6px" fill="white" fontWeight="bold" textAnchor="middle">1</text>
                    <circle cx="50" cy="20" r="6" fill={theme.colors.primary} />
                    <text x="50" y="23" fontSize="6px" fill="white" fontWeight="bold" textAnchor="middle">2</text>
                    <circle cx="85" cy="20" r="6" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Timeline Vertical" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-20">
                    <line x1="20" y1="5" x2="20" y2="55" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="20" cy="10" r="4" fill={theme.colors.primary} />
                    <circle cx="20" cy="30" r="4" fill={theme.colors.secondary} />
                    <circle cx="20" cy="50" r="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.3" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Loading Spinner" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="3" />
                    <path d="M20,8 A12,12 0 0,1 32,20" fill="none" stroke={theme.colors.primary} strokeWidth="3" strokeLinecap="round" />
                </svg>
            </GalleryItem>
        </div>
        
        {/* --- 6. Complex Data Sets --- */}
        <SectionTitle>Complex Data Sets</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2">
                <GalleryItem title="Table Skeleton" centered>
                     <svg viewBox="0 0 200 60" className="w-full h-24">
                        <line x1="0" y1="15" x2="200" y2="15" stroke={theme.colors.text} strokeOpacity="0.1" />
                        <rect x="0" y="2" width="60" height="8" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                        <rect x="70" y="2" width="40" height="8" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                        <rect x="120" y="2" width="30" height="8" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                        <rect x="0" y="22" width="50" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                        <rect x="70" y="22" width="30" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                        <rect x="120" y="22" width="20" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                        <rect x="0" y="32" width="55" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                        <rect x="70" y="32" width="25" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                        <rect x="120" y="32" width="25" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                        <rect x="0" y="42" width="45" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                        <rect x="70" y="42" width="35" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                        <rect x="120" y="42" width="15" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                     </svg>
                </GalleryItem>
            </div>
            
             <GalleryItem title="Activity Feed" centered>
                 <svg viewBox="0 0 100 80" className="w-full h-24">
                     <line x1="10" y1="0" x2="10" y2="80" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" />
                     <circle cx="10" cy="10" r="4" fill={theme.colors.surface} stroke={theme.colors.primary} strokeWidth="1.5" />
                     <text x="20" y="10" fontSize="8px" fontWeight="bold" fill={theme.colors.text} dominantBaseline="middle">User Action 1</text>
                     <text x="20" y="18" fontSize="5px" fill={theme.colors.text} opacity="0.5">2 hours ago</text>
                     <circle cx="10" cy="40" r="4" fill={theme.colors.surface} stroke={theme.colors.secondary} strokeWidth="1.5" />
                     <text x="20" y="40" fontSize="8px" fontWeight="bold" fill={theme.colors.text} dominantBaseline="middle">System Alert</text>
                     <text x="20" y="48" fontSize="5px" fill={theme.colors.text} opacity="0.5">5 hours ago</text>
                     <circle cx="10" cy="70" r="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.4" strokeWidth="1.5" />
                     <text x="20" y="70" fontSize="8px" fontWeight="bold" fill={theme.colors.text} dominantBaseline="middle">Log Entry</text>
                     <text x="20" y="78" fontSize="5px" fill={theme.colors.text} opacity="0.5">Yesterday</text>
                 </svg>
            </GalleryItem>
        </div>
    </div>
  );
};