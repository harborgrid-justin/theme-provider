import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Icons } from './DashboardIcons';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const WebUiGalleryTab: React.FC = () => {
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

  // Solid fill style for active elements
  const solidFill = {
      fill: theme.colors.text,
      stroke: "none"
  };

  // Primary fill style
  const primaryFill = {
      fill: theme.colors.primary,
      stroke: "none"
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

  // Helper for layout props
  const layoutSvgProps = {
    vectorEffect: "non-scaling-stroke",
    fill: theme.colors.surface,
    stroke: theme.colors.text,
    strokeWidth: "1",
    strokeOpacity: "0.2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const textFill = { fill: theme.colors.text, fillOpacity: "0.4" };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Wireframe Primitives</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Fundamental building blocks for low and high fidelity prototyping.
        </p>

        {/* --- 1. Wireframe Primitives --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Image Box" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="25" y="5" width="50" height="50" rx="4" {...svgProps} fill={theme.colors.surface} />
                    <line x1="25" y1="5" x2="75" y2="55" {...svgProps} strokeOpacity="0.2" />
                    <line x1="75" y1="5" x2="25" y2="55" {...svgProps} strokeOpacity="0.2" />
                    <circle cx="50" cy="30" r="8" fill={theme.colors.text} fillOpacity="0.1" stroke="none" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Avatar Circle" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} />
                    <circle cx="30" cy="25" r="6" fill={theme.colors.text} fillOpacity="0.2" stroke="none" />
                    <path d="M18,42 Q30,55 42,42" fill={theme.colors.text} fillOpacity="0.2" stroke="none" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Avatar Square" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" rx="6" {...svgProps} />
                    <circle cx="30" cy="25" r="6" fill={theme.colors.text} fillOpacity="0.2" stroke="none" />
                    <path d="M18,42 Q30,55 42,42" fill={theme.colors.text} fillOpacity="0.2" stroke="none" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Heading Block" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="20" width="80" height="8" rx="2" {...solidFill} />
                    <rect x="20" y="32" width="60" height="4" rx="2" {...solidFill} fillOpacity="0.4" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Text Paragraph" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="15" width="80" height="4" rx="1" {...solidFill} fillOpacity="0.2" />
                    <rect x="10" y="25" width="80" height="4" rx="1" {...solidFill} fillOpacity="0.2" />
                    <rect x="10" y="35" width="50" height="4" rx="1" {...solidFill} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Button Primary" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="20" width="80" height="20" rx="4" {...primaryFill} />
                    <text x="50" y="31" {...textStyle} fill="white">Action</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Button Secondary" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="20" width="80" height="20" rx="4" fill={theme.colors.secondary} stroke="none" />
                    <text x="50" y="31" {...textStyle} fill="white">Secondary</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Button Outline" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="20" width="80" height="20" rx="4" fill="none" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.5" />
                    <text x="50" y="31" {...textStyle}>Cancel</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Input Field" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="20" width="90" height="20" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.4" />
                    <rect x="15" y="28" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Checkbox Group" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    {/* Unchecked */}
                    <rect x="15" y="15" width="10" height="10" rx="2" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="35" y="19" width="40" height="3" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    
                    {/* Checked */}
                    <rect x="15" y="35" width="10" height="10" rx="2" fill={theme.colors.text} stroke="none" />
                    <path d="M17,40 L20,43 L23,37" fill="none" stroke="white" strokeWidth="1.5" />
                    <rect x="35" y="39" width="40" height="3" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Radio Group" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    {/* Unchecked */}
                    <circle cx="20" cy="20" r="5" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="35" y="19" width="40" height="3" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    
                    {/* Checked */}
                    <circle cx="20" cy="40" r="5" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                    <circle cx="20" cy="40" r="2.5" fill={theme.colors.primary} stroke="none" />
                    <rect x="35" y="39" width="40" height="3" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Toggle Switch" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="12" width="50" height="26" rx="13" fill={theme.colors.success} stroke="none" />
                    <circle cx="42" cy="25" r="10" fill="white" stroke="none" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.2))" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Rating Stars" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    {[10, 30, 50].map(x => (
                        <path key={x} d={`M${x},5 L${x+3},15 L${x+13},15 L${x+5},22 L${x+8},32 L${x},26 L${x-8},32 L${x-5},22 L${x-13},15 L${x-3},15 Z`} fill={theme.colors.warning} stroke="none" />
                    ))}
                    {[70, 90].map(x => (
                        <path key={x} d={`M${x},5 L${x+3},15 L${x+13},15 L${x+5},22 L${x+8},32 L${x},26 L${x-8},32 L${x-5},22 L${x-13},15 L${x-3},15 Z`} fill={theme.colors.text} fillOpacity="0.1" stroke="none" />
                    ))}
                </svg>
            </GalleryItem>

            <GalleryItem title="Search Bar" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="18" width="90" height="24" rx="12" fill={theme.colors.text} fillOpacity="0.05" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <circle cx="20" cy="30" r="4" fill="none" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.4" />
                    <line x1="23" y1="33" x2="26" y2="36" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.4" />
                    <rect x="35" y="28" width="40" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Advanced Inputs --- */}
        <SectionTitle>Advanced Inputs</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Date Picker" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="18" width="90" height="24" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <text x="35" y="31" {...textStyle} fillOpacity="0.6">YYYY-MM-DD</text>
                    <rect x="78" y="22" width="12" height="12" rx="1" fill="none" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.4" />
                    <line x1="78" y1="26" x2="90" y2="26" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.4" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Time Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="15" y="18" width="70" height="24" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <text x="35" y="31" {...textStyle}>12</text>
                    <text x="50" y="30" {...textStyle}>:</text>
                    <text x="65" y="31" {...textStyle}>30</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Range Slider" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <line x1="10" y1="30" x2="90" y2="30" stroke={theme.colors.text} strokeWidth="3" strokeOpacity="0.2" strokeLinecap="round" />
                    <line x1="30" y1="30" x2="70" y2="30" stroke={theme.colors.primary} strokeWidth="3" strokeLinecap="round" />
                    <circle cx="30" cy="30" r="6" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="70" cy="30" r="6" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="OTP Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="15" width="18" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.primary} strokeWidth="1.5" />
                    <line x1="19" y1="22" x2="19" y2="38" stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="34" y="15" width="18" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="43" cy="30" r="2" fill={theme.colors.text} opacity="0.5" />
                    <rect x="58" y="15" width="18" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.3" />
                    <rect x="82" y="15" width="18" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.3" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Tag Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="15" width="90" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="10" y="20" width="30" height="20" rx="10" fill={theme.colors.text} fillOpacity="0.1" />
                    <text x="22" y="31" fontSize="6px" fill={theme.colors.text} fontWeight="bold">React</text>
                    <line x1="32" y1="26" x2="36" y2="34" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="36" y1="26" x2="32" y2="34" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="45" y1="22" x2="45" y2="38" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Color Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="18" width="80" height="24" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="15" y="22" width="16" height="16" rx="2" fill="#6366F1" stroke={theme.colors.text} strokeWidth="0.5" strokeOpacity="0.2" />
                    <text x="55" y="31" {...textStyle} fontSize="10px" fontFamily="monospace">#6366F1</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="File Dropzone" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="6" fill={theme.colors.text} fillOpacity="0.02" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.3" />
                    <path d="M42,25 L58,25 L58,35 L42,35 Z M50,20 L50,30 M45,25 L55,25" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
                    <text x="50" y="45" {...textStyle} opacity="0.5">DROP FILE</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Rich Text Toolbar" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="20" width="80" height="20" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="30" y="20" x2="30" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="50" y="20" x2="50" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="70" y="20" x2="70" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="20" y="31" {...textStyle} fontWeight="900">B</text>
                    <text x="40" y="31" {...textStyle} fontStyle="italic">I</text>
                    <text x="60" y="31" {...textStyle} textDecoration="underline">U</text>
                    <path d="M78,28 L82,32 M78,32 L82,28" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Password Field" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="18" width="90" height="24" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <circle cx="20" cy="30" r="3" fill={theme.colors.text} />
                    <circle cx="30" cy="30" r="3" fill={theme.colors.text} />
                    <circle cx="40" cy="30" r="3" fill={theme.colors.text} />
                    <circle cx="50" cy="30" r="3" fill={theme.colors.text} />
                    <path d="M80,30 L83,33 L88,27" fill="none" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.4" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Search Results" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="10" y="5" width="80" height="15" rx="3" fill={theme.colors.text} fillOpacity="0.05" />
                    <text x="25" y="13" fontSize="6px" fill={theme.colors.text} opacity="0.6">Results...</text>
                    
                    <rect x="10" y="20" width="80" height="15" fill={theme.colors.primary} fillOpacity="0.1" />
                    <text x="25" y="28" fontSize="6px" fill={theme.colors.text}>Item A</text>
                    <text x="25" y="43" fontSize="6px" fill={theme.colors.text}>Item B</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Stepper Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="20" y="20" width="60" height="20" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="40" y1="20" x2="40" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="60" y1="20" x2="60" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M27,30 H33" stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="50" y="31" {...textStyle}>5</text>
                    <path d="M67,30 H73 M70,27 V33" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Toggle Button" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="15" y="20" width="70" height="20" rx="4" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="17" y="22" width="33" height="16" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" />
                    <text x="33" y="31" fontSize="6px" fill={theme.colors.text} fontWeight="bold">ON</text>
                    <text x="67" y="31" fontSize="6px" fill={theme.colors.text} opacity="0.5">OFF</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. Navigation & Menus --- */}
        <SectionTitle>Navigation & Menus</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Navbar Simple" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="0" y="5" width="100" height="30" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="5" y="15" width="10" height="10" rx="2" fill={theme.colors.text} />
                    <rect x="60" y="18" width="15" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="80" y="18" width="15" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Navbar Centered" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="0" y="5" width="100" height="30" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="45" y="15" width="10" height="10" rx="2" fill={theme.colors.primary} />
                    <rect x="10" y="18" width="15" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="75" y="18" width="15" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Navbar Search" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="0" y="5" width="100" height="30" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="5" y="15" width="10" height="10" rx="2" fill={theme.colors.text} />
                    <rect x="25" y="13" width="50" height="14" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                    <circle cx="32" cy="20" r="2" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.4" />
                    <rect x="85" y="15" width="10" height="10" rx="5" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Navbar Double" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="0" y="0" width="100" height="15" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="0" y="15" width="100" height="25" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="5" y="22" width="10" height="10" rx="2" fill={theme.colors.text} />
                    <rect x="50" y="25" width="40" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Breadcrumb" centered>
                <svg viewBox="0 0 100 40" className="w-full h-8">
                    <text x="20" y="22" fontSize="8px" fill={theme.colors.text} opacity="0.6">Home</text>
                    <text x="40" y="22" fontSize="8px" fill={theme.colors.text} opacity="0.4">/</text>
                    <text x="60" y="22" fontSize="8px" fill={theme.colors.primary} fontWeight="bold">Page</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Breadcrumb Back" centered>
                <svg viewBox="0 0 100 40" className="w-full h-8">
                    <path d="M15,20 L20,15 M15,20 L20,25" stroke={theme.colors.text} strokeWidth="1.5" fill="none" />
                    <text x="25" y="22" fontSize="8px" fill={theme.colors.text} textAnchor="start" opacity="0.8">Back to Settings</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Pagination" centered>
                <svg viewBox="0 0 100 40" className="w-full h-8">
                    <rect x="10" y="10" width="15" height="20" rx="3" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M19,16 L15,20 L19,24" stroke={theme.colors.text} strokeWidth="1" fill="none" />
                    
                    <rect x="30" y="10" width="15" height="20" rx="3" fill={theme.colors.text} fillOpacity="0.05" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="37.5" y="22" fontSize="8px" fill={theme.colors.text} fontWeight="bold" textAnchor="middle">1</text>
                    
                    <rect x="50" y="10" width="15" height="20" rx="3" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="57.5" y="22" fontSize="8px" fill={theme.colors.text} textAnchor="middle">2</text>
                    
                    <rect x="70" y="10" width="15" height="20" rx="3" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M76,16 L80,20 L76,24" stroke={theme.colors.text} strokeWidth="1" fill="none" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Pagination Dots" centered>
                <svg viewBox="0 0 100 40" className="w-full h-8">
                    <circle cx="35" cy="20" r="3" fill={theme.colors.primary} />
                    <circle cx="50" cy="20" r="3" fill={theme.colors.text} opacity="0.2" />
                    <circle cx="65" cy="20" r="3" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Pagination Load More" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="20" y="10" width="60" height="20" rx="10" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="50" y="23" fontSize="8px" fill={theme.colors.text} opacity="0.6" textAnchor="middle">Load More</text>
                    <path d="M50,28 L53,25 M50,28 L47,25" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.4" fill="none" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Tabs" centered>
                <svg viewBox="0 0 100 40" className="w-full h-10">
                    <line x1="0" y1="35" x2="100" y2="35" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <text x="25" y="25" fontSize="8px" fill={theme.colors.primary} fontWeight="bold" textAnchor="middle">Tab 1</text>
                    <line x1="10" y1="35" x2="40" y2="35" stroke={theme.colors.primary} strokeWidth="2" />
                    <text x="75" y="25" fontSize="8px" fill={theme.colors.text} opacity="0.5" textAnchor="middle">Tab 2</text>
                </svg>
            </GalleryItem>

             <GalleryItem title="Sidebar Item" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="5" y="5" width="90" height="30" rx="4" fill={theme.colors.primary} fillOpacity="0.1" />
                    <path d="M15,15 H20 V25 H15 Z" fill={theme.colors.primary} />
                    <rect x="25" y="17" width="50" height="6" rx="3" fill={theme.colors.primary} fillOpacity="0.4" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Rail Nav" centered>
                <svg viewBox="0 0 40 100" className="w-10 h-24">
                    <rect x="0" y="0" width="40" height="100" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="10" y="10" width="20" height="20" rx="4" fill={theme.colors.primary} fillOpacity="0.2" />
                    <rect x="10" y="40" width="20" height="20" rx="4" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="10" y="70" width="20" height="20" rx="4" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Drawer Nav" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="0" y="0" width="60" height="60" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="10" y="10" width="40" height="8" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="10" y="25" width="40" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="10" y="35" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Mega Menu" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="15" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="5" y="15" width="90" height="40" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.5" />
                    <rect x="10" y="20" width="20" height="30" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="35" y="20" width="20" height="30" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="60" y="20" width="30" height="30" fill={theme.colors.primary} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Tree Nav" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,10 L15,15 L10,20" stroke={theme.colors.text} strokeWidth="1" fill="none" />
                    <rect x="20" y="10" width="40" height="6" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <path d="M20,25 L25,30 L20,35" stroke={theme.colors.text} strokeWidth="1" fill="none" />
                    <rect x="30" y="25" width="40" height="6" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="40" y="35" width="30" height="6" rx="1" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="40" y="45" width="30" height="6" rx="1" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Context Menu" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="5" width="60" height="50" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.1))" />
                    <rect x="25" y="12" width="40" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="25" y="22" width="50" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <line x1="20" y1="32" x2="80" y2="32" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="25" y="38" width="30" height="4" rx="1" fill={theme.colors.error} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Stepper Vert" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <circle cx="15" cy="20" r="6" fill={theme.colors.primary} />
                    <line x1="15" y1="26" x2="15" y2="54" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="2" />
                    <rect x="30" y="17" width="25" height="6" rx="3" fill={theme.colors.text} fillOpacity="0.2" />
                    
                    <circle cx="15" cy="60" r="5" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="30" y="57" width="25" height="6" rx="3" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Wizard Steps" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="0" y="10" width="30" height="20" fill={theme.colors.primary} />
                    <polygon points="30,10 35,20 30,30" fill={theme.colors.primary} />
                    <rect x="35" y="10" width="30" height="20" fill={theme.colors.primary} fillOpacity="0.3" />
                    <polygon points="65,10 70,20 65,30" fill={theme.colors.primary} fillOpacity="0.3" />
                    <rect x="70" y="10" width="30" height="20" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Command Palette" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="15" y="10" width="70" height="10" rx="2" fill={theme.colors.text} fillOpacity="0.05" stroke={theme.colors.primary} strokeWidth="1" />
                    <text x="20" y="17" fontSize="6px" opacity="0.5" fill={theme.colors.text}>{'>'} Type command...</text>
                    <rect x="15" y="25" width="70" height="8" rx="1" fill={theme.colors.primary} fillOpacity="0.1" />
                    <rect x="15" y="35" width="70" height="8" rx="1" fill="none" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Content Containers --- */}
        <SectionTitle>Content Containers</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Card Basic" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.15" />
                    <line x1="10" y1="20" x2="90" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="10" y="5" width="80" height="15" fill={theme.colors.text} fillOpacity="0.02" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card Media Top" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.15" />
                    <rect x="10" y="5" width="80" height="25" rx="4" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="15" y="35" width="50" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="15" y="45" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card Media Left" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="10" width="80" height="40" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.15" />
                    <rect x="10" y="10" width="30" height="40" rx="4" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="45" y="20" width="40" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="45" y="30" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card Media Overlay" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="4" fill={theme.colors.text} fillOpacity="0.8" />
                    <text x="50" y="30" fontSize="8px" fill="white" fontWeight="bold" textAnchor="middle">Overlay Title</text>
                    <rect x="30" y="35" width="40" height="2" rx="1" fill="white" fillOpacity="0.6" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card Action" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.15" />
                    <rect x="15" y="15" width="50" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="15" y="35" width="30" height="10" rx="2" fill={theme.colors.primary} />
                    <rect x="50" y="35" width="30" height="10" rx="2" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card Pricing" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="20" y="5" width="60" height="50" rx="4" fill={theme.colors.surface} stroke={theme.colors.primary} strokeWidth="1.5" />
                    <text x="50" y="20" fontSize="12px" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">$99</text>
                    <line x1="30" y1="30" x2="70" y2="30" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="30" y="40" width="40" height="8" rx="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card Profile" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="15" width="80" height="40" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.15" />
                    <circle cx="50" cy="15" r="10" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="50" cy="15" r="8" fill={theme.colors.text} fillOpacity="0.1" />
                    <text x="50" y="35" fontSize="6px" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">User Name</text>
                    <text x="50" y="42" fontSize="4px" fill={theme.colors.text} opacity="0.6" textAnchor="middle">Role Title</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Modal Dialog" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="20" y="10" width="60" height="40" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.15" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))" />
                    <circle cx="75" cy="10" r="5" fill={theme.colors.error} stroke={theme.colors.surface} strokeWidth="1" />
                    <rect x="25" y="20" width="50" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="25" y="30" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Accordion" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="20" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1" />
                    <text x="15" y="17" fontSize="6px" fill={theme.colors.text}>Item 1</text>
                    <text x="80" y="17" fontSize="8px" fill={theme.colors.text}>+</text>
                    
                    <rect x="10" y="30" width="80" height="20" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1" />
                    <text x="15" y="42" fontSize="6px" fill={theme.colors.text}>Item 2</text>
                    <text x="80" y="42" fontSize="8px" fill={theme.colors.text}>-</text>
                </svg>
            </GalleryItem>
            
             <GalleryItem title="Toast Alert" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="15" width="80" height="30" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
                    <rect x="10" y="15" width="4" height="30" rx="0" fill={theme.colors.success} />
                    <circle cx="22" cy="30" r="4" fill={theme.colors.success} />
                    <rect x="32" y="28" width="40" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

             <GalleryItem title="Tooltip" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <text x="50" y="45" {...textStyle} textDecoration="underline" strokeDasharray="2 2" textDecorationStyle="dotted">Hover Me</text>
                    <path d="M30,10 H70 A3,3 0 0,1 73,13 V27 A3,3 0 0,1 70,30 H55 L50,35 L45,30 H30 A3,3 0 0,1 27,27 V13 A3,3 0 0,1 30,10 Z" fill={theme.colors.text} />
                    <text x="50" y="22" fontSize="6px" fill={theme.colors.surface} textAnchor="middle">Tooltip</text>
                </svg>
            </GalleryItem>

             <GalleryItem title="Banner" centered>
                <svg viewBox="0 0 100 40" className="w-full h-10">
                    <rect x="5" y="10" width="90" height="20" rx="4" fill={theme.colors.info + '20'} stroke={theme.colors.info + '40'} strokeWidth="1" />
                    <text x="50" y="22" fontSize="6px" fill={theme.colors.info} textAnchor="middle" dominantBaseline="middle">Info Banner</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Split View" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.15" />
                    <line x1="40" y1="5" x2="40" y2="55" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="15" y="15" width="20" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="45" y="15" width="40" height="20" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>

            <GalleryItem title="List Item Avatar" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <circle cx="15" cy="20" r="8" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="30" y="15" width="40" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="30" y="22" width="20" height="3" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <line x1="5" y1="35" x2="95" y2="35" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="List Item Meta" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="5" y="15" width="40" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="5" y="22" width="60" height="3" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="80" y="15" width="15" height="10" rx="2" fill={theme.colors.primary} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="List Item Action" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="5" y="18" width="50" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="75" y="12" width="20" height="16" rx="3" fill={theme.colors.primary} />
                    <line x1="5" y1="35" x2="95" y2="35" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 13. E-commerce & Store (NEW) --- */}
        <SectionTitle>E-commerce & Store</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Product Card" centered>
                <svg viewBox="0 0 80 100" className="w-16 h-20">
                    <rect x="0" y="0" width="80" height="100" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.1" />
                    <rect x="10" y="10" width="60" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="10" y="65" width="40" height="6" rx="1" {...textFill} />
                    <rect x="10" y="75" width="20" height="6" rx="1" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cart Item" centered>
                <div className="flex items-center gap-2 w-full px-2">
                    <div className="w-8 h-8 bg-gray-100 rounded" style={{backgroundColor: theme.colors.text+'10'}}></div>
                    <div className="flex-1">
                        <div className="h-2 w-12 rounded bg-gray-200 mb-1" style={{backgroundColor: theme.colors.text+'20'}}></div>
                        <div className="h-2 w-8 rounded bg-gray-200" style={{backgroundColor: theme.colors.text+'10'}}></div>
                    </div>
                    <div className="text-[8px] font-bold">1x</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Checkout Row" centered>
                <div className="flex justify-between w-full px-4 text-[8px]">
                    <span className="opacity-60">Subtotal</span>
                    <span className="font-bold">$45.00</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Filter Chips" centered>
                <div className="flex gap-1">
                    <span className="text-[6px] px-1.5 py-0.5 rounded-full border bg-black text-white">All</span>
                    <span className="text-[6px] px-1.5 py-0.5 rounded-full border">New</span>
                    <span className="text-[6px] px-1.5 py-0.5 rounded-full border">Sale</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Color Swatch" centered>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500 border border-transparent ring-1 ring-offset-1 ring-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Size Selector" centered>
                <div className="flex gap-1">
                    <div className="w-4 h-4 border flex items-center justify-center text-[6px]">S</div>
                    <div className="w-4 h-4 border flex items-center justify-center text-[6px] bg-black text-white">M</div>
                    <div className="w-4 h-4 border flex items-center justify-center text-[6px]">L</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Rating Row" centered>
                <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400 text-[8px]">★★★★☆</div>
                    <span className="text-[6px] opacity-50">(24)</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Price Tag" centered>
                <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[8px] font-bold">
                    $29.99
                </div>
            </GalleryItem>
            <GalleryItem title="Sale Badge" centered>
                <div className="bg-red-500 text-white px-2 py-0.5 text-[6px] font-bold uppercase transform -rotate-2">
                    Sale
                </div>
            </GalleryItem>
            <GalleryItem title="Stock Indicator" centered>
                <div className="flex items-center gap-1 text-[6px] text-green-600">
                    <div className="w-1 h-1 rounded-full bg-green-600"></div> In Stock
                </div>
            </GalleryItem>
            <GalleryItem title="Add to Cart" centered>
                <button className="w-full mx-2 bg-black text-white text-[8px] py-1 rounded flex items-center justify-center gap-1">
                    <Icons.ShoppingBag size="sm" className="w-2 h-2"/> Add
                </button>
            </GalleryItem>
            <GalleryItem title="Wishlist Icon" centered>
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-red-500">
                    <Icons.Heart size="sm" className="w-3"/>
                </div>
            </GalleryItem>
        </div>

        {/* --- 14. Social & Media (NEW) --- */}
        <SectionTitle>Social & Media</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Video Player" centered>
                <div className="w-24 h-14 bg-black rounded relative flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                    </div>
                    <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-white/30 rounded-full">
                        <div className="w-1/3 h-full bg-red-500 rounded-full"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Audio Player" centered>
                <div className="w-full px-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full">
                        <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-[6px]">2:14</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Social Post" centered>
                <div className="w-full p-2 border rounded">
                    <div className="flex gap-1 mb-1">
                        <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                        <div className="h-2 w-12 bg-gray-200 rounded mt-1"></div>
                    </div>
                    <div className="h-8 bg-gray-100 rounded mb-1"></div>
                    <div className="flex gap-2 opacity-40">
                        <div className="w-3 h-3 bg-gray-300 rounded"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Comment Row" centered>
                <div className="flex gap-2 w-full px-2 text-[8px]">
                    <span className="font-bold">user1</span>
                    <span className="opacity-80">Nice shot! 🔥</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Like Action" centered>
                <div className="flex flex-col items-center text-red-500">
                    <Icons.Heart size="sm"/>
                    <span className="text-[6px]">12k</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Share Menu" centered>
                <div className="border rounded p-1 flex gap-2">
                    <div className="w-4 h-4 bg-blue-100 rounded"></div>
                    <div className="w-4 h-4 bg-green-100 rounded"></div>
                    <div className="w-4 h-4 bg-gray-100 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Story Circle" centered>
                <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 to-purple-600">
                    <div className="w-full h-full bg-white rounded-full p-0.5">
                        <div className="w-full h-full bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Feed Item" centered>
                <div className="w-full flex gap-2 px-2">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div className="flex-1 space-y-1">
                        <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                        <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="User Bio" centered>
                <div className="text-center w-full px-2">
                    <div className="font-bold text-[8px]">Jane Doe</div>
                    <div className="text-[6px] opacity-60">Photographer & Artist</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Follow Button" centered>
                <button className="bg-blue-500 text-white text-[8px] px-3 py-1 rounded-full font-bold">
                    Follow
                </button>
            </GalleryItem>
            <GalleryItem title="Live Badge" centered>
                <div className="bg-red-500 text-white px-2 py-0.5 text-[6px] font-bold rounded uppercase">
                    LIVE
                </div>
            </GalleryItem>
            <GalleryItem title="Reaction Bar" centered>
                <div className="flex gap-1 text-[10px]">
                    <span>👍</span><span>❤️</span><span>😂</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 15. Marketing UI (NEW) --- */}
        <SectionTitle>Marketing UI</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Hero Header" centered>
                <div className="text-center w-full px-2">
                    <div className="h-3 w-3/4 bg-gray-800 mx-auto mb-1 rounded"></div>
                    <div className="h-1.5 w-1/2 bg-gray-300 mx-auto rounded"></div>
                    <div className="mt-2 w-12 h-4 bg-blue-500 mx-auto rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Feature Icon" centered>
                <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-1">
                        <Icons.Star size="sm"/>
                    </div>
                    <div className="h-1.5 w-10 bg-gray-200 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Testimonial" centered>
                <div className="border p-2 rounded w-full mx-2 text-center bg-gray-50">
                    <div className="text-[6px] italic mb-1">"Amazing service!"</div>
                    <div className="flex justify-center items-center gap-1">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="h-1 w-8 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Pricing Tier" centered>
                <div className="border rounded p-2 text-center w-20 shadow-sm">
                    <div className="text-[6px] uppercase font-bold text-gray-400">Pro</div>
                    <div className="text-lg font-bold">$29</div>
                    <div className="text-[6px] opacity-50">/month</div>
                </div>
            </GalleryItem>
            <GalleryItem title="FAQ Accordion" centered>
                <div className="w-full px-2 space-y-1">
                    <div className="border rounded px-2 py-1 text-[6px] flex justify-between">
                        <span>Question?</span> <span>+</span>
                    </div>
                    <div className="border rounded px-2 py-1 text-[6px] bg-gray-50">
                        Answer goes here.
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="CTA Banner" centered>
                <div className="bg-indigo-600 w-full p-2 text-white flex justify-between items-center mx-2 rounded">
                    <span className="text-[8px] font-bold">Get Started</span>
                    <span className="text-[8px] opacity-80">→</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Logo Strip" centered>
                <div className="flex gap-2 opacity-30 w-full justify-center">
                    <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-500 rounded"></div>
                    <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Newsletter Input" centered>
                <div className="flex w-full px-2">
                    <div className="border rounded-l px-1 py-0.5 text-[6px] flex-1">Email...</div>
                    <div className="bg-black text-white px-2 py-0.5 text-[6px] rounded-r">Join</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Download Card" centered>
                <div className="border rounded p-2 flex items-center gap-2 w-32">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                        <Icons.Download size="sm" className="w-3"/>
                    </div>
                    <div>
                        <div className="text-[8px] font-bold">App Store</div>
                        <div className="text-[6px] opacity-50">Download now</div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Stats Counter" centered>
                <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">10k+</div>
                    <div className="text-[6px] uppercase tracking-wider opacity-60">Users</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Team Member" centered>
                <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mx-auto mb-1"></div>
                    <div className="text-[8px] font-bold">Alex Smith</div>
                    <div className="text-[6px] opacity-50">CEO</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Blog Card" centered>
                <div className="border rounded overflow-hidden w-24">
                    <div className="h-10 bg-gray-200"></div>
                    <div className="p-1">
                        <div className="h-1 w-4 bg-blue-100 rounded mb-1"></div>
                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                    </div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 16. Mobile UI Patterns (NEW) --- */}
        <SectionTitle>Mobile UI Patterns</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Bottom Tab Bar" centered>
                <div className="w-full flex justify-around border-t pt-2 opacity-60">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Mobile Header" centered>
                <div className="w-full flex justify-between items-center px-2 border-b pb-1">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-16 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-transparent"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Action Sheet" centered>
                <div className="w-24 border rounded-t-lg shadow-lg bg-white p-2">
                    <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-2"></div>
                    <div className="space-y-1">
                        <div className="h-2 w-full bg-gray-50 rounded"></div>
                        <div className="h-2 w-full bg-gray-50 rounded"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Pull to Refresh" centered>
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-gray-500 animate-spin"></div>
                    <span className="text-[6px] mt-1">Pulling...</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Swipe Action" centered>
                <div className="w-full flex border rounded overflow-hidden">
                    <div className="flex-1 p-2 bg-white text-[8px]">Item</div>
                    <div className="w-8 bg-red-500 flex items-center justify-center text-white text-[8px]">Del</div>
                </div>
            </GalleryItem>
            <GalleryItem title="FAB" centered>
                <div className="w-10 h-10 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white text-xl">
                    +
                </div>
            </GalleryItem>
            <GalleryItem title="Toast Notification" centered>
                <div className="bg-gray-800 text-white px-3 py-1.5 rounded-full text-[8px] shadow-lg">
                    Message Sent
                </div>
            </GalleryItem>
            <GalleryItem title="Mobile Keyboard" centered>
                <div className="w-32 bg-gray-100 p-1 grid grid-cols-10 gap-0.5 rounded">
                    {Array.from({length: 20}).map((_, i) => (
                        <div key={i} className="h-3 bg-white rounded shadow-sm"></div>
                    ))}
                    <div className="col-span-10 h-3 bg-white rounded shadow-sm mt-0.5"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Gesture Hint" centered>
                <div className="w-12 h-16 border rounded bg-gray-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <span className="text-[10px] opacity-50">←</span>
                    </div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
