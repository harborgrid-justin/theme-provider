import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

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
      fontSize: "10px",
      fontFamily: theme.typography.fontFamily === 'mono' ? 'monospace' : 'inherit',
      textAnchor: "middle" as const,
      dominantBaseline: "middle" as const,
      fontWeight: "bold",
      pointerEvents: "none" as const
  };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Flow & Process Gallery (125+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Standardized vector shapes for Flowcharts, BPMN 2.0, UML Activity/State diagrams, and Logic circuits.
        </p>

        {/* --- 1. Standard Flowchart Shapes --- */}
        <SectionTitle>Standard Flowchart Shapes</SectionTitle>
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
        
        {/* --- 2. BPMN Events --- */}
        <SectionTitle>BPMN Events</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Start: None" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="1.5" />
                </svg>
             </GalleryItem>
             <GalleryItem title="Start: Message" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="1.5" />
                    <rect x="10" y="13" width="20" height="14" rx="1" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M10,13 L20,20 L30,13" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
             </GalleryItem>
             <GalleryItem title="Start: Timer" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="1.5" />
                    <circle cx="20" cy="20" r="10" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M20,20 L20,14 M20,20 L24,24" stroke={theme.colors.text} strokeWidth="1" strokeLinecap="round" />
                </svg>
             </GalleryItem>
             <GalleryItem title="Start: Error" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="1.5" />
                    <path d="M13,28 L20,12 L27,28 M25,28 L22,22 L18,22 L15,28" stroke={theme.colors.text} strokeWidth="1" fill="none" strokeLinejoin="round"/>
                </svg>
             </GalleryItem>

             <GalleryItem title="Inter: None" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="1" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
             </GalleryItem>
             <GalleryItem title="Inter: Message" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="1" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="13" y="15" width="14" height="10" rx="1" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M13,15 L20,20 L27,15" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
             </GalleryItem>
             <GalleryItem title="Inter: Timer" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="1" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <circle cx="20" cy="20" r="8" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M20,20 L20,15 M20,20 L23,23" stroke={theme.colors.text} strokeWidth="1" strokeLinecap="round" />
                </svg>
             </GalleryItem>
             <GalleryItem title="Inter: Link" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="1" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M25,15 L25,25 L15,25 L15,15 Z" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                </svg>
             </GalleryItem>

             <GalleryItem title="End: None" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="3" />
                </svg>
             </GalleryItem>
             <GalleryItem title="End: Message" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="3" />
                    <rect x="10" y="13" width="20" height="14" rx="1" fill={theme.colors.text} stroke="none" />
                    <path d="M10,13 L20,20 L30,13" fill="none" stroke={theme.colors.surface} strokeWidth="1" />
                </svg>
             </GalleryItem>
             <GalleryItem title="End: Error" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="3" />
                    <path d="M13,28 L20,12 L27,28 M25,28 L22,22 L18,22 L15,28" fill={theme.colors.text} stroke="none"/>
                </svg>
             </GalleryItem>
             <GalleryItem title="End: Terminate" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...svgProps} strokeWidth="3" />
                    <circle cx="20" cy="20" r="10" fill={theme.colors.text} stroke="none" />
                </svg>
             </GalleryItem>
        </div>

        {/* --- 3. BPMN Gateways --- */}
        <SectionTitle>BPMN Gateways</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Exclusive (XOR)" centered>
                 <svg viewBox="0 0 40 40" className="w-12 h-12">
                     <polygon points="20,2 38,20 20,38 2,20" {...svgProps} />
                     <path d="M15,15 L25,25 M25,15 L15,25" stroke={theme.colors.text} strokeWidth="2" />
                 </svg>
            </GalleryItem>
            <GalleryItem title="Parallel (AND)" centered>
                 <svg viewBox="0 0 40 40" className="w-12 h-12">
                     <polygon points="20,2 38,20 20,38 2,20" {...svgProps} />
                     <path d="M20,12 V28 M12,20 H28" stroke={theme.colors.text} strokeWidth="3" />
                 </svg>
            </GalleryItem>
            <GalleryItem title="Inclusive (OR)" centered>
                 <svg viewBox="0 0 40 40" className="w-12 h-12">
                     <polygon points="20,2 38,20 20,38 2,20" {...svgProps} />
                     <circle cx="20" cy="20" r="8" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                 </svg>
            </GalleryItem>
            <GalleryItem title="Complex" centered>
                 <svg viewBox="0 0 40 40" className="w-12 h-12">
                     <polygon points="20,2 38,20 20,38 2,20" {...svgProps} />
                     <path d="M20,12 V28 M14,16 L26,24 M14,24 L26,16" stroke={theme.colors.text} strokeWidth="2" />
                 </svg>
            </GalleryItem>
            <GalleryItem title="Event-Based" centered>
                 <svg viewBox="0 0 40 40" className="w-12 h-12">
                     <polygon points="20,2 38,20 20,38 2,20" {...svgProps} />
                     <circle cx="20" cy="20" r="7" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                     <circle cx="20" cy="20" r="10" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                     <polygon points="20,16 23,22 17,22" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                 </svg>
            </GalleryItem>
        </div>

        {/* --- 4. BPMN Tasks & Activities --- */}
        <SectionTitle>BPMN Activities</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Task: User" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="5" {...svgProps} />
                    <path d="M15,18 A3,3 0 1,1 15,24 A3,3 0 1,1 15,18" fill="none" stroke={theme.colors.text} strokeWidth="1"/>
                    <path d="M12,28 Q15,24 18,28" fill="none" stroke={theme.colors.text} strokeWidth="1"/>
                    <text x="55" y="32" {...textStyle}>User Task</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Task: Service" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="5" {...svgProps} />
                    <circle cx="15" cy="20" r="3" fill="none" stroke={theme.colors.text} strokeWidth="1"/>
                    <path d="M15,17 V15 M15,23 V25 M12,20 H10 M18,20 H20" stroke={theme.colors.text} strokeWidth="1"/>
                    <text x="55" y="32" {...textStyle}>Service</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Task: Send" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="5" {...svgProps} />
                    <rect x="10" y="15" width="10" height="8" rx="1" fill={theme.colors.text} />
                    <text x="55" y="32" {...textStyle}>Send</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Task: Receive" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="5" {...svgProps} />
                    <rect x="10" y="15" width="10" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <text x="55" y="32" {...textStyle}>Receive</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Sub-Process" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="5" {...svgProps} />
                    <rect x="45" y="40" width="10" height="10" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M50,42 V48 M47,45 H53" stroke={theme.colors.text} strokeWidth="1" />
                    <text x="50" y="28" {...textStyle}>Sub</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Transaction" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="90" height="40" rx="5" {...svgProps} strokeWidth="1" />
                    <rect x="8" y="13" width="84" height="34" rx="3" fill="none" stroke={theme.colors.text} strokeWidth="1" />
                    <text x="50" y="32" {...textStyle}>TX</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. UML State & Activity --- */}
        <SectionTitle>UML State & Activity</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Initial State" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="10" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Final State" centered>
                 <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <circle cx="20" cy="20" r="8" fill={theme.colors.text} />
                 </svg>
            </GalleryItem>
            <GalleryItem title="State" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="15" width="80" height="30" rx="8" {...svgProps} />
                    <text x="50" y="31" {...textStyle}>State</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Composite State" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="15" width="80" height="30" rx="8" {...svgProps} />
                    <path d="M70,35 H80 M72,33 A2,2 0 1,0 72,37 M82,33 A2,2 0 1,0 82,37" stroke={theme.colors.text} strokeWidth="1" fill="none" />
                    <text x="40" y="31" {...textStyle}>Composite</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Decision (Diamond)" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <polygon points="20,5 35,20 20,35 5,20" {...svgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Fork / Join" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-4">
                    <rect x="5" y="15" width="90" height="10" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="History" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="12" {...svgProps} />
                    <text x="20" y="21" {...textStyle} fontSize="14px">H</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Object Node" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="20" width="80" height="20" {...svgProps} />
                    <text x="50" y="31" {...textStyle}>[Object]</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Logic Gates --- */}
        <SectionTitle>Logic Gates</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="AND Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,5 H30 A20,15 0 0,1 30,35 H10 Z" {...svgProps} />
                    <line x1="0" y1="12" x2="10" y2="12" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="0" y1="28" x2="10" y2="28" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="50" y1="20" x2="60" y2="20" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="OR Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,5 Q15,20 10,35 H20 Q45,35 50,20 Q45,5 20,5 Z" {...svgProps} />
                    <line x1="0" y1="12" x2="12" y2="12" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="0" y1="28" x2="12" y2="28" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="50" y1="20" x2="60" y2="20" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="NOT Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <polygon points="15,5 40,20 15,35" {...svgProps} />
                    <circle cx="43" cy="20" r="3" {...svgProps} />
                    <line x1="5" y1="20" x2="15" y2="20" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="46" y1="20" x2="56" y2="20" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="NAND Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,5 H30 A20,15 0 0,1 30,35 H10 Z" {...svgProps} />
                    <circle cx="53" cy="20" r="3" {...svgProps} />
                    <line x1="0" y1="12" x2="10" y2="12" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="0" y1="28" x2="10" y2="28" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="56" y1="20" x2="60" y2="20" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="XOR Gate" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,5 Q10,20 5,35" stroke={theme.colors.text} strokeWidth="1.5" fill="none" />
                    <path d="M12,5 Q17,20 12,35 H22 Q47,35 52,20 Q47,5 22,5 Z" {...svgProps} />
                    <line x1="0" y1="12" x2="8" y2="12" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="0" y1="28" x2="8" y2="28" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="52" y1="20" x2="60" y2="20" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Buffer" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <polygon points="15,5 45,20 15,35" {...svgProps} />
                    <line x1="5" y1="20" x2="15" y2="20" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="45" y1="20" x2="55" y2="20" stroke={theme.colors.text} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Connectors & Lines --- */}
        <SectionTitle>Connectors & Lines</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Solid" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <line x1="0" y1="10" x2="100" y2="10" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dashed" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <line x1="0" y1="10" x2="100" y2="10" stroke={theme.colors.text} strokeWidth="2" strokeDasharray="8 4" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dotted" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <line x1="0" y1="10" x2="100" y2="10" stroke={theme.colors.text} strokeWidth="2" strokeDasharray="2 4" strokeLinecap="round" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Arrow" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill={theme.colors.text} />
                        </marker>
                    </defs>
                    <line x1="0" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Double Arrow" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <defs>
                        <marker id="arrowstart" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
                            <polygon points="10 0, 0 3.5, 10 7" fill={theme.colors.text} />
                        </marker>
                        <marker id="arrowend" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill={theme.colors.text} />
                        </marker>
                    </defs>
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="2" markerStart="url(#arrowstart)" markerEnd="url(#arrowend)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Diamond (Agg)" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <line x1="0" y1="10" x2="85" y2="10" stroke={theme.colors.text} strokeWidth="2" />
                    <polygon points="85,10 92,5 99,10 92,15" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filled Diamond" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <line x1="0" y1="10" x2="85" y2="10" stroke={theme.colors.text} strokeWidth="2" />
                    <polygon points="85,10 92,5 99,10 92,15" fill={theme.colors.text} stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Elbow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,50 H50 V10 H90" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Jump" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <path d="M0,10 H40 Q50,-10 60,10 H100" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Message Flow" centered>
                <svg viewBox="0 0 100 20" className="w-full h-4">
                    <line x1="0" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="2" strokeDasharray="5 5" />
                    <circle cx="95" cy="10" r="4" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 8. Sequence Diagrams --- */}
        <SectionTitle>Sequence Diagrams</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Actor Lifeline" centered>
                <svg viewBox="0 0 40 80" className="w-10 h-20">
                    <circle cx="20" cy="10" r="5" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="20" y1="15" x2="20" y2="25" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="15" y1="18" x2="25" y2="18" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="20" y1="25" x2="15" y2="35" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="20" y1="25" x2="25" y2="35" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="20" y1="35" x2="20" y2="80" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="4 2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Object Lifeline" centered>
                <div className="flex flex-col items-center h-full pt-4">
                    <div className="px-2 py-1 border rounded shadow-sm text-[8px] font-bold" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface, color: theme.colors.text }}>Object</div>
                    <div className="w-px flex-1 border-l border-dashed mt-1" style={{ borderColor: theme.colors.text + '40' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Activation" centered>
                <div className="w-4 h-16 border mx-auto shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text }}></div>
            </GalleryItem>

            <GalleryItem title="Sync Message" centered>
                <svg viewBox="0 0 100 20" className="w-full h-6">
                    <line x1="0" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                    <text x="50" y="5" fontSize="8px" textAnchor="middle" fill={theme.colors.text}>request()</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Async Message" centered>
                <svg viewBox="0 0 100 20" className="w-full h-6">
                    <line x1="0" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeWidth="1.5" />
                    <path d="M85,5 L95,10 L85,15" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="50" y="5" fontSize="8px" textAnchor="middle" fill={theme.colors.text}>async()</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Reply Message" centered>
                <svg viewBox="0 0 100 20" className="w-full h-6">
                    <line x1="10" y1="10" x2="100" y2="10" stroke={theme.colors.text} strokeWidth="1.5" strokeDasharray="4 2" />
                    <path d="M15,5 L5,10 L15,15" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="50" y="5" fontSize="8px" textAnchor="middle" fill={theme.colors.text}>return</text>
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};