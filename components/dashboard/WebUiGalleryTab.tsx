import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const WebUiGalleryTab: React.FC = () => {
  const { strokeProps, layoutProps, primaryFill, secondaryFill, textFill, textStyle, theme, surfaceFill, faintFill } = useSvgTheme();

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Wireframe Primitives (200+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Fundamental building blocks for low and high fidelity prototyping, including marketing, e-commerce, and mobile patterns.
        </p>

        {/* --- 1. Wireframe Primitives --- */}
        <SectionTitle>1. Wireframe Primitives</SectionTitle>
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
        <SectionTitle>2. Advanced Inputs</SectionTitle>
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
                    <line x1="40" y="20" x2="40" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
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

        {/* --- 13. Media & Embeds --- */}
        <SectionTitle>13. Media & Embeds</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Video Player" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <circle cx="50" cy="30" r="10" fill={theme.colors.surface} />
                    <path d="M47,25 L55,30 L47,35 Z" fill={theme.colors.primary} />
                    <rect x="10" y="50" width="80" height="2" rx="1" fill={theme.colors.text} fillOpacity="0.3" />
                    <rect x="10" y="50" width="30" height="2" rx="1" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Carousel" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="40" rx="2" {...layoutProps} />
                    <path d="M5,25 L8,20 L8,30 Z" fill={theme.colors.text} opacity="0.5" />
                    <path d="M95,25 L92,20 L92,30 Z" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="40" cy="52" r="2" fill={theme.colors.primary} />
                    <circle cx="50" cy="52" r="2" fill={theme.colors.text} opacity="0.3" />
                    <circle cx="60" cy="52" r="2" fill={theme.colors.text} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Audio Player" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="0" width="100" height="40" rx="4" {...layoutProps} />
                    <circle cx="20" cy="20" r="8" fill={theme.colors.primary} />
                    <path d="M18,17 L24,20 L18,23 Z" fill="white" />
                    <path d="M35,20 L40,10 L45,30 L50,15 L55,25 L60,20" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Map Embed" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" rx="2" fill={theme.colors.text} fillOpacity="0.05" />
                    <path d="M0,20 L30,30 L50,10 L100,20 V60 H0 Z" fill={theme.colors.surface} opacity="0.5" />
                    <path d="M50,30 C50,20 60,20 60,30 C60,40 50,50 50,50 C50,50 40,40 40,30 C40,20 50,20 50,30" fill={theme.colors.error} transform="translate(0, -10)" />
                    <circle cx="50" cy="20" r="3" fill="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Code Snippet" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" rx="2" fill={theme.colors.text} opacity="0.9" />
                    <rect x="10" y="10" width="30" height="4" rx="1" fill={theme.colors.secondary} />
                    <rect x="45" y="10" width="20" height="4" rx="1" fill={theme.colors.surface} />
                    <rect x="15" y="20" width="40" height="4" rx="1" fill={theme.colors.surface} opacity="0.8" />
                    <rect x="15" y="30" width="20" height="4" rx="1" fill={theme.colors.primary} />
                    <rect x="40" y="30" width="30" height="4" rx="1" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Lightbox" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} opacity="0.5" />
                    <rect x="20" y="10" width="60" height="40" rx="2" fill={theme.colors.surface} />
                    <path d="M20,50 L40,30 L50,40 L60,30 L80,50 Z" fill={theme.colors.text} opacity="0.1" />
                    <circle cx="70" cy="15" r="3" fill="none" stroke="white" strokeWidth="1" />
                    <path d="M68,13 L72,17 M68,17 L72,13" stroke="white" strokeWidth="1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 14. Marketing Blocks --- */}
        <SectionTitle>14. Marketing Blocks</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Hero Section" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} />
                    <rect x="10" y="15" width="50" height="6" rx="2" {...textFill} />
                    <rect x="10" y="25" width="40" height="4" rx="1" {...faintFill} />
                    <rect x="10" y="35" width="20" height="8" rx="2" {...primaryFill} />
                    <rect x="70" y="15" width="20" height="30" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Feature List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="15" cy="15" r="5" {...primaryFill} opacity="0.2" />
                    <rect x="25" y="12" width="60" height="6" rx="2" {...textFill} />
                    <circle cx="15" cy="30" r="5" {...primaryFill} opacity="0.2" />
                    <rect x="25" y="27" width="60" height="6" rx="2" {...textFill} />
                    <circle cx="15" cy="45" r="5" {...primaryFill} opacity="0.2" />
                    <rect x="25" y="42" width="60" height="6" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pricing Card" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="5" y="5" width="50" height="70" rx="4" {...layoutProps} />
                    <rect x="20" y="15" width="20" height="4" rx="1" {...faintFill} />
                    <text x="30" y="35" fontSize="12" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>$29</text>
                    <rect x="15" y="45" width="30" height="2" rx="1" {...faintFill} />
                    <rect x="15" y="50" width="30" height="2" rx="1" {...faintFill} />
                    <rect x="15" y="60" width="30" height="8" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Testimonial" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="0" width="100" height="40" rx="4" {...layoutProps} />
                    <circle cx="20" cy="20" r="8" {...faintFill} />
                    <rect x="35" y="12" width="50" height="4" rx="1" {...textFill} />
                    <rect x="35" y="20" width="40" height="4" rx="1" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="FAQ Accordion" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="80" height="12" rx="2" {...layoutProps} />
                    <rect x="80" y="14" width="4" height="4" rx="1" {...faintFill} />
                    <rect x="10" y="25" width="80" height="25" rx="2" {...layoutProps} />
                    <rect x="15" y="30" width="50" height="4" rx="1" {...textFill} />
                    <rect x="15" y="38" width="70" height="8" rx="1" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="CTA Strip" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="100" height="30" rx="4" fill={theme.colors.primary} opacity="0.1" />
                    <rect x="10" y="10" width="40" height="4" rx="1" {...textFill} />
                    <rect x="10" y="16" width="30" height="4" rx="1" {...faintFill} />
                    <rect x="70" y="8" width="20" height="14" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 15. E-commerce Components --- */}
        <SectionTitle>15. E-commerce Components</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Product Card" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="5" y="5" width="50" height="70" rx="4" {...layoutProps} />
                    <rect x="10" y="10" width="40" height="30" rx="2" {...faintFill} />
                    <rect x="10" y="45" width="30" height="4" rx="1" {...textFill} />
                    <rect x="10" y="52" width="20" height="4" rx="1" {...textFill} opacity="0.5" />
                    <rect x="10" y="60" width="40" height="8" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cart Item" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="0" width="100" height="40" rx="4" {...layoutProps} />
                    <rect x="5" y="5" width="30" height="30" rx="2" {...faintFill} />
                    <rect x="40" y="10" width="40" height="4" rx="1" {...textFill} />
                    <rect x="40" y="20" width="20" height="4" rx="1" {...textFill} opacity="0.5" />
                    <rect x="85" y="15" width="10" height="10" rx="2" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Faceted Filter" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="5" y="5" width="50" height="70" rx="4" {...layoutProps} />
                    <rect x="10" y="10" width="20" height="4" rx="1" {...textFill} />
                    <rect x="10" y="20" width="8" height="8" rx="1" {...strokeProps} />
                    <rect x="25" y="22" width="20" height="4" rx="1" {...faintFill} />
                    <rect x="10" y="32" width="8" height="8" rx="1" {...primaryFill} />
                    <rect x="25" y="34" width="20" height="4" rx="1" {...faintFill} />
                    <rect x="10" y="44" width="8" height="8" rx="1" {...strokeProps} />
                    <rect x="25" y="46" width="20" height="4" rx="1" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Checkout Steps" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="10" y1="15" x2="90" y2="15" stroke={theme.colors.text} opacity="0.2" />
                    <circle cx="20" cy="15" r="6" {...primaryFill} />
                    <circle cx="50" cy="15" r="6" {...primaryFill} opacity="0.5" />
                    <circle cx="80" cy="15" r="6" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Rating Summary" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <text x="15" y="25" fontSize="16" fontWeight="bold" fill={theme.colors.text}>4.5</text>
                    <path d="M40,10 L43,18 L51,18 L45,23 L47,31 L40,26 L33,31 L35,23 L29,18 L37,18 Z" fill={theme.colors.warning} />
                    <rect x="55" y="10" width="20" height="4" rx="1" {...faintFill} />
                    <rect x="55" y="10" width="15" height="4" rx="1" fill={theme.colors.warning} />
                    <rect x="55" y="18" width="20" height="4" rx="1" {...faintFill} />
                    <rect x="55" y="18" width="10" height="4" rx="1" fill={theme.colors.warning} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Coupon Field" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="10" width="60" height="20" rx="2" {...layoutProps} />
                    <text x="15" y="23" fontSize="6" opacity="0.5" fill={theme.colors.text}>Enter code</text>
                    <rect x="70" y="10" width="25" height="20" rx="2" {...secondaryFill} />
                    <text x="82.5" y="23" fontSize="6" fill="white" textAnchor="middle">Apply</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 16. Social & Feed --- */}
        <SectionTitle>16. Social & Feed</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Social Post" centered>
                <svg viewBox="0 0 100 80" className="w-24 h-20">
                    <rect x="0" y="0" width="100" height="80" rx="4" {...layoutProps} />
                    <circle cx="15" cy="15" r="8" {...faintFill} />
                    <rect x="30" y="10" width="30" height="4" rx="1" {...textFill} />
                    <rect x="30" y="18" width="20" height="3" rx="1" {...faintFill} />
                    <rect x="15" y="30" width="70" height="4" rx="1" {...textFill} />
                    <rect x="15" y="40" width="70" height="25" rx="2" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Comment Thread" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="10" cy="10" r="5" {...faintFill} />
                    <rect x="20" y="5" width="70" height="15" rx="2" {...layoutProps} />
                    <line x1="10" y1="15" x2="10" y2="35" stroke={theme.colors.text} opacity="0.2" />
                    <line x1="10" y1="35" x2="25" y2="35" stroke={theme.colors.text} opacity="0.2" />
                    <circle cx="30" cy="35" r="5" {...faintFill} />
                    <rect x="40" y="30" width="50" height="15" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Share Sheet" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="20" width="100" height="40" rx="4" {...layoutProps} />
                    <circle cx="20" cy="40" r="8" {...primaryFill} opacity="0.2" />
                    <circle cx="50" cy="40" r="8" {...secondaryFill} opacity="0.2" />
                    <circle cx="80" cy="40" r="8" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Follow Button" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="5" y="5" width="50" height="20" rx="10" {...primaryFill} />
                    <text x="30" y="18" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">Follow</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="User Bio Card" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="0" y="0" width="80" height="60" rx="4" {...layoutProps} />
                    <rect x="0" y="0" width="80" height="25" rx="4" fill={theme.colors.primary} opacity="0.2" />
                    <circle cx="40" cy="25" r="10" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <text x="40" y="45" fontSize="6" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>Jane Doe</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Reaction Bar" centered>
                <svg viewBox="0 0 80 30" className="w-20 h-8">
                    <rect x="0" y="5" width="80" height="20" rx="10" {...layoutProps} />
                    <circle cx="15" cy="15" r="4" fill="#EF4444" />
                    <circle cx="30" cy="15" r="4" fill="#3B82F6" />
                    <circle cx="45" cy="15" r="4" fill="#F59E0B" />
                    <text x="65" y="18" fontSize="8" fill={theme.colors.text}>+12</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 17. Navigation Extended --- */}
        <SectionTitle>17. Navigation Extended</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Mega Menu" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="10" rx="2" {...layoutProps} />
                    <rect x="5" y="18" width="90" height="35" rx="2" {...layoutProps} />
                    <rect x="10" y="25" width="20" height="4" rx="1" {...textFill} />
                    <rect x="10" y="32" width="20" height="2" rx="1" {...faintFill} />
                    <rect x="10" y="36" width="20" height="2" rx="1" {...faintFill} />
                    <rect x="40" y="25" width="20" height="4" rx="1" {...textFill} />
                    <rect x="40" y="32" width="20" height="2" rx="1" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Vertical Nav" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="5" y="5" width="50" height="70" rx="2" {...layoutProps} />
                    <rect x="10" y="15" width="40" height="6" rx="2" {...textFill} opacity="0.1" />
                    <rect x="15" y="25" width="30" height="4" rx="1" {...faintFill} />
                    <rect x="15" y="32" width="30" height="4" rx="1" {...faintFill} />
                    <rect x="10" y="45" width="40" height="6" rx="2" {...textFill} opacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pagination" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="20" y="5" width="10" height="20" rx="2" {...layoutProps} />
                    <rect x="35" y="5" width="10" height="20" rx="2" {...primaryFill} />
                    <rect x="50" y="5" width="10" height="20" rx="2" {...layoutProps} />
                    <text x="75" y="18" fontSize="8" fill={theme.colors.text}>Next</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="TOC / Scrollspy" centered>
                <svg viewBox="0 0 40 80" className="w-10 h-20">
                    <line x1="10" y1="10" x2="10" y2="70" stroke={theme.colors.text} opacity="0.2" />
                    <circle cx="10" cy="20" r="3" {...primaryFill} />
                    <circle cx="10" cy="40" r="2" {...faintFill} />
                    <circle cx="10" cy="60" r="2" {...faintFill} />
                    <rect x="18" y="18" width="15" height="4" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Breadcrumb" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="10" width="20" height="6" rx="1" {...faintFill} />
                    <text x="30" y="15" fontSize="8" fill={theme.colors.text} opacity="0.5">/</text>
                    <rect x="38" y="10" width="20" height="6" rx="1" {...faintFill} />
                    <text x="63" y="15" fontSize="8" fill={theme.colors.text} opacity="0.5">/</text>
                    <rect x="71" y="10" width="20" height="6" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="App Switcher" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="5" width="12" height="12" rx="2" {...layoutProps} />
                    <rect x="23" y="5" width="12" height="12" rx="2" {...layoutProps} />
                    <rect x="5" y="23" width="12" height="12" rx="2" {...layoutProps} />
                    <rect x="23" y="23" width="12" height="12" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 18. Mobile Patterns --- */}
        <SectionTitle>18. Mobile Patterns</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Action Sheet" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="0" y="0" width="60" height="80" rx="4" fill={theme.colors.text} opacity="0.1" />
                    <path d="M0,50 Q30,50 60,50 L60,80 H0 Z" fill={theme.colors.surface} />
                    <rect x="20" y="55" width="20" height="2" rx="1" fill={theme.colors.text} opacity="0.2" />
                    <rect x="10" y="62" width="40" height="4" rx="2" {...textFill} />
                    <rect x="10" y="70" width="40" height="4" rx="2" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pull to Refresh" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="5" y="5" width="50" height="70" rx="4" {...layoutProps} />
                    <circle cx="30" cy="20" r="6" fill={theme.colors.surface} stroke={theme.colors.primary} strokeWidth="2" strokeDasharray="10 10" />
                    <rect x="10" y="35" width="40" height="6" rx="2" {...faintFill} />
                    <rect x="10" y="45" width="40" height="6" rx="2" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Swipe Action" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="5" width="100" height="30" rx="2" fill={theme.colors.error} />
                    <text x="80" y="23" fontSize="8" fill="white" fontWeight="bold">DEL</text>
                    <rect x="0" y="5" width="70" height="30" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="10" y="15" width="40" height="4" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Onboarding Dots" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="5" y="5" width="50" height="70" rx="4" {...layoutProps} />
                    <circle cx="30" cy="30" r="12" {...primaryFill} opacity="0.2" />
                    <div className="flex gap-1 justify-center absolute bottom-4 w-full">
                        <circle cx="24" cy="65" r="2" fill={theme.colors.primary} />
                        <circle cx="30" cy="65" r="2" fill={theme.colors.text} opacity="0.2" />
                        <circle cx="36" cy="65" r="2" fill={theme.colors.text} opacity="0.2" />
                    </div>
                </svg>
            </GalleryItem>
            <GalleryItem title="Bottom Tab Bar" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="5" y="5" width="50" height="70" rx="4" {...layoutProps} />
                    <rect x="5" y="65" width="50" height="10" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <circle cx="15" cy="70" r="2" {...primaryFill} />
                    <circle cx="30" cy="70" r="2" {...faintFill} />
                    <circle cx="45" cy="70" r="2" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Floating Action" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="5" y="5" width="50" height="70" rx="4" {...layoutProps} />
                    <circle cx="45" cy="65" r="8" fill={theme.colors.accent} style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
                    <path d="M45,61 V69 M41,65 H49" stroke="white" strokeWidth="2" />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};