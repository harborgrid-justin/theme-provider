import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

// Helper for centering small tokens
const Centered: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="w-full flex justify-center items-center flex-1 p-2 max-w-full overflow-hidden">{children}</div>
);

export const LegalGalleryTab: React.FC = () => {
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

  const StatusBadge = ({ label, color }: { label: string, color: string }) => (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap border" 
            style={{ backgroundColor: color + '15', color: color, borderColor: color + '30' }}>
          {label}
      </span>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Legal Micro-Elements (120+ Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Specialized UI tokens for contract management, compliance, and legal workflows. 
        </p>

        {/* --- 1. Document Lifecycle & Status --- */}
        <div style={sectionTitleStyle}>Document Lifecycle</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Draft">
                <Centered><StatusBadge label="Draft" color={theme.colors.textSecondary} /></Centered>
            </CardWrapper>
            <CardWrapper title="In Review">
                <Centered><StatusBadge label="In Review" color={theme.colors.info} /></Centered>
            </CardWrapper>
            <CardWrapper title="Negotiating">
                <Centered><StatusBadge label="Negotiating" color="#9333ea" /></Centered>
            </CardWrapper>
            <CardWrapper title="Pending Sign">
                <Centered><StatusBadge label="Pending Sign" color={theme.colors.warning} /></Centered>
            </CardWrapper>
            <CardWrapper title="Signed">
                <Centered><StatusBadge label="Signed" color={theme.colors.success} /></Centered>
            </CardWrapper>
            <CardWrapper title="Executed">
                <Centered><StatusBadge label="Executed" color="#059669" /></Centered>
            </CardWrapper>
            <CardWrapper title="Effective">
                <Centered><StatusBadge label="Effective" color={theme.colors.primary} /></Centered>
            </CardWrapper>
            <CardWrapper title="Amended">
                <Centered><StatusBadge label="Amended" color={theme.colors.info} /></Centered>
            </CardWrapper>
            <CardWrapper title="Expired">
                <Centered><StatusBadge label="Expired" color={theme.colors.textSecondary} /></Centered>
            </CardWrapper>
            <CardWrapper title="Terminated">
                <Centered><StatusBadge label="Terminated" color={theme.colors.error} /></Centered>
            </CardWrapper>
            <CardWrapper title="Voided">
                <Centered><StatusBadge label="Void" color={theme.colors.error} /></Centered>
            </CardWrapper>
            <CardWrapper title="Archived">
                <Centered><StatusBadge label="Archived" color={theme.colors.textSecondary} /></Centered>
            </CardWrapper>
            <CardWrapper title="Locked">
                <Centered>
                    <div className="flex items-center gap-1 opacity-50">
                        <Icons.Lock size="sm"/> <span className="text-[10px] font-bold uppercase">Locked</span>
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Redlined">
                <Centered><span className="text-[10px] font-bold text-red-500 line-through decoration-red-500">Redlined</span></Centered>
            </CardWrapper>
        </div>

        {/* --- 2. Signature & Authentication --- */}
        <div style={sectionTitleStyle}>Signature & Authentication</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <CardWrapper title="Signature Line">
                <Centered>
                    <div className="w-full px-4">
                        <div className="h-8 border-b-2 mb-1 relative" style={{borderColor: theme.colors.text}}>
                            <span className="absolute bottom-1 left-0 font-serif italic opacity-50 text-xs font-bold text-blue-900">John Doe</span>
                            <span className="absolute bottom-1 right-0 text-[8px] opacity-30">X</span>
                        </div>
                        <div className="text-[8px] uppercase font-bold opacity-60">Sign Here</div>
                    </div>
                </Centered>
            </CardWrapper>

             <CardWrapper title="Initial Box">
                <Centered>
                    <div className="w-10 h-10 border-2 border-dashed flex items-center justify-center text-[8px] uppercase opacity-40 font-bold bg-yellow-50" style={{borderColor: theme.colors.text}}>
                        Initials
                    </div>
                </Centered>
            </CardWrapper>
            
             <CardWrapper title="Date Stamp">
                <Centered>
                    <div className="border-2 rounded p-1 text-center transform -rotate-6" style={{borderColor: theme.colors.error, color: theme.colors.error}}>
                        <div className="text-[6px] uppercase font-bold">Received</div>
                        <div className="text-[8px] font-mono font-bold">OCT 24 2024</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Notary Seal">
                <Centered>
                    <div className="w-12 h-12 rounded-full border-2 border-double border-yellow-600 flex items-center justify-center relative">
                        <div className="w-10 h-10 rounded-full border border-yellow-600 flex items-center justify-center">
                            <Icons.Star size="sm" className="text-yellow-600"/>
                        </div>
                        <div className="absolute bottom-0 text-[6px] bg-white px-1 uppercase font-bold text-yellow-700">Official Seal</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="E-Sign Badge">
                <Centered>
                    <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-[8px] font-bold">Verified E-Sign</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Digital Cert">
                <Centered>
                    <div className="border p-1 rounded bg-gray-50 flex flex-col items-center shadow-sm">
                        <Icons.Lock size="sm" className="text-green-600 mb-1"/>
                        <div className="h-px w-8 bg-gray-300 my-0.5"></div>
                        <span className="text-[6px] font-mono">SHA-256</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Timestamp">
                <Centered>
                    <span className="font-mono text-[8px] opacity-60 bg-gray-100 px-1 rounded">2024-10-24 14:30:01 UTC</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="ID Verified">
                <Centered>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-5 border rounded bg-white relative overflow-hidden mb-1">
                            <div className="w-2 h-3 bg-gray-200 absolute top-1 left-1 rounded-sm"></div>
                            <div className="h-0.5 w-4 bg-gray-200 absolute top-1 left-3.5"></div>
                            <div className="h-0.5 w-3 bg-gray-200 absolute top-2 left-3.5"></div>
                        </div>
                        <div className="flex items-center gap-0.5 text-green-600 text-[8px] font-bold">
                            <Icons.Check size="sm" className="w-2 h-2"/> ID Verified
                        </div>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 3. Document Structure & Formatting --- */}
        <div style={sectionTitleStyle}>Structure & Formatting</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <CardWrapper title="Clause Header">
                <Centered>
                    <div className="flex gap-2 items-baseline w-full px-4">
                        <span className="font-bold text-xs">1.2</span>
                        <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                    </div>
                </Centered>
            </CardWrapper>

             <CardWrapper title="Section Break">
                <Centered>
                    <div className="flex items-center gap-2 w-full px-4 opacity-30">
                        <div className="h-px bg-current flex-1"></div>
                        <div className="font-serif text-lg">§</div>
                        <div className="h-px bg-current flex-1"></div>
                    </div>
                </Centered>
            </CardWrapper>

             <CardWrapper title="Redaction">
                <Centered>
                    <div className="bg-black text-white px-2 py-0.5 text-[8px] select-none font-mono tracking-widest">REDACTED</div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Exhibit Label">
                <Centered>
                    <div className="border border-black px-2 py-1 text-center font-serif bg-white shadow-sm">
                        <div className="text-[6px] uppercase">Exhibit</div>
                        <div className="text-xl font-bold leading-none">A</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Watermark: Draft">
                <Centered>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-20 transform -rotate-12 select-none border-2 border-current px-2 py-1 rounded">
                        Draft
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Page Number">
                <Centered>
                    <div className="flex items-center gap-1 text-[8px] opacity-50 font-serif">
                        Page <span>1</span> of <span>24</span>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Footnote">
                <Centered>
                    <div className="w-full px-2">
                        <div className="h-px w-8 bg-black mb-1 opacity-20"></div>
                        <div className="text-[6px] opacity-60 leading-tight">1. defined in Section 2.4</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Comment Bubble">
                <Centered>
                    <div className="relative bg-yellow-100 border border-yellow-200 px-2 py-1 rounded shadow-sm">
                        <div className="text-[6px] text-yellow-800">Check this clause</div>
                        <div className="absolute -bottom-1 left-2 w-2 h-2 bg-yellow-100 border-b border-r border-yellow-200 transform rotate-45"></div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Highlight">
                <Centered>
                    <span className="bg-yellow-200 px-1 text-[10px]">Critical Term</span>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Track Changes">
                <Centered>
                    <div className="text-[8px]">
                        <span className="line-through text-red-400 decoration-red-400">old term</span>
                        <span className="text-green-600 underline decoration-green-600 ml-1">new term</span>
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 4. Legal Icons & Symbols --- */}
        <div style={sectionTitleStyle}>Icons & Symbols</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Gavel">
                <Centered><span className="material-icons text-2xl opacity-60">gavel</span></Centered>
            </CardWrapper>
            <CardWrapper title="Scales">
                <Centered><span className="material-icons text-2xl opacity-60">balance</span></Centered>
            </CardWrapper>
            <CardWrapper title="Courthouse">
                <Centered><span className="material-icons text-2xl opacity-60">account_balance</span></Centered>
            </CardWrapper>
            <CardWrapper title="Briefcase">
                <Centered><span className="material-icons text-2xl opacity-60">work</span></Centered>
            </CardWrapper>
            <CardWrapper title="Contract">
                <Centered><span className="material-icons text-2xl opacity-60">history_edu</span></Centered>
            </CardWrapper>
            <CardWrapper title="Stamp">
                <Centered><span className="material-icons text-2xl opacity-60">approval</span></Centered>
            </CardWrapper>
            <CardWrapper title="Policy">
                <Centered><span className="material-icons text-2xl opacity-60">policy</span></Centered>
            </CardWrapper>
            <CardWrapper title="Shield">
                <Centered><span className="material-icons text-2xl opacity-60">security</span></Centered>
            </CardWrapper>
            <CardWrapper title="Copyright">
                <Centered><span className="material-icons text-2xl opacity-60">copyright</span></Centered>
            </CardWrapper>
            <CardWrapper title="Fingerprint">
                <Centered><span className="material-icons text-2xl opacity-60">fingerprint</span></Centered>
            </CardWrapper>
            <CardWrapper title="Verified User">
                <Centered><span className="material-icons text-2xl opacity-60">verified_user</span></Centered>
            </CardWrapper>
            <CardWrapper title="Privacy">
                <Centered><span className="material-icons text-2xl opacity-60">visibility_off</span></Centered>
            </CardWrapper>
        </div>

        {/* --- 5. Case & Matter Management --- */}
        <div style={sectionTitleStyle}>Case & Matter Fields</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="Case Number">
                <Centered>
                    <div className="bg-gray-100 rounded px-2 py-1 text-[10px] font-mono border border-gray-200">
                        CV-2024-0012
                    </div>
                </Centered>
            </CardWrapper>
            
            <CardWrapper title="Docket Tag">
                <Centered>
                    <div className="flex items-center gap-1 text-[10px] font-bold">
                        <Icons.Tag size="sm" className="w-3"/> DK-99
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Plaintiff">
                <Centered>
                    <div className="text-center">
                        <div className="text-[8px] uppercase opacity-50 font-bold">Plaintiff</div>
                        <div className="text-[10px] font-bold">Smith Corp.</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Defendant">
                <Centered>
                    <div className="text-center">
                        <div className="text-[8px] uppercase opacity-50 font-bold">Defendant</div>
                        <div className="text-[10px] font-bold">Doe LLC</div>
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Jurisdiction">
                <Centered>
                    <div className="flex items-center gap-1 text-[8px] border rounded px-1 py-0.5 bg-blue-50 text-blue-800 border-blue-100">
                        <Icons.Flag size="sm" className="w-2"/> CA, USA
                    </div>
                </Centered>
            </CardWrapper>

            <CardWrapper title="Filing Date">
                <Centered>
                    <div className="flex items-center gap-1 text-[8px] border rounded px-1 py-0.5 bg-gray-50 border-gray-200">
                        <Icons.Calendar size="sm" className="w-2"/> Oct 12
                    </div>
                </Centered>
            </CardWrapper>
        </div>

        {/* --- 6. Compliance & Security --- */}
        <div style={sectionTitleStyle}>Compliance & Security</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <CardWrapper title="GDPR">
                <Centered>
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold border-2 border-white shadow-sm">
                        GDPR
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="HIPAA">
                <Centered>
                    <div className="border border-green-600 text-green-600 px-1 py-0.5 text-[8px] font-bold rounded">
                        HIPAA
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="CCPA">
                <Centered>
                    <div className="bg-purple-100 text-purple-700 px-1 py-0.5 text-[8px] font-bold rounded border border-purple-200">
                        CCPA
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="SOC2">
                <Centered>
                    <div className="flex items-center gap-1 text-[8px] font-bold">
                        <Icons.Check size="sm" className="text-green-500 w-3"/> SOC2
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="ISO 27001">
                <Centered>
                    <div className="w-10 h-6 border-2 border-black flex items-center justify-center text-[6px] font-bold">
                        ISO
                    </div>
                </Centered>
            </CardWrapper>
            <CardWrapper title="Privileged">
                <Centered>
                    <div className="bg-red-100 text-red-700 px-1 text-[6px] uppercase font-bold tracking-tighter border border-red-200 rounded">
                        Privileged
                    </div>
                </Centered>
            </CardWrapper>
        </div>
        
        <div style={sectionTitleStyle}>Complex Legal Modules</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
             <CardWrapper title="Contract Header" className="col-span-2 md:col-span-6 min-h-[100px]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        <div className="w-12 h-12 rounded flex items-center justify-center shadow-sm border shrink-0" style={{ backgroundColor: theme.colors.error + '10', borderColor: theme.colors.error + '20', color: theme.colors.error }}>
                             <Icons.File size="lg"/>
                        </div>
                        <div className="min-w-0 flex-1">
                             <div className="text-xl font-bold truncate" style={{ color: theme.colors.text }}>Master Services Agreement</div>
                             <div className="flex items-center gap-3 text-xs opacity-60 flex-wrap" style={{ color: theme.colors.text }}>
                                 <span className="whitespace-nowrap">ID: MSA-2024-99</span>
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
            </CardWrapper>
            
             <CardWrapper title="Audit Log Entry" className="col-span-2 md:col-span-3">
                <div className="flex gap-3 items-start w-full">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">JD</div>
                     <div className="flex-1 text-xs">
                         <div className="font-bold">John Doe viewed the document</div>
                         <div className="opacity-60 mb-2">Oct 24, 10:30 AM • IP: 192.168.1.1</div>
                         <div className="p-2 bg-gray-50 rounded font-mono text-[10px] border">GET /api/contracts/msa-99</div>
                     </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Compliance Check" className="col-span-2 md:col-span-3">
                <div className="w-full space-y-2">
                     <div className="flex justify-between items-center text-xs">
                         <span>GDPR Compliance</span>
                         <span className="text-green-600 font-bold flex items-center gap-1"><Icons.Check size="sm"/> Pass</span>
                     </div>
                     <div className="flex justify-between items-center text-xs">
                         <span>CCPA Compliance</span>
                         <span className="text-green-600 font-bold flex items-center gap-1"><Icons.Check size="sm"/> Pass</span>
                     </div>
                     <div className="flex justify-between items-center text-xs">
                         <span>SOC2 Encryption</span>
                         <span className="text-orange-600 font-bold flex items-center gap-1">Pending</span>
                     </div>
                </div>
            </CardWrapper>
        </div>
    </div>
  );
};