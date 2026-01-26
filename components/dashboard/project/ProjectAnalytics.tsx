import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

export const ProjectAnalytics: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
            <ThemedCard className="h-80 col-span-2">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold" style={{ color: theme.colors.text }}>Burndown Chart (Sprint 42)</h4>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-300"></div> Ideal</span>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div> Actual</span>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={[
                        { day: 'Day 1', ideal: 100, actual: 100 },
                        { day: 'Day 2', ideal: 90, actual: 95 },
                        { day: 'Day 3', ideal: 80, actual: 88 },
                        { day: 'Day 4', ideal: 70, actual: 82 },
                        { day: 'Day 5', ideal: 60, actual: 65 },
                        { day: 'Day 6', ideal: 50, actual: 55 },
                        { day: 'Day 7', ideal: 40, actual: 38 },
                        { day: 'Day 8', ideal: 30, actual: 25 },
                        { day: 'Day 9', ideal: 20, actual: 15 },
                        { day: 'Day 10', ideal: 10, actual: 5 },
                    ]}>
                        <defs>
                            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={theme.colors.primary} stopOpacity={0.2}/>
                                <stop offset="95%" stopColor={theme.colors.primary} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                        <Tooltip contentStyle={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.surface }} />
                        <Area type="monotone" dataKey="actual" stroke={theme.colors.primary} strokeWidth={3} fillOpacity={1} fill="url(#colorActual)" />
                        <Area type="monotone" dataKey="ideal" stroke="#cbd5e1" strokeDasharray="5 5" fill="transparent" />
                    </AreaChart>
                </ResponsiveContainer>
            </ThemedCard>

            <div className="space-y-6">
                <ThemedCard className="h-full flex flex-col justify-center">
                    <h4 className="text-sm font-bold mb-4" style={{ color: theme.colors.text }}>Budget Pacing</h4>
                    <div className="relative flex items-center justify-center flex-1">
                         <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={[{ name: 'Used', value: 65 }, { name: 'Remaining', value: 35 }]}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    <Cell fill={theme.colors.error} />
                                    <Cell fill={theme.colors.text + '10'} />
                                </Pie>
                            </PieChart>
                         </ResponsiveContainer>
                         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                             <span className="text-3xl font-bold" style={{ color: theme.colors.text }}>$65k</span>
                             <span className="text-xs opacity-50" style={{ color: theme.colors.text }}>of $100k</span>
                         </div>
                    </div>
                    <div className="text-center text-xs mt-2 text-red-500 font-medium">Over budget by 5% vs timeline</div>
                </ThemedCard>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <ThemedCard className="h-64">
                <h4 className="text-sm font-bold mb-4" style={{ color: theme.colors.text }}>Task Distribution</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                        { name: 'Feature', val: 45 },
                        { name: 'Bug', val: 23 },
                        { name: 'Chore', val: 12 },
                        { name: 'Refactor', val: 8 },
                    ]} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} />
                        <XAxis type="number" hide />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: theme.borderRadius.sm }} />
                        <Bar dataKey="val" fill={theme.colors.secondary} radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </ThemedCard>
            
            <ThemedCard className="h-64">
                <h4 className="text-sm font-bold mb-4" style={{ color: theme.colors.text }}>Velocity History</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                        { sprint: 'S1', points: 24 },
                        { sprint: 'S2', points: 18 },
                        { sprint: 'S3', points: 32 },
                        { sprint: 'S4', points: 28 },
                    ]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                        <XAxis dataKey="sprint" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                        <Tooltip contentStyle={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.surface }} />
                        <Bar dataKey="points" fill={theme.colors.primary} radius={[4, 4, 0, 0]} barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </ThemedCard>

            <ThemedCard className="h-64">
                <h4 className="text-sm font-bold mb-4" style={{ color: theme.colors.text }}>Team Skills</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="65%" data={[
                        { subject: 'FE', A: 120, B: 110, fullMark: 150 },
                        { subject: 'BE', A: 98, B: 130, fullMark: 150 },
                        { subject: 'UX', A: 86, B: 130, fullMark: 150 },
                        { subject: 'Ops', A: 99, B: 100, fullMark: 150 },
                        { subject: 'QA', A: 85, B: 90, fullMark: 150 },
                    ]}>
                        <PolarGrid opacity={0.2} />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: theme.colors.text }} />
                        <Radar name="Team" dataKey="A" stroke={theme.colors.primary} fill={theme.colors.primary} fillOpacity={0.3} />
                        <Legend wrapperStyle={{ fontSize: '10px' }} />
                    </RadarChart>
                </ResponsiveContainer>
            </ThemedCard>
        </div>
    </div>
  );
};