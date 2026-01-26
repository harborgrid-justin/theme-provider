import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { ThemedInput } from '../../ui-elements/ThemedInput';
import { Icons } from '../DashboardIcons';
import { toast } from '../../ui/Toaster';

export const AppSettings: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('General');
  const [form, setForm] = useState({ firstName: 'Alex', lastName: 'Morgan', bio: 'Product Designer based in SF.' });

  return (
    <ThemedCard className="p-0 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
        <div className="w-full md:w-64 border-r" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background }}>
            <div className="p-6 text-lg font-bold" style={{ color: theme.colors.text }}>Settings</div>
            <nav className="flex flex-col gap-1 px-3">
                {['General', 'Account', 'Notifications', 'Security'].map((item) => (
                    <button 
                    key={item} 
                    onClick={() => setActiveTab(item)}
                    className="text-left px-3 py-2 text-sm font-medium transition-all"
                    style={{ 
                        borderRadius: theme.borderRadius.sm,
                        backgroundColor: activeTab === item ? theme.colors.surface : 'transparent',
                        color: activeTab === item ? theme.colors.primary : theme.colors.textSecondary,
                        boxShadow: activeTab === item ? `0 1px 2px ${theme.colors.text}10` : 'none',
                    }}
                    >
                        {item}
                    </button>
                ))}
            </nav>
        </div>
        <div className="flex-1 p-6 md:p-8">
             <div className="max-w-xl space-y-8 animate-in fade-in slide-in-from-right-2 duration-300">
                <div>
                    <h3 className="text-lg mb-1 font-bold" style={{ color: theme.colors.text }}>{activeTab} Settings</h3>
                    <p className="text-sm mb-6" style={{ color: theme.colors.textSecondary }}>Update your information.</p>
                    
                    {activeTab === 'General' ? (
                        <>
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
                                        <ThemedInput value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase mb-1 block opacity-70" style={{ color: theme.colors.text }}>Last Name</label>
                                        <ThemedInput value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
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
                                            color: theme.colors.text
                                        }} 
                                        value={form.bio}
                                        onChange={e => setForm({...form, bio: e.target.value})}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="p-8 text-center opacity-50 border-2 border-dashed rounded-lg" style={{ borderColor: theme.colors.text + '20' }}>
                            Content placeholder for {activeTab}.
                        </div>
                    )}
                </div>
                <div className="pt-6 border-t flex justify-end gap-3" style={{ borderColor: theme.colors.text + '10' }}>
                    <ThemedButton variant="ghost">Cancel</ThemedButton>
                    <ThemedButton onClick={() => toast.success("Settings saved")}>Save Changes</ThemedButton>
                </div>
            </div>
        </div>
    </ThemedCard>
  );
};