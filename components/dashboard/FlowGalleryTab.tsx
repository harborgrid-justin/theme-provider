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
            Standardized vector shapes for Flowcharts, BPMN 2.0, UML, UI Flows, Information Architecture, and User Journeys.
        </p>

        {/* --- 1. Standard Flowchart Shapes --- */}
        <SectionTitle>1. Standard Flowchart Shapes</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Start / End" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="15" width="90" height="30" rx="15" ry="15" {...svgProps} />
                    <text x="50" y="31" {...textStyle}>Start</text>
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Process" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="2" {...svgProps} stroke={theme.colors.primary} />
                    <text x="50" y="31" {...textStyle}>Process</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Decision" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="50,5 95,30 50,55 5,30" {...svgProps} stroke={theme.colors.secondary} />
                    <text x="50" y="31" {...textStyle}>?</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Input / Output" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="15,10 95,10 85,50 5,50" {...svgProps} stroke={theme.colors.accent} />
                    <text x="50" y="31" {...textStyle}>I/O</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Document" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M15,5 H85 V45 Q70,55 50,45 Q30,35 15,45 Z" {...svgProps} />
                    <text x="50" y="28" {...textStyle}>Doc</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Multi-Document" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M25,5 H95 V45 Q80,55 60,45 Q40,35 25,45 Z" {...svgProps} fill="none" />
                    <path d="M15,10 H85 V50 Q70,60 50,50 Q30,40 15,50 Z" {...svgProps} fill={theme.colors.surface} />
                    <text x="50" y="33" {...textStyle}>Docs</text>
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Database" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M20,10 A30,5 0 0,1 80,10 A30,5 0 0,1 20,10" {...svgProps} />
                    <path d="M20,10 V50 A30,5 0 0,0 80,50 V10" {...svgProps} />
                    <path d="M20,10 A30,5 0 0,0 80,10" {...svgProps} strokeOpacity="0.2" fill="none" />
                    <text x="50" y="35" {...textStyle}>DB</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Direct Data" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,10 H70 A20,20 0 0,1 70,50 H10 A5,5 0 0,1 10,10" {...svgProps} />
                    <path d="M70,10 A5,20 0 0,1 70,50" {...svgProps} fill="none" />
                    <text x="45" y="32" {...textStyle}>HDD</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Manual Input" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,20 L80,10 V50 H10 Z" {...svgProps} />
                    <text x="45" y="35" {...textStyle}>Input</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Manual Op" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="10,10 90,10 80,50 20,50" {...svgProps} />
                    <text x="50" y="32" {...textStyle}>Op</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Preparation" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <polygon points="10,30 25,10 75,10 90,30 75,50 25,50" {...svgProps} />
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
                    <path d="M10,10 H60 A20,20 0 0,1 60,50 H10 V10" {...svgProps} />
                    <text x="40" y="32" {...textStyle}>Wait</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Display" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M15,10 H70 A20,20 0 0,1 70,50 H15 L5,30 Z" {...svgProps} />
                    <text x="45" y="32" {...textStyle}>Screen</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Subroutine" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" {...svgProps} />
                    <line x1="15" y1="10" x2="15" y2="50" {...svgProps} />
                    <line x1="85" y1="10" x2="85" y2="50" {...svgProps} />
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

        {/* --- 2. BPMN 2.0 Basics --- */}
        <SectionTitle>2. BPMN 2.0 Basics</SectionTitle>
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
        </div>

        {/* --- 3. UML Class Diagram --- */}
        <SectionTitle>3. UML Class Diagram</SectionTitle>
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
        </div>

        {/* --- 4. UML Sequence --- */}
        <SectionTitle>4. UML Sequence</SectionTitle>
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
            <GalleryItem title="Fork/Join" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                    <rect x="15" y="5" width="10" height="50" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Object Node" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="30" {...svgProps} />
                    <text x="40" y="22" {...textStyle}>Object</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Entity Relationship (ERD) --- */}
        <SectionTitle>6. Entity Relationship (ERD)</SectionTitle>
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
        </div>

        {/* --- 7. Data Flow Diagrams (DFD) --- */}
        <SectionTitle>7. Data Flow Diagrams (DFD)</SectionTitle>
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
        </div>

        {/* --- 8. UI Flow & Wireframing --- */}
        <SectionTitle>8. UI Flow & Wireframing</SectionTitle>
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
        </div>

        {/* --- 9. Logic & Boolean --- */}
        <SectionTitle>9. Logic & Boolean</SectionTitle>
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
        </div>

        {/* --- 10. Network & Infrastructure --- */}
        <SectionTitle>10. Network & Infrastructure</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Server" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <rect x="10" y="10" width="40" height="60" rx="2" {...svgProps} />
                    <line x1="15" y1="20" x2="45" y2="20" stroke={theme.colors.text} />
                    <line x1="15" y1="35" x2="45" y2="35" stroke={theme.colors.text} />
                    <line x1="15" y1="50" x2="45" y2="50" stroke={theme.colors.text} />
                    <circle cx="40" cy="60" r="2" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Database" centered>
                <svg viewBox="0 0 60 80" className="w-16 h-20">
                    <path d="M10,15 A20,5 0 0,1 50,15 A20,5 0 0,1 10,15" {...svgProps} />
                    <path d="M10,15 V65 A20,5 0 0,0 50,65 V15" {...svgProps} />
                    <path d="M10,40 A20,5 0 0,0 50,40" stroke={theme.colors.text} fill="none" opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cloud" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M20,45 Q10,45 10,35 Q10,25 25,25 Q30,10 50,15 Q65,10 70,30 Q80,30 80,40 Q80,50 65,50 H20 Z" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Firewall" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,30 L10,50 H50 V30" stroke={theme.colors.text} fill="none" />
                    <path d="M10,30 L10,10 L15,10 V30 M20,30 V10 L25,10 V30 M30,30 V10 L35,10 V30 M40,30 V10 L45,10 V30 M50,30 V10" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="User" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="20" r="10" {...svgProps} />
                    <path d="M10,55 Q30,35 50,55" {...svgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                    <rect x="5" y="5" width="30" height="50" rx="4" {...svgProps} />
                    <line x1="15" y1="50" x2="25" y2="50" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 11. Cloud Architecture --- */}
        <SectionTitle>11. Cloud Architecture</SectionTitle>
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
        </div>

        {/* --- 12. Structural Groups --- */}
        <SectionTitle>12. Structural Groups</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Group Dashed" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="4" fill="none" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="15" y="15" fontSize="8" fill={theme.colors.text} opacity="0.5">Group</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Group Solid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="5" y="5" width="90" height="12" rx="4" fill={theme.colors.text} opacity="0.1" />
                    <text x="50" y="14" fontSize="8" fill={theme.colors.text} textAnchor="middle" fontWeight="bold">Container</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Swimlane Horiz" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="0" y1="30" x2="100" y2="30" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="5" y="15" fontSize="6" fill={theme.colors.text} opacity="0.5" transform="rotate(-90 5,15)">User</text>
                    <text x="5" y="45" fontSize="6" fill={theme.colors.text} opacity="0.5" transform="rotate(-90 5,45)">System</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Swimlane Vert" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="50" y1="0" x2="50" y2="60" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="25" y="8" fontSize="6" fill={theme.colors.text} opacity="0.5" textAnchor="middle">Frontend</text>
                    <text x="75" y="8" fontSize="6" fill={theme.colors.text} opacity="0.5" textAnchor="middle">Backend</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Decision Tree" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="25" y="5" width="10" height="10" rx="2" stroke={theme.colors.text} fill="none" />
                    <path d="M30,15 V25 M30,25 L15,35 M30,25 L45,35" stroke={theme.colors.text} fill="none" />
                    <rect x="10" y="35" width="10" height="10" rx="2" stroke={theme.colors.text} fill="none" />
                    <rect x="40" y="35" width="10" height="10" rx="2" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Loop Block" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,20 H40 A5,5 0 0,1 45,25 V40 A5,5 0 0,1 40,45 H15" stroke={theme.colors.text} fill="none" strokeDasharray="3 3" />
                    <polygon points="15,42 10,45 15,48" fill={theme.colors.text} />
                    <text x="30" y="35" fontSize="8" textAnchor="middle" fill={theme.colors.text} opacity="0.5">Loop</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Parallel Block" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <line x1="30" y1="5" x2="30" y2="15" stroke={theme.colors.text} />
                    <line x1="15" y1="15" x2="45" y2="15" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="20" y1="15" x2="20" y2="25" stroke={theme.colors.text} />
                    <line x1="40" y1="15" x2="40" y2="25" stroke={theme.colors.text} />
                    <rect x="15" y="25" width="10" height="10" stroke={theme.colors.text} fill="none" />
                    <rect x="35" y="25" width="10" height="10" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Optional Path" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <line x1="10" y1="30" x2="50" y2="30" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M15,30 Q30,10 45,30" fill="none" stroke={theme.colors.text} strokeDasharray="3 3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Journey Map" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <path d="M10,30 Q30,10 50,30 T90,20" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                    <circle cx="10" cy="30" r="3" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <circle cx="50" cy="30" r="3" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <circle cx="90" cy="20" r="3" fill={theme.colors.surface} stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Storyboard" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="5" y="10" width="50" height="40" rx="2" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <rect x="5" y="35" width="50" height="15" fill={theme.colors.text} opacity="0.1" />
                    <circle cx="30" cy="25" r="5" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Connector Node" centered>
                <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>A</div>
            </GalleryItem>
            <GalleryItem title="Legend Item" centered>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-red-200 border border-red-400"></div>
                    <span className="text-[8px] opacity-60">Error</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 13. Complex Flow Integrations --- */}
        <SectionTitle>13. Complex Flow Integrations</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Linear Process" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    {arrowMarker}
                    <rect x="5" y="15" width="20" height="10" rx="2" {...svgProps} fill={theme.colors.success + '20'} stroke={theme.colors.success} />
                    <line x1="25" y1="20" x2="40" y2="20" stroke={theme.colors.text} strokeWidth="1" markerEnd="url(#arrowhead)" />
                    <rect x="40" y="15" width="20" height="10" rx="2" {...svgProps} />
                    <line x1="60" y1="20" x2="75" y2="20" stroke={theme.colors.text} strokeWidth="1" markerEnd="url(#arrowhead)" />
                    <rect x="75" y="15" width="20" height="10" rx="2" {...svgProps} fill={theme.colors.error + '20'} stroke={theme.colors.error} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Decision Loop" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    {arrowMarker}
                    <rect x="10" y="25" width="20" height="10" rx="2" {...svgProps} />
                    <line x1="30" y1="30" x2="45" y2="30" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <polygon points="45,30 55,20 65,30 55,40" fill={theme.colors.surface} stroke={theme.colors.warning} />
                    <path d="M55,20 V10 H20 V25" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <line x1="65" y1="30" x2="80" y2="30" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="80" y="25" width="15" height="10" rx="2" {...svgProps} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Parallel Fork" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="25" width="15" height="10" rx="2" {...svgProps} />
                    <line x1="20" y1="30" x2="30" y2="30" stroke={theme.colors.text} />
                    <line x1="30" y1="15" x2="30" y2="45" stroke={theme.colors.text} strokeWidth="2" />
                    <path d="M30,15 H40" stroke={theme.colors.text} /> <rect x="40" y="10" width="20" height="10" rx="2" {...svgProps} />
                    <path d="M30,45 H40" stroke={theme.colors.text} /> <rect x="40" y="40" width="20" height="10" rx="2" {...svgProps} />
                    <path d="M60,15 H70" stroke={theme.colors.text} />
                    <path d="M60,45 H70" stroke={theme.colors.text} />
                    <line x1="70" y1="15" x2="70" y2="45" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="70" y1="30" x2="80" y2="30" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="80" y="25" width="15" height="10" rx="2" {...svgProps} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Data Pipeline" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    {arrowMarker}
                    <path d="M5,10 H15 L10,30 H0 Z" fill={theme.colors.text} opacity="0.2" />
                    <line x1="15" y1="20" x2="25" y2="20" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <circle cx="35" cy="20" r="10" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <line x1="45" y1="20" x2="55" y2="20" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <path d="M60,10 A5,2 0 0,1 70,10 A5,2 0 0,1 60,10" fill="none" stroke={theme.colors.text} />
                    <path d="M60,10 V30 A5,2 0 0,0 70,30 V10" fill="none" stroke={theme.colors.text} />
                    <line x1="70" y1="20" x2="80" y2="20" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="80" y="10" width="15" height="20" rx="1" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Auth Flow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    {arrowMarker}
                    <rect x="5" y="25" width="20" height="10" rx="2" {...svgProps} />
                    <line x1="25" y1="30" x2="35" y2="30" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <polygon points="35,30 45,20 55,30 45,40" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <text x="45" y="32" fontSize="4" fill={theme.colors.text} textAnchor="middle">Auth?</text>
                    <path d="M45,20 V10 H70" fill="none" stroke={theme.colors.success} markerEnd="url(#arrowhead)" />
                    <rect x="70" y="5" width="20" height="10" rx="2" fill={theme.colors.success + '20'} stroke={theme.colors.success} />
                    <path d="M45,40 V50 H70" fill="none" stroke={theme.colors.error} markerEnd="url(#arrowhead)" />
                    <rect x="70" y="45" width="20" height="10" rx="2" fill={theme.colors.error + '20'} stroke={theme.colors.error} />
                </svg>
            </GalleryItem>

            <GalleryItem title="API Cycle" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <circle cx="15" cy="20" r="8" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M23,15 Q50,5 77,15" fill="none" stroke={theme.colors.primary} markerEnd="url(#arrowhead)" />
                    <rect x="80" y="10" width="15" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M77,25 Q50,35 23,25" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Checkout Flow" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    {arrowMarker}
                    <circle cx="15" cy="20" r="5" fill={theme.colors.text} opacity="0.1" />
                    <line x1="20" y1="20" x2="35" y2="20" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="35" y="15" width="10" height="10" rx="1" stroke={theme.colors.text} fill="none" />
                    <line x1="45" y1="20" x2="60" y2="20" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="60" y="15" width="10" height="10" rx="1" stroke={theme.colors.text} fill="none" />
                    <line x1="70" y1="20" x2="85" y2="20" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <circle cx="90" cy="20" r="5" fill={theme.colors.success} />
                </svg>
            </GalleryItem>

            <GalleryItem title="State Machine" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="20" cy="30" r="8" fill="none" stroke={theme.colors.text} />
                    <path d="M28,30 H72" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <circle cx="80" cy="30" r="8" fill={theme.colors.primary + '20'} stroke={theme.colors.primary} />
                    <path d="M76,24 Q50,10 24,24" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Swimlane Flow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <line x1="0" y1="30" x2="100" y2="30" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="10" y="10" width="15" height="10" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M25,15 H35 V45 H45" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="45" y="40" width="15" height="10" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M60,45 H70 V15 H80" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" markerEnd="url(#arrowhead)" />
                    <rect x="80" y="10" width="15" height="10" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Tree Hierarchy" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="50" cy="10" r="5" fill={theme.colors.primary} />
                    <path d="M50,15 L30,30" stroke={theme.colors.text} />
                    <path d="M50,15 L70,30" stroke={theme.colors.text} />
                    <circle cx="30" cy="30" r="5" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <circle cx="70" cy="30" r="5" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M30,35 L20,50" stroke={theme.colors.text} />
                    <path d="M30,35 L40,50" stroke={theme.colors.text} />
                    <rect x="15" y="50" width="10" height="5" fill={theme.colors.text} opacity="0.2" />
                    <rect x="35" y="50" width="10" height="5" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Feedback Loop" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="50" cy="30" r="15" fill="none" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="4 2" />
                    <rect x="42" y="22" width="16" height="16" rx="2" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <path d="M65,30 L62,27 M65,30 L62,33" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Master-Detail" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="20" height="40" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M30,20 H50" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="50" y="10" width="40" height="40" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <rect x="55" y="15" width="30" height="5" fill={theme.colors.text} opacity="0.2" />
                    <rect x="55" y="25" width="20" height="20" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Error Block" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="80" height="40" rx="2" fill="none" stroke={theme.colors.text} strokeDasharray="4 4" />
                    <text x="15" y="20" fontSize="6" fill={theme.colors.text}>Try</text>
                    <rect x="20" y="25" width="20" height="15" rx="1" fill={theme.colors.success + '20'} />
                    <line x1="40" y1="32" x2="55" y2="32" stroke={theme.colors.text} />
                    <rect x="55" y="25" width="20" height="15" rx="1" fill={theme.colors.error + '20'} />
                    <text x="50" y="20" fontSize="6" fill={theme.colors.error}>Catch</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Async Op" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="10" y="10" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M30,20 H50" stroke={theme.colors.text} strokeDasharray="2 2" markerEnd="url(#arrowhead)" />
                    <circle cx="60" cy="20" r="5" fill="none" stroke={theme.colors.text} />
                    <path d="M70,20 H80" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="80" y="15" width="10" height="10" rx="1" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Sync Flow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="20" cy="20" r="5" fill={theme.colors.primary} />
                    <circle cx="80" cy="20" r="5" fill={theme.colors.secondary} />
                    <rect x="40" y="30" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M25,25 L40,35" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <path d="M75,25 L60,35" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>

            <GalleryItem title="CI/CD Pipe" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <circle cx="15" cy="20" r="8" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <text x="15" y="22" fontSize="6" textAnchor="middle" fill={theme.colors.text}>Build</text>
                    <line x1="23" y1="20" x2="37" y2="20" stroke={theme.colors.text} />
                    <circle cx="45" cy="20" r="8" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <text x="45" y="22" fontSize="6" textAnchor="middle" fill={theme.colors.text}>Test</text>
                    <line x1="53" y1="20" x2="67" y2="20" stroke={theme.colors.text} />
                    <circle cx="75" cy="20" r="8" fill={theme.colors.success + '20'} stroke={theme.colors.success} />
                    <text x="75" y="22" fontSize="6" textAnchor="middle" fill={theme.colors.success}>Dep</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Search Logic" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="25" width="20" height="10" rx="2" stroke={theme.colors.text} fill="none" />
                    <line x1="25" y1="30" x2="35" y2="30" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <circle cx="45" cy="30" r="8" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <text x="45" y="32" fontSize="8" textAnchor="middle">?</text>
                    <path d="M53,30 H70" stroke={theme.colors.success} markerEnd="url(#arrowhead)" />
                    <path d="M45,38 V50 H70" stroke={theme.colors.error} fill="none" strokeDasharray="2 2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Wizard" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="5" y="15" width="20" height="10" rx="2" fill={theme.colors.primary} />
                    <line x1="25" y1="20" x2="40" y2="20" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="40" y="15" width="20" height="10" rx="2" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <line x1="60" y1="20" x2="75" y2="20" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="75" y="15" width="20" height="10" rx="2" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Notification" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="10" y="15" width="10" height="10" fill={theme.colors.warning} />
                    <path d="M20,20 H35" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="35" y="10" width="20" height="20" rx="2" fill="none" stroke={theme.colors.text} />
                    <path d="M55,20 H70" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <path d="M70,15 L85,25 L70,35 Z" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="CRUD Cycle" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="50" cy="30" r="15" fill="none" stroke={theme.colors.text} />
                    <text x="50" y="20" fontSize="6" textAnchor="middle" fill={theme.colors.success}>C</text>
                    <text x="60" y="32" fontSize="6" textAnchor="middle" fill={theme.colors.primary}>R</text>
                    <text x="50" y="44" fontSize="6" textAnchor="middle" fill={theme.colors.warning}>U</text>
                    <text x="40" y="32" fontSize="6" textAnchor="middle" fill={theme.colors.error}>D</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Filter Flow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="20" height="40" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <polygon points="40,20 60,20 50,40" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M30,30 H40" stroke={theme.colors.text} />
                    <path d="M50,40 V50 H70" stroke={theme.colors.text} fill="none" markerEnd="url(#arrowhead)" />
                    <rect x="70" y="40" width="20" height="15" rx="2" fill={theme.colors.primary + '20'} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Access Control" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="15" cy="30" r="5" fill={theme.colors.text} />
                    <line x1="20" y1="30" x2="35" y2="30" stroke={theme.colors.text} />
                    <rect x="35" y="20" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M55,25 H70" stroke={theme.colors.success} markerEnd="url(#arrowhead)" />
                    <path d="M55,35 H70" stroke={theme.colors.error} markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Upload Flow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="20" width="15" height="20" fill={theme.colors.text} opacity="0.2" />
                    <path d="M25,30 H40" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <circle cx="50" cy="30" r="8" fill="none" stroke={theme.colors.primary} strokeDasharray="4 2" />
                    <path d="M60,30 H75" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <circle cx="85" cy="30" r="5" fill={theme.colors.success} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Backup Job" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="25" width="10" height="10" rx="2" fill={theme.colors.text} />
                    <path d="M20,30 H35" stroke={theme.colors.text} strokeDasharray="2 2" />
                    <path d="M35,15 H65 V45 H35 Z" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M65,30 H80" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <path d="M80,20 H90 V40 H80 Z" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Analytics" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="15" cy="15" r="3" fill={theme.colors.accent} />
                    <circle cx="15" cy="45" r="3" fill={theme.colors.accent} />
                    <path d="M18,15 L35,30 M18,45 L35,30" stroke={theme.colors.text} opacity="0.5" />
                    <rect x="35" y="20" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M55,30 H75" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <rect x="75" y="10" width="20" height="40" rx="2" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Service Mesh" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="20" cy="30" r="6" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <circle cx="50" cy="15" r="6" fill={theme.colors.surface} stroke={theme.colors.secondary} />
                    <circle cx="50" cy="45" r="6" fill={theme.colors.surface} stroke={theme.colors.secondary} />
                    <circle cx="80" cy="30" r="6" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M26,30 L44,15 M26,30 L44,45 M56,15 L74,30 M56,45 L74,30" stroke={theme.colors.text} strokeWidth="0.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Redux Flow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="40" width="20" height="10" rx="2" fill={theme.colors.text} opacity="0.1" /> {/* View */}
                    <path d="M20,40 V20 H35" fill="none" stroke={theme.colors.text} markerEnd="url(#arrowhead)" />
                    <circle cx="45" cy="20" r="8" fill={theme.colors.surface} stroke={theme.colors.warning} /> {/* Action */}
                    <path d="M53,20 H65" stroke={theme.colors.text} />
                    <rect x="65" y="10" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.primary} /> {/* Store */}
                    <path d="M75,30 V45 H30" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Git Graph" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <line x1="10" y1="30" x2="90" y2="30" stroke={theme.colors.primary} strokeWidth="2" />
                    <circle cx="20" cy="30" r="4" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <path d="M20,30 Q35,10 50,10 T80,30" fill="none" stroke={theme.colors.secondary} strokeWidth="1.5" />
                    <circle cx="50" cy="10" r="4" fill={theme.colors.surface} stroke={theme.colors.secondary} />
                    <circle cx="50" cy="30" r="4" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <circle cx="80" cy="30" r="4" fill={theme.colors.surface} stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
