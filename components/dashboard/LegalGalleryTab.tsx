import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const LegalGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const StatusBadge = ({ label, color }: { label: string, color: string }) => (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap border" 
            style={{ backgroundColor: color + '15', color: color, borderColor: color + '30' }}>
          {label}
      </span>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Legal Micro-Elements (120+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Specialized UI tokens for contract management, compliance, and legal workflows. 
        </p>

        {/* --- 1. Document Lifecycle & Status --- */}
        <SectionTitle>Document Lifecycle</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Draft" centered><StatusBadge label="Draft" color={theme.colors.textSecondary} /></GalleryItem>
            <GalleryItem title="In Review" centered><StatusBadge label="In Review" color={theme.colors.info} /></GalleryItem>
            <GalleryItem title="Negotiating" centered><StatusBadge label="Negotiating" color="#9333ea" /></GalleryItem>
            <GalleryItem title="Pending Sign" centered><StatusBadge label="Pending Sign" color={theme.colors.warning} /></GalleryItem>
            <GalleryItem title="Signed" centered><StatusBadge label="Signed" color={theme.colors.success} /></GalleryItem>
            <GalleryItem title="Executed" centered><StatusBadge label="Executed" color="#059669" /></GalleryItem>
            <GalleryItem title="Effective" centered><StatusBadge label="Effective" color={theme.colors.primary} /></GalleryItem>
            <GalleryItem title="Amended" centered><StatusBadge label="Amended" color={theme.colors.info} /></GalleryItem>
            <GalleryItem title="Expired" centered><StatusBadge label="Expired" color={theme.colors.textSecondary} /></GalleryItem>
            <GalleryItem title="Terminated" centered><StatusBadge label="Terminated" color={theme.colors.error} /></GalleryItem>
            <GalleryItem title="Voided" centered><StatusBadge label="Void" color={theme.colors.error} /></GalleryItem>
            <GalleryItem title="Archived" centered><StatusBadge label="Archived" color={theme.colors.textSecondary} /></GalleryItem>
            <GalleryItem title="Locked" centered>
                <div className="flex items-center gap-1.5 opacity-60">
                    <Icons.Lock size="sm"/> <span className="text-[10px] font-bold uppercase">Locked</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Redlined" centered><span className="text-[10px] font-bold text-red-500 line-through decoration-red-500 decoration-2">Redlined</span></GalleryItem>
        </div>

        {/* --- 2. Signature & Authentication --- */}
        <SectionTitle>Signature & Authentication</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Signature Line" centered>
                <div className="w-full px-4 text-center">
                    <div className="h-8 border-b-2 mb-1 relative flex items-end justify-center pb-1" style={{borderColor: theme.colors.text}}>
                        <span className="font-serif italic opacity-60 text-sm font-bold text-blue-900 absolute">John Doe</span>
                        <span className="absolute bottom-1 right-0 text-[8px] opacity-30">X</span>
                    </div>
                    <div className="text-[8px] uppercase font-bold opacity-60">Sign Here</div>
                </div>
            </GalleryItem>

             <GalleryItem title="Initial Box" centered>
                <div className="w-12 h-12 border-2 border-dashed flex items-center justify-center text-[8px] uppercase opacity-60 font-bold bg-yellow-50/50" style={{borderColor: theme.colors.text}}>
                    Initials
                </div>
            </GalleryItem>
            
             <GalleryItem title="Date Stamp" centered>
                <div className="border-2 rounded px-2 py-1 text-center transform -rotate-6 shadow-sm" style={{borderColor: theme.colors.error, color: theme.colors.error}}>
                    <div className="text-[6px] uppercase font-bold">Received</div>
                    <div className="text-[10px] font-mono font-bold">OCT 24 2024</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Notary Seal" centered>
                <div className="w-14 h-14 rounded-full border-2 border-double border-yellow-600 flex items-center justify-center relative bg-yellow-50/20">
                    <div className="w-10 h-10 rounded-full border border-yellow-600 flex items-center justify-center">
                        <Icons.Star size="md" className="text-yellow-600"/>
                    </div>
                    <div className="absolute bottom-1 text-[6px] bg-white px-1 uppercase font-bold text-yellow-700 shadow-sm border border-yellow-100 rounded-sm">Official Seal</div>
                </div>
            </GalleryItem>

            <GalleryItem title="E-Sign Badge" centered>
                <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2 py-1.5 rounded border border-blue-200 shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[8px] font-bold uppercase tracking-wide">Verified E-Sign</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Digital Cert" centered>
                <div className="border p-1.5 rounded bg-gray-50 flex flex-col items-center shadow-sm w-12">
                    <Icons.Lock size="sm" className="text-green-600 mb-1"/>
                    <div className="h-px w-full bg-gray-300 my-0.5"></div>
                    <span className="text-[6px] font-mono text-gray-500">SHA-256</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Timestamp" centered>
                <span className="font-mono text-[8px] opacity-70 bg-gray-100 px-2 py-1 rounded border border-gray-200">2024-10-24 14:30:01 UTC</span>
            </GalleryItem>

            <GalleryItem title="ID Verified" centered>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-6 border rounded bg-white relative overflow-hidden mb-1 shadow-sm">
                        <div className="w-3 h-4 bg-gray-200 absolute top-1 left-1 rounded-sm"></div>
                        <div className="h-0.5 w-4 bg-gray-200 absolute top-1.5 left-5"></div>
                        <div className="h-0.5 w-3 bg-gray-200 absolute top-3 left-5"></div>
                    </div>
                    <div className="flex items-center gap-0.5 text-green-600 text-[8px] font-bold">
                        <Icons.Check size="sm" className="w-3 h-3"/> ID Verified
                    </div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 3. Document Structure & Formatting --- */}
        <SectionTitle>Structure & Formatting</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Clause Header" centered>
                <div className="flex gap-2 items-baseline w-full px-6">
                    <span className="font-bold text-sm">1.2</span>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                </div>
            </GalleryItem>

             <GalleryItem title="Section Break" centered>
                <div className="flex items-center gap-2 w-full px-6 opacity-30">
                    <div className="h-px bg-current flex-1"></div>
                    <div className="font-serif text-xl">§</div>
                    <div className="h-px bg-current flex-1"></div>
                </div>
            </GalleryItem>

             <GalleryItem title="Redaction" centered>
                <div className="bg-black text-white px-3 py-1 text-[8px] select-none font-mono tracking-[0.2em] font-bold">REDACTED</div>
            </GalleryItem>

            <GalleryItem title="Exhibit Label" centered>
                <div className="border-2 border-black px-3 py-1 text-center font-serif bg-white shadow-md">
                    <div className="text-[6px] uppercase tracking-wider font-bold">Exhibit</div>
                    <div className="text-2xl font-bold leading-none">A</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Watermark: Draft" centered>
                <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-20 transform -rotate-12 select-none border-4 border-current px-3 py-1 rounded-lg">
                    Draft
                </div>
            </GalleryItem>

            <GalleryItem title="Page Number" centered>
                <div className="flex items-center gap-1 text-[10px] opacity-60 font-serif">
                    Page <span className="font-bold">1</span> of <span className="font-bold">24</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Footnote" centered>
                <div className="w-full px-4">
                    <div className="h-px w-8 bg-black mb-1.5 opacity-20"></div>
                    <div className="text-[8px] opacity-60 leading-tight">1. defined in Section 2.4</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Comment Bubble" centered>
                <div className="relative bg-yellow-100 border border-yellow-200 px-2 py-1.5 rounded shadow-sm max-w-[80%]">
                    <div className="text-[8px] text-yellow-900 leading-tight">Check this clause against v2.</div>
                    <div className="absolute -bottom-1 left-2 w-2 h-2 bg-yellow-100 border-b border-r border-yellow-200 transform rotate-45"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Highlight" centered>
                <span className="bg-yellow-200 px-1 py-0.5 text-[10px] font-medium selection:bg-yellow-300">Critical Term</span>
            </GalleryItem>

            <GalleryItem title="Track Changes" centered>
                <div className="text-[10px] flex gap-1">
                    <span className="line-through text-red-400 decoration-red-400 opacity-60">old term</span>
                    <span className="text-green-600 underline decoration-green-600 font-bold bg-green-50 px-0.5">new term</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Legal Icons & Symbols --- */}
        <SectionTitle>Icons & Symbols</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Gavel" centered><span className="material-icons text-3xl opacity-60">gavel</span></GalleryItem>
            <GalleryItem title="Scales" centered><span className="material-icons text-3xl opacity-60">balance</span></GalleryItem>
            <GalleryItem title="Courthouse" centered><span className="material-icons text-3xl opacity-60">account_balance</span></GalleryItem>
            <GalleryItem title="Briefcase" centered><span className="material-icons text-3xl opacity-60">work</span></GalleryItem>
            <GalleryItem title="Contract" centered><span className="material-icons text-3xl opacity-60">history_edu</span></GalleryItem>
            <GalleryItem title="Stamp" centered><span className="material-icons text-3xl opacity-60">approval</span></GalleryItem>
            <GalleryItem title="Policy" centered><span className="material-icons text-3xl opacity-60">policy</span></GalleryItem>
            <GalleryItem title="Shield" centered><span className="material-icons text-3xl opacity-60">security</span></GalleryItem>
            <GalleryItem title="Copyright" centered><span className="material-icons text-3xl opacity-60">copyright</span></GalleryItem>
            <GalleryItem title="Fingerprint" centered><span className="material-icons text-3xl opacity-60">fingerprint</span></GalleryItem>
            <GalleryItem title="Verified User" centered><span className="material-icons text-3xl opacity-60">verified_user</span></GalleryItem>
            <GalleryItem title="Privacy" centered><span className="material-icons text-3xl opacity-60">visibility_off</span></GalleryItem>
        </div>

        {/* --- 5. Case & Matter Management --- */}
        <SectionTitle>Case & Matter Fields</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Case Number" centered>
                <div className="bg-gray-100 rounded px-3 py-1.5 text-[10px] font-mono border border-gray-200 font-bold tracking-wide">
                    CV-2024-0012
                </div>
            </GalleryItem>
            
            <GalleryItem title="Docket Tag" centered>
                <div className="flex items-center gap-1.5 text-[10px] font-bold bg-white border rounded px-2 py-1 shadow-sm">
                    <Icons.Tag size="sm" className="w-3"/> DK-99
                </div>
            </GalleryItem>

            <GalleryItem title="Plaintiff" centered>
                <div className="text-center border rounded px-3 py-1 bg-gray-50 border-gray-200 w-24">
                    <div className="text-[6px] uppercase opacity-50 font-bold tracking-wider mb-0.5">Plaintiff</div>
                    <div className="text-[10px] font-bold truncate">Smith Corp.</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Defendant" centered>
                <div className="text-center border rounded px-3 py-1 bg-gray-50 border-gray-200 w-24">
                    <div className="text-[6px] uppercase opacity-50 font-bold tracking-wider mb-0.5">Defendant</div>
                    <div className="text-[10px] font-bold truncate">Doe LLC</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Jurisdiction" centered>
                <div className="flex items-center gap-1.5 text-[10px] border rounded px-2 py-1 bg-blue-50 text-blue-800 border-blue-100 font-medium">
                    <Icons.Flag size="sm" className="w-3"/> CA, USA
                </div>
            </GalleryItem>

            <GalleryItem title="Filing Date" centered>
                <div className="flex items-center gap-1.5 text-[10px] border rounded px-2 py-1 bg-white border-gray-200 font-mono">
                    <Icons.Calendar size="sm" className="w-3 opacity-50"/> 2024-10-12
                </div>
            </GalleryItem>
        </div>

        {/* --- 6. Compliance & Security --- */}
        <SectionTitle>Compliance & Security</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="GDPR" centered>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold border-2 border-white shadow-md">
                    GDPR
                </div>
            </GalleryItem>
            <GalleryItem title="HIPAA" centered>
                <div className="border border-green-600 text-green-600 px-2 py-1 text-[8px] font-bold rounded tracking-wider">
                    HIPAA
                </div>
            </GalleryItem>
            <GalleryItem title="CCPA" centered>
                <div className="bg-purple-100 text-purple-700 px-2 py-1 text-[8px] font-bold rounded border border-purple-200 tracking-wider">
                    CCPA
                </div>
            </GalleryItem>
            <GalleryItem title="SOC2" centered>
                <div className="flex items-center gap-1 text-[10px] font-bold bg-green-50 px-2 py-1 rounded text-green-800 border border-green-200">
                    <Icons.Check size="sm" className="text-green-600 w-3"/> SOC2
                </div>
            </GalleryItem>
            <GalleryItem title="ISO 27001" centered>
                <div className="w-12 h-8 border-2 border-black flex flex-col items-center justify-center text-[6px] font-bold shadow-sm bg-white">
                    <span>ISO</span>
                    <span className="text-[5px]">27001</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Privileged" centered>
                <div className="bg-red-50 text-red-700 px-2 py-0.5 text-[6px] uppercase font-bold tracking-widest border border-red-200 rounded shadow-sm">
                    Privileged
                </div>
            </GalleryItem>
        </div>
        
        <SectionTitle>Complex Legal Modules</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
             <GalleryItem title="Contract Header" className="col-span-2 md:col-span-6 h-auto min-h-[120px]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full h-full p-4">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        <div className="w-12 h-12 rounded flex items-center justify-center shadow-sm border shrink-0" style={{ backgroundColor: theme.colors.error + '10', borderColor: theme.colors.error + '20', color: theme.colors.error }}>
                             <Icons.File size="lg"/>
                        </div>
                        <div className="min-w-0 flex-1">
                             <div className="text-xl font-bold truncate" style={{ color: theme.colors.text }}>Master Services Agreement</div>
                             <div className="flex items-center gap-3 text-xs opacity-60 flex-wrap" style={{ color: theme.colors.text }}>
                                 <span className="whitespace-nowrap font-mono bg-gray-100 px-1 rounded">ID: MSA-2024-99</span>
                                 <span className="hidden sm:inline">•</span>
                                 <span className="whitespace-nowrap">Last edit: 2 hrs ago</span>
                             </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto shrink-0 justify-end">
                        <ThemedButton size="sm" variant="outline" className="flex-1 md:flex-none whitespace-nowrap">Export PDF</ThemedButton>
                        <ThemedButton size="sm" className="flex-1 md:flex-none whitespace-nowrap">Send for Sign</ThemedButton>
                    </div>
                </div>
            </GalleryItem>
            
             <GalleryItem title="Audit Log Entry" className="col-span-2 md:col-span-3 h-auto p-2">
                <div className="flex gap-3 items-start w-full p-2 h-full">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600 border shadow-sm">JD</div>
                     <div className="flex-1 text-xs">
                         <div className="font-bold" style={{ color: theme.colors.text }}>John Doe viewed the document</div>
                         <div className="opacity-60 mb-2" style={{ color: theme.colors.text }}>Oct 24, 10:30 AM • IP: 192.168.1.1</div>
                         <div className="p-2 bg-gray-50 rounded font-mono text-[10px] border break-all text-gray-600">GET /api/contracts/msa-99</div>
                     </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Compliance Check" className="col-span-2 md:col-span-3 h-auto p-2">
                <div className="w-full space-y-3 p-2 h-full flex flex-col justify-center">
                     <div className="flex justify-between items-center text-xs">
                         <span style={{ color: theme.colors.text }}>GDPR Compliance</span>
                         <span className="text-green-600 font-bold flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full"><Icons.Check size="sm"/> Pass</span>
                     </div>
                     <div className="flex justify-between items-center text-xs">
                         <span style={{ color: theme.colors.text }}>CCPA Compliance</span>
                         <span className="text-green-600 font-bold flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full"><Icons.Check size="sm"/> Pass</span>
                     </div>
                     <div className="flex justify-between items-center text-xs">
                         <span style={{ color: theme.colors.text }}>SOC2 Encryption</span>
                         <span className="text-orange-600 font-bold flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded-full">Pending</span>
                     </div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};