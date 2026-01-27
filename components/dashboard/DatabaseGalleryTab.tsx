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

  // Helper for common SVG props
  const svgProps = {
    vectorEffect: "non-scaling-stroke",
    fill: theme.colors.surface,
    stroke: theme.colors.text,
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const textFill = { fill: theme.colors.text, stroke: 'none' };
  const primaryFill = { fill: theme.colors.primary, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Database Primitives (340+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            UI components for schema design, SQL consoles, data infrastructure, and cloud resources.
        </p>

        {/* --- 1. Data Types & Fields --- */}
        <SectionTitle>1. Data Types & Fields</SectionTitle>
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

        {/* --- 2. SQL Keywords & Actions --- */}
        <SectionTitle>2. SQL Keywords & Actions</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             {['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'FROM', 'WHERE', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'UNION', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'OFFSET', 'CREATE', 'ALTER', 'DROP', 'TRUNCATE', 'GRANT', 'REVOKE', 'COMMIT', 'ROLLBACK', 'EXPLAIN'].map(kw => (
                <GalleryItem key={kw} title={`Keyword: ${kw}`} centered>
                    <span className="font-mono text-xs font-bold tracking-wide" style={{ color: theme.colors.accent }}>{kw}</span>
                </GalleryItem>
             ))}
        </div>

        {/* --- 3. Database Objects --- */}
        <SectionTitle>3. Database Objects</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Table" centered><Icons.File size="lg" style={{ color: theme.colors.primary }}/></GalleryItem>
             <GalleryItem title="View" centered><Icons.Image size="lg" style={{ color: theme.colors.secondary }}/></GalleryItem>
             <GalleryItem title="Stored Proc" centered><Icons.Settings size="lg" style={{ color: theme.colors.warning }}/></GalleryItem>
             <GalleryItem title="Trigger" centered><Icons.Clock size="lg" style={{ color: theme.colors.error }}/></GalleryItem>
             <GalleryItem title="User" centered><Icons.User size="lg" style={{ color: theme.colors.success }}/></GalleryItem>
             <GalleryItem title="Role" centered><Icons.Lock size="lg" style={{ color: theme.colors.text }}/></GalleryItem>
             <GalleryItem title="Schema" centered><Icons.Layers size="lg" style={{ color: theme.colors.info }}/></GalleryItem>
             <GalleryItem title="Sequence" centered><Icons.Sort size="lg" style={{ color: theme.colors.accent }}/></GalleryItem>
             <GalleryItem title="Function" centered><span className="font-serif italic font-bold text-2xl" style={{color: theme.colors.warning}}>ƒ(x)</span></GalleryItem>
             <GalleryItem title="Materialized View" centered><Icons.Copy size="lg" style={{ color: theme.colors.secondary }}/></GalleryItem>
             <GalleryItem title="Extension" centered><Icons.Grid size="lg" style={{ color: theme.colors.text }}/></GalleryItem>
             <GalleryItem title="Tablespace" centered><Icons.Cloud size="lg" style={{ color: theme.colors.primary }}/></GalleryItem>
        </div>
        
        {/* --- 4. Complex Modules --- */}
        <SectionTitle>4. Complex Modules</SectionTitle>
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

        {/* --- 5. Connection & State --- */}
        <SectionTitle>5. Connection & State</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Connected" centered>
                <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.colors.success }}>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.success }}></div> Connected
                </div>
            </GalleryItem>
            <GalleryItem title="Connecting" centered>
                <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.colors.warning }}>
                    <Icons.Refresh size="sm" className="animate-spin"/> Syncing
                </div>
            </GalleryItem>
            <GalleryItem title="Disconnected" centered>
                <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.colors.error }}>
                    <Icons.Close size="sm"/> Offline
                </div>
            </GalleryItem>
            <GalleryItem title="Latency Good" centered>
                <div className="flex items-end gap-0.5">
                    <div className="w-1 h-2" style={{backgroundColor: theme.colors.success}}></div>
                    <div className="w-1 h-3" style={{backgroundColor: theme.colors.success}}></div>
                    <div className="w-1 h-4" style={{backgroundColor: theme.colors.success}}></div>
                    <span className="text-[8px] ml-1">12ms</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Latency Poor" centered>
                <div className="flex items-end gap-0.5">
                    <div className="w-1 h-2" style={{backgroundColor: theme.colors.error}}></div>
                    <div className="w-1 h-3" style={{backgroundColor: theme.colors.error}}></div>
                    <div className="w-1 h-1 bg-gray-200"></div>
                    <span className="text-[8px] ml-1">400ms</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Database Icon" centered>
                <Icons.Home size="lg" style={{ color: theme.colors.primary }}/>
            </GalleryItem>
        </div>

        {/* --- 6. Users & Auth --- */}
        <SectionTitle>6. Users & Auth</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Root User" centered><div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-mono font-bold">ROOT</div></GalleryItem>
            <GalleryItem title="Grant" centered><div className="border px-2 py-1 rounded text-xs font-mono text-green-600 border-green-200">GRANT ALL</div></GalleryItem>
            <GalleryItem title="Revoke" centered><div className="border px-2 py-1 rounded text-xs font-mono text-red-600 border-red-200">REVOKE</div></GalleryItem>
            <GalleryItem title="Password" centered><div className="flex gap-1">{[1,2,3,4,5].map(i=><div key={i} className="w-2 h-2 rounded-full bg-gray-400"></div>)}</div></GalleryItem>
            <GalleryItem title="SSH Key" centered><Icons.Lock size="md" style={{ color: theme.colors.warning }}/></GalleryItem>
            <GalleryItem title="Role Badge" centered><div className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold">Admin</div></GalleryItem>
        </div>

        {/* --- 7. Data Grid Patterns --- */}
        <SectionTitle>7. Data Grid Patterns</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Standard Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="1" />
                    <line x1="0" y1="15" x2="100" y2="15" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="0" y1="30" x2="100" y2="30" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="0" y1="45" x2="100" y2="45" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Zebra Striped" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="15" fill={theme.colors.surface} />
                    <rect x="0" y="15" width="100" height="15" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="0" y="30" width="100" height="15" fill={theme.colors.surface} />
                    <rect x="0" y="45" width="100" height="15" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sort Header" centered>
                <div className="flex items-center gap-1 text-xs border-b pb-1 px-2 w-full">
                    <span className="font-bold">Name</span>
                    <Icons.Sort size="sm" className="opacity-50"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Filter Cell" centered>
                <div className="border rounded px-1 py-0.5 text-[8px] flex items-center gap-1 bg-gray-50">
                    <Icons.Filter size="sm" className="w-2"/> Contains...
                </div>
            </GalleryItem>
            <GalleryItem title="Null Cell" centered>
                <span className="text-[10px] font-mono opacity-30 italic">NULL</span>
            </GalleryItem>
            <GalleryItem title="Boolean Check" centered>
                <div className="w-4 h-4 rounded border bg-green-500 border-green-600 flex items-center justify-center text-white"><Icons.Check size="sm" className="w-3"/></div>
            </GalleryItem>
        </div>

        {/* --- 8. Keys & Constraints --- */}
        <SectionTitle>8. Keys & Constraints</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Primary Key" centered><Icons.Lock size="md" className="text-yellow-500"/></GalleryItem>
            <GalleryItem title="Foreign Key" centered><Icons.Link size="md" className="text-blue-500"/></GalleryItem>
            <GalleryItem title="Unique" centered><span className="text-xs font-bold border rounded px-1 border-purple-500 text-purple-500">U</span></GalleryItem>
            <GalleryItem title="Index" centered><Icons.List size="md" className="text-gray-500"/></GalleryItem>
            <GalleryItem title="Check" centered><Icons.Check size="md" className="text-green-500"/></GalleryItem>
            <GalleryItem title="Default" centered><span className="text-[10px] font-mono bg-gray-100 px-1 rounded">DEFAULT</span></GalleryItem>
        </div>

        {/* --- 9. Query Builder UI --- */}
        <SectionTitle>9. Query Builder UI</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Run Button" centered>
                <button className="bg-green-600 text-white px-3 py-1 rounded shadow text-xs font-bold flex items-center gap-1">
                    <Icons.Play size="sm" className="w-3"/> Run
                </button>
            </GalleryItem>
            <GalleryItem title="Explain" centered>
                <button className="border px-3 py-1 rounded text-xs font-bold flex items-center gap-1 hover:bg-gray-50">
                    <Icons.Search size="sm" className="w-3"/> Explain
                </button>
            </GalleryItem>
            <GalleryItem title="History Item" centered>
                <div className="text-[8px] font-mono truncate w-full px-2 opacity-60">SELECT * FROM...</div>
            </GalleryItem>
            <GalleryItem title="Saved Query" centered>
                <div className="flex items-center gap-1 text-xs"><Icons.Star size="sm" className="text-yellow-400"/> Monthly Report</div>
            </GalleryItem>
            <GalleryItem title="Parameter" centered>
                <span className="text-blue-600 font-mono text-xs">:user_id</span>
            </GalleryItem>
            <GalleryItem title="Comment" centered>
                <span className="text-gray-400 font-mono text-xs">-- TODO: Fix</span>
            </GalleryItem>
        </div>

        {/* --- 10. NoSQL & JSON --- */}
        <SectionTitle>10. NoSQL & JSON</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Object" centered><span className="font-mono text-lg font-bold text-blue-600">{`{ }`}</span></GalleryItem>
            <GalleryItem title="Array" centered><span className="font-mono text-lg font-bold text-orange-600">[ ]</span></GalleryItem>
            <GalleryItem title="Key-Value" centered>
                <div className="text-[8px] font-mono"><span className="text-purple-600">"id"</span>: <span className="text-blue-600">123</span></div>
            </GalleryItem>
            <GalleryItem title="Document" centered><Icons.File size="md" className="text-yellow-600"/></GalleryItem>
            <GalleryItem title="Collection" centered><Icons.Folder size="md" className="text-yellow-600"/></GalleryItem>
            <GalleryItem title="Tree Node" centered>
                <div className="flex items-center gap-1 text-xs"><Icons.ChevronRight size="sm" className="w-3"/> root</div>
            </GalleryItem>
        </div>

        {/* --- 11. Infrastructure --- */}
        <SectionTitle>11. Infrastructure</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Cluster" centered><Icons.Layers size="lg" style={{ color: theme.colors.primary }}/></GalleryItem>
            <GalleryItem title="Replica" centered><Icons.Copy size="lg" style={{ color: theme.colors.secondary }}/></GalleryItem>
            <GalleryItem title="Shard" centered>
                <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-3 h-3 bg-blue-500"></div><div className="w-3 h-3 bg-blue-300"></div>
                    <div className="w-3 h-3 bg-blue-300"></div><div className="w-3 h-3 bg-blue-500"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Partition" centered><Icons.Grid size="lg" style={{ color: theme.colors.accent }}/></GalleryItem>
            <GalleryItem title="Load Balancer" centered><Icons.Share size="lg" style={{ color: theme.colors.info }}/></GalleryItem>
            <GalleryItem title="Server" centered><Icons.Home size="lg" style={{ color: theme.colors.text }}/></GalleryItem>
        </div>

        {/* --- 12. Operations --- */}
        <SectionTitle>12. Operations</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Backup" centered><Icons.Cloud size="lg" className="text-blue-500"/></GalleryItem>
            <GalleryItem title="Restore" centered><Icons.Refresh size="lg" className="text-green-500"/></GalleryItem>
            <GalleryItem title="Vacuum" centered><Icons.Trash size="lg" className="text-gray-500"/></GalleryItem>
            <GalleryItem title="Reindex" centered><Icons.Sort size="lg" className="text-purple-500"/></GalleryItem>
            <GalleryItem title="Analyze" centered><Icons.Chart size="lg" className="text-orange-500"/></GalleryItem>
            <GalleryItem title="Flush" centered><Icons.Download size="lg" className="text-red-500"/></GalleryItem>
        </div>

        {/* --- 13. Monitoring --- */}
        <SectionTitle>13. Monitoring</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="CPU Load" centered>
                <div className="w-full px-2">
                    <div className="text-[8px] mb-1">CPU</div>
                    <div className="h-2 w-full bg-gray-200 rounded overflow-hidden"><div className="h-full bg-blue-500 w-[80%]"></div></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Memory" centered>
                <div className="w-full px-2">
                    <div className="text-[8px] mb-1">RAM</div>
                    <div className="h-2 w-full bg-gray-200 rounded overflow-hidden"><div className="h-full bg-purple-500 w-[40%]"></div></div>
                </div>
            </GalleryItem>
            <GalleryItem title="IOPS" centered>
                <div className="text-xs font-mono font-bold">4.2k <span className="text-[8px] font-normal opacity-60">ops/s</span></div>
            </GalleryItem>
            <GalleryItem title="Connections" centered>
                <div className="text-xs font-mono font-bold">85 <span className="text-[8px] font-normal opacity-60">conn</span></div>
            </GalleryItem>
            <GalleryItem title="Slow Query" centered>
                <div className="text-xs font-mono font-bold text-red-500">2.4s</div>
            </GalleryItem>
            <GalleryItem title="Health" centered>
                <div className="text-green-500 font-bold text-xs">Healthy</div>
            </GalleryItem>
        </div>

        {/* --- 14. ER Diagrams --- */}
        <SectionTitle>14. ER Diagrams</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Entity Box" centered>
                <div className="border w-16 h-10 flex items-center justify-center text-[8px] font-bold shadow-sm">USER</div>
            </GalleryItem>
            <GalleryItem title="1:1" centered><div className="w-full h-px bg-black relative"><div className="absolute left-0 h-2 w-px bg-black -top-1"></div><div className="absolute right-0 h-2 w-px bg-black -top-1"></div></div></GalleryItem>
            <GalleryItem title="1:N" centered><div className="w-full h-px bg-black relative"><div className="absolute left-0 h-2 w-px bg-black -top-1"></div><div className="absolute right-0 h-2 w-px bg-black -top-1 transform rotate-45 origin-bottom"></div><div className="absolute right-0 h-2 w-px bg-black -top-1 transform -rotate-45 origin-bottom"></div></div></GalleryItem>
            <GalleryItem title="N:M" centered><div className="w-full h-px bg-black"></div></GalleryItem>
            <GalleryItem title="Crow's Foot" centered><Icons.Code size="md" className="transform rotate-90"/></GalleryItem>
            <GalleryItem title="Relationship" centered><div className="w-4 h-4 border transform rotate-45"></div></GalleryItem>
        </div>

        {/* --- 15. Data Movement --- */}
        <SectionTitle>15. Data Movement</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Import" centered><Icons.Cloud size="lg" className="transform rotate-180"/></GalleryItem>
            <GalleryItem title="Export" centered><Icons.Cloud size="lg"/></GalleryItem>
            <GalleryItem title="ETL" centered><Icons.Refresh size="lg"/></GalleryItem>
            <GalleryItem title="Pipeline" centered><div className="flex gap-1 items-center"><div className="w-2 h-2 bg-blue-500 rounded-full"></div><div className="w-4 h-0.5 bg-gray-300"></div><div className="w-2 h-2 bg-green-500 rounded-full"></div></div></GalleryItem>
            <GalleryItem title="Source" centered><Icons.File size="md"/></GalleryItem>
            <GalleryItem title="Dest" centered><Icons.Home size="md"/></GalleryItem>
        </div>

        {/* --- 16. API & Endpoints --- */}
        <SectionTitle>16. API & Endpoints</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="GET" centered><span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-1 rounded">GET</span></GalleryItem>
            <GalleryItem title="POST" centered><span className="text-[10px] font-bold text-green-600 bg-green-100 px-1 rounded">POST</span></GalleryItem>
            <GalleryItem title="PUT" centered><span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-1 rounded">PUT</span></GalleryItem>
            <GalleryItem title="DELETE" centered><span className="text-[10px] font-bold text-red-600 bg-red-100 px-1 rounded">DEL</span></GalleryItem>
            <GalleryItem title="Endpoint" centered><span className="text-[8px] font-mono">/api/v1</span></GalleryItem>
            <GalleryItem title="GraphQL" centered><span className="text-[10px] font-bold text-pink-600">GQL</span></GalleryItem>
        </div>

        {/* --- 17. Security & Compliance --- */}
        <SectionTitle>17. Security & Compliance</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="SSL" centered><Icons.Lock size="md" className="text-green-500"/></GalleryItem>
            <GalleryItem title="Firewall" centered><Icons.Grid size="md" className="text-red-500"/></GalleryItem>
            <GalleryItem title="Audit" centered><Icons.List size="md" className="text-gray-500"/></GalleryItem>
            <GalleryItem title="Encryption" centered><Icons.Lock size="md" className="text-blue-500"/></GalleryItem>
            <GalleryItem title="Policy" centered><Icons.File size="md" className="text-yellow-500"/></GalleryItem>
            <GalleryItem title="GDPR" centered><span className="text-[8px] font-bold border px-1 rounded">GDPR</span></GalleryItem>
        </div>

        {/* --- 18. Cloud Providers --- */}
        <SectionTitle>18. Cloud Providers</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="AWS" centered><span className="font-bold text-orange-500">AWS</span></GalleryItem>
            <GalleryItem title="GCP" centered><span className="font-bold text-blue-500">GCP</span></GalleryItem>
            <GalleryItem title="Azure" centered><span className="font-bold text-blue-600">Azure</span></GalleryItem>
            <GalleryItem title="Firebase" centered><span className="font-bold text-yellow-500">Fire</span></GalleryItem>
            <GalleryItem title="Mongo" centered><span className="font-bold text-green-600">MDB</span></GalleryItem>
            <GalleryItem title="Redis" centered><span className="font-bold text-red-600">Redis</span></GalleryItem>
        </div>

        {/* --- 19. Misc Tools --- */}
        <SectionTitle>19. Misc Tools</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Terminal" centered><div className="bg-black text-green-500 p-1 text-[8px] font-mono rounded w-full text-center">$ >_</div></GalleryItem>
            <GalleryItem title="Docs" centered><Icons.File size="md" className="text-blue-400"/></GalleryItem>
            <GalleryItem title="Settings" centered><Icons.Settings size="md" className="text-gray-400"/></GalleryItem>
            <GalleryItem title="Logs" centered><Icons.List size="md" className="text-gray-400"/></GalleryItem>
            <GalleryItem title="Support" centered><Icons.Help size="md" className="text-purple-400"/></GalleryItem>
            <GalleryItem title="Alerts" centered><Icons.Bell size="md" className="text-yellow-400"/></GalleryItem>
        </div>

        {/* --- 20. Integrated Database Views (NEW) --- */}
        <SectionTitle>20. Integrated Database Views</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
            <GalleryItem title="Schema Canvas" centered>
                <div className="relative w-full h-full p-2">
                    <div className="absolute top-2 left-2 border rounded bg-white shadow-sm p-1 text-[6px] w-12 z-10" style={{borderColor: theme.colors.text+'20'}}>User</div>
                    <div className="absolute bottom-2 right-2 border rounded bg-white shadow-sm p-1 text-[6px] w-12 z-10" style={{borderColor: theme.colors.text+'20'}}>Post</div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none"><line x1="30" y1="20" x2="70" y2="40" stroke={theme.colors.text} strokeWidth="1" /></svg>
                </div>
            </GalleryItem>
            <GalleryItem title="Query Builder" centered>
                <div className="flex gap-1 flex-wrap justify-center">
                    <div className="px-1 py-0.5 border rounded text-[6px] bg-blue-50">SELECT</div>
                    <div className="px-1 py-0.5 border rounded text-[6px]">id</div>
                    <div className="px-1 py-0.5 border rounded text-[6px] bg-blue-50">FROM</div>
                    <div className="px-1 py-0.5 border rounded text-[6px]">users</div>
                </div>
            </GalleryItem>
            <GalleryItem title="SQL Results Split" centered>
                <div className="w-full h-full flex flex-col border rounded overflow-hidden">
                    <div className="h-1/2 bg-gray-900 text-green-400 text-[6px] p-1 font-mono">SELECT *</div>
                    <div className="h-1/2 bg-white text-[6px] p-1 border-t grid grid-cols-2"><span>1</span><span>Admin</span></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Connection Form" centered>
                <div className="w-3/4 flex flex-col gap-1">
                    <div className="h-2 w-full border rounded bg-white"></div>
                    <div className="h-2 w-full border rounded bg-white"></div>
                    <div className="h-3 w-full rounded bg-blue-500 mt-1"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="User Perms" centered>
                <div className="grid grid-cols-3 gap-1 w-full text-[6px] text-center">
                    <span>Read</span><span>Write</span><span>Exec</span>
                    <input type="checkbox" checked readOnly/><input type="checkbox" checked readOnly/><input type="checkbox" readOnly/>
                </div>
            </GalleryItem>
            <GalleryItem title="Migration Hist" centered>
                <div className="flex flex-col gap-1 w-full pl-4 border-l">
                    <div className="text-[6px] bg-green-100 px-1 rounded">v1_init</div>
                    <div className="text-[6px] bg-green-100 px-1 rounded">v2_add_col</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Cluster Health" centered>
                <div className="flex justify-around w-full items-end h-8 gap-1">
                    <div className="w-2 bg-green-500 h-6 rounded-t"></div>
                    <div className="w-2 bg-yellow-500 h-4 rounded-t"></div>
                    <div className="w-2 bg-blue-500 h-8 rounded-t"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="ETL Graph" centered>
                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 border rounded"></div>
                    <span className="text-[6px]">→</span>
                    <div className="w-4 h-4 border rounded bg-gray-100"></div>
                    <span className="text-[6px]">→</span>
                    <div className="w-4 h-4 border rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="JSON Tree" centered>
                <div className="text-[6px] font-mono w-full pl-2">
                    <div>▼ root</div>
                    <div className="pl-2">▶ config</div>
                    <div className="pl-2">▼ data</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Index List" centered>
                <div className="w-full space-y-1">
                    <div className="flex justify-between text-[6px]"><span>idx_user_email</span><span className="text-green-500">Active</span></div>
                    <div className="h-1 w-full bg-gray-200 rounded"><div className="h-1 w-3/4 bg-blue-500 rounded"></div></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Backup Schedule" centered>
                <div className="grid grid-cols-7 gap-px w-full text-[4px] text-center">
                    {[1,2,3,4,5,6,7].map(d => <div key={d} className={`p-0.5 ${d%2?'bg-green-100':'bg-gray-50'}`}>{d}</div>)}
                </div>
            </GalleryItem>
            <GalleryItem title="Slow Query" centered>
                <div className="w-full border-l-2 border-red-500 bg-red-50 p-1 text-[6px]">
                    <div className="font-bold">SELECT * FROM logs</div>
                    <div>Duration: 2.4s</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Pool Monitor" centered>
                <div className="w-full h-4 bg-gray-200 rounded overflow-hidden flex">
                    <div className="h-full bg-blue-500 w-1/2"></div>
                    <div className="h-full bg-green-500 w-1/4"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Replica Topo" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <circle cx="20" cy="5" r="3" fill={theme.colors.primary}/>
                    <line x1="20" y1="8" x2="10" y2="20" stroke={theme.colors.text} strokeWidth="0.5"/>
                    <line x1="20" y1="8" x2="30" y2="20" stroke={theme.colors.text} strokeWidth="0.5"/>
                    <circle cx="10" cy="20" r="3" fill={theme.colors.secondary}/>
                    <circle cx="30" cy="20" r="3" fill={theme.colors.secondary}/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Dictionary" centered>
                <div className="border rounded p-1 w-full bg-yellow-50 text-[6px]">
                    <b>status_id</b>: Integer<br/> FK to statuses
                </div>
            </GalleryItem>
            <GalleryItem title="API Mapper" centered>
                <div className="flex items-center gap-1 text-[6px]">
                    <div className="border px-1">GET /users</div>
                    <span>→</span>
                    <div className="font-mono">SELECT...</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Audit Log" centered>
                <div className="w-full text-[6px] font-mono">
                    <div className="opacity-50">12:00 DROP TABLE</div>
                    <div className="opacity-50">12:01 INSERT INTO</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Partition Map" centered>
                <div className="flex w-full border rounded overflow-hidden">
                    <div className="flex-1 bg-blue-100 text-[4px] text-center py-1">US</div>
                    <div className="flex-1 bg-blue-200 text-[4px] text-center py-1">EU</div>
                    <div className="flex-1 bg-blue-300 text-[4px] text-center py-1">AS</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Shard Dist" centered>
                <div className="grid grid-cols-4 gap-0.5 w-full">
                    {[1,1,1,1,1,0,1,1].map((s,i) => <div key={i} className={`h-2 ${s?'bg-green-400':'bg-red-400'}`}></div>)}
                </div>
            </GalleryItem>
            <GalleryItem title="Lock Monitor" centered>
                <div className="flex justify-between w-full text-[6px] border-b pb-1">
                    <span>PID: 123</span>
                    <Icons.Lock size="sm" className="w-2 h-2 text-red-500"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Cache Stats" centered>
                <div className="relative w-10 h-10 rounded-full border-4 border-green-500 border-r-gray-200"></div>
            </GalleryItem>
            <GalleryItem title="Storage Usage" centered>
                <div className="w-10 h-10 rounded-full border-4 border-purple-500 flex items-center justify-center text-[6px]">80%</div>
            </GalleryItem>
            <GalleryItem title="Session Mgr" centered>
                <div className="flex justify-between w-full items-center text-[6px]">
                    <span>User: bob</span>
                    <button className="bg-red-500 text-white px-1 rounded">KILL</button>
                </div>
            </GalleryItem>
            <GalleryItem title="Export Wiz" centered>
                <div className="w-full text-center">
                    <Icons.File size="md"/>
                    <div className="h-1 bg-blue-500 w-3/4 mx-auto mt-1 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Import Map" centered>
                <div className="flex justify-between w-3/4 text-[6px]">
                    <div className="flex flex-col gap-1"><span>CSV</span><span>Col1</span></div>
                    <span>→</span>
                    <div className="flex flex-col gap-1"><span>DB</span><span>Fld1</span></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Trigger Edit" centered>
                <div className="border rounded p-1 text-[6px] w-full">
                    <span className="text-purple-600">WHEN</span> update <br/>
                    <span className="text-purple-600">THEN</span> notify
                </div>
            </GalleryItem>
            <GalleryItem title="Proc Debug" centered>
                <div className="w-full bg-gray-50 font-mono text-[6px] p-1 border-l-2 border-blue-500">
                    Line 10: VAR x = 1
                </div>
            </GalleryItem>
            <GalleryItem title="DB Config" centered>
                <div className="grid grid-cols-2 gap-1 w-full text-[6px]">
                    <input className="border" placeholder="Key"/><input className="border" placeholder="Val"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Alert Rule" centered>
                <div className="w-full">
                    <div className="text-[6px] mb-1">CPU > 90%</div>
                    <div className="w-full h-1 bg-gray-200"><div className="w-[90%] h-full bg-red-500"></div></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Webhook" centered>
                <div className="flex gap-1 w-full">
                    <div className="flex-1 border h-3"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="API Keys" centered>
                <div className="border rounded p-1 bg-gray-100 text-[6px] font-mono tracking-widest w-full text-center">
                    sk_live_****
                </div>
            </GalleryItem>
            <GalleryItem title="SSL Info" centered>
                <div className="flex flex-col items-center text-green-600">
                    <Icons.Lock size="sm"/>
                    <span className="text-[6px]">Exp: 2025</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Schema Git" centered>
                <div className="flex items-center text-[6px] gap-1">
                    <div className="w-1 h-6 bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>feat/user</span>
                </div>
            </GalleryItem>
            <GalleryItem title="ERD Legend" centered>
                <div className="flex flex-col gap-1 text-[6px]">
                    <div className="flex items-center gap-1"><div className="w-3 border-b"></div> 1:1</div>
                    <div className="flex items-center gap-1"><div className="w-3 border-b border-dashed"></div> 1:N</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Maint Mode" centered>
                <div className="bg-yellow-400 text-black text-[6px] w-full text-center py-1 font-bold">
                    MAINTENANCE
                </div>
            </GalleryItem>
            <GalleryItem title="Data Masking" centered>
                <div className="border p-1 w-full text-[6px]">
                    Pattern: <span className="font-mono bg-gray-100">^\d{4}</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Query Hist" centered>
                <div className="w-full text-[6px] opacity-60">
                    <div>SELECT * ...</div>
                    <div className="border-t my-0.5"></div>
                    <div>UPDATE ...</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Pagination" centered>
                <div className="flex gap-1 text-[6px]">
                    <button className="border px-1">Prev</button>
                    <button className="border px-1 bg-blue-500 text-white">1</button>
                    <button className="border px-1">Next</button>
                </div>
            </GalleryItem>
            <GalleryItem title="Col Vis" centered>
                <div className="border p-1 text-[6px] w-16">
                    <div>[x] ID</div>
                    <div>[ ] Email</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Bulk Actions" centered>
                <div className="bg-blue-50 w-full p-1 flex justify-between items-center text-[6px] text-blue-800">
                    <span>2 selected</span>
                    <span className="font-bold">Delete</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Filter Logic" centered>
                <div className="border p-1 w-full text-[6px]">
                    AND
                    <div className="ml-1 pl-1 border-l">status = active</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Dep Graph" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <circle cx="20" cy="20" r="3" fill={theme.colors.text}/>
                    <circle cx="20" cy="5" r="2" fill="gray"/>
                    <circle cx="35" cy="20" r="2" fill="gray"/>
                    <circle cx="20" cy="35" r="2" fill="gray"/>
                    <circle cx="5" cy="20" r="2" fill="gray"/>
                    <line x1="20" y1="20" x2="20" y2="5" stroke="gray" strokeWidth="0.5"/>
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
