import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

export const DataGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const sectionTitleStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    marginTop: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  const CardWrapper = ({ children, title }: { children?: React.ReactNode, title: string }) => (
      <ThemedCard className="flex flex-col justify-between h-full group hover:shadow-lg transition-shadow min-h-[120px]">
          <div className="text-[10px] uppercase font-bold tracking-wider opacity-40 mb-3" style={{ color: theme.colors.text }}>{title}</div>
          <div className="flex-1 flex flex-col justify-center">
            {children}
          </div>
      </ThemedCard>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <div style={sectionTitleStyle}>Component Gallery (75 Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>A comprehensive collection of data-rich UI micro-components to test theme scalability.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* 1-10 Basic Data */}
            <CardWrapper title="Metric Simple">
                <div className="text-3xl font-bold" style={{ color: theme.colors.primary }}>$12,450</div>
                <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Total Revenue</div>
            </CardWrapper>

            <CardWrapper title="Metric Trend">
                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-2xl font-bold" style={{ color: theme.colors.text }}>2,543</div>
                        <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Daily Visitors</div>
                    </div>
                    <div className="text-xs font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-700 flex items-center">
                        <Icons.Chart size="sm" className="mr-1"/> +12%
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="User Badge">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">JD</div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <div className="text-sm font-bold" style={{ color: theme.colors.text }}>Jane Doe</div>
                        <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Online</div>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Task Item">
                <div className="flex items-center gap-3 p-2 rounded hover:bg-black/5 cursor-pointer">
                    <div className="w-4 h-4 rounded border flex items-center justify-center" style={{ borderColor: theme.colors.text }}></div>
                    <span className="text-sm line-through opacity-50" style={{ color: theme.colors.text }}>Update documentation</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Tag Group">
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold border" style={{ borderColor: theme.colors.primary, color: theme.colors.primary, backgroundColor: theme.colors.primary + '10' }}>Design</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold border" style={{ borderColor: theme.colors.secondary, color: theme.colors.secondary, backgroundColor: theme.colors.secondary + '10' }}>Dev</span>
                </div>
            </CardWrapper>

            <CardWrapper title="File Item">
                 <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: theme.colors.error + '10', color: theme.colors.error }}>
                         <Icons.File size="sm"/>
                     </div>
                     <div className="flex-1 min-w-0">
                         <div className="text-sm font-medium truncate" style={{ color: theme.colors.text }}>report.pdf</div>
                         <div className="text-[10px] opacity-50" style={{ color: theme.colors.text }}>2.4 MB</div>
                     </div>
                 </div>
            </CardWrapper>

            <CardWrapper title="Progress Linear">
                <div className="flex justify-between text-xs mb-1" style={{ color: theme.colors.text }}>
                    <span>Loading...</span>
                    <span>75%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '75%', backgroundColor: theme.colors.primary }}></div>
                </div>
            </CardWrapper>

            <CardWrapper title="Notification">
                 <div className="flex gap-3">
                     <div className="mt-0.5" style={{ color: theme.colors.accent }}><Icons.Bell size="sm"/></div>
                     <div>
                         <div className="text-xs font-bold" style={{ color: theme.colors.text }}>New Comment</div>
                         <div className="text-[10px] opacity-60 leading-tight mt-0.5" style={{ color: theme.colors.text }}>Alex commented on your task</div>
                     </div>
                 </div>
            </CardWrapper>

            <CardWrapper title="Weather Widget">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-3xl font-light" style={{ color: theme.colors.text }}>72°</span>
                        <span className="text-xs opacity-60" style={{ color: theme.colors.text }}>San Francisco</span>
                    </div>
                    <div style={{ color: '#F59E0B' }}>
                        <Icons.Star size="lg"/>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Server Status">
                 <div className="flex items-center justify-between p-2 rounded border" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface }}>
                     <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                         <span className="text-xs font-bold" style={{ color: theme.colors.text }}>US-East-1</span>
                     </div>
                     <span className="text-[10px] opacity-60" style={{ color: theme.colors.text }}>99.9%</span>
                 </div>
            </CardWrapper>

            {/* 11-20 Cards & Layouts */}
            <div className="col-span-2">
                <ThemedCard className="h-full relative overflow-hidden flex flex-col justify-between text-white" style={{ background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})` }}>
                    <div className="flex justify-between items-start">
                         <div className="text-xs opacity-70 uppercase tracking-widest">Debit Card</div>
                         <Icons.Lock size="sm" className="opacity-70"/>
                    </div>
                    <div className="text-xl tracking-widest font-mono my-4">**** **** **** 4242</div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-[10px] opacity-70 uppercase">Card Holder</div>
                            <div className="text-sm font-medium">ALEX MORGAN</div>
                        </div>
                        <div className="flex flex-col items-end">
                             <div className="text-[10px] opacity-70 uppercase">Expires</div>
                             <div className="text-sm font-medium">12/25</div>
                        </div>
                    </div>
                </ThemedCard>
            </div>

            <CardWrapper title="Calendar Date">
                <div className="text-center border rounded-lg overflow-hidden" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="py-1 text-[10px] font-bold uppercase text-white" style={{ backgroundColor: theme.colors.error }}>Oct</div>
                    <div className="py-2 bg-white">
                        <span className="text-2xl font-bold" style={{ color: theme.colors.text }}>24</span>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Team">
                <div className="flex -space-x-2 justify-center">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">U{i}</div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">+2</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Toggle">
                 <div className="flex items-center justify-between">
                     <span className="text-xs font-medium" style={{ color: theme.colors.text }}>WiFi</span>
                     <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                         <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                     </div>
                 </div>
            </CardWrapper>

             <CardWrapper title="Sparkline">
                <div className="flex items-end gap-1 h-8 justify-between px-2">
                    {[40, 70, 45, 90, 60, 75, 50].map((h, i) => (
                        <div key={i} className="w-1.5 bg-indigo-500 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: theme.colors.primary }}></div>
                    ))}
                </div>
             </CardWrapper>

            <CardWrapper title="Message Left">
                <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none text-xs" style={{ backgroundColor: theme.colors.text + '05', color: theme.colors.text }}>
                    Can you send the files?
                </div>
                <div className="text-[10px] opacity-40 mt-1" style={{ color: theme.colors.text }}>10:42 AM</div>
            </CardWrapper>

            <CardWrapper title="Message Right">
                <div className="p-2 rounded-lg rounded-tr-none text-xs text-white self-end" style={{ backgroundColor: theme.colors.primary }}>
                    Sure, uploading now.
                </div>
                 <div className="text-[10px] opacity-40 mt-1 text-right" style={{ color: theme.colors.text }}>10:43 AM</div>
            </CardWrapper>

             <div className="col-span-2">
                <CardWrapper title="Stepper">
                    <div className="flex items-center w-full">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: theme.colors.primary }}><Icons.Check size="sm"/></div>
                        <div className="flex-1 h-0.5 mx-2" style={{ backgroundColor: theme.colors.primary }}></div>
                         <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>2</div>
                        <div className="flex-1 h-0.5 mx-2 bg-gray-200" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-gray-200 text-gray-400" style={{ borderColor: theme.colors.text + '20' }}>3</div>
                    </div>
                </CardWrapper>
             </div>

             <CardWrapper title="Pricing Mini">
                 <div className="text-center">
                     <div className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.colors.secondary }}>Pro</div>
                     <div className="text-2xl font-bold my-1" style={{ color: theme.colors.text }}>$29</div>
                 </div>
             </CardWrapper>

             {/* 21-30 Misc */}
             <div className="col-span-2">
                <CardWrapper title="Order Summary">
                    <div className="flex justify-between items-center text-sm border-b pb-2 mb-2" style={{ borderColor: theme.colors.text + '10' }}>
                        <span style={{ color: theme.colors.text }}>Order #4923</span>
                        <span className="font-mono" style={{ color: theme.colors.text }}>$142.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <span className="text-xs opacity-80" style={{ color: theme.colors.text }}>Shipped</span>
                        </div>
                        <button className="text-xs font-bold underline" style={{ color: theme.colors.primary }}>Track</button>
                    </div>
                </CardWrapper>
             </div>

             <div className="col-span-2">
                 <CardWrapper title="Search Result">
                     <div className="flex gap-3 items-start">
                         <div className="w-10 h-10 rounded bg-gray-100 flex-shrink-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593642632823-8f7856677741?auto=format&fit=crop&w=100&q=80)', backgroundSize: 'cover' }}></div>
                         <div>
                             <div className="text-sm font-bold" style={{ color: theme.colors.primary }}>Modern React Techniques</div>
                             <div className="text-[10px] mt-1 opacity-40" style={{ color: theme.colors.text }}>development • react</div>
                         </div>
                     </div>
                 </CardWrapper>
             </div>

             <CardWrapper title="Tooltip">
                 <div className="flex flex-col items-center justify-center h-full">
                     <div className="mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg relative">
                         Copied!
                         <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                     </div>
                     <button className="text-xs border px-2 py-1 rounded opacity-50">Click Me</button>
                 </div>
             </CardWrapper>

             <CardWrapper title="Review">
                 <div className="flex gap-0.5 mb-1" style={{ color: '#F59E0B' }}>
                     <Icons.Star size="sm"/>
                     <Icons.Star size="sm"/>
                     <Icons.Star size="sm"/>
                     <Icons.Star size="sm"/>
                     <Icons.Star size="sm" className="opacity-30"/>
                 </div>
                 <div className="text-xs" style={{ color: theme.colors.text }}>"Great product!"</div>
             </CardWrapper>

             <CardWrapper title="Donut">
                 <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                     <div className="w-full h-full rounded-full border-4 border-gray-100" style={{ borderColor: theme.colors.text + '10' }}></div>
                     <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-indigo-500 border-r-indigo-500 rotate-45" style={{ borderTopColor: theme.colors.primary, borderRightColor: theme.colors.primary }}></div>
                     <span className="text-xs font-bold absolute" style={{ color: theme.colors.text }}>75%</span>
                 </div>
             </CardWrapper>

             <div className="col-span-2">
                 <div className="p-3 rounded-lg border flex items-center gap-3 h-full" style={{ backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.primary + '30' }}>
                     <div style={{ color: theme.colors.primary }}><Icons.Help size="sm"/></div>
                     <div className="text-xs opacity-80" style={{ color: theme.colors.text }}>System update scheduled for midnight.</div>
                 </div>
             </div>

             <CardWrapper title="KPI Small">
                 <div className="text-center">
                     <div className="text-xs uppercase font-bold opacity-50" style={{ color: theme.colors.text }}>Speed</div>
                     <div className="text-xl font-mono font-bold" style={{ color: theme.colors.secondary }}>120ms</div>
                 </div>
             </CardWrapper>

             <CardWrapper title="Timeline">
                 <div className="pl-2 border-l-2 space-y-4" style={{ borderColor: theme.colors.text + '10' }}>
                     <div className="relative">
                         <div className="absolute -left-[13px] top-1 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                         <div className="text-xs font-bold" style={{ color: theme.colors.text }}>Created</div>
                         <div className="text-[10px] opacity-50">10m ago</div>
                     </div>
                     <div className="relative">
                         <div className="absolute -left-[13px] top-1 w-2 h-2 rounded-full bg-gray-300"></div>
                         <div className="text-xs font-bold" style={{ color: theme.colors.text }}>Edited</div>
                     </div>
                 </div>
             </CardWrapper>

             <CardWrapper title="Counter">
                 <div className="flex items-center justify-center gap-4">
                     <div className="relative">
                         <Icons.Chat size="md" style={{ color: theme.colors.text }}/>
                         <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] flex items-center justify-center font-bold">3</div>
                     </div>
                     <div className="relative">
                         <Icons.Bell size="md" style={{ color: theme.colors.text }}/>
                         <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                     </div>
                 </div>
             </CardWrapper>

             <div className="col-span-2">
                 <CardWrapper title="Code Snippet">
                     <div className="bg-gray-900 text-gray-300 p-3 rounded font-mono text-[10px] overflow-hidden">
                         <span className="text-purple-400">npm</span> install @chameleon/ui<br/>
                         <span className="text-green-400">Success!</span> Added 12 packages.
                     </div>
                 </CardWrapper>
             </div>

             <CardWrapper title="Empty State">
                 <div className="text-center py-2">
                     <div className="opacity-30 mb-1" style={{ color: theme.colors.text }}><Icons.Trash size="md"/></div>
                     <div className="text-[10px] opacity-50">No items</div>
                 </div>
             </CardWrapper>

            {/* 31-40 Loaders, Chips, Input States */}
            <CardWrapper title="Skeleton Row">
                <div className="w-full space-y-2">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-2/3 animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                </div>
            </CardWrapper>

            <CardWrapper title="Skeleton Card">
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded bg-gray-200 animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    <div className="flex-1 space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-3/4 animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2 animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Chip (Deletable)">
                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                    React <Icons.Close size="sm" className="ml-1 opacity-50 cursor-pointer hover:opacity-100"/>
                </div>
            </CardWrapper>

            <CardWrapper title="Filter Pill">
                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs cursor-pointer hover:brightness-95" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>
                    Sort: Date <Icons.ChevronDown size="sm" className="ml-1"/>
                </div>
            </CardWrapper>

            <CardWrapper title="Segmented Control">
                <div className="flex bg-gray-100 p-0.5 rounded text-[10px] font-bold" style={{ backgroundColor: theme.colors.text + '10' }}>
                    <div className="flex-1 py-1 px-2 text-center rounded shadow-sm bg-white" style={{ color: theme.colors.primary }}>Day</div>
                    <div className="flex-1 py-1 px-2 text-center opacity-60" style={{ color: theme.colors.text }}>Week</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Input Prefix">
                <div className="relative">
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xs opacity-50" style={{ color: theme.colors.text }}>$</div>
                    <input type="text" className="w-full pl-5 pr-2 py-1 text-xs border rounded" placeholder="0.00" style={{ borderColor: theme.colors.text + '30', backgroundColor: 'transparent' }} readOnly />
                </div>
            </CardWrapper>

            <CardWrapper title="Input Suffix">
                <div className="relative">
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs opacity-50" style={{ color: theme.colors.text }}>.com</div>
                    <input type="text" className="w-full pl-2 pr-8 py-1 text-xs border rounded" placeholder="domain" style={{ borderColor: theme.colors.text + '30', backgroundColor: 'transparent' }} readOnly />
                </div>
            </CardWrapper>

            <CardWrapper title="Textarea (Simple)">
                <div className="w-full h-12 border rounded p-1 text-[10px]" style={{ borderColor: theme.colors.text + '20', color: theme.colors.textSecondary }}>Type notes...</div>
            </CardWrapper>

            <CardWrapper title="Checkbox List">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded border flex items-center justify-center" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.primary }}><Icons.Check size="sm" className="text-white text-[8px]"/></div>
                        <span className="text-[10px]" style={{ color: theme.colors.text }}>Option A</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded border" style={{ borderColor: theme.colors.text + '40' }}></div>
                        <span className="text-[10px]" style={{ color: theme.colors.text }}>Option B</span>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Radio List">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full border flex items-center justify-center" style={{ borderColor: theme.colors.primary }}><div className="w-1.5 h-1.5 rounded-full bg-current" style={{ color: theme.colors.primary }}></div></div>
                        <span className="text-[10px]" style={{ color: theme.colors.text }}>Choice 1</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full border" style={{ borderColor: theme.colors.text + '40' }}></div>
                        <span className="text-[10px]" style={{ color: theme.colors.text }}>Choice 2</span>
                    </div>
                </div>
            </CardWrapper>

            {/* 41-50 Controls, Media, Maps */}
            <CardWrapper title="Color Picker">
                <div className="w-8 h-8 rounded-full shadow-inner border" style={{ background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)', borderColor: theme.colors.text + '20' }}></div>
            </CardWrapper>

            <CardWrapper title="Upload Zone">
                <div className="w-full h-12 border-2 border-dashed rounded flex flex-col items-center justify-center" style={{ borderColor: theme.colors.text + '20' }}>
                    <Icons.Cloud size="sm" style={{ color: theme.colors.primary }}/>
                </div>
            </CardWrapper>

            <CardWrapper title="Video Thumb">
                <div className="relative w-full h-12 bg-gray-900 rounded flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=100&q=80)' }}></div>
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur flex items-center justify-center pl-0.5">
                        <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent"></div>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Audio Player">
                <div className="flex items-center gap-2 w-full">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center" style={{ backgroundColor: theme.colors.primary, color: '#fff' }}>
                        <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
                    </div>
                    <div className="flex-1 h-6 flex items-center gap-0.5">
                        {[40, 70, 30, 80, 50, 90, 20].map((h, i) => (
                            <div key={i} className="flex-1 rounded-full" style={{ height: `${h}%`, backgroundColor: theme.colors.text + '40' }}></div>
                        ))}
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Image Grid">
                <div className="grid grid-cols-2 gap-1 w-full h-16">
                     <div className="bg-gray-100 rounded-sm bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=100&q=80)' }}></div>
                     <div className="bg-gray-100 rounded-sm bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=100&q=80)' }}></div>
                     <div className="bg-gray-100 rounded-sm bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=100&q=80)' }}></div>
                     <div className="bg-gray-100 rounded-sm bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=100&q=80)' }}></div>
                </div>
            </CardWrapper>

            <CardWrapper title="Map Pin">
                <div className="w-full h-16 bg-blue-50 rounded relative overflow-hidden" style={{ backgroundColor: '#e5f3ff' }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 transform -mt-2">
                        <Icons.Flag size="md"/>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Stat Down">
                <div className="text-center">
                    <div className="text-lg font-bold" style={{ color: theme.colors.text }}>14.2%</div>
                    <div className="text-[10px] font-bold text-red-500 flex items-center justify-center">
                         ▼ 2.1%
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Stat Neutral">
                 <div className="text-center">
                    <div className="text-lg font-bold" style={{ color: theme.colors.text }}>0.0%</div>
                    <div className="text-[10px] font-bold opacity-50 flex items-center justify-center">
                         — No change
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="KBD Shortcut">
                <div className="flex gap-1 justify-center">
                    <kbd className="px-1.5 py-0.5 border rounded text-[10px] font-mono bg-gray-50" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>⌘</kbd>
                    <kbd className="px-1.5 py-0.5 border rounded text-[10px] font-mono bg-gray-50" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>S</kbd>
                </div>
            </CardWrapper>

            <CardWrapper title="Breadcrumbs">
                <div className="flex items-center gap-1 text-[10px]" style={{ color: theme.colors.text }}>
                    <span className="opacity-60">Home</span>
                    <Icons.ChevronRight size="sm" className="opacity-30 text-[8px]"/>
                    <span className="font-bold">Settings</span>
                </div>
            </CardWrapper>

             {/* 51-60 Nav, Steps, Elements */}
             <CardWrapper title="Pagination">
                 <div className="flex gap-1 justify-center">
                     <div className="w-5 h-5 flex items-center justify-center text-[10px] rounded border" style={{ borderColor: theme.colors.text + '20' }}>1</div>
                     <div className="w-5 h-5 flex items-center justify-center text-[10px] rounded font-bold text-white" style={{ backgroundColor: theme.colors.primary }}>2</div>
                     <div className="w-5 h-5 flex items-center justify-center text-[10px] rounded border" style={{ borderColor: theme.colors.text + '20' }}>3</div>
                 </div>
             </CardWrapper>

             <CardWrapper title="Step Vertical">
                 <div className="flex flex-col items-center h-12 justify-between">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                     <div className="w-px h-full bg-gray-200" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                     <div className="w-2 h-2 rounded-full bg-gray-200" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                 </div>
             </CardWrapper>

             <CardWrapper title="Tab Bar">
                 <div className="flex gap-3 border-b w-full" style={{ borderColor: theme.colors.text + '10' }}>
                     <div className="text-[10px] font-bold pb-1 border-b-2" style={{ color: theme.colors.primary, borderColor: theme.colors.primary }}>Tab 1</div>
                     <div className="text-[10px] pb-1 opacity-50" style={{ color: theme.colors.text }}>Tab 2</div>
                 </div>
             </CardWrapper>

             <CardWrapper title="Menu Item">
                 <div className="flex items-center justify-between w-full p-1 rounded hover:bg-black/5 cursor-pointer">
                     <div className="flex items-center gap-2">
                         <Icons.Settings size="sm" className="opacity-60"/>
                         <span className="text-[10px]" style={{ color: theme.colors.text }}>Settings</span>
                     </div>
                     <span className="text-[8px] opacity-40">⇧S</span>
                 </div>
             </CardWrapper>

             <CardWrapper title="Context Menu">
                 <div className="w-full bg-white border rounded shadow-md p-1 space-y-1" style={{ borderColor: theme.colors.text + '10' }}>
                     <div className="text-[10px] px-2 py-1 hover:bg-black/5 rounded cursor-pointer">Edit</div>
                     <div className="text-[10px] px-2 py-1 hover:bg-red-50 text-red-500 rounded cursor-pointer">Delete</div>
                 </div>
             </CardWrapper>

             <CardWrapper title="Toast Success">
                 <div className="flex items-center gap-2 p-2 bg-green-50 rounded border border-green-100 w-full">
                     <Icons.Check size="sm" className="text-green-600"/>
                     <span className="text-[10px] text-green-800 font-bold">Saved!</span>
                 </div>
             </CardWrapper>

             <CardWrapper title="Toast Error">
                 <div className="flex items-center gap-2 p-2 bg-red-50 rounded border border-red-100 w-full">
                     <Icons.Close size="sm" className="text-red-600"/>
                     <span className="text-[10px] text-red-800 font-bold">Failed</span>
                 </div>
             </CardWrapper>

             <CardWrapper title="Banner Warning">
                 <div className="w-full h-2 bg-yellow-400 opacity-50 mb-1 rounded-full"></div>
                 <div className="text-[10px] text-center" style={{ color: theme.colors.text }}>System Maintenance</div>
             </CardWrapper>

             <CardWrapper title="Popover">
                 <div className="relative p-2 bg-black text-white text-[10px] rounded mb-2">
                     More Info
                     <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                 </div>
             </CardWrapper>

             <CardWrapper title="Drawer Handle">
                 <div className="w-full pt-4 relative bg-gray-50 rounded-t-lg border-t border-x h-10" style={{ borderColor: theme.colors.text + '10' }}>
                     <div className="w-8 h-1 bg-gray-300 rounded-full mx-auto" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                 </div>
             </CardWrapper>

            {/* 61-75 Content, Text, Icons */}
            <CardWrapper title="Quote">
                <div className="border-l-2 pl-2 italic text-[10px]" style={{ borderColor: theme.colors.primary, color: theme.colors.textSecondary }}>
                    "Simplicity is the ultimate sophistication."
                </div>
            </CardWrapper>

            <CardWrapper title="Definition">
                <div className="text-[10px]">
                    <span className="font-bold" style={{ color: theme.colors.text }}>Term:</span>
                    <span className="ml-1 opacity-70" style={{ color: theme.colors.text }}>Definition text here.</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Code Inline">
                <div className="text-[10px]">
                    Run <code className="bg-gray-100 px-1 rounded font-mono" style={{ color: theme.colors.primary }}>npm start</code>
                </div>
            </CardWrapper>

            <CardWrapper title="Divider Text">
                <div className="flex items-center w-full gap-2">
                    <div className="h-px flex-1 bg-gray-200"></div>
                    <span className="text-[8px] opacity-50 uppercase">OR</span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>
            </CardWrapper>

            <CardWrapper title="Table Header">
                <div className="flex items-center gap-1 cursor-pointer hover:bg-black/5 p-1 rounded">
                    <span className="text-[10px] font-bold" style={{ color: theme.colors.text }}>Name</span>
                    <Icons.ChevronDown size="sm" className="opacity-40 text-[10px]"/>
                </div>
            </CardWrapper>

            <CardWrapper title="Table Actions">
                <div className="flex gap-2 justify-center">
                    <Icons.Edit size="sm" className="opacity-50 hover:opacity-100 cursor-pointer"/>
                    <Icons.Trash size="sm" className="opacity-50 hover:opacity-100 hover:text-red-500 cursor-pointer"/>
                </div>
            </CardWrapper>

            <div className="col-span-2">
                <CardWrapper title="User Card Mini">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-gray-200" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        <div>
                            <div className="text-xs font-bold" style={{ color: theme.colors.text }}>Alex Morgan</div>
                            <div className="text-[10px] opacity-50">Product Manager</div>
                        </div>
                        <ThemedButton size="sm" variant="outline" className="ml-auto text-[10px] py-0.5 px-2">Follow</ThemedButton>
                    </div>
                </CardWrapper>
            </div>

            <CardWrapper title="Product Mini">
                <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded bg-gray-100 border"></div>
                    <div>
                        <div className="text-[10px] font-bold truncate w-16">Headphones</div>
                        <div className="text-[10px] font-mono" style={{ color: theme.colors.primary }}>$299</div>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="File Tree">
                <div className="text-[10px] pl-2 space-y-1" style={{ color: theme.colors.text }}>
                    <div className="flex items-center gap-1"><Icons.Folder size="sm" className="text-yellow-500"/> src</div>
                    <div className="flex items-center gap-1 pl-3"><Icons.File size="sm" className="opacity-50"/> index.ts</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Download Btn">
                <button className="flex items-center gap-1 px-2 py-1 rounded text-[10px] border hover:bg-gray-50" style={{ borderColor: theme.colors.text + '20' }}>
                    <Icons.Cloud size="sm"/> <span>PDF</span>
                </button>
            </CardWrapper>

            <CardWrapper title="Share Btn">
                <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/5" style={{ color: theme.colors.primary }}>
                    <Icons.Send size="sm"/>
                </div>
            </CardWrapper>

            <CardWrapper title="Like Btn">
                <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-50 text-red-500">
                    <Icons.Star size="sm"/>
                </div>
            </CardWrapper>

            <CardWrapper title="Verified">
                <div className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px]" style={{ backgroundColor: theme.colors.primary }}>
                    <Icons.Check size="sm"/>
                </div>
            </CardWrapper>

            <CardWrapper title="Online Dot">
                <div className="relative w-4 h-4">
                    <div className="absolute inset-0 bg-green-500 rounded-full opacity-30 animate-ping"></div>
                    <div className="absolute inset-1 bg-green-500 rounded-full border border-white"></div>
                </div>
            </CardWrapper>

            <CardWrapper title="Offline Dot">
                 <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>
            </CardWrapper>

        </div>
    </div>
  );
};