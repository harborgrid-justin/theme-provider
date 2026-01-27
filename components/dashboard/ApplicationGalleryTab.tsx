import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const ApplicationGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Application Micro-Components</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Common UI patterns for SaaS applications, dashboards, and admin panels.
        </p>

        {/* --- 1. App Navigation --- */}
        <SectionTitle>Navigation Patterns</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Sidebar Item" centered>
                <div className="flex items-center gap-3 w-full px-4 py-2 bg-gray-50 rounded">
                    <Icons.Home size="sm" className="opacity-50"/>
                    <span className="text-xs font-medium">Dashboard</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Sidebar Active" centered>
                <div className="flex items-center gap-3 w-full px-4 py-2 rounded" style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}>
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

            <GalleryItem title="Breadcrumb" centered>
                <div className="flex items-center gap-1 text-[10px] opacity-60">
                    <span>App</span> <Icons.ChevronRight size="sm" className="w-3"/> <span>User</span>
                </div>
            </GalleryItem>

            <GalleryItem title="User Menu" centered>
                <div className="flex items-center gap-2 border rounded-full pl-1 pr-3 py-1 shadow-sm bg-white">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <Icons.ChevronDown size="sm" className="w-3 opacity-50"/>
                </div>
            </GalleryItem>
        </div>

        {/* --- 2. Settings & Controls --- */}
        <SectionTitle>Settings Controls</SectionTitle>
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
                        <div className="absolute left-[80%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border shadow-sm rounded-full" style={{ borderColor: theme.colors.text + '20' }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Input Group" centered>
                <div className="w-full px-4">
                    <label className="text-[8px] font-bold uppercase opacity-50 block mb-1">Email</label>
                    <div className="border rounded px-2 py-1 text-[10px] text-gray-400 bg-gray-50">user@example.com</div>
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

            <GalleryItem title="Empty State" centered>
                <div className="flex flex-col items-center opacity-40">
                    <Icons.Folder size="md"/>
                    <span className="text-[8px] mt-1 font-bold">No Files</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Loading" centered>
                <div className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: theme.colors.primary, borderTopColor: 'transparent' }}></div>
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

            <GalleryItem title="Grid Card" centered>
                <div className="border rounded p-2 text-center shadow-sm w-20">
                    <div className="w-full h-8 bg-gray-100 mb-1 rounded-sm"></div>
                    <div className="text-[8px] font-bold">Image.png</div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
