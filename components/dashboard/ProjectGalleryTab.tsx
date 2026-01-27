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
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-red-100 text-red-700 border border-red-200">Critical</span>
            </GalleryItem>

            <GalleryItem title="Priority: P1" centered>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-orange-100 text-orange-700 border border-orange-200">High</span>
            </GalleryItem>

            <GalleryItem title="Priority: P2" centered>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-100 text-blue-700 border border-blue-200">Medium</span>
            </GalleryItem>

            <GalleryItem title="Priority: P3" centered>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200">Low</span>
            </GalleryItem>

            <GalleryItem title="Swimlane Head" centered>
                <div className="w-full h-8 bg-gray-50 border-b border-t flex items-center px-2 gap-2" style={{ borderColor: theme.colors.text + '20' }}>
                    <Icons.ChevronDown size="sm" className="opacity-50"/>
                    <span className="text-[10px] font-bold uppercase tracking-wide">Backlog</span>
                    <span className="text-[8px] bg-gray-200 px-1 rounded-full">12</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Subtask" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="w-3 h-3 border rounded-sm" style={{ borderColor: theme.colors.text + '40' }}></div>
                    <div className="h-1.5 w-20 bg-gray-200 rounded"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Tag: Epic" centered>
                <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-[8px] font-bold uppercase">
                    <Icons.Star size="sm" className="w-3 h-3"/> Epic
                </div>
            </GalleryItem>

            <GalleryItem title="Tag: Bug" centered>
                <div className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-0.5 rounded text-[8px] font-bold uppercase">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Bug
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
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Assignee" centered>
                <div className="flex items-center gap-2 border px-2 py-1 rounded-full bg-white shadow-sm" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-[10px] font-bold">Alex</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Capacity Bar" centered>
                <div className="w-full px-4">
                    <div className="flex justify-between text-[8px] mb-1 opacity-60 font-bold"><span>LOAD</span><span>85%</span></div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-400 w-[85%]"></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Availability" centered>
                <div className="flex flex-col gap-1 w-full px-4">
                    <div className="flex items-center gap-2 text-[8px]">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div> Available
                    </div>
                    <div className="flex items-center gap-2 text-[8px]">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div> Busy
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Role Badge" centered>
                <span className="text-[8px] uppercase tracking-wider font-bold border px-1.5 py-0.5 rounded" style={{ borderColor: theme.colors.text + '30', color: theme.colors.text }}>Admin</span>
            </GalleryItem>

            <GalleryItem title="Team Card" centered>
                <div className="border rounded p-2 text-center w-24 bg-white shadow-sm" style={{ borderColor: theme.colors.text + '10' }}>
                    <div className="text-[10px] font-bold">Design</div>
                    <div className="text-[8px] opacity-60">4 Members</div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
