import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { Icons } from '../DashboardIcons';

export const ProjectPortfolio: React.FC = () => {
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState<'grid' | 'kanban' | 'list'>('kanban');

  const getStatusColor = (status: string) => {
      switch(status) {
          case 'Done': return theme.colors.success;
          case 'In Progress': return theme.colors.primary;
          case 'Review': return '#F59E0B'; // Amber
          default: return theme.colors.textSecondary;
      }
  };

  return (
    <div className="space-y-8">
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold" style={{ color: theme.colors.text }}>Active Projects</h3>
            <div className="flex bg-gray-100 p-1 rounded-lg" style={{ backgroundColor: theme.colors.text + '05' }}>
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow text-indigo-600' : 'text-gray-500'}`} style={viewMode === 'grid' ? { color: theme.colors.primary } : { color: theme.colors.textSecondary }}><Icons.Menu/></button>
                <button onClick={() => setViewMode('kanban')} className={`p-2 rounded ${viewMode === 'kanban' ? 'bg-white shadow text-indigo-600' : 'text-gray-500'}`} style={viewMode === 'kanban' ? { color: theme.colors.primary } : { color: theme.colors.textSecondary }}><Icons.Chart/></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow text-indigo-600' : 'text-gray-500'}`} style={viewMode === 'list' ? { color: theme.colors.primary } : { color: theme.colors.textSecondary }}><Icons.Menu/></button>
            </div>
        </div>

        {viewMode === 'grid' && (
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { name: 'Mobile App Redesign', progress: 75, status: 'In Progress', lead: 'Sarah', due: '2 days left' },
                    { name: 'Cloud Migration', progress: 30, status: 'At Risk', lead: 'Mike', due: '1 week left' },
                    { name: 'Q4 Marketing', progress: 90, status: 'Done', lead: 'Jessica', due: 'Completed' },
                    { name: 'Internal Tools', progress: 45, status: 'In Progress', lead: 'Tom', due: '3 weeks' },
                    { name: 'Website Refresh', progress: 10, status: 'In Progress', lead: 'Anna', due: '1 month' },
                    { name: 'Analytics Dashboard', progress: 60, status: 'Review', lead: 'Dave', due: '5 days' },
                ].map((proj, i) => (
                    <ThemedCard key={i} className="cursor-pointer hover:-translate-y-1 transition-transform group h-full flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-sm`} style={{ backgroundColor: proj.status === 'At Risk' ? theme.colors.error : theme.colors.primary }}>
                                    {proj.name[0]}
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-bold`} style={{ 
                                    backgroundColor: proj.status === 'At Risk' ? theme.colors.error + '20' : theme.colors.success + '20', 
                                    color: proj.status === 'At Risk' ? theme.colors.error : theme.colors.success 
                                }}>
                                    {proj.status}
                                </span>
                            </div>
                            <h4 className="font-bold mb-4 group-hover:underline decoration-2" style={{ color: theme.colors.text, decorationColor: theme.colors.primary }}>{proj.name}</h4>
                            <div className="mb-6">
                                <div className="flex justify-between text-xs mb-1.5 opacity-70" style={{ color: theme.colors.text }}>
                                    <span>Progress</span>
                                    <span>{proj.progress}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-black/5 overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                                    <div className="h-full transition-all" style={{ width: `${proj.progress}%`, backgroundColor: proj.status === 'At Risk' ? theme.colors.error : theme.colors.primary }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-xs opacity-60 pt-4 border-t" style={{ borderColor: theme.colors.text + '10', color: theme.colors.text }}>
                             <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>
                                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300"></div>
                             </div>
                             <span>{proj.due}</span>
                        </div>
                    </ThemedCard>
                ))}
            </div>
        )}

        {viewMode === 'kanban' && (
            <div className="grid md:grid-cols-3 gap-6 overflow-x-auto pb-4">
                {['Backlog', 'In Progress', 'Done'].map((col, i) => (
                    <div key={i} className="min-w-[300px] flex flex-col h-full rounded-xl p-4 border" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background }}>
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-sm uppercase tracking-wide" style={{ color: theme.colors.text }}>{col}</h4>
                            <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text }}>3</span>
                        </div>
                        <div className="space-y-3 flex-1">
                            {[1, 2, 3].map(item => (
                                <ThemedCard key={item} className="p-4 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                    <div className="flex gap-2 mb-2">
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>Design</span>
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase" style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent }}>High</span>
                                    </div>
                                    <p className="text-sm font-medium mb-3" style={{ color: theme.colors.text }}>Implement new dashboard navigation</p>
                                    <div className="flex justify-between items-center">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: theme.colors.secondary + '30', color: theme.colors.secondary }}>AM</div>
                                        <div className="flex items-center gap-2 text-xs opacity-60" style={{ color: theme.colors.text }}>
                                            <div className="flex items-center gap-0.5"><Icons.Attach size="sm"/> 2</div>
                                            <div className="flex items-center gap-0.5"><Icons.Chat size="sm"/> 5</div>
                                        </div>
                                    </div>
                                </ThemedCard>
                            ))}
                        </div>
                        <button className="mt-4 w-full py-2 border-2 border-dashed rounded-lg text-sm font-medium opacity-50 hover:opacity-100 hover:bg-black/5 transition-all" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                            + Add Task
                        </button>
                    </div>
                ))}
            </div>
        )}

        {viewMode === 'list' && (
            <ThemedCard className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs uppercase font-bold border-b" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>
                            <tr>
                                <th className="p-4 text-left pl-6">Project Name</th>
                                <th className="p-4 text-left">Owner</th>
                                <th className="p-4 text-left">Timeline</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-left">Progress</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                            {[
                                { name: 'Mobile App V2', owner: 'Sarah W.', start: 'Oct 24', end: 'Dec 12', status: 'In Progress', progress: 45 },
                                { name: 'Website Redesign', owner: 'Mike J.', start: 'Nov 01', end: 'Jan 15', status: 'Planning', progress: 10 },
                                { name: 'Q4 Marketing', owner: 'Lisa M.', start: 'Oct 01', end: 'Dec 31', status: 'On Track', progress: 68 },
                                { name: 'API Integration', owner: 'Tom H.', start: 'Sep 15', end: 'Oct 30', status: 'Done', progress: 100 },
                            ].map((row, i) => (
                                <tr key={i} className="group hover:bg-black/5 transition-colors">
                                    <td className="p-4 pl-6 font-medium" style={{ color: theme.colors.text }}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">{row.name[0]}</div>
                                            {row.name}
                                        </div>
                                    </td>
                                    <td className="p-4" style={{ color: theme.colors.textSecondary }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">SW</div>
                                            {row.owner}
                                        </div>
                                    </td>
                                    <td className="p-4 text-xs" style={{ color: theme.colors.textSecondary }}>{row.start} - {row.end}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold border`} style={{ 
                                            borderColor: getStatusColor(row.status) + '40', 
                                            color: getStatusColor(row.status),
                                            backgroundColor: getStatusColor(row.status) + '10'
                                        }}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="p-4 w-32">
                                         <div className="flex items-center gap-2">
                                            <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full rounded-full" style={{ width: `${row.progress}%`, backgroundColor: getStatusColor(row.status) }}></div>
                                            </div>
                                            <span className="text-xs w-8 text-right" style={{ color: theme.colors.text }}>{row.progress}%</span>
                                         </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/10 transition-all text-gray-500">
                                            <Icons.More size="sm"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ThemedCard>
        )}
    </div>
  );
};