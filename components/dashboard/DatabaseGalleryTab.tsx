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
        <SectionTitle style={{ marginTop: '1rem' }}>Database Primitives (135 Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            UI components for schema design, SQL consoles, data grids, and infrastructure monitoring.
        </p>

        {/* ... (Sections 1-4 included below) ... */}
        
        {/* --- 1. Data Types & Fields --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {['INT', 'BIGINT', 'FLOAT', 'DOUBLE', 'DECIMAL', 'VARCHAR', 'CHAR', 'TEXT', 'CLOB', 'BLOB', 'DATE', 'TIME', 'TIMESTAMP', 'BOOL', 'UUID', 'JSON', 'XML', 'ENUM', 'SET', 'POINT'].map(type => (
                <GalleryItem key={type} title={`Type: ${type}`} centered>
                    <span className="font-mono text-xs px-2 py-1 rounded border shadow-sm" style={{ color: theme.colors.primary, borderColor: theme.colors.primary, backgroundColor: theme.colors.surface }}>{type}</span>
                </GalleryItem>
            ))}

            <GalleryItem title="Key: Primary" centered>
                <div className="flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded border" style={{ color: theme.colors.warning, backgroundColor: theme.colors.warning + '10', borderColor: theme.colors.warning + '30' }}>
                    <Icons.Lock size="sm" className="w-3 h-3"/> PK
                </div>
            </GalleryItem>

            <GalleryItem title="Key: Foreign" centered>
                <div className="flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded border" style={{ color: theme.colors.info, backgroundColor: theme.colors.info + '10', borderColor: theme.colors.info + '30' }}>
                    <Icons.Link size="sm" className="w-3 h-3"/> FK
                </div>
            </GalleryItem>

            <GalleryItem title="Index" centered>
                <div className="flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded border" style={{ color: theme.colors.textSecondary, backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '20' }}>
                    <Icons.Search size="sm" className="w-3 h-3"/> IDX
                </div>
            </GalleryItem>

            <GalleryItem title="Constraint: Unique" centered>
                <span className="font-mono text-[10px] font-bold border px-1.5 py-0.5 rounded" style={{ color: theme.colors.accent, backgroundColor: theme.colors.accent + '10', borderColor: theme.colors.accent + '30' }}>UNQ</span>
            </GalleryItem>

            <GalleryItem title="Constraint: Not Null" centered>
                <span className="font-mono text-[10px] font-bold border px-1.5 py-0.5 rounded" style={{ color: theme.colors.error, backgroundColor: theme.colors.error + '10', borderColor: theme.colors.error + '30' }}>NN</span>
            </GalleryItem>

            <GalleryItem title="Null" centered>
                <span className="font-mono text-xs opacity-40 uppercase tracking-widest" style={{ color: theme.colors.text }}>NULL</span>
            </GalleryItem>
        </div>

        {/* --- SQL Keywords & Actions --- */}
        <SectionTitle>SQL Keywords & Actions</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             {['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'FROM', 'WHERE', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'UNION', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'OFFSET', 'CREATE', 'ALTER', 'DROP', 'TRUNCATE', 'GRANT', 'REVOKE', 'COMMIT', 'ROLLBACK', 'EXPLAIN'].map(kw => (
                <GalleryItem key={kw} title={`Keyword: ${kw}`} centered>
                    <span className="font-mono text-xs font-bold tracking-wide" style={{ color: theme.colors.accent }}>{kw}</span>
                </GalleryItem>
             ))}
        </div>

        {/* --- Database Objects --- */}
        <SectionTitle>Database Objects</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Table" centered><Icons.File size="lg" style={{ color: theme.colors.primary }}/></GalleryItem>
             <GalleryItem title="View" centered><Icons.Image size="lg" style={{ color: theme.colors.secondary }}/></GalleryItem>
             <GalleryItem title="Stored Proc" centered><Icons.Settings size="lg" style={{ color: theme.colors.warning }}/></GalleryItem>
             <GalleryItem title="Trigger" centered><Icons.Clock size="lg" style={{ color: theme.colors.error }}/></GalleryItem>
             <GalleryItem title="User" centered><Icons.User size="lg" style={{ color: theme.colors.success }}/></GalleryItem>
             <GalleryItem title="Role" centered><Icons.Lock size="lg" style={{ color: theme.colors.text }}/></GalleryItem>
        </div>
        
        <SectionTitle>Complex Database Modules</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
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
                                    <Icons.Lock size="sm" className="w-3" style={{ color: theme.colors.warning }}/>
                                    <span className="font-bold" style={{ color: theme.colors.text }}>id</span>
                                </div>
                                <span className="font-mono opacity-50" style={{ color: theme.colors.text }}>UUID</span>
                            </div>
                             <div className="px-3 py-2 flex justify-between hover:bg-black/5 items-center">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold pl-5" style={{ color: theme.colors.text }}>email</span>
                                </div>
                                <span className="font-mono opacity-50" style={{ color: theme.colors.text }}>VARCHAR</span>
                            </div>
                             <div className="px-3 py-2 flex justify-between hover:bg-black/5 items-center">
                                <div className="flex items-center gap-2">
                                     <Icons.Link size="sm" className="w-3" style={{ color: theme.colors.info }}/>
                                    <span className="font-bold" style={{ color: theme.colors.text }}>role_id</span>
                                </div>
                                <span className="font-mono opacity-50" style={{ color: theme.colors.text }}>INT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </GalleryItem>
            
            {/* Ensure code blocks scale */}
            <GalleryItem title="SQL Console" className="col-span-2 md:col-span-4 min-h-[200px] h-auto">
                <div className="w-full h-full p-2">
                    <div className="flex flex-col h-full w-full rounded-lg border overflow-hidden font-mono text-xs shadow-sm" style={{ borderColor: theme.colors.text + '20' }}>
                        <div className="px-3 py-2 flex items-center gap-2 border-b" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.text + '05' }}>
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.error }}></div>
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.warning }}></div>
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.success }}></div>
                            <span className="opacity-50 ml-2 text-[10px]" style={{ color: theme.colors.text }}>query_editor.sql</span>
                        </div>
                        <div className="flex-1 p-4 relative" style={{ backgroundColor: theme.colors.text, color: theme.colors.surface }}>
                            {/* Static dark theme for code editor feel */}
                            <div className="pl-2 leading-relaxed opacity-90">
                                <span style={{ color: theme.colors.accent }}>SELECT</span> u.id, u.email, r.name<br/>
                                <span style={{ color: theme.colors.accent }}>FROM</span> users u<br/>
                                <span style={{ color: theme.colors.accent }}>JOIN</span> roles r <span style={{ color: theme.colors.accent }}>ON</span> u.role_id = r.id<br/>
                                <span style={{ color: theme.colors.accent }}>WHERE</span> u.active = <span style={{ color: theme.colors.info }}>true</span><br/>
                                <span style={{ color: theme.colors.accent }}>LIMIT</span> <span style={{ color: theme.colors.info }}>100</span>;
                            </div>
                            <div className="absolute bottom-3 right-3">
                                <button className="px-4 py-1.5 rounded font-bold text-[10px] shadow-sm tracking-wide text-white" style={{ backgroundColor: theme.colors.success }}>RUN ▶</button>
                            </div>
                        </div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="ER Relationship" centered>
                <div className="flex items-center w-full justify-center px-4">
                    <div className="w-10 h-10 border rounded-md shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}></div>
                    <div className="flex-1 h-px relative mx-1" style={{ backgroundColor: theme.colors.text + '40' }}>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-px h-3" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                            
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3" style={{ backgroundColor: theme.colors.text + '40' }}></div>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 border-t border-r transform rotate-45" style={{ borderColor: theme.colors.text + '40' }}></div>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 border-b border-r transform -rotate-45" style={{ borderColor: theme.colors.text + '40' }}></div>
                    </div>
                    <div className="w-10 h-10 border rounded-md shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}></div>
                </div>
            </GalleryItem>
            
            <GalleryItem title="Query Result" centered>
                <div className="w-full border rounded-md overflow-hidden text-[10px] shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <div className="flex border-b" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.text + '05' }}>
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

        {/* --- 5. Query Builder Primitives --- */}
        <SectionTitle>Query Builder</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Block: AND" centered>
                <div className="px-3 py-1 rounded-l-none border-l-4 font-bold text-xs uppercase tracking-wider relative" style={{ backgroundColor: theme.colors.info + '15', color: theme.colors.info, borderLeftColor: theme.colors.info }}>
                    AND
                    <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full -translate-y-1/2" style={{ backgroundColor: theme.colors.info }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Block: OR" centered>
                <div className="px-3 py-1 rounded-l-none border-l-4 font-bold text-xs uppercase tracking-wider relative" style={{ backgroundColor: theme.colors.warning + '15', color: theme.colors.warning, borderLeftColor: theme.colors.warning }}>
                    OR
                    <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full -translate-y-1/2" style={{ backgroundColor: theme.colors.warning }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Field Select" centered>
                <div className="flex items-center border rounded px-2 py-1 text-xs gap-2 w-full mx-4" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20', color: theme.colors.textSecondary }}>
                    <Icons.Tag size="sm" className="w-3 opacity-50"/> <span>User.Email</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Operator" centered>
                <div className="px-2 py-1 rounded text-xs font-mono font-bold" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text }}>contains</div>
            </GalleryItem>
        </div>

        {/* --- 6. Infrastructure Status --- */}
        <SectionTitle>Infrastructure Status</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Replication Lag" centered>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold" style={{ color: theme.colors.success }}>12ms</span>
                    <span className="text-[8px] uppercase tracking-wide opacity-60" style={{ color: theme.colors.text }}>Repl. Lag</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Shard Health" centered>
                <div className="grid grid-cols-3 gap-1">
                    {[1,1,1,1,0,1,1,1,1].map((s,i) => (
                        <div key={i} className={`w-3 h-3 rounded-sm ${!s && 'animate-pulse'}`} style={{ backgroundColor: s ? theme.colors.success : theme.colors.error }}></div>
                    ))}
                </div>
            </GalleryItem>

            <GalleryItem title="Connection Pool" centered>
                <div className="w-full px-4">
                    <div className="flex justify-between text-[8px] mb-1" style={{ color: theme.colors.text }}>
                        <span>Used</span><span>85/100</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div className="h-full w-[85%]" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};