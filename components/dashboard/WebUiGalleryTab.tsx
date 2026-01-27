import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens with responsive safeguards
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full overflow-hidden">{children}</div>
);

export const WebUiGalleryTab: React.FC = () => {
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
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Wireframe Primitives</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Fundamental building blocks for low and high fidelity prototyping.
        </p>

        {/* --- 1. Wireframe Primitives --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Image Box">
                <Centered>
                    <div className="w-12 h-12 border flex items-center justify-center relative overflow-hidden" style={{ borderColor: theme.colors.text + '40', backgroundColor: theme.colors.text + '05', borderRadius: theme.borderRadius.sm }}>
                        <div className="absolute inset-0 border-t border-r transform rotate-45 scale-[2]" style={{ borderColor: theme.colors.text + '10' }}></div>
                        <div className="absolute inset-0 border-t border-l transform -rotate-45 scale-[2]" style={{ borderColor: theme.colors.text + '10' }}></div>
                        <Icons.Image size="sm" className="opacity-20"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Avatar Circle">
                <Centered>
                    <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '10' }}>
                        <Icons.User size="sm" className="opacity-40"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Avatar Square">
                <Centered>
                    <div className="w-10 h-10 border flex items-center justify-center" style={{ borderRadius: theme.borderRadius.sm, borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '10' }}>
                        <Icons.User size="sm" className="opacity-40"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Heading Block">
                <Centered>
                    <div className="flex flex-col gap-1.5 w-full px-4 items-center max-w-full">
                        <div className="h-2 w-3/4" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                        <div className="h-1 w-1/2 opacity-40" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Text Paragraph">
                <Centered>
                    <div className="flex flex-col gap-1 w-full px-4 max-w-full">
                        <div className="h-1 w-full opacity-20" style={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.text }}></div>
                        <div className="h-1 w-full opacity-20" style={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.text }}></div>
                        <div className="h-1 w-2/3 opacity-20" style={{ borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.text }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Button Primary">
                <Centered>
                    <div className="px-4 py-1.5 text-[10px] font-bold text-white shadow-sm whitespace-nowrap" style={{ backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.button }}>
                        Action
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Button Secondary">
                <Centered>
                    <div className="px-4 py-1.5 text-[10px] font-bold whitespace-nowrap" style={{ backgroundColor: theme.colors.secondary, color: '#fff', borderRadius: theme.borderRadius.button }}>
                        Secondary
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Button Outline">
                <Centered>
                    <div className="px-4 py-1.5 text-[10px] font-bold border whitespace-nowrap" style={{ borderColor: theme.colors.text + '40', color: theme.colors.text, borderRadius: theme.borderRadius.button, backgroundColor: theme.colors.surface }}>
                        Cancel
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Input Field">
                <Centered>
                    <div className="w-full px-4 max-w-full">
                        <div className="h-8 border flex items-center px-2" style={{ borderColor: theme.colors.text + '40', borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.surface }}>
                            <div className="w-1/3 h-1 opacity-20" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Checkbox Group">
                <Centered>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border" style={{ borderColor: theme.colors.text + '60', borderRadius: theme.borderRadius.sm }}></div>
                            <div className="w-8 h-1 opacity-20" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border flex items-center justify-center" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}>
                                <Icons.Check size="sm" className="text-white w-2 h-2"/>
                            </div>
                            <div className="w-8 h-1 opacity-20" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Radio Group">
                <Centered>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border rounded-full" style={{ borderColor: theme.colors.text + '60' }}></div>
                            <div className="w-8 h-1 opacity-20" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border rounded-full flex items-center justify-center" style={{ borderColor: theme.colors.primary }}>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                            </div>
                            <div className="w-8 h-1 opacity-20" style={{ backgroundColor: theme.colors.text, borderRadius: theme.borderRadius.sm }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Toggle Switch">
                <Centered>
                    <div className="w-8 h-4 rounded-full relative transition-colors" style={{ backgroundColor: theme.colors.success }}>
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Rating Stars">
                <Centered>
                    <div className="flex gap-0.5" style={{ color: theme.colors.warning }}>
                        <Icons.Star size="sm" className="w-3 h-3"/>
                        <Icons.Star size="sm" className="w-3 h-3"/>
                        <Icons.Star size="sm" className="w-3 h-3"/>
                        <Icons.Star size="sm" className="w-3 h-3 opacity-30"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Search Bar">
                <Centered>
                    <div className="w-full px-2 max-w-full">
                        <div className="h-6 rounded-full border flex items-center px-2 gap-1" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '05' }}>
                            <Icons.Search size="sm" className="w-3 h-3 opacity-40"/>
                            <div className="w-12 h-1 rounded-full opacity-20" style={{ backgroundColor: theme.colors.text }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 2. Advanced Inputs --- */}
        <div style={sectionTitleStyle}>Advanced Inputs</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Date Picker">
                <Centered>
                    <div className="w-full px-3 max-w-full">
                        <div className="border flex items-center justify-between px-2 py-1" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                            <span className="text-[8px] opacity-60">MM/DD/YYYY</span>
                            <Icons.Calendar size="sm" className="opacity-40 w-3 h-3"/>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Time Input">
                <Centered>
                    <div className="flex items-center gap-1 border px-2 py-1" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                        <span className="text-[10px] font-mono">12</span>
                        <span className="opacity-40">:</span>
                        <span className="text-[10px] font-mono">30</span>
                        <span className="text-[8px] px-1 ml-1" style={{ backgroundColor: theme.colors.text + '10', borderRadius: theme.borderRadius.sm }}>AM</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Range Slider">
                <Centered>
                    <div className="w-full px-4 relative max-w-full">
                        <div className="h-1 rounded-full w-full opacity-20" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="absolute top-0 h-1 left-8 right-8" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-8 w-3 h-3 rounded-full bg-white border shadow-sm" style={{ borderColor: theme.colors.text + '20' }}></div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-8 w-3 h-3 rounded-full bg-white border shadow-sm" style={{ borderColor: theme.colors.text + '20' }}></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="OTP Input">
                <Centered>
                    <div className="flex gap-1">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-6 h-8 border flex items-center justify-center" style={{ borderColor: i===1 ? theme.colors.primary : theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                                {i===1 && <div className="w-px h-4 animate-pulse bg-black"></div>}
                                {i>1 && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.text + '40' }}></div>}
                            </div>
                        ))}
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Tag Input">
                <Centered>
                    <div className="w-full px-2 max-w-full">
                        <div className="border p-1 flex gap-1 flex-wrap" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                            <span className="px-1 rounded text-[8px] flex items-center gap-0.5" style={{ backgroundColor: theme.colors.text + '10' }}>React <Icons.Close size="sm" className="w-1.5 h-1.5"/></span>
                            <div className="w-px h-3 animate-pulse" style={{ backgroundColor: theme.colors.text }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Color Input">
                <Centered>
                    <div className="flex items-center gap-2 border p-1 pr-2" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-500 to-blue-500 border border-black/10"></div>
                        <span className="text-[8px] font-mono">#6366F1</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="File Dropzone">
                <Centered>
                    <div className="w-full mx-2 h-10 border-2 border-dashed flex items-center justify-center gap-1 max-w-full" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.text + '05', borderRadius: theme.borderRadius.md }}>
                        <Icons.Cloud size="sm" className="opacity-40 w-3 h-3"/>
                        <span className="text-[6px] uppercase font-bold opacity-40">Drop File</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Rich Text Toolbar">
                <Centered>
                    <div className="border flex overflow-hidden shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                        <div className="p-1 border-r font-bold text-[8px]" style={{ borderColor: theme.colors.text + '10' }}>B</div>
                        <div className="p-1 border-r italic text-[8px]" style={{ borderColor: theme.colors.text + '10' }}>I</div>
                        <div className="p-1 border-r underline text-[8px]" style={{ borderColor: theme.colors.text + '10' }}>U</div>
                        <div className="p-1"><Icons.Link size="sm" className="w-2 h-2"/></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Password Field">
                <Centered>
                    <div className="w-full px-3 relative max-w-full">
                        <div className="h-7 border flex items-center px-2" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                            <div className="flex gap-0.5">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>
                            </div>
                        </div>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-40"><Icons.Check size="sm" className="w-3 h-3"/></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Search Results">
                <Centered>
                    <div className="relative w-full px-2 max-w-full">
                        <div className="border shadow-md text-[8px] overflow-hidden" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.sm }}>
                            <div className="p-1 border-b" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '10' }}>Results...</div>
                            <div className="p-1" style={{ backgroundColor: theme.colors.primary + '10' }}>Item A</div>
                            <div className="p-1">Item B</div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>
             <CardWrapper title="Stepper Input">
                <Centered>
                    <div className="flex items-center border rounded overflow-hidden" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                        <div className="px-2 py-1 bg-gray-50 border-r">-</div>
                        <div className="px-3 py-1 text-xs font-mono">5</div>
                        <div className="px-2 py-1 bg-gray-50 border-l">+</div>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Toggle Button">
                <Centered>
                    <div className="flex bg-gray-100 rounded p-0.5">
                        <div className="px-2 py-0.5 bg-white shadow-sm rounded text-[8px] font-bold">ON</div>
                        <div className="px-2 py-0.5 text-[8px] opacity-50">OFF</div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 3. Navigation & Menus --- */}
        <div style={sectionTitleStyle}>Navigation & Menus</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <CardWrapper title="Navbar Simple">
                <Centered>
                    <div className="w-full h-8 border-b flex items-center justify-between px-2" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                        <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: theme.colors.text }}></div>
                        <div className="flex gap-1">
                            <div className="w-6 h-1 rounded-sm opacity-20" style={{ backgroundColor: theme.colors.text }}></div>
                            <div className="w-6 h-1 rounded-sm opacity-20" style={{ backgroundColor: theme.colors.text }}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>
            
            <CardWrapper title="Breadcrumb">
                <Centered>
                    <div className="flex items-center gap-1 text-[8px] opacity-60">
                         <span>Home</span>
                         <span>/</span>
                         <span style={{color: theme.colors.primary}}>Page</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Pagination">
                <Centered>
                    <div className="flex gap-1">
                        <div className="w-4 h-4 border rounded flex items-center justify-center text-[8px]">&lt;</div>
                        <div className="w-4 h-4 border rounded flex items-center justify-center text-[8px] bg-gray-100 font-bold">1</div>
                        <div className="w-4 h-4 border rounded flex items-center justify-center text-[8px]">2</div>
                        <div className="w-4 h-4 border rounded flex items-center justify-center text-[8px]">&gt;</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Tabs">
                <Centered>
                    <div className="w-full px-2">
                        <div className="flex border-b gap-2 text-[8px]" style={{borderColor: theme.colors.text+'20'}}>
                            <span className="font-bold border-b-2 pb-0.5" style={{borderColor: theme.colors.primary, color: theme.colors.primary}}>Tab 1</span>
                            <span className="opacity-50">Tab 2</span>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>

             <CardWrapper title="Sidebar Item">
                <Centered>
                    <div className="w-full px-2">
                         <div className="flex items-center gap-2 p-1.5 rounded bg-gray-50" style={{backgroundColor: theme.colors.primary+'10'}}>
                             <Icons.Folder size="sm" className="w-3 h-3" style={{color: theme.colors.primary}}/>
                             <div className="w-12 h-1 rounded bg-current opacity-40" style={{color: theme.colors.primary}}></div>
                         </div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Stepper Vert">
                <Centered>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full" style={{backgroundColor: theme.colors.primary}}></div>
                            <div className="w-8 h-1 opacity-20" style={{backgroundColor: theme.colors.text}}></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full border" style={{borderColor: theme.colors.text}}></div>
                            <div className="w-8 h-1 opacity-20" style={{backgroundColor: theme.colors.text}}></div>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 4. Content Containers --- */}
        <div style={sectionTitleStyle}>Content Containers</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Card Basic">
                <Centered>
                    <div className="w-full mx-4 h-16 border rounded shadow-sm bg-white" style={{borderColor: theme.colors.text+'20'}}>
                         <div className="h-2 w-full border-b bg-gray-50"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Modal Dialog">
                <Centered>
                     <div className="w-20 h-14 border rounded shadow-md bg-white relative" style={{borderColor: theme.colors.text+'20'}}>
                         <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-red-400 border border-white"></div>
                         <div className="p-1 space-y-1">
                             <div className="w-full h-1 bg-gray-200"></div>
                             <div className="w-2/3 h-1 bg-gray-200"></div>
                         </div>
                     </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Accordion">
                <Centered>
                    <div className="w-full px-2 space-y-1">
                        <div className="border rounded px-2 py-1 flex justify-between items-center text-[6px]">
                            <span>Item 1</span>
                            <span>+</span>
                        </div>
                        <div className="border rounded px-2 py-1 flex justify-between items-center text-[6px]">
                            <span>Item 2</span>
                            <span>-</span>
                        </div>
                    </div>
                </Centered>
            </CardWrapper>
            
             <CardWrapper title="Toast Alert">
                <Centered>
                     <div className="w-full mx-2 p-1.5 rounded shadow-sm border-l-2 flex gap-1 items-center bg-white" style={{borderColor: theme.colors.text+'10', borderLeftColor: theme.colors.success}}>
                         <div className="w-2 h-2 rounded-full" style={{backgroundColor: theme.colors.success}}></div>
                         <div className="w-12 h-1 bg-gray-200"></div>
                     </div>
                </Centered>
            </CardWrapper>

             <CardWrapper title="Tooltip">
                <Centered>
                     <div className="relative">
                         <span className="text-[10px] underline decoration-dotted">Hover Me</span>
                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-1.5 py-0.5 bg-black text-white text-[6px] rounded">Tip</div>
                     </div>
                </Centered>
            </CardWrapper>

             <CardWrapper title="Banner">
                <Centered>
                     <div className="w-full mx-2 h-6 bg-blue-50 border border-blue-100 rounded flex items-center justify-center text-[8px] text-blue-500">
                         Info Banner
                     </div>
                </Centered>
            </CardWrapper>
        </div>
        
        {/* --- 5. Sitemap & Wireflows --- */}
        <div style={sectionTitleStyle}>Sitemap & Wireflows</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Page Node">
                <Centered>
                    <div className="px-3 py-1.5 border rounded shadow-sm text-[8px] font-bold" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                        Home
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Link Path">
                <Centered>
                    <div className="w-full px-4 flex items-center gap-1">
                         <div className="w-4 h-4 border rounded"></div>
                         <div className="flex-1 h-px bg-gray-400 relative">
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
                         </div>
                         <div className="w-4 h-4 border rounded"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="External Link">
                <Centered>
                    <div className="px-2 py-1 border border-dashed rounded text-[8px] opacity-60 flex gap-1 items-center">
                        External <Icons.Link size="sm" className="w-2 h-2"/>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="System Email">
                <Centered>
                    <div className="w-10 h-6 border rounded relative flex items-center justify-center shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                        <div className="absolute top-0 left-0 right-0 h-4 border-b transform scale-x-75 origin-top" style={{ borderColor: theme.colors.text + '10' }}></div>
                        <span className="text-[6px] font-bold z-10">@</span>
                    </div>
                </Centered>
            </CardWrapper>
            
            <CardWrapper title="Mobile Screen">
                <Centered>
                    <div className="w-8 h-14 border-2 rounded-lg relative flex flex-col items-center justify-between py-1" style={{borderColor: theme.colors.text+'40'}}>
                         <div className="w-2 h-px bg-current opacity-20"></div>
                         <div className="w-1 h-1 rounded-full border bg-transparent"></div>
                    </div>
                </Centered>
            </CardWrapper>
            
             <CardWrapper title="Annotation">
                <Centered>
                    <div className="w-6 h-6 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-700 flex items-center justify-center font-serif text-[10px]">
                        1
                    </div>
                </Centered>
            </CardWrapper>
        </div>
    </div>
  );
};