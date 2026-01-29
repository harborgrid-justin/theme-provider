
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const WebUiGalleryTab: React.FC = () => {
  const { strokeProps, layoutProps, primaryFill, secondaryFill, textFill, textStyle, theme, surfaceFill, faintFill } = useSvgTheme();

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
                    <rect x="25" y="5" width="50" height="50" rx="4" {...layoutProps} fill={theme.colors.surface} />
                    <line x1="25" y1="5" x2="75" y2="55" {...layoutProps} />
                    <line x1="75" y1="5" x2="25" y2="55" {...layoutProps} />
                    <circle cx="50" cy="30" r="8" {...faintFill} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Avatar Circle" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...layoutProps} />
                    <circle cx="30" cy="25" r="6" {...faintFill} />
                    <path d="M18,42 Q30,55 42,42" {...faintFill} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Avatar Square" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" rx="6" {...layoutProps} />
                    <circle cx="30" cy="25" r="6" {...faintFill} />
                    <path d="M18,42 Q30,55 42,42" {...faintFill} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Heading Block" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="20" width="80" height="8" rx="2" fill={theme.colors.text} />
                    <rect x="20" y="32" width="60" height="4" rx="2" {...faintFill} opacity="0.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Text Paragraph" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="15" width="80" height="4" rx="1" {...faintFill} />
                    <rect x="10" y="25" width="80" height="4" rx="1" {...faintFill} />
                    <rect x="10" y="35" width="50" height="4" rx="1" {...faintFill} />
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
                    <rect x="10" y="20" width="80" height="20" rx="4" {...secondaryFill} />
                    <text x="50" y="31" {...textStyle} fill="white">Secondary</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Button Outline" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="20" width="80" height="20" rx="4" {...layoutProps} strokeWidth="1.5" strokeOpacity="0.8" />
                    <text x="50" y="31" {...textStyle}>Cancel</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Input Field" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="20" width="90" height="20" rx="3" {...layoutProps} />
                    <rect x="15" y="28" width="30" height="4" rx="1" {...faintFill} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Checkbox Group" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    {/* Unchecked */}
                    <rect x="15" y="15" width="10" height="10" rx="2" fill="none" {...strokeProps} />
                    <rect x="35" y="19" width="40" height="3" rx="1" {...faintFill} />
                    
                    {/* Checked */}
                    <rect x="15" y="35" width="10" height="10" rx="2" fill={theme.colors.text} />
                    <path d="M17,40 L20,43 L23,37" fill="none" stroke="white" strokeWidth="1.5" />
                    <rect x="35" y="39" width="40" height="3" rx="1" {...faintFill} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Radio Group" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    {/* Unchecked */}
                    <circle cx="20" cy="20" r="5" fill="none" {...strokeProps} />
                    <rect x="35" y="19" width="40" height="3" rx="1" {...faintFill} />
                    
                    {/* Checked */}
                    <circle cx="20" cy="40" r="5" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                    <circle cx="20" cy="40" r="2.5" {...primaryFill} />
                    <rect x="35" y="39" width="40" height="3" rx="1" {...faintFill} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Toggle Switch" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="12" width="50" height="26" rx="13" fill={theme.colors.success} />
                    <circle cx="42" cy="25" r="10" fill="white" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.2))" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Rating Stars" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    {[10, 30, 50].map(x => (
                        <path key={x} d={`M${x},5 L${x+3},15 L${x+13},15 L${x+5},22 L${x+8},32 L${x},26 L${x-8},32 L${x-5},22 L${x-13},15 L${x-3},15 Z`} fill={theme.colors.warning} />
                    ))}
                    {[70, 90].map(x => (
                        <path key={x} d={`M${x},5 L${x+3},15 L${x+13},15 L${x+5},22 L${x+8},32 L${x},26 L${x-8},32 L${x-5},22 L${x-13},15 L${x-3},15 Z`} {...faintFill} />
                    ))}
                </svg>
            </GalleryItem>

            <GalleryItem title="Search Bar" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="18" width="90" height="24" rx="12" {...layoutProps} />
                    <circle cx="20" cy="30" r="4" fill="none" stroke={theme.colors.text} strokeWidth="1.5" opacity="0.4" />
                    <line x1="23" y1="33" x2="26" y2="36" stroke={theme.colors.text} strokeWidth="1.5" opacity="0.4" />
                    <rect x="35" y="28" width="40" height="4" rx="1" {...faintFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Advanced Inputs --- */}
        <SectionTitle>Advanced Inputs</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Date Picker" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="18" width="90" height="24" rx="3" {...layoutProps} />
                    <text x="35" y="31" {...textStyle} opacity="0.6">YYYY-MM-DD</text>
                    <rect x="78" y="22" width="12" height="12" rx="1" fill="none" stroke={theme.colors.text} strokeWidth="1.5" opacity="0.4" />
                    <line x1="78" y1="26" x2="90" y2="26" stroke={theme.colors.text} strokeWidth="1" opacity="0.4" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Time Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="15" y="18" width="70" height="24" rx="3" {...layoutProps} />
                    <text x="35" y="31" {...textStyle}>12</text>
                    <text x="50" y="30" {...textStyle}>:</text>
                    <text x="65" y="31" {...textStyle}>30</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Range Slider" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <line x1="10" y1="30" x2="90" y2="30" {...strokeProps} opacity="0.2" strokeWidth="3" />
                    <line x1="30" y1="30" x2="70" y2="30" stroke={theme.colors.primary} strokeWidth="3" strokeLinecap="round" />
                    <circle cx="30" cy="30" r="6" {...surfaceFill} stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="70" cy="30" r="6" {...surfaceFill} stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="OTP Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="15" width="18" height="30" rx="3" {...surfaceFill} stroke={theme.colors.primary} strokeWidth="1.5" />
                    <line x1="19" y1="22" x2="19" y2="38" stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="34" y="15" width="18" height="30" rx="3" {...layoutProps} />
                    <circle cx="43" cy="30" r="2" fill={theme.colors.text} opacity="0.5" />
                    <rect x="58" y="15" width="18" height="30" rx="3" {...layoutProps} />
                    <rect x="82" y="15" width="18" height="30" rx="3" {...layoutProps} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Tag Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="15" width="90" height="30" rx="3" {...layoutProps} />
                    <rect x="10" y="20" width="30" height="20" rx="10" {...faintFill} />
                    <text x="22" y="31" fontSize="6px" fill={theme.colors.text} fontWeight="bold">React</text>
                    <line x1="32" y1="26" x2="36" y2="34" stroke={theme.colors.text} strokeWidth="1" opacity="0.5" />
                    <line x1="36" y1="26" x2="32" y2="34" stroke={theme.colors.text} strokeWidth="1" opacity="0.5" />
                    <line x1="45" y1="22" x2="45" y2="38" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Color Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="18" width="80" height="24" rx="3" {...layoutProps} />
                    <rect x="15" y="22" width="16" height="16" rx="2" fill="#6366F1" stroke={theme.colors.text} strokeWidth="0.5" strokeOpacity="0.2" />
                    <text x="55" y="31" {...textStyle} fontSize="10px" fontFamily="monospace">#6366F1</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="File Dropzone" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="6" {...faintFill} stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.3" />
                    <path d="M42,25 L58,25 L58,35 L42,35 Z M50,20 L50,30 M45,25 L55,25" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
                    <text x="50" y="45" {...textStyle} opacity="0.5">DROP FILE</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Rich Text Toolbar" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="20" width="80" height="20" rx="3" {...layoutProps} />
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
                    <rect x="5" y="18" width="90" height="24" rx="3" {...layoutProps} />
                    <circle cx="20" cy="30" r="3" fill={theme.colors.text} />
                    <circle cx="30" cy="30" r="3" fill={theme.colors.text} />
                    <circle cx="40" cy="30" r="3" fill={theme.colors.text} />
                    <circle cx="50" cy="30" r="3" fill={theme.colors.text} />
                    <path d="M80,30 L83,33 L88,27" fill="none" stroke={theme.colors.text} strokeWidth="1.5" strokeOpacity="0.4" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Search Results" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="3" {...layoutProps} />
                    <rect x="10" y="5" width="80" height="15" rx="3" {...faintFill} />
                    <text x="25" y="13" fontSize="6px" fill={theme.colors.text} opacity="0.6">Results...</text>
                    
                    <rect x="10" y="20" width="80" height="15" fill={theme.colors.primary} fillOpacity="0.1" />
                    <text x="25" y="28" fontSize="6px" fill={theme.colors.text}>Item A</text>
                    <text x="25" y="43" fontSize="6px" fill={theme.colors.text}>Item B</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Stepper Input" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="20" y="20" width="60" height="20" rx="3" {...layoutProps} />
                    <line x1="40" y1="20" x2="40" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="60" y1="20" x2="60" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M27,30 H33" stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="50" y="31" {...textStyle}>5</text>
                    <path d="M67,30 H73 M70,27 V33" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Toggle Button" centered>
                <svg viewBox="0 0 100 60" className="w-32 h-16">
                    <rect x="15" y="20" width="70" height="20" rx="4" {...faintFill} />
                    <rect x="17" y="22" width="33" height="16" rx="3" {...layoutProps} />
                    <text x="33" y="31" fontSize="6px" fill={theme.colors.text} fontWeight="bold">ON</text>
                    <text x="67" y="31" fontSize="6px" fill={theme.colors.text} opacity="0.5">OFF</text>
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
