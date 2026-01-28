import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const DocumentGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const svgProps = {
    vectorEffect: "non-scaling-stroke",
    fill: theme.colors.surface,
    stroke: theme.colors.text,
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const primaryFill = { fill: theme.colors.primary, stroke: 'none' };
  const textFill = { fill: theme.colors.text, stroke: 'none' };
  const errorFill = { fill: theme.colors.error, stroke: 'none' };
  const warningFill = { fill: theme.colors.warning, stroke: 'none' };
  const successFill = { fill: theme.colors.success, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Document Management (78 Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Visual language for file systems, document editing, content structure, and collaboration workflows.
        </p>

        {/* --- 1. File Types & Formats --- */}
        <SectionTitle>1. File Types & Formats</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="PDF" centered>
                <div className="flex flex-col items-center">
                    <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
                        <path d="M5,0 H25 L40,15 V50 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                        <path d="M25,0 V15 H40" fill="none" stroke={theme.colors.text} strokeWidth="1.5"/>
                        <path d="M10,25 H30 M10,35 H25" stroke={theme.colors.error} strokeWidth="2"/>
                    </svg>
                    <span className="text-[8px] font-bold text-red-500">PDF</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Word (DOC)" centered>
                <div className="flex flex-col items-center">
                    <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
                        <path d="M5,0 H25 L40,15 V50 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                        <text x="22" y="35" fontSize="16" fontWeight="bold" fill={theme.colors.primary} textAnchor="middle">W</text>
                    </svg>
                    <span className="text-[8px] font-bold text-blue-600">DOCX</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Excel (XLS)" centered>
                <div className="flex flex-col items-center">
                    <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
                        <path d="M5,0 H25 L40,15 V50 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                        <rect x="12" y="20" width="16" height="16" fill={theme.colors.success} opacity="0.2"/>
                        <path d="M12,28 H28 M20,20 V36" stroke={theme.colors.success} strokeWidth="1.5"/>
                    </svg>
                    <span className="text-[8px] font-bold text-green-600">XLS</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Powerpoint" centered>
                <div className="flex flex-col items-center">
                    <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
                        <path d="M5,0 H25 L40,15 V50 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                        <circle cx="22" cy="30" r="6" fill={theme.colors.warning} opacity="0.5"/>
                        <text x="22" y="33" fontSize="10" fontWeight="bold" fill={theme.colors.warning} textAnchor="middle">P</text>
                    </svg>
                    <span className="text-[8px] font-bold text-orange-500">PPT</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Image (IMG)" centered>
                <div className="flex flex-col items-center">
                    <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
                        <path d="M5,0 H25 L40,15 V50 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                        <rect x="10" y="20" width="20" height="15" stroke={theme.colors.text} fill="none"/>
                        <circle cx="15" cy="25" r="2" fill={theme.colors.text}/>
                        <path d="M10,32 L15,27 L20,32 L25,25 L30,35" fill="none" stroke={theme.colors.text} strokeWidth="1"/>
                    </svg>
                    <span className="text-[8px] font-bold opacity-60">PNG</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Code (SRC)" centered>
                <div className="flex flex-col items-center">
                    <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
                        <path d="M5,0 H25 L40,15 V50 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                        <path d="M15,25 L10,30 L15,35 M25,25 L30,30 L25,35" stroke={theme.colors.accent} strokeWidth="1.5" fill="none"/>
                    </svg>
                    <span className="text-[8px] font-bold text-purple-500">JS</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Archive (ZIP)" centered>
                <div className="flex flex-col items-center">
                    <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
                        <path d="M5,0 H25 L40,15 V50 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                        <line x1="20" y1="0" x2="20" y2="40" stroke={theme.colors.text} strokeDasharray="2 1"/>
                        <rect x="16" y="20" width="8" height="6" fill={theme.colors.text} rx="1"/>
                    </svg>
                    <span className="text-[8px] font-bold opacity-60">ZIP</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Text (TXT)" centered>
                <div className="flex flex-col items-center">
                    <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
                        <path d="M5,0 H25 L40,15 V50 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                        <line x1="10" y1="20" x2="30" y2="20" stroke={theme.colors.text} opacity="0.3"/>
                        <line x1="10" y1="25" x2="30" y2="25" stroke={theme.colors.text} opacity="0.3"/>
                        <line x1="10" y1="30" x2="20" y2="30" stroke={theme.colors.text} opacity="0.3"/>
                    </svg>
                    <span className="text-[8px] font-bold opacity-60">TXT</span>
                </div>
            </GalleryItem>
            <GalleryItem title="CSV" centered>
                <div className="border border-green-200 bg-green-50 px-2 py-1 rounded text-[10px] font-mono font-bold text-green-700">.CSV</div>
            </GalleryItem>
            <GalleryItem title="XML" centered>
                <div className="border border-orange-200 bg-orange-50 px-2 py-1 rounded text-[10px] font-mono font-bold text-orange-700">&lt;XML&gt;</div>
            </GalleryItem>
            <GalleryItem title="JSON" centered>
                <div className="border border-gray-200 bg-gray-50 px-2 py-1 rounded text-[10px] font-mono font-bold text-gray-600">{`{ }`}</div>
            </GalleryItem>
            <GalleryItem title="Binary" centered>
                <div className="font-mono text-[8px] tracking-widest opacity-60">010101</div>
            </GalleryItem>
        </div>

        {/* --- 2. Document Actions --- */}
        <SectionTitle>2. Document Actions</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Create New" centered>
                <div className="w-10 h-12 border-2 border-dashed rounded flex items-center justify-center hover:border-solid hover:bg-gray-50 cursor-pointer" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                    <span className="text-xl font-bold">+</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Open" centered><Icons.Folder size="lg" className="text-yellow-500"/></GalleryItem>
            <GalleryItem title="Save" centered><Icons.Check size="lg" className="text-blue-500"/></GalleryItem>
            <GalleryItem title="Save As" centered>
                <div className="flex items-center gap-1 opacity-60">
                    <Icons.Copy size="sm"/> <span className="text-[8px]">Copy</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Print" centered>
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <path d="M10,15 H30 V35 H10 Z" fill="white" stroke={theme.colors.text} strokeWidth="1.5"/>
                    <path d="M5,15 H35 V28 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5"/>
                    <path d="M12,5 H28 V15 H12 Z" fill="none" stroke={theme.colors.text} strokeWidth="1.5"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Export" centered><Icons.Download size="lg" style={{ color: theme.colors.primary }}/></GalleryItem>
            <GalleryItem title="Import" centered><Icons.Cloud size="lg" className="transform rotate-180" style={{ color: theme.colors.secondary }}/></GalleryItem>
            <GalleryItem title="Share" centered><Icons.Share size="lg" style={{ color: theme.colors.text }}/></GalleryItem>
            <GalleryItem title="Duplicate" centered><Icons.Copy size="lg" style={{ color: theme.colors.textSecondary }}/></GalleryItem>
            <GalleryItem title="Delete" centered><Icons.Trash size="lg" style={{ color: theme.colors.error }}/></GalleryItem>
            <GalleryItem title="Rename" centered>
                <div className="border px-2 py-1 rounded text-[10px] bg-white shadow-sm flex items-center gap-1">
                    <span className="text-blue-500">|</span>Name
                </div>
            </GalleryItem>
            <GalleryItem title="Move" centered><Icons.Drag size="lg" style={{ color: theme.colors.text }}/></GalleryItem>
        </div>

        {/* --- 3. Editing & Formatting --- */}
        <SectionTitle>3. Editing & Formatting</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Bold/Italic" centered>
                <div className="flex gap-2">
                    <span className="font-bold text-lg">B</span>
                    <span className="italic text-lg font-serif">I</span>
                    <span className="underline text-lg">U</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Alignment" centered>
                <div className="flex flex-col gap-1 w-8">
                    <div className="h-0.5 bg-current w-full"></div>
                    <div className="h-0.5 bg-current w-2/3 self-start"></div>
                    <div className="h-0.5 bg-current w-full"></div>
                    <div className="h-0.5 bg-current w-1/2 self-start"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Bullet List" centered>
                <div className="flex flex-col gap-1 w-8">
                    <div className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-current"></div><div className="h-0.5 bg-current w-full"></div></div>
                    <div className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-current"></div><div className="h-0.5 bg-current w-full"></div></div>
                    <div className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-current"></div><div className="h-0.5 bg-current w-full"></div></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Numbered List" centered>
                <div className="flex flex-col gap-1 w-8 text-[6px]">
                    <div className="flex items-center gap-1"><span>1.</span><div className="h-0.5 bg-current w-full"></div></div>
                    <div className="flex items-center gap-1"><span>2.</span><div className="h-0.5 bg-current w-full"></div></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Indent" centered>
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current opacity-60">
                    <path d="M3,21V3H5V21H3M7,12L12,7V10H21V14H12V17L7,12Z" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Outdent" centered>
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current opacity-60">
                    <path d="M21,21V3H19V21H21M17,12L12,17V14H3V10H12V7L17,12Z" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Font Size" centered>
                <div className="border rounded px-2 py-1 flex items-center justify-between w-16 text-xs font-bold">
                    12 <span className="opacity-50 text-[8px]">▼</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Font Family" centered>
                <div className="border rounded px-2 py-1 flex items-center justify-between w-24 text-[10px]">
                    Inter <span className="opacity-50 text-[8px]">▼</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Color Picker" centered>
                <div className="w-6 h-6 rounded border bg-gradient-to-br from-red-500 via-green-500 to-blue-500"></div>
            </GalleryItem>
            <GalleryItem title="Highlight" centered>
                <span className="bg-yellow-200 text-yellow-900 px-1 font-serif">Text</span>
            </GalleryItem>
            <GalleryItem title="Link" centered>
                <span className="text-blue-500 underline cursor-pointer">hyperlink</span>
            </GalleryItem>
            <GalleryItem title="Quote" centered>
                <div className="border-l-4 pl-2 italic text-xs text-gray-500 border-gray-300">
                    Blockquote
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Document Structure --- */}
        <SectionTitle>4. Document Structure</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Page" centered>
                <svg viewBox="0 0 40 50" className="w-8 h-10 border shadow-sm bg-white">
                    <rect x="0" y="0" width="40" height="50" fill="none"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Header" centered>
                <svg viewBox="0 0 40 50" className="w-8 h-10 border bg-white">
                    <rect x="0" y="0" width="40" height="10" fill={theme.colors.primary} fillOpacity="0.1"/>
                    <line x1="0" y1="10" x2="40" y2="10" stroke={theme.colors.primary} strokeDasharray="2 1"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Footer" centered>
                <svg viewBox="0 0 40 50" className="w-8 h-10 border bg-white">
                    <rect x="0" y="40" width="40" height="10" fill={theme.colors.text} fillOpacity="0.1"/>
                    <line x1="0" y1="40" x2="40" y2="40" stroke={theme.colors.text} strokeDasharray="2 1"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Margin" centered>
                <svg viewBox="0 0 40 50" className="w-8 h-10 bg-gray-200">
                    <rect x="5" y="5" width="30" height="40" fill="white"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Columns" centered>
                <svg viewBox="0 0 40 50" className="w-8 h-10 border bg-white">
                    <rect x="4" y="4" width="14" height="42" fill="gray" opacity="0.2"/>
                    <rect x="22" y="4" width="14" height="42" fill="gray" opacity="0.2"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Section Break" centered>
                <div className="w-full text-center text-[8px] opacity-50 relative">
                    <div className="w-full border-t border-dashed absolute top-1/2"></div>
                    <span className="bg-white px-1 relative z-10">Section</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Page Break" centered>
                <div className="w-full flex flex-col items-center gap-1">
                    <div className="w-full h-4 border-x border-t bg-white"></div>
                    <div className="w-full border-b border-dashed border-blue-300"></div>
                    <div className="w-full h-4 border-x border-b bg-white"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="TOC" centered>
                <div className="w-full px-2 text-[6px]">
                    <div className="flex justify-between border-b border-dotted"><span>Intro</span><span>1</span></div>
                    <div className="flex justify-between border-b border-dotted"><span>Body</span><span>4</span></div>
                    <div className="flex justify-between border-b border-dotted"><span>End</span><span>9</span></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Footnote" centered>
                <div className="flex flex-col h-full justify-end w-full px-2 pb-1">
                    <div className="w-1/3 h-px bg-black mb-1"></div>
                    <div className="text-[6px] opacity-60">1. Source citation</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Endnote" centered>
                <div className="text-[6px] opacity-60 w-full px-2 text-center border-t pt-1">
                    i. Reference A<br/>ii. Reference B
                </div>
            </GalleryItem>
            <GalleryItem title="Cover Page" centered>
                <svg viewBox="0 0 40 50" className="w-8 h-10 border bg-blue-50">
                    <rect x="10" y="20" width="20" height="2" fill={theme.colors.primary}/>
                    <rect x="15" y="25" width="10" height="1" fill={theme.colors.text} opacity="0.5"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Back Page" centered>
                <svg viewBox="0 0 40 50" className="w-8 h-10 border bg-gray-50 flex items-center justify-center">
                    <circle cx="20" cy="25" r="5" fill="none" stroke={theme.colors.text} strokeOpacity="0.2"/>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Review & Collaboration --- */}
        <SectionTitle>5. Review & Collaboration</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Comment" centered>
                <div className="bg-yellow-100 border border-yellow-200 text-yellow-800 p-2 rounded text-[8px] relative shadow-sm">
                    Can we clarify?
                    <div className="absolute -bottom-1 left-2 w-2 h-2 bg-yellow-100 border-r border-b border-yellow-200 transform rotate-45"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Suggestion" centered>
                <div className="text-[10px]">
                    <span className="line-through text-red-400">old</span>
                    <span className="text-green-600 font-bold ml-1">new</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Track Changes" centered>
                <div className="border-l-2 border-blue-500 pl-2 text-[8px] text-blue-700 bg-blue-50 p-1 w-full">
                    Added paragraph...
                </div>
            </GalleryItem>
            <GalleryItem title="Approve" centered>
                <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center text-green-600">
                    <Icons.Check size="md"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Reject" centered>
                <div className="w-10 h-10 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center text-red-600">
                    <Icons.Close size="md"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Version History" centered>
                <div className="flex flex-col text-[8px] w-full px-2 opacity-60">
                    <div className="flex justify-between"><span>v2.0</span> <span>Today</span></div>
                    <div className="flex justify-between"><span>v1.0</span> <span>Oct 1</span></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Compare" centered>
                <div className="flex w-full h-10 border rounded overflow-hidden">
                    <div className="w-1/2 bg-red-50 border-r flex items-center justify-center text-[8px] text-red-500">Diff</div>
                    <div className="w-1/2 bg-green-50 flex items-center justify-center text-[8px] text-green-500">Diff</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Lock/Protect" centered>
                <div className="flex items-center gap-1 border border-yellow-400 bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-[8px]">
                    <Icons.Lock size="sm" className="w-2"/> Read Only
                </div>
            </GalleryItem>
            <GalleryItem title="Sign" centered>
                <div className="border-b-2 border-black w-20 text-center font-serif italic text-lg leading-4 pb-1">
                    JohnDoe
                </div>
            </GalleryItem>
            <GalleryItem title="Annotate" centered>
                <div className="relative">
                    <Icons.Edit size="md" className="text-purple-500"/>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Mention" centered>
                <span className="text-blue-600 bg-blue-100 px-1 rounded text-[10px] font-bold">@alex</span>
            </GalleryItem>
            <GalleryItem title="Resolve" centered>
                <button className="bg-gray-100 hover:bg-green-100 text-gray-500 hover:text-green-600 px-2 py-1 rounded text-[8px] flex items-center gap-1 transition-colors">
                    <Icons.Check size="sm" className="w-2"/> Resolve
                </button>
            </GalleryItem>
        </div>

        {/* --- 6. Organization & Views --- */}
        <SectionTitle>6. Organization & Views</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Folder" centered>
                <Icons.Folder size="lg" className="text-yellow-400"/>
            </GalleryItem>
            <GalleryItem title="Stack" centered>
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className="absolute top-0 w-8 h-8 bg-white border border-gray-300 rounded shadow-sm transform -rotate-6"></div>
                    <div className="absolute top-0 w-8 h-8 bg-white border border-gray-300 rounded shadow-sm transform rotate-6"></div>
                    <div className="absolute top-0 w-8 h-8 bg-white border border-gray-300 rounded shadow-sm"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Grid View" centered>
                <div className="grid grid-cols-2 gap-1 w-8 h-8">
                    <div className="bg-gray-300 rounded-sm"></div>
                    <div className="bg-gray-300 rounded-sm"></div>
                    <div className="bg-gray-300 rounded-sm"></div>
                    <div className="bg-gray-300 rounded-sm"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="List View" centered>
                <div className="flex flex-col gap-1 w-8 h-8 justify-center">
                    <div className="h-1 bg-gray-300 rounded w-full"></div>
                    <div className="h-1 bg-gray-300 rounded w-full"></div>
                    <div className="h-1 bg-gray-300 rounded w-full"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Details View" centered>
                <div className="flex gap-1 w-10 h-8 items-center border p-1 bg-white">
                    <div className="w-2 h-2 bg-gray-300"></div>
                    <div className="flex-1 space-y-0.5">
                        <div className="h-0.5 bg-black w-full"></div>
                        <div className="h-0.5 bg-gray-300 w-2/3"></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Sort" centered>
                <div className="flex items-center gap-1 text-[10px] border px-2 py-1 rounded">
                    Name <Icons.Sort size="sm" className="w-3"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Filter" centered>
                <div className="flex items-center gap-1 text-[10px] border px-2 py-1 rounded bg-blue-50 text-blue-600 border-blue-200">
                    <Icons.Filter size="sm" className="w-3"/> Type
                </div>
            </GalleryItem>
            <GalleryItem title="Search Doc" centered>
                <div className="w-full px-2 relative">
                    <input className="w-full border rounded text-[8px] pl-4 py-1" placeholder="Find..." />
                    <Icons.Search size="sm" className="w-2 absolute left-3 top-1.5 opacity-40"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Bookmark" centered>
                <svg viewBox="0 0 20 30" className="w-4 h-6">
                    <path d="M0,0 H20 V30 L10,20 L0,30 Z" fill={theme.colors.primary}/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Pin" centered>
                <div className="transform rotate-45 text-red-500">
                    <span className="material-icons text-lg">push_pin</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Recent" centered>
                <div className="flex items-center gap-1 text-[8px] opacity-60">
                    <Icons.Clock size="sm" className="w-3"/> Just now
                </div>
            </GalleryItem>
            <GalleryItem title="Favorites" centered>
                <Icons.Star size="lg" className="text-yellow-400"/>
            </GalleryItem>
        </div>

        {/* --- 7. Document Content --- */}
        <SectionTitle>7. Document Content</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Embedded Image" centered>
                <div className="w-full h-12 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <Icons.Image size="md" className="opacity-30"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Data Table" centered>
                <div className="w-full px-2">
                    <div className="grid grid-cols-3 border text-[6px] text-center">
                        <div className="bg-gray-100 border-b">A</div><div className="bg-gray-100 border-b">B</div><div className="bg-gray-100 border-b">C</div>
                        <div className="border-r">1</div><div className="border-r">2</div><div>3</div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Chart" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <path d="M0,20 L10,10 L20,15 L30,5 L40,12" stroke={theme.colors.primary} strokeWidth="1.5" fill="none"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Code Block" centered>
                <div className="w-full bg-gray-900 text-green-400 p-2 text-[6px] font-mono rounded">
                    console.log('Hello');
                </div>
            </GalleryItem>
            <GalleryItem title="Divider/HR" centered>
                <div className="w-full px-4 flex items-center gap-2 opacity-30">
                    <div className="h-px bg-black flex-1"></div>
                    <div className="text-[10px]">§</div>
                    <div className="h-px bg-black flex-1"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Embed/Iframe" centered>
                <div className="w-full h-10 bg-gray-200 rounded relative overflow-hidden border">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6px] font-bold opacity-50 uppercase">Video Player</div>
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-sm">▶</div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
