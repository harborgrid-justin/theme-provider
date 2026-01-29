import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const ProjectGalleryTab: React.FC = () => {
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

  const primaryFill = { fill: theme.colors.primary, stroke: 'none' };
  const textFill = { fill: theme.colors.text, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Project Management Primitives</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Specialized components for task tracking, agile workflows, and timeline visualization.
        </p>

        {/* --- 1. Task & Kanban --- */}
        <SectionTitle>Task Cards & Status</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Kanban Card" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="15" y="10" width="40" height="4" rx="1" fill={theme.colors.text} opacity="0.2" />
                    <rect x="15" y="20" width="70" height="4" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="15" y="28" width="50" height="4" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <circle cx="20" cy="45" r="5" fill={theme.colors.primary} opacity="0.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card: Blocked" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="3" fill={theme.colors.error} fillOpacity="0.05" stroke={theme.colors.error} strokeWidth="1" />
                    <rect x="15" y="10" width="20" height="4" rx="1" fill={theme.colors.error} />
                    <rect x="15" y="20" width="70" height="4" rx="1" fill={theme.colors.error} opacity="0.2" />
                    <circle cx="80" cy="45" r="5" fill={theme.colors.error} />
                    <path d="M78,43 L82,47 M78,47 L82,43" stroke="white" strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card: High Pri" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <path d="M10,5 H90 V10 H10 Z" fill={theme.colors.error} opacity="0.8" />
                    <rect x="15" y="20" width="60" height="4" rx="1" fill={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Card: Done" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="3" fill={theme.colors.success} fillOpacity="0.05" stroke={theme.colors.success} strokeWidth="1" strokeOpacity="0.5" />
                    <rect x="15" y="20" width="60" height="4" rx="1" fill={theme.colors.text} opacity="0.2" />
                    <circle cx="80" cy="45" r="6" fill={theme.colors.success} />
                    <path d="M77,45 L79,47 L83,43" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Priority: P0" centered>
                <span className="text-[10px] font-bold px-2 py-1 rounded border" style={{ backgroundColor: theme.colors.error + '15', color: theme.colors.error, borderColor: theme.colors.error + '30' }}>Critical</span>
            </GalleryItem>

            <GalleryItem title="Priority: P1" centered>
                <span className="text-[10px] font-bold px-2 py-1 rounded border" style={{ backgroundColor: theme.colors.warning + '15', color: theme.colors.warning, borderColor: theme.colors.warning + '30' }}>High</span>
            </GalleryItem>

            <GalleryItem title="Priority: P2" centered>
                <span className="text-[10px] font-bold px-2 py-1 rounded border" style={{ backgroundColor: theme.colors.info + '15', color: theme.colors.info, borderColor: theme.colors.info + '30' }}>Medium</span>
            </GalleryItem>

            <GalleryItem title="Priority: P3" centered>
                <span className="text-[10px] font-bold px-2 py-1 rounded border" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text, borderColor: theme.colors.text + '20' }}>Low</span>
            </GalleryItem>

            <GalleryItem title="Swimlane Head" centered>
                <div className="w-full h-8 border-b border-t flex items-center px-2 gap-2" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <Icons.ChevronDown size="sm" className="opacity-50"/>
                    <span className="text-[10px] font-bold uppercase tracking-wide">Backlog</span>
                    <span className="text-[8px] px-1 rounded-full" style={{ backgroundColor: theme.colors.text + '10' }}>12</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Subtask" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="w-3 h-3 border rounded-sm" style={{ borderColor: theme.colors.text + '40' }}></div>
                    <div className="h-1.5 w-20 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Tag: Epic" centered>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded text-[8px] font-bold uppercase" style={{ backgroundColor: theme.colors.accent + '15', color: theme.colors.accent }}>
                    <Icons.Star size="sm" className="w-3 h-3"/> Epic
                </div>
            </GalleryItem>

            <GalleryItem title="Tag: Bug" centered>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded text-[8px] font-bold uppercase" style={{ backgroundColor: theme.colors.error + '15', color: theme.colors.error }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.error }}></div> Bug
                </div>
            </GalleryItem>
        </div>

        {/* --- 2. Timeline & Gantt --- */}
        <SectionTitle>Timeline & Planning</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Gantt Bar" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="10" y="15" width="80" height="10" rx="3" fill={theme.colors.primary} />
                    <rect x="12" y="17" width="40" height="6" rx="2" fill="white" fillOpacity="0.2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Gantt Progress" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="10" y="15" width="80" height="10" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="10" y="15" width="50" height="10" rx="3" fill={theme.colors.success} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Dependency" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="5" y="10" width="30" height="10" rx="2" fill={theme.colors.primary} opacity="0.5" />
                    <rect x="65" y="20" width="30" height="10" rx="2" fill={theme.colors.primary} />
                    <path d="M35,15 H50 V25 H65" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="2 2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Milestone" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="20" y="5" width="20" height="20" transform="rotate(45 20 20)" fill={theme.colors.accent} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Critical Path" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="10" y="15" width="80" height="8" rx="2" fill={theme.colors.error} fillOpacity="0.1" stroke={theme.colors.error} strokeWidth="1.5" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Timeline Marker" centered>
                <svg viewBox="0 0 40 60" className="w-8 h-12">
                    <line x1="20" y1="0" x2="20" y2="60" stroke={theme.colors.error} strokeWidth="1.5" strokeDasharray="3 2" />
                    <polygon points="15,0 25,0 25,10 20,15 15,10" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. Team & Resources --- */}
        <SectionTitle>Team & Capacity</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Avatar Stack" centered>
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: theme.colors.text + '30' }}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Assignee" centered>
                <div className="flex items-center gap-2 border px-2 py-1 rounded-full shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    <span className="text-[10px] font-bold">Alex</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Capacity Bar" centered>
                <div className="w-full px-4">
                    <div className="flex justify-between text-[8px] mb-1 opacity-60 font-bold"><span>LOAD</span><span>85%</span></div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div className="h-full w-[85%]" style={{ backgroundColor: theme.colors.warning }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Availability" centered>
                <div className="flex flex-col gap-1 w-full px-4">
                    <div className="flex items-center gap-2 text-[8px]">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.success }}></div> Available
                    </div>
                    <div className="flex items-center gap-2 text-[8px]">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.error }}></div> Busy
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Role Badge" centered>
                <span className="text-[8px] uppercase tracking-wider font-bold border px-1.5 py-0.5 rounded" style={{ borderColor: theme.colors.text + '30', color: theme.colors.text }}>Admin</span>
            </GalleryItem>

            <GalleryItem title="Team Card" centered>
                <div className="border rounded p-2 text-center w-24 shadow-sm" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface }}>
                    <div className="text-[10px] font-bold">Design</div>
                    <div className="text-[8px] opacity-60">4 Members</div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Project Shells --- */}
        <SectionTitle>Project Shells</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Project Sidebar" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="25" height="60" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="25" y="0" width="75" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="5" y="10" width="15" height="4" rx="1" {...textFill} opacity="0.2" />
                    <rect x="5" y="20" width="15" height="2" rx="1" {...textFill} opacity="0.2" />
                    <rect x="5" y="25" width="15" height="2" rx="1" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Project Top Bar" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="15" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="0" y="15" width="100" height="45" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <circle cx="10" cy="7.5" r="3" {...primaryFill} opacity="0.5" />
                    <rect x="20" y="5" width="40" height="5" rx="1" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Context Sidebar" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="70" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="70" y="0" width="30" height="60" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="75" y="10" width="20" height="4" rx="1" {...textFill} opacity="0.2" />
                    <rect x="75" y="20" width="20" height="20" rx="1" {...textFill} opacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Workspace Nav" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="15" height="60" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="15" y="0" width="85" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="7.5" cy="10" r="3" {...textFill} opacity="0.5" />
                    <circle cx="7.5" cy="20" r="3" {...textFill} opacity="0.2" />
                    <circle cx="7.5" cy="30" r="3" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Project Tabs" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="15" width="100" height="45" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="5" y="5" width="20" height="10" rx="2" fill={theme.colors.primary} opacity="0.2" />
                    <rect x="30" y="5" width="20" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="55" y="5" width="20" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Actions" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="30" y="5" width="40" height="50" rx="4" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="60" cy="45" r="5" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Breadcrumb Bar" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="15" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <text x="10" y="10" fontSize="6" fill={theme.colors.text} opacity="0.5">Project</text>
                    <text x="35" y="10" fontSize="6" fill={theme.colors.text} opacity="0.5">></text>
                    <text x="45" y="10" fontSize="6" fill={theme.colors.text} fontWeight="bold">Task</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Split Shell" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="50" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="50" y="0" width="50" height="60" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Headers & Meta --- */}
        <SectionTitle>Headers & Meta</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Project Hero" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="5" y="5" width="10" height="10" rx="2" {...primaryFill} opacity="0.5" />
                    <rect x="20" y="5" width="50" height="6" rx="2" {...textFill} />
                    <rect x="20" y="15" width="30" height="4" rx="1" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Task Header" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <text x="5" y="10" fontSize="6" fill={theme.colors.text} opacity="0.5">TASK-123</text>
                    <rect x="5" y="15" width="80" height="6" rx="1" {...textFill} />
                    <rect x="75" y="5" width="20" height="6" rx="2" fill={theme.colors.success} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sprint Header" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="5" y="5" width="40" height="8" rx="2" {...textFill} />
                    <rect x="50" y="5" width="30" height="8" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="5" y="20" width="90" height="4" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="5" y="20" width="60" height="4" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Status Bar" centered>
                <svg viewBox="0 0 100 20" className="w-32 h-6">
                    <rect x="0" y="5" width="20" height="10" rx="5" fill={theme.colors.text} opacity="0.1" />
                    <rect x="25" y="5" width="20" height="10" rx="5" {...primaryFill} opacity="0.2" />
                    <rect x="50" y="5" width="20" height="10" rx="5" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filter Bar" centered>
                <svg viewBox="0 0 100 20" className="w-32 h-6">
                    <rect x="0" y="5" width="15" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="20" y="5" width="15" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <circle cx="90" cy="10" r="4" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Team Header" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <circle cx="10" cy="20" r="5" {...textFill} opacity="0.2" />
                    <circle cx="18" cy="20" r="5" {...textFill} opacity="0.2" />
                    <circle cx="26" cy="20" r="5" {...textFill} opacity="0.2" />
                    <circle cx="34" cy="20" r="5" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Time Header" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="5" y="10" width="30" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="20" y="22" fontSize="8" fill={theme.colors.text} textAnchor="middle">2h 30m</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Progress Header" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <circle cx="20" cy="20" r="10" fill="none" stroke={theme.colors.success} strokeWidth="2" strokeDasharray="40 60" />
                    <text x="20" y="23" fontSize="6" fill={theme.colors.text} textAnchor="middle">60%</text>
                    <rect x="40" y="15" width="50" height="4" rx="1" {...textFill} opacity="0.5" />
                    <rect x="40" y="22" width="30" height="3" rx="1" {...textFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tabs Header" centered>
                <svg viewBox="0 0 100 30" className="w-32 h-8">
                    <rect x="10" y="5" width="20" height="20" rx="2" {...primaryFill} opacity="0.1" />
                    <rect x="40" y="10" width="20" height="10" rx="2" fill="none" />
                    <text x="20" y="18" fontSize="6" fill={theme.colors.primary} textAnchor="middle">View</text>
                    <text x="50" y="18" fontSize="6" fill={theme.colors.text} opacity="0.5" textAnchor="middle">Edit</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Alert Header" centered>
                <svg viewBox="0 0 100 30" className="w-32 h-8">
                    <rect x="0" y="0" width="100" height="30" fill={theme.colors.error} fillOpacity="0.1" />
                    <circle cx="10" cy="15" r="3" fill={theme.colors.error} />
                    <rect x="20" y="12" width="60" height="6" rx="1" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Epic Header" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="5" y="10" width="12" height="12" rx="2" fill={theme.colors.accent} />
                    <rect x="25" y="12" width="60" height="8" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Toolbar" centered>
                <svg viewBox="0 0 100 30" className="w-32 h-8">
                    <rect x="5" y="5" width="20" height="20" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="30" y="5" width="20" height="20" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="55" y="5" width="20" height="20" rx="2" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Task Views --- */}
        <SectionTitle>Task Views</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Board Column" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="0" y="0" width="60" height="100" rx="4" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="5" y="10" width="50" height="20" rx="2" fill={theme.colors.surface} />
                    <rect x="5" y="35" width="50" height="20" rx="2" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="List Row" centered>
                <svg viewBox="0 0 100 30" className="w-32 h-10">
                    <rect x="0" y="0" width="100" height="30" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <circle cx="10" cy="15" r="3" fill={theme.colors.success} />
                    <rect x="20" y="10" width="40" height="4" rx="1" {...textFill} />
                    <rect x="20" y="18" width="20" height="2" rx="1" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Timeline Row" centered>
                <svg viewBox="0 0 100 30" className="w-32 h-10">
                    <line x1="0" y1="15" x2="100" y2="15" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="20" y="10" width="40" height="10" rx="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Calendar Cell" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="0" y="0" width="60" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <text x="50" y="15" fontSize="8" fill={theme.colors.text} opacity="0.5">24</text>
                    <rect x="5" y="25" width="50" height="10" rx="2" fill={theme.colors.accent} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Task Card" centered>
                <svg viewBox="0 0 80 60" className="w-20 h-16">
                    <rect x="0" y="0" width="80" height="60" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="5" y="5" width="15" height="4" rx="1" fill={theme.colors.error} />
                    <rect x="5" y="15" width="60" height="4" rx="1" {...textFill} />
                    <circle cx="70" cy="50" r="5" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Subtask Row" centered>
                <svg viewBox="0 0 100 20" className="w-32 h-6">
                    <rect x="10" y="5" width="10" height="10" rx="2" fill="none" stroke={theme.colors.text} opacity="0.3" />
                    <rect x="30" y="8" width="60" height="4" rx="1" {...textFill} opacity="0.8" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Checklist" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="10" y="5" width="8" height="8" rx="1" fill={theme.colors.success} />
                    <rect x="25" y="7" width="50" height="4" rx="1" fill={theme.colors.text} opacity="0.3" />
                    <line x1="25" y1="9" x2="75" y2="9" stroke={theme.colors.text} strokeWidth="1" />
                    <rect x="10" y="20" width="8" height="8" rx="1" fill="none" stroke={theme.colors.text} opacity="0.3" />
                    <rect x="25" y="22" width="60" height="4" rx="1" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Comment Box" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <circle cx="10" cy="10" r="5" fill={theme.colors.text} opacity="0.1" />
                    <rect x="20" y="5" width="70" height="25" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="25" y="10" width="40" height="4" rx="1" fill={theme.colors.text} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Attachment" centered>
                <svg viewBox="0 0 100 30" className="w-32 h-8">
                    <rect x="0" y="0" width="100" height="30" rx="4" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="10" y="8" width="10" height="14" rx="1" fill={theme.colors.primary} />
                    <rect x="30" y="12" width="40" height="6" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Log Entry" centered>
                <svg viewBox="0 0 100 30" className="w-32 h-8">
                    <line x1="10" y="0" x2="10" y2="30" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <circle cx="10" cy="15" r="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.3" />
                    <rect x="20" y="12" width="70" height="6" rx="2" fill={theme.colors.text} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dependency" centered>
                <svg viewBox="0 0 100 30" className="w-32 h-8">
                    <rect x="0" y="10" width="30" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="70" y="10" width="30" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <path d="M30,15 H50 V15 H70" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="2 2" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Detail Sidebar" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="60" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="60" y="0" width="40" height="60" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="65" y="10" width="30" height="4" rx="1" {...textFill} />
                    <rect x="65" y="20" width="30" height="30" rx="1" fill={theme.colors.text} opacity="0.05" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Dashboard Widgets --- */}
        <SectionTitle>Dashboard Widgets</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Burndown" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,10 L90,50" stroke={theme.colors.text} strokeOpacity="0.2" strokeDasharray="3 3" />
                    <path d="M10,10 L30,20 L50,15 L70,30 L90,45" stroke={theme.colors.primary} strokeWidth="2" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Velocity" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="20" width="10" height="30" fill={theme.colors.secondary} />
                    <rect x="30" y="10" width="10" height="40" fill={theme.colors.secondary} />
                    <rect x="50" y="15" width="10" height="35" fill={theme.colors.secondary} />
                    <rect x="70" y="25" width="10" height="25" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Status Pie" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="8" />
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.success} strokeWidth="8" strokeDasharray="30 100" transform="rotate(-90 30 30)" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Workload" centered>
                <div className="flex gap-1 items-end h-10 w-full px-4">
                    {[3, 5, 2, 4, 3].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h * 10}%`, backgroundColor: theme.colors.primary }}></div>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="Budget" centered>
                <div className="text-center">
                    <div className="text-xl font-bold" style={{ color: theme.colors.success }}>$5k</div>
                    <div className="text-[8px] opacity-60">Remaining</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Time Widget" centered>
                <div className="text-center border rounded p-2" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="text-lg font-mono font-bold">04:20</div>
                    <div className="text-[6px] uppercase tracking-wide opacity-50">Tracked Today</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Milestone" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <rect x="10" y="10" width="10" height="10" transform="rotate(45 15 15)" fill={theme.colors.accent} />
                    <rect x="30" y="12" width="60" height="6" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Risk Card" centered>
                <div className="border p-2 rounded text-center w-24" style={{ backgroundColor: theme.colors.error + '10', borderColor: theme.colors.error + '30' }}>
                    <div className="font-bold text-xs" style={{ color: theme.colors.error }}>High Risk</div>
                    <div className="text-[8px]" style={{ color: theme.colors.error }}>2 Critical</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Health" centered>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.success }}></div>
                    <span className="font-bold text-xs">On Track</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Activity" centered>
                <div className="space-y-1 w-full px-4">
                    <div className="h-1 w-full rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="h-1 w-2/3 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="h-1 w-1/2 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Recent Files" centered>
                <div className="grid grid-cols-2 gap-2 w-full px-4">
                    <div className="h-8 rounded" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                    <div className="h-8 rounded" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="My Tasks" centered>
                <div className="w-full px-4 space-y-2">
                    <div className="flex justify-between items-center"><div className="w-4 h-4 border rounded" style={{ borderColor: theme.colors.text + '20' }}></div><div className="h-2 w-16 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div></div>
                    <div className="flex justify-between items-center"><div className="w-4 h-4 border rounded" style={{ borderColor: theme.colors.text + '20' }}></div><div className="h-2 w-16 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 8. Agile Tools --- */}
        <SectionTitle>Agile Tools</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Backlog Item" centered>
                <div className="flex items-center gap-2 border rounded p-2 w-full mx-4 shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}>
                    <div className="text-[8px] font-mono opacity-50">#123</div>
                    <div className="h-2 w-16 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Sprint Col" centered>
                <div className="w-16 h-24 border rounded p-1 flex flex-col gap-1" style={{ backgroundColor: theme.colors.background, borderColor: theme.colors.text + '10' }}>
                    <div className="h-3 w-full rounded mb-1" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="h-6 w-full border rounded shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '10' }}></div>
                    <div className="h-6 w-full border rounded shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '10' }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Retro Col" centered>
                <div className="w-16 h-24 border rounded p-1 flex flex-col gap-1" style={{ backgroundColor: theme.colors.success + '10', borderColor: theme.colors.success + '20' }}>
                    <div className="text-[6px] font-bold uppercase text-center" style={{ color: theme.colors.success }}>Went Well</div>
                    <div className="h-6 w-full border rounded shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.success + '20' }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Story Point" centered>
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>5</div>
            </GalleryItem>
            <GalleryItem title="Epic Badge" centered>
                <div className="px-2 py-1 rounded text-[8px] font-bold uppercase tracking-wider" style={{ backgroundColor: theme.colors.accent + '15', color: theme.colors.accent }}>
                    Epic
                </div>
            </GalleryItem>
            <GalleryItem title="Release" centered>
                <div className="flex items-center gap-1 border px-2 py-1 rounded text-[8px] font-bold" style={{ backgroundColor: theme.colors.info + '10', borderColor: theme.colors.info + '30', color: theme.colors.info }}>
                    <Icons.Flag size="sm" className="w-3 h-3"/> v2.0
                </div>
            </GalleryItem>
            <GalleryItem title="Swimlane" centered>
                <svg viewBox="0 0 100 40" className="w-32 h-12">
                    <line x1="0" y1="20" x2="100" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="5" y="15" fontSize="6" fill={theme.colors.text} opacity="0.5">HIGH PRIORITY</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Blocker" centered>
                <div className="w-6 h-6 flex items-center justify-center rounded text-[10px] font-bold text-white" style={{ backgroundColor: theme.colors.error }}>!</div>
            </GalleryItem>
            <GalleryItem title="WIP Limit" centered>
                <div className="border px-2 py-1 rounded text-[8px] font-bold" style={{ borderColor: theme.colors.error + '40', color: theme.colors.error, backgroundColor: theme.colors.error + '10' }}>
                    Max: 3
                </div>
            </GalleryItem>
            <GalleryItem title="User Story" centered>
                <div className="text-[8px] p-2 border rounded w-full mx-4" style={{ backgroundColor: theme.colors.warning + '10', borderColor: theme.colors.warning + '30', color: theme.colors.warning }}>
                    As a user, I want...
                </div>
            </GalleryItem>
            <GalleryItem title="Acceptance" centered>
                <div className="flex flex-col gap-1 w-full px-4">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 border rounded" style={{ borderColor: theme.colors.text + '40' }}></div><div className="h-1 w-12 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div></div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 border rounded" style={{ backgroundColor: theme.colors.success, borderColor: theme.colors.success }}></div><div className="h-1 w-12 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Done Def" centered>
                <div className="border-2 px-2 py-1 rounded font-bold text-[8px] uppercase" style={{ borderColor: theme.colors.success, color: theme.colors.success }}>
                    DoD
                </div>
            </GalleryItem>
        </div>

        {/* --- 9. Resource & Planning --- */}
        <SectionTitle>Resource & Planning</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Resource Row" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="flex-1 h-2 rounded overflow-hidden" style={{ backgroundColor: theme.colors.primary + '20' }}>
                        <div className="w-2/3 h-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Allocation" centered>
                <div className="w-full px-4">
                    <div className="flex h-4 rounded overflow-hidden">
                        <div className="w-1/3" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="w-1/4" style={{ backgroundColor: theme.colors.success }}></div>
                        <div className="w-full" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Availability" centered>
                <div className="grid grid-cols-5 gap-1">
                    {[1,1,0,1,1].map((a, i) => (
                        <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: a ? theme.colors.success + '40' : theme.colors.error + '40' }}></div>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="Skill Tag" centered>
                <span className="px-2 py-0.5 rounded-full text-[8px] border" style={{ backgroundColor: theme.colors.text + '05', color: theme.colors.textSecondary, borderColor: theme.colors.text + '10' }}>React</span>
            </GalleryItem>
            <GalleryItem title="Leave Marker" centered>
                <div className="h-full w-4 border-x flex items-center justify-center" style={{ backgroundColor: theme.colors.warning + '20', borderColor: theme.colors.warning + '40' }}>
                    <span className="text-[6px] transform -rotate-90 font-bold" style={{ color: theme.colors.warning }}>OOO</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Shift Block" centered>
                <div className="border rounded px-2 py-1 text-[8px] w-full text-center mx-2" style={{ backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.primary + '30', color: theme.colors.primary }}>
                    09:00 - 17:00
                </div>
            </GalleryItem>
            <GalleryItem title="Capacity" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <path d="M5,15 A15,15 0 0,1 35,15" fill="none" stroke="gray" strokeWidth="3" opacity="0.2"/>
                    <path d="M5,15 A15,15 0 0,1 25,5" fill="none" stroke={theme.colors.primary} strokeWidth="3"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Team Card" centered>
                <div className="border rounded p-2 flex flex-col items-center shadow-sm" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface }}>
                    <div className="flex -space-x-1 mb-1">
                        <div className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        <div className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: theme.colors.text + '30' }}></div>
                    </div>
                    <div className="text-[8px] font-bold">Frontend</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Role Label" centered>
                <span className="text-[8px] font-mono uppercase tracking-tight" style={{ color: theme.colors.textSecondary }}>Lead Dev</span>
            </GalleryItem>
            <GalleryItem title="Rate Card" centered>
                <div className="text-center">
                    <div className="text-xs font-bold" style={{ color: theme.colors.text }}>$150</div>
                    <div className="text-[6px]" style={{ color: theme.colors.textSecondary }}>/ hour</div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 10. Forms & Dialogs --- */}
        <SectionTitle>Forms & Dialogs</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Create Modal" centered>
                <div className="w-20 h-16 border rounded shadow-md flex flex-col p-2" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '10' }}>
                    <div className="font-bold text-[6px] mb-1">New Task</div>
                    <div className="h-2 w-full mb-1 rounded" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                    <div className="h-4 w-full flex-1 rounded" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                    <div className="flex justify-end gap-1 mt-1">
                        <div className="h-2 w-4 rounded" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        <div className="h-2 w-4 rounded" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Edit Sidebar" centered>
                <div className="w-24 h-16 flex border rounded overflow-hidden" style={{ borderColor: theme.colors.text + '10' }}>
                    <div className="flex-1" style={{ backgroundColor: theme.colors.background }}></div>
                    <div className="w-8 border-l p-1 flex flex-col gap-1" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '10' }}>
                        <div className="h-1 w-4 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        <div className="h-1 w-6 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Date Range" centered>
                <div className="border rounded px-2 py-1 text-[8px] flex items-center gap-1" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}>
                    <span>Oct 1</span> <span>→</span> <span>Oct 15</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Member Select" centered>
                <div className="flex items-center gap-1 border rounded px-2 py-1" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                    <span className="text-[8px]">Select...</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Label Select" centered>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.error }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-3 h-3 rounded-full border-2" style={{ backgroundColor: theme.colors.success, borderColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Priority Select" centered>
                <div className="flex border rounded overflow-hidden" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="px-1 text-[6px]" style={{ backgroundColor: theme.colors.text + '10' }}>Low</div>
                    <div className="px-1 text-[6px] font-bold" style={{ backgroundColor: theme.colors.warning + '20' }}>Med</div>
                    <div className="px-1 text-[6px]" style={{ backgroundColor: theme.colors.text + '10' }}>High</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Status Select" centered>
                <div className="border rounded px-2 py-1 text-[8px] flex justify-between items-center w-20" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}>
                    <span>In Progress</span> <Icons.ChevronDown size="sm" className="w-2"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Time Picker" centered>
                <div className="border rounded px-2 py-1 text-[10px] font-mono" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}>12:30 PM</div>
            </GalleryItem>
            <GalleryItem title="Estimation" centered>
                <div className="w-full px-2">
                    <div className="flex justify-between text-[6px] mb-0.5"><span>1h</span><span>8h</span></div>
                    <div className="h-1 rounded relative" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div className="absolute left-1/3 w-2 h-2 rounded-full -top-0.5" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Description" centered>
                <div className="w-20 h-12 border rounded p-1" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '10' }}>
                    <div className="h-1 w-10 mb-1 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="h-1 w-16 mb-1 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="h-1 w-12 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 11. Reporting & Analytics (NEW) --- */}
        <SectionTitle>11. Reporting & Analytics</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Burnup Chart" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <line x1="10" y1="50" x2="90" y2="10" stroke={theme.colors.text} strokeOpacity="0.2" strokeDasharray="3 3" />
                    <path d="M10,50 L30,40 L50,35 L70,25 L90,15" stroke={theme.colors.success} strokeWidth="2" fill="none" />
                    <path d="M10,50 L30,45 L50,40 L70,35" stroke={theme.colors.primary} strokeWidth="2" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cumulative Flow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M10,50 L30,45 L50,40 L70,35 L90,30 V50 H10 Z" fill={theme.colors.primary} />
                    <path d="M10,50 L30,40 L50,30 L70,20 L90,10 V30 L70,35 L50,40 L30,45 L10,50 Z" fill={theme.colors.secondary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Control Chart" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="20" width="80" height="20" fill={theme.colors.text} opacity="0.05" />
                    <circle cx="20" cy="30" r="2" fill={theme.colors.primary} />
                    <circle cx="40" cy="25" r="2" fill={theme.colors.primary} />
                    <circle cx="60" cy="35" r="2" fill={theme.colors.primary} />
                    <circle cx="80" cy="15" r="2" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Lead Time Dist" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="45" width="10" height="5" fill={theme.colors.primary} />
                    <rect x="25" y="35" width="10" height="15" fill={theme.colors.primary} />
                    <rect x="40" y="25" width="10" height="25" fill={theme.colors.primary} />
                    <rect x="55" y="40" width="10" height="10" fill={theme.colors.primary} />
                    <rect x="70" y="45" width="10" height="5" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sprint Report" centered>
                <div className="w-full px-2 text-[6px]">
                    <div className="flex justify-between border-b pb-1"><span>Completed</span> <span className="font-bold">24pts</span></div>
                    <div className="flex justify-between pt-1 opacity-60"><span>Planned</span> <span>30pts</span></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Time Sheet" centered>
                <div className="grid grid-cols-7 gap-px bg-gray-200 border w-full">
                    {[2,4,8,8,8,6,0].map((h, i) => (
                        <div key={i} className="bg-white text-[6px] text-center py-1">{h}</div>
                    ))}
                </div>
            </GalleryItem>
        </div>

        {/* --- 12. Mobile Interface (NEW) --- */}
        <SectionTitle>12. Mobile Interface</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Task Feed" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" stroke={theme.colors.text} fill="none" opacity="0.2" />
                    <rect x="10" y="15" width="40" height="15" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="10" y="35" width="40" height="15" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="10" y="55" width="40" height="15" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Board" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" stroke={theme.colors.text} fill="none" opacity="0.2" />
                    <rect x="10" y="15" width="35" height="60" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="50" y="15" width="5" height="60" rx="1" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Quick Add FAB" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" stroke={theme.colors.text} fill="none" opacity="0.2" />
                    <circle cx="45" cy="85" r="6" fill={theme.colors.primary} />
                    <path d="M45,82 V88 M42,85 H48" stroke="white" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Notifications" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" stroke={theme.colors.text} fill="none" opacity="0.2" />
                    <circle cx="15" cy="20" r="3" fill={theme.colors.primary} />
                    <rect x="22" y="18" width="25" height="4" rx="1" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="15" cy="35" r="3" fill={theme.colors.error} />
                    <rect x="22" y="33" width="25" height="4" rx="1" fill={theme.colors.text} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Comment Input" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" stroke={theme.colors.text} fill="none" opacity="0.2" />
                    <rect x="5" y="80" width="50" height="15" fill={theme.colors.surface} />
                    <line x1="5" y1="80" x2="55" y2="80" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="10" y="83" width="30" height="8" rx="4" fill={theme.colors.text} opacity="0.1" />
                    <circle cx="48" cy="87" r="4" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Status Picker" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" stroke={theme.colors.text} fill="none" opacity="0.2" />
                    <rect x="5" y="60" width="50" height="35" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="10" y="65" width="40" height="6" rx="2" fill={theme.colors.success} opacity="0.2" />
                    <rect x="10" y="75" width="40" height="6" rx="2" fill={theme.colors.warning} opacity="0.2" />
                    <rect x="10" y="85" width="40" height="6" rx="2" fill={theme.colors.error} opacity="0.2" />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};