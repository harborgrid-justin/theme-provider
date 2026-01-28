import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Icons } from './DashboardIcons';
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
import { ProjectGalleryTab } from './dashboard/ProjectGalleryTab';
import { ApplicationGalleryTab } from './dashboard/ApplicationGalleryTab';
import { FinanceGalleryTab } from './dashboard/FinanceGalleryTab';
import { PagesGalleryTab } from './dashboard/PagesGalleryTab';
import { CalendarGalleryTab } from './dashboard/CalendarGalleryTab';
import { SecurityGalleryTab } from './dashboard/SecurityGalleryTab';
import { DocumentGalleryTab } from './dashboard/DocumentGalleryTab';

type TabId = 'home' | 'marketing' | 'application' | 'project' | 'elements' | 'data' | 'legal' | 'graph' | 'database' | 'flow' | 'webui' | 'project_gallery' | 'app_gallery' | 'finance' | 'pages' | 'calendar' | 'security' | 'documents';

export const DashboardPreview: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabId>('home');

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
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  });

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
      { id: 'home', label: 'Home', icon: <Icons.Home size="sm"/> },
      { id: 'security', label: 'Security & Ops', icon: <Icons.Lock size="sm"/> },
      { id: 'documents', label: 'Documents', icon: <Icons.File size="sm"/> },
      { id: 'elements', label: 'UI Elements', icon: <Icons.Palette size="sm"/> },
      { id: 'pages', label: 'Page Layouts', icon: <Icons.Layers size="sm"/> },
      { id: 'webui', label: 'Web UI', icon: <Icons.Grid size="sm"/> },
      { id: 'calendar', label: 'Calendar', icon: <Icons.Calendar size="sm"/> },
      { id: 'finance', label: 'Finance', icon: <Icons.ShoppingBag size="sm"/> },
      { id: 'data', label: 'Data', icon: <Icons.Chart size="sm"/> },
      { id: 'database', label: 'Database', icon: <Icons.File size="sm"/> },
      { id: 'flow', label: 'Flowcharts', icon: <Icons.Refresh size="sm"/> },
      { id: 'graph', label: 'Diagrams', icon: <Icons.Share size="sm"/> },
      { id: 'legal', label: 'Legal', icon: <Icons.File size="sm"/> },
      { id: 'application', label: 'App Demo', icon: <Icons.Home size="sm"/> },
      { id: 'project', label: 'Project Demo', icon: <Icons.Folder size="sm"/> },
      { id: 'marketing', label: 'Marketing', icon: <Icons.Star size="sm"/> },
  ];

  return (
    <div style={wrapperStyle} className="transition-colors duration-300">
      
      {/* Navigation */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 px-4 py-3 md:px-6 md:py-4 transition-all">
         <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:justify-between max-w-7xl mx-auto">
             <div className="flex items-center justify-between">
                <div className="font-bold tracking-tight text-lg flex items-center gap-2">
                    <Icons.Grid className="text-gray-400" />
                    UI Gallery
                </div>
             </div>
             
             {/* Scrollable Tabs Container for Mobile */}
             <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:pb-0 md:mx-0 md:px-0 md:flex-wrap gap-2 no-scrollbar">
                {tabs.map(tab => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={badgeStyle(activeTab === tab.id)}
                    className="capitalize transition-all duration-200 hover:opacity-80 active:scale-95 whitespace-nowrap flex-shrink-0"
                  >
                    {activeTab === tab.id && tab.icon}
                    {tab.label}
                  </button>
                ))}
             </div>
         </div>
      </div>

      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-12">
        {activeTab === 'home' && <ApplicationTab />}
        {activeTab === 'marketing' && <MarketingTab />}
        {activeTab === 'application' && <ApplicationTab />}
        {activeTab === 'project' && <ProjectTab />}
        {activeTab === 'elements' && <ElementsTab />}
        {activeTab === 'data' && <DataGalleryTab />}
        {activeTab === 'legal' && <LegalGalleryTab />}
        {activeTab === 'finance' && <FinanceGalleryTab />}
        {activeTab === 'graph' && <GraphGalleryTab />}
        {activeTab === 'database' && <DatabaseGalleryTab />}
        {activeTab === 'flow' && <FlowGalleryTab />}
        {activeTab === 'webui' && <WebUiGalleryTab />}
        {activeTab === 'project_gallery' && <ProjectGalleryTab />}
        {activeTab === 'app_gallery' && <ApplicationGalleryTab />}
        {activeTab === 'pages' && <PagesGalleryTab />}
        {activeTab === 'calendar' && <CalendarGalleryTab />}
        {activeTab === 'security' && <SecurityGalleryTab />}
        {activeTab === 'documents' && <DocumentGalleryTab />}
      </div>
    </div>
  );
};