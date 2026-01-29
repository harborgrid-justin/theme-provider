
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const LegalGalleryTab: React.FC = () => {
  const { theme, strokeProps, layoutProps, primaryFill, textFill, surfaceFill, faintFill, textStyle, corner, cornerSm, strokeWidth } = useSvgTheme();

  // Helper for Professional Status Lozenge (Capsule style)
  const StatusLozenge = ({ label, color, variant = 'solid' }: { label: string, color: string, variant?: 'solid' | 'outline' }) => (
      <svg viewBox="0 0 100 30" className="w-24 h-8">
          <rect 
            x="2" y="5" width="96" height="20" rx={corner} 
            fill={variant === 'solid' ? color : 'none'} 
            fillOpacity={variant === 'solid' ? "0.15" : "0"}
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeOpacity="0.5" 
          />
          <circle cx="12" cy="15" r="3" fill={color} />
          <text x="54" y="19" fontSize="9" fontWeight="600" fill={theme.colors.text} textAnchor="middle" letterSpacing="0.5" style={{ textTransform: 'uppercase', fontFamily: 'monospace' }}>
              {label}
          </text>
      </svg>
  );

  // Helper for Professional Clause Representation (Mini Doc with highlight)
  const ClauseDoc = ({ label, code }: { label: string, code: string }) => (
      <svg viewBox="0 0 80 60" className="w-20 h-16">
          <rect x="10" y="5" width="60" height="50" fill="none" stroke={theme.colors.text} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <rect x="15" y="10" width="20" height="4" fill={theme.colors.primary} />
          <rect x="15" y="18" width="50" height="1" fill={theme.colors.text} opacity="0.3" />
          <rect x="15" y="22" width="50" height="1" fill={theme.colors.text} opacity="0.3" />
          <rect x="15" y="26" width="35" height="1" fill={theme.colors.text} opacity="0.3" />
          <text x="40" y="45" fontSize="7" fontWeight="bold" fill={theme.colors.text} textAnchor="middle" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</text>
          <text x="75" y="50" fontSize="5" fill={theme.colors.text} opacity="0.5" textAnchor="end">{code}</text>
      </svg>
  );

  // Helper for Official Stamp
  const Stamp = ({ text, color }: { text: string, color: string }) => (
      <svg viewBox="0 0 100 60" className="w-24 h-16">
          <rect x="5" y="10" width="90" height="40" rx={cornerSm} fill="none" stroke={color} strokeWidth={Math.max(2, parseFloat(strokeWidth))} strokeDasharray="1 1" />
          <rect x="10" y="15" width="80" height="30" rx={Math.max(1, cornerSm - 1)} fill="none" stroke={color} strokeWidth={strokeWidth} />
          <text x="50" y="35" fontSize="12" fontWeight="900" fill={color} textAnchor="middle" letterSpacing="1" style={{ textTransform: 'uppercase', opacity: 0.8 }}>{text}</text>
      </svg>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Legal Micro-Elements (Pro)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            High-fidelity UI tokens for CLM, eDiscovery, and Legal Ops. Precision engineered for information density.
        </p>

        {/* --- 1. Document Lifecycle & Status --- */}
        <SectionTitle>1. Document Lifecycle</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Draft Mode" centered><StatusLozenge label="Draft v0.1" color={theme.colors.textSecondary} /></GalleryItem>
            <GalleryItem title="In Review" centered><StatusLozenge label="Reviewing" color={theme.colors.info} /></GalleryItem>
            <GalleryItem title="Redlining" centered><StatusLozenge label="Negotiating" color={theme.colors.accent} /></GalleryItem>
            <GalleryItem title="Pending Sign" centered><StatusLozenge label="Sign Pending" color={theme.colors.warning} /></GalleryItem>
            <GalleryItem title="Fully Executed" centered><StatusLozenge label="Executed" color={theme.colors.success} /></GalleryItem>
            <GalleryItem title="Effective" centered><StatusLozenge label="Active" color={theme.colors.primary} /></GalleryItem>
            
            <GalleryItem title="Locked File" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="5" y="10" width="90" height="24" rx={corner} fill={theme.colors.text} fillOpacity="0.05" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M25,22 V18 A4,4 0 0,1 33,18 V22" fill="none" stroke={theme.colors.text} strokeWidth={strokeWidth} />
                    <rect x="23" y="22" width="12" height="10" rx={cornerSm} fill={theme.colors.text} />
                    <text x="45" y="30" fontSize="9" fontWeight="bold" fill={theme.colors.text} textAnchor="start">READ ONLY</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Terminated" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <line x1="10" y1="15" x2="90" y2="15" stroke={theme.colors.error} strokeWidth={strokeWidth} />
                    <rect x="30" y="8" width="40" height="14" fill={theme.colors.surface} stroke={theme.colors.error} strokeWidth={strokeWidth} />
                    <text x="50" y="18" fontSize="8" fontWeight="bold" fill={theme.colors.error} textAnchor="middle">TERMINATED</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Signature & Authentication --- */}
        <SectionTitle>2. Authentication & Execution</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Signature Block" centered>
                <svg viewBox="0 0 120 60" className="w-28 h-16">
                    <line x1="10" y1="40" x2="110" y2="40" stroke={theme.colors.text} strokeWidth="0.5" />
                    <text x="10" y="50" fontSize="6" fill={theme.colors.text} opacity="0.6">Authorized Signature</text>
                    <path d="M20,35 Q30,10 40,30 T60,25 T80,35" fill="none" stroke={theme.colors.primary} strokeWidth={strokeWidth} />
                    <text x="105" y="35" fontSize="8" fill={theme.colors.text} opacity="0.2" textAnchor="end">X</text>
                </svg>
            </GalleryItem>

             <GalleryItem title="Initials" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-10">
                    <rect x="5" y="5" width="50" height="30" fill="none" stroke={theme.colors.text} strokeWidth="0.5" strokeDasharray="2 2" />
                    <text x="30" y="23" fontSize="12" fontFamily="serif" fontStyle="italic" fill={theme.colors.primary} textAnchor="middle">JD</text>
                </svg>
            </GalleryItem>
            
             <GalleryItem title="Received Stamp" centered>
                <Stamp text="RECEIVED" color={theme.colors.info} />
            </GalleryItem>

            <GalleryItem title="e-Sign Cert" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <rect x="5" y="5" width="90" height="30" rx={corner} fill="none" stroke={theme.colors.success} strokeWidth="0.5" />
                    <path d="M15,20 L20,25 L28,15" fill="none" stroke={theme.colors.success} strokeWidth={strokeWidth} />
                    <text x="35" y="18" fontSize="6" fill={theme.colors.success} fontWeight="bold">DOCUSIGN VERIFIED</text>
                    <text x="35" y="28" fontSize="5" fill={theme.colors.text} opacity="0.6" fontFamily="monospace">ID: A92-331-X</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Digital Seal" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="22" fill="none" stroke={theme.colors.primary} strokeWidth={strokeWidth} strokeDasharray="1 1" />
                    <circle cx="30" cy="30" r="18" fill="none" stroke={theme.colors.primary} strokeWidth="0.5" />
                    <path d="M30,15 L33,25 H43 L35,31 L38,41 L30,35 L22,41 L25,31 L17,25 H27 Z" fill={theme.colors.primary} opacity="0.1" />
                    <text x="30" y="58" fontSize="5" fill={theme.colors.primary} textAnchor="middle">SECURE HASH</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Notary" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M30,5 L36,20 L50,20 L40,30 L44,45 L30,38 L16,45 L20,30 L10,20 L24,20 Z" fill="none" stroke={theme.colors.text} strokeWidth="0.5" />
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.text} strokeWidth={strokeWidth} />
                    <text x="30" y="32" fontSize="4" fontWeight="bold" textAnchor="middle">OFFICIAL SEAL</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. Clause Library --- */}
        <SectionTitle>3. Clause Library</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Indemnity" centered><ClauseDoc label="Indemnity" code="§ 8.1" /></GalleryItem>
            <GalleryItem title="Liability" centered><ClauseDoc label="Liability" code="§ 9.4" /></GalleryItem>
            <GalleryItem title="Confidentiality" centered><ClauseDoc label="NDA" code="§ 12" /></GalleryItem>
            <GalleryItem title="Termination" centered><ClauseDoc label="Term" code="§ 4.0" /></GalleryItem>
            <GalleryItem title="Force Majeure" centered><ClauseDoc label="Force Maj." code="§ 14" /></GalleryItem>
            <GalleryItem title="Jurisdiction" centered><ClauseDoc label="Gov. Law" code="§ 15" /></GalleryItem>
            <GalleryItem title="Arbitration" centered><ClauseDoc label="Arb." code="§ 15.2" /></GalleryItem>
            <GalleryItem title="Assignment" centered><ClauseDoc label="Assign" code="§ 11" /></GalleryItem>
            <GalleryItem title="Severability" centered><ClauseDoc label="Sever" code="§ 16" /></GalleryItem>
            <GalleryItem title="Entirety" centered><ClauseDoc label="Entire" code="§ 17" /></GalleryItem>
            <GalleryItem title="Warranties" centered><ClauseDoc label="Warranty" code="§ 6.0" /></GalleryItem>
            <GalleryItem title="Notices" centered><ClauseDoc label="Notice" code="§ 13" /></GalleryItem>
        </div>

        {/* --- 4. Redlining & Editing --- */}
        <SectionTitle>4. Redlining & Editing</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Redaction" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="10" width="90" height="12" fill={theme.colors.text} />
                    <text x="50" y="19" fontSize="6" fontFamily="monospace" fill={theme.colors.surface} textAnchor="middle" letterSpacing="2">CONFIDENTIAL</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Strikeout" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <text x="50" y="18" fontSize="10" fill={theme.colors.error} textAnchor="middle" textDecoration="line-through">Original Terms</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Insertion" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <text x="50" y="18" fontSize="10" fill={theme.colors.success} textAnchor="middle" fontWeight="bold">New Provision</text>
                    <line x1="20" y1="22" x2="80" y2="22" stroke={theme.colors.success} strokeWidth={strokeWidth} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Comment" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-10">
                    <path d="M10,5 H90 V25 H30 L20,35 V25 H10 Z" fill={theme.colors.warning} fillOpacity="0.1" stroke={theme.colors.warning} strokeWidth="0.5" />
                    <text x="15" y="15" fontSize="6" fill={theme.colors.text}>Please clarify this definition.</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Track Changes" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="0" width="2" height="30" fill={theme.colors.primary} />
                    <text x="10" y="18" fontSize="8" fill={theme.colors.text} fontStyle="italic">Modified today</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Version Tag" centered>
                <div className="flex items-center gap-1 border rounded px-2 py-1 bg-white" style={{ borderColor: theme.colors.text + '20', borderRadius: theme.borderRadius.sm }}>
                    <span className="font-mono text-[10px] font-bold">v3.2</span>
                    <span className="text-[8px] opacity-50">(Current)</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 5. Case Management --- */}
        <SectionTitle>5. Case Management</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Case File" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M5,10 H25 L30,15 H55 V55 H5 Z" fill={theme.colors.text} fillOpacity="0.05" stroke={theme.colors.text} strokeWidth={strokeWidth} />
                    <rect x="15" y="25" width="30" height="2" fill={theme.colors.text} opacity="0.2" />
                    <text x="30" y="40" fontSize="8" fontWeight="bold" fill={theme.colors.text} textAnchor="middle" fontFamily="serif">MATTER</text>
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Plaintiff" centered>
                <div className="flex items-center gap-2 border px-3 py-1 rounded-full" style={{ borderColor: theme.colors.success }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.success }}></div>
                    <span className="text-[8px] font-bold uppercase tracking-wider">Plaintiff</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Defendant" centered>
                <div className="flex items-center gap-2 border px-3 py-1 rounded-full" style={{ borderColor: theme.colors.error }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.error }}></div>
                    <span className="text-[8px] font-bold uppercase tracking-wider">Defendant</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Court Order" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="5" width="40" height="50" fill="none" stroke={theme.colors.text} strokeWidth={strokeWidth} />
                    <line x1="15" y1="15" x2="45" y2="15" stroke={theme.colors.text} strokeWidth={Math.max(2, parseFloat(strokeWidth)*1.5)} />
                    <line x1="15" y1="25" x2="45" y2="25" stroke={theme.colors.text} strokeOpacity="0.3" />
                    <line x1="15" y1="35" x2="45" y2="35" stroke={theme.colors.text} strokeOpacity="0.3" />
                    <circle cx="40" cy="45" r="8" fill="none" stroke={theme.colors.text} />
                    <path d="M36,45 L40,49 L44,41" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Evidence" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,15 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} strokeWidth={strokeWidth} />
                    <text x="30" y="35" fontSize="16" fontWeight="bold" fill={theme.colors.text} opacity="0.1" textAnchor="middle">EX</text>
                    <rect x="25" y="10" width="10" height="10" fill={theme.colors.warning} />
                    <text x="30" y="17" fontSize="6" fontWeight="bold" fill="white" textAnchor="middle">A</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Docket" centered>
                <div className="flex flex-col border w-full h-full p-2 bg-white" style={{ borderColor: theme.colors.text + '20', borderRadius: theme.borderRadius.sm }}>
                    <div className="flex justify-between border-b pb-1 mb-1">
                        <span className="text-[6px] font-bold">Entry 102</span>
                        <span className="text-[6px] opacity-50">10/24</span>
                    </div>
                    <div className="text-[6px] leading-tight opacity-70">Motion to dismiss filed by defense counsel...</div>
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
