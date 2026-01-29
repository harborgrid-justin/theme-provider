
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const LegalGalleryTab: React.FC = () => {
  const { theme, strokeProps, layoutProps, primaryFill, textFill, surfaceFill, faintFill, textStyle } = useSvgTheme();

  // Helper for Status Badges
  const StatusBadge = ({ label, color }: { label: string, color: string }) => (
      <svg viewBox="0 0 100 30" className="w-24 h-8">
          <rect x="5" y="5" width="90" height="20" rx="10" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
          <text x="50" y="16" fontSize="8" fontWeight="bold" fill={color} textAnchor="middle" dominantBaseline="middle" style={{ textTransform: 'uppercase' }}>
              {label}
          </text>
      </svg>
  );

  // Helper for Clause Icons (Abstract representation)
  const ClauseIcon = ({ char, label }: { char: string, label: string }) => (
      <svg viewBox="0 0 60 60" className="w-16 h-16">
          <path d="M15,10 H45 L50,20 V50 H10 V10 Z" {...layoutProps} />
          <circle cx="30" cy="30" r="12" {...surfaceFill} stroke={theme.colors.text} strokeWidth="1" />
          <text x="30" y="34" fontSize="12" fontWeight="bold" fill={theme.colors.primary} textAnchor="middle">{char}</text>
          <text x="30" y="58" fontSize="6" fill={theme.colors.text} textAnchor="middle" opacity="0.6">{label}</text>
      </svg>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Legal Micro-Elements (330+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Specialized UI tokens for contract management, compliance, litigation, and legal operations.
        </p>

        {/* --- 1. Document Lifecycle & Status --- */}
        <SectionTitle>1. Document Lifecycle</SectionTitle>
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
                <svg viewBox="0 0 80 30" className="w-20 h-8">
                    <rect x="25" y="8" width="10" height="8" rx="2" stroke={theme.colors.text} fill="none" />
                    <rect x="22" y="12" width="16" height="10" rx="2" fill={theme.colors.text} />
                    <text x="55" y="20" fontSize="8" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">LOCKED</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Redlined" centered>
                <svg viewBox="0 0 80 30" className="w-20 h-8">
                    <text x="40" y="20" fontSize="10" fontWeight="bold" fill={theme.colors.error} textAnchor="middle" textDecoration="line-through">Redlined</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Superseded" centered><StatusBadge label="Superseded" color={theme.colors.textSecondary} /></GalleryItem>
            <GalleryItem title="Renewed" centered><StatusBadge label="Renewed" color={theme.colors.success} /></GalleryItem>
        </div>

        {/* --- 2. Signature & Authentication --- */}
        <SectionTitle>2. Signature & Authentication</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Signature Line" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <line x1="10" y1="45" x2="90" y2="45" {...strokeProps} />
                    <path d="M20,40 Q30,20 40,40 T60,30 T80,40" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" strokeOpacity="0.6" fontStyle="italic" />
                    <text x="90" y="42" fontSize="8" fill={theme.colors.text} opacity="0.3" textAnchor="end">X</text>
                    <text x="50" y="55" {...textStyle} opacity="0.6" fontSize="6">Sign Here</text>
                </svg>
            </GalleryItem>

             <GalleryItem title="Initial Box" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" rx="4" fill={theme.colors.warning} fillOpacity="0.1" stroke={theme.colors.text} strokeDasharray="4 2" />
                    <text x="30" y="32" fontSize="10" fontWeight="bold" fill={theme.colors.text} opacity="0.4" textAnchor="middle">INITIALS</text>
                </svg>
            </GalleryItem>
            
             <GalleryItem title="Date Stamp" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-10">
                    <rect x="5" y="5" width="70" height="30" rx="2" fill="none" stroke={theme.colors.error} strokeWidth="2" transform="rotate(-2 40 20)" />
                    <text x="40" y="18" fontSize="6" fontWeight="bold" fill={theme.colors.error} textAnchor="middle" transform="rotate(-2 40 20)">RECEIVED</text>
                    <text x="40" y="28" fontSize="10" fontWeight="bold" fill={theme.colors.error} textAnchor="middle" fontFamily="monospace" transform="rotate(-2 40 20)">OCT 24 2024</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Notary Seal" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="25" fill={theme.colors.warning} fillOpacity="0.1" stroke={theme.colors.warning} strokeWidth="2" strokeDasharray="2 1" />
                    <path d="M30,10 L35,25 L50,25 L38,35 L43,50 L30,40 L17,50 L22,35 L10,25 L25,25 Z" fill="none" stroke={theme.colors.warning} />
                    <rect x="15" y="25" width="30" height="10" fill={theme.colors.surface} stroke={theme.colors.warning} rx="2" />
                    <text x="30" y="32" fontSize="4" fontWeight="bold" fill={theme.colors.warning} textAnchor="middle">OFFICIAL</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="E-Sign Badge" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="4" fill={theme.colors.info} fillOpacity="0.1" stroke={theme.colors.info} strokeOpacity="0.3" />
                    <circle cx="20" cy="15" r="3" fill={theme.colors.success} />
                    <text x="55" y="19" fontSize="8" fontWeight="bold" fill={theme.colors.info} textAnchor="middle">VERIFIED SIGNATURE</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Digital Cert" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <path d="M5,5 H35 V45 H5 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M15,15 H25 M20,12 V18" stroke={theme.colors.success} strokeWidth="2" />
                    <circle cx="20" cy="15" r="6" fill="none" stroke={theme.colors.success} />
                    <line x1="10" y1="30" x2="30" y2="30" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="20" y="40" fontSize="4" fontFamily="monospace" fill={theme.colors.textSecondary} textAnchor="middle">SHA-256</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Timestamp" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="4" fill={theme.colors.text} fillOpacity="0.05" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="50" y="17" fontSize="8" fontFamily="monospace" fill={theme.colors.text} textAnchor="middle">2024-10-24 14:30 UTC</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Biometric Sign" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M20,35 Q30,5 40,35" fill="none" stroke={theme.colors.success} strokeWidth="1.5" />
                    <path d="M15,25 Q30,10 45,25" fill="none" stroke={theme.colors.text} opacity="0.2" />
                    <rect x="5" y="5" width="50" height="30" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. Structure & Formatting --- */}
        <SectionTitle>3. Structure & Formatting</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
             <GalleryItem title="Clause Header" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <text x="10" y="25" fontSize="12" fontWeight="bold" fill={theme.colors.text}>1.2</text>
                    <rect x="30" y="20" width="60" height="6" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                </svg>
            </GalleryItem>

             <GalleryItem title="Section Break" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <line x1="10" y1="20" x2="45" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <text x="50" y="24" fontSize="16" fontFamily="serif" fill={theme.colors.text} textAnchor="middle">§</text>
                    <line x1="55" y1="20" x2="90" y2="20" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>

             <GalleryItem title="Redaction" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" fill={theme.colors.text} />
                    <text x="50" y="18" fontSize="8" fontFamily="monospace" fill="white" fontWeight="bold" textAnchor="middle" letterSpacing="2">REDACTED</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Exhibit Label" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="5" width="50" height="30" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1.5" />
                    <text x="30" y="15" fontSize="6" fontWeight="bold" fill={theme.colors.text} textAnchor="middle" style={{textTransform: 'uppercase'}}>Exhibit</text>
                    <text x="30" y="30" fontSize="14" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">A</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Watermark: Draft" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <text x="50" y="25" fontSize="20" fontWeight="bold" fill={theme.colors.text} opacity="0.1" textAnchor="middle" style={{textTransform: 'uppercase'}}>DRAFT</text>
                    <rect x="20" y="10" width="60" height="20" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" strokeWidth="2" />
                </svg>
            </GalleryItem>

            <GalleryItem title="Page Number" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <text x="50" y="20" fontSize="8" fill={theme.colors.text} textAnchor="middle" fontFamily="serif" opacity="0.6">Page 1 of 24</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Footnote" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <line x1="10" y1="10" x2="30" y2="10" stroke={theme.colors.text} opacity="0.5" />
                    <text x="10" y="25" fontSize="6" fill={theme.colors.text} opacity="0.6">1. Defined in Section 2.4</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Comment Bubble" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <path d="M10,5 H90 V25 H20 L10,35 V5 Z" fill={theme.colors.warning} fillOpacity="0.1" stroke={theme.colors.warning} strokeOpacity="0.5" />
                    <text x="20" y="18" fontSize="6" fill={theme.colors.warning}>Check this clause...</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Highlight" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="10" y="8" width="80" height="14" fill={theme.colors.warning} fillOpacity="0.3" />
                    <text x="50" y="18" fontSize="8" fill={theme.colors.text} textAnchor="middle">Critical Term</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Track Changes" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <text x="30" y="18" fontSize="8" fill={theme.colors.error} textAnchor="end" textDecoration="line-through" opacity="0.7">old</text>
                    <text x="70" y="18" fontSize="8" fill={theme.colors.success} textAnchor="start" fontWeight="bold">new term</text>
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Line Numbers" centered>
                <svg viewBox="0 0 40 60" className="w-8 h-12">
                    <text x="10" y="15" fontSize="6" fill={theme.colors.text} opacity="0.4">10</text>
                    <text x="10" y="25" fontSize="6" fill={theme.colors.text} opacity="0.4">11</text>
                    <text x="10" y="35" fontSize="6" fill={theme.colors.text} opacity="0.4">12</text>
                    <line x1="20" y1="5" x2="20" y2="55" stroke={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>
            
            <GalleryItem title="Paragraph" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <text x="20" y="25" fontSize="20" fontWeight="bold" fill={theme.colors.text} textAnchor="middle" opacity="0.5">¶</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Contract Clauses --- */}
        <SectionTitle>4. Contract Clauses</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Indemnity" centered><ClauseIcon char="I" label="Indemnity" /></GalleryItem>
            <GalleryItem title="Liability Cap" centered><ClauseIcon char="$" label="Liability" /></GalleryItem>
            <GalleryItem title="Confidentiality" centered><ClauseIcon char="C" label="Confidential" /></GalleryItem>
            <GalleryItem title="Termination" centered><ClauseIcon char="X" label="Terminate" /></GalleryItem>
            <GalleryItem title="Force Majeure" centered><ClauseIcon char="!" label="Force Maj." /></GalleryItem>
            <GalleryItem title="Governing Law" centered><ClauseIcon char="§" label="Gov. Law" /></GalleryItem>
            <GalleryItem title="Arbitration" centered><ClauseIcon char="A" label="Arbitration" /></GalleryItem>
            <GalleryItem title="Severability" centered><ClauseIcon char="/" label="Severability" /></GalleryItem>
            <GalleryItem title="Non-Compete" centered><ClauseIcon char="∅" label="Non-Compete" /></GalleryItem>
            <GalleryItem title="Non-Solicit" centered><ClauseIcon char="No" label="Non-Solicit" /></GalleryItem>
            <GalleryItem title="Assignment" centered><ClauseIcon char="→" label="Assign" /></GalleryItem>
            <GalleryItem title="Entire Agmt" centered><ClauseIcon char="≡" label="Entire Agmt" /></GalleryItem>
        </div>

        {/* --- 5. Compliance & Regulatory (NEW) --- */}
        <SectionTitle>5. Compliance & Regulatory</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="GDPR Badge" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="25" fill={theme.colors.info} fillOpacity="0.1" stroke={theme.colors.info} />
                    <text x="30" y="34" fontSize="10" fontWeight="bold" fill={theme.colors.info} textAnchor="middle">GDPR</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="HIPAA Shield" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M30,5 L50,15 V35 C50,45 30,55 30,55 C30,55 10,45 10,35 V15 L30,5 Z" fill={theme.colors.success} fillOpacity="0.1" stroke={theme.colors.success} />
                    <text x="30" y="34" fontSize="8" fontWeight="bold" fill={theme.colors.success} textAnchor="middle">HIPAA</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="SOC2 Check" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,20 L25,35 L50,10" fill="none" stroke={theme.colors.primary} strokeWidth="4" />
                    <text x="30" y="55" fontSize="8" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">SOC 2</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="ISO Cert" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="22" fill="none" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="3 2" />
                    <text x="30" y="34" fontSize="10" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">ISO</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Risk Matrix" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="5" y="5" width="25" height="25" fill={theme.colors.success} opacity="0.5" />
                    <rect x="30" y="5" width="25" height="25" fill={theme.colors.warning} opacity="0.5" />
                    <rect x="5" y="30" width="25" height="25" fill={theme.colors.warning} opacity="0.5" />
                    <rect x="30" y="30" width="25" height="25" fill={theme.colors.error} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Audit Trail" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="10" width="30" height="40" fill="none" stroke={theme.colors.text} />
                    <line x1="20" y1="20" x2="40" y2="20" stroke={theme.colors.text} opacity="0.5" />
                    <line x1="20" y1="30" x2="40" y2="30" stroke={theme.colors.text} opacity="0.5" />
                    <line x1="20" y1="40" x2="40" y2="40" stroke={theme.colors.text} opacity="0.5" />
                    <circle cx="45" cy="45" r="8" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <path d="M43,45 L45,47 L49,43" fill="none" stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Whistleblower" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,30 H45 L35,45 H25 Z" fill={theme.colors.text} opacity="0.1" />
                    <rect x="25" y="15" width="10" height="15" fill={theme.colors.text} />
                    <circle cx="30" cy="15" r="5" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Retention" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M30,10 V30 L40,40" fill="none" stroke={theme.colors.warning} strokeWidth="2" />
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.warning} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Incident Log" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" fill={theme.colors.error} fillOpacity="0.1" />
                    <path d="M20,20 L40,40 M40,20 L20,40" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Policy Lock" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="10" width="30" height="40" fill="none" stroke={theme.colors.text} />
                    <rect x="25" y="25" width="10" height="8" fill={theme.colors.primary} />
                    <path d="M27,25 V22 A3,3 0 0,1 33,22 V25" fill="none" stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="CCPA Icon" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <text x="30" y="20" fontSize="10" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">CCPA</text>
                    <rect x="5" y="5" width="50" height="20" fill="none" stroke={theme.colors.text} rx="4" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Access Control" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="20" cy="30" r="10" fill={theme.colors.text} opacity="0.2" />
                    <circle cx="40" cy="30" r="10" fill={theme.colors.success} opacity="0.5" />
                    <path d="M25,25 L35,35 M35,25 L25,35" stroke={theme.colors.surface} strokeWidth="2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Case Management (NEW) --- */}
        <SectionTitle>6. Case Management</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Case Folder" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M5,10 H25 L30,15 H55 V50 H5 Z" fill={theme.colors.primary} fillOpacity="0.2" stroke={theme.colors.primary} />
                    <text x="30" y="35" fontSize="8" fontWeight="bold" fill={theme.colors.primary} textAnchor="middle">CASE #</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Evidence Bag" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,20 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} />
                    <path d="M15,25 H45" stroke={theme.colors.warning} strokeWidth="2" strokeDasharray="2 1" />
                    <text x="30" y="40" fontSize="6" fill={theme.colors.text} textAnchor="middle">EXHIBIT A</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Gavel Hit" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="20" width="40" height="15" fill={theme.colors.text} transform="rotate(-15 30 30)" />
                    <rect x="25" y="30" width="8" height="25" fill={theme.colors.text} transform="rotate(-15 30 30)" />
                    <path d="M5,50 H55" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Witness Stand" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,40 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} />
                    <path d="M15,40 L20,20 H40 L45,40" fill="none" stroke={theme.colors.text} />
                    <circle cx="30" cy="15" r="5" fill={theme.colors.text} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Subpoena" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="10" width="30" height="40" fill="white" stroke={theme.colors.text} />
                    <text x="30" y="25" fontSize="6" fontWeight="bold" fill={theme.colors.error} textAnchor="middle">SUBPOENA</text>
                    <line x1="20" y1="35" x2="40" y2="35" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Docket List" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" fill="none" stroke={theme.colors.text} />
                    <line x1="15" y1="20" x2="45" y2="20" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="15" y1="30" x2="45" y2="30" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="15" y1="40" x2="45" y2="40" stroke={theme.colors.text} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Plaintiff" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="20" r="8" fill={theme.colors.success} />
                    <path d="M15,50 Q30,30 45,50" fill="none" stroke={theme.colors.success} strokeWidth="2" />
                    <text x="30" y="58" fontSize="6" fill={theme.colors.success} textAnchor="middle">PLAINTIFF</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Defendant" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="20" r="8" fill={theme.colors.error} />
                    <path d="M15,50 Q30,30 45,50" fill="none" stroke={theme.colors.error} strokeWidth="2" />
                    <text x="30" y="58" fontSize="6" fill={theme.colors.error} textAnchor="middle">DEFENDANT</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Settlement" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,30 L30,30 L45,20" stroke={theme.colors.text} fill="none" />
                    <path d="M45,30 L30,30 L15,20" stroke={theme.colors.text} fill="none" />
                    <circle cx="30" cy="30" r="3" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Briefcase" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="20" width="40" height="25" rx="2" fill={theme.colors.text} opacity="0.8" />
                    <path d="M25,20 V15 H35 V20" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Jury Box" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="5" y="10" width="50" height="20" fill="none" stroke={theme.colors.text} />
                    <circle cx="15" cy="20" r="3" fill={theme.colors.text} opacity="0.3" />
                    <circle cx="30" cy="20" r="3" fill={theme.colors.text} opacity="0.3" />
                    <circle cx="45" cy="20" r="3" fill={theme.colors.text} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Appeal Brief" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,10 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} />
                    <path d="M30,30 L35,25 M30,30 L25,25 M30,30 V45" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Billing & Finance (NEW) --- */}
        <SectionTitle>7. Billing & Finance</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Billable Hour" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.success} strokeWidth="2" />
                    <path d="M30,30 L30,15" stroke={theme.colors.text} />
                    <path d="M30,30 L40,30" stroke={theme.colors.text} />
                    <text x="30" y="45" fontSize="10" fill={theme.colors.success} textAnchor="middle">$</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Trust Account" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,20 H50 V50 H10 Z" fill="none" stroke={theme.colors.text} />
                    <path d="M5,20 L30,5 L55,20" fill="none" stroke={theme.colors.text} />
                    <text x="30" y="40" fontSize="12" fill={theme.colors.text} textAnchor="middle">TRUST</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Retainer" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="20" width="40" height="20" fill={theme.colors.primary} opacity="0.2" />
                    <text x="30" y="34" fontSize="8" fontWeight="bold" fill={theme.colors.primary} textAnchor="middle">RETAINER</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Contingency %" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <text x="30" y="40" fontSize="24" fontWeight="bold" fill={theme.colors.success} textAnchor="middle">33%</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Expense" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="10" width="30" height="40" fill="white" stroke={theme.colors.text} />
                    <line x1="20" y1="20" x2="40" y2="20" stroke={theme.colors.text} opacity="0.5" />
                    <line x1="20" y1="30" x2="40" y2="30" stroke={theme.colors.text} opacity="0.5" />
                    <text x="30" y="45" fontSize="8" fill={theme.colors.error} textAnchor="middle">-$50</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Invoice Paid" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" fill="none" stroke={theme.colors.text} opacity="0.5" />
                    <rect x="5" y="25" width="50" height="15" fill={theme.colors.success} />
                    <text x="30" y="35" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">PAID</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Invoice Overdue" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" fill="none" stroke={theme.colors.text} opacity="0.5" />
                    <rect x="5" y="25" width="50" height="15" fill={theme.colors.error} />
                    <text x="30" y="35" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">OVERDUE</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Rate Card" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" rx="2" fill="none" stroke={theme.colors.text} />
                    <text x="30" y="25" fontSize="6" fill={theme.colors.text} textAnchor="middle">Partner</text>
                    <text x="30" y="45" fontSize="6" fill={theme.colors.text} textAnchor="middle">Assoc.</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Pro Bono" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill={theme.colors.text} opacity="0.1" />
                    <text x="30" y="34" fontSize="10" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">FREE</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Legal Aid" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M30,10 L15,25 H45 Z" fill={theme.colors.info} />
                    <rect x="25" y="25" width="10" height="20" fill={theme.colors.info} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Court Fees" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="20" width="30" height="20" fill="none" stroke={theme.colors.text} />
                    <path d="M15,20 L30,10 L45,20" fill="none" stroke={theme.colors.text} />
                    <text x="30" y="34" fontSize="8" fill={theme.colors.text} textAnchor="middle">$</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Settlement Check" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="10" width="70" height="25" fill={theme.colors.success} fillOpacity="0.1" stroke={theme.colors.success} />
                    <text x="40" y="26" fontSize="8" fontWeight="bold" fill={theme.colors.success} textAnchor="middle">PAY TO THE ORDER OF</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 8. Specialized Law (NEW) --- */}
        <SectionTitle>8. Specialized Law</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Last Will" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,10 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} />
                    <text x="30" y="25" fontSize="8" fontStyle="italic" fill={theme.colors.text} textAnchor="middle">Will</text>
                    <path d="M20,40 L40,40" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Trust Fund" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="20" width="30" height="25" rx="5" fill={theme.colors.success} opacity="0.2" />
                    <circle cx="30" cy="32" r="6" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Power of Attorney" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,10 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} />
                    <text x="30" y="30" fontSize="10" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">POA</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Custody" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="20" cy="20" r="5" fill={theme.colors.text} />
                    <circle cx="40" cy="20" r="5" fill={theme.colors.text} />
                    <circle cx="30" cy="40" r="4" fill={theme.colors.primary} />
                    <path d="M25,25 L30,35 L35,25" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Divorce" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="20" cy="30" r="8" fill="none" stroke={theme.colors.text} />
                    <circle cx="40" cy="30" r="8" fill="none" stroke={theme.colors.text} />
                    <line x1="30" y1="10" x2="30" y2="50" stroke={theme.colors.error} strokeWidth="2" strokeDasharray="4 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Handcuffs" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="20" cy="30" r="8" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <circle cx="40" cy="30" r="8" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <path d="M28,30 H32" stroke={theme.colors.text} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Police Badge" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M30,10 L45,20 V35 L30,50 L15,35 V20 Z" fill={theme.colors.text} opacity="0.1" stroke={theme.colors.text} />
                    <circle cx="30" cy="30" r="5" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Visa Stamp" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="5" width="50" height="30" rx="2" fill="none" stroke={theme.colors.info} />
                    <text x="30" y="24" fontSize="8" fontWeight="bold" fill={theme.colors.info} textAnchor="middle">VISA</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Passport" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="5" width="30" height="40" rx="2" fill={theme.colors.primary} />
                    <circle cx="20" cy="20" r="6" fill="white" opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Tax Audit" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,10 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} />
                    <circle cx="40" cy="40" r="12" fill={theme.colors.surface} stroke={theme.colors.warning} />
                    <path d="M36,44 L44,36" stroke={theme.colors.warning} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bankruptcy" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <text x="30" y="35" fontSize="24" fontWeight="bold" fill={theme.colors.text} opacity="0.2" textAnchor="middle">$</text>
                    <line x1="20" y1="20" x2="40" y2="40" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Medical Proxy" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="10" width="30" height="40" fill="none" stroke={theme.colors.text} />
                    <path d="M25,30 H35 M30,25 V35" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 9. Legal Tech & Ops (NEW) --- */}
        <SectionTitle>9. Legal Tech & Ops</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="AI Review" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,10 H45 V50 H15 Z" fill="none" stroke={theme.colors.primary} />
                    <path d="M45,10 L50,5 M45,50 L50,55" stroke={theme.colors.accent} strokeWidth="2" />
                    <text x="30" y="35" fontSize="8" fontWeight="bold" fill={theme.colors.primary} textAnchor="middle">AI</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Smart Contract" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,10 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} />
                    <path d="M20,20 H40" stroke={theme.colors.text} strokeDasharray="2 2" />
                    <path d="M20,30 H40" stroke={theme.colors.text} strokeDasharray="2 2" />
                    <circle cx="45" cy="50" r="5" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Blockchain" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="10" width="10" height="10" fill={theme.colors.text} opacity="0.5" />
                    <line x1="15" y1="15" x2="25" y2="15" stroke={theme.colors.text} />
                    <rect x="25" y="10" width="10" height="10" fill={theme.colors.text} opacity="0.5" />
                    <line x1="35" y1="15" x2="45" y2="15" stroke={theme.colors.text} />
                    <rect x="45" y="10" width="10" height="10" fill={theme.colors.text} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="E-Discovery" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,10 H30 V40 H10 Z" fill="none" stroke={theme.colors.text} opacity="0.5" />
                    <path d="M20,15 H40 V45 H20 Z" fill="none" stroke={theme.colors.text} opacity="0.5" />
                    <circle cx="40" cy="40" r="12" fill={theme.colors.surface} stroke={theme.colors.primary} />
                    <path d="M36,36 L44,44" stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Clause Lib" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="10" width="40" height="40" rx="2" fill="none" stroke={theme.colors.text} />
                    <line x1="20" y1="10" x2="20" y2="50" stroke={theme.colors.text} />
                    <line x1="25" y1="20" x2="45" y2="20" stroke={theme.colors.text} />
                    <line x1="25" y1="30" x2="45" y2="30" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Conflict Check" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="20" cy="30" r="10" fill={theme.colors.error} opacity="0.5" />
                    <circle cx="40" cy="30" r="10" fill={theme.colors.error} opacity="0.5" />
                    <path d="M30,20 V40" stroke={theme.colors.surface} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Virtual Court" centered>
                <svg viewBox="0 0 60 50" className="w-16 h-14">
                    <rect x="10" y="5" width="40" height="30" rx="2" fill={theme.colors.text} />
                    <polygon points="15,45 25,35 35,45" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Citation" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <text x="20" y="25" fontSize="20" fontWeight="bold" fill={theme.colors.text} textAnchor="middle">§</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Doc Assembly" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="10" width="30" height="40" fill="none" stroke={theme.colors.text} />
                    <path d="M20,50 L20,55 L40,55 L40,50" stroke={theme.colors.primary} fill="none" />
                    <circle cx="30" cy="30" r="5" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Matter Intake" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,20 H50 V40 L30,50 L10,40 Z" fill="none" stroke={theme.colors.text} />
                    <path d="M30,10 V30" stroke={theme.colors.success} strokeWidth="2" markerEnd="url(#arrow)" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 10. Jurisdiction & Venues (NEW) --- */}
        <SectionTitle>10. Jurisdiction & Venues</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Supreme Court" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="10" y="30" width="40" height="20" fill={theme.colors.text} opacity="0.2" />
                    <path d="M10,30 L30,10 L50,30" fill={theme.colors.text} opacity="0.5" />
                    <rect x="15" y="30" width="5" height="20" fill={theme.colors.text} />
                    <rect x="27.5" y="30" width="5" height="20" fill={theme.colors.text} />
                    <rect x="40" y="30" width="5" height="20" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Federal Court" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,30 H45 V50 H15 Z" fill="none" stroke={theme.colors.text} />
                    <path d="M15,30 L30,15 L45,30" fill="none" stroke={theme.colors.text} />
                    <circle cx="30" cy="25" r="3" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="International" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.text} />
                    <path d="M10,30 H50" stroke={theme.colors.text} opacity="0.3" />
                    <path d="M30,10 V50" stroke={theme.colors.text} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Arbitration" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="20" y="20" width="20" height="20" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <circle cx="10" cy="30" r="5" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="50" cy="30" r="5" fill={theme.colors.text} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Law Library" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="10" width="5" height="40" fill={theme.colors.text} />
                    <rect x="22" y="12" width="5" height="38" fill={theme.colors.text} opacity="0.8" />
                    <rect x="29" y="10" width="5" height="40" fill={theme.colors.text} />
                    <rect x="36" y="15" width="5" height="35" fill={theme.colors.text} opacity="0.8" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Prison" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="15" y="15" width="30" height="30" fill="none" stroke={theme.colors.text} />
                    <line x1="20" y1="15" x2="20" y2="45" stroke={theme.colors.text} />
                    <line x1="30" y1="15" x2="30" y2="45" stroke={theme.colors.text} />
                    <line x1="40" y1="15" x2="40" y2="45" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
