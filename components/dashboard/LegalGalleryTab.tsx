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

  const ClauseItem = ({ title, icon }: { title: string, icon: string }) => (
      <div className="flex flex-col items-center justify-center text-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="material-icons text-2xl" style={{ color: theme.colors.primary }}>{icon}</span>
          <span className="text-[8px] font-bold uppercase tracking-wide leading-tight" style={{ color: theme.colors.text }}>{title}</span>
      </div>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Legal Micro-Elements (200+ Items)</SectionTitle>
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

        {/* --- 3. Structure & Formatting --- */}
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

        {/* --- 7. Contract Clauses (NEW) --- */}
        <SectionTitle>Contract Clauses</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Indemnity" centered><ClauseItem title="Indemnity" icon="shield" /></GalleryItem>
            <GalleryItem title="Liability Cap" centered><ClauseItem title="Liability" icon="money_off" /></GalleryItem>
            <GalleryItem title="Confidentiality" centered><ClauseItem title="NDA" icon="lock" /></GalleryItem>
            <GalleryItem title="Termination" centered><ClauseItem title="Termination" icon="cancel" /></GalleryItem>
            <GalleryItem title="Force Majeure" centered><ClauseItem title="Act of God" icon="thunderstorm" /></GalleryItem>
            <GalleryItem title="Governing Law" centered><ClauseItem title="Gov. Law" icon="gavel" /></GalleryItem>
            <GalleryItem title="Arbitration" centered><ClauseItem title="Arbitration" icon="balance" /></GalleryItem>
            <GalleryItem title="Severability" centered><ClauseItem title="Severability" icon="content_cut" /></GalleryItem>
            <GalleryItem title="Non-Compete" centered><ClauseItem title="Non-Compete" icon="block" /></GalleryItem>
            <GalleryItem title="Non-Solicit" centered><ClauseItem title="Non-Solicit" icon="person_off" /></GalleryItem>
            <GalleryItem title="Assignment" centered><ClauseItem title="Assignment" icon="forward" /></GalleryItem>
            <GalleryItem title="Entire Agreement" centered><ClauseItem title="Entire Agmt." icon="folder_zip" /></GalleryItem>
        </div>

        {/* --- 8. Intellectual Property (NEW) --- */}
        <SectionTitle>Intellectual Property</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Patent Pending" centered><ClauseItem title="Pending" icon="lightbulb" /></GalleryItem>
            <GalleryItem title="Trademark (TM)" centered><span className="text-2xl font-serif font-bold" style={{ color: theme.colors.text }}>TM</span></GalleryItem>
            <GalleryItem title="Registered (R)" centered><span className="text-2xl font-serif font-bold" style={{ color: theme.colors.text }}>®</span></GalleryItem>
            <GalleryItem title="Copyright (C)" centered><span className="text-2xl font-serif font-bold" style={{ color: theme.colors.text }}>©</span></GalleryItem>
            <GalleryItem title="Trade Secret" centered><ClauseItem title="Secret" icon="visibility_off" /></GalleryItem>
            <GalleryItem title="License Grant" centered><ClauseItem title="License" icon="key" /></GalleryItem>
            <GalleryItem title="Royalties" centered><ClauseItem title="Royalties" icon="monetization_on" /></GalleryItem>
            <GalleryItem title="Open Source" centered><span className="material-icons text-3xl" style={{ color: theme.colors.success }}>code</span></GalleryItem>
            <GalleryItem title="Public Domain" centered><span className="material-icons text-3xl" style={{ color: theme.colors.textSecondary }}>public</span></GalleryItem>
            <GalleryItem title="Fair Use" centered><ClauseItem title="Fair Use" icon="balance" /></GalleryItem>
            <GalleryItem title="Infringement" centered><ClauseItem title="Infringement" icon="report_problem" /></GalleryItem>
            <GalleryItem title="Prior Art" centered><ClauseItem title="Prior Art" icon="history" /></GalleryItem>
        </div>

        {/* --- 9. Corporate & Entity (NEW) --- */}
        <SectionTitle>Corporate & Entity</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Incorporation" centered><ClauseItem title="Inc." icon="business" /></GalleryItem>
            <GalleryItem title="LLC" centered><span className="font-bold text-lg border-2 p-1 rounded" style={{ borderColor: theme.colors.text }}>LLC</span></GalleryItem>
            <GalleryItem title="Partnership" centered><span className="material-icons text-3xl" style={{ color: theme.colors.primary }}>handshake</span></GalleryItem>
            <GalleryItem title="Non-Profit" centered><span className="material-icons text-3xl" style={{ color: theme.colors.success }}>volunteer_activism</span></GalleryItem>
            <GalleryItem title="Board of Dir" centered><span className="material-icons text-3xl" style={{ color: theme.colors.text }}>groups</span></GalleryItem>
            <GalleryItem title="Shareholder" centered><ClauseItem title="Shares" icon="pie_chart" /></GalleryItem>
            <GalleryItem title="Bylaws" centered><ClauseItem title="Bylaws" icon="gavel" /></GalleryItem>
            <GalleryItem title="Meeting Mins" centered><ClauseItem title="Minutes" icon="description" /></GalleryItem>
            <GalleryItem title="Resolution" centered><ClauseItem title="Resolution" icon="check_circle" /></GalleryItem>
            <GalleryItem title="Proxy Vote" centered><ClauseItem title="Proxy" icon="how_to_vote" /></GalleryItem>
            <GalleryItem title="Merger" centered><span className="material-icons text-3xl" style={{ color: theme.colors.accent }}>call_merge</span></GalleryItem>
            <GalleryItem title="Acquisition" centered><span className="material-icons text-3xl" style={{ color: theme.colors.accent }}>shopping_bag</span></GalleryItem>
        </div>

        {/* --- 10. Court & Litigation (NEW) --- */}
        <SectionTitle>Court & Litigation</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Subpoena" centered><ClauseItem title="Subpoena" icon="mail" /></GalleryItem>
            <GalleryItem title="Affidavit" centered><ClauseItem title="Affidavit" icon="history_edu" /></GalleryItem>
            <GalleryItem title="Deposition" centered><ClauseItem title="Deposition" icon="record_voice_over" /></GalleryItem>
            <GalleryItem title="Evidence" centered><ClauseItem title="Evidence" icon="inventory_2" /></GalleryItem>
            <GalleryItem title="Exhibit A" centered><div className="border px-2 py-1 font-serif bg-white shadow-sm">EXHIBIT A</div></GalleryItem>
            <GalleryItem title="Motion" centered><ClauseItem title="Motion" icon="move_to_inbox" /></GalleryItem>
            <GalleryItem title="Order" centered><ClauseItem title="Order" icon="gavel" /></GalleryItem>
            <GalleryItem title="Judgment" centered><ClauseItem title="Judgment" icon="balance" /></GalleryItem>
            <GalleryItem title="Appeal" centered><ClauseItem title="Appeal" icon="undo" /></GalleryItem>
            <GalleryItem title="Brief" centered><ClauseItem title="Brief" icon="article" /></GalleryItem>
            <GalleryItem title="Docket Entry" centered><ClauseItem title="Docket" icon="list" /></GalleryItem>
            <GalleryItem title="Summons" centered><ClauseItem title="Summons" icon="notifications_active" /></GalleryItem>
        </div>

        {/* --- 11. Real Estate & Property (NEW) --- */}
        <SectionTitle>Real Estate & Property</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Deed" centered><ClauseItem title="Deed" icon="foundation" /></GalleryItem>
            <GalleryItem title="Title Search" centered><ClauseItem title="Title" icon="search" /></GalleryItem>
            <GalleryItem title="Lease Agmt" centered><ClauseItem title="Lease" icon="key" /></GalleryItem>
            <GalleryItem title="Mortgage" centered><ClauseItem title="Mortgage" icon="account_balance" /></GalleryItem>
            <GalleryItem title="Lien" centered><ClauseItem title="Lien" icon="attach_money" /></GalleryItem>
            <GalleryItem title="Easement" centered><ClauseItem title="Easement" icon="add_road" /></GalleryItem>
            <GalleryItem title="Zoning" centered><ClauseItem title="Zoning" icon="map" /></GalleryItem>
            <GalleryItem title="Inspection" centered><ClauseItem title="Inspect" icon="fact_check" /></GalleryItem>
            <GalleryItem title="Escrow" centered><ClauseItem title="Escrow" icon="savings" /></GalleryItem>
            <GalleryItem title="Closing Disc" centered><ClauseItem title="Closing" icon="done_all" /></GalleryItem>
            <GalleryItem title="Tenancy" centered><ClauseItem title="Tenant" icon="person" /></GalleryItem>
            <GalleryItem title="Eviction" centered><ClauseItem title="Eviction" icon="block" /></GalleryItem>
        </div>

        {/* --- 12. Estate & Family (NEW) --- */}
        <SectionTitle>Estate & Family</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Will" centered><ClauseItem title="Will" icon="receipt_long" /></GalleryItem>
            <GalleryItem title="Trust" centered><ClauseItem title="Trust" icon="volunteer_activism" /></GalleryItem>
            <GalleryItem title="POA" centered><ClauseItem title="Power of Atty" icon="assignment_ind" /></GalleryItem>
            <GalleryItem title="Health Proxy" centered><ClauseItem title="Health Proxy" icon="medical_services" /></GalleryItem>
            <GalleryItem title="Beneficiary" centered><ClauseItem title="Beneficiary" icon="group_add" /></GalleryItem>
            <GalleryItem title="Executor" centered><ClauseItem title="Executor" icon="manage_accounts" /></GalleryItem>
            <GalleryItem title="Guardianship" centered><ClauseItem title="Guardian" icon="child_care" /></GalleryItem>
            <GalleryItem title="Prenup" centered><ClauseItem title="Prenup" icon="handshake" /></GalleryItem>
            <GalleryItem title="Divorce" centered><ClauseItem title="Divorce" icon="heart_broken" /></GalleryItem>
            <GalleryItem title="Custody" centered><ClauseItem title="Custody" icon="family_restroom" /></GalleryItem>
        </div>

        {/* --- 13. Legal UI & Tools (NEW) --- */}
        <SectionTitle>Legal UI & Tools</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Redact Tool" centered>
                <div className="w-12 h-6 bg-black flex items-center justify-center text-[6px] text-white tracking-widest font-mono">REDACT</div>
            </GalleryItem>
            <GalleryItem title="Highlight Tool" centered>
                <div className="w-12 h-6 bg-yellow-200 border-yellow-400 border flex items-center justify-center text-[8px] text-yellow-800">Highlight</div>
            </GalleryItem>
            <GalleryItem title="Comment Tool" centered>
                <div className="relative">
                    <Icons.Chat size="md" style={{ color: theme.colors.warning }}/>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="E-Discovery" centered><ClauseItem title="Search" icon="find_in_page" /></GalleryItem>
            <GalleryItem title="Bates Stamp" centered>
                <div className="font-mono text-[8px] border px-1 bg-white shadow-sm" style={{ color: theme.colors.text }}>ABC-000123</div>
            </GalleryItem>
            <GalleryItem title="Time Keeper" centered><ClauseItem title="Timer" icon="timer" /></GalleryItem>
            <GalleryItem title="Billing Code" centered>
                <div className="bg-gray-100 px-2 py-1 rounded text-[8px] font-mono">L100</div>
            </GalleryItem>
            <GalleryItem title="Client Portal" centered><ClauseItem title="Portal" icon="web" /></GalleryItem>
            <GalleryItem title="Secure Share" centered><ClauseItem title="Share" icon="lock" /></GalleryItem>
            <GalleryItem title="Audit Trail" centered><ClauseItem title="Audit" icon="history" /></GalleryItem>
        </div>

        {/* --- 14. Status Stamps (NEW) --- */}
        <SectionTitle>Official Status Stamps</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Approved" centered>
                <div className="border-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest transform -rotate-12 opacity-80" style={{ borderColor: theme.colors.success, color: theme.colors.success }}>
                    APPROVED
                </div>
            </GalleryItem>
            <GalleryItem title="Denied" centered>
                <div className="border-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest transform rotate-6 opacity-80" style={{ borderColor: theme.colors.error, color: theme.colors.error }}>
                    DENIED
                </div>
            </GalleryItem>
            <GalleryItem title="Filed" centered>
                <div className="border-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest opacity-60" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                    FILED
                </div>
            </GalleryItem>
            <GalleryItem title="Received" centered>
                <div className="border-2 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border-dashed" style={{ borderColor: theme.colors.textSecondary, color: theme.colors.textSecondary }}>
                    RECEIVED
                </div>
            </GalleryItem>
            <GalleryItem title="Paid" centered>
                <div className="border-4 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transform -rotate-12" style={{ borderColor: theme.colors.success, color: theme.colors.success }}>
                    PAID
                </div>
            </GalleryItem>
            <GalleryItem title="Overdue" centered>
                <div className="border-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-red-100" style={{ borderColor: theme.colors.error, color: theme.colors.error }}>
                    OVERDUE
                </div>
            </GalleryItem>
            <GalleryItem title="Urgent" centered>
                <div className="border-4 px-2 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ borderColor: theme.colors.error, color: theme.colors.error }}>
                    URGENT
                </div>
            </GalleryItem>
            <GalleryItem title="Confidential" centered>
                <div className="border-4 px-2 py-1 text-[8px] font-bold uppercase tracking-widest transform rotate-3 opacity-50" style={{ borderColor: theme.colors.text, color: theme.colors.text }}>
                    CONFIDENTIAL
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
