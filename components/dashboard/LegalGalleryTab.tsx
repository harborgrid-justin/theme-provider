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
            <GalleryItem title="Negotiating" centered><StatusBadge label="Negotiating" color={theme.colors.accent} /></GalleryItem>
            <GalleryItem title="Pending Sign" centered><StatusBadge label="Pending Sign" color={theme.colors.warning} /></GalleryItem>
            <GalleryItem title="Signed" centered><StatusBadge label="Signed" color={theme.colors.success} /></GalleryItem>
            <GalleryItem title="Executed" centered><StatusBadge label="Executed" color={theme.colors.success} /></GalleryItem>
            <GalleryItem title="Effective" centered><StatusBadge label="Effective" color={theme.colors.primary} /></GalleryItem>
            <GalleryItem title="Amended" centered><StatusBadge label="Amended" color={theme.colors.info} /></GalleryItem>
            <GalleryItem title="Expired" centered><StatusBadge label="Expired" color={theme.colors.textSecondary} /></GalleryItem>
            <GalleryItem title="Terminated" centered><StatusBadge label="Terminated" color={theme.colors.error} /></GalleryItem>
            <GalleryItem title="Voided" centered><StatusBadge label="Void" color={theme.colors.error} /></GalleryItem>
            <GalleryItem title="Archived" centered><StatusBadge label="Archived" color={theme.colors.textSecondary} /></GalleryItem>
            <GalleryItem title="Locked" centered>
                <div className="flex items-center gap-1.5 opacity-60" style={{ color: theme.colors.text }}>
                    <Icons.Lock size="sm"/> <span className="text-[10px] font-bold uppercase">Locked</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Redlined" centered><span className="text-[10px] font-bold line-through decoration-2" style={{ color: theme.colors.error, textDecorationColor: theme.colors.error }}>Redlined</span></GalleryItem>
        </div>

        {/* --- 2. Signature & Authentication --- */}
        <SectionTitle>Signature & Authentication</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Signature Line" centered>
                <div className="w-full px-4 text-center">
                    <div className="h-8 border-b-2 mb-1 relative flex items-end justify-center pb-1" style={{borderColor: theme.colors.text}}>
                        <span className="font-serif italic opacity-60 text-sm font-bold absolute" style={{ color: theme.colors.primary }}>John Doe</span>
                        <span className="absolute bottom-1 right-0 text-[8px] opacity-30" style={{ color: theme.colors.text }}>X</span>
                    </div>
                    <div className="text-[8px] uppercase font-bold opacity-60" style={{ color: theme.colors.text }}>Sign Here</div>
                </div>
            </GalleryItem>

             <GalleryItem title="Initial Box" centered>
                <div className="w-12 h-12 border-2 border-dashed flex items-center justify-center text-[8px] uppercase opacity-60 font-bold" style={{borderColor: theme.colors.text, backgroundColor: theme.colors.warning + '10'}}>
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
                <div className="w-14 h-14 rounded-full border-2 border-double flex items-center justify-center relative" style={{ borderColor: theme.colors.warning, backgroundColor: theme.colors.warning + '10' }}>
                    <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: theme.colors.warning }}>
                        <Icons.Star size="md" style={{ color: theme.colors.warning }}/>
                    </div>
                    <div className="absolute bottom-1 text-[6px] px-1 uppercase font-bold shadow-sm border rounded-sm" style={{ backgroundColor: theme.colors.surface, color: theme.colors.warning, borderColor: theme.colors.warning }}>Official Seal</div>
                </div>
            </GalleryItem>

            <GalleryItem title="E-Sign Badge" centered>
                <div className="flex items-center gap-1.5 px-2 py-1.5 rounded border shadow-sm" style={{ backgroundColor: theme.colors.info + '10', color: theme.colors.info, borderColor: theme.colors.info + '30' }}>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.success }}></div>
                    <span className="text-[8px] font-bold uppercase tracking-wide">Verified E-Sign</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Digital Cert" centered>
                <div className="border p-1.5 rounded flex flex-col items-center shadow-sm w-12" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                    <Icons.Lock size="sm" className="mb-1" style={{ color: theme.colors.success }}/>
                    <div className="h-px w-full my-0.5" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                    <span className="text-[6px] font-mono" style={{ color: theme.colors.textSecondary }}>SHA-256</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Timestamp" centered>
                <span className="font-mono text-[8px] opacity-70 px-2 py-1 rounded border" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '10', color: theme.colors.text }}>2024-10-24 14:30:01 UTC</span>
            </GalleryItem>

            <GalleryItem title="ID Verified" centered>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-6 border rounded relative overflow-hidden mb-1 shadow-sm" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface }}>
                        <div className="w-3 h-4 absolute top-1 left-1 rounded-sm" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        <div className="h-0.5 w-4 absolute top-1.5 left-5" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        <div className="h-0.5 w-3 absolute top-3 left-5" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                    </div>
                    <div className="flex items-center gap-0.5 text-[8px] font-bold" style={{ color: theme.colors.success }}>
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
                    <span className="font-bold text-sm" style={{ color: theme.colors.text }}>1.2</span>
                    <div className="h-2 w-full rounded" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                </div>
            </GalleryItem>

             <GalleryItem title="Section Break" centered>
                <div className="flex items-center gap-2 w-full px-6 opacity-30" style={{ color: theme.colors.text }}>
                    <div className="h-px bg-current flex-1"></div>
                    <div className="font-serif text-xl">§</div>
                    <div className="h-px bg-current flex-1"></div>
                </div>
            </GalleryItem>

             <GalleryItem title="Redaction" centered>
                <div className="text-white px-3 py-1 text-[8px] select-none font-mono tracking-[0.2em] font-bold" style={{ backgroundColor: theme.colors.text }}>REDACTED</div>
            </GalleryItem>

            <GalleryItem title="Exhibit Label" centered>
                <div className="border-2 px-3 py-1 text-center font-serif shadow-md" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface }}>
                    <div className="text-[6px] uppercase tracking-wider font-bold" style={{ color: theme.colors.text }}>Exhibit</div>
                    <div className="text-2xl font-bold leading-none" style={{ color: theme.colors.text }}>A</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Watermark: Draft" centered>
                <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-20 transform -rotate-12 select-none border-4 border-current px-3 py-1 rounded-lg" style={{ color: theme.colors.text }}>
                    Draft
                </div>
            </GalleryItem>

            <GalleryItem title="Page Number" centered>
                <div className="flex items-center gap-1 text-[10px] opacity-60 font-serif" style={{ color: theme.colors.text }}>
                    Page <span className="font-bold">1</span> of <span className="font-bold">24</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Footnote" centered>
                <div className="w-full px-4">
                    <div className="h-px w-8 mb-1.5 opacity-20" style={{ backgroundColor: theme.colors.text }}></div>
                    <div className="text-[8px] opacity-60 leading-tight" style={{ color: theme.colors.text }}>1. defined in Section 2.4</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Comment Bubble" centered>
                <div className="relative border px-2 py-1.5 rounded shadow-sm max-w-[80%]" style={{ backgroundColor: theme.colors.warning + '10', borderColor: theme.colors.warning + '30' }}>
                    <div className="text-[8px] leading-tight" style={{ color: theme.colors.warning }}>Check this clause against v2.</div>
                    <div className="absolute -bottom-1 left-2 w-2 h-2 border-b border-r transform rotate-45" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.warning + '30' }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Highlight" centered>
                <span className="px-1 py-0.5 text-[10px] font-medium" style={{ backgroundColor: theme.colors.warning + '30', color: theme.colors.text }}>Critical Term</span>
            </GalleryItem>

            <GalleryItem title="Track Changes" centered>
                <div className="text-[10px] flex gap-1">
                    <span className="line-through decoration-current opacity-60" style={{ color: theme.colors.error }}>old term</span>
                    <span className="underline decoration-current font-bold px-0.5" style={{ color: theme.colors.success, backgroundColor: theme.colors.success + '10' }}>new term</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Legal Icons & Symbols --- */}
        <SectionTitle>Icons & Symbols</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {/* Using Material Icons via simple spans as placeholders, themed */}
            <GalleryItem title="Gavel" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>gavel</span></GalleryItem>
            <GalleryItem title="Scales" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>balance</span></GalleryItem>
            <GalleryItem title="Courthouse" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>account_balance</span></GalleryItem>
            <GalleryItem title="Briefcase" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>work</span></GalleryItem>
            <GalleryItem title="Contract" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>history_edu</span></GalleryItem>
            <GalleryItem title="Stamp" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>approval</span></GalleryItem>
            <GalleryItem title="Policy" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>policy</span></GalleryItem>
            <GalleryItem title="Shield" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>security</span></GalleryItem>
            <GalleryItem title="Copyright" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>copyright</span></GalleryItem>
            <GalleryItem title="Fingerprint" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>fingerprint</span></GalleryItem>
            <GalleryItem title="Verified User" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>verified_user</span></GalleryItem>
            <GalleryItem title="Privacy" centered><span className="material-icons text-3xl opacity-60" style={{ color: theme.colors.text }}>visibility_off</span></GalleryItem>
        </div>

        {/* --- 5. Case & Matter Management --- */}
        <SectionTitle>Case & Matter Fields</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Case Number" centered>
                <div className="rounded px-3 py-1.5 text-[10px] font-mono border font-bold tracking-wide" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                    CV-2024-0012
                </div>
            </GalleryItem>
            
            <GalleryItem title="Docket Tag" centered>
                <div className="flex items-center gap-1.5 text-[10px] font-bold border rounded px-2 py-1 shadow-sm" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                    <Icons.Tag size="sm" className="w-3"/> DK-99
                </div>
            </GalleryItem>

            <GalleryItem title="Plaintiff" centered>
                <div className="text-center border rounded px-3 py-1 w-24" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '20' }}>
                    <div className="text-[6px] uppercase opacity-50 font-bold tracking-wider mb-0.5" style={{ color: theme.colors.text }}>Plaintiff</div>
                    <div className="text-[10px] font-bold truncate" style={{ color: theme.colors.text }}>Smith Corp.</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Defendant" centered>
                <div className="text-center border rounded px-3 py-1 w-24" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '20' }}>
                    <div className="text-[6px] uppercase opacity-50 font-bold tracking-wider mb-0.5" style={{ color: theme.colors.text }}>Defendant</div>
                    <div className="text-[10px] font-bold truncate" style={{ color: theme.colors.text }}>Doe LLC</div>
                </div>
            </GalleryItem>

            <GalleryItem title="Jurisdiction" centered>
                <div className="flex items-center gap-1.5 text-[10px] border rounded px-2 py-1 font-medium" style={{ backgroundColor: theme.colors.info + '10', color: theme.colors.info, borderColor: theme.colors.info + '30' }}>
                    <Icons.Flag size="sm" className="w-3"/> CA, USA
                </div>
            </GalleryItem>

            <GalleryItem title="Filing Date" centered>
                <div className="flex items-center gap-1.5 text-[10px] border rounded px-2 py-1 font-mono" style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                    <Icons.Calendar size="sm" className="w-3 opacity-50"/> 2024-10-12
                </div>
            </GalleryItem>
        </div>

        {/* --- 6. Compliance & Security --- */}
        <SectionTitle>Compliance & Security</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="GDPR" centered>
                <div className="w-10 h-10 rounded-full text-white flex items-center justify-center text-[8px] font-bold border-2 border-white shadow-md" style={{ backgroundColor: theme.colors.info }}>
                    GDPR
                </div>
            </GalleryItem>
            <GalleryItem title="HIPAA" centered>
                <div className="border px-2 py-1 text-[8px] font-bold rounded tracking-wider" style={{ borderColor: theme.colors.success, color: theme.colors.success }}>
                    HIPAA
                </div>
            </GalleryItem>
            <GalleryItem title="CCPA" centered>
                <div className="px-2 py-1 text-[8px] font-bold rounded border tracking-wider" style={{ backgroundColor: theme.colors.accent + '10', color: theme.colors.accent, borderColor: theme.colors.accent + '30' }}>
                    CCPA
                </div>
            </GalleryItem>
            <GalleryItem title="SOC2" centered>
                <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded border" style={{ backgroundColor: theme.colors.success + '10', color: theme.colors.success, borderColor: theme.colors.success + '30' }}>
                    <Icons.Check size="sm" className="w-3"/> SOC2
                </div>
            </GalleryItem>
            <GalleryItem title="ISO 27001" centered>
                <div className="w-12 h-8 border-2 flex flex-col items-center justify-center text-[6px] font-bold shadow-sm" style={{ borderColor: theme.colors.text, backgroundColor: theme.colors.surface, color: theme.colors.text }}>
                    <span>ISO</span>
                    <span className="text-[5px]">27001</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Privileged" centered>
                <div className="px-2 py-0.5 text-[6px] uppercase font-bold tracking-widest border rounded shadow-sm" style={{ backgroundColor: theme.colors.error + '10', color: theme.colors.error, borderColor: theme.colors.error + '30' }}>
                    Privileged
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};