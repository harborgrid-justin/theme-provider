import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { Icons } from '../DashboardIcons';

export const ProjectFiles: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
        {/* Quick Access Grid */}
        <h3 className="text-lg font-bold" style={{ color: theme.colors.text }}>Documents & Assets</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {['Contracts', 'Design Assets', 'Specifications', 'Invoices', 'Reports'].map((folder, i) => (
                 <ThemedCard key={i} className="flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-50 transition-colors group">
                     <div className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform">
                         <Icons.Folder size="xl" />
                     </div>
                     <span className="text-sm font-medium text-center" style={{ color: theme.colors.text }}>{folder}</span>
                     <span className="text-[10px] opacity-50" style={{ color: theme.colors.text }}>{Math.floor(Math.random() * 20) + 1} items</span>
                 </ThemedCard>
             ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <ThemedCard className="col-span-2 p-0 overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: theme.colors.text + '10' }}>
                     <h4 className="font-bold text-sm" style={{ color: theme.colors.text }}>Recent Uploads</h4>
                     <button className="text-xs font-medium text-indigo-600 hover:underline">View All</button>
                </div>
                <table className="w-full text-sm">
                    <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                        {[
                            { name: 'Q4_Financial_Report.pdf', size: '2.4 MB', type: 'pdf', date: 'Today, 10:23 AM', user: 'Alex M.' },
                            { name: 'Homepage_Mockup_v3.fig', size: '45 MB', type: 'fig', date: 'Yesterday', user: 'James R.' },
                            { name: 'Project_Timeline.xlsx', size: '128 KB', type: 'xls', date: 'Oct 24', user: 'Sarah W.' },
                            { name: 'Logo_Pack_Final.zip', size: '12 MB', type: 'zip', date: 'Oct 22', user: 'James R.' },
                        ].map((file, i) => (
                            <tr key={i} className="hover:bg-gray-50 group">
                                <td className="p-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded flex items-center justify-center bg-gray-100 text-gray-500">
                                        <Icons.File size="sm"/>
                                    </div>
                                    <div>
                                        <div className="font-medium" style={{ color: theme.colors.text }}>{file.name}</div>
                                        <div className="text-[10px] opacity-60" style={{ color: theme.colors.text }}>{file.size}</div>
                                    </div>
                                </td>
                                <td className="p-4 text-xs opacity-60" style={{ color: theme.colors.text }}>{file.date}</td>
                                <td className="p-4 text-xs" style={{ color: theme.colors.text }}>
                                     <div className="flex items-center gap-2">
                                         <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-[8px] font-bold text-indigo-600">
                                             {file.user.split(' ')[0][0]}
                                         </div>
                                         {file.user}
                                     </div>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded text-gray-500">
                                        <Icons.More size="sm"/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ThemedCard>

            <div className="space-y-6">
                <ThemedCard>
                     <h4 className="font-bold text-sm mb-4" style={{ color: theme.colors.text }}>Storage Usage</h4>
                     <div className="relative w-40 h-40 mx-auto mb-4">
                         {/* Simple CSS Donut representation */}
                         <div className="w-full h-full rounded-full border-[12px] border-gray-100 flex items-center justify-center relative">
                            <div 
                                className="absolute inset-0 rounded-full border-[12px] border-transparent"
                                style={{ 
                                    borderTopColor: theme.colors.primary, 
                                    borderRightColor: theme.colors.primary, 
                                    transform: 'rotate(45deg)',
                                    zIndex: 10
                                }}
                            ></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold" style={{ color: theme.colors.text }}>75%</div>
                                <div className="text-[10px] opacity-60" style={{ color: theme.colors.text }}>Used</div>
                            </div>
                         </div>
                     </div>
                     <div className="space-y-2 text-xs">
                         <div className="flex justify-between" style={{ color: theme.colors.text }}>
                             <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Documents</span>
                             <span className="font-bold">12 GB</span>
                         </div>
                         <div className="flex justify-between" style={{ color: theme.colors.text }}>
                             <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gray-300"></div> Images</span>
                             <span className="font-bold">4.2 GB</span>
                         </div>
                     </div>
                     <ThemedButton size="sm" variant="outline" className="w-full mt-6">Upgrade Storage</ThemedButton>
                </ThemedCard>
            </div>
        </div>
    </div>
  );
};