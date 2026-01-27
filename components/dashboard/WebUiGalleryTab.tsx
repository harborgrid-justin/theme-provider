import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Icons } from './DashboardIcons';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const WebUiGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Wireframe Primitives</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Fundamental building blocks for low and high fidelity prototyping.
        </p>

        {/* --- 1. Wireframe Primitives --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Image Box" centered>
                <div className="w-16 h-16 border flex items-center justify-center relative overflow-hidden bg-gray-50" style={{ borderColor: theme.colors.text + '40', borderRadius: theme.borderRadius.sm }}>
                    <div className="absolute inset-0 border-t border-r transform rotate-45 scale-[2] opacity-20" style={{ borderColor: theme.colors.text }}></div>
                    <div className="absolute inset-0 border-t border-l transform -rotate-45 scale-[2] opacity-20" style={{ borderColor: theme.colors.text }}></div>
                    <Icons.Image size="md" className="opacity-40 z-10"/>
                </div>
            </GalleryItem>

            <GalleryItem title="Avatar Circle" centered>
                <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-gray-50" style={{ borderColor: theme.colors.text + '20' }}>
                    <Icons.User size="md" className="opacity-40"/>
                </div>
            </GalleryItem>

            <GalleryItem title="Avatar Square" centered>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-50" style={{ borderRadius: theme.borderRadius.sm, borderColor: theme.colors.text + '20' }}>
                    <Icons.User size="md" className="opacity-40"/>
                </div>
            </GalleryItem>

            <GalleryItem title="Heading Block" centered>
                <div className="flex flex-col gap-2 w-full px-6 items-center max-w-full">
                    <div className="h-3 w-3/4 bg-gray-900" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                    <div className="h-2 w-1/2 opacity-40 bg-gray-900" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Text Paragraph" centered>
                <div className="flex flex-col gap-1.5 w-full px-6 max-w-full">
                    <div className="h-1.5 w-full opacity-20 bg-gray-900" style={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.text }}></div>
                    <div className="h-1.5 w-full opacity-20 bg-gray-900" style={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.text }}></div>
                    <div className="h-1.5 w-2/3 opacity-20 bg-gray-900" style={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.text }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Button Primary" centered>
                <div className="px-5 py-2 text-xs font-bold text-white shadow-sm whitespace-nowrap" style={{ backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.button }}>
                    Action
                </div>
            </GalleryItem>

            <GalleryItem title="Button Secondary" centered>
                <div className="px-5 py-2 text-xs font-bold whitespace-nowrap" style={{ backgroundColor: theme.colors.secondary, color: '#fff', borderRadius: theme.borderRadius.button }}>
                    Secondary
                </div>
            </GalleryItem>

            <GalleryItem title="Button Outline" centered>
                <div className="px-5 py-2 text-xs font-bold border whitespace-nowrap" style={{ borderColor: theme.colors.text + '40', color: theme.colors.text, borderRadius: theme.borderRadius.button, backgroundColor: theme.colors.surface }}>
                    Cancel
                </div>
            </GalleryItem>

            <GalleryItem title="Input Field" centered>
                <div className="w-full px-4 max-w-full">
                    <div className="h-9 border flex items-center px-3" style={{ borderColor: theme.colors.text + '40', borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.surface }}>
                        <div className="w-1/3 h-1.5 opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Checkbox Group" centered>
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border" style={{ borderColor: theme.colors.text + '60', borderRadius: theme.borderRadius.sm }}></div>
                        <div className="w-16 h-1.5 opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border flex items-center justify-center" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}>
                            <Icons.Check size="sm" className="text-white w-3 h-3"/>
                        </div>
                        <div className="w-16 h-1.5 opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Radio Group" centered>
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border rounded-full" style={{ borderColor: theme.colors.text + '60' }}></div>
                        <div className="w-16 h-1.5 opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border rounded-full flex items-center justify-center" style={{ borderColor: theme.colors.primary }}>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        </div>
                        <div className="w-16 h-1.5 opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Toggle Switch" centered>
                <div className="w-10 h-6 rounded-full relative transition-colors" style={{ backgroundColor: theme.colors.success }}>
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Rating Stars" centered>
                <div className="flex gap-1" style={{ color: theme.colors.warning }}>
                    <Icons.Star size="sm" className="w-4 h-4"/>
                    <Icons.Star size="sm" className="w-4 h-4"/>
                    <Icons.Star size="sm" className="w-4 h-4"/>
                    <Icons.Star size="sm" className="w-4 h-4 opacity-30"/>
                    <Icons.Star size="sm" className="w-4 h-4 opacity-30"/>
                </div>
            </GalleryItem>

            <GalleryItem title="Search Bar" centered>
                <div className="w-full px-4 max-w-full">
                    <div className="h-8 rounded-full border flex items-center px-3 gap-2" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '05' }}>
                        <Icons.Search size="sm" className="w-4 h-4 opacity-40"/>
                        <div className="w-16 h-1.5 rounded-full opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 2. Advanced Inputs --- */}
        <SectionTitle>Advanced Inputs</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Date Picker" centered>
                <div className="w-full px-4 max-w-full">
                    <div className="border flex items-center justify-between px-3 py-1.5 bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                        <span className="text-[10px] opacity-60 font-mono">YYYY-MM-DD</span>
                        <Icons.Calendar size="sm" className="opacity-40 w-4 h-4"/>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Time Input" centered>
                <div className="flex items-center gap-1 border px-3 py-1.5 bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                    <span className="text-xs font-mono">12</span>
                    <span className="opacity-40 text-xs">:</span>
                    <span className="text-xs font-mono">30</span>
                    <span className="text-[8px] px-1 ml-2 rounded bg-gray-100" style={{ backgroundColor: theme.colors.text + '10' }}>AM</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Range Slider" centered>
                <div className="w-full px-6 relative max-w-full">
                    <div className="h-1 rounded-full w-full opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="absolute top-0 h-1 left-10 right-10" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-10 w-4 h-4 rounded-full border shadow-sm bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-10 w-4 h-4 rounded-full border shadow-sm bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="OTP Input" centered>
                <div className="flex gap-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-10 border flex items-center justify-center bg-white" style={{ borderColor: i===1 ? theme.colors.primary : theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                            {i===1 && <div className="w-px h-5 animate-pulse bg-black"></div>}
                            {i>1 && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.text + '40' }}></div>}
                        </div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Tag Input" centered>
                <div className="w-full px-4 max-w-full">
                    <div className="border p-1.5 flex gap-1 flex-wrap bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                        <span className="px-2 py-0.5 rounded text-[10px] flex items-center gap-1 bg-gray-100" style={{ backgroundColor: theme.colors.text + '10' }}>
                            React <Icons.Close size="sm" className="w-2 h-2 cursor-pointer"/>
                        </span>
                        <div className="w-px h-4 animate-pulse bg-black mx-1" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Color Input" centered>
                <div className="flex items-center gap-2 border p-1 pr-3 bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-blue-500 border border-black/10"></div>
                    <span className="text-[10px] font-mono">#6366F1</span>
                </div>
            </GalleryItem>

            <GalleryItem title="File Dropzone" centered>
                <div className="w-full mx-4 h-12 border-2 border-dashed flex items-center justify-center gap-2 max-w-full bg-gray-50" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '05', borderRadius: theme.borderRadius.md }}>
                    <Icons.Cloud size="sm" className="opacity-40 w-4 h-4"/>
                    <span className="text-[8px] uppercase font-bold opacity-40">Drop File</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Rich Text Toolbar" centered>
                <div className="border flex overflow-hidden shadow-sm bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                    <div className="p-1.5 border-r font-bold text-[10px] hover:bg-gray-50 cursor-pointer" style={{ borderColor: theme.colors.text + '10' }}>B</div>
                    <div className="p-1.5 border-r italic text-[10px] hover:bg-gray-50 cursor-pointer" style={{ borderColor: theme.colors.text + '10' }}>I</div>
                    <div className="p-1.5 border-r underline text-[10px] hover:bg-gray-50 cursor-pointer" style={{ borderColor: theme.colors.text + '10' }}>U</div>
                    <div className="p-1.5 hover:bg-gray-50 cursor-pointer"><Icons.Link size="sm" className="w-3 h-3"/></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Password Field" centered>
                <div className="w-full px-4 relative max-w-full">
                    <div className="h-8 border flex items-center px-3 bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-black" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-black" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-black" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-black" style={{ backgroundColor: theme.colors.text }}></div>
                        </div>
                    </div>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-40"><Icons.Check size="sm" className="w-3 h-3"/></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Search Results" centered>
                <div className="relative w-full px-4 max-w-full">
                    <div className="border shadow-sm text-[10px] overflow-hidden bg-white" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                        <div className="p-1.5 border-b bg-gray-50" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '10' }}>Results...</div>
                        <div className="p-1.5 hover:bg-gray-50" style={{ backgroundColor: theme.colors.primary + '10' }}>Item A</div>
                        <div className="p-1.5 hover:bg-gray-50">Item B</div>
                    </div>
                </div>
            </GalleryItem>
             <GalleryItem title="Stepper Input" centered>
                <div className="flex items-center border rounded overflow-hidden bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <div className="px-2.5 py-1.5 bg-gray-50 border-r hover:bg-gray-100 cursor-pointer" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.text + '05' }}>-</div>
                    <div className="px-3 py-1.5 text-xs font-mono">5</div>
                    <div className="px-2.5 py-1.5 bg-gray-50 border-l hover:bg-gray-100 cursor-pointer" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.text + '05' }}>+</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Toggle Button" centered>
                <div className="flex rounded p-1 bg-gray-100" style={{ backgroundColor: theme.colors.text + '10' }}>
                    <div className="px-3 py-1 shadow-sm rounded text-[10px] font-bold bg-white" style={{ backgroundColor: theme.colors.surface }}>ON</div>
                    <div className="px-3 py-1 text-[10px] opacity-50 cursor-pointer">OFF</div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 3. Navigation & Menus --- */}
        <SectionTitle>Navigation & Menus</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Navbar Simple" centered>
                <div className="w-full h-10 border-b flex items-center justify-between px-4 bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <div className="w-5 h-5 rounded-sm" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="flex gap-2">
                        <div className="w-8 h-1.5 rounded-sm opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="w-8 h-1.5 rounded-sm opacity-20 bg-gray-900" style={{ backgroundColor: theme.colors.text }}></div>
                    </div>
                </div>
            </GalleryItem>
            
            <GalleryItem title="Breadcrumb" centered>
                <div className="flex items-center gap-1.5 text-[10px] opacity-60">
                         <span>Home</span>
                         <span>/</span>
                         <span style={{color: theme.colors.primary, fontWeight: 'bold'}}>Page</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Pagination" centered>
                <div className="flex gap-1.5">
                    <div className="w-5 h-5 border rounded flex items-center justify-center text-[8px] bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>&lt;</div>
                    <div className="w-5 h-5 border rounded flex items-center justify-center text-[8px] font-bold bg-gray-100" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '10' }}>1</div>
                    <div className="w-5 h-5 border rounded flex items-center justify-center text-[8px] bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>2</div>
                    <div className="w-5 h-5 border rounded flex items-center justify-center text-[8px] bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>&gt;</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Tabs" centered>
                <div className="w-full px-4">
                    <div className="flex border-b gap-4 text-[10px]" style={{borderColor: theme.colors.text+'20'}}>
                        <span className="font-bold border-b-2 pb-1" style={{borderColor: theme.colors.primary, color: theme.colors.primary}}>Tab 1</span>
                        <span className="opacity-50 pb-1">Tab 2</span>
                    </div>
                </div>
            </GalleryItem>

             <GalleryItem title="Sidebar Item" centered>
                <div className="w-full px-4">
                         <div className="flex items-center gap-3 p-2 rounded bg-gray-50" style={{backgroundColor: theme.colors.primary+'10'}}>
                             <Icons.Folder size="sm" className="w-4 h-4" style={{color: theme.colors.primary}}/>
                             <div className="w-16 h-1.5 rounded bg-current opacity-40" style={{color: theme.colors.primary}}></div>
                         </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Stepper Vert" centered>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: theme.colors.primary}}></div>
                        <div className="w-12 h-1.5 opacity-20 bg-gray-900" style={{backgroundColor: theme.colors.text}}></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full border" style={{borderColor: theme.colors.text}}></div>
                        <div className="w-12 h-1.5 opacity-20 bg-gray-900" style={{backgroundColor: theme.colors.text}}></div>
                    </div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Content Containers --- */}
        <SectionTitle>Content Containers</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Card Basic" centered>
                <div className="w-full mx-6 h-20 border rounded shadow-sm bg-white" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface}}>
                         <div className="h-4 w-full border-b bg-gray-50" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '10' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Modal Dialog" centered>
                     <div className="w-24 h-16 border rounded shadow-lg relative bg-white" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface}}>
                         <div className="absolute -right-1.5 -top-1.5 w-4 h-4 rounded-full bg-red-400 border-2 border-white shadow-sm"></div>
                         <div className="p-2 space-y-1.5">
                             <div className="w-full h-1.5 bg-gray-900 opacity-20 rounded" style={{ backgroundColor: theme.colors.text }}></div>
                             <div className="w-2/3 h-1.5 bg-gray-900 opacity-20 rounded" style={{ backgroundColor: theme.colors.text }}></div>
                         </div>
                     </div>
            </GalleryItem>

            <GalleryItem title="Accordion" centered>
                <div className="w-full px-4 space-y-1">
                    <div className="border rounded px-2 py-1.5 flex justify-between items-center text-[8px] bg-white" style={{ borderColor: theme.colors.text + '20' }}>
                        <span>Item 1</span>
                        <span>+</span>
                    </div>
                    <div className="border rounded px-2 py-1.5 flex justify-between items-center text-[8px] bg-white" style={{ borderColor: theme.colors.text + '20' }}>
                        <span>Item 2</span>
                        <span>-</span>
                    </div>
                </div>
            </GalleryItem>
            
             <GalleryItem title="Toast Alert" centered>
                     <div className="w-full mx-4 p-2 rounded shadow-sm border-l-4 flex gap-2 items-center bg-white" style={{borderColor: theme.colors.text+'10', borderLeftColor: theme.colors.success, backgroundColor: theme.colors.surface}}>
                         <div className="w-3 h-3 rounded-full shrink-0" style={{backgroundColor: theme.colors.success}}></div>
                         <div className="w-16 h-1.5 rounded bg-gray-900 opacity-20" style={{ backgroundColor: theme.colors.text }}></div>
                     </div>
            </GalleryItem>

             <GalleryItem title="Tooltip" centered>
                     <div className="relative">
                         <span className="text-[10px] underline decoration-dotted decoration-gray-400 cursor-help">Hover Me</span>
                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 bg-black text-white text-[8px] rounded shadow-lg whitespace-nowrap">
                             Tooltip Text
                             <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-4 border-transparent border-t-black"></div>
                         </div>
                     </div>
            </GalleryItem>

             <GalleryItem title="Banner" centered>
                     <div className="w-full mx-4 h-8 bg-blue-50 border border-blue-100 rounded flex items-center justify-center text-[8px] text-blue-600 font-medium">
                         Info Banner
                     </div>
            </GalleryItem>
        </div>
        
        {/* --- 5. Sitemap & Wireflows --- */}
        <SectionTitle>Sitemap & Wireflows</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Page Node" centered>
                <div className="px-4 py-2 border rounded shadow-sm text-[10px] font-bold bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    Home
                </div>
            </GalleryItem>

            <GalleryItem title="Link Path" centered>
                <div className="w-full px-6 flex items-center gap-1">
                         <div className="w-5 h-5 border rounded bg-white" style={{ borderColor: theme.colors.text + '20' }}></div>
                         <div className="flex-1 h-px relative bg-gray-400" style={{ backgroundColor: theme.colors.text + '40' }}>
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-600" style={{ backgroundColor: theme.colors.text + '60' }}></div>
                         </div>
                         <div className="w-5 h-5 border rounded bg-white" style={{ borderColor: theme.colors.text + '20' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="External Link" centered>
                <div className="px-3 py-1.5 border border-dashed rounded text-[10px] opacity-60 flex gap-1.5 items-center" style={{ borderColor: theme.colors.text + '40' }}>
                    External <Icons.Link size="sm" className="w-2.5 h-2.5"/>
                </div>
            </GalleryItem>

            <GalleryItem title="System Email" centered>
                <div className="w-12 h-8 border rounded relative flex items-center justify-center shadow-sm bg-white" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <div className="absolute top-0 left-0 right-0 h-5 border-b transform scale-x-75 origin-top" style={{ borderColor: theme.colors.text + '10' }}></div>
                    <span className="text-[8px] font-bold z-10 pt-1">@</span>
                </div>
            </GalleryItem>
            
            <GalleryItem title="Mobile Screen" centered>
                <div className="w-10 h-16 border-2 rounded-lg relative flex flex-col items-center justify-between py-1.5 bg-white" style={{borderColor: theme.colors.text+'40'}}>
                         <div className="w-3 h-0.5 bg-current opacity-20"></div>
                         <div className="w-1.5 h-1.5 rounded-full border bg-transparent" style={{ borderColor: theme.colors.text + '40' }}></div>
                </div>
            </GalleryItem>
            
             <GalleryItem title="Annotation" centered>
                <div className="w-8 h-8 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-700 flex items-center justify-center font-serif text-xs font-bold shadow-sm">
                    1
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};