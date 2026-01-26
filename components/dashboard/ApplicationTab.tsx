import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedInput } from '../ui-elements/ThemedInput';
import { Icons } from './DashboardIcons';
import { CHART_DATA, FILES } from './DashboardData';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const ApplicationTab: React.FC = () => {
  const { theme } = useTheme();

  const headingStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
  };

  const sectionTitleStyle = {
    ...headingStyle,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1rem',
    marginTop: '2rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  const mutedTextStyle = {
      color: theme.colors.textSecondary,
  };

  const subtleBgStyle = {
      backgroundColor: theme.colors.text + '05', 
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
        {/* 7. Dashboard Stats */}
        <section>
            <div style={sectionTitleStyle}>7. Stats Overview</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Revenue', val: '$45,231', change: '+20.1%', trend: 'up' },
                    { label: 'Active Users', val: '2,345', change: '+15%', trend: 'up' },
                    { label: 'Bounce Rate', val: '42.3%', change: '-5%', trend: 'down' },
                    { label: 'Server Time', val: '12ms', change: '+1%', trend: 'flat' }
                ].map((stat, i) => (
                    <ThemedCard key={i} className="p-4">
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
        </section>

        {/* 8. Charts */}
        <section>
            <div style={sectionTitleStyle}>8. Data Visualization</div>
            <div className="grid md:grid-cols-2 gap-6">
                <ThemedCard className="h-80 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 style={headingStyle}>Traffic Source</h3>
                        <select 
                            className="text-xs bg-transparent border-none outline-none opacity-50" 
                            style={{ color: theme.colors.text }}
                        >
                            <option>This Week</option>
                        </select>
                    </div>
                    <div className="flex-1 min-h-0">
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
                            <Tooltip 
                                contentStyle={{ 
                                    borderRadius: theme.borderRadius.sm, 
                                    border: 'none', 
                                    backgroundColor: theme.colors.surface,
                                    color: theme.colors.text,
                                    boxShadow: `0 4px 12px ${theme.colors.text}15` 
                                }} 
                            />
                            <Area type="monotone" dataKey="uv" stroke={theme.colors.primary} fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                    </div>
                </ThemedCard>
                
                <ThemedCard className="h-80 flex flex-col">
                    <div className="mb-6">
                        <h3 style={headingStyle}>Conversion</h3>
                    </div>
                    <div className="flex-1 min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={CHART_DATA}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} stroke={theme.colors.text}/>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: theme.colors.textSecondary, fontSize: 10}} />
                            <Tooltip 
                                cursor={{fill: theme.colors.text + '05'}} 
                                contentStyle={{ 
                                    borderRadius: theme.borderRadius.sm,
                                    backgroundColor: theme.colors.surface,
                                    color: theme.colors.text,
                                    border: `1px solid ${theme.colors.text}10`
                                }} 
                            />
                            <Bar dataKey="pv" fill={theme.colors.secondary} radius={[4, 4, 0, 0]} barSize={20} />
                        </BarChart>
                        </ResponsiveContainer>
                    </div>
                </ThemedCard>
            </div>
        </section>

        {/* 9. File Manager */}
        <section>
            <div style={sectionTitleStyle}>9. File Manager</div>
            <ThemedCard>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <button style={{ color: theme.colors.textSecondary }} className="hover:opacity-100 opacity-70"><Icons.ChevronDown/></button>
                        <h3 style={headingStyle}>My Documents</h3>
                    </div>
                    <div className="flex gap-2">
                        <ThemedButton size="sm" variant="outline"><Icons.Cloud/></ThemedButton>
                        <ThemedButton size="sm"><Icons.Check/> New</ThemedButton>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {FILES.map((file, i) => (
                        <div 
                            key={i} 
                            className="group p-4 border transition-all cursor-pointer flex flex-col items-center text-center gap-3" 
                            style={{ 
                                borderColor: theme.colors.text + '10',
                                borderRadius: theme.borderRadius.md,
                                backgroundColor: theme.colors.background 
                            }}
                        >
                            <div 
                                className="p-3" 
                                style={{ 
                                    borderRadius: theme.borderRadius.md,
                                    backgroundColor: file.type === 'folder' ? theme.colors.accent + '20' : theme.colors.surface,
                                    color: file.type === 'folder' ? theme.colors.accent : theme.colors.textSecondary
                                }}
                            >
                                {file.type === 'folder' ? <Icons.Folder/> : <Icons.File/>}
                            </div>
                            <div className="w-full">
                                <div className="text-sm font-medium truncate" style={{ color: theme.colors.text }}>{file.name}</div>
                                <div className="text-xs" style={mutedTextStyle}>{file.size}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </ThemedCard>
        </section>

        {/* 10. Chat Interface */}
        <section>
            <div style={sectionTitleStyle}>10. Communication</div>
            <div className="grid md:grid-cols-3 gap-6 h-96">
                <ThemedCard className="col-span-1 p-0 flex flex-col overflow-hidden">
                    <div className="p-4 border-b font-bold" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background, color: theme.colors.text }}>Messages</div>
                    <div className="flex-1 overflow-y-auto">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="p-3 flex gap-3 cursor-pointer border-b last:border-0 hover:bg-black/5" style={{ borderColor: theme.colors.text + '05' }}>
                                <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                                <div className="min-w-0">
                                    <div className="flex justify-between items-baseline">
                                        <div className="text-sm truncate" style={{ fontWeight: '600', color: theme.colors.text }}>Sarah W.</div>
                                        <div className="text-[10px]" style={{ color: theme.colors.textSecondary }}>12m</div>
                                    </div>
                                    <div className="text-xs truncate" style={{ color: theme.colors.textSecondary }}>Hey, did you see the latest designs?</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ThemedCard>
                <ThemedCard className="col-span-2 md:col-span-2 p-0 flex flex-col overflow-hidden">
                    <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background }}>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: theme.colors.success + '20', color: theme.colors.success }}>SW</div>
                            <div className="text-sm font-bold" style={{ color: theme.colors.text }}>Sarah Wilson</div>
                        </div>
                        <div className="flex gap-2" style={{ color: theme.colors.textSecondary }}>
                            <Icons.Search/>
                            <Icons.More/>
                        </div>
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto" style={{ backgroundColor: theme.colors.background }}>
                        <div 
                            className="self-start max-w-[80%] p-3 text-sm" 
                            style={{ 
                                borderRadius: theme.borderRadius.lg, 
                                borderTopLeftRadius: 0,
                                backgroundColor: theme.colors.surface,
                                border: `1px solid ${theme.colors.text}10`,
                                color: theme.colors.text
                            }}
                        >
                            Hey! Can you review the PR?
                        </div>
                        <div 
                            className="self-end max-w-[80%] p-3 text-sm" 
                            style={{ 
                                borderRadius: theme.borderRadius.lg, 
                                borderTopRightRadius: 0,
                                backgroundColor: theme.colors.primary, 
                                color: '#fff' 
                            }}
                        >
                            Sure, I'll take a look in 5 mins.
                        </div>
                        <div 
                            className="self-start max-w-[80%] p-3 text-sm" 
                            style={{ 
                                borderRadius: theme.borderRadius.lg, 
                                borderTopLeftRadius: 0,
                                backgroundColor: theme.colors.surface,
                                border: `1px solid ${theme.colors.text}10`,
                                color: theme.colors.text
                            }}
                        >
                            Awesome, thanks!
                        </div>
                    </div>
                    <div className="p-3 border-t" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface }}>
                        <div className="flex gap-2">
                            <button className="p-2 rounded hover:bg-black/5" style={{ color: theme.colors.textSecondary, borderRadius: theme.borderRadius.sm }}><Icons.Cloud/></button>
                            <ThemedInput placeholder="Type a message..." style={{ backgroundColor: theme.colors.background, borderColor: 'transparent' }} />
                            <ThemedButton size="sm"><Icons.Send/></ThemedButton>
                        </div>
                    </div>
                </ThemedCard>
            </div>
        </section>

        {/* 11. Settings Panel */}
        <section>
            <div style={sectionTitleStyle}>11. Settings Layout</div>
            <ThemedCard className="p-0 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
                <div className="w-full md:w-64 border-r" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background }}>
                    <div className="p-6 text-lg" style={headingStyle}>Settings</div>
                    <nav className="flex flex-col gap-1 px-3">
                        {['General', 'Account', 'Notifications', 'Security', 'Billing'].map((item, i) => (
                            <button 
                            key={item} 
                            className={`text-left px-3 py-2 text-sm font-medium transition-colors`}
                            style={{ 
                                borderRadius: theme.borderRadius.sm,
                                backgroundColor: i === 0 ? theme.colors.surface : 'transparent',
                                color: i === 0 ? theme.colors.primary : theme.colors.textSecondary,
                                boxShadow: i === 0 ? `0 1px 2px ${theme.colors.text}10` : 'none'
                            }}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="flex-1 p-6 md:p-8">
                    <div className="max-w-xl space-y-8">
                        <div>
                            <h3 className="text-lg mb-1" style={headingStyle}>Profile Information</h3>
                            <p className="text-sm mb-6" style={mutedTextStyle}>Update your account's public profile information.</p>
                            <div className="flex items-center gap-6 mb-6">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>
                                    <Icons.User/>
                                </div>
                                <div className="space-y-2">
                                    <ThemedButton size="sm" variant="outline">Change Avatar</ThemedButton>
                                    <div className="text-xs" style={{ color: theme.colors.textSecondary }}>JPG, GIF or PNG. 1MB max.</div>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold uppercase mb-1 block opacity-70" style={{ color: theme.colors.text }}>First Name</label>
                                        <ThemedInput defaultValue="Alex" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase mb-1 block opacity-70" style={{ color: theme.colors.text }}>Last Name</label>
                                        <ThemedInput defaultValue="Morgan" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase mb-1 block opacity-70" style={{ color: theme.colors.text }}>Bio</label>
                                    <textarea 
                                        className="w-full p-3 border text-sm focus:ring-2 outline-none h-24 transition-all" 
                                        style={{ 
                                            borderRadius: theme.borderRadius.md,
                                            borderColor: theme.colors.text + '20',
                                            backgroundColor: theme.colors.surface,
                                            color: theme.colors.text,
                                            fontFamily: 'inherit'
                                        }} 
                                        defaultValue="Product Designer based in SF." 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 border-t" style={{ borderColor: theme.colors.text + '10' }}>
                            <div className="flex justify-end gap-3">
                                <ThemedButton variant="ghost">Cancel</ThemedButton>
                                <ThemedButton>Save Changes</ThemedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemedCard>
        </section>
    </div>
  );
};