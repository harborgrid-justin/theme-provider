import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { Icons } from '../DashboardIcons';

export const DataDisplayDemo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
            <ThemedCard className="p-0 overflow-hidden">
                <div className="p-4 border-b font-bold text-sm uppercase opacity-70" style={{ borderColor: theme.colors.text + '10', color: theme.colors.text }}>Users Table</div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs uppercase font-bold" style={{backgroundColor: theme.colors.text+'05', color: theme.colors.textSecondary}}>
                            <tr>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Role</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y" style={{borderColor: theme.colors.text+'10'}}>
                            {[
                                {name: 'Alice Smith', role: 'Admin', status: 'Online'},
                                {name: 'Bob Jones', role: 'Editor', status: 'Offline'},
                                {name: 'Charlie Day', role: 'Viewer', status: 'Busy'},
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-black/5 transition-colors group">
                                    <td className="p-4 font-medium" style={{color: theme.colors.text}}>{row.name}</td>
                                    <td className="p-4" style={{color: theme.colors.textSecondary}}>{row.role}</td>
                                    <td className="p-4">
                                        <span className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${row.status === 'Online' ? 'bg-green-500' : row.status === 'Offline' ? 'bg-gray-400' : 'bg-orange-500'}`}></span>
                                        <span style={{color: theme.colors.text}}>{row.status}</span>
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="opacity-0 group-hover:opacity-100 p-1" style={{color: theme.colors.text}}>
                                            <Icons.More size="sm"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ThemedCard>

            <div className="space-y-8">
                 <div>
                    <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Avatars & Tags</h4>
                    <div className="flex items-center -space-x-3 mb-6">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm" style={{ backgroundColor: theme.colors.primary, opacity: 1 - (i * 0.1) }}>
                                U{i}
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 bg-gray-100 shadow-sm">
                            +5
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'Tailwind', 'Design'].map(tag => (
                            <span key={tag} className="px-2 py-1 rounded-md text-xs font-medium border flex items-center gap-1" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                                <Icons.Tag size="sm"/> {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Description List</h4>
                     <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-xs font-medium opacity-60" style={{ color: theme.colors.text }}>Full name</dt>
                            <dd className="mt-1 text-sm font-medium" style={{ color: theme.colors.text }}>Margot Foster</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-xs font-medium opacity-60" style={{ color: theme.colors.text }}>Application for</dt>
                            <dd className="mt-1 text-sm font-medium" style={{ color: theme.colors.text }}>Backend Developer</dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-xs font-medium opacity-60" style={{ color: theme.colors.text }}>About</dt>
                            <dd className="mt-1 text-sm" style={{ color: theme.colors.textSecondary }}>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Timeline */}
            <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-6" style={{ color: theme.colors.text }}>Timeline</h4>
                <div className="relative pl-4 border-l-2 space-y-8" style={{ borderColor: theme.colors.text + '10' }}>
                    {[
                        { title: 'Version 2.0 Released', date: 'Just now', icon: 'Rocket', color: theme.colors.success },
                        { title: 'Beta Testing', date: '2 days ago', icon: 'Beaker', color: theme.colors.primary },
                        { title: 'Design Phase', date: '1 week ago', icon: 'Pen', color: theme.colors.secondary },
                    ].map((item, i) => (
                        <div key={i} className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: item.color }}></div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h5 className="font-bold text-sm" style={{ color: theme.colors.text }}>{item.title}</h5>
                                <span className="text-xs opacity-50" style={{ color: theme.colors.text }}>{item.date}</span>
                            </div>
                            <p className="text-xs mt-1" style={{ color: theme.colors.textSecondary }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tree View & Code */}
            <div className="space-y-8">
                 <div>
                    <h4 className="text-sm font-bold opacity-50 uppercase mb-6" style={{ color: theme.colors.text }}>Tree View</h4>
                    <div className="text-sm space-y-2">
                         <div className="flex items-center gap-2" style={{ color: theme.colors.text }}><Icons.ChevronDown size="sm"/> <Icons.Folder size="sm"/> src</div>
                         <div className="pl-6 flex items-center gap-2" style={{ color: theme.colors.text }}><Icons.ChevronDown size="sm"/> <Icons.Folder size="sm"/> components</div>
                         <div className="pl-12 flex items-center gap-2" style={{ color: theme.colors.primary }}><Icons.File size="sm"/> Button.tsx</div>
                         <div className="pl-12 flex items-center gap-2" style={{ color: theme.colors.text }}><Icons.File size="sm"/> Card.tsx</div>
                         <div className="pl-6 flex items-center gap-2" style={{ color: theme.colors.text }}><Icons.ChevronRight size="sm"/> <Icons.Folder size="sm"/> utils</div>
                    </div>
                 </div>

                 <div>
                    <h4 className="text-sm font-bold opacity-50 uppercase mb-6" style={{ color: theme.colors.text }}>Code Block</h4>
                    <div className="p-4 rounded-lg font-mono text-xs overflow-x-auto" style={{ backgroundColor: theme.colors.text + '05', color: theme.colors.text }}>
                        <span style={{ color: theme.colors.primary }}>const</span> App = () <span style={{ color: theme.colors.secondary }}>=&gt;</span> {'{'}<br/>
                        &nbsp;&nbsp;<span style={{ color: theme.colors.primary }}>return</span> (<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Hello World&lt;/div&gt;<br/>
                        &nbsp;&nbsp;);<br/>
                        {'}'}
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
};