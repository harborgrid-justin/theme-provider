
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const AviationGalleryTab: React.FC = () => {
  const { theme, strokeProps, layoutProps, primaryFill, textFill, surfaceFill, faintFill, textStyle, strokeWidth, corner } = useSvgTheme();

  // Aviation-specific stroke styles
  const instrumentStroke = { ...strokeProps, strokeWidth: Math.max(1.5, parseFloat(strokeWidth)) };
  
  // Specific fills for aviation context (Sky/Ground)
  const skyFill = { fill: theme.colors.primary };
  const groundFill = { fill: theme.colors.secondary }; 
  const warningStroke = { stroke: theme.colors.warning, fill: 'none', strokeWidth: '1.5' };
  const successFillStyle = { fill: theme.colors.success, stroke: 'none' };
  const alertFill = { fill: theme.colors.error, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Aviation & Avionics (45+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            High-contrast, legible instrumentation and interface elements for flight decks, drones, and aerospace control systems.
        </p>

        {/* --- 1. Primary Flight Display (PFD) --- */}
        <SectionTitle>1. Primary Flight Display</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Artificial Horizon" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <clipPath id="horizonClip">
                        <circle cx="30" cy="30" r="25" />
                    </clipPath>
                    <g clipPath="url(#horizonClip)">
                        <rect x="0" y="0" width="60" height="30" {...skyFill} opacity="0.8" />
                        <rect x="0" y="30" width="60" height="30" {...groundFill} opacity="0.8" />
                        <line x1="10" y1="30" x2="50" y2="30" stroke="white" strokeWidth="1" />
                        <path d="M30,30 L20,40 M30,30 L40,40" stroke="white" strokeWidth="1" opacity="0.5" />
                    </g>
                    <circle cx="30" cy="30" r="25" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    {/* Aircraft Symbol */}
                    <path d="M20,30 H28 L30,32 L32,30 H40" stroke={theme.colors.accent} strokeWidth="2" fill="none" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Speed Tape" centered>
                <svg viewBox="0 0 40 100" className="w-10 h-24">
                    <rect x="5" y="5" width="30" height="90" fill={theme.colors.text} fillOpacity="0.1" />
                    <line x1="5" y1="50" x2="35" y2="50" stroke={theme.colors.accent} strokeWidth="2" />
                    <text x="32" y="30" fontSize="8" fill={theme.colors.text} textAnchor="end">260</text>
                    <text x="32" y="52" fontSize="10" fontWeight="bold" fill={theme.colors.text} textAnchor="end">250</text>
                    <text x="32" y="75" fontSize="8" fill={theme.colors.text} textAnchor="end">240</text>
                    <rect x="0" y="45" width="5" height="10" fill={theme.colors.accent} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Altitude Tape" centered>
                <svg viewBox="0 0 40 100" className="w-10 h-24">
                    <rect x="5" y="5" width="30" height="90" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="35" y="45" width="5" height="10" fill={theme.colors.accent} />
                    <line x1="5" y1="50" x2="35" y2="50" stroke={theme.colors.accent} strokeWidth="2" />
                    <text x="8" y="30" fontSize="8" fill={theme.colors.text}>310</text>
                    <text x="8" y="52" fontSize="10" fontWeight="bold" fill={theme.colors.text}>300</text>
                    <text x="8" y="75" fontSize="8" fill={theme.colors.text}>290</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Compass Rose" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="25" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M30,5 L32,10 L28,10 Z" fill={theme.colors.accent} />
                    <text x="30" y="18" fontSize="6" textAnchor="middle" fill={theme.colors.text}>N</text>
                    <text x="52" y="32" fontSize="6" textAnchor="middle" fill={theme.colors.text}>E</text>
                    <text x="30" y="48" fontSize="6" textAnchor="middle" fill={theme.colors.text}>S</text>
                    <text x="8" y="32" fontSize="6" textAnchor="middle" fill={theme.colors.text}>W</text>
                    <line x1="30" y1="30" x2="30" y2="10" stroke={theme.colors.accent} strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Flight Director" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="0" y="0" width="60" height="60" fill={theme.colors.surface} />
                    <path d="M10,30 H50 M30,10 V50" stroke={theme.colors.accent} strokeWidth="1" strokeDasharray="4 2" />
                    <path d="M20,30 L10,40 M40,30 L50,40" stroke={theme.colors.primary} strokeWidth="2" />
                    <circle cx="30" cy="30" r="2" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Slip/Skid" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <path d="M10,2 H50" stroke={theme.colors.text} strokeWidth="2" />
                    <rect x="28" y="4" width="4" height="12" fill={theme.colors.text} />
                    <path d="M20,18 L22,2 L38,2 L40,18" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Navigation & Maps --- */}
        <SectionTitle>2. Navigation & Maps</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Waypoint" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L35,20 L20,35 L5,20 Z" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <circle cx="20" cy="20" r="2" fill={theme.colors.text} />
                    <text x="35" y="15" fontSize="8" fill={theme.colors.text} fontWeight="bold">WPT1</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Flight Path" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <path d="M5,35 L20,15 L40,25 L55,5" fill="none" stroke={theme.colors.accent} strokeWidth="2" />
                    <circle cx="20" cy="15" r="2" fill={theme.colors.text} />
                    <circle cx="40" cy="25" r="2" fill={theme.colors.text} />
                </svg>
            </GalleryItem>

            <GalleryItem title="VOR Station" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="10" width="20" height="20" stroke={theme.colors.text} strokeWidth="2" fill="none" />
                    <circle cx="20" cy="20" r="2" fill={theme.colors.text} />
                    <text x="20" y="38" fontSize="6" textAnchor="middle" fill={theme.colors.text}>114.50</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Heading Bug" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <path d="M10,18 H30 L25,5 H15 Z" fill="none" stroke={theme.colors.accent} strokeWidth="2" />
                    <path d="M18,5 V2" stroke={theme.colors.accent} strokeWidth="2" />
                    <path d="M22,5 V2" stroke={theme.colors.accent} strokeWidth="2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="CDI Indicator" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <circle cx="10" cy="10" r="2" fill="none" stroke={theme.colors.text} />
                    <circle cx="20" cy="10" r="2" fill="none" stroke={theme.colors.text} />
                    <circle cx="30" cy="10" r="2" fill="none" stroke={theme.colors.text} />
                    <circle cx="40" cy="10" r="2" fill="none" stroke={theme.colors.text} />
                    <circle cx="50" cy="10" r="2" fill="none" stroke={theme.colors.text} />
                    <line x1="25" y1="2" x2="25" y2="18" stroke={theme.colors.accent} strokeWidth="2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Wind Vector" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="30" y1="10" x2="10" y2="30" stroke={theme.colors.text} strokeWidth="1.5" />
                    <path d="M10,30 L18,28 M10,30 L12,22" stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="30" y="35" fontSize="8" fill={theme.colors.text}>240/15</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. Engine & Systems --- */}
        <SectionTitle>3. Engine & Systems</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="N1 Gauge" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="25" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="4" />
                    <path d="M30,5 A25,25 0 1,1 5,30" fill="none" stroke={theme.colors.success} strokeWidth="4" />
                    <text x="30" y="32" fontSize="12" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>84.2</text>
                    <text x="30" y="42" fontSize="6" textAnchor="middle" fill={theme.colors.text} opacity="0.6">N1 %</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="EGT Bar" centered>
                <svg viewBox="0 0 20 60" className="w-6 h-16">
                    <rect x="5" y="5" width="10" height="50" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="5" y="25" width="10" height="30" fill={theme.colors.success} />
                    <line x1="2" y1="15" x2="18" y2="15" stroke={theme.colors.error} strokeWidth="1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Fuel Qty" centered>
                <div className="text-center">
                    <div className="text-[10px] font-mono opacity-60">LBS</div>
                    <div className="text-lg font-bold font-mono" style={{ color: theme.colors.success }}>12,400</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Oil Press" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <path d="M10,20 Q30,5 50,20" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="30" y1="20" x2="40" y2="10" stroke={theme.colors.success} strokeWidth="2" />
                    <text x="30" y="35" fontSize="8" textAnchor="middle" fill={theme.colors.text}>60 PSI</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Landing Gear" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M30,10 L15,30 H45 Z" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <circle cx="30" cy="10" r="4" fill="none" stroke={theme.colors.success} strokeWidth="2" />
                    <text x="30" y="12" fontSize="6" textAnchor="middle" fill={theme.colors.success} fontWeight="bold">DN</text>
                    <circle cx="15" cy="30" r="4" fill="none" stroke={theme.colors.success} strokeWidth="2" />
                    <text x="15" y="32" fontSize="6" textAnchor="middle" fill={theme.colors.success} fontWeight="bold">DN</text>
                    <circle cx="45" cy="30" r="4" fill="none" stroke={theme.colors.success} strokeWidth="2" />
                    <text x="45" y="32" fontSize="6" textAnchor="middle" fill={theme.colors.success} fontWeight="bold">DN</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Flaps" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-16">
                    <rect x="15" y="5" width="10" height="50" fill={theme.colors.text} fillOpacity="0.1" />
                    <line x1="15" y1="15" x2="25" y2="15" stroke={theme.colors.text} />
                    <line x1="15" y1="30" x2="25" y2="30" stroke={theme.colors.text} />
                    <line x1="15" y1="45" x2="25" y2="45" stroke={theme.colors.text} />
                    <polygon points="28,30 35,27 35,33" fill={theme.colors.primary} />
                    <text x="5" y="32" fontSize="8" fill={theme.colors.text}>15</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Traffic & Weather --- */}
        <SectionTitle>4. Traffic & Weather</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Traffic: OK" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,10 L30,20 L20,30 L10,20 Z" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <text x="25" y="18" fontSize="8" fill={theme.colors.text}>+12</text>
                    <path d="M20,30 V35" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Traffic: RA" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="10" width="20" height="20" fill={theme.colors.error} />
                    <text x="20" y="24" fontSize="8" fontWeight="bold" textAnchor="middle" fill="white">-05</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Weather Cell" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,20 Q20,5 30,20 T50,20 Q40,35 30,25 T10,20" fill={theme.colors.error} opacity="0.6" />
                    <path d="M15,20 Q25,10 35,20" fill={theme.colors.warning} opacity="0.6" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Terrain Map" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,35 Q15,25 25,30 T45,15 Q55,20 60,35 H5 Z" fill="none" stroke={theme.colors.warning} strokeWidth="1" />
                    <path d="M15,35 Q25,30 35,32 T55,25 V35 H15 Z" fill={theme.colors.error} opacity="0.3" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Wind Shear" centered>
                <div className="bg-red-600 text-white px-2 py-1 font-bold text-[8px] animate-pulse rounded border border-red-800">
                    WINDSHEAR
                </div>
            </GalleryItem>

            <GalleryItem title="Lightning" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L10,20 H22 L18,35 L30,18 H18 L20,5" fill={theme.colors.accent} stroke="white" strokeWidth="1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Cockpit Controls --- */}
        <SectionTitle>5. Cockpit Controls</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Switch: ON" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-16">
                    <rect x="10" y="5" width="20" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="12" y="7" width="16" height="24" rx="2" fill={theme.colors.text} />
                    <text x="20" y="45" fontSize="6" textAnchor="middle" fill={theme.colors.text}>ON</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Rotary Knob" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="30" y1="30" x2="45" y2="15" stroke={theme.colors.text} strokeWidth="3" strokeLinecap="round" />
                    <circle cx="30" cy="30" r="2" fill={theme.colors.text} />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                        <line key={deg} x1="30" y1="5" x2="30" y2="8" stroke={theme.colors.text} transform={`rotate(${deg} 30 30)`} />
                    ))}
                </svg>
            </GalleryItem>

            <GalleryItem title="Pushbutton" centered>
                <div className="w-12 h-12 bg-black border-2 border-gray-600 rounded flex items-center justify-center shadow-inner">
                    <span className="text-[8px] font-bold text-green-400 drop-shadow-[0_0_2px_rgba(74,222,128,0.8)]">AUTO</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Master Caution" centered>
                <div className="w-16 h-10 bg-yellow-500 rounded border-2 border-yellow-700 flex items-center justify-center shadow-md animate-pulse">
                    <span className="text-[8px] font-bold text-black uppercase">Master<br/>Caution</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Throttle" centered>
                <svg viewBox="0 0 40 80" className="w-10 h-20">
                    <rect x="15" y="10" width="10" height="60" rx="5" fill={theme.colors.text} fillOpacity="0.2" />
                    <circle cx="20" cy="30" r="12" fill={theme.colors.text} />
                    <rect x="18" y="30" width="4" height="40" fill={theme.colors.text} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Breaker" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <circle cx="20" cy="20" r="12" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <text x="20" y="23" fontSize="10" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>5</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Commercial Aviation --- */}
        <SectionTitle>6. Commercial Aviation</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Boarding Pass" centered>
                <div className="bg-white border rounded p-2 w-full h-full flex flex-col justify-between" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="flex justify-between border-b pb-1 mb-1">
                        <span className="text-[8px] font-bold">SFO</span>
                        <Icons.Plane size="sm" className="transform rotate-90 opacity-50"/>
                        <span className="text-[8px] font-bold">LHR</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-[6px] opacity-60">SEAT</div>
                            <div className="text-lg font-bold leading-none">4A</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[6px] opacity-60">GATE</div>
                            <div className="text-sm font-bold leading-none">G4</div>
                        </div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Seat Map" centered>
                <div className="grid grid-cols-3 gap-1 w-12">
                    <div className="w-3 h-3 border rounded bg-blue-100"></div>
                    <div className="w-3 h-3 border rounded"></div>
                    <div className="w-3 h-3 border rounded bg-gray-200 cursor-not-allowed"></div>
                    <div className="w-3 h-3 border rounded"></div>
                    <div className="w-3 h-3 border rounded"></div>
                    <div className="w-3 h-3 border rounded bg-blue-100"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Gate Sign" centered>
                <div className="bg-yellow-400 text-black px-4 py-2 font-bold text-lg rounded border-2 border-black">
                    B12
                </div>
            </GalleryItem>

            <GalleryItem title="Baggage Tag" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-16">
                    <path d="M10,5 H30 L35,15 V55 H5 V15 L10,5 Z" fill="white" stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="20" cy="10" r="2" fill="none" stroke={theme.colors.text} />
                    <text x="20" y="30" fontSize="12" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>JFK</text>
                    <line x1="10" y1="40" x2="30" y2="40" stroke={theme.colors.text} strokeWidth="4" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Flight Status" centered>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-[8px] font-bold uppercase tracking-wider border border-green-200">
                    On Time
                </div>
            </GalleryItem>

            <GalleryItem title="Class Badge" centered>
                <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-[8px] font-bold border border-purple-200">
                    Business
                </div>
            </GalleryItem>
        </div>

        {/* --- 7. UAV & Drone (NEW) --- */}
        <SectionTitle>7. UAV & Drone Systems</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Drone Top" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="8" {...layoutProps} />
                    <line x1="10" y1="10" x2="50" y2="50" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="50" y1="10" x2="10" y2="50" stroke={theme.colors.text} strokeWidth="2" />
                    <circle cx="10" cy="10" r="5" {...faintFill} stroke={theme.colors.text} />
                    <circle cx="50" cy="10" r="5" {...faintFill} stroke={theme.colors.text} />
                    <circle cx="10" cy="50" r="5" {...faintFill} stroke={theme.colors.text} />
                    <circle cx="50" cy="50" r="5" {...faintFill} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Gimbal Pitch" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-16">
                    <path d="M5,10 H35 V50 H5 Z" fill="none" stroke={theme.colors.text} opacity="0.2" />
                    <line x1="5" y1="30" x2="35" y2="30" stroke={theme.colors.text} strokeDasharray="2 2" />
                    <circle cx="20" cy="30" r="2" fill={theme.colors.primary} />
                    <line x1="20" y1="30" x2="20" y2="15" stroke={theme.colors.primary} strokeWidth="2" />
                    <path d="M15,15 H25" stroke={theme.colors.primary} strokeWidth="2" />
                    <text x="20" y="58" fontSize="8" textAnchor="middle" fill={theme.colors.text}>-15°</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Telemetry" centered>
                <div className="flex flex-col gap-1 w-full px-2 text-[8px] font-mono">
                    <div className="flex justify-between"><span>H:</span> <b>120m</b></div>
                    <div className="flex justify-between"><span>D:</span> <b>450m</b></div>
                    <div className="flex justify-between"><span>V:</span> <b>12m/s</b></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Satellites" centered>
                <div className="flex items-center gap-1">
                    <Icons.Globe size="sm" className="w-3" style={{color: theme.colors.success}}/>
                    <span className="text-xs font-bold">14</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Return Home" centered>
                <div className="border border-red-500 bg-red-50 text-red-600 rounded px-2 py-1 text-[8px] font-bold flex items-center gap-1">
                    <Icons.Home size="sm" className="w-2"/> RTH
                </div>
            </GalleryItem>

            <GalleryItem title="Signal RSSI" centered>
                <div className="flex items-end gap-0.5 h-4">
                    <div className="w-1 h-1 bg-green-500"></div>
                    <div className="w-1 h-2 bg-green-500"></div>
                    <div className="w-1 h-3 bg-green-500"></div>
                    <div className="w-1 h-4 bg-gray-300"></div>
                    <span className="text-[6px] ml-1">-65dB</span>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
