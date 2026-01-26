import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MarketingTab } from './dashboard/MarketingTab';
import { ApplicationTab } from './dashboard/ApplicationTab';
import { ProjectTab } from './dashboard/ProjectTab';
import { ElementsTab } from './dashboard/ElementsTab';

export const DashboardPreview: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'marketing' | 'application' | 'project' | 'elements'>('project');

  const wrapperStyle = {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    minHeight: '100%',
  };

  const badgeStyle = (active: boolean) => ({
    backgroundColor: active ? theme.colors.primary : theme.colors.surface,
    color: active ? '#ffffff' : theme.colors.text,
    border: `1px solid ${active ? theme.colors.primary : theme.colors.text + '30'}`,
    borderRadius: '9999px',
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    cursor: 'pointer'
  });

  return (
    <div style={wrapperStyle} className="transition-colors duration-300">
      
      {/* Navigation */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-white/50 border-b border-gray-200/50 px-6 py-4 flex items-center justify-between">
         <div className="font-bold tracking-tight text-lg">UI Gallery</div>
         <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {(['marketing', 'application', 'project', 'elements'] as const).map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={badgeStyle(activeTab === tab)}
                className="capitalize transition-all whitespace-nowrap"
              >
                {tab}
              </button>
            ))}
         </div>
      </div>

      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-12">
        {activeTab === 'marketing' && <MarketingTab />}
        {activeTab === 'application' && <ApplicationTab />}
        {activeTab === 'project' && <ProjectTab />}
        {activeTab === 'elements' && <ElementsTab />}
      </div>
    </div>
  );
};