import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const ApplicationGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const activeBg = { backgroundColor: theme.colors.primary + '15', color: theme.colors.primary };
  const borderColor = { borderColor: theme.colors.text + '20' };

  // Helper for common SVG props for layouts
  const layoutSvgProps = {
    vectorEffect: "non-scaling-stroke",
    fill: theme.colors.surface,
    stroke: theme.colors.text,
    strokeWidth: "1",
    strokeOpacity: "0.2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const primaryFill = { fill: theme.colors.primary };
  const textFill = { fill: theme.colors.text, fillOpacity: "0.2" };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Application Micro-Components</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Common UI patterns for SaaS applications, dashboards, and admin panels.
        </p>

        {/* --- 1. Navigation Patterns --- */}
        <SectionTitle>Navigation Patterns</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Sidebar Item" centered>
                <div className="flex items-center gap-3 w-full px-4 py-2 bg-gray-50 rounded">
                    <Icons.Home size="sm" className="opacity-50"/>
                    <span className="text-xs font-medium">Dashboard</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Sidebar Active" centered>
                <div className="flex items-center gap-3 w-full px-4 py-2 rounded" style={activeBg}>
                    <Icons.Folder size="sm"/>
                    <span className="text-xs font-bold">Projects</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Tab: Active" centered>
                <div className="border-b-2 px-4 py-2 text-xs font-bold" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                    Settings
                </div>
            </GalleryItem>

            <GalleryItem title="Tab: Inactive" centered>
                <div className="px-4 py-2 text-xs font-medium opacity-50">
                    Profile
                </div>
            </GalleryItem>

            <GalleryItem title="Tab: Pill Active" centered>
                <div className="px-3 py-1 text-[10px] font-bold rounded-full" style={{ backgroundColor: theme.colors.primary, color: '#fff' }}>
                    Overview
                </div>
            </GalleryItem>

            <GalleryItem title="Tab: Pill Inactive" centered>
                <div className="px-3 py-1 text-[10px] font-bold rounded-full border opacity-60" style={borderColor}>
                    History
                </div>
            </GalleryItem>

            <GalleryItem title="Breadcrumb" centered>
                <div className="flex items-center gap-1 text-[10px] opacity-60">
                    <span>App</span> <Icons.ChevronRight size="sm" className="w-3"/> <span>User</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Breadcrumb: Path" centered>
                <div className="flex items-center gap-1 text-[10px]">
                    <span className="opacity-40">Home</span> <span className="opacity-30">/</span> <span className="font-bold">Details</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Pagination: Simple" centered>
                <div className="flex gap-1">
                    <div className="w-6 h-6 border rounded flex items-center justify-center text-[10px]" style={borderColor}>&lt;</div>
                    <div className="w-6 h-6 border rounded flex items-center justify-center text-[10px]" style={borderColor}>&gt;</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Pagination: Number" centered>
                <div className="flex gap-1">
                    <div className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-gray-100 font-bold">1</div>
                    <div className="w-5 h-5 rounded flex items-center justify-center text-[10px]" style={activeBg}>2</div>
                    <div className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-gray-100 font-bold">3</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Stepper: Dots" centered>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Stepper: Number" centered>
                <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] text-white" style={{ backgroundColor: theme.colors.primary }}>1</div>
                    <div className="w-4 h-0.5 bg-gray-200"></div>
                    <div className="w-5 h-5 rounded-full border flex items-center justify-center text-[8px]" style={borderColor}>2</div>
                </div>
            </GalleryItem>

            <GalleryItem title="User Menu" centered>
                <div className="flex items-center gap-2 border rounded-full pl-1 pr-3 py-1 shadow-sm bg-white">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <Icons.ChevronDown size="sm" className="w-3 opacity-50"/>
                </div>
            </GalleryItem>

            <GalleryItem title="Tree Item" centered>
                <div className="flex items-center gap-1 w-full px-4 text-[10px]">
                    <Icons.ChevronRight size="sm" className="w-3 opacity-50"/> 
                    <Icons.Folder size="sm" className="w-3 text-yellow-500"/>
                    <span>src</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Mobile Tab Bar" centered>
                <div className="flex justify-around w-full border-t pt-2" style={borderColor}>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 2. Forms & Inputs --- */}
        <SectionTitle>Forms & Inputs</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Toggle Row" centered>
                <div className="flex justify-between items-center w-full px-4">
                    <span className="text-[10px] font-bold">Wifi</span>
                    <div className="w-8 h-4 rounded-full relative" style={{ backgroundColor: theme.colors.success }}>
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Slider Row" centered>
                <div className="w-full px-4">
                    <div className="flex justify-between text-[8px] mb-1 opacity-50 font-bold"><span>Volume</span><span>80%</span></div>
                    <div className="w-full h-1 bg-gray-200 rounded-full relative">
                        <div className="absolute left-0 top-0 h-full w-[80%] rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="absolute left-[80%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border shadow-sm rounded-full" style={borderColor}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Range Dual" centered>
                <div className="w-full px-4 relative h-4 flex items-center">
                    <div className="w-full h-1 bg-gray-200 rounded-full"></div>
                    <div className="absolute h-1 left-1/4 right-1/4" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="absolute left-1/4 w-2.5 h-2.5 bg-white border shadow-sm rounded-full" style={borderColor}></div>
                    <div className="absolute right-1/4 w-2.5 h-2.5 bg-white border shadow-sm rounded-full" style={borderColor}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Input Group" centered>
                <div className="w-full px-4">
                    <label className="text-[8px] font-bold uppercase opacity-50 block mb-1">Email</label>
                    <div className="border rounded px-2 py-1 text-[10px] text-gray-400 bg-gray-50">user@example.com</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Search Input" centered>
                <div className="w-full px-4 relative">
                    <Icons.Search size="sm" className="absolute left-6 top-1/2 -translate-y-1/2 w-3 opacity-40"/>
                    <div className="border rounded-full pl-7 pr-2 py-1 text-[10px] text-gray-400">Search...</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Password Input" centered>
                <div className="w-full px-4 relative">
                    <div className="border rounded px-2 py-1 text-[10px] flex justify-between items-center">
                        <span className="tracking-widest">••••••</span>
                        <Icons.Eye size="sm" className="w-3 opacity-40"/>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Dropdown" centered>
                <div className="w-full px-4">
                    <div className="border rounded px-2 py-1 text-[10px] flex justify-between items-center shadow-sm bg-white">
                        <span>Select...</span>
                        <Icons.ChevronDown size="sm" className="w-3 opacity-50"/>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Date Input" centered>
                <div className="w-full px-4">
                    <div className="border rounded px-2 py-1 text-[10px] flex gap-2 items-center shadow-sm bg-white">
                        <Icons.Calendar size="sm" className="w-3 opacity-50"/>
                        <span>Oct 24, 2024</span>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Checkbox Item" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="w-4 h-4 rounded border flex items-center justify-center bg-blue-500 border-blue-500 text-white">
                        <Icons.Check size="sm" className="w-3"/>
                    </div>
                    <span className="text-[10px]">Remember me</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Radio Item" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="w-4 h-4 rounded-full border flex items-center justify-center border-blue-500">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-[10px]">Option A</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Segment Control" centered>
                <div className="flex bg-gray-100 p-0.5 rounded-lg border w-3/4">
                    <div className="flex-1 text-[8px] text-center py-1 bg-white shadow-sm rounded">Map</div>
                    <div className="flex-1 text-[8px] text-center py-1 opacity-50">List</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Number Stepper" centered>
                <div className="flex border rounded overflow-hidden">
                    <div className="px-2 bg-gray-50 border-r text-[10px]">-</div>
                    <div className="px-2 text-[10px] font-bold">1</div>
                    <div className="px-2 bg-gray-50 border-l text-[10px]">+</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Text Area" centered>
                <div className="w-full px-4">
                    <div className="border rounded px-2 py-1 h-8 text-[8px] text-gray-400 bg-gray-50 resize-none">Type here...</div>
                </div>
            </GalleryItem>

            <GalleryItem title="File Upload" centered>
                <div className="w-3/4 border border-dashed rounded px-2 py-3 flex flex-col items-center gap-1 bg-gray-50">
                    <Icons.Cloud size="sm" className="w-3 opacity-40"/>
                    <span className="text-[6px] opacity-50">Drop file</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Color Picker" centered>
                <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-red-500 ring-1 ring-offset-1 ring-gray-300"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Chip: Filter" centered>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full border bg-gray-50 text-[8px]">
                    <span>Price</span> <Icons.ChevronDown size="sm" className="w-2 opacity-50"/>
                </div>
            </GalleryItem>
        </div>

        {/* --- 3. Feedback & States --- */}
        <SectionTitle>Feedback & States</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Toast Success" centered>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-2 rounded shadow-sm w-full mx-2">
                    <Icons.Check size="sm" className="text-green-600"/>
                    <span className="text-[10px] font-bold text-green-800">Saved!</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Toast Error" centered>
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-2 rounded shadow-sm w-full mx-2">
                    <Icons.Close size="sm" className="text-red-600"/>
                    <span className="text-[10px] font-bold text-red-800">Failed</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Alert Info" centered>
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-2 py-1.5 rounded w-full mx-2">
                    <span className="text-[10px] text-blue-800">Update available.</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Alert Warning" centered>
                <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-2 py-1.5 rounded w-full mx-2">
                    <Icons.Help size="sm" className="w-3 text-yellow-600"/>
                    <span className="text-[10px] text-yellow-800">Check connection.</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Empty State" centered>
                <div className="flex flex-col items-center opacity-40">
                    <Icons.Folder size="md"/>
                    <span className="text-[8px] mt-1 font-bold">No Files</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Loading Spin" centered>
                <div className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: theme.colors.primary, borderTopColor: 'transparent' }}></div>
            </GalleryItem>

            <GalleryItem title="Loading Dots" centered>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-150"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Progress Bar" centered>
                <div className="w-3/4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/3" style={{ backgroundColor: theme.colors.primary }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Progress Ring" centered>
                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[8px] font-bold" style={{ borderColor: theme.colors.primary + '30', color: theme.colors.primary }}>
                    75
                </div>
            </GalleryItem>

            <GalleryItem title="Skeleton Row" centered>
                <div className="w-full px-4 space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                        <div className="h-2 w-20 bg-gray-100 rounded"></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Badge Count" centered>
                <div className="relative">
                    <Icons.Bell size="md"/>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">3</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Badge New" centered>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[8px] font-bold uppercase">New</span>
            </GalleryItem>

            <GalleryItem title="Status Online" centered>
                <div className="flex items-center gap-1.5 text-[10px]">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div> Online
                </div>
            </GalleryItem>

            <GalleryItem title="Tooltip Box" centered>
                <div className="relative flex flex-col items-center">
                    <div className="bg-black text-white text-[8px] px-2 py-1 rounded mb-1">Help</div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Content Lists --- */}
        <SectionTitle>Content Lists</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="List Item" centered>
                <div className="flex items-center justify-between w-full px-4 py-2 border-b">
                    <span className="text-[10px]">Item Name</span>
                    <Icons.ChevronRight size="sm" className="opacity-30 w-3"/>
                </div>
            </GalleryItem>

            <GalleryItem title="List Checkbox" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="w-3 h-3 border rounded"></div>
                    <span className="text-[10px]">Select item</span>
                </div>
            </GalleryItem>

            <GalleryItem title="List Action" centered>
                <div className="flex items-center justify-between w-full px-4">
                    <span className="text-[10px]">Project A</span>
                    <div className="px-2 py-0.5 border rounded text-[8px]">Edit</div>
                </div>
            </GalleryItem>

            <GalleryItem title="File Item" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <Icons.File size="sm" className="opacity-50"/>
                    <div className="flex-1">
                        <div className="text-[10px] font-bold">doc.pdf</div>
                        <div className="text-[8px] opacity-50">2mb</div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="User Item" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <div className="flex-1">
                        <div className="text-[10px] font-bold">Jane Doe</div>
                        <div className="text-[8px] opacity-50">Admin</div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Chat Bubble" centered>
                <div className="bg-blue-500 text-white px-3 py-1.5 rounded-2xl rounded-tr-sm text-[10px]">
                    Hello there!
                </div>
            </GalleryItem>

            <GalleryItem title="Notification" centered>
                <div className="flex gap-2 w-full px-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1"></div>
                    <div className="flex-1">
                        <div className="text-[10px] font-bold">New Login</div>
                        <div className="text-[8px] opacity-50">2m ago</div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Comment" centered>
                <div className="flex gap-2 w-full px-3">
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                    <div className="flex-1 text-[8px]">
                        <span className="font-bold">User</span> Great work!
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Timeline Item" centered>
                <div className="flex gap-2 w-full px-4 items-center">
                    <div className="w-2 h-2 rounded-full border-2 border-blue-500"></div>
                    <div className="h-px w-4 bg-gray-200"></div>
                    <div className="text-[10px]">Step 1</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Grid Card" centered>
                <div className="border rounded p-2 text-center shadow-sm w-20">
                    <div className="w-full h-8 bg-gray-100 mb-1 rounded-sm"></div>
                    <div className="text-[8px] font-bold">Image.png</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Card: Media Top" centered>
                <div className="border rounded overflow-hidden w-24 shadow-sm">
                    <div className="h-10 bg-gray-100"></div>
                    <div className="p-2">
                        <div className="h-2 w-12 bg-gray-200 rounded mb-1"></div>
                        <div className="h-1 w-full bg-gray-100 rounded"></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Card: Pricing" centered>
                <div className="border rounded p-2 w-24 text-center shadow-sm">
                    <div className="text-[8px] uppercase opacity-50">Basic</div>
                    <div className="text-lg font-bold leading-none my-1">$9</div>
                    <div className="h-4 bg-blue-500 text-white text-[8px] rounded flex items-center justify-center">Buy</div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 5. App Shells (Layouts) --- */}
        <SectionTitle>App Shells</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Sidebar Left" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="25" height="60" {...layoutSvgProps} />
                    <rect x="25" y="0" width="75" height="60" {...layoutSvgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sidebar Right" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="75" y="0" width="25" height="60" {...layoutSvgProps} />
                    <rect x="0" y="0" width="75" height="60" {...layoutSvgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Double Sidebar" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutSvgProps} />
                    <rect x="20" y="0" width="20" height="60" {...layoutSvgProps} />
                    <rect x="40" y="0" width="60" height="60" {...layoutSvgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sidebar Collapsed" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="10" height="60" {...layoutSvgProps} />
                    <rect x="10" y="0" width="90" height="60" {...layoutSvgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Top Nav" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="12" {...layoutSvgProps} />
                    <rect x="0" y="12" width="100" height="48" {...layoutSvgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Nav + Subnav" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="12" {...layoutSvgProps} />
                    <rect x="0" y="12" width="100" height="8" {...layoutSvgProps} />
                    <rect x="0" y="20" width="100" height="40" {...layoutSvgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Layout: Holy Grail" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="10" {...layoutSvgProps} />
                    <rect x="0" y="10" width="20" height="40" {...layoutSvgProps} />
                    <rect x="80" y="10" width="20" height="40" {...layoutSvgProps} />
                    <rect x="20" y="10" width="60" height="40" {...layoutSvgProps} fill="none" />
                    <rect x="0" y="50" width="100" height="10" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bottom Nav" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="50" width="100" height="10" {...layoutSvgProps} />
                    <rect x="0" y="0" width="100" height="50" {...layoutSvgProps} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Split View" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="50" height="60" {...layoutSvgProps} />
                    <rect x="50" y="0" width="50" height="60" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Overlay Sidebar" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" {...layoutSvgProps} fill="none" />
                    <rect x="60" y="0" width="40" height="60" {...layoutSvgProps} style={{...layoutSvgProps, fill: theme.colors.surface}} />
                    <line x1="60" y1="0" x2="60" y2="60" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Page Headers --- */}
        <SectionTitle>Page Headers</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Simple Header" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="10" width="40" height="6" rx="2" {...primaryFill} />
                    <rect x="5" y="20" width="60" height="4" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Header w/ Actions" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="15" width="40" height="6" rx="2" {...textFill} />
                    <rect x="75" y="12" width="20" height="10" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Header w/ Breadcrumb" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="5" width="30" height="4" rx="2" {...textFill} />
                    <rect x="5" y="15" width="50" height="6" rx="2" {...textFill} style={{fillOpacity: 0.5}} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Header w/ Tabs" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="5" width="40" height="6" rx="2" {...textFill} />
                    <rect x="5" y="25" width="20" height="4" rx="2" {...primaryFill} />
                    <rect x="30" y="25" width="20" height="4" rx="2" {...textFill} />
                    <line x1="0" y1="35" x2="100" y2="35" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Header w/ Search" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="12" width="30" height="6" rx="2" {...textFill} />
                    <rect x="50" y="10" width="45" height="10" rx="5" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Profile Header" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <circle cx="15" cy="15" r="8" {...layoutSvgProps} />
                    <rect x="30" y="10" width="30" height="4" rx="1" {...textFill} />
                    <rect x="30" y="18" width="20" height="3" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Banner Header" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="0" width="100" height="25" {...layoutSvgProps} fill={theme.colors.primary} fillOpacity="0.1" />
                    <rect x="10" y="30" width="20" height="4" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Stepper Header" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <circle cx="20" cy="15" r="4" {...primaryFill} />
                    <line x1="25" y1="15" x2="45" y2="15" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="50" cy="15" r="4" {...layoutSvgProps} />
                    <line x1="55" y1="15" x2="75" y2="15" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="80" cy="15" r="4" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Filter Bar" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="12" width="20" height="8" rx="2" {...layoutSvgProps} />
                    <rect x="30" y="12" width="20" height="8" rx="2" {...layoutSvgProps} />
                    <rect x="55" y="12" width="20" height="8" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Metrics Header" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="5" width="25" height="25" rx="2" {...layoutSvgProps} />
                    <rect x="35" y="5" width="25" height="25" rx="2" {...layoutSvgProps} />
                    <rect x="65" y="5" width="25" height="25" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Dashboard Grids --- */}
        <SectionTitle>Dashboard & Grids</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="2 Col Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="42" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="53" y="5" width="42" height="50" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="3 Col Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="2" y="5" width="30" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="35" y="5" width="30" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="68" y="5" width="30" height="50" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sidebar + Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutSvgProps} fillOpacity="0.5" />
                    <rect x="25" y="5" width="35" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="63" y="5" width="35" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="25" y="30" width="73" height="25" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Chart + List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="60" height="50" rx="2" {...layoutSvgProps} />
                    <path d="M10,45 L20,35 L30,40 L40,25 L50,30" fill="none" stroke={theme.colors.primary} strokeWidth="1" />
                    <rect x="70" y="5" width="25" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="75" y="10" width="15" height="2" {...textFill} />
                    <rect x="75" y="20" width="15" height="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bento Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="40" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="50" y="5" width="45" height="22" rx="2" {...layoutSvgProps} />
                    <rect x="50" y="33" width="45" height="22" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Masonry" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="30" rx="2" {...layoutSvgProps} />
                    <rect x="5" y="40" width="28" height="15" rx="2" {...layoutSvgProps} />
                    <rect x="36" y="5" width="28" height="15" rx="2" {...layoutSvgProps} />
                    <rect x="36" y="25" width="28" height="30" rx="2" {...layoutSvgProps} />
                    <rect x="67" y="5" width="28" height="50" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Feature Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="20" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="40" y="10" width="20" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="70" y="10" width="20" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="10" y="40" width="20" height="4" rx="1" {...textFill} />
                    <rect x="40" y="40" width="20" height="4" rx="1" {...textFill} />
                    <rect x="70" y="40" width="20" height="4" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hero Split" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="50" height="60" {...layoutSvgProps} />
                    <rect x="10" y="20" width="30" height="4" rx="1" {...textFill} />
                    <rect x="10" y="30" width="20" height="3" rx="1" {...textFill} />
                    <rect x="10" y="40" width="15" height="6" rx="2" {...primaryFill} />
                    <rect x="50" y="0" width="50" height="60" {...layoutSvgProps} fillOpacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hero Center" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" {...layoutSvgProps} />
                    <rect x="25" y="20" width="50" height="4" rx="1" {...textFill} />
                    <rect x="35" y="30" width="30" height="3" rx="1" {...textFill} />
                    <rect x="40" y="40" width="20" height="6" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sticky Footer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="0" y="50" width="100" height="10" {...layoutSvgProps} />
                    <rect x="10" y="53" width="80" height="4" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 8. Data Lists --- */}
        <SectionTitle>Data Lists</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Simple Table" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutSvgProps} />
                    <line x1="5" y1="20" x2="95" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="5" y1="35" x2="95" y2="35" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Striped Table" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="6" y="20" width="88" height="10" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="6" y="40" width="88" height="10" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Card List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="12" rx="2" {...layoutSvgProps} />
                    <rect x="10" y="22" width="80" height="12" rx="2" {...layoutSvgProps} />
                    <rect x="10" y="39" width="80" height="12" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Avatar List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="15" cy="15" r="5" {...layoutSvgProps} />
                    <rect x="25" y="12" width="60" height="6" rx="2" {...textFill} />
                    <circle cx="15" cy="30" r="5" {...layoutSvgProps} />
                    <rect x="25" y="27" width="60" height="6" rx="2" {...textFill} />
                    <circle cx="15" cy="45" r="5" {...layoutSvgProps} />
                    <rect x="25" y="42" width="60" height="6" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Kanban Board" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="50" rx="2" {...layoutSvgProps} fillOpacity="0.05" />
                    <rect x="8" y="10" width="22" height="10" rx="1" {...layoutSvgProps} />
                    <rect x="8" y="22" width="22" height="10" rx="1" {...layoutSvgProps} />
                    <rect x="36" y="5" width="28" height="50" rx="2" {...layoutSvgProps} fillOpacity="0.05" />
                    <rect x="39" y="10" width="22" height="10" rx="1" {...layoutSvgProps} />
                    <rect x="67" y="5" width="28" height="50" rx="2" {...layoutSvgProps} fillOpacity="0.05" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Timeline List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <line x1="20" y1="5" x2="20" y2="55" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="20" cy="15" r="3" {...primaryFill} />
                    <rect x="30" y="12" width="50" height="6" rx="2" {...textFill} />
                    <circle cx="20" cy="30" r="3" {...layoutSvgProps} />
                    <rect x="30" y="27" width="50" height="6" rx="2" {...textFill} />
                    <circle cx="20" cy="45" r="3" {...layoutSvgProps} />
                    <rect x="30" y="42" width="50" height="6" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Calendar Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="2" {...layoutSvgProps} />
                    <line x1="10" y1="20" x2="90" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="10" y1="35" x2="90" y2="35" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="36" y1="5" x2="36" y2="55" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="63" y1="5" x2="63" y2="55" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Feed List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="25" y="0" width="50" height="60" fill={theme.colors.surface} />
                    <rect x="30" y="5" width="40" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="30" y="30" width="40" height="25" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Inbox List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="30" height="60" {...layoutSvgProps} fillOpacity="0.05" />
                    <rect x="5" y="10" width="20" height="4" rx="1" {...textFill} />
                    <rect x="5" y="20" width="20" height="4" rx="1" {...textFill} />
                    <rect x="30" y="0" width="70" height="60" fill="none" />
                    <rect x="40" y="10" width="50" height="40" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Gallery Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="36" y="5" width="28" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="67" y="5" width="28" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="5" y="30" width="28" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="36" y="30" width="28" height="20" rx="2" {...layoutSvgProps} />
                    <rect x="67" y="30" width="28" height="20" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 9. Forms & Details --- */}
        <SectionTitle>Forms & Details</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Profile Detail" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="20" cy="20" r="10" {...layoutSvgProps} />
                    <rect x="40" y="15" width="40" height="4" rx="1" {...textFill} />
                    <rect x="40" y="25" width="30" height="3" rx="1" {...textFill} />
                    <rect x="10" y="40" width="80" height="15" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="2 Col Form" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="42" height="8" rx="2" {...layoutSvgProps} />
                    <rect x="53" y="5" width="42" height="8" rx="2" {...layoutSvgProps} />
                    <rect x="5" y="18" width="42" height="8" rx="2" {...layoutSvgProps} />
                    <rect x="53" y="18" width="42" height="8" rx="2" {...layoutSvgProps} />
                    <rect x="5" y="35" width="90" height="15" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Wizard Form" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="5" width="60" height="4" rx="2" {...primaryFill} />
                    <rect x="10" y="15" width="80" height="30" rx="2" {...layoutSvgProps} />
                    <rect x="70" y="50" width="20" height="6" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Settings List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="20" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="35" y="5" width="55" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="40" y="10" width="30" height="4" rx="1" {...textFill} />
                    <rect x="40" y="20" width="40" height="4" rx="1" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Document View" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="0" width="60" height="60" {...layoutSvgProps} fill="white" />
                    <rect x="25" y="10" width="40" height="4" rx="1" {...textFill} />
                    <rect x="25" y="20" width="50" height="2" rx="1" {...textFill} fillOpacity="0.1" />
                    <rect x="25" y="25" width="50" height="2" rx="1" {...textFill} fillOpacity="0.1" />
                    <rect x="25" y="30" width="30" height="2" rx="1" {...textFill} fillOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Invoice Layout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="50" rx="2" {...layoutSvgProps} />
                    <rect x="15" y="10" width="20" height="6" rx="1" {...textFill} />
                    <rect x="75" y="10" width="10" height="6" rx="1" {...textFill} />
                    <rect x="15" y="25" width="70" height="20" rx="1" stroke={theme.colors.text} strokeOpacity="0.1" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Comment Thread" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="15" cy="15" r="5" {...layoutSvgProps} />
                    <rect x="25" y="10" width="60" height="15" rx="2" {...layoutSvgProps} />
                    <circle cx="15" cy="40" r="5" {...layoutSvgProps} />
                    <rect x="25" y="35" width="60" height="15" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="File Browser" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="10" width="20" height="25" rx="2" {...layoutSvgProps} />
                    <rect x="30" y="10" width="20" height="25" rx="2" {...layoutSvgProps} />
                    <rect x="55" y="10" width="20" height="25" rx="2" {...layoutSvgProps} />
                    <rect x="5" y="40" width="90" height="15" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Search Results" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="8" rx="4" {...layoutSvgProps} />
                    <rect x="10" y="20" width="80" height="10" rx="2" {...layoutSvgProps} />
                    <rect x="10" y="35" width="80" height="10" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Chat Layout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="30" height="60" {...layoutSvgProps} />
                    <rect x="30" y="0" width="70" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="35" y="10" width="30" height="8" rx="4" {...primaryFill} opacity="0.5" />
                    <rect x="65" y="25" width="30" height="8" rx="4" {...layoutSvgProps} />
                    <rect x="30" y="50" width="70" height="10" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 10. Authentication --- */}
        <SectionTitle>Authentication</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Login Box" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="30" y="5" width="40" height="50" rx="3" {...layoutSvgProps} />
                    <rect x="35" y="15" width="30" height="6" rx="1" {...layoutSvgProps} />
                    <rect x="35" y="25" width="30" height="6" rx="1" {...layoutSvgProps} />
                    <rect x="35" y="35" width="30" height="8" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Split Login" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="50" height="60" {...layoutSvgProps} fill={theme.colors.primary} fillOpacity="0.1" />
                    <rect x="50" y="0" width="50" height="60" {...layoutSvgProps} />
                    <rect x="60" y="20" width="30" height="4" rx="1" {...layoutSvgProps} />
                    <rect x="60" y="30" width="30" height="6" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sign Up" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="25" y="5" width="50" height="50" rx="3" {...layoutSvgProps} />
                    <rect x="35" y="12" width="30" height="4" rx="1" {...layoutSvgProps} />
                    <rect x="35" y="20" width="30" height="4" rx="1" {...layoutSvgProps} />
                    <rect x="35" y="28" width="30" height="4" rx="1" {...layoutSvgProps} />
                    <rect x="35" y="38" width="30" height="6" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Forgot Pass" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="30" y="10" width="40" height="40" rx="3" {...layoutSvgProps} />
                    <rect x="35" y="25" width="30" height="6" rx="1" {...layoutSvgProps} />
                    <rect x="35" y="35" width="30" height="6" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="OTP Entry" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="10" width="60" height="40" rx="3" {...layoutSvgProps} />
                    <rect x="25" y="25" width="10" height="10" rx="2" {...layoutSvgProps} />
                    <rect x="38" y="25" width="10" height="10" rx="2" {...layoutSvgProps} />
                    <rect x="51" y="25" width="10" height="10" rx="2" {...layoutSvgProps} />
                    <rect x="64" y="25" width="10" height="10" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="SSO Login" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="30" y="5" width="40" height="50" rx="3" {...layoutSvgProps} />
                    <rect x="35" y="15" width="30" height="6" rx="2" {...layoutSvgProps} />
                    <rect x="35" y="25" width="30" height="6" rx="2" {...layoutSvgProps} />
                    <line x1="35" y1="38" x2="65" y2="38" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Lock Screen" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" {...layoutSvgProps} fillOpacity="0.5" />
                    <circle cx="50" cy="20" r="5" {...layoutSvgProps} />
                    <rect x="35" y="30" width="30" height="6" rx="3" {...layoutSvgProps} fill="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Onboarding" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="5" width="60" height="50" rx="3" {...layoutSvgProps} />
                    <circle cx="50" cy="20" r="8" {...primaryFill} opacity="0.5" />
                    <rect x="30" y="35" width="40" height="4" rx="1" {...textFill} />
                    <circle cx="45" cy="45" r="2" {...primaryFill} />
                    <circle cx="50" cy="45" r="2" {...textFill} />
                    <circle cx="55" cy="45" r="2" {...textFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 11. Overlays & Utility --- */}
        <SectionTitle>Overlays & Utility</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Modal Small" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="30" y="15" width="40" height="30" rx="3" {...layoutSvgProps} fill="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Modal Large" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="10" y="5" width="80" height="50" rx="3" {...layoutSvgProps} fill="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Drawer Right" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="60" y="0" width="40" height="60" {...layoutSvgProps} fill="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Drawer Left" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="0" y="0" width="40" height="60" {...layoutSvgProps} fill="white" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bottom Sheet" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.1" />
                    <path d="M10,60 V35 Q10,30 15,30 H85 Q90,30 90,35 V60" fill="white" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Toast Stack" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="60" y="10" width="30" height="10" rx="2" {...layoutSvgProps} />
                    <rect x="60" y="25" width="30" height="10" rx="2" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Popover" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="20" width="20" height="10" rx="2" {...primaryFill} />
                    <path d="M40,25 L45,20 L45,30 Z" fill="white" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                    <rect x="45" y="15" width="30" height="20" rx="2" fill="white" stroke={theme.colors.text} strokeWidth="1" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tooltip Arrow" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="40" y="35" width="20" height="6" rx="2" {...textFill} />
                    <path d="M45,28 H55 L50,33 Z" fill={theme.colors.text} />
                    <rect x="35" y="18" width="30" height="10" rx="2" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 12. Footers --- */}
        <SectionTitle>Footers</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Simple Footer" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="100" height="30" {...layoutSvgProps} fillOpacity="0.05" />
                    <rect x="40" y="12" width="20" height="4" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cols Footer" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="100" height="30" {...layoutSvgProps} fillOpacity="0.05" />
                    <rect x="10" y="8" width="15" height="3" rx="1" {...textFill} />
                    <rect x="10" y="14" width="10" height="2" rx="1" {...textFill} />
                    <rect x="40" y="8" width="15" height="3" rx="1" {...textFill} />
                    <rect x="40" y="14" width="10" height="2" rx="1" {...textFill} />
                    <rect x="70" y="8" width="15" height="3" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Fat Footer" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="0" width="100" height="40" {...layoutSvgProps} fillOpacity="0.05" />
                    <rect x="10" y="5" width="20" height="20" rx="2" {...textFill} />
                    <rect x="40" y="10" width="50" height="4" rx="1" {...textFill} />
                    <rect x="40" y="18" width="30" height="4" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Newsletter" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="100" height="30" {...layoutSvgProps} fillOpacity="0.05" />
                    <rect x="10" y="10" width="50" height="10" rx="2" {...layoutSvgProps} />
                    <rect x="65" y="10" width="25" height="10" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sitemap Footer" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="0" width="100" height="40" {...layoutSvgProps} fillOpacity="0.05" />
                    <rect x="10" y="10" width="15" height="20" rx="1" {...layoutSvgProps} />
                    <rect x="30" y="10" width="15" height="20" rx="1" {...layoutSvgProps} />
                    <rect x="50" y="10" width="15" height="20" rx="1" {...layoutSvgProps} />
                    <rect x="70" y="10" width="15" height="20" rx="1" {...layoutSvgProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Legal Footer" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <rect x="0" y="0" width="100" height="20" {...layoutSvgProps} fillOpacity="0.05" />
                    <line x1="10" y1="10" x2="90" y2="10" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="10" y="14" width="30" height="2" {...textFill} />
                    <rect x="80" y="14" width="10" height="2" {...textFill} />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
