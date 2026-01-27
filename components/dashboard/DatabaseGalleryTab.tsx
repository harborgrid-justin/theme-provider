import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center h-full relative overflow-hidden">{children}</div>
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
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Database Primitives (50 Items)</div>
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

            <CardWrapper title="Type: Varchar">
                <Centered>
                    <span className="font-mono text-xs px-2 py-1 rounded border" style={{ color: theme.colors.secondary, borderColor: theme.colors.secondary, backgroundColor: theme.colors.secondary + '10' }}>ABC</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Type: Boolean">
                <Centered>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px]" style={{ borderColor: theme.colors.text + '20' }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.success }}></div> T
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Type: JSON">
                <Centered>
                    <span className="font-mono text-xs px-2 py-1 rounded" style={{ color: '#F59E0B', backgroundColor: '#F59E0B20' }}>{`{ }`}</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Type: Date">
                <Centered>
                    <div className="flex items-center gap-1 text-xs opacity-70" style={{ color: theme.colors.text }}>
                        <Icons.Calendar size="sm"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Type: UUID">
                <Centered>
                    <div className="flex items-center gap-1 text-[10px] font-mono border-b border-dashed" style={{ borderColor: theme.colors.text + '40', color: theme.colors.text }}>
                        ID
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Type: Blob">
                <Centered>
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-gray-100 text-[10px]" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text }}>
                        0101
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Value: Null">
                <Centered>
                    <span className="text-[10px] uppercase font-bold opacity-40" style={{ color: theme.colors.text }}>NULL</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Key: Primary">
                <Centered>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm border border-yellow-200" style={{ backgroundColor: '#FEF9C3', color: '#CA8A04' }}>
                        <Icons.Lock size="sm"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Key: Foreign">
                <Centered>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-dashed" style={{ borderColor: theme.colors.text + '40', color: theme.colors.textSecondary }}>
                        <Icons.Link size="sm"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Constraint: Unique">
                <Centered>
                    <div className="text-[10px] font-bold px-1.5 py-0.5 rounded border" style={{ borderColor: theme.colors.accent, color: theme.colors.accent }}>UQ</div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Constraint: Not Null">
                <Centered>
                    <span className="text-[10px] font-bold" style={{ color: theme.colors.error }}>*NN</span>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 2. SQL Operations --- */}
        <div style={sectionTitleStyle}>SQL & Query Operations</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            
            <CardWrapper title="Keyword: SELECT">
                <Centered>
                    <span className="font-mono font-bold text-xs" style={{ color: theme.colors.primary }}>SELECT</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Keyword: FROM">
                <Centered>
                    <span className="font-mono font-bold text-xs" style={{ color: theme.colors.secondary }}>FROM</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Action: Execute">
                <Centered>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:shadow-lg transition-all" style={{ backgroundColor: theme.colors.success, color: '#fff' }}>
                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
                    </button>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Action: Commit">
                <Centered>
                    <div className="flex flex-col items-center gap-1 text-[10px]" style={{ color: theme.colors.success }}>
                        <Icons.Check size="sm"/>
                        <span className="font-bold">COMMIT</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Action: Rollback">
                <Centered>
                    <div className="flex flex-col items-center gap-1 text-[10px]" style={{ color: theme.colors.error }}>
                        <div className="transform -scale-x-100"><Icons.Clock size="sm"/></div>
                        <span className="font-bold">ROLLBACK</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Action: Explain">
                <Centered>
                    <span className="border-b border-dotted cursor-help text-xs" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>EXPLAIN</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Result: Row Count">
                <Centered>
                    <div className="text-center">
                        <div className="text-lg font-mono font-bold" style={{ color: theme.colors.text }}>1,402</div>
                        <div className="text-[8px] uppercase opacity-50">Rows</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Result: Time">
                <Centered>
                    <div className="text-center">
                        <div className="text-lg font-mono font-bold" style={{ color: theme.colors.text }}>42ms</div>
                        <div className="text-[8px] uppercase opacity-50">Duration</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Migrate: Up">
                <Centered>
                    <div className="flex items-center gap-1 text-xs font-bold" style={{ color: theme.colors.primary }}>
                        <div className="w-4 h-4 border rounded flex items-center justify-center transform -rotate-90">➜</div>
                        v14
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Migrate: Down">
                <Centered>
                    <div className="flex items-center gap-1 text-xs font-bold opacity-60" style={{ color: theme.colors.text }}>
                        <div className="w-4 h-4 border rounded flex items-center justify-center transform rotate-90">➜</div>
                        v13
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Table Scan">
                <Centered>
                    <div className="w-full px-4">
                        <div className="h-1.5 w-full bg-red-100 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-red-500 striped-bg"></div>
                        </div>
                        <div className="text-[8px] text-center mt-1 text-red-500 font-bold">FULL SCAN</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Index Seek">
                <Centered>
                    <div className="w-full px-4">
                        <div className="h-1.5 w-full bg-green-100 rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-green-500"></div>
                        </div>
                        <div className="text-[8px] text-center mt-1 text-green-600 font-bold">IDX SEEK</div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 3. Infrastructure --- */}
        <div style={sectionTitleStyle}>Infrastructure & Status</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            
            <CardWrapper title="Node: Master">
                <Centered>
                    <div className="w-10 h-10 border-2 rounded flex items-center justify-center relative" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.surface }}>
                        <div className="absolute -top-3 text-yellow-500"><Icons.Star size="sm"/></div>
                        <span className="font-bold text-[10px]">RW</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Node: Replica">
                <Centered>
                    <div className="w-10 h-10 border border-dashed rounded flex items-center justify-center relative opacity-70" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}>
                        <span className="font-bold text-[10px]">RO</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Connection: Active">
                <Centered>
                    <div className="flex items-center gap-2 px-2 py-1 rounded bg-green-50 text-green-700 border border-green-200">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold">Connected</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Connection: Error">
                <Centered>
                    <div className="flex items-center gap-2 px-2 py-1 rounded bg-red-50 text-red-700 border border-red-200">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-[10px] font-bold">Refused</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Shard Partition">
                <Centered>
                    <div className="flex gap-0.5">
                        <div className="w-3 h-8 border rounded-l bg-gray-50"></div>
                        <div className="w-3 h-8 border bg-gray-50"></div>
                        <div className="w-3 h-8 border rounded-r bg-blue-50" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.primary + '10' }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Cache Hit">
                <Centered>
                    <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center" style={{ borderColor: theme.colors.success, color: theme.colors.success }}>
                        <Icons.Check size="sm"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Cache Miss">
                <Centered>
                    <div className="w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center opacity-50" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>
                        <Icons.Close size="sm"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Storage: SSD">
                <Centered>
                    <div className="w-12 h-8 border rounded flex flex-col justify-center px-1 gap-1" style={{ borderColor: theme.colors.text + '40' }}>
                        <div className="w-full h-0.5 bg-current opacity-20"></div>
                        <div className="w-full h-0.5 bg-current opacity-20"></div>
                        <div className="w-2/3 h-0.5 bg-current opacity-20"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Replication Lag">
                <Centered>
                    <div className="text-center">
                        <div className="text-xs font-bold text-red-500">142ms</div>
                        <div className="h-1 w-12 bg-gray-200 mt-1 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-red-500"></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Backup Job">
                <Centered>
                    <div className="w-8 h-8 rounded border flex items-center justify-center" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '05' }}>
                        <div className="animate-spin duration-3000"><Icons.Clock size="sm"/></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Lock Wait">
                <Centered>
                    <div className="flex gap-1 items-center opacity-50">
                        <Icons.Lock size="sm"/>
                        <span className="text-[10px] font-mono">WAIT</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Vacuum / GC">
                <Centered>
                    <div className="w-12 h-6 border rounded-full flex items-center px-1" style={{ borderColor: theme.colors.text + '20' }}>
                        <div className="w-4 h-4 rounded-full bg-gray-300 animate-bounce-horizontal"></div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 4. Complex Modules --- */}
        <div style={sectionTitleStyle}>Complex Database Modules</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            
            {/* 1. Schema Designer Node (Span 2) */}
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
                        <div className="px-3 py-1.5 flex justify-between hover:bg-black/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3"></div>
                                <span style={{ color: theme.colors.text }}>email</span>
                            </div>
                            <span className="font-mono opacity-50">VARCHAR(255)</span>
                        </div>
                        <div className="px-3 py-1.5 flex justify-between hover:bg-black/5">
                            <div className="flex items-center gap-2">
                                <Icons.Link size="sm" className="opacity-40 w-3"/>
                                <span style={{ color: theme.colors.text }}>role_id</span>
                            </div>
                            <span className="font-mono opacity-50">INT</span>
                        </div>
                        <div className="px-3 py-1.5 flex justify-between hover:bg-black/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3"></div>
                                <span style={{ color: theme.colors.text }}>created_at</span>
                            </div>
                            <span className="font-mono opacity-50">TIMESTAMP</span>
                        </div>
                    </div>
                </div>
            </CardWrapper>

            {/* 2. SQL Console (Span 4) */}
            <CardWrapper title="SQL Console" className="col-span-2 md:col-span-4 min-h-[180px]">
                <div className="flex flex-col h-full w-full rounded border overflow-hidden font-mono text-xs" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 border-b" style={{ borderColor: theme.colors.text + '10' }}>
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="opacity-50 ml-2">query_editor.sql</span>
                    </div>
                    <div className="flex-1 p-3 relative" style={{ backgroundColor: theme.colors.text, color: theme.colors.surface }}>
                        <div className="absolute left-0 top-3 bottom-0 w-8 text-right pr-2 opacity-30 select-none border-r border-white/10">
                            1<br/>2<br/>3<br/>4
                        </div>
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

            {/* 3. Query Performance Plan (Span 4) */}
            <CardWrapper title="Query Execution Plan" className="col-span-2 md:col-span-4 min-h-[150px]">
                <div className="flex items-center justify-center w-full h-full">
                    <div className="flex flex-col items-center">
                        <div className="px-3 py-1 rounded border bg-white shadow-sm text-xs font-bold z-10" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>Result (100 rows)</div>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <div className="px-3 py-1 rounded border bg-white shadow-sm text-xs z-10 flex items-center gap-2" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                            <span className="text-[10px] uppercase font-bold opacity-50">Sort</span>
                            <span>cost: 12.4</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <div className="flex gap-8 relative">
                            {/* Connector */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] h-px bg-gray-300"></div>
                            
                            <div className="flex flex-col items-center">
                                <div className="h-4 w-px bg-gray-300"></div>
                                <div className="px-3 py-1 rounded border bg-white shadow-sm text-xs" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                                    <span className="font-bold text-blue-600">Seq Scan</span> <span className="opacity-50">users</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-4 w-px bg-gray-300"></div>
                                <div className="px-3 py-1 rounded border bg-white shadow-sm text-xs" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                                    <span className="font-bold text-green-600">Index Scan</span> <span className="opacity-50">roles</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardWrapper>

            {/* 4. Connection Pool Grid (Span 2) */}
            <CardWrapper title="Connection Pool" className="col-span-2 min-h-[150px]">
                <div className="p-2 w-full h-full">
                    <div className="text-[10px] mb-2 flex justify-between">
                        <span>Active: 14</span>
                        <span className="opacity-50">Max: 50</span>
                    </div>
                    <div className="grid grid-cols-10 gap-1.5">
                        {Array.from({ length: 50 }).map((_, i) => {
                            const status = i < 14 ? 'active' : i < 16 ? 'idle' : 'empty';
                            return (
                                <div 
                                    key={i} 
                                    className="aspect-square rounded-sm transition-all"
                                    style={{ 
                                        backgroundColor: status === 'active' ? theme.colors.success : status === 'idle' ? '#F59E0B' : theme.colors.text + '10',
                                        opacity: status === 'empty' ? 0.3 : 1
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </CardWrapper>

            {/* 5. Slow Query Log (Span 3) */}
            <CardWrapper title="Slow Query Log" className="col-span-2 md:col-span-3">
                <div className="w-full text-[10px] space-y-2">
                    {[
                        { time: '2.4s', query: 'SELECT * FROM huge_table WHERE non_indexed_col = 1' },
                        { time: '1.1s', query: 'UPDATE analytics SET processed = true' },
                        { time: '890ms', query: 'DELETE FROM logs WHERE created_at < NOW()' },
                    ].map((log, i) => (
                        <div key={i} className="flex gap-2 p-1.5 rounded hover:bg-black/5 cursor-pointer border-l-2 border-transparent hover:border-red-500 transition-all">
                            <span className="font-mono font-bold text-red-500 shrink-0 w-10 text-right">{log.time}</span>
                            <span className="font-mono truncate opacity-70" style={{ color: theme.colors.text }}>{log.query}</span>
                        </div>
                    ))}
                </div>
            </CardWrapper>

            {/* 6. Index Hit Ratio (Span 3) */}
            <CardWrapper title="Index Hit Ratio" className="col-span-2 md:col-span-3">
                <div className="flex items-center gap-4 w-full h-full px-4">
                    <div className="relative w-20 h-20 shrink-0">
                         <svg className="w-full h-full transform -rotate-90">
                             <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="8" fill="transparent" style={{ color: theme.colors.text + '10' }} />
                             <circle cx="40" cy="40" r="32" stroke={theme.colors.success} strokeWidth="8" fill="transparent" strokeDasharray="201" strokeDashoffset="10" strokeLinecap="round" />
                         </svg>
                         <div className="absolute inset-0 flex items-center justify-center font-bold text-sm" style={{ color: theme.colors.text }}>95%</div>
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="opacity-60">Cache Hits</span>
                            <span className="font-mono">45.2M</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="opacity-60">Disk Reads</span>
                            <span className="font-mono">2.1M</span>
                        </div>
                        <div className="h-1 w-full bg-gray-100 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-green-500 w-[95%]"></div>
                        </div>
                    </div>
                </div>
            </CardWrapper>

        </div>
    </div>
  );
};