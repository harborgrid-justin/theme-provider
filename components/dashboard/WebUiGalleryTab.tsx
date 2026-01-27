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
                    <line x1="30" y1="20" x2="30" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="50" y1="20" x2="50" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="70" y1="20" x2="70" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
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
                    <rect x="5" y="10" width="90" height="20" rx="4" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                    <text x="50" y="22" fontSize="6px" fill="#2563EB" textAnchor="middle" dominantBaseline="middle">Info Banner</text>
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

        {/* --- 5. Layout Patterns --- */}
        <SectionTitle>Layout Patterns</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Grid 2-Col" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="5" width="42" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="53" y="5" width="42" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Grid 3-Col" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="5" width="26" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="37" y="5" width="26" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="69" y="5" width="26" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Grid Masonry" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="5" width="26" height="30" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="5" y="40" width="26" height="15" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    
                    <rect x="37" y="5" width="26" height="20" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="37" y="30" width="26" height="25" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    
                    <rect x="69" y="5" width="26" height="40" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Hero Center" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="0" y="0" width="100" height="50" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="25" y="15" width="50" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="35" y="25" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="40" y="35" width="20" height="8" rx="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Hero Split" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="0" y="0" width="50" height="60" fill={theme.colors.surface} />
                    <rect x="50" y="0" width="50" height="60" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="10" y="20" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="10" y="30" width="20" height="3" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="10" y="40" width="15" height="6" rx="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Footer Simple" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="100" height="30" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="40" y="12" width="20" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Footer Columns" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="0" width="100" height="40" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="10" y="10" width="15" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="10" y="18" width="10" height="2" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="10" y="22" width="10" height="2" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    
                    <rect x="40" y="10" width="15" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="40" y="18" width="10" height="2" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    
                    <rect x="70" y="10" width="15" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Feature Grid" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="10" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <circle cx="20" cy="20" r="4" fill={theme.colors.primary} />
                    
                    <rect x="40" y="10" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <circle cx="50" cy="20" r="4" fill={theme.colors.secondary} />
                    
                    <rect x="70" y="10" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <circle cx="80" cy="20" r="4" fill={theme.colors.accent} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Timeline Horizontal" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <line x1="10" y1="20" x2="90" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="20" cy="20" r="3" fill={theme.colors.primary} />
                    <circle cx="50" cy="20" r="3" fill={theme.colors.primary} />
                    <circle cx="80" cy="20" r="3" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <text x="20" y="30" fontSize="4px" textAnchor="middle">Step 1</text>
                    <text x="50" y="30" fontSize="4px" textAnchor="middle">Step 2</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Carousel" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="40" rx="4" fill={theme.colors.text} fillOpacity="0.1" />
                    <path d="M15,25 L20,30 L20,20 Z" fill={theme.colors.text} opacity="0.5" />
                    <path d="M85,25 L80,30 L80,20 Z" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="45" cy="50" r="2" fill={theme.colors.primary} />
                    <circle cx="55" cy="50" r="2" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Modal Full" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="10" y="10" width="80" height="40" rx="4" fill={theme.colors.surface} />
                    <rect x="15" y="15" width="70" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="85" y="15" width="4" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Sheet Bottom" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.2" />
                    <path d="M10,60 V35 Q10,30 15,30 H85 Q90,30 90,35 V60" fill={theme.colors.surface} />
                    <rect x="45" y="35" width="10" height="2" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Split Screen" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="0" y="0" width="50" height="60" fill={theme.colors.surface} />
                    <rect x="50" y="0" width="50" height="60" fill={theme.colors.primary} fillOpacity="0.1" />
                    <rect x="10" y="20" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="10" y="30" width="20" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Dashboard Grid" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="0" y="0" width="20" height="60" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="25" y="5" width="70" height="10" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="0.5" strokeOpacity="0.2" />
                    <rect x="25" y="20" width="32" height="35" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="0.5" strokeOpacity="0.2" />
                    <rect x="63" y="20" width="32" height="35" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="0.5" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Kanban Board" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="5" width="28" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="36" y="5" width="28" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="67" y="5" width="28" height="50" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                    
                    <rect x="8" y="10" width="22" height="10" rx="1" fill={theme.colors.surface} />
                    <rect x="8" y="22" width="22" height="10" rx="1" fill={theme.colors.surface} />
                    <rect x="39" y="10" width="22" height="10" rx="1" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Chat Layout" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="0" y="0" width="30" height="60" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="30" y="0" width="70" height="60" fill={theme.colors.surface} />
                    <rect x="35" y="50" width="50" height="6" rx="3" fill={theme.colors.text} fillOpacity="0.05" />
                    <circle cx="90" cy="53" r="3" fill={theme.colors.primary} />
                    <rect x="40" y="10" width="40" height="10" rx="2" fill={theme.colors.primary} fillOpacity="0.1" />
                    <rect x="50" y="25" width="40" height="10" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Inbox Layout" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="0" y="0" width="20" height="60" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="20" y="0" width="30" height="60" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="0.5" strokeOpacity="0.1" />
                    <rect x="50" y="0" width="50" height="60" fill={theme.colors.surface} />
                    <rect x="25" y="10" width="20" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="25" y="20" width="20" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="55" y="10" width="30" height="4" rx="1" fill={theme.colors.text} fillOpacity="0.2" />
                    <rect x="55" y="20" width="40" height="30" rx="1" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Feed Layout" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="25" y="0" width="50" height="60" fill={theme.colors.surface} />
                    <rect x="30" y="5" width="40" height="20" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="30" y="30" width="40" height="25" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="0" y="0" width="20" height="60" fill={theme.colors.text} fillOpacity="0.02" />
                    <rect x="80" y="0" width="20" height="60" fill={theme.colors.text} fillOpacity="0.02" />
                </svg>
            </GalleryItem>
        </div>
        
        {/* --- 5. Sitemap & Wireflows --- */}
        <SectionTitle>Sitemap & Wireflows</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {/* -- Sitemap Nodes -- */}
            <GalleryItem title="Node: Home" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <path d="M20,20 L25,15 L30,20 V25 H20 Z" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <text x="55" y="22" {...textStyle}>Home</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Node: Login" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <circle cx="25" cy="20" r="3" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <text x="55" y="22" {...textStyle}>Login</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Node: Dashboard" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="20" y="15" width="4" height="4" fill={theme.colors.text} />
                    <rect x="26" y="15" width="4" height="4" fill={theme.colors.text} opacity="0.5" />
                    <text x="60" y="22" {...textStyle}>Dash</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Node: Settings" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <circle cx="25" cy="20" r="3" fill="none" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="1 1" />
                    <text x="60" y="22" {...textStyle}>Config</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Node: Profile" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <path d="M22,25 Q25,18 28,25" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="25" cy="18" r="2" fill={theme.colors.text} />
                    <text x="60" y="22" {...textStyle}>User</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Node: Search" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <circle cx="24" cy="20" r="3" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <line x1="26" y1="22" x2="28" y2="24" stroke={theme.colors.text} strokeWidth="1" />
                    <text x="60" y="22" {...textStyle}>Search</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Node: 404" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.error} strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="50" y="22" {...textStyle} fill={theme.colors.error}>404</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Node: Cart" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <path d="M20,15 H28 L26,23 H22 Z" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <text x="60" y="22" {...textStyle}>Cart</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Node: Checkout" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill={theme.colors.surface} stroke={theme.colors.success} strokeWidth="1.5" />
                    <text x="50" y="22" {...textStyle} fill={theme.colors.success}>$$$</text>
                </svg>
            </GalleryItem>

            {/* -- Wireflow Screens (Miniature) -- */}
            <GalleryItem title="Screen: Login" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="10" y="5" width="40" height="90" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <circle cx="30" cy="25" r="8" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="45" width="30" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="55" width="30" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="70" width="30" height="8" rx="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Screen: Feed" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="10" y="5" width="40" height="90" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="10" y="5" width="40" height="10" rx="4" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="20" width="30" height="20" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="45" width="30" height="20" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="70" width="30" height="20" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Screen: Map" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="10" y="5" width="40" height="90" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <path d="M15,30 L25,20 L35,35 L45,25" fill="none" stroke={theme.colors.text} opacity="0.2" strokeWidth="1" />
                    <circle cx="30" cy="50" r="2" fill={theme.colors.error} />
                    <path d="M30,50 L35,40 L40,50 Z" fill={theme.colors.error} opacity="0.5" />
                    <rect x="15" y="80" width="30" height="10" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Screen: Chat" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="10" y="5" width="40" height="90" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="15" y="20" width="20" height="6" rx="3" fill={theme.colors.text} opacity="0.1" />
                    <rect x="25" y="30" width="20" height="6" rx="3" fill={theme.colors.primary} opacity="0.5" />
                    <rect x="15" y="40" width="15" height="6" rx="3" fill={theme.colors.text} opacity="0.1" />
                    <rect x="10" y="85" width="40" height="10" fill={theme.colors.text} opacity="0.05" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Screen: Profile" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="10" y="5" width="40" height="90" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <circle cx="30" cy="25" r="8" fill={theme.colors.text} opacity="0.2" />
                    <rect x="20" y="38" width="20" height="4" rx="2" fill={theme.colors.text} opacity="0.2" />
                    <rect x="15" y="50" width="10" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="28" y="50" width="10" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="41" y="50" width="4" height="10" rx="1" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Screen: List" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="10" y="5" width="40" height="90" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="10" y1="20" x2="50" y2="20" stroke={theme.colors.text} opacity="0.1" />
                    <line x1="10" y1="35" x2="50" y2="35" stroke={theme.colors.text} opacity="0.1" />
                    <line x1="10" y1="50" x2="50" y2="50" stroke={theme.colors.text} opacity="0.1" />
                    <line x1="10" y1="65" x2="50" y2="65" stroke={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="25" width="4" height="4" rx="1" fill={theme.colors.text} opacity="0.2" />
                    <rect x="15" y="40" width="4" height="4" rx="1" fill={theme.colors.text} opacity="0.2" />
                    <rect x="15" y="55" width="4" height="4" rx="1" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Screen: Form" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="10" y="5" width="40" height="90" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="15" y="20" width="15" height="4" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="28" width="30" height="6" rx="1" stroke={theme.colors.text} strokeWidth="0.5" fill="none" />
                    <rect x="15" y="40" width="15" height="4" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="48" width="30" height="6" rx="1" stroke={theme.colors.text} strokeWidth="0.5" fill="none" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Block: Header" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="100" height="30" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="5" y="8" width="14" height="14" rx="2" fill={theme.colors.text} opacity="0.2" />
                    <rect x="70" y="10" width="10" height="10" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="85" y="10" width="10" height="10" rx="1" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Block: Footer" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="100" height="30" fill={theme.colors.text} opacity="0.05" stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="10" y="10" width="20" height="4" rx="1" fill={theme.colors.text} opacity="0.3" />
                    <rect x="10" y="18" width="15" height="4" rx="1" fill={theme.colors.text} opacity="0.3" />
                    <rect x="70" y="10" width="5" height="5" rx="2" fill={theme.colors.text} opacity="0.3" />
                    <rect x="80" y="10" width="5" height="5" rx="2" fill={theme.colors.text} opacity="0.3" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Block: Sidebar" centered>
                <svg viewBox="0 0 40 100" className="w-10 h-24">
                    <rect x="0" y="0" width="40" height="100" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="5" y="10" width="30" height="8" rx="2" fill={theme.colors.primary} opacity="0.2" />
                    <line x1="5" y1="30" x2="35" y2="30" stroke={theme.colors.text} opacity="0.2" />
                    <line x1="5" y1="40" x2="35" y2="40" stroke={theme.colors.text} opacity="0.2" />
                    <line x1="5" y1="50" x2="35" y2="50" stroke={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Block: Tab Bar" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-5">
                    <rect x="0" y="0" width="100" height="20" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="20" cy="10" r="4" fill={theme.colors.text} opacity="0.2" />
                    <circle cx="50" cy="10" r="4" fill={theme.colors.primary} />
                    <circle cx="80" cy="10" r="4" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Block: Keyboard" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="10" y="10" width="8" height="8" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="20" y="10" width="8" height="8" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="30" y="10" width="8" height="8" rx="1" fill={theme.colors.text} opacity="0.1" />
                    {/* ... truncated representation */}
                    <rect x="25" y="40" width="50" height="8" rx="2" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>

            {/* -- Connectors -- */}
            <GalleryItem title="Flow: Straight" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <line x1="0" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill={theme.colors.text} />
                        </marker>
                    </defs>
                </svg>
            </GalleryItem>

            <GalleryItem title="Flow: Elbow" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <path d="M10,30 H50 V10 H90" fill="none" stroke={theme.colors.text} strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Flow: Curved" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <path d="M10,30 C40,30 60,10 90,10" fill="none" stroke={theme.colors.text} strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Flow: Dotted" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <line x1="0" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Flow: Return" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <path d="M90,10 H50 V30 H15" fill="none" stroke={theme.colors.text} strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>

            {/* -- Gestures & Annotations -- */}
            <GalleryItem title="Gesture: Tap" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="10" fill={theme.colors.primary} opacity="0.2" />
                    <circle cx="20" cy="20" r="5" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Gesture: Dbl Tap" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="15" cy="20" r="5" fill={theme.colors.primary} opacity="0.8" />
                    <circle cx="25" cy="20" r="5" fill={theme.colors.primary} opacity="0.8" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Gesture: Swipe R" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <circle cx="10" cy="20" r="5" fill={theme.colors.primary} />
                    <path d="M15,20 H45" stroke={theme.colors.primary} strokeWidth="2" strokeDasharray="2 2" />
                    <path d="M40,15 L45,20 L40,25" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Gesture: Scroll" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                    <circle cx="20" cy="10" r="5" fill={theme.colors.primary} />
                    <path d="M20,15 V45" stroke={theme.colors.primary} strokeWidth="2" strokeDasharray="2 2" />
                    <path d="M15,40 L20,45 L25,40" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Note: Sticky" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="5" y="5" width="50" height="50" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
                    <polygon points="40,55 55,55 55,40" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
                    <line x1="15" y1="15" x2="45" y2="15" stroke="#B45309" strokeWidth="1" opacity="0.5" />
                    <line x1="15" y1="25" x2="45" y2="25" stroke="#B45309" strokeWidth="1" opacity="0.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Annotation: Check" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.success} opacity="0.2" />
                    <path d="M12,20 L18,26 L28,14" fill="none" stroke={theme.colors.success} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Annotation: Warn" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L35,35 H5 Z" fill={theme.colors.warning} opacity="0.2" stroke={theme.colors.warning} strokeWidth="1" />
                    <text x="20" y="30" fontSize="16" fontWeight="bold" fill={theme.colors.warning} textAnchor="middle">!</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Cursor: Pointer" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M12,12 L28,18 L20,22 L18,28 Z" fill="black" stroke="white" strokeWidth="1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Cursor: Hand" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M18,12 V20 H14 V26 L18,28 V30 H26 V18" fill="none" stroke="black" strokeWidth="1.5" />
                    <path d="M18,12 A2,2 0 0,1 22,12 V18" fill="none" stroke="black" strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Link Path" centered>
                <svg viewBox="0 0 100 40" className="w-full h-12">
                    <rect x="5" y="10" width="20" height="20" rx="2" fill="white" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.3" />
                    <rect x="75" y="10" width="20" height="20" rx="2" fill="white" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="25" y1="20" x2="75" y2="20" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="50" cy="20" r="3" fill={theme.colors.text} fillOpacity="0.3" />
                </svg>
            </GalleryItem>

            <GalleryItem title="External Link" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="5" width="80" height="30" rx="3" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
                    <text x="40" y="22" fontSize="8px" fill={theme.colors.text} opacity="0.6">External</text>
                    <path d="M65,15 L70,15 L70,20 M60,25 L70,15" stroke={theme.colors.text} strokeWidth="1" fill="none" opacity="0.6" />
                </svg>
            </GalleryItem>

            <GalleryItem title="System Email" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="15" width="60" height="30" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.3" />
                    <path d="M20,15 L50,35 L80,15" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <text x="50" y="40" fontSize="10px" fill={theme.colors.text} fontWeight="bold" textAnchor="middle">@</text>
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Mobile Screen" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="15" y="10" width="30" height="60" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.4" />
                    <line x1="25" y1="15" x2="35" y2="15" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.2" />
                    <circle cx="30" cy="65" r="2" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.4" />
                </svg>
            </GalleryItem>
            
             <GalleryItem title="Annotation" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1" />
                    <text x="20" y="21" fontSize="12px" fill="#B45309" fontWeight="bold" fontFamily="serif" textAnchor="middle" dominantBaseline="middle">1</text>
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};