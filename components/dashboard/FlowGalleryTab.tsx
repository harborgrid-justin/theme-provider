
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
            <GalleryItem title="Package" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <path d="M5,15 H30 V10 H5 V15 M5,15 H75 V55 H5 V15" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth={strokeWidth} />
                    <text x="40" y="35" fontSize="8" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">Package</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Note" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,5 H40 L55,20 V35 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth={strokeWidth} />
                    <path d="M40,5 V20 H55" fill="none" stroke={theme.colors.text} strokeWidth={strokeWidth} />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
