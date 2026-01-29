
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const SecurityGalleryTab: React.FC = () => {
  const { theme, strokeProps, layoutProps, primaryFill, textFill, surfaceFill, faintFill, textStyle } = useSvgTheme();

  const errorStroke = { ...strokeProps, stroke: theme.colors.error };
  const warningStroke = { ...strokeProps, stroke: theme.colors.warning };
  const successStroke = { ...strokeProps, stroke: theme.colors.success };
  
  const errorFill = { fill: theme.colors.error, stroke: 'none' };
  const warningFill = { fill: theme.colors.warning, stroke: 'none' };
  const successFill = { fill: theme.colors.success, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Security & Defense (115 Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Visual language for cybersecurity, threat modeling, network defense, compliance, and zero trust architectures.
        </p>

        {/* --- 1. Network Defense --- */}
        <SectionTitle>1. Network Defense</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Firewall" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,20 H50 V50 H10 Z" fill="none" {...errorStroke} strokeWidth="2" />
                    <line x1="10" y1="30" x2="50" y2="30" {...errorStroke} strokeWidth="1" />
                    <line x1="10" y1="40" x2="50" y2="40" {...errorStroke} strokeWidth="1" />
                    <line x1="20" y1="20" x2="20" y2="30" {...errorStroke} />
                    <line x1="40" y1="20" x2="40" y2="30" {...errorStroke} />
                    <line x1="30" y1="30" x2="30" y2="40" {...errorStroke} />
                    <line x1="20" y1="40" x2="20" y2="50" {...errorStroke} />
                    <line x1="40" y1="40" x2="40" y2="50" {...errorStroke} />
                    <path d="M8,20 L8,15 L12,10 L16,15 L20,10 L24,15 L28,10 L32,15 L36,10 L40,15 L44,10 L48,15 L52,20" fill="none" {...warningStroke} />
                </svg>
            </GalleryItem>
            <GalleryItem title="WAF" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,10 H45 V40 H15 Z" {...layoutProps} />
                    <path d="M15,15 H45" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M30,5 L50,15 V35 C50,45 30,55 30,55 C30,55 10,45 10,35 V15 L30,5 Z" fill={theme.colors.primary} fillOpacity="0.3" stroke={theme.colors.primary} />
                    <text x="30" y="35" fontSize="8" fontWeight="bold" textAnchor="middle" fill={theme.colors.primary}>HTTP</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="VPN Tunnel" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <path d="M10,20 Q40,5 70,20" fill="none" {...successStroke} strokeWidth="3" strokeDasharray="4 2" />
                    <path d="M10,20 Q40,35 70,20" fill="none" {...successStroke} strokeWidth="3" strokeDasharray="4 2" />
                    <rect x="35" y="15" width="10" height="10" rx="2" {...surfaceFill} {...successStroke} />
                    <path d="M40,15 V12 A2,2 0 0,0 36,12 V15" fill="none" {...successStroke} />
                </svg>
            </GalleryItem>
            <GalleryItem title="IDS Sensor" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,30 Q30,10 50,30 Q30,50 10,30" fill="none" {...strokeProps} />
                    <circle cx="30" cy="30" r="10" {...faintFill} />
                    <circle cx="30" cy="30" r="4" {...primaryFill} />
                    <path d="M30,5 V15 M30,45 V55 M5,30 H15 M45,30 H55" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Proxy" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="30" y="5" width="20" height="30" rx="2" {...layoutProps} />
                    <line x1="10" y1="20" x2="30" y2="20" {...strokeProps} />
                    <line x1="50" y1="20" x2="70" y2="20" {...strokeProps} />
                    <path d="M25,20 L22,17 M25,20 L22,23" {...strokeProps} />
                    <path d="M65,20 L68,17 M65,20 L68,23" {...strokeProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="DMZ" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <line x1="20" y1="0" x2="20" y2="40" {...errorStroke} strokeDasharray="4 2" />
                    <line x1="60" y1="0" x2="60" y2="40" {...successStroke} strokeDasharray="4 2" />
                    <rect x="30" y="10" width="20" height="20" rx="2" {...layoutProps} />
                    <text x="40" y="23" {...textStyle}>SRV</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="DDoS Shield" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M30,5 L50,15 V35 C50,45 30,55 30,55 C30,55 10,45 10,35 V15 L30,5 Z" {...primaryFill} />
                    <path d="M10,10 L20,20 M5,20 L15,25 M10,40 L20,35" stroke={theme.colors.text} strokeOpacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Secure LB" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="25" y="5" width="10" height="10" rx="1" {...strokeProps} fill="none" />
                    <path d="M30,15 V25 M30,25 L15,35 M30,25 L45,35" {...strokeProps} />
                    <rect x="10" y="35" width="10" height="10" rx="1" {...strokeProps} fill="none" />
                    <rect x="40" y="35" width="10" height="10" rx="1" {...strokeProps} fill="none" />
                    <rect x="28" y="20" width="4" height="6" {...successFill} rx="1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Identity & Access --- */}
        <SectionTitle>2. Identity & Access</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="User Identity" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="15" r="5" {...textFill} />
                    <path d="M10,35 Q20,25 30,35" stroke={theme.colors.text} fill="none" strokeWidth="2" />
                    <rect x="22" y="25" width="12" height="8" rx="1" {...surfaceFill} stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Admin Root" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,35 Q20,25 30,35" stroke={theme.colors.text} fill="none" strokeWidth="2" />
                    <circle cx="20" cy="15" r="5" {...textFill} />
                    <path d="M15,5 L17,10 L20,6 L23,10 L25,5 L25,12 H15 Z" {...warningFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="MFA Token" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-14">
                    <rect x="5" y="10" width="30" height="40" rx="4" {...textFill} />
                    <rect x="8" y="15" width="24" height="20" {...surfaceFill} />
                    <text x="20" y="28" fontSize="8" fontWeight="bold" textAnchor="middle" fill={theme.colors.primary}>492</text>
                    <circle cx="20" cy="42" r="3" {...surfaceFill} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Biometric" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,20 Q20,5 30,20 M15,25 Q20,15 25,25 M12,30 Q20,35 28,30" fill="none" {...successStroke} strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="5" y="5" width="30" height="30" rx="4" {...strokeProps} fill="none" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="SSO Badge" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="5" y="5" width="50" height="20" rx="4" fill={theme.colors.info} fillOpacity="0.1" stroke={theme.colors.info} strokeWidth="1" />
                    <text x="30" y="18" fontSize="10" fontWeight="bold" textAnchor="middle" fill={theme.colors.info} dominantBaseline="middle">SSO</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Role Group" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <circle cx="20" cy="20" r="8" {...faintFill} />
                    <circle cx="40" cy="20" r="8" {...faintFill} />
                    <circle cx="30" cy="20" r="8" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="API Key" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="15" cy="20" r="6" stroke={theme.colors.warning} fill="none" strokeWidth="2" />
                    <rect x="20" y="18" width="12" height="4" {...warningFill} />
                    <rect x="24" y="22" width="4" height="4" {...warningFill} />
                    <rect x="28" y="22" width="4" height="6" {...warningFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Certificate" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,5 H30 L30,35 L20,30 L10,35 Z" {...layoutProps} />
                    <circle cx="20" cy="20" r="4" fill={theme.colors.accent} opacity="0.5" />
                    <path d="M18,25 L20,30 L22,25" fill={theme.colors.accent} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. Threats & Vulnerabilities --- */}
        <SectionTitle>3. Threats & Vulnerabilities</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Virus" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="8" {...errorFill} />
                    <line x1="20" y1="12" x2="20" y2="6" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                    <line x1="20" y1="28" x2="20" y2="34" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="20" x2="6" y2="20" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                    <line x1="28" y1="20" x2="34" y2="20" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                    <line x1="14" y1="14" x2="10" y2="10" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                    <line x1="26" y1="26" x2="30" y2="30" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                    <line x1="14" y1="26" x2="10" y2="30" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                    <line x1="26" y1="14" x2="30" y2="10" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Phishing" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 V15" {...strokeProps} />
                    <path d="M20,15 C20,25 30,25 30,15" fill="none" {...strokeProps} strokeWidth="1.5" />
                    <rect x="5" y="25" width="20" height="12" rx="1" {...layoutProps} />
                    <path d="M5,25 L15,32 L25,25" fill="none" {...strokeProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Ransomware" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="5" width="20" height="30" fill={theme.colors.error} opacity="0.2" />
                    <rect x="15" y="15" width="10" height="8" rx="1" {...errorFill} />
                    <path d="M17,15 V12 A3,3 0 0,1 23,12 V15" stroke={theme.colors.error} fill="none" />
                    <text x="20" y="32" fontSize="6" fontWeight="bold" textAnchor="middle" fill={theme.colors.error}>$$$</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="SQL Injection" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,10 A10,3 0 0,1 50,10 A10,3 0 0,1 10,10" fill="none" {...strokeProps} />
                    <path d="M10,10 V30 A10,3 0 0,0 50,30 V10" fill="none" {...strokeProps} />
                    <path d="M40,20 L55,25 L40,30" stroke={theme.colors.error} fill="none" strokeWidth="2" />
                    <line x1="20" y1="25" x2="55" y2="25" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="XSS Script" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="5" width="50" height="30" rx="2" {...layoutProps} />
                    <rect x="5" y="5" width="50" height="8" rx="2" {...faintFill} />
                    <text x="10" y="25" fontSize="8" fontFamily="monospace" fill={theme.colors.error}>&lt;script&gt;</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Bot" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="12" width="20" height="16" rx="2" {...textFill} />
                    <circle cx="15" cy="20" r="2" {...errorFill} />
                    <circle cx="25" cy="20" r="2" {...errorFill} />
                    <line x1="15" y1="24" x2="25" y2="24" stroke={theme.colors.surface} />
                    <line x1="20" y1="12" x2="20" y2="8" stroke={theme.colors.text} />
                    <circle cx="20" cy="7" r="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Spyware" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,20 Q20,5 35,20" fill="none" {...strokeProps} />
                    <path d="M5,20 Q20,35 35,20" fill="none" {...strokeProps} />
                    <circle cx="20" cy="20" r="5" {...errorFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Trojan" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,30 L10,15 L20,10 L30,15 L30,30 Z" {...layoutProps} />
                    <path d="M15,20 L25,25 M25,20 L15,25" stroke={theme.colors.error} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Encryption & Crypto --- */}
        <SectionTitle>4. Encryption & Crypto</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Public Key" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="15" cy="20" r="6" stroke={theme.colors.success} fill="none" strokeWidth="2" />
                    <rect x="20" y="18" width="12" height="4" {...successFill} />
                    <rect x="28" y="22" width="4" height="4" {...successFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Private Key" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="15" cy="20" r="6" {...textFill} />
                    <rect x="20" y="18" width="12" height="4" {...textFill} />
                    <rect x="28" y="22" width="4" height="4" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Encrypted Vol" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,10 H30 V30 H10 Z" {...layoutProps} />
                    <path d="M10,15 H30 M10,20 H30 M10,25 H30" stroke={theme.colors.text} opacity="0.2" />
                    <rect x="16" y="16" width="8" height="8" rx="1" {...successFill} />
                    <path d="M18,16 V14 A2,2 0 0,1 22,14 V16" stroke={theme.colors.success} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hash" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="10" y="10" width="80" height="20" rx="4" {...faintFill} />
                    <text x="50" y="22" {...textStyle} fontFamily="monospace">#a3f9...</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Digital Sig" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="5" width="50" height="30" rx="2" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M10,30 Q20,20 30,30 T50,30" stroke={theme.colors.primary} fill="none" />
                    <line x1="10" y1="32" x2="50" y2="32" stroke={theme.colors.text} strokeOpacity="0.5" />
                    <circle cx="45" cy="15" r="5" stroke={theme.colors.text} fill="none" opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="SSL/TLS" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="10" y="10" width="60" height="20" rx="4" fill={theme.colors.success} fillOpacity="0.1" stroke={theme.colors.success} />
                    <path d="M20,20 L25,25 L35,15" stroke={theme.colors.success} fill="none" strokeWidth="2" />
                    <text x="50" y="23" fontSize="8" fontWeight="bold" fill={theme.colors.success}>HTTPS</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Secure Vault" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="5" width="30" height="30" rx="2" {...textFill} />
                    <circle cx="20" cy="20" r="8" stroke={theme.colors.surface} strokeWidth="2" fill="none" />
                    <line x1="20" y1="20" x2="24" y2="16" stroke={theme.colors.surface} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hardware Token" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="5" y="10" width="40" height="10" rx="2" {...textFill} />
                    <rect x="45" y="12" width="10" height="6" {...textFill} opacity="0.5" />
                    <circle cx="10" cy="15" r="2" {...successFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. SecOps & Monitoring --- */}
        <SectionTitle>5. SecOps & Monitoring</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="SIEM Console" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="2" y="2" width="56" height="36" rx="2" {...layoutProps} />
                    <rect x="5" y="5" width="20" height="10" {...primaryFill} opacity="0.2" />
                    <rect x="30" y="5" width="20" height="10" {...faintFill} />
                    <rect x="5" y="20" width="45" height="15" {...faintFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Incident" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L35,35 H5 Z" fill={theme.colors.warning} stroke={theme.colors.warning} strokeLinejoin="round" />
                    <path d="M20,15 V25" stroke={theme.colors.surface} strokeWidth="2" />
                    <circle cx="20" cy="30" r="1.5" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Security Alert" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,30 L10,32 H30 V30 M20,10 V8" {...strokeProps} />
                    <path d="M20,10 Q30,10 30,20 V30 H10 V20 Q10,10 20,10" fill="none" {...strokeProps} />
                    <circle cx="30" cy="10" r="4" {...errorFill} stroke={theme.colors.surface} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Log Stream" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="80" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="10" y="20" width="60" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <rect x="10" y="30" width="70" height="6" rx="1" fill={theme.colors.error} opacity="0.2" />
                    <rect x="10" y="40" width="80" height="6" rx="1" fill={theme.colors.text} opacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Patch Mgmt" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="10" width="20" height="20" rx="2" {...layoutProps} />
                    <path d="M8,15 L32,25 M32,15 L8,25" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="18" y="18" width="4" height="4" {...successFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Vuln Scan" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="18" cy="18" r="10" fill="none" {...strokeProps} strokeWidth="2" />
                    <line x1="26" y1="26" x2="34" y2="34" {...strokeProps} strokeWidth="2" />
                    <path d="M15,15 L21,21 M21,15 L15,21" stroke={theme.colors.error} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Threat Radar" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" {...faintFill} stroke={theme.colors.text} />
                    <circle cx="20" cy="20" r="10" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="20" y1="20" x2="35" y2="20" stroke={theme.colors.success} />
                    <circle cx="30" cy="15" r="2" {...errorFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Analyst" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="8" {...faintFill} />
                    <path d="M12,20 C12,10 28,10 28,20" stroke={theme.colors.text} fill="none" />
                    <line x1="28" y1="20" x2="28" y2="24" stroke={theme.colors.text} />
                    <circle cx="28" cy="24" r="2" {...textFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Architecture & Zones --- */}
        <SectionTitle>6. Architecture & Zones</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Bastion Host" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-14">
                    <path d="M5,20 L10,15 L15,20 L20,15 L25,20 L30,15 L35,20 V55 H5 Z" {...textFill} />
                    <rect x="15" y="30" width="10" height="25" rx="5" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Air Gap" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="10" width="15" height="20" {...layoutProps} />
                    <rect x="40" y="10" width="15" height="20" {...layoutProps} />
                    <line x1="22" y1="20" x2="28" y2="20" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                    <line x1="32" y1="20" x2="38" y2="20" stroke={theme.colors.error} strokeWidth="2" strokeLinecap="round" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Honeypot" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,10 H30 V30 C30,35 10,35 10,30 Z" fill={theme.colors.warning} fillOpacity="0.2" stroke={theme.colors.warning} />
                    <path d="M10,10 Q20,0 30,10" fill="none" stroke={theme.colors.warning} />
                    <path d="M15,20 L25,20" stroke={theme.colors.warning} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Trusted Zone" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="25" stroke={theme.colors.success} strokeDasharray="4 2" fill={theme.colors.success} fillOpacity="0.05" />
                    <path d="M20,30 L28,38 L40,22" fill="none" stroke={theme.colors.success} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Untrusted Zone" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="25" stroke={theme.colors.error} strokeDasharray="4 2" fill={theme.colors.error} fillOpacity="0.05" />
                    <path d="M20,20 L40,40 M40,20 L20,40" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sandbox" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="10" width="30" height="25" fill="#FCD34D" fillOpacity="0.3" stroke="#FCD34D" />
                    <path d="M10,10 L15,35 M30,10 L25,35" stroke="#FCD34D" opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Micro-Segment" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="5" y="5" width="22" height="22" rx="2" {...layoutProps} />
                    <rect x="33" y="5" width="22" height="22" rx="2" {...layoutProps} />
                    <rect x="5" y="33" width="22" height="22" rx="2" {...layoutProps} />
                    <rect x="33" y="33" width="22" height="22" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Security Gateway" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,35 V15 C10,5 30,5 30,15 V35" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                    <rect x="15" y="35" width="10" height="2" {...primaryFill} />
                    <circle cx="20" cy="10" r="2" {...primaryFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Physical & Device Security --- */}
        <SectionTitle>7. Physical & Device Security</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="CCTV" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="15" width="15" height="10" {...textFill} />
                    <polygon points="25,20 35,12 35,28" {...textFill} />
                    <line x1="10" y1="20" x2="5" y2="25" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Locked Rack" centered>
                <svg viewBox="0 0 30 50" className="w-10 h-14">
                    <rect x="5" y="5" width="20" height="40" rx="2" {...textFill} />
                    <circle cx="15" cy="20" r="1" {...successFill} />
                    <circle cx="15" cy="25" r="1" {...successFill} />
                    <circle cx="15" cy="30" r="1" {...successFill} />
                    <rect x="12" y="35" width="6" height="8" rx="1" {...surfaceFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Smart Card" centered>
                <svg viewBox="0 0 50 30" className="w-14 h-10">
                    <rect x="5" y="5" width="40" height="25" rx="2" {...layoutProps} />
                    <rect x="10" y="12" width="8" height="6" fill="#FCD34D" />
                </svg>
            </GalleryItem>
            <GalleryItem title="USB Key" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="20" y="10" width="30" height="10" rx="2" {...textFill} />
                    <rect x="10" y="12" width="10" height="6" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Keypad" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="5" width="30" height="40" rx="2" {...layoutProps} />
                    <rect x="10" y="10" width="6" height="6" rx="1" fill={theme.colors.text} opacity="0.2"/>
                    <rect x="18" y="10" width="6" height="6" rx="1" fill={theme.colors.text} opacity="0.2"/>
                    <rect x="26" y="10" width="6" height="6" rx="1" fill={theme.colors.text} opacity="0.2"/>
                    <rect x="10" y="18" width="6" height="6" rx="1" fill={theme.colors.text} opacity="0.2"/>
                    <rect x="18" y="18" width="6" height="6" rx="1" fill={theme.colors.text} opacity="0.2"/>
                    <rect x="26" y="18" width="6" height="6" rx="1" fill={theme.colors.text} opacity="0.2"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Faraday Cage" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="5" y="5" width="50" height="50" fill="none" stroke={theme.colors.text} />
                    <path d="M5,15 H55 M5,25 H55 M5,35 H55 M5,45 H55" stroke={theme.colors.text} opacity="0.2" />
                    <path d="M15,5 V55 M25,5 V55 M35,5 V55 M45,5 V55" stroke={theme.colors.text} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Shredder" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="5" width="20" height="15" fill={theme.colors.text} opacity="0.2" />
                    <rect x="5" y="20" width="30" height="15" {...textFill} />
                    <line x1="12" y1="20" x2="12" y2="35" stroke={theme.colors.surface} />
                    <line x1="20" y1="20" x2="20" y2="35" stroke={theme.colors.surface} />
                    <line x1="28" y1="20" x2="28" y2="35" stroke={theme.colors.surface} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 8. Cloud Security --- */}
        <SectionTitle>8. Cloud Security</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Cloud WAF" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,25 Q15,15 30,25 T50,20" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                    <path d="M15,10 L25,30 M35,10 L45,30" stroke={theme.colors.text} strokeWidth="1" opacity="0.3" />
                    <circle cx="30" cy="20" r="15" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="IAM Policy" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="5" width="30" height="40" rx="2" {...layoutProps} />
                    <circle cx="20" cy="20" r="5" {...faintFill} />
                    <rect x="10" y="30" width="20" height="2" {...textFill} />
                    <rect x="10" y="35" width="15" height="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="VPC Peering" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M10,15 Q20,5 30,15 T50,15" fill="none" stroke={theme.colors.primary} strokeDasharray="3 3" />
                    <circle cx="10" cy="15" r="5" {...layoutProps} />
                    <circle cx="50" cy="15" r="5" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Security Group" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="5" y="5" width="22" height="22" rx="2" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" />
                    <rect x="33" y="5" width="22" height="22" rx="2" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" />
                    <rect x="5" y="33" width="22" height="22" rx="2" fill="none" stroke={theme.colors.text} strokeDasharray="2 2" />
                    <path d="M44,38 V48 H38 V44 H48 V38 H44 Z" fill={theme.colors.text} /> 
                </svg>
            </GalleryItem>
            <GalleryItem title="KMS Key" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,20 Q20,10 30,20" fill="none" stroke={theme.colors.primary} />
                    <path d="M15,20 L25,20 L25,25 L22,25" fill="none" stroke={theme.colors.text} />
                    <circle cx="15" cy="20" r="3" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cloud Trail" centered>
                <svg viewBox="0 0 50 30" className="w-14 h-8">
                    <path d="M10,15 Q25,5 40,15" fill="none" stroke={theme.colors.text} opacity="0.3" />
                    <circle cx="15" cy="12" r="1" {...textFill} />
                    <circle cx="25" cy="10" r="1" {...textFill} />
                    <circle cx="35" cy="12" r="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Container Scan" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="10" width="20" height="20" fill="none" stroke={theme.colors.primary} />
                    <line x1="5" y1="20" x2="35" y2="20" stroke={theme.colors.success} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Serverless Shield" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L35,10 V20 C35,30 20,35 20,35 C20,35 5,30 5,20 V10 L20,5" fill="none" stroke={theme.colors.text} />
                    <text x="20" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill={theme.colors.warning}>λ</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 9. Compliance & GRC --- */}
        <SectionTitle>9. Compliance & GRC</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Audit Log" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="5" width="30" height="40" {...layoutProps} />
                    <line x1="10" y1="15" x2="30" y2="15" stroke={theme.colors.text} opacity="0.3" />
                    <line x1="10" y1="25" x2="30" y2="25" stroke={theme.colors.text} opacity="0.3" />
                    <circle cx="25" cy="35" r="8" {...layoutProps} stroke={theme.colors.primary} />
                    <line x1="29" y1="39" x2="33" y2="43" stroke={theme.colors.primary} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Compliance Check" centered>
                <svg viewBox="0 0 80 30" className="w-20 h-8">
                    <rect x="5" y="5" width="70" height="20" rx="4" fill="none" stroke={theme.colors.success} />
                    <text x="40" y="19" textAnchor="middle" fontSize="10" fontWeight="bold" fill={theme.colors.success}>PASS</text>
                    <path d="M15,15 L18,18 L22,12" stroke={theme.colors.success} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Policy Doc" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <path d="M10,5 H30 V45 H10 Z" {...layoutProps} />
                    <circle cx="30" cy="15" r="5" fill={theme.colors.accent} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Risk Assessment" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <polygon points="20,5 35,35 5,35" fill={theme.colors.warning} stroke={theme.colors.text} />
                    <text x="20" y="30" fontSize="16" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>!</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="GDPR Badge" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill={theme.colors.info} />
                    <text x="30" y="34" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">GDPR</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="SOC2 Seal" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="30" cy="30" r="20" fill="none" stroke={theme.colors.text} strokeWidth="2" strokeDasharray="2 2" />
                    <text x="30" y="28" textAnchor="middle" fontSize="8" fontWeight="bold" fill={theme.colors.text}>SOC</text>
                    <text x="30" y="38" textAnchor="middle" fontSize="6" fill={theme.colors.text}>TYPE 2</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Class" centered>
                <svg viewBox="0 0 80 24" className="w-24 h-8">
                    <rect x="5" y="2" width="70" height="20" rx="4" fill={theme.colors.error} fillOpacity="0.1" stroke={theme.colors.error} />
                    <text x="40" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill={theme.colors.error}>CONFIDENTIAL</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Incident Report" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="5" width="30" height="40" {...layoutProps} />
                    <path d="M15,20 L25,30 M25,20 L15,30" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 10. Application Security --- */}
        <SectionTitle>10. Application Security</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Input Validation" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="5" y="5" width="90" height="30" rx="2" fill="none" stroke={theme.colors.success} />
                    <text x="15" y="23" fontSize="8" fill={theme.colors.text}>user_input</text>
                    <path d="M85,15 L88,25 L95,10" stroke={theme.colors.success} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="CSRF Token" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="5" y="5" width="90" height="20" rx="2" fill={theme.colors.text} fillOpacity="0.05" stroke={theme.colors.text} strokeWidth="1" strokeDasharray="2 2" />
                    <text x="50" y="18" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={theme.colors.text} opacity="0.6">_csrf_token</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Rate Limiter" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <path d="M5,20 A15,15 0 0,1 35,20" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="20" y1="20" x2="30" y2="10" stroke={theme.colors.error} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Header Security" centered>
                <svg viewBox="0 0 80 20" className="w-20 h-6">
                    <rect x="5" y="2" width="70" height="16" rx="2" fill="#1F2937" />
                    <text x="40" y="13" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#34D399">&lt;H&gt; SECURE</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Cookie Secure" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="#FCD34D" />
                    <circle cx="28" cy="12" r="5" fill="white" stroke="#9CA3AF" />
                    <circle cx="28" cy="12" r="2" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Dependency Check" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <circle cx="10" cy="10" r="4" fill="gray" />
                    <line x1="15" y1="10" x2="45" y2="10" stroke="gray" />
                    <text x="50" y="14" fontSize="12" fontWeight="bold" fill="#F59E0B">?</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Code Analysis" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <text x="5" y="20" fontSize="10" fontFamily="monospace" fill={theme.colors.text}>&lt;/&gt;</text>
                    <circle cx="25" cy="25" r="8" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                    <line x1="30" y1="30" x2="35" y2="35" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="API Gateway" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,35 V15 C10,5 30,5 30,15 V35" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <rect x="18" y="25" width="4" height="6" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 11. Zero Trust --- */}
        <SectionTitle>11. Zero Trust Architecture</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Device Trust" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,45 H45 V25 H15 Z" {...layoutProps} />
                    <path d="M25,45 V50 H35 V45" stroke={theme.colors.text} />
                    <line x1="20" y1="50" x2="40" y2="50" stroke={theme.colors.text} />
                    <circle cx="45" cy="45" r="8" fill={theme.colors.success} stroke={theme.colors.surface} />
                    <path d="M42,45 L44,47 L48,43" stroke="white" fill="none" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Context Access" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <circle cx="15" cy="15" r="5" {...textFill} opacity="0.5" />
                    <circle cx="30" cy="15" r="5" {...textFill} opacity="0.5" />
                    <circle cx="45" cy="15" r="5" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Service Mesh" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <circle cx="15" cy="15" r="2" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="30" cy="15" r="2" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="45" cy="15" r="2" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="15" cy="30" r="2" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="30" cy="30" r="2" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="45" cy="30" r="2" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="15" cy="45" r="2" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="30" cy="45" r="2" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="45" cy="45" r="2" fill={theme.colors.text} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Least Privilege" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="15" r="6" {...textFill} />
                    <path d="M12,30 Q20,25 28,30" stroke={theme.colors.text} fill="none" />
                    <path d="M25,25 L35,35" stroke={theme.colors.warning} strokeWidth="2" />
                    <circle cx="35" cy="35" r="3" fill={theme.colors.warning} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Continuous Auth" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <path d="M5,10 C5,0 15,0 15,10 C15,20 25,20 25,10 C25,0 35,0 35,10" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Policy Engine" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="10" fill="none" stroke={theme.colors.text} strokeWidth="4" strokeDasharray="10 10" opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Trust Score" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" fill="none" stroke={theme.colors.success} strokeWidth="3" />
                    <text x="20" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill={theme.colors.text}>95</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Break Glass" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="5" y="5" width="50" height="20" rx="2" fill={theme.colors.error} fillOpacity="0.1" stroke={theme.colors.error} />
                    <rect x="5" y="5" width="50" height="4" fill={theme.colors.error} />
                    <text x="30" y="18" textAnchor="middle" fontSize="6" fontWeight="bold" fill={theme.colors.error}>EMERGENCY</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 12. Forensics & Investigation --- */}
        <SectionTitle>12. Forensics & Investigation</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Evidence Bag" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <path d="M10,10 H30 V45 H10 Z" fill="none" stroke={theme.colors.text} />
                    <path d="M10,15 H30" stroke={theme.colors.warning} strokeWidth="2" strokeDasharray="2 1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Timeline Analysis" centered>
                <svg viewBox="0 0 100 20" className="w-24 h-6">
                    <line x1="5" y1="10" x2="95" y2="10" stroke={theme.colors.text} strokeOpacity="0.5" />
                    <circle cx="25" cy="10" r="3" fill={theme.colors.error} />
                    <circle cx="75" cy="10" r="3" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Malware Sandbox" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="5" width="30" height="30" rx="4" fill="none" stroke={theme.colors.error} strokeWidth="1.5" strokeDasharray="4 2" />
                    <circle cx="20" cy="20" r="5" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Memory Dump" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="10" width="20" height="20" fill={theme.colors.text} opacity="0.8" />
                    <text x="12" y="24" fontSize="6" fontFamily="monospace" fill="white">0101</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Network Pcap" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <path d="M0,10 L5,5 L10,15 L15,8 L20,12 L25,2 L30,18 L35,10 L40,10" fill="none" stroke={theme.colors.primary} strokeWidth="1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Disk Image" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="8" y="12" width="24" height="16" rx="2" {...layoutProps} />
                    <circle cx="28" cy="20" r="4" stroke={theme.colors.text} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Chain of Custody" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <circle cx="10" cy="10" r="4" fill="none" stroke={theme.colors.text} />
                    <line x1="14" y1="10" x2="26" y2="10" stroke={theme.colors.text} />
                    <circle cx="30" cy="10" r="4" fill="none" stroke={theme.colors.text} />
                    <line x1="34" y1="10" x2="46" y2="10" stroke={theme.colors.text} />
                    <circle cx="50" cy="10" r="4" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Fingerprint Match" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,30 Q20,10 30,30" fill="none" stroke={theme.colors.text} strokeWidth="3" opacity="0.2" />
                    <path d="M15,30 Q20,15 25,30" fill="none" stroke={theme.colors.text} strokeWidth="3" opacity="0.2" />
                    <line x1="5" y1="20" x2="35" y2="20" stroke={theme.colors.success} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 13. Threat Intelligence --- */}
        <SectionTitle>13. Threat Intelligence</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="IOC Feed" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <text x="10" y="11" fontSize="4" fill={theme.colors.text}>IP</text>
                    <text x="60" y="11" fontSize="4" fill={theme.colors.error}>Malicious</text>
                    <rect x="5" y="15" width="70" height="8" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <text x="10" y="21" fontSize="4" fill={theme.colors.text}>Hash</text>
                    <text x="55" y="21" fontSize="4" fill={theme.colors.warning}>Suspicious</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Actor Profile" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.text} />
                    <path d="M13,28 Q20,35 27,28" stroke={theme.colors.surface} fill="none" strokeWidth="2" />
                    <circle cx="15" cy="18" r="2" fill={theme.colors.surface} />
                    <circle cx="25" cy="18" r="2" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Campaign Map" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.text} opacity="0.2" />
                    <circle cx="20" cy="20" r="10" fill="none" stroke={theme.colors.text} opacity="0.4" />
                    <line x1="20" y1="20" x2="30" y2="10" stroke={theme.colors.error} />
                    <circle cx="30" cy="10" r="2" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="TTP Matrix" centered>
                <svg viewBox="0 0 30 30" className="w-8 h-8">
                    {[0,1,2].map(r => [0,1,2].map(c => (
                        <rect key={`${r}-${c}`} x={c*10} y={r*10} width="9" height="9" fill={(r+c)%2 === 0 ? theme.colors.error : theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    )))}
                </svg>
            </GalleryItem>
            <GalleryItem title="Dark Web Monitor" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.text} />
                    <path d="M5,20 H35 M20,5 V35" stroke={theme.colors.surface} opacity="0.2" />
                    <circle cx="20" cy="20" r="10" stroke={theme.colors.surface} fill="none" opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Brand Protection" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L35,10 V20 C35,30 20,38 20,38 C20,38 5,30 5,20 V10 L20,5" fill={theme.colors.info} />
                    <path d="M20,10 L22,15 L27,15 L23,18 L24,23 L20,20 L16,23 L17,18 L13,15 L18,15 Z" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Attack Surface" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <path d="M2,18 C10,5 30,5 38,18" fill="none" stroke={theme.colors.error} strokeWidth="1" strokeDasharray="2 1" />
                    <circle cx="20" cy="18" r="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Vuln Feed" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="10" cy="30" r="3" fill={theme.colors.warning} />
                    <path d="M10,20 A10,10 0 0,1 20,30" fill="none" stroke={theme.colors.warning} strokeWidth="2" />
                    <path d="M10,10 A20,20 0 0,1 30,30" fill="none" stroke={theme.colors.warning} strokeWidth="2" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 14. User Awareness --- */}
        <SectionTitle>14. User Awareness</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Phishing Sim" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,10 H35 V30 H5 Z" {...layoutProps} />
                    <path d="M5,10 L20,20 L35,10" fill="none" stroke={theme.colors.text} />
                    <text x="32" y="8" fontSize="12" fontWeight="bold" fill={theme.colors.error}>?</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Training Module" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,10 H30 V35 H10 Z" {...primaryFill} opacity="0.2" />
                    <path d="M10,10 L15,5 H35 V30 L30,35" fill="none" stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Security Quiz" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="5" width="30" height="30" rx="4" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <text x="20" y="28" fontSize="20" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>?</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Report Button" centered>
                <svg viewBox="0 0 60 20" className="w-16 h-6">
                    <rect x="0" y="0" width="60" height="20" rx="2" fill={theme.colors.error} fillOpacity="0.1" />
                    <path d="M10,5 V15 M10,5 L18,8 L10,11" stroke={theme.colors.error} strokeWidth="1.5" />
                    <text x="25" y="14" fontSize="8" fontWeight="bold" fill={theme.colors.error}>REPORT</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Password Meter" centered>
                <svg viewBox="0 0 60 10" className="w-16 h-3">
                    <rect x="0" y="0" width="60" height="10" rx="5" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="0" y="0" width="40" height="10" rx="5" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="2FA Setup" centered>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                    <rect x="10" y="10" width="20" height="40" rx="2" {...strokeProps} fill="none" />
                    <circle cx="20" cy="45" r="2" {...textFill} />
                    <path d="M15,20 H25 M15,25 H25" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 15. Cryptographic Tools --- */}
        <SectionTitle>15. Cryptographic Tools</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Lockout Screen" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="18" width="20" height="15" rx="2" {...textFill} opacity="0.2" />
                    <path d="M15,18 V12 A5,5 0 0,1 25,12 V18" fill="none" stroke={theme.colors.text} strokeWidth="2" opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Shred File" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="0" width="30" height="40" fill={theme.colors.text} opacity="0.1" />
                    <path d="M5,40 L10,50 L15,40 L20,50 L25,40 L30,50 L35,40" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Encrypt Folder" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,10 H15 L20,5 H35 V35 H5 Z" fill={theme.colors.warning} />
                    <rect x="25" y="25" width="8" height="6" fill={theme.colors.text} />
                    <path d="M27,25 V23 A2,2 0 0,1 31,23 V25" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="VPN Connect" centered>
                <svg viewBox="0 0 40 20" className="w-12 h-6">
                    <rect x="0" y="0" width="40" height="20" rx="10" fill={theme.colors.success} />
                    <circle cx="30" cy="10" r="8" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Secure Chat" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,10 H35 V30 H15 L5,35 Z" {...layoutProps} />
                    <rect x="28" y="28" width="6" height="4" fill={theme.colors.text} />
                    <path d="M29,28 V26 A2,2 0 0,1 33,26 V28" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Anonymous" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" fill={theme.colors.text} />
                    <path d="M10,18 H30" stroke={theme.colors.surface} strokeWidth="4" />
                    <path d="M20,20 L15,30 H25 Z" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
