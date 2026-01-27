import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full overflow-hidden">{children}</div>
);

export const DataGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Component Gallery (76 Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>A comprehensive collection of data-rich UI micro-components to test theme scalability.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* 1-10 Basic Data */}
            <GalleryItem title="Metric Simple">
                <div className="text-3xl font-bold" style={{ color: theme.colors.primary }}>$12k</div>
                <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Revenue</div>
            </GalleryItem>
            
            <GalleryItem title="Metric Trend">
                <div className="flex items-end justify-between w-full">
                    <div>
                        <div className="text-xl font-bold" style={{ color: theme.colors.text }}>2,543</div>
                        <div className="text-[10px] opacity-60" style={{ color: theme.colors.text }}>Daily</div>
                    </div>
                    <div className="text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center" style={{ backgroundColor: theme.colors.success + '15', color: theme.colors.success }}>
                        +12%
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="User Badge">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-gray-500" style={{ backgroundColor: theme.colors.text + '10' }}>JD</div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-white rounded-full" style={{ backgroundColor: theme.colors.success }}></div>
                    </div>
                    <div className="min-w-0">
                        <div className="text-xs font-bold truncate" style={{ color: theme.colors.text }}>Jane Doe</div>
                        <div className="text-[10px] opacity-60" style={{ color: theme.colors.text }}>Online</div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Task Item">
                <div className="flex items-center gap-3 p-2 rounded hover:bg-black/5 cursor-pointer w-full">
                    <div className="w-4 h-4 rounded border flex items-center justify-center shrink-0" style={{ borderColor: theme.colors.text }}></div>
                    <span className="text-xs line-through opacity-50 truncate" style={{ color: theme.colors.text }}>Update documentation</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Tag Group">
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold border" style={{ borderColor: theme.colors.primary, color: theme.colors.primary, backgroundColor: theme.colors.primary + '10' }}>Design</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold border" style={{ borderColor: theme.colors.secondary, color: theme.colors.secondary, backgroundColor: theme.colors.secondary + '10' }}>Dev</span>
                </div>
            </GalleryItem>

             <GalleryItem title="Status: Active" centered>
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                </span>
            </GalleryItem>

             <GalleryItem title="Status: Offline" centered>
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Offline
                </span>
            </GalleryItem>

            <GalleryItem title="Progress Ring" centered>
                 <div className="relative w-10 h-10 rounded-full border-4 flex items-center justify-center text-[10px] font-bold" style={{borderColor: theme.colors.text+'10', color: theme.colors.primary}}>
                     75%
                     <div className="absolute -top-1 -left-1 w-full h-full rounded-full border-4 border-t-transparent border-r-transparent transform -rotate-45" style={{borderColor: theme.colors.primary}}></div>
                 </div>
            </GalleryItem>

            <GalleryItem title="Avatar Group" centered>
                 <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">U{i}</div>
                     ))}
                 </div>
            </GalleryItem>
            
            <GalleryItem title="File Row">
                 <div className="flex items-center gap-2 w-full p-2 border rounded bg-gray-50">
                     <Icons.File size="sm" className="opacity-50"/>
                     <div className="flex-1 min-w-0">
                         <div className="text-[10px] font-bold truncate">report.pdf</div>
                         <div className="text-[8px] opacity-60">2.4MB</div>
                     </div>
                 </div>
            </GalleryItem>
            
            <GalleryItem title="Key Value">
                 <div className="w-full space-y-1">
                     <div className="flex justify-between text-[10px]">
                         <span className="opacity-60">ID</span>
                         <span className="font-mono">#8492</span>
                     </div>
                     <div className="flex justify-between text-[10px]">
                         <span className="opacity-60">Date</span>
                         <span>Oct 24</span>
                     </div>
                 </div>
            </GalleryItem>
            
            <GalleryItem title="Notification">
                 <div className="flex gap-2 items-start">
                     <div className="w-2 h-2 rounded-full mt-1 bg-red-500 shrink-0"></div>
                     <div className="text-[10px] leading-tight opacity-80">
                         Server CPU usage high (92%)
                     </div>
                 </div>
            </GalleryItem>
        </div>
        
        <SectionTitle>Complex Data Sets</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2">
                <GalleryItem title="Table Skeleton">
                     <div className="w-full">
                        <div className="flex gap-2 mb-2 border-b pb-1" style={{borderColor: theme.colors.text+'10'}}>
                             <div className="h-2 w-1/3 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                             <div className="h-2 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                             <div className="h-2 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        </div>
                        <div className="space-y-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="flex gap-2">
                                    <div className="h-2 w-1/3 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                                    <div className="h-2 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                                    <div className="h-2 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '05' }}></div>
                                </div>
                            ))}
                        </div>
                     </div>
                </GalleryItem>
            </div>
            
             <GalleryItem title="Activity Feed">
                 <div className="w-full space-y-3 relative">
                     <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gray-200"></div>
                     {[1,2,3].map(i => (
                         <div key={i} className="flex gap-3 relative">
                             <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-white z-10 shrink-0"></div>
                             <div>
                                 <div className="text-[10px] font-bold">User action {i}</div>
                                 <div className="text-[8px] opacity-60">2 hours ago</div>
                             </div>
                         </div>
                     ))}
                 </div>
            </GalleryItem>
        </div>
    </div>
  );
};