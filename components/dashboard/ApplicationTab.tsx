import React from 'react';
import { AppStats } from './application/AppStats';
import { AppChat } from './application/AppChat';
import { AppSettings } from './application/AppSettings';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

export const ApplicationTab: React.FC = () => {
  const { theme } = useTheme();

  const sectionTitleStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1rem',
    marginTop: '2rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
        <section>
            <div style={sectionTitleStyle}>Stats Overview</div>
            <AppStats />
        </section>

        <section>
             <div style={sectionTitleStyle}>Calendar & Scheduling</div>
             <ThemedCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg" style={{ color: theme.colors.text }}>October 2024</h3>
                    <div className="flex gap-2">
                        <ThemedButton size="sm" variant="outline">Today</ThemedButton>
                        <div className="flex gap-1">
                            <ThemedButton size="sm" variant="ghost">{'<'}</ThemedButton>
                            <ThemedButton size="sm" variant="ghost">{'>'}</ThemedButton>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-7 text-center mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                        <div key={d} className="text-xs font-bold opacity-50 py-2 uppercase tracking-wide" style={{ color: theme.colors.text }}>{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-px bg-gray-200 border rounded-lg overflow-hidden" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '10' }}>
                    {Array.from({length: 31}, (_, i) => i + 1).map((day) => {
                         const hasEvent = [4, 12, 15, 22, 28].includes(day);
                         return (
                            <div key={day} className="aspect-square bg-white p-2 flex flex-col justify-between hover:bg-gray-50 transition-colors cursor-pointer" style={{ backgroundColor: theme.colors.surface }}>
                                <span className={`text-sm w-7 h-7 flex items-center justify-center rounded-full ${day === 15 ? 'font-bold' : ''}`} style={{ backgroundColor: day === 15 ? theme.colors.primary : 'transparent', color: day === 15 ? '#fff' : theme.colors.text }}>{day}</span>
                                {hasEvent && (
                                    <div className="w-full px-1">
                                        <div className="h-1.5 rounded-full w-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                                    </div>
                                )}
                            </div>
                         )
                    })}
                </div>
             </ThemedCard>
        </section>

        <section>
             <div style={sectionTitleStyle}>Invoices & Billing</div>
             <ThemedCard className="overflow-hidden p-0">
                 <div className="p-8">
                     <div className="flex justify-between items-start mb-12">
                         <div>
                             <h1 className="text-3xl font-bold mb-2" style={{ color: theme.colors.text }}>Invoice</h1>
                             <div className="text-sm opacity-60" style={{ color: theme.colors.text }}>#INV-2024-001</div>
                         </div>
                         <div className="text-right">
                             <h3 className="font-bold text-lg" style={{ color: theme.colors.text }}>Chameleon Inc.</h3>
                             <p className="text-sm opacity-60" style={{ color: theme.colors.text }}>123 Design St<br/>San Francisco, CA</p>
                         </div>
                     </div>
                     <table className="w-full mb-8">
                         <thead className="border-b-2" style={{ borderColor: theme.colors.text + '10' }}>
                             <tr>
                                 <th className="text-left py-3 text-sm font-bold opacity-60 uppercase tracking-wider" style={{ color: theme.colors.text }}>Description</th>
                                 <th className="text-right py-3 text-sm font-bold opacity-60 uppercase tracking-wider" style={{ color: theme.colors.text }}>Amount</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                             <tr>
                                 <td className="py-4 text-sm" style={{ color: theme.colors.text }}>Pro Plan Subscription (Yearly)</td>
                                 <td className="py-4 text-right font-mono" style={{ color: theme.colors.text }}>$290.00</td>
                             </tr>
                             <tr>
                                 <td className="py-4 text-sm" style={{ color: theme.colors.text }}>Extra Team Seats (x2)</td>
                                 <td className="py-4 text-right font-mono" style={{ color: theme.colors.text }}>$40.00</td>
                             </tr>
                         </tbody>
                         <tfoot>
                             <tr>
                                 <td className="py-4 text-right font-bold" style={{ color: theme.colors.text }}>Total</td>
                                 <td className="py-4 text-right font-bold text-xl" style={{ color: theme.colors.primary }}>$330.00</td>
                             </tr>
                         </tfoot>
                     </table>
                     <div className="flex justify-end gap-3">
                         <ThemedButton variant="outline"><Icons.File size="sm"/> Download PDF</ThemedButton>
                         <ThemedButton>Pay Now</ThemedButton>
                     </div>
                 </div>
             </ThemedCard>
        </section>

        <section>
             <div style={sectionTitleStyle}>Notification Center</div>
             <div className="grid md:grid-cols-2 gap-8">
                <ThemedCard className="h-full">
                    <div className="flex justify-between items-center mb-6">
                         <h3 className="font-bold" style={{ color: theme.colors.text }}>Notifications</h3>
                         <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>3 New</span>
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: 'New comment on your post', time: '5m ago', unread: true },
                            { title: 'Project "Alpha" was approved', time: '1h ago', unread: true },
                            { title: 'Server maintenance scheduled', time: '2h ago', unread: true },
                            { title: 'Welcome to the team!', time: '1d ago', unread: false },
                        ].map((n, i) => (
                            <div key={i} className="flex gap-4 items-start p-3 rounded-lg hover:bg-black/5 transition-colors cursor-pointer">
                                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0`} style={{ backgroundColor: n.unread ? theme.colors.accent : 'transparent', border: n.unread ? 'none' : `1px solid ${theme.colors.text}40` }}></div>
                                <div>
                                    <h4 className={`text-sm ${n.unread ? 'font-bold' : 'font-medium'}`} style={{ color: theme.colors.text }}>{n.title}</h4>
                                    <p className="text-xs opacity-60" style={{ color: theme.colors.text }}>{n.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ThemedCard>
                
                <ThemedCard className="h-full">
                    <div className="flex justify-between items-center mb-6">
                         <h3 className="font-bold" style={{ color: theme.colors.text }}>Upcoming Tasks</h3>
                         <ThemedButton size="sm" variant="ghost">View All</ThemedButton>
                    </div>
                    <div className="space-y-2">
                        {[
                            { task: 'Review Q3 Financials', due: 'Today' },
                            { task: 'Update landing page assets', due: 'Tomorrow' },
                            { task: 'Client meeting prep', due: 'Oct 24' },
                            { task: 'Deploy v2.1 to staging', due: 'Oct 28' },
                            { task: 'Team retrospective', due: 'Oct 30' },
                        ].map((t, i) => (
                            <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-black/5">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer`} style={{ borderColor: theme.colors.text + '40' }}>
                                    {/* Checkbox sim */}
                                </div>
                                <span className="flex-1 text-sm" style={{ color: theme.colors.text }}>{t.task}</span>
                                <span className="text-xs px-2 py-0.5 rounded opacity-70 font-medium" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text }}>{t.due}</span>
                            </div>
                        ))}
                    </div>
                </ThemedCard>
             </div>
        </section>

        <section>
            <div style={sectionTitleStyle}>Communication</div>
            <AppChat />
        </section>

        <section>
            <div style={sectionTitleStyle}>Settings Layout</div>
            <AppSettings />
        </section>
    </div>
  );
};