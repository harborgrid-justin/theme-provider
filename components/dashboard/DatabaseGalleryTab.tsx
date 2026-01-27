import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full overflow-hidden">{children}</div>
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

  const CardWrapper: React.FC<{ children?: React.ReactNode; title: string; className?: string }> = ({ children, title, className = '' }) => (
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
            {['INT', 'BIGINT', 'FLOAT', 'DOUBLE', 'DECIMAL', 'VARCHAR', 'CHAR', 'TEXT', 'CLOB', 'BLOB', 'DATE', 'TIME', 'TIMESTAMP', 'BOOL', 'UUID', 'JSON', 'XML', 'ENUM', 'SET', 'POINT'].map(type => (
                <CardWrapper key={type} title={`Type: ${type}`}>
                    <Centered>
                        <span className="font-mono text-xs px-2 py-1 rounded border" style={{ color: theme.colors.primary, borderColor: theme.colors.primary, backgroundColor: theme.colors.primary + '10' }}>{type}</span>
                    </Centered>
                </CardWrapper>
            ))}

            <CardWrapper title="Key: Primary">
                <Centered>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-yellow-600">
                        <Icons.Lock size="sm" className="w-3 h-3"/> PK
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Key: Foreign">
                <Centered>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600">
                        <Icons.Link size="sm" className="w-3 h-3"/> FK
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Index">
                <Centered>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500">
                        <Icons.Search size="sm" className="w-3 h-3"/> IDX
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Constraint: Unique">
                <Centered>
                    <span className="font-mono text-[10px] font-bold border px-1 rounded bg-purple-50 text-purple-700 border-purple-200">UNQ</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Constraint: Not Null">
                <Centered>
                    <span className="font-mono text-[10px] font-bold border px-1 rounded bg-red-50 text-red-700 border-red-200">NN</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Null">
                <Centered>
                    <span className="font-mono text-[10px] opacity-40 uppercase">NULL</span>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- SQL Keywords & Actions --- */}
        <div style={sectionTitleStyle}>SQL Keywords & Actions</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             {['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'FROM', 'WHERE', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'UNION', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'OFFSET', 'CREATE', 'ALTER', 'DROP', 'TRUNCATE', 'GRANT', 'REVOKE', 'COMMIT', 'ROLLBACK', 'EXPLAIN'].map(kw => (
                <CardWrapper key={kw} title={`Keyword: ${kw}`}>
                    <Centered>
                        <span className="font-mono text-[10px] font-bold text-pink-600">{kw}</span>
                    </Centered>
                </CardWrapper>
             ))}
        </div>

        {/* --- Database Objects --- */}
        <div style={sectionTitleStyle}>Database Objects</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <CardWrapper title="Table">
                <Centered><Icons.File size="md" className="text-blue-500"/></Centered>
             </CardWrapper>
             <CardWrapper title="View">
                <Centered><Icons.Image size="md" className="text-purple-500"/></Centered>
             </CardWrapper>
             <CardWrapper title="Stored Proc">
                <Centered><Icons.Settings size="md" className="text-orange-500"/></Centered>
             </CardWrapper>
             <CardWrapper title="Trigger">
                <Centered><Icons.Clock size="md" className="text-red-500"/></Centered>
             </CardWrapper>
             <CardWrapper title="User">
                <Centered><Icons.User size="md" className="text-green-500"/></Centered>
             </CardWrapper>
             <CardWrapper title="Role">
                <Centered><Icons.Lock size="md" className="text-gray-500"/></Centered>
             </CardWrapper>
        </div>
        
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
                         <div className="px-3 py-1.5 flex justify-between hover:bg-black/5">
                            <div className="flex items-center gap-2">
                                <span className="font-bold pl-5" style={{ color: theme.colors.text }}>email</span>
                            </div>
                            <span className="font-mono opacity-50">VARCHAR</span>
                        </div>
                         <div className="px-3 py-1.5 flex justify-between hover:bg-black/5">
                            <div className="flex items-center gap-2">
                                 <Icons.Link size="sm" className="text-blue-500 w-3"/>
                                <span className="font-bold" style={{ color: theme.colors.text }}>role_id</span>
                            </div>
                            <span className="font-mono opacity-50">INT</span>
                        </div>
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
                        <span className="opacity-50 ml-2" style={{ color: '#000' }}>query_editor.sql</span>
                    </div>
                    <div className="flex-1 p-3 relative" style={{ backgroundColor: '#1e1e1e', color: '#d4d4d4' }}>
                        {/* Static dark theme for code editor feel */}
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

            <CardWrapper title="ER Relationship">
                <Centered>
                    <div className="flex items-center w-full justify-center">
                        <div className="w-8 h-8 border rounded shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}></div>
                        <div className="w-8 h-px bg-gray-400 relative">
                             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 border-l border-gray-400"></div>
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-gray-400"></div>
                        </div>
                        <div className="w-8 h-8 border rounded shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20' }}></div>
                    </div>
                </Centered>
            </CardWrapper>
            
            <CardWrapper title="Query Result">
                <Centered>
                    <div className="w-full border rounded overflow-hidden text-[8px]" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                        <div className="p-1 border-b font-bold" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '10' }}>id | email</div>
                        <div className="p-1 border-b" style={{ borderColor: theme.colors.text + '10' }}>1 | a@b.com</div>
                        <div className="p-1">2 | c@d.com</div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>
    </div>
  );
};