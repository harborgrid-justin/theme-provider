import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { Icons } from '../DashboardIcons';

export const LayoutDemo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Media Object</h4>
                <div className="flex gap-4 items-start p-4 rounded-lg border hover:shadow-sm transition-shadow cursor-pointer" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card}}>
                    <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center" style={{backgroundColor: theme.colors.primary + '20', color: theme.colors.primary}}>
                            <Icons.User size="sm" />
                    </div>
                    <div className="flex-1">
                        <div className="h-3 w-1/3 rounded mb-2" style={{backgroundColor: theme.colors.text, opacity: 0.8}} />
                        <div className="h-2 w-full rounded mb-1" style={{backgroundColor: theme.colors.text, opacity: 0.3}} />
                        <div className="h-2 w-2/3 rounded" style={{backgroundColor: theme.colors.text, opacity: 0.3}} />
                    </div>
                </div>
            </div>

            <div>
                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Horizontal Card</h4>
                 <div className="flex rounded-lg border overflow-hidden" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card }}>
                     <div className="w-1/3 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=400&q=80)' }}></div>
                     <div className="flex-1 p-4">
                         <h5 className="font-bold mb-1" style={{ color: theme.colors.text }}>Article Title</h5>
                         <p className="text-xs mb-3 opacity-70" style={{ color: theme.colors.text }}>Short description of the content goes here.</p>
                         <ThemedButton size="sm" variant="outline">Read</ThemedButton>
                     </div>
                 </div>
            </div>
            
            <div>
                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Sidebar Nav</h4>
                 <div className="w-64 border-r h-48 flex flex-col" style={{ borderColor: theme.colors.text + '20' }}>
                     <div className="p-4 font-bold border-b" style={{ borderColor: theme.colors.text + '10', color: theme.colors.text }}>App</div>
                     <div className="flex-1 p-2 space-y-1">
                         <div className="px-3 py-2 rounded bg-black/5 text-sm font-medium" style={{ color: theme.colors.primary }}>Dashboard</div>
                         <div className="px-3 py-2 rounded text-sm opacity-70" style={{ color: theme.colors.text }}>Projects</div>
                         <div className="px-3 py-2 rounded text-sm opacity-70" style={{ color: theme.colors.text }}>Settings</div>
                     </div>
                 </div>
            </div>
        </div>
        
        <div className="space-y-8">
            <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Profile Card</h4>
                <ThemedCard className="p-0 overflow-hidden group">
                    <div className="h-20 w-full" style={{backgroundColor: theme.colors.primary}}></div>
                    <div className="px-4 pb-4">
                        <div className="relative -mt-8 mb-2">
                            <div className="w-16 h-16 rounded-full border-4" style={{backgroundColor: theme.colors.surface, borderColor: theme.colors.surface}}>
                                <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-200">
                                    <Icons.User size="md"/>
                                </div>
                            </div>
                        </div>
                        <h4 className="font-bold" style={{color: theme.colors.text}}>Jane Cooper</h4>
                        <p className="text-xs opacity-60" style={{color: theme.colors.text}}>Senior Engineer</p>
                    </div>
                </ThemedCard>
            </div>

            <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Modal Dialog (Preview)</h4>
                <div className="relative border rounded-xl overflow-hidden shadow-sm h-64 flex items-center justify-center bg-gray-50" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                    <div className="relative w-64 bg-white p-6 rounded-lg shadow-2xl" style={{ borderRadius: theme.borderRadius.card, backgroundColor: theme.colors.surface }}>
                        <h5 className="font-bold mb-2" style={{ color: theme.colors.text }}>Changes Saved</h5>
                        <p className="text-xs mb-4 opacity-70" style={{ color: theme.colors.text }}>Your settings have been updated.</p>
                        <ThemedButton size="sm" className="w-full">Okay</ThemedButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};