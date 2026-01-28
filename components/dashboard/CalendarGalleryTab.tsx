import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const CalendarGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const svgProps = {
    vectorEffect: "non-scaling-stroke",
    fill: theme.colors.surface,
    stroke: theme.colors.text,
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const primaryFill = { fill: theme.colors.primary, stroke: 'none' };
  const textFill = { fill: theme.colors.text, stroke: 'none' };
  const surfaceFill = { fill: theme.colors.surface, stroke: 'none' };
  const faintFill = { fill: theme.colors.text, fillOpacity: 0.05, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Calendar & Scheduling (55 Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            A dedicated collection of date pickers, calendar views, timeline diagrams, and scheduling primitives.
        </p>

        {/* --- 1. Calendar Grids --- */}
        <SectionTitle>1. Calendar Grids</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Month View" centered>
                <svg viewBox="0 0 100 80" className="w-24 h-20">
                    <rect x="5" y="5" width="90" height="70" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="5" y1="20" x2="95" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="5" y1="35" x2="95" y2="35" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="5" y1="65" x2="95" y2="65" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="20" y1="20" x2="20" y2="75" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="35" y1="20" x2="35" y2="75" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="50" y1="20" x2="50" y2="75" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="65" y1="20" x2="65" y2="75" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="80" y1="20" x2="80" y2="75" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="22" y="25" width="10" height="10" rx="1" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mini Month" centered>
                <div className="p-2 border rounded text-center w-full" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="text-[8px] font-bold mb-1">September</div>
                    <div className="grid grid-cols-7 gap-0.5 text-[6px]">
                        {Array.from({length: 30}).map((_, i) => (
                            <div key={i} className={`h-2 w-2 flex items-center justify-center rounded-sm ${i === 14 ? 'text-white font-bold' : ''}`} style={{ backgroundColor: i===14 ? theme.colors.primary : 'transparent' }}>{i+1}</div>
                        ))}
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Year Heatmap" centered>
                <div className="grid grid-cols-10 gap-0.5 w-full px-2">
                    {Array.from({length: 50}).map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-sm" style={{ backgroundColor: theme.colors.success, opacity: Math.random() * 0.8 + 0.2 }}></div>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="Week View" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="14" y1="0" x2="14" y2="60" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="28" y1="0" x2="28" y2="60" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="42" y1="0" x2="42" y2="60" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="56" y1="0" x2="56" y2="60" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="70" y1="0" x2="70" y2="60" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="84" y1="0" x2="84" y2="60" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="16" y="10" width="10" height="30" rx="1" fill={theme.colors.primary} opacity="0.8" />
                    <rect x="44" y="25" width="10" height="15" rx="1" fill={theme.colors.secondary} opacity="0.8" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Day View" centered>
                <div className="w-full px-4 border-l ml-4 space-y-1 relative" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="absolute -left-1 top-2 w-2 h-2 rounded-full border-2 border-white" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="bg-gray-100 p-1 rounded text-[6px] w-full" style={{ backgroundColor: theme.colors.text + '05' }}>09:00 AM Meeting</div>
                    <div className="bg-gray-100 p-1 rounded text-[6px] w-full" style={{ backgroundColor: theme.colors.text + '05' }}>10:30 AM Sync</div>
                </div>
            </GalleryItem>
            <GalleryItem title="List View" centered>
                <div className="w-full space-y-1 px-2">
                    <div className="flex gap-2 items-center border-b pb-1">
                        <div className="w-6 text-[8px] font-bold text-center bg-gray-100 rounded" style={{ backgroundColor: theme.colors.text + '10' }}>24<br/>OCT</div>
                        <div className="text-[8px] flex-1">Team Lunch</div>
                    </div>
                    <div className="flex gap-2 items-center border-b pb-1">
                        <div className="w-6 text-[8px] font-bold text-center bg-gray-100 rounded" style={{ backgroundColor: theme.colors.text + '10' }}>25<br/>OCT</div>
                        <div className="text-[8px] flex-1">Review</div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Agenda" centered>
                <div className="w-full px-2">
                    <div className="text-[8px] font-bold mb-1 opacity-50">TODAY</div>
                    <div className="pl-2 border-l-2 mb-2" style={{ borderColor: theme.colors.success }}>
                        <div className="text-[8px] font-bold">10:00</div>
                        <div className="text-[6px]">Standup</div>
                    </div>
                    <div className="pl-2 border-l-2" style={{ borderColor: theme.colors.warning }}>
                        <div className="text-[8px] font-bold">14:00</div>
                        <div className="text-[6px]">Client Call</div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Quarter View" centered>
                <div className="grid grid-cols-3 gap-1 w-full px-2">
                    <div className="border rounded p-1 text-[6px] text-center">Jan</div>
                    <div className="border rounded p-1 text-[6px] text-center bg-blue-50" style={{ backgroundColor: theme.colors.primary + '10' }}>Feb</div>
                    <div className="border rounded p-1 text-[6px] text-center">Mar</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Year Grid" centered>
                <div className="grid grid-cols-4 gap-1 w-full px-4">
                    {Array.from({length: 12}).map((_, i) => (
                        <div key={i} className="aspect-square border rounded flex items-center justify-center text-[6px] opacity-60">
                            {i+1}
                        </div>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="Work Week" centered>
                <div className="flex w-full px-2 gap-0.5">
                    <div className="flex-1 h-12 bg-gray-50 rounded-t border-b-2" style={{ borderColor: theme.colors.text }}></div>
                    <div className="flex-1 h-12 bg-gray-50 rounded-t border-b-2" style={{ borderColor: theme.colors.text }}></div>
                    <div className="flex-1 h-12 bg-gray-50 rounded-t border-b-2" style={{ borderColor: theme.colors.text }}></div>
                    <div className="flex-1 h-12 bg-gray-50 rounded-t border-b-2" style={{ borderColor: theme.colors.text }}></div>
                    <div className="flex-1 h-12 bg-gray-50 rounded-t border-b-2" style={{ borderColor: theme.colors.text }}></div>
                    <div className="flex-1 h-12 bg-gray-100 opacity-50 rounded-t"></div>
                    <div className="flex-1 h-12 bg-gray-100 opacity-50 rounded-t"></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 2. Timeline & Schedule --- */}
        <SectionTitle>2. Timeline & Schedule</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Gantt Bar" centered>
                <div className="w-full px-2">
                    <div className="w-full h-4 rounded relative bg-gray-100" style={{ backgroundColor: theme.colors.text + '05' }}>
                        <div className="absolute left-1/4 width-1/2 h-full rounded bg-blue-500 flex items-center px-1 text-[6px] text-white" style={{ backgroundColor: theme.colors.primary, width: '50%' }}>Phase 1</div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Resource Row" centered>
                <div className="flex items-center gap-1 w-full px-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <div className="flex-1 h-2 rounded bg-gray-100 flex gap-0.5">
                        <div className="w-1/3 h-full bg-green-400"></div>
                        <div className="w-1/4 h-full bg-transparent"></div>
                        <div className="w-1/4 h-full bg-blue-400"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Timeline Marker" centered>
                <div className="relative w-full h-8 flex items-center justify-center">
                    <div className="w-full h-px bg-gray-300"></div>
                    <div className="absolute top-0 bottom-0 w-px bg-red-500"></div>
                    <div className="absolute top-0 px-1 text-[6px] bg-red-500 text-white rounded">NOW</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Shift Block" centered>
                <div className="border rounded px-2 py-1 text-[8px] w-24 text-center border-l-4" style={{ borderLeftColor: theme.colors.primary, backgroundColor: theme.colors.surface }}>
                    09:00 - 17:00
                </div>
            </GalleryItem>
            <GalleryItem title="Dependency" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="5" y="10" width="30" height="10" rx="2" fill={theme.colors.primary} opacity="0.5" />
                    <rect x="65" y="20" width="30" height="10" rx="2" fill={theme.colors.primary} />
                    <path d="M35,15 H50 V25 H65" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Milestone" centered>
                <div className="transform rotate-45 w-6 h-6 bg-yellow-400 flex items-center justify-center shadow-sm">
                    <div className="transform -rotate-45 text-[8px] font-bold text-white">M1</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Draggable Event" centered>
                <div className="w-24 bg-white border shadow-md rounded p-1 flex items-center gap-1 cursor-grab active:cursor-grabbing">
                    <Icons.Drag size="sm" className="opacity-50"/>
                    <span className="text-[8px]">Planning</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Split Schedule" centered>
                <div className="w-full px-2">
                    <div className="flex h-4 border rounded overflow-hidden">
                        <div className="w-1/2 bg-blue-100 flex items-center justify-center text-[6px]">AM</div>
                        <div className="w-1/2 bg-white flex items-center justify-center text-[6px]">PM</div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Availability" centered>
                <div className="flex w-full gap-0.5 px-2">
                    {[1,1,0,1,1,1,0].map((a, i) => (
                        <div key={i} className={`flex-1 h-6 rounded-sm ${a ? 'bg-green-100' : 'bg-gray-100 pattern-diagonal'}`} style={{ backgroundColor: a ? theme.colors.success + '20' : theme.colors.text + '05' }}></div>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="Multi-Day" centered>
                <div className="w-full px-2 relative">
                    <div className="grid grid-cols-7 gap-px h-8">
                        {Array.from({length: 7}).map((_, i) => <div key={i} className="border-r h-full"></div>)}
                    </div>
                    <div className="absolute top-2 left-[14%] right-[28%] h-4 rounded bg-blue-500 text-white text-[8px] flex items-center px-2 shadow-sm" style={{ backgroundColor: theme.colors.primary }}>
                        Conference
                    </div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 3. Date & Time Inputs --- */}
        <SectionTitle>3. Date & Time Inputs</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Date Picker" centered>
                <div className="border rounded px-2 py-1.5 flex items-center justify-between w-24 bg-white shadow-sm" style={{ borderColor: theme.colors.text + '20' }}>
                    <span className="text-[10px]">Oct 24, 2024</span>
                    <Icons.Calendar size="sm" className="opacity-50 w-3"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Date Range" centered>
                <div className="border rounded px-2 py-1.5 flex items-center gap-1 w-32 bg-white" style={{ borderColor: theme.colors.text + '20' }}>
                    <span className="text-[10px]">Oct 1</span>
                    <span className="text-[8px] opacity-50">→</span>
                    <span className="text-[10px]">Oct 15</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Time Input" centered>
                <div className="border rounded px-2 py-1.5 flex items-center gap-1 w-20 bg-white" style={{ borderColor: theme.colors.text + '20' }}>
                    <span className="text-[10px] font-mono">14:30</span>
                    <Icons.Clock size="sm" className="opacity-50 w-3 ml-auto"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Clock Face" centered>
                <div className="w-12 h-12 rounded-full border-2 relative" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="absolute top-1/2 left-1/2 w-px h-4 bg-black origin-bottom transform -translate-x-1/2 -translate-y-full rotate-45" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-black origin-bottom transform -translate-x-1/2 -translate-y-full -rotate-90" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Duration" centered>
                <div className="flex items-center border rounded overflow-hidden">
                    <input className="w-8 p-1 text-[10px] text-center outline-none bg-transparent" defaultValue="2"/>
                    <div className="bg-gray-100 px-1 text-[8px] py-1" style={{ backgroundColor: theme.colors.text + '10' }}>hrs</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Quick Select" centered>
                <div className="flex gap-1">
                    <button className="px-2 py-1 rounded border text-[8px] hover:bg-gray-50">Today</button>
                    <button className="px-2 py-1 rounded border text-[8px] hover:bg-gray-50">Tom</button>
                </div>
            </GalleryItem>
            <GalleryItem title="Time Scroller" centered>
                <div className="h-16 w-10 overflow-hidden border rounded relative text-center text-[10px]">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-5 border-y bg-gray-50 opacity-50 pointer-events-none"></div>
                    <div className="py-1 opacity-30">08</div>
                    <div className="py-1 opacity-60">09</div>
                    <div className="py-1 font-bold">10</div>
                    <div className="py-1 opacity-60">11</div>
                    <div className="py-1 opacity-30">12</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Timezone" centered>
                <div className="border rounded px-2 py-1 text-[8px] flex items-center gap-1 w-24">
                    <Icons.Grid size="sm" className="w-3 opacity-50"/> UTC-05:00 EST
                </div>
            </GalleryItem>
            <GalleryItem title="Mini Stepper" centered>
                <div className="flex border rounded">
                    <button className="px-1 hover:bg-gray-100 border-r text-[10px]">-</button>
                    <div className="px-2 text-[10px] py-0.5">1d</div>
                    <button className="px-1 hover:bg-gray-100 border-l text-[10px]">+</button>
                </div>
            </GalleryItem>
            <GalleryItem title="Recurrence" centered>
                <div className="flex items-center gap-1 text-[8px] text-blue-600 border border-blue-200 bg-blue-50 px-2 py-1 rounded">
                    <Icons.Refresh size="sm" className="w-3"/> Weekly
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Event Widgets --- */}
        <SectionTitle>4. Event Widgets</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Meeting Card" centered>
                <div className="border rounded p-2 w-full mx-2 shadow-sm bg-white">
                    <div className="text-[10px] font-bold truncate">Project Sync</div>
                    <div className="text-[8px] opacity-60 flex items-center gap-1 mt-1">
                        <Icons.Clock size="sm" className="w-2"/> 10:00 - 11:00
                    </div>
                    <div className="flex -space-x-1 mt-2">
                        <div className="w-4 h-4 rounded-full bg-gray-200 border border-white"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-300 border border-white"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Invite Row" centered>
                <div className="flex items-center justify-between w-full px-2 border rounded py-1 bg-white">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px]">JM</div>
                        <div className="text-[8px] font-bold">John M.</div>
                    </div>
                    <div className="text-[8px] text-green-600">Going</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Countdown" centered>
                <div className="flex gap-1 text-center">
                    <div className="bg-black text-white rounded p-1 w-6">
                        <div className="text-[8px] font-bold">02</div>
                        <div className="text-[4px] uppercase opacity-60">Hrs</div>
                    </div>
                    <div className="bg-black text-white rounded p-1 w-6">
                        <div className="text-[8px] font-bold">45</div>
                        <div className="text-[4px] uppercase opacity-60">Min</div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Reminder" centered>
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-2 py-1 rounded text-[8px] flex items-center gap-1">
                    <Icons.Bell size="sm" className="w-2"/> 15m before
                </div>
            </GalleryItem>
            <GalleryItem title="Conflict" centered>
                <div className="bg-red-50 border border-red-200 text-red-800 px-2 py-1 rounded text-[8px] flex items-center gap-1">
                    <Icons.Close size="sm" className="w-2"/> Conflict
                </div>
            </GalleryItem>
            <GalleryItem title="Video Slot" centered>
                <div className="border border-dashed rounded p-2 flex items-center justify-center gap-1 opacity-60 w-full mx-2">
                    <Icons.Wifi size="sm" className="w-3"/> Add Zoom
                </div>
            </GalleryItem>
            <GalleryItem title="All Day" centered>
                <div className="w-full bg-blue-500 text-white text-[8px] px-2 py-0.5 rounded shadow-sm mx-2 truncate">
                    Company Holiday
                </div>
            </GalleryItem>
            <GalleryItem title="Location" centered>
                <div className="flex items-center gap-1 text-[8px] opacity-60 w-full px-2">
                    <div className="w-3 h-3 rounded-full border flex items-center justify-center"><div className="w-1 h-1 bg-current rounded-full"></div></div>
                    Conf Room A
                </div>
            </GalleryItem>
            <GalleryItem title="Color Tag" centered>
                <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-red-400 border-2 border-white shadow-sm ring-1 ring-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-transparent"></div>
                    <div className="w-4 h-4 rounded-full bg-green-400 border-2 border-transparent"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="RSVP Buttons" centered>
                <div className="flex border rounded overflow-hidden">
                    <button className="px-2 py-1 text-[8px] hover:bg-green-50 text-green-700 border-r">Yes</button>
                    <button className="px-2 py-1 text-[8px] hover:bg-yellow-50 text-yellow-700 border-r">Maybe</button>
                    <button className="px-2 py-1 text-[8px] hover:bg-red-50 text-red-700">No</button>
                </div>
            </GalleryItem>
        </div>

        {/* --- 5. Advanced & Resource --- */}
        <SectionTitle>5. Advanced & Resource</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Swimlane" centered>
                <div className="w-full border rounded h-16 flex flex-col">
                    <div className="bg-gray-50 border-b px-2 py-0.5 text-[6px] font-bold">Room 1</div>
                    <div className="flex-1 relative">
                        <div className="absolute top-1 left-4 w-12 h-4 bg-blue-100 border border-blue-300 rounded text-[6px] px-1 flex items-center">Meeting</div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Utilization" centered>
                <div className="w-full px-4">
                    <div className="flex justify-between text-[6px] mb-0.5"><span>Capacity</span><span>80%</span></div>
                    <div className="h-1.5 w-full bg-gray-100 rounded overflow-hidden">
                        <div className="h-full bg-green-500 w-[80%]"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Fiscal Year" centered>
                <div className="flex w-full px-2 gap-0.5">
                    <div className="flex-1 border rounded text-[6px] text-center bg-gray-50">Q1</div>
                    <div className="flex-1 border rounded text-[6px] text-center">Q2</div>
                    <div className="flex-1 border rounded text-[6px] text-center">Q3</div>
                    <div className="flex-1 border rounded text-[6px] text-center">Q4</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Timeline Node" centered>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-2 h-2 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                    <div className="h-8 w-px bg-blue-500 -mt-2"></div>
                    <div className="text-[8px] bg-white border px-1 rounded shadow-sm">Milestone</div>
                </div>
            </GalleryItem>
            <GalleryItem title="World Clock" centered>
                <div className="w-full px-2 text-[8px]">
                    <div className="flex justify-between border-b pb-1"><span>LDN</span> <span>14:00</span></div>
                    <div className="flex justify-between pt-1 opacity-60"><span>NYC</span> <span>09:00</span></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Stopwatch" centered>
                <div className="font-mono text-lg font-bold tracking-wider">
                    00:45<span className="text-xs opacity-50">.32</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Age Gate" centered>
                <div className="w-full px-2">
                    <div className="text-[6px] uppercase mb-1">Date of Birth</div>
                    <div className="flex gap-1">
                        <input className="w-6 border rounded text-[8px] text-center" placeholder="DD"/>
                        <input className="w-6 border rounded text-[8px] text-center" placeholder="MM"/>
                        <input className="w-8 border rounded text-[8px] text-center" placeholder="YYYY"/>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Time Track" centered>
                <div className="flex items-center gap-2 border rounded px-2 py-1 w-full mx-2 bg-white shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono">01:23:45</span>
                    <Icons.Close size="sm" className="w-3 ml-auto opacity-50"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Busy Grid" centered>
                <div className="grid grid-cols-5 gap-0.5 w-full px-4">
                    {Array.from({length: 15}).map((_, i) => (
                        <div key={i} className={`h-2 rounded-sm ${Math.random() > 0.7 ? 'bg-red-200' : 'bg-green-200'}`}></div>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="Event Stack" centered>
                <div className="relative w-full px-4 h-12">
                    <div className="absolute top-0 left-4 right-4 h-6 bg-white border shadow-sm rounded z-20"></div>
                    <div className="absolute top-1 left-5 right-3 h-6 bg-gray-50 border shadow-sm rounded z-10"></div>
                    <div className="absolute top-2 left-6 right-2 h-6 bg-gray-100 border shadow-sm rounded z-0"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Resize Handle" centered>
                <div className="w-24 h-6 bg-blue-100 border border-blue-300 rounded relative flex items-center justify-center text-[8px] text-blue-800">
                    Meeting
                    <div className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize flex items-center justify-center hover:bg-blue-300">
                        <div className="w-0.5 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Multi-Select" centered>
                <div className="flex gap-1 w-full px-2 overflow-hidden">
                    <div className="bg-blue-500 text-white px-1 rounded text-[6px]">Oct 4</div>
                    <div className="bg-blue-500 text-white px-1 rounded text-[6px]">Oct 5</div>
                    <div className="bg-blue-500 text-white px-1 rounded text-[6px]">+2</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Time Block" centered>
                <div className="w-full mx-2 h-10 border-l-4 pl-2 flex flex-col justify-center bg-gray-50" style={{ borderLeftColor: theme.colors.primary }}>
                    <div className="text-[8px] font-bold">Deep Work</div>
                    <div className="text-[6px] opacity-60">No interruptions</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Now Line" centered>
                <div className="w-full relative h-8 flex items-center">
                    <div className="w-full border-t border-red-500"></div>
                    <div className="absolute left-0 w-2 h-2 bg-red-500 rounded-full -ml-1"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Legend" centered>
                <div className="flex flex-wrap gap-2 justify-center w-full px-2">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div><span className="text-[6px]">Work</span></div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="text-[6px]">Personal</span></div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
