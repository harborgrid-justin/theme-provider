import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Icons } from './DashboardIcons';
import { SectionTitle } from './SectionTitle';

const StickerItem: React.FC<{ label: string; children: React.ReactNode; className?: string }> = ({ label, children, className = '' }) => {
    const { theme } = useTheme();
    return (
        <div className={`flex flex-col gap-2 p-2 rounded-lg hover:bg-black/5 transition-colors duration-200 ${className}`}>
            <div className="h-20 md:h-24 flex items-center justify-center p-2 rounded border border-dashed bg-white/50 relative overflow-hidden" style={{ borderColor: theme.colors.text + '20' }}>
                {children}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-center opacity-50" style={{ color: theme.colors.text }}>{label}</span>
        </div>
    );
};

export const ElementsTab: React.FC = () => {
  const { theme } = useTheme();
  
  // Interactive States
  const [toggle, setToggle] = useState(true);
  const [checkbox, setCheckbox] = useState(true);
  const [radio, setRadio] = useState(1);
  const [slider, setSlider] = useState(50);
  const [accordion, setAccordion] = useState(true);

  // Theme Shortcuts
  const primaryBg = { backgroundColor: theme.colors.primary, color: '#fff' };
  const secondaryBg = { backgroundColor: theme.colors.secondary, color: '#fff' };
  const borderColor = { borderColor: theme.colors.text + '20' };
  const radiusBtn = { borderRadius: theme.borderRadius.button };
  const radiusCard = { borderRadius: theme.borderRadius.card };
  const radiusSm = { borderRadius: theme.borderRadius.sm };

  return (
    <div className="pb-20 animate-in fade-in duration-500">
        <SectionTitle style={{ marginTop: '1rem' }}>UI Sticker Sheet (52 Elements)</SectionTitle>
        <p className="mb-8 opacity-60 max-w-2xl" style={{ color: theme.colors.text }}>
            A comprehensive inventory of base components. Every element below automatically inherits your active theme configuration, including typography, colors, border radius, and spacing.
        </p>

        {/* --- SECTION 1: ACTIONS (9) --- */}
        <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70" style={{ color: theme.colors.text }}>01. Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <StickerItem label="Primary Btn">
                    <button className="px-4 py-2 text-xs font-bold transition-transform active:scale-95 shadow-sm" style={{ ...primaryBg, ...radiusBtn }}>Action</button>
                </StickerItem>
                <StickerItem label="Secondary Btn">
                    <button className="px-4 py-2 text-xs font-bold transition-transform active:scale-95 shadow-sm" style={{ ...secondaryBg, ...radiusBtn }}>Cancel</button>
                </StickerItem>
                <StickerItem label="Outline Btn">
                    <button className="px-4 py-2 text-xs font-bold border hover:bg-black/5 transition-colors" style={{ borderColor: theme.colors.text + '40', color: theme.colors.text, ...radiusBtn }}>Edit</button>
                </StickerItem>
                <StickerItem label="Ghost Btn">
                    <button className="px-4 py-2 text-xs font-bold hover:bg-black/5 transition-colors" style={{ color: theme.colors.primary, ...radiusBtn }}>View</button>
                </StickerItem>
                <StickerItem label="Icon Only">
                    <button className="p-2 hover:bg-black/5 transition-colors" style={{ color: theme.colors.text, borderRadius: '9999px' }}><Icons.Settings size="md"/></button>
                </StickerItem>
                <StickerItem label="FAB">
                    <button className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-transform hover:-translate-y-1" style={{ backgroundColor: theme.colors.accent, color: '#fff' }}><Icons.Play/></button>
                </StickerItem>
                <StickerItem label="Loading Btn">
                    <button className="px-4 py-2 text-xs font-bold flex items-center gap-2 opacity-80 cursor-wait" style={{ ...primaryBg, ...radiusBtn }}>
                        <div className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin"></div> Saving
                    </button>
                </StickerItem>
                <StickerItem label="Split Button">
                    <div className="flex items-center shadow-sm" style={radiusBtn}>
                        <button className="px-3 py-1.5 text-[10px] font-bold border-r border-black/10" style={{ ...primaryBg, borderRadius: `${theme.borderRadius.button} 0 0 ${theme.borderRadius.button}` }}>Save</button>
                        <button className="px-1.5 py-1.5" style={{ ...primaryBg, borderRadius: `0 ${theme.borderRadius.button} ${theme.borderRadius.button} 0` }}><Icons.ChevronDown size="sm"/></button>
                    </div>
                </StickerItem>
                <StickerItem label="Chip Action">
                    <button className="px-2 py-1 text-[10px] font-bold border flex items-center gap-1 hover:bg-black/5" style={{ ...borderColor, ...radiusSm, color: theme.colors.text }}>
                        <Icons.Filter size="sm"/> Filter
                    </button>
                </StickerItem>
            </div>
        </div>

        {/* --- SECTION 2: INPUTS (11) --- */}
        <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70" style={{ color: theme.colors.text }}>02. Inputs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <StickerItem label="Text Input">
                    <input type="text" placeholder="Type..." className="w-full px-2 py-1 text-xs border bg-transparent focus:outline-none focus:border-indigo-500" style={{ ...radiusSm, ...borderColor, color: theme.colors.text }} />
                </StickerItem>
                <StickerItem label="Search">
                    <div className="relative w-full">
                        <Icons.Search className="absolute left-1.5 top-1.5 opacity-40 w-3 h-3" />
                        <input className="w-full pl-6 py-1 text-[10px] border rounded bg-transparent" placeholder="Find..." style={{ ...borderColor, color: theme.colors.text }} />
                    </div>
                </StickerItem>
                <StickerItem label="Password">
                    <input type="password" value="secret123" readOnly className="w-full px-2 py-1 text-xs border bg-transparent opacity-60" style={{ ...radiusSm, ...borderColor, color: theme.colors.text }} />
                </StickerItem>
                <StickerItem label="Select">
                    <div className="relative w-full">
                        <select className="w-full px-2 py-1 text-[10px] border bg-transparent appearance-none" style={{ ...radiusSm, ...borderColor, color: theme.colors.text }}>
                            <option>Option A</option>
                        </select>
                        <Icons.ChevronDown className="absolute right-1 top-1.5 opacity-40 w-3 h-3 pointer-events-none" />
                    </div>
                </StickerItem>
                <StickerItem label="Checkbox">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCheckbox(!checkbox)}>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors`} style={{ borderColor: checkbox ? theme.colors.primary : theme.colors.text+'40', backgroundColor: checkbox ? theme.colors.primary : 'transparent', borderRadius: theme.borderRadius.sm }}>
                            {checkbox && <Icons.Check className="text-white w-3 h-3" size="sm"/>}
                        </div>
                    </div>
                </StickerItem>
                <StickerItem label="Radio">
                    <div className="flex gap-2">
                        {[1, 2].map(i => (
                            <div key={i} onClick={() => setRadio(i)} className="w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer" style={{ borderColor: radio === i ? theme.colors.primary : theme.colors.text+'40' }}>
                                {radio === i && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>}
                            </div>
                        ))}
                    </div>
                </StickerItem>
                <StickerItem label="Switch">
                    <div className="w-8 h-4 rounded-full relative cursor-pointer transition-colors" style={{ backgroundColor: toggle ? theme.colors.success : theme.colors.text+'30' }} onClick={() => setToggle(!toggle)}>
                        <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow-sm transition-all ${toggle ? 'left-4.5' : 'left-0.5'}`}></div>
                    </div>
                </StickerItem>
                <StickerItem label="Range">
                    <div className="w-full px-2">
                        <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" min="0" max="100" value={slider} onChange={e => setSlider(parseInt(e.target.value))} />
                    </div>
                </StickerItem>
                <StickerItem label="Color">
                    <div className="w-6 h-6 rounded-full border-2 p-0.5" style={{ borderColor: theme.colors.primary }}>
                        <div className="w-full h-full rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </StickerItem>
                <StickerItem label="Textarea">
                    <textarea className="w-full h-12 p-1 text-[8px] border bg-transparent resize-none" placeholder="Message..." style={{ ...radiusSm, ...borderColor, color: theme.colors.text }}></textarea>
                </StickerItem>
                <StickerItem label="Dropzone">
                    <div className="w-full h-full border-2 border-dashed flex items-center justify-center opacity-40" style={{ ...radiusSm, ...borderColor }}>
                        <Icons.Cloud size="sm"/>
                    </div>
                </StickerItem>
            </div>
        </div>

        {/* --- SECTION 3: NAVIGATION (9) --- */}
        <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70" style={{ color: theme.colors.text }}>03. Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <StickerItem label="Tabs (Segment)">
                    <div className="flex bg-black/5 p-0.5" style={radiusSm}>
                        <div className="px-2 py-0.5 text-[8px] shadow-sm bg-white flex-1 text-center" style={{ ...radiusSm, color: theme.colors.text }}>One</div>
                        <div className="px-2 py-0.5 text-[8px] opacity-50 flex-1 text-center" style={{ color: theme.colors.text }}>Two</div>
                    </div>
                </StickerItem>
                <StickerItem label="Tabs (Line)">
                    <div className="flex gap-3 border-b w-full" style={borderColor}>
                        <div className="text-[10px] font-bold border-b-2 pb-0.5" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>Home</div>
                        <div className="text-[10px] opacity-50 pb-0.5" style={{ color: theme.colors.text }}>Profile</div>
                    </div>
                </StickerItem>
                <StickerItem label="Breadcrumb">
                    <div className="flex items-center gap-1 text-[10px]" style={{ color: theme.colors.text }}>
                        <span className="opacity-50">App</span>
                        <Icons.ChevronRight size="sm" className="opacity-30 w-3 h-3"/>
                        <span className="font-bold">Detail</span>
                    </div>
                </StickerItem>
                <StickerItem label="Pagination">
                    <div className="flex gap-1">
                        <div className="w-5 h-5 flex items-center justify-center text-[10px] rounded border text-white" style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}>1</div>
                        <div className="w-5 h-5 flex items-center justify-center text-[10px] rounded border" style={{ ...borderColor, color: theme.colors.text }}>2</div>
                    </div>
                </StickerItem>
                <StickerItem label="Vertical Menu">
                    <div className="w-full flex flex-col gap-1">
                        <div className="flex items-center gap-2 p-1 rounded bg-black/5 text-[10px]" style={{ color: theme.colors.primary }}>
                            <Icons.Folder size="sm" className="w-3 h-3"/> Active
                        </div>
                        <div className="flex items-center gap-2 p-1 rounded text-[10px] opacity-60" style={{ color: theme.colors.text }}>
                            <Icons.Clock size="sm" className="w-3 h-3"/> Recent
                        </div>
                    </div>
                </StickerItem>
                <StickerItem label="Stepper">
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] text-white" style={{ backgroundColor: theme.colors.success }}><Icons.Check className="w-2 h-2"/></div>
                        <div className="w-4 h-0.5 bg-gray-200"></div>
                        <div className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] border font-bold" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>2</div>
                    </div>
                </StickerItem>
                <StickerItem label="Tree Item">
                    <div className="flex items-center gap-1 text-[10px] w-full pl-2" style={{ color: theme.colors.text }}>
                        <Icons.ChevronDown className="w-3 h-3"/>
                        <Icons.Folder className="w-3 h-3 text-yellow-500"/>
                        <span>Root</span>
                    </div>
                </StickerItem>
                <StickerItem label="Bottom Nav">
                    <div className="flex justify-around w-full opacity-60" style={{ color: theme.colors.text }}>
                        <Icons.Home className="w-4 h-4"/>
                        <Icons.Search className="w-4 h-4 text-blue-500"/>
                        <Icons.User className="w-4 h-4"/>
                    </div>
                </StickerItem>
                <StickerItem label="Drawer Item">
                    <div className="w-full p-1.5 border-l-2 bg-gray-50 flex items-center gap-2" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                        <Icons.Star size="sm" className="w-3 h-3"/> <span className="text-[10px] font-bold">Saved</span>
                    </div>
                </StickerItem>
            </div>
        </div>

        {/* --- SECTION 4: FEEDBACK (9) --- */}
        <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70" style={{ color: theme.colors.text }}>04. Feedback</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <StickerItem label="Alert Success">
                    <div className="p-1.5 rounded flex gap-2 w-full items-center" style={{ backgroundColor: theme.colors.success+'20' }}>
                        <Icons.Check className="w-3 h-3" style={{ color: theme.colors.success }}/>
                        <span className="text-[8px] font-bold" style={{ color: theme.colors.success }}>Saved</span>
                    </div>
                </StickerItem>
                <StickerItem label="Alert Error">
                    <div className="p-1.5 rounded flex gap-2 w-full items-center" style={{ backgroundColor: theme.colors.error+'20' }}>
                        <Icons.Close className="w-3 h-3" style={{ color: theme.colors.error }}/>
                        <span className="text-[8px] font-bold" style={{ color: theme.colors.error }}>Failed</span>
                    </div>
                </StickerItem>
                <StickerItem label="Warning Banner">
                    <div className="w-full p-1 bg-yellow-50 border-l-2 border-yellow-400 text-[8px] text-yellow-800">
                        Check your connection.
                    </div>
                </StickerItem>
                <StickerItem label="Badge Pill">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ backgroundColor: theme.colors.primary, color: '#fff' }}>New</span>
                </StickerItem>
                <StickerItem label="Badge Outline">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>Beta</span>
                </StickerItem>
                <StickerItem label="Status Dot">
                    <div className="flex items-center gap-2 text-[10px] font-medium" style={{ color: theme.colors.text }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.success }}></div>
                        Online
                    </div>
                </StickerItem>
                <StickerItem label="Skeleton">
                    <div className="w-full space-y-2">
                        <div className="h-2 w-full rounded animate-pulse" style={{ backgroundColor: theme.colors.text+'10' }}></div>
                        <div className="h-2 w-2/3 rounded animate-pulse" style={{ backgroundColor: theme.colors.text+'10' }}></div>
                    </div>
                </StickerItem>
                <StickerItem label="Progress Bar">
                    <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full w-2/3" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                </StickerItem>
                <StickerItem label="Spinner">
                    <div className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: theme.colors.primary, borderTopColor: 'transparent' }}></div>
                </StickerItem>
            </div>
        </div>

        {/* --- SECTION 5: DATA (8) --- */}
        <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70" style={{ color: theme.colors.text }}>05. Data Display</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <StickerItem label="Avatar">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center font-bold text-[10px]" style={{ color: theme.colors.textSecondary }}>JM</div>
                </StickerItem>
                <StickerItem label="Avatar Group">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" style={{ backgroundColor: i % 2 ? theme.colors.primary : theme.colors.secondary }}></div>
                        ))}
                    </div>
                </StickerItem>
                <StickerItem label="User Item">
                    <div className="flex items-center gap-2 w-full">
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <div className="flex-1">
                            <div className="h-1.5 w-10 bg-gray-800 rounded mb-1"></div>
                            <div className="h-1 w-6 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </StickerItem>
                <StickerItem label="Tag / Chip">
                    <div className="flex items-center gap-1 px-2 py-1 rounded text-[10px] border" style={{ backgroundColor: theme.colors.background, borderColor: theme.colors.text+'20', color: theme.colors.text }}>
                        <span>React</span>
                        <Icons.Close className="w-3 h-3 opacity-50"/>
                    </div>
                </StickerItem>
                <StickerItem label="Key Value">
                    <div className="text-center">
                        <div className="text-[8px] uppercase tracking-wider opacity-50" style={{ color: theme.colors.text }}>Revenue</div>
                        <div className="text-sm font-bold" style={{ color: theme.colors.text }}>$42.5k</div>
                    </div>
                </StickerItem>
                <StickerItem label="Code Snippet">
                    <div className="p-1.5 rounded bg-gray-900 text-gray-400 font-mono text-[8px] w-full">
                        <span className="text-purple-400">npm</span> install
                    </div>
                </StickerItem>
                <StickerItem label="File Row">
                    <div className="flex items-center gap-2 p-1.5 border rounded w-full" style={borderColor}>
                        <Icons.File className="w-4 h-4 text-red-500"/>
                        <div className="h-1.5 w-10 bg-gray-200 rounded"></div>
                    </div>
                </StickerItem>
                <StickerItem label="Image Card">
                    <div className="w-full aspect-video rounded bg-gray-100 overflow-hidden relative" style={radiusSm}>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300"><Icons.Image/></div>
                    </div>
                </StickerItem>
            </div>
        </div>

        {/* --- SECTION 6: CONTAINERS & SYSTEM (6) --- */}
        <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70" style={{ color: theme.colors.text }}>06. Containers & System</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <StickerItem label="Basic Card">
                    <div className="w-full h-full p-2 bg-white shadow-sm border flex flex-col gap-2" style={{ ...radiusCard, ...borderColor }}>
                        <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                    </div>
                </StickerItem>
                <StickerItem label="Modal">
                    <div className="w-3/4 bg-white shadow-xl border p-2 flex flex-col gap-2" style={{ ...radiusCard, ...borderColor }}>
                        <div className="flex justify-between items-center"><div className="h-2 w-8 bg-gray-200 rounded"></div><div className="w-2 h-2 bg-gray-200 rounded-full"></div></div>
                        <div className="h-8 bg-gray-50 rounded"></div>
                    </div>
                </StickerItem>
                <StickerItem label="Divider">
                    <div className="w-full flex items-center gap-2">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-[8px] opacity-50" style={{ color: theme.colors.text }}>OR</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>
                </StickerItem>
                <StickerItem label="Tooltip">
                    <div className="relative flex flex-col items-center">
                        <span className="text-[10px] underline decoration-dotted mb-1" style={{ color: theme.colors.text }}>Hover</span>
                        <div className="px-1.5 py-0.5 bg-black text-white text-[8px] rounded whitespace-nowrap">Help</div>
                    </div>
                </StickerItem>
                <StickerItem label="Accordion">
                    <div className="w-full border rounded cursor-pointer" style={{ ...radiusSm, ...borderColor }} onClick={() => setAccordion(!accordion)}>
                        <div className="p-1.5 flex justify-between items-center bg-gray-50">
                            <div className="h-1.5 w-10 bg-gray-300 rounded"></div>
                            <Icons.ChevronDown className={`w-2 h-2 opacity-50 transition-transform ${accordion ? 'rotate-180' : ''}`}/>
                        </div>
                        {accordion && <div className="p-1.5 h-6 bg-white text-[8px] text-gray-400">Content...</div>}
                    </div>
                </StickerItem>
                <StickerItem label="Empty State">
                    <div className="flex flex-col items-center gap-1 opacity-40">
                        <Icons.Folder className="w-6 h-6"/>
                        <span className="text-[8px]">No Data</span>
                    </div>
                </StickerItem>
            </div>
        </div>
    </div>
  );
};
