import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MarketingTab } from './dashboard/MarketingTab';
import { ApplicationTab } from './dashboard/ApplicationTab';
import { ProjectTab } from './dashboard/ProjectTab';
import { ElementsTab } from './dashboard/ElementsTab';
import { DataGalleryTab } from './dashboard/DataGalleryTab';
import { LegalGalleryTab } from './dashboard/LegalGalleryTab';
import { GraphGalleryTab } from './dashboard/GraphGalleryTab';
import { DatabaseGalleryTab } from './dashboard/DatabaseGalleryTab';
import { FlowGalleryTab } from './dashboard/FlowGalleryTab';
import { WebUiGalleryTab } from './dashboard/WebUiGalleryTab';

export const DashboardPreview: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'marketing' | 'application' | 'project' | 'elements' | 'data' | 'legal' | 'graph' | 'database' | 'flow' | 'webui'>('webui');

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
    padding: '0.35rem 0.85rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: active ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
  });

  return (
    <div style={wrapperStyle} className="transition-colors duration-300">
      
      {/* Navigation */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 px-4 py-3 md:px-6 md:py-4 transition-all">
         <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:justify-between max-w-7xl mx-auto">
             <div className="flex items-center justify-between">
                <div className="font-bold tracking-tight text-lg">UI Gallery</div>
                {/* Mobile-only indicator could go here if needed, but flex-wrap handles visibility */}
             </div>
             
             <div className="flex flex-wrap gap-2">
                {(['marketing', 'application', 'project', 'elements', 'data', 'legal', 'graph', 'database', 'flow', 'webui'] as const).map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={badgeStyle(activeTab === tab)}
                    className="capitalize transition-all duration-200 hover:opacity-80 active:scale-95 whitespace-nowrap"
                  >
                    {tab === 'data' ? 'Data Gallery' : 
                     tab === 'legal' ? 'Legal Gallery' : 
                     tab === 'graph' ? 'Diagrams' : 
                     tab === 'database' ? 'Database' : 
                     tab === 'flow' ? 'Flowcharts' : 
                     tab === 'webui' ? 'Web UI' :
                     tab}
                  </button>
                ))}
             </div>
         </div>
      </div>

      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-12">
        {activeTab === 'marketing' && <MarketingTab />}
        {activeTab === 'application' && <ApplicationTab />}
        {activeTab === 'project' && <ProjectTab />}
        {activeTab === 'elements' && <ElementsTab />}
        {activeTab === 'data' && <DataGalleryTab />}
        {activeTab === 'legal' && <LegalGalleryTab />}
        {activeTab === 'graph' && <GraphGalleryTab />}
        {activeTab === 'database' && <DatabaseGalleryTab />}
        {activeTab === 'flow' && <FlowGalleryTab />}
        {activeTab === 'webui' && <WebUiGalleryTab />}
      </div>
    </div>
  );
};