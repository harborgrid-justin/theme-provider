import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { Icons } from '../DashboardIcons';

export const FeedbackDemo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <h4 className="text-sm font-bold opacity-50 uppercase" style={{ color: theme.colors.text }}>Alerts & Banners</h4>
            
            <div className="p-4 rounded-md border flex gap-3" style={{ backgroundColor: theme.colors.success + '10', borderColor: theme.colors.success + '30' }}>
                 <div style={{ color: theme.colors.success }}><Icons.Check/></div>
                 <div>
                     <h5 className="text-sm font-bold" style={{ color: theme.colors.text }}>Success</h5>
                     <p className="text-xs mt-1 opacity-80" style={{ color: theme.colors.text }}>Your changes have been successfully saved to the database.</p>
                 </div>
            </div>

            <div className="p-4 rounded-md border flex gap-3" style={{ backgroundColor: theme.colors.error + '10', borderColor: theme.colors.error + '30' }}>
                 <div style={{ color: theme.colors.error }}><Icons.Close/></div>
                 <div>
                     <h5 className="text-sm font-bold" style={{ color: theme.colors.text }}>Error</h5>
                     <p className="text-xs mt-1 opacity-80" style={{ color: theme.colors.text }}>Unable to connect to the server. Please try again later.</p>
                 </div>
            </div>

            <div className="p-4 rounded-md border flex gap-3" style={{ backgroundColor: '#F59E0B' + '10', borderColor: '#F59E0B' + '30' }}>
                 <div style={{ color: '#F59E0B' }}><Icons.Help/></div>
                 <div>
                     <h5 className="text-sm font-bold" style={{ color: theme.colors.text }}>Warning</h5>
                     <p className="text-xs mt-1 opacity-80" style={{ color: theme.colors.text }}>Your subscription is expiring in 3 days.</p>
                 </div>
            </div>

            <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Badges</h4>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>Primary</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: theme.colors.secondary + '20', color: theme.colors.secondary }}>Secondary</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: theme.colors.success + '20', color: theme.colors.success }}>Success</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: theme.colors.error + '20', color: theme.colors.error }}>Error</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold border" style={{ borderColor: theme.colors.text + '30', color: theme.colors.text }}>Outline</span>
                </div>
            </div>
            
             <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Loaders & Spinners</h4>
                <div className="flex items-center gap-6">
                    <div className="w-8 h-8 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: theme.colors.primary, borderTopColor: 'transparent' }}></div>
                    <div className="w-6 h-6 rounded-full border-2 border-dashed animate-spin" style={{ borderColor: theme.colors.secondary }}></div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: theme.colors.text, animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: theme.colors.text, animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: theme.colors.text, animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-8">
             <h4 className="text-sm font-bold opacity-50 uppercase" style={{ color: theme.colors.text }}>Overlays & States</h4>
             
             <div className="relative p-6 rounded-xl border bg-white shadow-xl max-w-sm" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.lg }}>
                <h4 className="font-bold mb-2" style={{color: theme.colors.text}}>Confirm Action</h4>
                <p className="text-xs mb-4 opacity-70" style={{color: theme.colors.text}}>Are you sure you want to delete this item? This action cannot be undone.</p>
                <div className="flex justify-end gap-2">
                    <ThemedButton size="sm" variant="outline">Cancel</ThemedButton>
                    <ThemedButton size="sm" style={{backgroundColor: theme.colors.error, borderColor: theme.colors.error}}>Delete</ThemedButton>
                </div>
             </div>

             <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Loading Skeleton</h4>
                <div className="p-4 border rounded-lg space-y-4" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface }}>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        <div className="space-y-2 flex-1">
                            <div className="h-4 w-1/3 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                            <div className="h-3 w-1/4 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-3 w-full rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        <div className="h-3 w-full rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        <div className="h-3 w-2/3 rounded animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    </div>
                </div>
             </div>
             
             <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Empty State</h4>
                <div className="text-center p-8 border-2 border-dashed rounded-xl" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>
                        <Icons.Folder />
                    </div>
                    <h5 className="font-bold text-sm mb-1" style={{ color: theme.colors.text }}>No projects found</h5>
                    <p className="text-xs mb-4 max-w-[200px] mx-auto opacity-70" style={{ color: theme.colors.text }}>Get started by creating a new project.</p>
                    <ThemedButton size="sm">Create Project</ThemedButton>
                </div>
             </div>
        </div>
    </div>
  );
};