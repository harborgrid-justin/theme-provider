
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const FlowGalleryTab: React.FC = () => {
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

  const arrowMarker = (
      <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill={theme.colors.text} />
          </marker>
      </defs>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Flow & Process Gallery (280+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            A massive collection of vector shapes for Flowcharts, BPMN, UML, ERD, VSM, P&ID, and Network diagrams.
        </p>

        {/* --- 1. Standard Flowchart Shapes --- */}
        <SectionTitle>1. Standard Flowchart Shapes</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Start / End" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="15" width="80" height="30" rx="15" ry="15" {...svgProps} />
                    <text x="50" y="31" {...textStyle}>Start</text>
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Process" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="15" width="80" height="30" rx="2" {...svgProps} stroke={theme.colors.primary} />
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

            <GalleryItem title="Multi-Document" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M30,5 H90 V40 Q75,50 60,40 Q40,30 30,40 Z" {...svgProps} fill="none" />
                    <path d="M20,10 H80 V45 Q65,55 50,45 Q35,35 20,45 Z" {...svgProps} fill={theme.colors.surface} />
                    <text x="50" y="30" {...textStyle}>Docs</text>
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

            <GalleryItem title="Direct Data" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,15 H70 A20,20 0 0,1 70,45 H10 A5,5 0 0,1 10,15" {...svgProps} />
                    <path d="M70,15 A5,20 0 0,1 70,45" {...svgProps} fill="none" />
                    <text x="45" y="32" {...textStyle}>HDD</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Manual Input" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,25 L80,15 V45 H10 Z" {...svgProps} />
                    <text x="45" y="35" {...textStyle}>Input</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Manual Op" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="10,15 90,15 80,45 20,45" {...svgProps} />
                    <text x="50" y="32" {...textStyle}>Op</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Preparation" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="10,30 25,15 75,15 90,30 75,45 25,45" {...svgProps} />
                    <text x="50" y="32" {...textStyle}>Prep</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Merge" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="20,10 80,10 50,50" {...svgProps} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Extract" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="50,10 80,50 20,50" {...svgProps} />
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

            <GalleryItem title="Off-Page" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M20,10 H80 V40 L50,55 L20,40 Z" {...svgProps} />
                    <text x="50" y="30" {...textStyle}>B</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. BPMN 2.0 Core --- */}
        <SectionTitle>2. BPMN 2.0 Core</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Start Event" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="End Event" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth="3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Intermediate" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth="1" />
                    <circle cx="30" cy="30" r="16" {...svgProps} strokeWidth="1" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Task" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="4" {...svgProps} />
                    <text x="50" y="31" {...textStyle}>Task</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="User Task" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="4" {...svgProps} />
                    <path d="M10,15 L15,15 A2,2 0 0,1 15,20 L10,20" stroke={theme.colors.text} fill="none" />
                    <circle cx="12" cy="14" r="2" fill={theme.colors.text} />
                    <text x="50" y="31" {...textStyle}>User</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Service Task" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="4" {...svgProps} />
                    <rect x="10" y="15" width="10" height="10" rx="1" fill="none" stroke={theme.colors.text} />
                    <path d="M12,20 H18 M15,17 V23" stroke={theme.colors.text} />
                    <text x="50" y="31" {...textStyle}>Service</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Gateway XOR" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <polygon points="30,5 55,30 30,55 5,30" {...svgProps} />
                    <path d="M22,22 L38,38 M38,22 L22,38" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Gateway AND" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <polygon points="30,5 55,30 30,55 5,30" {...svgProps} />
                    <path d="M30,15 V45 M15,30 H45" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Gateway OR" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <polygon points="30,5 55,30 30,55 5,30" {...svgProps} />
                    <circle cx="30" cy="30" r="10" stroke={theme.colors.text} fill="none" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Message Flow" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="10" y1="15" x2="90" y2="15" stroke={theme.colors.text} strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
                    <circle cx="10" cy="15" r="2" fill="none" stroke={theme.colors.text} />
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
            <GalleryItem title="Message Event" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth="1" />
                    <rect x="22" y="24" width="16" height="12" stroke={theme.colors.text} fill="none" />
                    <path d="M22,24 L30,30 L38,24" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Timer Event" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth="1" />
                    <circle cx="30" cy="30" r="14" stroke={theme.colors.text} fill="none" />
                    <path d="M30,30 L30,20 M30,30 L38,34" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Error Event" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth="1" />
                    <path d="M24,40 L36,20 M24,20 L36,40" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Signal Event" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} strokeWidth="1" />
                    <polygon points="30,18 42,38 18,38" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Object" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-16">
                    <path d="M5,5 H35 V55 H5 Z" {...svgProps} />
                    <path d="M25,5 V15 H35" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Group" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="4" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="4 4" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. UML Class & Object --- */}
        <SectionTitle>3. UML Class & Object</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Class" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" {...svgProps} />
                    <line x1="5" y1="15" x2="75" y2="15" {...svgProps} />
                    <line x1="5" y1="35" x2="75" y2="35" {...svgProps} />
                    <text x="40" y="12" fontSize="6" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">ClassName</text>
                    <text x="8" y="22" fontSize="4" fill={theme.colors.text}>+ attr: int</text>
                    <text x="8" y="42" fontSize="4" fill={theme.colors.text}>+ op(): void</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Interface" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" {...svgProps} />
                    <line x1="5" y1="20" x2="75" y2="20" {...svgProps} />
                    <text x="40" y="10" fontSize="4" fill={theme.colors.text} textAnchor="middle">&lt;&lt;interface&gt;&gt;</text>
                    <text x="40" y="16" fontSize="6" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">IName</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Association" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Inheritance" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="85" y2="10" stroke={theme.colors.text} strokeWidth="1.5" />
                    <polygon points="85,5 95,10 85,15" stroke={theme.colors.text} fill="white" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Composition" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="20" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="1.5" />
                    <polygon points="10,10 15,5 20,10 15,15" fill={theme.colors.text} stroke="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Aggregation" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="20" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="1.5" />
                    <polygon points="10,10 15,5 20,10 15,15" fill="white" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dependency" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="85" y2="10" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="4 2" />
                    <line x1="85" y1="10" x2="80" y2="7" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="85" y1="10" x2="80" y2="13" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Package" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M5,15 H30 V10 H5 V15 M5,15 H75 V55 H5 V15" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="40" y="35" fontSize="8" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">Package</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Object Node" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <text x="40" y="22" {...textStyle} textDecoration="underline">Object:Class</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Note" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,5 H40 L55,20 V35 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M40,5 V20 H55" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Constraint" centered>
                <div className="border border-dashed rounded px-2 py-1 text-[8px] font-mono">{`{ x > 0 }`}</div>
            </GalleryItem>
            <GalleryItem title="Stereotype" centered>
                <span className="text-[8px] font-mono text-center">&lt;&lt; service &gt;&gt;</span>
            </GalleryItem>
        </div>

        {/* --- 4. UML Sequence & Comm --- */}
        <SectionTitle>4. UML Sequence & Comm</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Lifeline" centered>
                <svg viewBox="0 0 40 80" className="w-12 h-20">
                    <rect x="5" y="5" width="30" height="15" {...svgProps} />
                    <line x1="20" y1="20" x2="20" y2="75" stroke={theme.colors.text} strokeDasharray="4 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Activation" centered>
                <svg viewBox="0 0 40 80" className="w-12 h-20">
                    <line x1="20" y1="5" x2="20" y2="75" stroke={theme.colors.text} strokeDasharray="4 2" />
                    <rect x="15" y="25" width="10" height="30" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Message" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="5" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="1.5" />
                    <polygon points="90,10 85,7 85,13" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Return Msg" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="90" y1="10" x2="10" y2="10" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="4 2" />
                    <line x1="10" y1="10" x2="15" y2="7" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="10" y1="10" x2="15" y2="13" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Self Message" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <line x1="10" y1="5" x2="10" y2="35" stroke={theme.colors.text} strokeDasharray="4 2" />
                    <path d="M10,10 H30 V20 H15" fill="none" stroke={theme.colors.text} />
                    <polygon points="15,20 20,17 20,23" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Alt Fragment" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" fill="none" stroke={theme.colors.text} />
                    <path d="M5,15 H30 L35,20 H5" fill="none" stroke={theme.colors.text} />
                    <text x="10" y="12" fontSize="6" fill={theme.colors.text}>alt</text>
                    <line x1="5" y1="30" x2="75" y2="30" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Loop Fragment" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" fill="none" stroke={theme.colors.text} />
                    <path d="M5,15 H30 L35,20 H5" fill="none" stroke={theme.colors.text} />
                    <text x="10" y="12" fontSize="6" fill={theme.colors.text}>loop</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Opt Fragment" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" fill="none" stroke={theme.colors.text} />
                    <path d="M5,15 H30 L35,20 H5" fill="none" stroke={theme.colors.text} />
                    <text x="10" y="12" fontSize="6" fill={theme.colors.text}>opt</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Create Msg" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="5" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="4 2" />
                    <polygon points="90,10 85,7 85,13" fill={theme.colors.text} />
                    <text x="50" y="8" fontSize="6" textAnchor="middle" fill={theme.colors.text}>&lt;&lt;create&gt;&gt;</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Destroy" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="10" y1="10" x2="30" y2="30" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="30" y1="10" x2="10" y2="30" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Actor Lifeline" centered>
                <svg viewBox="0 0 40 80" className="w-12 h-20">
                    <circle cx="20" cy="10" r="5" {...svgProps} />
                    <line x1="20" y1="15" x2="20" y2="75" stroke={theme.colors.text} strokeDasharray="4 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Boundary" centered>
                <svg viewBox="0 0 40 80" className="w-12 h-20">
                    <path d="M20,10 H30 M15,10 V20" stroke={theme.colors.text} />
                    <circle cx="20" cy="15" r="5" fill="none" stroke={theme.colors.text} />
                    <line x1="10" y1="15" x2="10" y2="75" stroke={theme.colors.text} strokeDasharray="4 2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. UML State & Activity --- */}
        <SectionTitle>5. UML State & Activity</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="State" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="8" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>State</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Initial State" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="10" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Final State" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <circle cx="20" cy="20" r="6" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Action" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="15" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>Action</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Fork/Join Horiz" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="15" width="50" height="10" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Fork/Join Vert" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                    <rect x="15" y="5" width="10" height="50" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Composite State" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" rx="8" {...svgProps} />
                    <line x1="5" y1="20" x2="75" y2="20" stroke={theme.colors.text} />
                    <text x="40" y="14" fontSize="6" fill={theme.colors.text} textAnchor="middle">Composite</text>
                    <path d="M55,45 H65 A5,5 0 0,1 70,50" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="History State" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" {...svgProps} />
                    <text x="20" y="24" fontSize="12" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">H</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Deep History" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" {...svgProps} />
                    <text x="20" y="24" fontSize="10" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">H*</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Junction" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="8" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Choice" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <polygon points="20,5 35,20 20,35 5,20" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Entry Point" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. UML Use Case --- */}
        <SectionTitle>6. UML Use Case</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Actor" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-20">
                    <circle cx="20" cy="10" r="8" {...svgProps} />
                    <line x1="20" y1="18" x2="20" y2="40" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="5" y1="25" x2="35" y2="25" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="20" y1="40" x2="5" y2="55" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="20" y1="40" x2="35" y2="55" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Use Case" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <ellipse cx="40" cy="20" rx="35" ry="15" {...svgProps} />
                    <text x="40" y="23" {...textStyle}>Use Case</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="System Boundary" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" fill="none" stroke={theme.colors.text} />
                    <text x="40" y="15" fontSize="6" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">System</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Include" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                    <text x="50" y="8" fontSize="6" fill={theme.colors.text} textAnchor="middle">&lt;&lt;include&gt;&gt;</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Extend" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                    <text x="50" y="8" fontSize="6" fill={theme.colors.text} textAnchor="middle">&lt;&lt;extend&gt;&gt;</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Generalization" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="85" y2="10" stroke={theme.colors.text} />
                    <polygon points="85,5 95,10 85,15" stroke={theme.colors.text} fill="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Assoc Direct" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Assoc Bidirect" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Extension Point" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <ellipse cx="40" cy="30" rx="35" ry="25" {...svgProps} />
                    <line x1="10" y1="30" x2="70" y2="30" stroke={theme.colors.text} />
                    <text x="40" y="20" fontSize="6" fill={theme.colors.text} textAnchor="middle">Use Case</text>
                    <text x="40" y="45" fontSize="4" fill={theme.colors.text} textAnchor="middle">extension points</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Actor System" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-20">
                    <rect x="5" y="10" width="30" height="40" {...svgProps} />
                    <text x="20" y="30" fontSize="6" fill={theme.colors.text} textAnchor="middle">API</text>
                    <text x="20" y="15" fontSize="4" fill={theme.colors.text} textAnchor="middle">&lt;&lt;system&gt;&gt;</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Collab" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <ellipse cx="30" cy="20" rx="25" ry="15" stroke={theme.colors.text} fill="none" strokeDasharray="4 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Note Link" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Entity Relationship (ERD) --- */}
        <SectionTitle>7. Entity Relationship (ERD)</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Entity" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>ENTITY</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Weak Entity" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <rect x="8" y="8" width="64" height="24" fill="none" stroke={theme.colors.text} />
                    <text x="40" y="22" {...textStyle}>WEAK</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Attribute" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <ellipse cx="40" cy="20" rx="35" ry="15" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>Attr</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Key Attribute" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <ellipse cx="40" cy="20" rx="35" ry="15" {...svgProps} />
                    <text x="40" y="22" {...textStyle} textDecoration="underline">Key</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Relationship" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <polygon points="40,5 75,30 40,55 5,30" {...svgProps} />
                    <text x="40" y="32" {...textStyle}>Relates</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Multivalued" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <ellipse cx="40" cy="20" rx="35" ry="15" {...svgProps} />
                    <ellipse cx="40" cy="20" rx="30" ry="12" fill="none" stroke={theme.colors.text} />
                    <text x="40" y="22" {...textStyle}>Multi</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Derived Attr" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <ellipse cx="40" cy="20" rx="35" ry="15" {...svgProps} strokeDasharray="4 2" />
                    <text x="40" y="22" {...textStyle}>Derived</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Total Partic." centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="5" y1="8" x2="75" y2="8" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="5" y1="12" x2="75" y2="12" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Associative" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" {...svgProps} fill="none" />
                    <polygon points="40,5 75,30 40,55 5,30" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Weak Rel" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <polygon points="40,5 75,30 40,55 5,30" {...svgProps} />
                    <polygon points="40,10 70,30 40,50 10,30" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cardinality 1" centered>
                <div className="text-xl font-bold font-mono">1</div>
            </GalleryItem>
            <GalleryItem title="Cardinality N" centered>
                <div className="text-xl font-bold font-mono">N</div>
            </GalleryItem>
        </div>

        {/* --- 8. Data Flow Diagrams (DFD) --- */}
        <SectionTitle>8. Data Flow Diagrams (DFD)</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Process" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="5" {...svgProps} />
                    <line x1="5" y1="15" x2="75" y2="15" stroke={theme.colors.text} />
                    <text x="40" y="25" {...textStyle}>Process</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="External Entity" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>User</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Store" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <line x1="5" y1="10" x2="75" y2="10" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="5" y1="30" x2="75" y2="30" stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="40" y="22" {...textStyle}>Store</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Flow" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <path d="M10,20 Q50,5 90,20" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <text x="50" y="15" fontSize="6" fill={theme.colors.text} textAnchor="middle">Data</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Bidirect Flow" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <path d="M10,20 H90" stroke={theme.colors.text} markerStart="url(#arrowhead)" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Control Flow" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <path d="M10,20 H90" stroke={theme.colors.text} strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Gane Process" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="5" {...svgProps} />
                    <line x1="5" y1="15" x2="75" y2="15" stroke={theme.colors.text} />
                    <text x="40" y="25" {...textStyle}>1.0</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Gane Store" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <path d="M5,10 H75 V30 H5 V10" fill="none" stroke={theme.colors.text} />
                    <line x1="15" y1="10" x2="15" y2="30" stroke={theme.colors.text} />
                    <text x="10" y="22" fontSize="8" fontWeight="bold" fill={theme.colors.text}>D1</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Yourdon Entity" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Trust Bound" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <path d="M5,20 H75" stroke={theme.colors.error} strokeDasharray="4 2" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Machine Bound" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Packet" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,10 H35 L20,30 Z" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 9. UI & UX Flows --- */}
        <SectionTitle>9. UI & UX Flows</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Screen" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="10" y="5" width="40" height="70" rx="3" {...svgProps} />
                    <line x1="10" y1="15" x2="50" y2="15" stroke={theme.colors.text} strokeWidth="0.5" />
                    <rect x="20" y="65" width="20" height="2" rx="1" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Action" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="10" width="70" height="20" rx="10" fill={theme.colors.primary} />
                    <text x="40" y="22" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">Tap</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Decision" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <polygon points="30,5 55,30 30,55 5,30" stroke={theme.colors.secondary} fill="none" strokeWidth="1.5" />
                    <text x="30" y="32" fontSize="12" fill={theme.colors.text} textAnchor="middle">?</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="User Action" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="5" fill={theme.colors.text} />
                    <circle cx="30" cy="30" r="15" stroke={theme.colors.text} fill="none" opacity="0.5" />
                    <circle cx="30" cy="30" r="25" stroke={theme.colors.text} fill="none" opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Gesture Swipe" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="15" cy="30" r="5" fill={theme.colors.primary} opacity="0.5" />
                    <path d="M15,30 H45" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Gesture Tap" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="10" fill="none" stroke={theme.colors.primary} />
                    <circle cx="30" cy="30" r="5" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Scroll" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                    <rect x="15" y="5" width="10" height="50" rx="5" fill="none" stroke={theme.colors.text} />
                    <circle cx="20" cy="15" r="3" fill={theme.colors.text} />
                    <path d="M20,25 V40" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Modal" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="5" y="5" width="50" height="50" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="20" width="30" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Email" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,10 H55 V30 H5 Z" {...svgProps} />
                    <path d="M5,10 L30,25 L55,10" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Browser" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...svgProps} />
                    <line x1="5" y1="12" x2="55" y2="12" stroke={theme.colors.text} strokeWidth="0.5" />
                    <circle cx="10" cy="8" r="1" fill={theme.colors.text} />
                    <circle cx="13" cy="8" r="1" fill={theme.colors.text} />
                    <circle cx="16" cy="8" r="1" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Keyboard" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="20" width="50" height="15" rx="2" {...svgProps} />
                    <rect x="10" y="23" width="5" height="4" fill={theme.colors.text} opacity="0.2" />
                    <rect x="17" y="23" width="5" height="4" fill={theme.colors.text} opacity="0.2" />
                    <rect x="24" y="23" width="5" height="4" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Notification" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="10" y="10" width="40" height="12" rx="2" fill={theme.colors.primary} />
                    <text x="30" y="18" fontSize="6" fill="white" textAnchor="middle">New Msg</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Error State" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="15" fill="none" stroke={theme.colors.error} />
                    <path d="M25,25 L35,35 M35,25 L25,35" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Loading" centered>
                <Icons.Refresh size="lg" className="animate-spin text-gray-400"/>
            </GalleryItem>
            <GalleryItem title="Success" centered>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icons.Check size="md" className="text-green-600"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Tooltip" centered>
                <div className="bg-black text-white px-2 py-1 rounded text-[8px] relative">
                    Help
                    <div className="absolute -bottom-1 left-2 w-2 h-2 bg-black transform rotate-45"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Progress" centered>
                <div className="w-full px-2">
                    <div className="h-1 bg-gray-200 rounded w-full overflow-hidden">
                        <div className="h-full w-2/3 bg-blue-500"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Toggle" centered>
                <div className="w-8 h-4 bg-green-500 rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 10. Logic & Circuits --- */}
        <SectionTitle>10. Logic & Circuits</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="AND Gate" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M20,10 H40 A20,20 0 0,1 40,50 H20 Z" {...svgProps} />
                    <line x1="5" y1="20" x2="20" y2="20" stroke={theme.colors.text} />
                    <line x1="5" y1="40" x2="20" y2="40" stroke={theme.colors.text} />
                    <line x1="60" y1="30" x2="75" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="OR Gate" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M20,10 Q35,10 50,30 Q35,50 20,50 Q30,30 20,10" {...svgProps} />
                    <line x1="5" y1="20" x2="20" y2="20" stroke={theme.colors.text} />
                    <line x1="5" y1="40" x2="20" y2="40" stroke={theme.colors.text} />
                    <line x1="50" y1="30" x2="75" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="NOT Gate" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <polygon points="25,15 55,30 25,45" {...svgProps} />
                    <circle cx="60" cy="30" r="3" {...svgProps} />
                    <line x1="10" y1="30" x2="25" y2="30" stroke={theme.colors.text} />
                    <line x1="63" y1="30" x2="75" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Buffer" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <polygon points="25,15 55,30 25,45" {...svgProps} />
                    <line x1="10" y1="30" x2="25" y2="30" stroke={theme.colors.text} />
                    <line x1="55" y1="30" x2="75" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="XOR Gate" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M25,10 Q40,10 55,30 Q40,50 25,50 Q35,30 25,10" {...svgProps} />
                    <path d="M18,10 Q28,30 18,50" fill="none" stroke={theme.colors.text} />
                    <line x1="5" y1="20" x2="20" y2="20" stroke={theme.colors.text} />
                    <line x1="5" y1="40" x2="20" y2="40" stroke={theme.colors.text} />
                    <line x1="55" y1="30" x2="75" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="NAND Gate" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M20,10 H40 A20,20 0 0,1 40,50 H20 Z" {...svgProps} />
                    <circle cx="63" cy="30" r="3" {...svgProps} />
                    <line x1="5" y1="20" x2="20" y2="20" stroke={theme.colors.text} />
                    <line x1="5" y1="40" x2="20" y2="40" stroke={theme.colors.text} />
                    <line x1="66" y1="30" x2="75" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="NOR Gate" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M20,10 Q35,10 50,30 Q35,50 20,50 Q30,30 20,10" {...svgProps} />
                    <circle cx="53" cy="30" r="3" {...svgProps} />
                    <line x1="5" y1="20" x2="20" y2="20" stroke={theme.colors.text} />
                    <line x1="5" y1="40" x2="20" y2="40" stroke={theme.colors.text} />
                    <line x1="56" y1="30" x2="75" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Resistor" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <path d="M5,10 H20 L25,5 L35,15 L45,5 L55,15 L60,10 H75" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Capacitor" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="20" y1="5" x2="20" y2="15" stroke={theme.colors.text} />
                    <line x1="10" y1="15" x2="30" y2="15" stroke={theme.colors.text} />
                    <line x1="10" y1="25" x2="30" y2="25" stroke={theme.colors.text} />
                    <line x1="20" y1="25" x2="20" y2="35" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Ground" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="20" y1="5" x2="20" y2="20" stroke={theme.colors.text} />
                    <line x1="10" y1="20" x2="30" y2="20" stroke={theme.colors.text} />
                    <line x1="13" y1="25" x2="27" y2="25" stroke={theme.colors.text} />
                    <line x1="16" y1="30" x2="24" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Source" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="10" y1="20" x2="30" y2="20" stroke={theme.colors.text} />
                    <line x1="10" y1="15" x2="10" y2="25" stroke={theme.colors.text} />
                    <line x1="30" y1="10" x2="30" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Switch" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <line x1="5" y1="20" x2="20" y2="20" stroke={theme.colors.text} />
                    <circle cx="20" cy="20" r="2" fill={theme.colors.text} />
                    <line x1="20" y1="20" x2="40" y2="10" stroke={theme.colors.text} />
                    <circle cx="40" cy="20" r="2" fill={theme.colors.text} />
                    <line x1="40" y1="20" x2="55" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 11. Network Diagram --- */}
        <SectionTitle>11. Network Diagram</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Router" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} />
                    <path d="M20,20 L40,40 M20,40 L40,20" stroke={theme.colors.text} />
                    <path d="M15,30 L20,30 M40,30 L45,30 M30,15 L30,20 M30,40 L30,45" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Switch" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="15" width="40" height="30" rx="2" {...svgProps} />
                    <path d="M15,25 L25,25 L20,20 M35,35 L45,35 L40,40" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Server" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="10" y="10" width="40" height="60" rx="2" {...svgProps} />
                    <line x1="15" y1="20" x2="45" y2="20" stroke={theme.colors.text} />
                    <line x1="15" y1="35" x2="45" y2="35" stroke={theme.colors.text} />
                    <line x1="15" y1="50" x2="45" y2="50" stroke={theme.colors.text} />
                    <circle cx="40" cy="60" r="2" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Firewall" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,30 L10,50 H50 V30" stroke={theme.colors.text} fill="none" />
                    <path d="M10,30 L10,10 L15,10 V30 M20,30 V10 L25,10 V30 M30,30 V10 L35,10 V30 M40,30 V10 L45,10 V30 M50,30 V10" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cloud" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M20,45 Q10,45 10,35 Q10,25 25,25 Q30,10 50,15 Q65,10 70,30 Q80,30 80,40 Q80,50 65,50 H20 Z" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Workstation" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="30" rx="2" {...svgProps} />
                    <path d="M20,40 L15,50 H45 L40,40" stroke={theme.colors.text} fill="none" />
                    <line x1="15" y1="50" x2="45" y2="50" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Laptop" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="10" y="5" width="40" height="25" rx="2" {...svgProps} />
                    <path d="M5,30 L55,30 L50,35 H10 Z" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Phone" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                    <rect x="5" y="5" width="30" height="50" rx="4" {...svgProps} />
                    <line x1="15" y1="50" x2="25" y2="50" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Wireless AP" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="45" r="3" fill={theme.colors.text} />
                    <path d="M20,35 Q30,25 40,35" fill="none" stroke={theme.colors.text} />
                    <path d="M10,25 Q30,5 50,25" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Printer" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="20" width="40" height="20" rx="2" {...svgProps} />
                    <path d="M15,20 V10 H45 V20" fill="none" stroke={theme.colors.text} />
                    <path d="M15,40 V50 H45 V40" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Storage" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="10" {...svgProps} />
                    <rect x="10" y="20" width="40" height="10" {...svgProps} />
                    <rect x="10" y="30" width="40" height="10" {...svgProps} />
                    <rect x="10" y="40" width="40" height="10" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Link" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <line x1="5" y1="10" x2="55" y2="10" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 12. Cloud Architecture --- */}
        <SectionTitle>12. Cloud Architecture</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="VPC" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" rx="4" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="12" y="15" fontSize="6" fill={theme.colors.primary} fontWeight="bold">VPC</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Availability Zone" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" rx="4" fill="none" stroke={theme.colors.secondary} strokeWidth="1.5" strokeDasharray="2 2" />
                    <text x="12" y="15" fontSize="6" fill={theme.colors.secondary} fontWeight="bold">AZ</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Subnet" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.3" />
                    <text x="12" y="15" fontSize="6" fill={theme.colors.text} opacity="0.5">Subnet</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Load Balancer" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" rx="4" stroke={theme.colors.primary} fill="none" />
                    <path d="M15,30 H45 M30,15 V45" stroke={theme.colors.primary} />
                    <circle cx="30" cy="30" r="12" stroke={theme.colors.primary} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Lambda / Function" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M30,10 L50,50 H10 Z" fill="none" stroke={theme.colors.warning} strokeWidth="1.5" />
                    <text x="30" y="40" fontSize="16" fontWeight="bold" fill={theme.colors.warning} textAnchor="middle">λ</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Bucket" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,15 L15,50 H45 L50,15 H10" fill="none" stroke={theme.colors.info} strokeWidth="1.5" />
                    <path d="M10,15 Q30,25 50,15" fill="none" stroke={theme.colors.info} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Database" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,15 A20,5 0 0,1 50,15 A20,5 0 0,1 10,15" fill="none" stroke={theme.colors.text} />
                    <path d="M10,15 V45 A20,5 0 0,0 50,45 V15" fill="none" stroke={theme.colors.text} />
                    <path d="M10,30 A20,5 0 0,0 50,30" fill="none" stroke={theme.colors.text} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Queue" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="5" y="5" width="10" height="20" stroke={theme.colors.text} fill="none" />
                    <rect x="20" y="5" width="10" height="20" stroke={theme.colors.text} fill="none" />
                    <rect x="35" y="5" width="10" height="20" stroke={theme.colors.text} fill="none" />
                    <rect x="50" y="5" width="5" height="20" stroke={theme.colors.text} fill="none" strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cache" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" rx="4" stroke={theme.colors.success} fill="none" />
                    <path d="M15,15 H45 M15,25 H45 M15,35 H45 M15,45 H45" stroke={theme.colors.success} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="CDN" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" stroke={theme.colors.accent} fill="none" />
                    <path d="M30,10 L30,50 M10,30 L50,30" stroke={theme.colors.accent} />
                    <circle cx="30" cy="30" r="5" fill={theme.colors.accent} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Docker" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="25" y="10" width="10" height="10" fill={theme.colors.info} />
                    <rect x="10" y="25" width="10" height="10" fill={theme.colors.info} />
                    <rect x="25" y="25" width="10" height="10" fill={theme.colors.info} />
                    <rect x="40" y="25" width="10" height="10" fill={theme.colors.info} />
                    <path d="M5,40 Q30,50 55,40" fill="none" stroke={theme.colors.info} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Kubernetes" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" stroke={theme.colors.primary} fill="none" />
                    <path d="M30,10 L47,20 L47,40 L30,50 L13,40 L13,20 Z" fill="none" stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 13. Organization Charts --- */}
        <SectionTitle>13. Organization Charts</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="CEO / Exec" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="4" {...svgProps} strokeWidth="2" />
                    <text x="40" y="22" {...textStyle} fontWeight="bold">CEO</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Manager" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="2" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>Manager</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Staff" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>Staff</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Assistant" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="2" {...svgProps} />
                    <path d="M10,5 V35" stroke={theme.colors.text} />
                    <text x="45" y="22" {...textStyle}>Assistant</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Consultant" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="2" fill="none" stroke={theme.colors.text} strokeDasharray="4 2" />
                    <text x="40" y="22" {...textStyle}>Consultant</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Link" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,0 V40" stroke={theme.colors.text} />
                    <path d="M0,20 H40" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dotted Link" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,0 V40" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Vacancy" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="2" fill="none" stroke={theme.colors.text} opacity="0.5" />
                    <text x="40" y="22" {...textStyle} fillOpacity="0.5">Vacant</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Department" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="15" width="90" height="40" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="4 4" />
                    <rect x="5" y="5" width="40" height="10" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <text x="25" y="11" fontSize="6" fill={theme.colors.text} textAnchor="middle">Sales</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Team Lead" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" rx="2" fill={theme.colors.primary + '20'} stroke={theme.colors.primary} />
                    <text x="40" y="22" {...textStyle} fill={theme.colors.primary}>Lead</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Co-Head" centered>
                <div className="flex w-full px-2">
                    <div className="flex-1 border-r border-black p-1 text-center text-[6px]">A</div>
                    <div className="flex-1 p-1 text-center text-[6px]">B</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Divider" centered>
                <div className="w-full h-px bg-black opacity-20"></div>
            </GalleryItem>
        </div>

        {/* --- 14. Value Stream Mapping (VSM) --- */}
        <SectionTitle>14. Value Stream Mapping (VSM)</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Customer/Supp" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,5 H55 V15 L30,25 L5,15 Z" {...svgProps} />
                    <path d="M5,15 V35 H55 V15" {...svgProps} />
                    <text x="30" y="25" fontSize="6" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">Cust</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Process Box" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>Process</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Box" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <line x1="5" y1="15" x2="75" y2="15" stroke={theme.colors.text} />
                    <text x="40" y="11" fontSize="4" fill={theme.colors.text} textAnchor="middle">Data</text>
                    <text x="10" y="25" fontSize="4" fill={theme.colors.text}>C/T: 20s</text>
                    <text x="10" y="32" fontSize="4" fill={theme.colors.text}>C/O: 5m</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Inventory" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,10 L35,35 H5 Z" {...svgProps} fill="none" />
                    <text x="20" y="30" fontSize="12" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">I</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Shipment" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="15" width="40" height="20" {...svgProps} />
                    <rect x="45" y="20" width="10" height="15" {...svgProps} />
                    <circle cx="15" cy="35" r="3" fill={theme.colors.text} />
                    <circle cx="35" cy="35" r="3" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Push Arrow" centered>
                <svg viewBox="0 0 80 30" className="w-20 h-8">
                    <line x1="5" y1="15" x2="75" y2="15" stroke={theme.colors.text} strokeWidth="4" />
                    <polygon points="55,5 75,15 55,25" fill={theme.colors.text} />
                    <rect x="15" y="10" width="10" height="10" fill={theme.colors.surface} />
                    <rect x="30" y="10" width="10" height="10" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Electronic Info" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="5" y1="10" x2="75" y2="10" stroke={theme.colors.text} />
                    <path d="M20,10 L25,5 M35,10 L40,5 M50,10 L55,5" stroke={theme.colors.text} fill="none" />
                    <polygon points="70,7 75,10 70,13" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Manual Info" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="5" y1="10" x2="75" y2="10" stroke={theme.colors.text} />
                    <polygon points="70,7 75,10 70,13" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Kanban Post" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-14">
                    <rect x="15" y="5" width="2" height="50" fill={theme.colors.text} />
                    <rect x="5" y="10" width="20" height="15" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Operator" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="15" r="5" {...svgProps} />
                    <path d="M20,20 V35 M10,25 H30 M10,35 H30" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Kaizen Burst" centered>
                <svg viewBox="0 0 60 50" className="w-16 h-14">
                    <polygon points="30,5 40,20 55,15 45,30 55,45 35,40 25,55 20,40 5,45 15,30 5,15 20,20" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Supermarket" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,35 V15 Q5,5 30,5 Q55,5 55,15 V35" fill="none" stroke={theme.colors.text} />
                    <line x1="5" y1="15" x2="55" y2="15" stroke={theme.colors.text} />
                    <line x1="5" y1="25" x2="55" y2="25" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 15. Mind Mapping --- */}
        <SectionTitle>15. Mind Mapping</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Central Idea" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <ellipse cx="50" cy="30" rx="40" ry="25" {...svgProps} strokeWidth="3" />
                    <text x="50" y="31" fontSize="10" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">IDEA</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Main Topic" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <path d="M5,35 Q50,10 95,35" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <text x="50" y="25" fontSize="8" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">Topic</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Subtopic" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="10" y1="25" x2="90" y2="25" stroke={theme.colors.text} />
                    <text x="50" y="20" fontSize="6" fill={theme.colors.text} textAnchor="middle">Subtopic</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Floating Topic" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="10" width="70" height="20" rx="4" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>Float</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Callout" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <path d="M5,5 H75 V35 H20 L5,45 V5 Z" fill={theme.colors.warning + '20'} stroke={theme.colors.text} />
                    <text x="40" y="22" {...textStyle}>Note</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Relationship" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <path d="M5,30 Q40,10 75,30" fill="none" stroke={theme.colors.accent} strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Boundary" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="5" y="5" width="70" height="50" rx="8" fill="none" stroke={theme.colors.text} strokeDasharray="4 4" strokeOpacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Icon: Priority" centered>
                <div className="w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center text-[10px] font-bold">1</div>
            </GalleryItem>
            <GalleryItem title="Icon: Flag" centered>
                <Icons.Flag size="md" className="text-red-500"/>
            </GalleryItem>
            <GalleryItem title="Icon: Progress" centered>
                <div className="w-6 h-6 border-2 border-green-500 rounded-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-50" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 50%)' }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Branch Line" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,35 C20,35 20,5 55,5" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Summary Bracket" centered>
                <svg viewBox="0 0 20 60" className="w-6 h-16">
                    <path d="M5,5 H10 Q15,5 15,30 Q15,55 10,55 H5" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 16. Site Maps --- */}
        <SectionTitle>16. Site Maps</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Home Page" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="40" rx="2" {...svgProps} strokeWidth="2" />
                    <text x="40" y="28" {...textStyle} fontWeight="bold">Home</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Standard Page" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="40" rx="2" {...svgProps} />
                    <text x="40" y="28" {...textStyle}>Page</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Sub-section" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="40" rx="2" {...svgProps} strokeDasharray="4 2" />
                    <text x="40" y="28" {...textStyle} opacity="0.6">Section</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Login" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="40" rx="2" fill={theme.colors.text + '20'} stroke={theme.colors.text} />
                    <text x="40" y="28" {...textStyle}>Login</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Form / Input" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <polygon points="5,5 75,5 70,45 10,45" {...svgProps} />
                    <text x="40" y="28" {...textStyle}>Form</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Gallery" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="40" rx="2" {...svgProps} />
                    <rect x="15" y="15" width="10" height="10" fill={theme.colors.text} opacity="0.2" />
                    <rect x="35" y="15" width="10" height="10" fill={theme.colors.text} opacity="0.2" />
                    <rect x="55" y="15" width="10" height="10" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Search" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="40" rx="2" {...svgProps} />
                    <circle cx="60" cy="25" r="5" stroke={theme.colors.text} fill="none" />
                    <line x1="63" y1="28" x2="68" y2="33" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="404 Page" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <path d="M5,5 H75 L70,45 H10 Z" fill={theme.colors.error + '20'} stroke={theme.colors.error} />
                    <text x="40" y="28" fontSize="8" fontWeight="bold" fill={theme.colors.error} textAnchor="middle">404</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="External Link" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="40" rx="2" {...svgProps} strokeDasharray="2 2" />
                    <path d="M55,15 L65,15 L65,25 M65,15 L50,30" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Database" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,10 A20,5 0 0,1 50,10 A20,5 0 0,1 10,10" {...svgProps} />
                    <path d="M10,10 V30 A20,5 0 0,0 50,30 V10" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Connector" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <line x1="20" y1="0" x2="20" y2="40" stroke={theme.colors.text} />
                    <line x1="0" y1="20" x2="40" y2="20" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Stack" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="10" y="5" width="60" height="30" fill="white" stroke={theme.colors.text} />
                    <rect x="5" y="10" width="60" height="30" fill="white" stroke={theme.colors.text} />
                    <rect x="15" y="15" width="60" height="30" fill="white" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 17. Process Engineering (P&ID) --- */}
        <SectionTitle>17. Process Engineering (P&ID)</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Tank" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="10" y="10" width="40" height="60" rx="5" {...svgProps} />
                    <line x1="10" y1="20" x2="50" y2="20" stroke={theme.colors.text} />
                    <line x1="10" y1="60" x2="50" y2="60" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pump" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" {...svgProps} />
                    <line x1="30" y1="10" x2="30" y2="30" stroke={theme.colors.text} />
                    <line x1="30" y1="30" x2="48" y2="20" stroke={theme.colors.text} />
                    <polygon points="25,50 35,50 30,10" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Valve" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <polygon points="10,10 50,30 50,10 10,30" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Control Valve" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <polygon points="10,30 50,50 50,30 10,50" {...svgProps} />
                    <path d="M30,40 V20 M20,20 A10,10 0 0,1 40,20" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Heat Exchanger" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <circle cx="20" cy="20" r="15" {...svgProps} />
                    <rect x="35" y="10" width="40" height="20" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mixer" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <path d="M10,10 L20,70 H40 L50,10" fill="none" stroke={theme.colors.text} />
                    <line x1="30" y1="10" x2="30" y2="60" stroke={theme.colors.text} />
                    <line x1="20" y1="60" x2="40" y2="60" stroke={theme.colors.text} strokeWidth="3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Indicator" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" {...svgProps} />
                    <text x="20" y="24" fontSize="8" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">TI</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Pipe Line" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="0" y1="10" x2="80" y2="10" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Signal Line" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="0" y1="10" x2="80" y2="10" stroke={theme.colors.text} strokeDasharray="4 4" />
                    <line x1="5" y1="5" x2="15" y2="15" stroke={theme.colors.text} strokeWidth="0.5" />
                    <line x1="25" y1="5" x2="35" y2="15" stroke={theme.colors.text} strokeWidth="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Boiler" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="30" rx="5" {...svgProps} />
                    <polygon points="15,40 25,50 35,40 45,50" fill={theme.colors.error} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filter" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                    <path d="M5,10 H35 L20,30 V50 H20" fill="none" stroke={theme.colors.text} />
                    <polygon points="5,10 35,10 20,30" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sensor" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="10" width="20" height="20" rx="2" {...svgProps} />
                    <circle cx="20" cy="20" r="5" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 18. Gantt & Timeline Blocks --- */}
        <SectionTitle>18. Gantt & Timeline Blocks</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Task Bar" centered>
                <div className="w-full h-6 bg-blue-500 rounded flex items-center px-2 text-white text-[8px]">
                    Task Name
                </div>
            </GalleryItem>
            <GalleryItem title="Summary Bar" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <path d="M0,0 H100 V10 L95,20 H5 L0,10 Z" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Milestone" centered>
                <div className="w-6 h-6 transform rotate-45 bg-black"></div>
            </GalleryItem>
            <GalleryItem title="Dependency" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,10 H30 V30 H55" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Progress" centered>
                <div className="w-full h-4 bg-gray-200 rounded overflow-hidden">
                    <div className="h-full w-2/3 bg-green-500"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Deadline" centered>
                <div className="h-full w-px bg-red-500 border-l border-dashed border-red-500 relative">
                    <div className="absolute top-0 -left-2 text-red-500">▼</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Bracket" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <path d="M5,15 V5 H95 V15" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Split Task" centered>
                <div className="flex gap-1 w-full">
                    <div className="h-4 flex-1 bg-blue-500 rounded-l"></div>
                    <div className="h-4 w-4 border-t border-b border-dashed"></div>
                    <div className="h-4 flex-1 bg-blue-500 rounded-r"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Recurring" centered>
                <div className="w-full h-4 bg-purple-500 rounded flex gap-1 overflow-hidden">
                    <div className="w-1 bg-white opacity-20 h-full"></div>
                    <div className="w-1 bg-white opacity-20 h-full"></div>
                    <div className="w-1 bg-white opacity-20 h-full"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Slack" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <rect x="0" y="5" width="50" height="10" fill={theme.colors.primary} />
                    <line x1="50" y1="10" x2="80" y2="10" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Constraint" centered>
                <div className="text-[8px] font-bold text-red-500 border-l-2 border-red-500 pl-1">Mso</div>
            </GalleryItem>
            <GalleryItem title="Note" centered>
                <div className="bg-yellow-100 p-1 text-[6px] w-full border-l-2 border-yellow-500">Delay due to rain</div>
            </GalleryItem>
        </div>

        {/* --- 19. Connectors & Arrows --- */}
        <SectionTitle>19. Connectors & Arrows</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Straight" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="5" y1="10" x2="75" y2="10" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Curved" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <path d="M5,35 Q40,5 75,35" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Elbow" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <path d="M5,35 H40 V5 H75" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Jump" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <path d="M5,10 H35 Q40,0 45,10 H75" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Double" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="10" y1="10" x2="70" y2="10" stroke={theme.colors.text} markerStart="url(#arrowhead)" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dashed" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="5" y1="10" x2="75" y2="10" stroke={theme.colors.text} strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dotted" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="5" y1="10" x2="75" y2="10" stroke={theme.colors.text} strokeDasharray="1 3" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Thick" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="5" y1="10" x2="75" y2="10" stroke={theme.colors.text} strokeWidth="4" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Lightning" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <path d="M5,20 L30,20 L25,35 L50,5 L45,20 L75,20" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Loop" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,50 C10,10 50,10 50,50" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Association" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="5" y1="10" x2="75" y2="10" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Aggregation" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="15" y1="10" x2="75" y2="10" stroke={theme.colors.text} />
                    <polygon points="5,10 10,7 15,10 10,13" fill="white" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 20. Annotations & Notes --- */}
        <SectionTitle>20. Annotations & Notes</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Sticky Note" centered>
                <div className="bg-yellow-200 w-full h-full p-2 shadow-md transform rotate-2 font-hand text-[8px] text-black">
                    Check this!
                </div>
            </GalleryItem>
            <GalleryItem title="Comment" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,5 H55 V25 H35 L20,35 V25 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <text x="30" y="18" fontSize="6" fill={theme.colors.text} textAnchor="middle">Comment</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Bracket" centered>
                <svg viewBox="0 0 20 60" className="w-6 h-16">
                    <path d="M15,5 H5 V55 H15" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Brace" centered>
                <svg viewBox="0 0 20 60" className="w-6 h-16">
                    <path d="M15,5 Q5,5 5,30 Q5,55 15,55" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Callout Line" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <line x1="5" y1="35" x2="30" y2="10" stroke={theme.colors.text} />
                    <line x1="30" y1="10" x2="55" y2="10" stroke={theme.colors.text} />
                    <text x="35" y="8" fontSize="6" fill={theme.colors.text}>Detail</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Reference" centered>
                <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-[10px]">1</div>
            </GalleryItem>
            <GalleryItem title="Revision" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,20 L15,5 L35,5 L50,15 L40,35 L15,35 Z" fill="none" stroke={theme.colors.error} strokeDasharray="2 2" />
                    <text x="25" y="25" fontSize="6" fill={theme.colors.error} textAnchor="middle">Rev A</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Dimension" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <line x1="10" y1="10" x2="70" y2="10" stroke={theme.colors.text} />
                    <line x1="10" y1="5" x2="10" y2="15" stroke={theme.colors.text} />
                    <line x1="70" y1="5" x2="70" y2="15" stroke={theme.colors.text} />
                    <text x="40" y="8" fontSize="6" fill={theme.colors.text} textAnchor="middle">100px</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Stamp: Draft" centered>
                <div className="border-2 border-red-500 text-red-500 px-2 py-1 transform -rotate-12 font-bold opacity-50 text-[10px] uppercase">
                    DRAFT
                </div>
            </GalleryItem>
            <GalleryItem title="Stamp: Appr" centered>
                <div className="border-2 border-green-500 text-green-500 px-2 py-1 transform rotate-6 font-bold opacity-50 text-[10px] uppercase">
                    APPROVED
                </div>
            </GalleryItem>
            <GalleryItem title="Legend Key" centered>
                <div className="flex flex-col gap-1 text-[6px]">
                    <div className="flex gap-1 items-center"><div className="w-2 h-2 bg-blue-500"></div> User</div>
                    <div className="flex gap-1 items-center"><div className="w-2 h-2 bg-green-500"></div> System</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Zone" centered>
                <div className="w-full h-full border-2 border-dashed flex items-center justify-center bg-gray-50 opacity-50 text-[8px] uppercase tracking-widest">
                    Zone A
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
