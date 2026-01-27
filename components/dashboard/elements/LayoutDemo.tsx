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
                    <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center" style={{backgroundColor: theme.colors.primary + '20', color: theme.colors.primary}}>
                            <Icons.User size="md" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="h-4 w-1/3 rounded mb-2" style={{backgroundColor: theme.colors.text, opacity: 0.8}} />
                        <div className="h-2 w-full rounded mb-1" style={{backgroundColor: theme.colors.text, opacity: 0.3}} />
                        <div className="h-2 w-2/3 rounded" style={{backgroundColor: theme.colors.text, opacity: 0.3}} />
                    </div>
                </div>
            </div>

            <div>
                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Horizontal Card</h4>
                 <div className="flex rounded-lg border overflow-hidden h-32" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card }}>
                     <div 
                        className="w-1/3 bg-gray-200 bg-cover bg-center" 
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=400&q=80)' }}
                        role="img"
                        aria-label="Abstract background"
                     ></div>
                     <div className="flex-1 p-4 flex flex-col justify-center">
                         <h5 className="font-bold mb-1 truncate" style={{ color: theme.colors.text }}>Article Title</h5>
                         <p className="text-xs mb-3 opacity-70 line-clamp-2" style={{ color: theme.colors.text }}>Short description of the content goes here. It might be long.</p>
                         <div>
                            <ThemedButton size="sm" variant="outline">Read</ThemedButton>
                         </div>
                     </div>
                 </div>
            </div>
            
            <div>
                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Sidebar Nav</h4>
                 <div className="w-full max-w-xs border-r h-48 flex flex-col rounded-l-lg border-y border-l" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.background }}>
                     <div className="p-4 font-bold border-b" style={{ borderColor: theme.colors.text + '10', color: theme.colors.text }}>App</div>
                     <div className="flex-1 p-2 space-y-1">
                         <div className="px-3 py-2 rounded text-sm font-medium flex items-center gap-2" style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}>
                             <Icons.Chart size="sm"/> Dashboard
                         </div>
                         <div className="px-3 py-2 rounded text-sm opacity-70 flex items-center gap-2" style={{ color: theme.colors.text }}>
                             <Icons.Folder size="sm"/> Projects
                         </div>
                         <div className="px-3 py-2 rounded text-sm opacity-70 flex items-center gap-2" style={{ color: theme.colors.text }}>
                             <Icons.Settings size="sm"/> Settings
                         </div>
                     </div>
                 </div>
            </div>
        </div>
        
        <div className="space-y-8">
            <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Profile Card</h4>
                <ThemedCard className="p-0 overflow-hidden group">
                    <div className="h-24 w-full" style={{backgroundColor: theme.colors.primary}}></div>
                    <div className="px-6 pb-6">
                        <div className="relative -mt-10 mb-3">
                            <div className="w-20 h-20 rounded-full border-4" style={{backgroundColor: theme.colors.surface, borderColor: theme.colors.surface}}>
                                <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-100 text-gray-400">
                                    <Icons.User size="lg"/>
                                </div>
                            </div>
                        </div>
                        <h4 className="font-bold text-lg" style={{color: theme.colors.text}}>Jane Cooper</h4>
                        <p className="text-sm opacity-60 mb-4" style={{color: theme.colors.text}}>Senior Engineer</p>
                        <div className="flex gap-2">
                            <ThemedButton size="sm" className="flex-1">Follow</ThemedButton>
                            <ThemedButton size="sm" variant="outline">Message</ThemedButton>
                        </div>
                    </div>
                </ThemedCard>
            </div>

            <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Modal Dialog (Preview)</h4>
                <div className="relative border rounded-xl overflow-hidden shadow-sm h-64 flex items-center justify-center bg-gray-50" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                    <div className="relative w-72 bg-white p-6 rounded-lg shadow-2xl animate-in zoom-in-95" style={{ borderRadius: theme.borderRadius.card, backgroundColor: theme.colors.surface }}>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: theme.colors.success + '20', color: theme.colors.success }}>
                            <Icons.Check size="md"/>
                        </div>
                        <h5 className="font-bold mb-2 text-center" style={{ color: theme.colors.text }}>Changes Saved</h5>
                        <p className="text-xs mb-6 opacity-70 text-center" style={{ color: theme.colors.text }}>Your settings have been updated successfully.</p>
                        <ThemedButton size="sm" className="w-full">Okay</ThemedButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};