import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full h-full flex justify-center items-center p-4 relative">{children}</div>
);

export const DatabaseGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Database Primitives (110 Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            UI components for schema design, SQL consoles, data grids, and infrastructure monitoring.
        </p>

        {/* --- 1. Data Types & Fields --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {['INT', 'BIGINT', 'FLOAT', 'DOUBLE', 'DECIMAL', 'VARCHAR', 'CHAR', 'TEXT', 'CLOB', 'BLOB', 'DATE', 'TIME', 'TIMESTAMP', 'BOOL', 'UUID', 'JSON', 'XML', 'ENUM', 'SET', 'POINT'].map(type => (
                <GalleryItem key={type} title={`Type: ${type}`} centered>
                    <span className="font-mono text-xs px-2 py-1 rounded border shadow-sm" style={{ color: theme.colors.primary, borderColor: theme.colors.primary, backgroundColor: theme.colors.surface }}>{type}</span>
                </GalleryItem>
            ))}

            <GalleryItem title="Key: Primary" centered>
                <div className="flex items-center gap-1.5 text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded border border-yellow-200">
                    <Icons.Lock size="sm" className="w-3 h-3"/> PK
                </div>
            </GalleryItem>

            <GalleryItem title="Key: Foreign" centered>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                    <Icons.Link size="sm" className="w-3 h-3"/> FK
                </div>
            </GalleryItem>

            <GalleryItem title="Index" centered>
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-200">
                    <Icons.Search size="sm" className="w-3 h-3"/> IDX
                </div>
            </GalleryItem>

            <GalleryItem title="Constraint: Unique" centered>
                <span className="font-mono text-[10px] font-bold border px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 border-purple-200">UNQ</span>
            </GalleryItem>

            <GalleryItem title="Constraint: Not Null" centered>
                <span className="font-mono text-[10px] font-bold border px-1.5 py-0.5 rounded bg-red-50 text-red-700 border-red-200">NN</span>
            </GalleryItem>

            <GalleryItem title="Null" centered>
                <span className="font-mono text-xs opacity-40 uppercase tracking-widest">NULL</span>
            </GalleryItem>
        </div>

        {/* --- SQL Keywords & Actions --- */}
        <SectionTitle>SQL Keywords & Actions</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             {['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'FROM', 'WHERE', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'UNION', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'OFFSET', 'CREATE', 'ALTER', 'DROP', 'TRUNCATE', 'GRANT', 'REVOKE', 'COMMIT', 'ROLLBACK', 'EXPLAIN'].map(kw => (
                <GalleryItem key={kw} title={`Keyword: ${kw}`} centered>
                    <span className="font-mono text-xs font-bold text-pink-600 tracking-wide">{kw}</span>
                </GalleryItem>
             ))}
        </div>

        {/* --- Database Objects --- */}
        <SectionTitle>Database Objects</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Table" centered><Icons.File size="lg" className="text-blue-500"/></GalleryItem>
             <GalleryItem title="View" centered><Icons.Image size="lg" className="text-purple-500"/></GalleryItem>
             <GalleryItem title="Stored Proc" centered><Icons.Settings size="lg" className="text-orange-500"/></GalleryItem>
             <GalleryItem title="Trigger" centered><Icons.Clock size="lg" className="text-red-500"/></GalleryItem>
             <GalleryItem title="User" centered><Icons.User size="lg" className="text-green-500"/></GalleryItem>
             <GalleryItem title="Role" centered><Icons.Lock size="lg" className="text-gray-500"/></GalleryItem>
        </div>
        
        <SectionTitle>Complex Database Modules</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <GalleryItem title="Table Schema Node" className="col-span-2 min-h-[200px] h-auto">
                <div className="w-full h-full p-2">
                    <div className="w-full border rounded-lg overflow-hidden shadow-sm h-full flex flex-col" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                        <div className="px-3 py-2 border-b flex justify-between items-center bg-opacity-10" style={{ backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.text + '10' }}>
                            <span className="text-xs font-bold" style={{ color: theme.colors.text }}>users_table</span>
                            <Icons.Settings size="sm" className="opacity-40"/>
                        </div>
                        <div className="divide-y text-[10px] flex-1 overflow-auto" style={{ borderColor: theme.colors.text + '05' }}>
                            <div className="px-3 py-2 flex justify-between hover:bg-black/5 items-center">
                                <div className="flex items-center gap-2">
                                    <Icons.Lock size="sm" className="text-yellow-500 w-3"/>
                                    <span className="font-bold" style={{ color: theme.colors.text }}>id</span>
                                </div>
                                <span className="font-mono opacity-50">UUID</span>
                            </div>
                             <div className="px-3 py-2 flex justify-between hover:bg-black/5 items-center">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold pl-5" style={{ color: theme.colors.text }}>email</span>
                                </div>
                                <span className="font-mono opacity-50">VARCHAR</span>
                            </div>
                             <div className="px-3 py-2 flex justify-between hover:bg-black/5 items-center">
                                <div className="flex items-center gap-2">
                                     <Icons.Link size="sm" className="text-blue-500 w-3"/>
                                    <span className="font-bold" style={{ color: theme.colors.text }}>role_id</span>
                                </div>
                                <span className="font-mono opacity-50">INT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </GalleryItem>
            
            {/* Ensure code blocks scale */}
            <GalleryItem title="SQL Console" className="col-span-2 md:col-span-4 min-h-[200px] h-auto">
                <div className="w-full h-full p-2">
                    <div className="flex flex-col h-full w-full rounded-lg border overflow-hidden font-mono text-xs shadow-sm" style={{ borderColor: theme.colors.text + '20' }}>
                        <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b" style={{ borderColor: theme.colors.text + '10' }}>
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <span className="opacity-50 ml-2 text-[10px]" style={{ color: '#000' }}>query_editor.sql</span>
                        </div>
                        <div className="flex-1 p-4 relative" style={{ backgroundColor: '#1e1e1e', color: '#d4d4d4' }}>
                            {/* Static dark theme for code editor feel */}
                            <div className="pl-2 leading-relaxed">
                                <span style={{ color: '#F472B6' }}>SELECT</span> u.id, u.email, r.name<br/>
                                <span style={{ color: '#F472B6' }}>FROM</span> users u<br/>
                                <span style={{ color: '#F472B6' }}>JOIN</span> roles r <span style={{ color: '#F472B6' }}>ON</span> u.role_id = r.id<br/>
                                <span style={{ color: '#F472B6' }}>WHERE</span> u.active = <span style={{ color: '#60A5FA' }}>true</span><br/>
                                <span style={{ color: '#F472B6' }}>LIMIT</span> <span style={{ color: '#60A5FA' }}>100</span>;
                            </div>
                            <div className="absolute bottom-3 right-3">
                                <button className="px-4 py-1.5 rounded bg-green-600 text-white font-bold hover:bg-green-500 text-[10px] shadow-sm tracking-wide">RUN ▶</button>
                            </div>
                        </div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="ER Relationship" centered>
                <div className="flex items-center w-full justify-center px-4">
                    <div className="w-10 h-10 border rounded-md shadow-sm bg-white" style={{ borderColor: theme.colors.text + '20' }}></div>
                    <div className="flex-1 h-px bg-gray-400 relative mx-1">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3 bg-gray-400"></div>
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-px h-3 bg-gray-400"></div>
                            
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3 bg-gray-400"></div>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 border-t border-r border-gray-400 transform rotate-45"></div>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 border-b border-r border-gray-400 transform -rotate-45"></div>
                    </div>
                    <div className="w-10 h-10 border rounded-md shadow-sm bg-white" style={{ borderColor: theme.colors.text + '20' }}></div>
                </div>
            </GalleryItem>
            
            <GalleryItem title="Query Result" centered>
                <div className="w-full border rounded-md overflow-hidden text-[10px] shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <div className="flex border-b bg-gray-50" style={{ borderColor: theme.colors.text + '10' }}>
                        <div className="flex-1 p-2 font-bold border-r" style={{ borderColor: theme.colors.text + '10', color: theme.colors.text }}>id</div>
                        <div className="flex-1 p-2 font-bold" style={{ color: theme.colors.text }}>email</div>
                    </div>
                    <div className="flex border-b" style={{ borderColor: theme.colors.text + '10' }}>
                        <div className="flex-1 p-2 border-r font-mono" style={{ borderColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>1</div>
                        <div className="flex-1 p-2 font-mono" style={{ color: theme.colors.textSecondary }}>a@b.com</div>
                    </div>
                    <div className="flex">
                        <div className="flex-1 p-2 border-r font-mono" style={{ borderColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>2</div>
                        <div className="flex-1 p-2 font-mono" style={{ color: theme.colors.textSecondary }}>c@d.com</div>
                    </div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};