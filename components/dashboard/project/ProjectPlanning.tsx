import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { Icons } from '../DashboardIcons';

export const ProjectPlanning: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
        {/* Roadmap / High Level */}
        <div className="grid md:grid-cols-4 gap-6">
            {['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'].map((quarter, i) => (
                <ThemedCard key={i} className="relative overflow-hidden min-h-[160px] flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-4xl" style={{ color: theme.colors.text }}>{quarter.split(' ')[0]}</div>
                    <h4 className="font-bold mb-4 z-10" style={{ color: theme.colors.text }}>{quarter}</h4>
                    <div className="space-y-2 z-10 flex-1">
                        <div className="p-2 rounded bg-opacity-10 text-xs font-medium border-l-4" style={{ backgroundColor: theme.colors.primary + '10', borderLeftColor: theme.colors.primary, color: theme.colors.text }}>
                            Core Platform Update
                        </div>
                        {i > 0 && (
                            <div className="p-2 rounded bg-opacity-10 text-xs font-medium border-l-4" style={{ backgroundColor: theme.colors.secondary + '10', borderLeftColor: theme.colors.secondary, color: theme.colors.text }}>
                                Marketing Campaign
                            </div>
                        )}
                        {i === 2 && (
                             <div className="p-2 rounded bg-opacity-10 text-xs font-medium border-l-4" style={{ backgroundColor: theme.colors.accent + '10', borderLeftColor: theme.colors.accent, color: theme.colors.text }}>
                                Enterprise Launch
                            </div>
                        )}
                    </div>
                </ThemedCard>
            ))}
        </div>

        {/* Gantt Chart Simulation */}
        <ThemedCard className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold" style={{ color: theme.colors.text }}>Timeline & Dependencies</h4>
                <div className="flex gap-2">
                    <ThemedButton size="sm" variant="outline">Day</ThemedButton>
                    <ThemedButton size="sm">Week</ThemedButton>
                    <ThemedButton size="sm" variant="outline">Month</ThemedButton>
                </div>
            </div>
            
            <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                    {/* Header */}
                    <div className="grid grid-cols-12 gap-1 mb-4 border-b pb-2" style={{ borderColor: theme.colors.text + '10' }}>
                        <div className="col-span-3 text-xs font-bold uppercase opacity-50 pl-2" style={{ color: theme.colors.text }}>Task</div>
                        {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'].map((w, i) => (
                            <div key={i} className="col-span-1 text-center text-xs font-bold opacity-50" style={{ color: theme.colors.text }}>{w}</div>
                        ))}
                    </div>

                    {/* Rows */}
                    <div className="space-y-4">
                        {[
                            { name: 'Research Phase', start: 1, duration: 2, color: theme.colors.primary },
                            { name: 'Design Concepts', start: 2, duration: 3, color: theme.colors.accent },
                            { name: 'Client Review', start: 5, duration: 1, color: theme.colors.textSecondary },
                            { name: 'Frontend Dev', start: 6, duration: 3, color: theme.colors.success },
                            { name: 'Backend API', start: 6, duration: 2, color: theme.colors.success },
                            { name: 'QA Testing', start: 8, duration: 1, color: theme.colors.error },
                        ].map((task, i) => (
                            <div key={i} className="grid grid-cols-12 gap-1 items-center relative group">
                                <div className="col-span-3 text-sm font-medium pl-2 truncate" style={{ color: theme.colors.text }}>{task.name}</div>
                                <div className="col-span-9 relative h-8 bg-gray-50 rounded-lg flex items-center" style={{ backgroundColor: theme.colors.text + '05' }}>
                                    {/* Grid Lines */}
                                    {Array.from({ length: 9 }).map((_, idx) => (
                                        <div key={idx} className="absolute h-full w-px bg-gray-200" style={{ left: `${(idx + 1) * 11.11}%`, borderColor: theme.colors.text + '05' }}></div>
                                    ))}
                                    {/* Bar */}
                                    <div 
                                        className="absolute h-6 rounded-md shadow-sm flex items-center px-2 text-[10px] font-bold text-white transition-all hover:brightness-110 cursor-pointer"
                                        style={{ 
                                            left: `${(task.start - 1) * 11.11}%`, 
                                            width: `${task.duration * 11.11}%`,
                                            backgroundColor: task.color,
                                            borderRadius: theme.borderRadius.sm
                                        }}
                                    >
                                        <span className="truncate">{task.duration}w</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ThemedCard>

        {/* Milestones */}
        <ThemedCard>
            <h4 className="font-bold mb-6" style={{ color: theme.colors.text }}>Project Milestones</h4>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
                 {/* Connecting Line */}
                 <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 -z-10 -translate-y-1/2" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                 
                 {[
                     { name: 'Kickoff', date: 'Oct 1', status: 'completed' },
                     { name: 'Design Freeze', date: 'Oct 20', status: 'completed' },
                     { name: 'Alpha Release', date: 'Nov 15', status: 'active' },
                     { name: 'Beta Launch', date: 'Dec 10', status: 'pending' },
                     { name: 'Go Live', date: 'Jan 1', status: 'pending' },
                 ].map((m, i) => (
                     <div key={i} className="flex md:flex-col items-center gap-4 md:gap-2 bg-white p-2 rounded-lg md:bg-transparent" style={{ backgroundColor: theme.colors.surface }}>
                         <div 
                            className={`w-8 h-8 rounded-full flex items-center justify-center border-4 font-bold text-xs z-10`}
                            style={{ 
                                borderColor: m.status === 'pending' ? theme.colors.text + '20' : m.status === 'active' ? theme.colors.primary : theme.colors.success,
                                backgroundColor: theme.colors.surface,
                                color: m.status === 'pending' ? theme.colors.textSecondary : theme.colors.text
                            }}
                         >
                            {m.status === 'completed' ? <Icons.Check size="sm"/> : i + 1}
                         </div>
                         <div className="md:text-center">
                             <div className="text-sm font-bold" style={{ color: theme.colors.text }}>{m.name}</div>
                             <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>{m.date}</div>
                         </div>
                     </div>
                 ))}
            </div>
        </ThemedCard>
    </div>
  );
};