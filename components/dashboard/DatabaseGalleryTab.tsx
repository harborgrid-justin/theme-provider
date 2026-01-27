import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full">{children}</div>
);

export const DatabaseGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const sectionTitleStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    marginTop: '3rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  const CardWrapper = ({ children, title, className = '' }: { children?: React.ReactNode, title: string, className?: string }) => (
      <ThemedCard className={`flex flex-col justify-between h-full group hover:shadow-lg transition-shadow min-h-[120px] ${className}`}>
          <div className="text-[10px] uppercase font-bold tracking-wider opacity-40 mb-3 truncate" style={{ color: theme.colors.text }}>{title}</div>
          <div className="flex-1 flex flex-col justify-center relative w-full min-w-0">
            {children}
          </div>
      </ThemedCard>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Database Primitives (110 Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            UI components for schema design, SQL consoles, data grids, and infrastructure monitoring.
        </p>

        {/* --- 1. Data Types & Fields --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Type: Integer">
                <Centered>
                    <span className="font-mono text-xs px-2 py-1 rounded border" style={{ color: theme.colors.primary, borderColor: theme.colors.primary, backgroundColor: theme.colors.primary + '10' }}>INT</span>
                </Centered>
            </CardWrapper>
            {/* ... Rest of types ... */}
        </div>
        
        {/* ... Rest of the file ... */}
        <div style={sectionTitleStyle}>Complex Database Modules</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <CardWrapper title="Table Schema Node" className="col-span-2 min-h-[180px]">
                <div className="w-full border rounded-lg overflow-hidden shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <div className="px-3 py-2 border-b flex justify-between items-center" style={{ backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.text + '10' }}>
                        <span className="text-xs font-bold" style={{ color: theme.colors.text }}>users_table</span>
                        <Icons.Settings size="sm" className="opacity-40"/>
                    </div>
                    <div className="divide-y text-[10px]" style={{ borderColor: theme.colors.text + '05' }}>
                        <div className="px-3 py-1.5 flex justify-between hover:bg-black/5">
                            <div className="flex items-center gap-2">
                                <Icons.Lock size="sm" className="text-yellow-500 w-3"/>
                                <span className="font-bold" style={{ color: theme.colors.text }}>id</span>
                            </div>
                            <span className="font-mono opacity-50">UUID</span>
                        </div>
                        {/* ... items ... */}
                    </div>
                </div>
            </CardWrapper>
            
            {/* Ensure code blocks scale */}
            <CardWrapper title="SQL Console" className="col-span-2 md:col-span-4 min-h-[180px]">
                <div className="flex flex-col h-full w-full rounded border overflow-hidden font-mono text-xs" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 border-b" style={{ borderColor: theme.colors.text + '10' }}>
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="opacity-50 ml-2">query_editor.sql</span>
                    </div>
                    <div className="flex-1 p-3 relative" style={{ backgroundColor: theme.colors.text, color: theme.colors.surface }}>
                        {/* ... */}
                        <div className="pl-8">
                            <span style={{ color: '#F472B6' }}>SELECT</span> u.id, u.email, r.name<br/>
                            <span style={{ color: '#F472B6' }}>FROM</span> users u<br/>
                            <span style={{ color: '#F472B6' }}>JOIN</span> roles r <span style={{ color: '#F472B6' }}>ON</span> u.role_id = r.id<br/>
                            <span style={{ color: '#F472B6' }}>WHERE</span> u.active = <span style={{ color: '#60A5FA' }}>true</span><br/>
                            <span style={{ color: '#F472B6' }}>LIMIT</span> <span style={{ color: '#60A5FA' }}>100</span>;
                        </div>
                        <div className="absolute bottom-2 right-2">
                            <button className="px-3 py-1 rounded bg-green-600 text-white font-bold hover:bg-green-500 text-[10px]">RUN ▶</button>
                        </div>
                    </div>
                </div>
            </CardWrapper>
        </div>
    </div>
  );
};