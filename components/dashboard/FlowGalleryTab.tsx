
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const FlowGalleryTab: React.FC = () => {
  const { theme, strokeProps, layoutProps, primaryFill, textFill, surfaceFill, faintFill, textStyle, corner, cornerSm, strokeWidth, strokeWidthNum } = useSvgTheme();

  // Helper for common SVG props
  const svgProps = {
    vectorEffect: "non-scaling-stroke",
    fill: theme.colors.surface,
    stroke: theme.colors.text,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const solidProps = {
      fill: theme.colors.text,
      stroke: 'none'
  };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Flow & Process Gallery (280+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            A massive collection of vector shapes for Flowcharts, BPMN, UML, Network Diagrams, Circuits, VSM, and P&ID.
        </p>

        {/* --- 1. Standard Flowchart Shapes --- */}
        <SectionTitle>1. Standard Flowchart</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Start / End" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="15" width="80" height="30" rx="15" ry="15" {...svgProps} />
                    <text x="50" y="31" {...textStyle}>Start</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Process" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="15" width="80" height="30" rx={corner} {...svgProps} stroke={theme.colors.primary} />
                    <text x="50" y="31" {...textStyle}>Process</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Decision" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="50,5 90,30 50,55 10,30" {...svgProps} stroke={theme.colors.secondary} />
                    <text x="50" y="31" {...textStyle}>?</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Input / Output" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="20,15 90,15 80,45 10,45" {...svgProps} stroke={theme.colors.accent} />
                    <text x="50" y="31" {...textStyle}>I/O</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Document" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M20,10 H80 V40 Q65,55 50,45 Q35,35 20,45 Z" {...svgProps} />
                    <text x="50" y="28" {...textStyle}>Doc</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Database" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M20,15 A30,5 0 0,1 80,15 A30,5 0 0,1 20,15" {...svgProps} />
                    <path d="M20,15 V45 A30,5 0 0,0 80,45 V15" {...svgProps} />
                    <path d="M20,15 A30,5 0 0,0 80,15" {...svgProps} strokeOpacity="0.2" fill="none" />
                    <text x="50" y="35" {...textStyle}>DB</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Multi-Document" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M25,5 H85 V35 Q70,50 55,40 Q40,30 25,40 Z" {...svgProps} fill="white" />
                    <path d="M20,10 H80 V40 Q65,55 50,45 Q35,35 20,45 Z" {...svgProps} fill="white" />
                    <path d="M15,15 H75 V45 Q60,60 45,50 Q30,40 15,50 Z" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Manual Input" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,25 L80,15 V45 H10 Z" {...svgProps} />
                    <text x="45" y="35" {...textStyle}>Input</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Delay" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,15 H60 A15,15 0 0,1 60,45 H10 V15" {...svgProps} />
                    <text x="35" y="32" {...textStyle}>Wait</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Display" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M15,15 H70 A20,20 0 0,1 70,45 H15 L5,30 Z" {...svgProps} />
                    <text x="40" y="32" {...textStyle}>Screen</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Subroutine" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="15" width="80" height="30" {...svgProps} />
                    <line x1="20" y1="15" x2="20" y2="45" {...svgProps} />
                    <line x1="80" y1="15" x2="80" y2="45" {...svgProps} />
                    <text x="50" y="31" {...textStyle}>Sub</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Connector" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="50" cy="30" r="15" {...svgProps} />
                    <text x="50" y="31" {...textStyle}>A</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. BPMN 2.0 Core --- */}
        <SectionTitle>2. BPMN 2.0 Core</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Start Event" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth={strokeWidth} />
                </svg>
            </GalleryItem>
            <GalleryItem title="End Event" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth={Math.max(3, strokeWidthNum * 2)} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Intermediate" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} />
                    <circle cx="30" cy="30" r="16" {...svgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Task" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx={corner} {...svgProps} />
                    <text x="50" y="31" {...textStyle}>Task</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="User Task" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx={corner} {...svgProps} />
                    <path d="M10,15 L15,15 A2,2 0 0,1 15,20 L10,20" stroke={theme.colors.text} fill="none" strokeWidth={strokeWidth} />
                    <circle cx="12" cy="14" r="2" fill={theme.colors.text} />
                    <text x="50" y="31" {...textStyle}>User</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Gateway XOR" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <polygon points="30,5 55,30 30,55 5,30" {...svgProps} />
                    <path d="M22,22 L38,38 M38,22 L22,38" stroke={theme.colors.text} strokeWidth={strokeWidth} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Gateway AND" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <polygon points="30,5 55,30 30,55 5,30" {...svgProps} />
                    <path d="M30,15 V45 M15,30 H45" stroke={theme.colors.text} strokeWidth={strokeWidth} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pool" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" {...svgProps} />
                    <line x1="15" y1="5" x2="15" y2="55" {...svgProps} />
                    <text x="10" y="30" fontSize="6" fill={theme.colors.text} transform="rotate(-90 10,30)">Pool Name</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Lane" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" {...svgProps} />
                    <line x1="15" y1="5" x2="15" y2="55" {...svgProps} />
                    <line x1="15" y1="30" x2="95" y2="30" {...svgProps} />
                    <text x="10" y="15" fontSize="6" fill={theme.colors.text} transform="rotate(-90 10,15)">Lane 1</text>
                    <text x="10" y="40" fontSize="6" fill={theme.colors.text} transform="rotate(-90 10,40)">Lane 2</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Message" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" {...svgProps} strokeDasharray="3 2" />
                    <path d="M5,5 L30,20 L55,5" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Object" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <path d="M5,5 H25 L35,15 V45 H5 Z" {...svgProps} />
                    <path d="M25,5 V15 H35" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Annotation" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <path d="M10,5 H5 V35 H10" fill="none" stroke={theme.colors.text} />
                    <text x="15" y="22" fontSize="6" fill={theme.colors.text} fontFamily="monospace">Comment...</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Network Infrastructure --- */}
        <SectionTitle>4. Network Infrastructure</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Router" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} />
                    <path d="M20,20 L40,40 M40,20 L20,40" stroke={theme.colors.text} strokeWidth="1.5" />
                    <path d="M15,30 L20,30 M40,30 L45,30 M30,15 L30,20 M30,40 L30,45" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Switch" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="20" width="40" height="20" {...svgProps} />
                    <path d="M15,25 L45,25 M15,35 L45,35" stroke={theme.colors.text} strokeWidth="1.5" />
                    <path d="M40,25 L45,20 M40,25 L45,30 M20,35 L15,30 M20,35 L15,40" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Firewall" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,20 H50 V50 H10 Z" fill="none" stroke={theme.colors.error} strokeWidth="2" />
                    <line x1="10" y1="30" x2="50" y2="30" stroke={theme.colors.error} />
                    <line x1="10" y1="40" x2="50" y2="40" stroke={theme.colors.error} />
                    <line x1="25" y1="20" x2="25" y2="30" stroke={theme.colors.error} />
                    <line x1="35" y1="30" x2="35" y2="40" stroke={theme.colors.error} />
                    <line x1="25" y1="40" x2="25" y2="50" stroke={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Server" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="10" width="30" height="40" {...svgProps} />
                    <line x1="15" y1="20" x2="45" y2="20" stroke={theme.colors.text} />
                    <line x1="15" y1="30" x2="45" y2="30" stroke={theme.colors.text} />
                    <line x1="15" y1="40" x2="45" y2="40" stroke={theme.colors.text} />
                    <circle cx="20" cy="15" r="1.5" {...solidProps} />
                    <circle cx="20" cy="25" r="1.5" {...solidProps} />
                    <circle cx="20" cy="35" r="1.5" {...solidProps} />
                    <circle cx="20" cy="45" r="1.5" {...solidProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cloud" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,30 Q10,15 25,15 Q30,5 40,10 Q55,10 55,25 Q55,35 45,35 H15 Q5,35 10,30" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Internet" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <ellipse cx="30" cy="20" rx="25" ry="15" {...svgProps} />
                    <path d="M30,5 V35 M5,20 H55" stroke={theme.colors.text} strokeWidth="0.5" />
                    <path d="M15,8 Q30,20 45,8 M15,32 Q30,20 45,32" stroke={theme.colors.text} strokeWidth="0.5" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Laptop" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="10" y="5" width="40" height="25" rx="2" {...svgProps} />
                    <path d="M5,35 H55 L50,30 H10 Z" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-16">
                    <rect x="10" y="5" width="20" height="35" rx="2" {...svgProps} />
                    <circle cx="20" cy="35" r="1" {...solidProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Wireless AP" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <circle cx="30" cy="30" r="3" {...solidProps} />
                    <path d="M22,22 Q30,15 38,22" stroke={theme.colors.text} fill="none" strokeWidth="2" />
                    <path d="M15,15 Q30,5 45,15" stroke={theme.colors.text} fill="none" strokeWidth="2" />
                    <line x1="30" y1="30" x2="30" y2="40" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="VPN" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="15" y="10" width="30" height="20" rx="2" {...svgProps} strokeDasharray="3 3" />
                    <path d="M25,20 L35,20" stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="22" y="15" width="16" height="10" rx="2" fill={theme.colors.surface} stroke={theme.colors.success} />
                    <path d="M30,17 V15 A2,2 0 0,0 28,15 V17" stroke={theme.colors.success} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Storage SAN" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" {...svgProps} />
                    <line x1="10" y1="20" x2="50" y2="20" stroke={theme.colors.text} />
                    <line x1="10" y1="30" x2="50" y2="30" stroke={theme.colors.text} />
                    <line x1="10" y1="40" x2="50" y2="40" stroke={theme.colors.text} />
                    <rect x="15" y="14" width="10" height="2" {...solidProps} opacity="0.3" />
                    <rect x="15" y="24" width="10" height="2" {...solidProps} opacity="0.3" />
                    <rect x="15" y="34" width="10" height="2" {...solidProps} opacity="0.3" />
                    <rect x="15" y="44" width="10" height="2" {...solidProps} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="User" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="15" r="5" {...svgProps} />
                    <path d="M10,35 Q20,25 30,35" stroke={theme.colors.text} fill="none" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Cloud Architecture --- */}
        <SectionTitle>5. Cloud Architecture</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Compute" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="5" width="30" height="30" rx="2" stroke="#F97316" fill="none" strokeWidth="2" />
                    <rect x="12" y="12" width="6" height="6" fill="#F97316" />
                    <rect x="22" y="12" width="6" height="6" fill="#F97316" />
                    <rect x="12" y="22" width="6" height="6" fill="#F97316" />
                    <rect x="22" y="22" width="6" height="6" fill="#F97316" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bucket (S3)" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,10 L10,35 H30 L35,10 Z" fill="none" stroke="#22C55E" strokeWidth="2" />
                    <path d="M5,10 Q20,0 35,10" fill="none" stroke="#22C55E" strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Database (RDS)" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,10 A10,3 0 0,1 30,10 A10,3 0 0,1 10,10" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    <path d="M10,10 V30 A10,3 0 0,0 30,30 V10" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="10" y1="17" x2="30" y2="17" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="10" y1="24" x2="30" y2="24" stroke="#3B82F6" strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Lambda" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="5" width="30" height="30" rx="4" fill="#F59E0B" fillOpacity="0.2" />
                    <text x="20" y="28" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#F59E0B">λ</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="VPC" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="2" y="2" width="56" height="36" rx="4" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="4 2" fill="none" />
                    <path d="M10,10 L20,20 L10,30" stroke={theme.colors.text} fill="none" />
                    <rect x="25" y="10" width="10" height="10" stroke={theme.colors.primary} fill="none" />
                    <rect x="40" y="20" width="10" height="10" stroke={theme.colors.primary} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Load Balancer" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="2" y="15" width="8" height="10" fill="none" stroke="#8B5CF6" />
                    <path d="M10,20 L20,20 L20,10 L30,10" fill="none" stroke="#8B5CF6" />
                    <path d="M20,20 L20,30 L30,30" fill="none" stroke="#8B5CF6" />
                    <rect x="30" y="5" width="8" height="10" fill="none" stroke="#8B5CF6" />
                    <rect x="30" y="25" width="8" height="10" fill="none" stroke="#8B5CF6" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Queue" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <rect x="0" y="0" width="10" height="20" fill={theme.colors.secondary} opacity="0.2"/>
                    <rect x="12" y="0" width="10" height="20" fill={theme.colors.secondary} opacity="0.4"/>
                    <rect x="24" y="0" width="10" height="20" fill={theme.colors.secondary} opacity="0.6"/>
                    <rect x="36" y="0" width="10" height="20" fill={theme.colors.secondary} opacity="0.8"/>
                    <rect x="48" y="0" width="10" height="20" fill={theme.colors.secondary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Topic / SNS" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke="#EC4899" strokeWidth="2" />
                    <circle cx="20" cy="20" r="4" fill="#EC4899" />
                    <path d="M20,16 V5 M20,24 V35 M16,20 H5 M24,20 H35" stroke="#EC4899" />
                </svg>
            </GalleryItem>
            <GalleryItem title="CDN / Edge" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" fill="none" stroke={theme.colors.text} />
                    <circle cx="20" cy="8" r="3" fill={theme.colors.primary} />
                    <circle cx="32" cy="20" r="3" fill={theme.colors.primary} />
                    <circle cx="20" cy="32" r="3" fill={theme.colors.primary} />
                    <circle cx="8" cy="20" r="3" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="K8s Pod" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" fill="none" stroke="#326CE5" strokeWidth="2" />
                    <path d="M12,16 L20,10 L28,16 V26 L20,32 L12,26 Z" fill="none" stroke="#326CE5" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="DNS" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="15" width="30" height="10" rx="2" fill="none" stroke={theme.colors.text} />
                    <text x="20" y="23" textAnchor="middle" fontSize="6" fontWeight="bold" fill={theme.colors.text}>www</text>
                    <path d="M20,25 V35 M10,35 H30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Key / Secrets" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="15" cy="20" r="6" stroke="#EF4444" fill="none" strokeWidth="2" />
                    <rect x="20" y="18" width="12" height="4" fill="#EF4444" />
                    <rect x="24" y="22" width="4" height="4" fill="#EF4444" />
                    <rect x="28" y="22" width="4" height="6" fill="#EF4444" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Logic Gates --- */}
        <SectionTitle>6. Logic Gates</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Buffer" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,5 L40,20 L10,35 Z" {...svgProps} />
                    <line x1="0" y1="20" x2="10" y2="20" stroke={theme.colors.text} />
                    <line x1="40" y1="20" x2="50" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="NOT Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,5 L40,20 L10,35 Z" {...svgProps} />
                    <circle cx="43" cy="20" r="3" {...svgProps} />
                    <line x1="0" y1="20" x2="10" y2="20" stroke={theme.colors.text} />
                    <line x1="46" y1="20" x2="55" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="AND Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,5 H25 A15,15 0 0,1 25,35 H10 Z" {...svgProps} />
                    <line x1="0" y1="12" x2="10" y2="12" stroke={theme.colors.text} />
                    <line x1="0" y1="28" x2="10" y2="28" stroke={theme.colors.text} />
                    <line x1="40" y1="20" x2="50" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="OR Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,5 Q25,5 40,20 Q25,35 10,35 Q18,20 10,5 Z" {...svgProps} />
                    <line x1="0" y1="12" x2="12" y2="12" stroke={theme.colors.text} />
                    <line x1="0" y1="28" x2="12" y2="28" stroke={theme.colors.text} />
                    <line x1="40" y1="20" x2="50" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="NAND Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,5 H25 A15,15 0 0,1 25,35 H10 Z" {...svgProps} />
                    <circle cx="43" cy="20" r="3" {...svgProps} />
                    <line x1="0" y1="12" x2="10" y2="12" stroke={theme.colors.text} />
                    <line x1="0" y1="28" x2="10" y2="28" stroke={theme.colors.text} />
                    <line x1="46" y1="20" x2="55" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="XOR Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M15,5 Q30,5 45,20 Q30,35 15,35 Q23,20 15,5 Z" {...svgProps} />
                    <path d="M8,5 Q16,20 8,35" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="0" y1="12" x2="12" y2="12" stroke={theme.colors.text} />
                    <line x1="0" y1="28" x2="12" y2="28" stroke={theme.colors.text} />
                    <line x1="45" y1="20" x2="55" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Circuit Symbols --- */}
        <SectionTitle>7. Circuit Symbols</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Resistor" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <path d="M0,10 H10 L15,5 L20,15 L25,5 L30,15 L35,5 L40,15 L45,5 L50,10 H60" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Capacitor" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <line x1="0" y1="20" x2="25" y2="20" stroke={theme.colors.text} />
                    <line x1="25" y1="10" x2="25" y2="30" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="35" y1="10" x2="35" y2="30" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="35" y1="20" x2="60" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Inductor" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <path d="M0,15 H10 Q12.5,0 15,15 Q17.5,0 20,15 Q22.5,0 25,15 Q27.5,0 30,15 H40" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Diode" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <line x1="0" y1="20" x2="20" y2="20" stroke={theme.colors.text} />
                    <polygon points="20,10 20,30 40,20" fill={theme.colors.text} />
                    <line x1="40" y1="10" x2="40" y2="30" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="40" y1="20" x2="60" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="LED" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <polygon points="20,10 20,30 40,20" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="40" y1="10" x2="40" y2="30" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="0" y1="20" x2="20" y2="20" stroke={theme.colors.text} />
                    <line x1="40" y1="20" x2="60" y2="20" stroke={theme.colors.text} />
                    <path d="M45,10 L50,5 M48,12 L53,7" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Ground" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <line x1="20" y1="0" x2="20" y2="20" stroke={theme.colors.text} />
                    <line x1="10" y1="20" x2="30" y2="20" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="14" y1="25" x2="26" y2="25" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="18" y1="30" x2="22" y2="30" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Source DC" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <line x1="20" y1="0" x2="20" y2="15" stroke={theme.colors.text} />
                    <line x1="10" y1="15" x2="30" y2="15" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="15" y1="25" x2="25" y2="25" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="20" y1="25" x2="20" y2="40" stroke={theme.colors.text} />
                    <text x="32" y="15" fontSize="10" fill={theme.colors.text}>+</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Switch" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <line x1="0" y1="10" x2="20" y2="10" stroke={theme.colors.text} />
                    <circle cx="20" cy="10" r="2" fill="none" stroke={theme.colors.text} />
                    <line x1="22" y1="10" x2="38" y2="5" stroke={theme.colors.text} />
                    <circle cx="40" cy="10" r="2" fill="none" stroke={theme.colors.text} />
                    <line x1="42" y1="10" x2="60" y2="10" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Transistor" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} />
                    <line x1="15" y1="10" x2="15" y2="30" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="0" y1="20" x2="15" y2="20" stroke={theme.colors.text} />
                    <line x1="15" y1="15" x2="25" y2="5" stroke={theme.colors.text} />
                    <line x1="15" y1="25" x2="25" y2="35" stroke={theme.colors.text} />
                    <polygon points="22,32 25,35 18,35" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Fuse" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <line x1="0" y1="10" x2="10" y2="10" stroke={theme.colors.text} />
                    <rect x="10" y="5" width="40" height="10" fill="none" stroke={theme.colors.text} />
                    <path d="M10,10 Q20,15 30,10 T50,10" fill="none" stroke={theme.colors.text} />
                    <line x1="50" y1="10" x2="60" y2="10" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Battery" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <line x1="20" y1="0" x2="20" y2="10" stroke={theme.colors.text} />
                    <line x1="10" y1="10" x2="30" y2="10" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="15" y1="15" x2="25" y2="15" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="10" y1="20" x2="30" y2="20" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="15" y1="25" x2="25" y2="25" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="20" y1="25" x2="20" y2="35" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="AC Source" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} />
                    <path d="M10,20 Q15,10 20,20 T30,20" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 8. Value Stream Mapping (VSM) --- */}
        <SectionTitle>8. Value Stream Mapping</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Customer" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <path d="M10,5 H50 V15 L30,25 L10,15 Z" {...svgProps} />
                    <rect x="10" y="5" width="40" height="30" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Process" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-10">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <text x="40" y="25" {...textStyle}>Process</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Box" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" fill="none" stroke={theme.colors.text} />
                    <line x1="5" y1="15" x2="55" y2="15" stroke={theme.colors.text} />
                    <text x="30" y="12" fontSize="6" textAnchor="middle" fill={theme.colors.text}>C/T=20s</text>
                    <text x="30" y="25" fontSize="6" textAnchor="middle" fill={theme.colors.text}>C/O=5m</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Inventory" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,35 L20,5 L35,35 Z" fill="none" stroke={theme.colors.warning} strokeWidth="2" />
                    <text x="20" y="30" fontSize="16" fontWeight="bold" textAnchor="middle" fill={theme.colors.warning}>I</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Push Arrow" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="5" y="10" width="40" height="10" fill="none" stroke={theme.colors.text} strokeDasharray="3 2" />
                    <path d="M45,10 L55,15 L45,20" fill="none" stroke={theme.colors.text} strokeDasharray="3 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Shipment" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="15" width="40" height="20" {...svgProps} />
                    <rect x="45" y="20" width="10" height="15" {...svgProps} />
                    <circle cx="15" cy="35" r="4" fill={theme.colors.text} />
                    <circle cx="35" cy="35" r="4" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Supermarket" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <path d="M5,35 V5 H55 V35" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="5" y1="15" x2="55" y2="15" stroke={theme.colors.text} />
                    <line x1="5" y1="25" x2="55" y2="25" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Signal Kan" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <path d="M35,20 L5,35 L5,5 Z" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Withdrawal" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="5" y="10" width="50" height="10" rx="5" fill="none" stroke={theme.colors.text} />
                    <text x="30" y="18" fontSize="6" textAnchor="middle" fill={theme.colors.text}>Pull</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Manual Info" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <line x1="5" y1="15" x2="45" y2="15" stroke={theme.colors.text} />
                    <path d="M45,15 L50,10 L55,15 L50,20 Z" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Electr Info" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M5,15 L15,5 L25,15 L35,5 L45,15" fill="none" stroke={theme.colors.text} />
                    <path d="M45,15 L50,10 L55,15" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Kaizen Burst" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L23,12 L30,10 L28,18 L35,20 L28,22 L30,30 L23,28 L20,35 L17,28 L10,30 L12,22 L5,20 L12,18 L10,10 L17,12 Z" fill={theme.colors.warning} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 9. P&ID & Engineering --- */}
        <SectionTitle>9. P&ID & Engineering</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Valve" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <polygon points="5,5 5,15 20,10" fill="none" stroke={theme.colors.text} />
                    <polygon points="35,5 35,15 20,10" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pump" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} />
                    <path d="M5,35 L20,20 L35,35" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tank" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="10" width="30" height="30" rx="5" fill="none" stroke={theme.colors.text} />
                    <line x1="5" y1="15" x2="35" y2="15" stroke={theme.colors.text} />
                    <line x1="5" y1="35" x2="35" y2="35" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Heat Exch" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} />
                    <path d="M10,20 H30 M20,10 V30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mixer" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <path d="M5,10 L10,40 H30 L35,10" fill="none" stroke={theme.colors.text} />
                    <line x1="20" y1="5" x2="20" y2="35" stroke={theme.colors.text} />
                    <path d="M15,35 L25,35" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Fan" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} />
                    <path d="M20,20 L30,10 M20,20 L10,30 M20,20 L30,30 M20,20 L10,10" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filter" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="20" y1="5" x2="20" y2="35" stroke={theme.colors.text} />
                    <path d="M10,15 L30,15 L20,35 Z" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sensor" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="10" fill="none" stroke={theme.colors.text} />
                    <text x="20" y="24" fontSize="10" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>T</text>
                    <line x1="20" y1="30" x2="20" y2="40" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Motor" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" fill="none" stroke={theme.colors.text} />
                    <text x="20" y="24" fontSize="12" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>M</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Conveyor" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <circle cx="10" cy="10" r="5" fill="none" stroke={theme.colors.text} />
                    <circle cx="50" cy="10" r="5" fill="none" stroke={theme.colors.text} />
                    <line x1="10" y1="5" x2="50" y2="5" stroke={theme.colors.text} />
                    <line x1="10" y1="15" x2="50" y2="15" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Boiler" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="10" width="30" height="30" rx="2" fill="none" stroke={theme.colors.text} />
                    <path d="M10,25 Q20,15 30,25" stroke={theme.colors.text} fill="none" />
                    <path d="M10,35 Q20,25 30,35" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Check Valve" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <path d="M5,5 L5,15 L20,10 Z" fill="none" stroke={theme.colors.text} />
                    <line x1="20" y1="5" x2="20" y2="15" stroke={theme.colors.text} />
                    <path d="M35,5 L35,15 L20,10 Z" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 10. Sitemaps & UI Flows --- */}
        <SectionTitle>10. Sitemaps & UI Flows</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Page Node" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <line x1="10" y1="12" x2="50" y2="12" stroke={theme.colors.text} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Home Page" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <path d="M25,15 L30,10 L35,15 V25 H31 V20 H29 V25 H25 Z" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Login" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <rect x="20" y="15" width="20" height="4" fill={theme.colors.text} opacity="0.2" />
                    <rect x="20" y="22" width="20" height="4" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Catalog" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <rect x="10" y="12" width="12" height="16" fill={theme.colors.text} opacity="0.1" />
                    <rect x="24" y="12" width="12" height="16" fill={theme.colors.text} opacity="0.1" />
                    <rect x="38" y="12" width="12" height="16" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Detail" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <rect x="10" y="10" width="15" height="20" fill={theme.colors.text} opacity="0.1" />
                    <line x1="30" y1="12" x2="50" y2="12" stroke={theme.colors.text} />
                    <line x1="30" y1="18" x2="45" y2="18" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cart" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <path d="M25,15 H35 L33,25 H27 Z" fill={theme.colors.secondary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Checkout" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <rect x="35" y="10" width="15" height="20" fill={theme.colors.success} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Profile" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <circle cx="30" cy="15" r="4" fill={theme.colors.text} />
                    <path d="M22,25 Q30,30 38,25" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Settings" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <circle cx="30" cy="20" r="5" stroke={theme.colors.text} fill="none" strokeWidth="2" strokeDasharray="2 1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Error" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" stroke={theme.colors.error} fill="none" />
                    <path d="M25,15 L35,25 M35,15 L25,25" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Modal" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="10" width="30" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Popup" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <rect x="30" y="5" width="25" height="15" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
