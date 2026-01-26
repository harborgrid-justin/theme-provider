import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { Icons } from '../DashboardIcons';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, CartesianGrid } from 'recharts';

export const ProjectTeam: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold" style={{ color: theme.colors.text }}>Team & Resources</h3>
            <ThemedButton size="sm"><Icons.User/> Add Member</ThemedButton>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-4 gap-6">
            {[
                { name: 'Alex Morgan', role: 'Product Manager', status: 'Online', skills: ['Roadmap', 'Jira'] },
                { name: 'Sarah Wilson', role: 'Lead Engineer', status: 'In Meeting', skills: ['React', 'Node', 'AWS'] },
                { name: 'James Ray', role: 'UI/UX Designer', status: 'Offline', skills: ['Figma', 'Prototyping'] },
                { name: 'Emily Chen', role: 'Frontend Dev', status: 'Online', skills: ['React', 'Tailwind'] },
            ].map((member, i) => (
                <ThemedCard key={i} className="text-center group hover:shadow-lg cursor-pointer h-full flex flex-col items-center">
                    <div className="relative inline-block mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold border-4 border-white shadow-sm" style={{ color: theme.colors.textSecondary }}>
                            {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className={`absolute bottom-1 right-0 w-5 h-5 rounded-full border-2 border-white ${member.status === 'Online' ? 'bg-green-500' : member.status === 'Offline' ? 'bg-gray-400' : 'bg-orange-500'}`}></div>
                    </div>
                    <h4 className="font-bold text-sm" style={{ color: theme.colors.text }}>{member.name}</h4>
                    <p className="text-xs mb-4 opacity-60" style={{ color: theme.colors.text }}>{member.role}</p>
                    
                    <div className="flex flex-wrap justify-center gap-1.5 mb-6 flex-1 items-start content-start">
                        {member.skills.map(s => (
                            <span key={s} className="text-[10px] px-2 py-0.5 rounded border opacity-80" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text, backgroundColor: theme.colors.text + '05' }}>{s}</span>
                        ))}
                    </div>
                    
                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                         <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: theme.colors.textSecondary }}><Icons.Chat size="sm"/></button>
                         <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: theme.colors.textSecondary }}><Icons.Calendar size="sm"/></button>
                    </div>
                </ThemedCard>
            ))}
        </div>

        {/* Capacity Planning & Org */}
        <div className="grid md:grid-cols-3 gap-6">
            <ThemedCard className="col-span-2 h-80 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold" style={{ color: theme.colors.text }}>Resource Capacity (Hours)</h4>
                    <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded" style={{ backgroundColor: theme.colors.primary }}></div> Assigned</div>
                        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div> Available</div>
                    </div>
                </div>
                <div className="flex-1 min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                            { name: 'Alex', assigned: 35, available: 5 },
                            { name: 'Sarah', assigned: 38, available: 2 },
                            { name: 'James', assigned: 20, available: 20 },
                            { name: 'Emily', assigned: 30, available: 10 },
                            { name: 'Mike', assigned: 40, available: 0 },
                        ]} layout="vertical" barSize={20} margin={{ top: 0, right: 30, left: 30, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} stroke={theme.colors.text} />
                            <XAxis type="number" hide />
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.surface, color: theme.colors.text }} />
                            {/* Use Axis to show names */}
                            <Bar dataKey="assigned" stackId="a" fill={theme.colors.primary} radius={[0, 0, 0, 0]} />
                            <Bar dataKey="available" stackId="a" fill={theme.colors.text + '10'} radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </ThemedCard>

            <ThemedCard className="h-80 flex flex-col">
                <h4 className="font-bold mb-4" style={{ color: theme.colors.text }}>Department</h4>
                <div className="space-y-3 flex-1 overflow-y-auto">
                    <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50/50 hover:bg-gray-100/50 transition-colors cursor-pointer" style={{ borderColor: theme.colors.text + '10' }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>ENG</div>
                        <div className="flex-1">
                            <div className="text-sm font-bold" style={{ color: theme.colors.text }}>Engineering</div>
                            <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>12 Members</div>
                        </div>
                        <Icons.ChevronRight size="sm" style={{ color: theme.colors.textSecondary }}/>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50/50 hover:bg-gray-100/50 transition-colors cursor-pointer" style={{ borderColor: theme.colors.text + '10' }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs" style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent }}>DES</div>
                        <div className="flex-1">
                            <div className="text-sm font-bold" style={{ color: theme.colors.text }}>Design</div>
                            <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>5 Members</div>
                        </div>
                        <Icons.ChevronRight size="sm" style={{ color: theme.colors.textSecondary }}/>
                    </div>
                     <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50/50 hover:bg-gray-100/50 transition-colors cursor-pointer" style={{ borderColor: theme.colors.text + '10' }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs" style={{ backgroundColor: theme.colors.secondary + '20', color: theme.colors.secondary }}>PRO</div>
                        <div className="flex-1">
                            <div className="text-sm font-bold" style={{ color: theme.colors.text }}>Product</div>
                            <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>3 Members</div>
                        </div>
                        <Icons.ChevronRight size="sm" style={{ color: theme.colors.textSecondary }}/>
                    </div>
                </div>
            </ThemedCard>
        </div>
    </div>
  );
};