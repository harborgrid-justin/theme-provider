import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CHART_DATA } from '../DashboardData';
import { toast } from '../../ui/Toaster';

export const AppStats: React.FC = () => {
  const { theme } = useTheme();
  const [trafficFilter, setTrafficFilter] = useState('This Week');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const headingStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
  };

  const SkeletonPulse: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`animate-pulse rounded ${className}`} style={{ backgroundColor: theme.colors.text + '10', ...style }}></div>
  );

  return (
    <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {isLoading ? Array.from({length: 4}).map((_, i) => (
                <ThemedCard key={i} className="p-4">
                    <SkeletonPulse className="h-3 w-16 mb-2" />
                    <SkeletonPulse className="h-8 w-24 mb-2" />
                    <SkeletonPulse className="h-3 w-32" />
                </ThemedCard>
            )) : [
                { label: 'Total Revenue', val: '$45,231', change: '+20.1%', trend: 'up' },
                { label: 'Active Users', val: '2,345', change: '+15%', trend: 'up' },
                { label: 'Bounce Rate', val: '42.3%', change: '-5%', trend: 'down' },
                { label: 'Server Time', val: '12ms', change: '+1%', trend: 'flat' }
            ].map((stat, i) => (
                <ThemedCard key={i} className="p-4 cursor-pointer hover:-translate-y-1 transition-transform" onClick={() => toast.info(`Viewing ${stat.label}`)}>
                    <div className="text-xs font-medium opacity-60 uppercase mb-1" style={{ color: theme.colors.text }}>{stat.label}</div>
                    <div className="text-2xl mb-2" style={headingStyle}>{stat.val}</div>
                    <div 
                        className="text-xs font-medium" 
                        style={{ 
                            color: stat.trend === 'up' ? theme.colors.success : stat.trend === 'down' ? theme.colors.error : theme.colors.textSecondary 
                        }}
                    >
                        {stat.change} from last month
                    </div>
                </ThemedCard>
            ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
            <ThemedCard className="h-80 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h3 style={headingStyle}>Traffic Source</h3>
                    <select 
                        className="text-xs bg-transparent border-none outline-none opacity-50 cursor-pointer hover:opacity-100 transition-opacity" 
                        style={{ color: theme.colors.text }}
                        value={trafficFilter}
                        onChange={(e) => setTrafficFilter(e.target.value)}
                    >
                        <option>This Week</option>
                        <option>Last Week</option>
                    </select>
                </div>
                <div className="flex-1 min-h-0 relative">
                    {isLoading ? (
                        <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 gap-2">
                             {Array.from({length: 7}).map((_, i) => (
                                 <SkeletonPulse key={i} className={`w-full h-${Math.floor(Math.random() * 40) + 20}`} style={{ height: `${Math.random() * 60 + 20}%`}} />
                             ))}
                        </div>
                    ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={CHART_DATA}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={theme.colors.primary} stopOpacity={0.3}/>
                                <stop offset="95%" stopColor={theme.colors.primary} stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} stroke={theme.colors.text}/>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: theme.colors.textSecondary, fontSize: 10}} />
                            <YAxis hide />
                            <Tooltip contentStyle={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.surface, color: theme.colors.text }} />
                            <Area type="monotone" dataKey="uv" stroke={theme.colors.primary} fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                    )}
                </div>
            </ThemedCard>
            
            <ThemedCard className="h-80 flex flex-col">
                <div className="mb-6"><h3 style={headingStyle}>Conversion</h3></div>
                <div className="flex-1 min-h-0 relative">
                    {isLoading ? (
                        <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 gap-4">
                             {Array.from({length: 7}).map((_, i) => (
                                 <SkeletonPulse key={i} className="w-full" style={{ height: `${Math.random() * 80 + 10}%`}} />
                             ))}
                        </div>
                    ) : (
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={CHART_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} stroke={theme.colors.text}/>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: theme.colors.textSecondary, fontSize: 10}} />
                        <Tooltip cursor={{fill: theme.colors.text + '05'}} contentStyle={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.surface, color: theme.colors.text }} />
                        <Bar dataKey="pv" fill={theme.colors.secondary} radius={[4, 4, 0, 0]} barSize={20} />
                    </BarChart>
                    </ResponsiveContainer>
                    )}
                </div>
            </ThemedCard>
        </div>
    </div>
  );
};