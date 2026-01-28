import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const SecurityGalleryTab: React.FC = () => {
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
        <SectionTitle style={{ marginTop: '1rem' }}>Security & Defense (55 Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Visual language for cybersecurity, threat modeling, and network defense architectures.
        </p>

        {/* --- 1. Network Defense --- */}
        <SectionTitle>1. Network Defense</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Firewall" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,20 H50 V50 H10 Z" fill="none" stroke={theme.colors.error} strokeWidth="2" />
                    <line x1="10" y1="30" x2="50" y2="30" stroke={theme.colors.error} strokeWidth="1.5" />
                    <line x1="10" y1="40" x2="50" y2="40" stroke={theme.colors.error} strokeWidth="1.5" />
                    <line x1="20" y1="20" x2="20" y2="30" stroke={theme.colors.error} />
                    <line x1="40" y1="20" x2="40" y2="30" stroke={theme.colors.error} />
                    <line x1="30" y1="30" x2="30" y2="40" stroke={theme.colors.error} />
                    <line x1="20" y1="40" x2="20" y2="50" stroke={theme.colors.error} />
                    <line x1="40" y1="40" x2="40" y2="50" stroke={theme.colors.error} />
                    <path d="M8,20 L8,15 L12,10 L16,15 L20,10 L24,15 L28,10 L32,15 L36,10 L40,15 L44,10 L48,15 L52,20" fill="none" stroke={theme.colors.warning} />
                </svg>
            </GalleryItem>
            <GalleryItem title="WAF" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M15,10 H45 V40 H15 Z" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M15,15 H45" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <path d="M30,5 L50,15 V35 C50,45 30,55 30,55 C30,55 10,45 10,35 V15 L30,5 Z" fill={theme.colors.primary} fillOpacity="0.3" stroke={theme.colors.primary} />
                    <text x="30" y="35" fontSize="8" fontWeight="bold" textAnchor="middle" fill={theme.colors.primary}>HTTP</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="VPN Tunnel" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <path d="M10,20 Q40,5 70,20" fill="none" stroke={theme.colors.success} strokeWidth="3" strokeDasharray="4 2" />
                    <path d="M10,20 Q40,35 70,20" fill="none" stroke={theme.colors.success} strokeWidth="3" strokeDasharray="4 2" />
                    <rect x="35" y="15" width="10" height="10" rx="2" fill={theme.colors.surface} stroke={theme.colors.success} />
                    <path d="M40,15 V12 A2,2 0 0,0 36,12 V15" fill="none" stroke={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="IDS Sensor" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,30 Q30,10 50,30 Q30,50 10,30" fill="none" stroke={theme.colors.text} />
                    <circle cx="30" cy="30" r="10" fill={theme.colors.text} fillOpacity="0.1" />
                    <circle cx="30" cy="30" r="4" {...primaryFill} />
                    <path d="M30,5 V15 M30,45 V55 M5,30 H15 M45,30 H55" stroke={theme.colors.primary} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Proxy" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <rect x="30" y="5" width="20" height="30" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M10,20 H30" stroke={theme.colors.text} markerEnd="url(#arrow)" />
                    <path d="M50,20 H70" stroke={theme.colors.text} markerEnd="url(#arrow)" />
                    <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill={theme.colors.text} /></marker></defs>
                </svg>
            </GalleryItem>
            <GalleryItem title="DMZ" centered>
                <svg viewBox="0 0 80 40" className="w-20 h-12">
                    <line x1="20" y1="0" x2="20" y2="40" stroke={theme.colors.error} strokeDasharray="4 2" />
                    <line x1="60" y1="0" x2="60" y2="40" stroke={theme.colors.success} strokeDasharray="4 2" />
                    <rect x="30" y="10" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <text x="40" y="22" fontSize="6" textAnchor="middle" fill={theme.colors.text}>SRV</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="DDoS Shield" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M30,5 L50,15 V35 C50,45 30,55 30,55 C30,55 10,45 10,35 V15 L30,5 Z" fill={theme.colors.primary} />
                    <path d="M10,10 L20,20 M5,20 L15,25 M10,40 L20,35" stroke={theme.colors.text} strokeOpacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Secure LB" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <rect x="25" y="5" width="10" height="10" rx="1" stroke={theme.colors.text} fill="none" />
                    <path d="M30,15 V25 M30,25 L15,35 M30,25 L45,35" stroke={theme.colors.text} />
                    <rect x="10" y="35" width="10" height="10" rx="1" stroke={theme.colors.text} fill="none" />
                    <rect x="40" y="35" width="10" height="10" rx="1" stroke={theme.colors.text} fill="none" />
                    <rect x="28" y="20" width="4" height="6" fill={theme.colors.success} rx="1" />
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
                    <rect x="22" y="25" width="12" height="8" rx="1" fill={theme.colors.surface} stroke={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Admin Root" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,35 Q20,25 30,35" stroke={theme.colors.text} fill="none" strokeWidth="2" />
                    <circle cx="20" cy="15" r="5" {...textFill} />
                    <path d="M15,5 L17,10 L20,6 L23,10 L25,5 L25,12 H15 Z" fill={theme.colors.warning} />
                </svg>
            </GalleryItem>
            <GalleryItem title="MFA Token" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-14">
                    <rect x="5" y="10" width="30" height="40" rx="4" fill={theme.colors.text} />
                    <rect x="8" y="15" width="24" height="20" fill={theme.colors.surface} />
                    <text x="20" y="28" fontSize="8" fontWeight="bold" textAnchor="middle" fill={theme.colors.primary}>492 101</text>
                    <circle cx="20" cy="42" r="3" fill={theme.colors.surface} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Biometric" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,20 Q20,5 30,20 M15,25 Q20,15 25,25 M12,30 Q20,35 28,30" fill="none" stroke={theme.colors.success} strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="5" y="5" width="30" height="30" rx="4" stroke={theme.colors.text} fill="none" strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="SSO Badge" centered>
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold border border-blue-200">SSO</div>
            </GalleryItem>
            <GalleryItem title="Role Group" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <circle cx="20" cy="20" r="8" fill={theme.colors.text} opacity="0.2" />
                    <circle cx="40" cy="20" r="8" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="30" cy="20" r="8" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="API Key" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="15" cy="20" r="6" stroke={theme.colors.warning} fill="none" strokeWidth="2" />
                    <rect x="20" y="18" width="12" height="4" fill={theme.colors.warning} />
                    <rect x="24" y="22" width="4" height="4" fill={theme.colors.warning} />
                    <rect x="28" y="22" width="4" height="6" fill={theme.colors.warning} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Certificate" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,5 H30 L30,35 L20,30 L10,35 Z" fill={theme.colors.surface} stroke={theme.colors.text} />
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
                    <circle cx="20" cy="20" r="8" fill={theme.colors.error} />
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
                    <path d="M20,5 V15" stroke={theme.colors.text} strokeWidth="1" />
                    <path d="M20,15 C20,25 30,25 30,15" stroke={theme.colors.text} fill="none" strokeWidth="1.5" />
                    <rect x="5" y="25" width="20" height="12" rx="1" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M5,25 L15,32 L25,25" fill="none" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Ransomware" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="5" width="20" height="30" fill={theme.colors.error} opacity="0.2" />
                    <rect x="15" y="15" width="10" height="8" rx="1" fill={theme.colors.error} />
                    <path d="M17,15 V12 A3,3 0 0,1 23,12 V15" stroke={theme.colors.error} fill="none" />
                    <text x="20" y="32" fontSize="6" fontWeight="bold" textAnchor="middle" fill={theme.colors.error}>$$$</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="SQL Injection" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,10 A10,3 0 0,1 50,10 A10,3 0 0,1 10,10" fill="none" stroke={theme.colors.text} />
                    <path d="M10,10 V30 A10,3 0 0,0 50,30 V10" fill="none" stroke={theme.colors.text} />
                    <path d="M40,20 L55,25 L40,30" stroke={theme.colors.error} fill="none" strokeWidth="2" />
                    <line x1="20" y1="25" x2="55" y2="25" stroke={theme.colors.error} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="XSS Script" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="5" width="50" height="30" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <rect x="5" y="5" width="50" height="8" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <text x="10" y="25" fontSize="8" fontFamily="monospace" fill={theme.colors.error}>&lt;script&gt;</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Bot" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="12" width="20" height="16" rx="2" fill={theme.colors.text} />
                    <circle cx="15" cy="20" r="2" fill={theme.colors.error} />
                    <circle cx="25" cy="20" r="2" fill={theme.colors.error} />
                    <line x1="15" y1="24" x2="25" y2="24" stroke={theme.colors.surface} />
                    <line x1="20" y1="12" x2="20" y2="8" stroke={theme.colors.text} />
                    <circle cx="20" cy="7" r="1" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Spyware" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,20 Q20,5 35,20" fill="none" stroke={theme.colors.text} />
                    <path d="M5,20 Q20,35 35,20" fill="none" stroke={theme.colors.text} />
                    <circle cx="20" cy="20" r="5" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Trojan" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,30 L10,15 L20,10 L30,15 L30,30 Z" fill={theme.colors.surface} stroke={theme.colors.text} />
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
                    <rect x="20" y="18" width="12" height="4" fill={theme.colors.success} />
                    <rect x="28" y="22" width="4" height="4" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Private Key" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="15" cy="20" r="6" fill={theme.colors.text} />
                    <rect x="20" y="18" width="12" height="4" fill={theme.colors.text} />
                    <rect x="28" y="22" width="4" height="4" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Encrypted Vol" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,10 H30 V30 H10 Z" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M10,15 H30 M10,20 H30 M10,25 H30" stroke={theme.colors.text} opacity="0.2" />
                    <rect x="16" y="16" width="8" height="8" rx="1" fill={theme.colors.success} />
                    <path d="M18,16 V14 A2,2 0 0,1 22,14 V16" stroke={theme.colors.success} fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hash" centered>
                <div className="font-mono text-[8px] bg-gray-100 p-1 rounded w-full text-center">
                    #a3f9...
                </div>
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
                <div className="flex items-center gap-1 text-green-600 font-bold text-xs border border-green-200 bg-green-50 px-2 py-1 rounded">
                    <Icons.Lock size="sm" className="w-3"/> HTTPS
                </div>
            </GalleryItem>
            <GalleryItem title="Secure Vault" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="5" width="30" height="30" rx="2" fill={theme.colors.text} />
                    <circle cx="20" cy="20" r="8" stroke={theme.colors.surface} strokeWidth="2" fill="none" />
                    <line x1="20" y1="20" x2="24" y2="16" stroke={theme.colors.surface} strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hardware Token" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="5" y="10" width="40" height="10" rx="2" fill={theme.colors.text} />
                    <rect x="45" y="12" width="10" height="6" fill={theme.colors.text} opacity="0.5" />
                    <circle cx="10" cy="15" r="2" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. SecOps & Monitoring --- */}
        <SectionTitle>5. SecOps & Monitoring</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="SIEM Console" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="2" y="2" width="56" height="36" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <rect x="5" y="5" width="20" height="10" fill={theme.colors.primary} opacity="0.2" />
                    <rect x="30" y="5" width="20" height="10" fill={theme.colors.secondary} opacity="0.2" />
                    <rect x="5" y="20" width="45" height="15" fill={theme.colors.text} opacity="0.1" />
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
                <div className="relative">
                    <Icons.Bell size="lg" style={{ color: theme.colors.text }}/>
                    <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Log Stream" centered>
                <div className="w-full px-4 flex flex-col gap-1 opacity-60">
                    <div className="h-1 w-full bg-gray-300 rounded"></div>
                    <div className="h-1 w-3/4 bg-gray-300 rounded"></div>
                    <div className="h-1 w-5/6 bg-red-300 rounded"></div>
                    <div className="h-1 w-full bg-gray-300 rounded"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Patch Mgmt" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="10" width="20" height="20" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <path d="M8,15 L32,25 M32,15 L8,25" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="18" y="18" width="4" height="4" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Vuln Scan" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="18" cy="18" r="10" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <line x1="26" y1="26" x2="34" y2="34" stroke={theme.colors.text} strokeWidth="2" />
                    <path d="M15,15 L21,21 M21,15 L15,21" stroke={theme.colors.error} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Threat Radar" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" fill={theme.colors.text} fillOpacity="0.05" stroke={theme.colors.text} />
                    <circle cx="20" cy="20" r="10" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="20" y1="20" x2="35" y2="20" stroke={theme.colors.success} />
                    <circle cx="30" cy="15" r="2" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Analyst" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="8" fill={theme.colors.text} opacity="0.2" />
                    <path d="M12,20 C12,10 28,10 28,20" stroke={theme.colors.text} fill="none" />
                    <line x1="28" y1="20" x2="28" y2="24" stroke={theme.colors.text} />
                    <circle cx="28" cy="24" r="2" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Architecture & Zones --- */}
        <SectionTitle>6. Architecture & Zones</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Bastion Host" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-14">
                    <path d="M5,20 L10,15 L15,20 L20,15 L25,20 L30,15 L35,20 V55 H5 Z" fill={theme.colors.text} />
                    <rect x="15" y="30" width="10" height="25" rx="5" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Air Gap" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="10" width="15" height="20" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <rect x="40" y="10" width="15" height="20" fill={theme.colors.surface} stroke={theme.colors.text} />
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
                <div className="w-16 h-16 border-2 border-dashed rounded-full flex items-center justify-center bg-green-50" style={{ borderColor: theme.colors.success }}>
                    <Icons.Check size="md" style={{ color: theme.colors.success }}/>
                </div>
            </GalleryItem>
            <GalleryItem title="Untrusted Zone" centered>
                <div className="w-16 h-16 border-2 border-dashed rounded-full flex items-center justify-center bg-red-50" style={{ borderColor: theme.colors.error }}>
                    <Icons.Close size="md" style={{ color: theme.colors.error }}/>
                </div>
            </GalleryItem>
            <GalleryItem title="Sandbox" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="10" width="30" height="25" fill="#FCD34D" fillOpacity="0.3" stroke="#FCD34D" />
                    <path d="M10,10 L15,35 M30,10 L25,35" stroke="#FCD34D" opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Micro-Segment" centered>
                <div className="grid grid-cols-2 gap-1 w-12 h-12">
                    <div className="border rounded bg-white"></div>
                    <div className="border rounded bg-white"></div>
                    <div className="border rounded bg-white"></div>
                    <div className="border rounded bg-white"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Security Gateway" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,35 V15 C10,5 30,5 30,15 V35" fill="none" stroke={theme.colors.primary} strokeWidth="2" />
                    <rect x="15" y="35" width="10" height="2" fill={theme.colors.primary} />
                    <circle cx="20" cy="10" r="2" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 7. Physical & Device Security --- */}
        <SectionTitle>7. Physical & Device Security</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="CCTV" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="15" width="15" height="10" fill={theme.colors.text} />
                    <polygon points="25,20 35,12 35,28" fill={theme.colors.text} />
                    <line x1="10" y1="20" x2="5" y2="25" stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Locked Rack" centered>
                <svg viewBox="0 0 30 50" className="w-10 h-14">
                    <rect x="5" y="5" width="20" height="40" rx="2" fill={theme.colors.text} />
                    <circle cx="15" cy="20" r="1" fill={theme.colors.success} />
                    <circle cx="15" cy="25" r="1" fill={theme.colors.success} />
                    <circle cx="15" cy="30" r="1" fill={theme.colors.success} />
                    <rect x="12" y="35" width="6" height="8" rx="1" fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Smart Card" centered>
                <svg viewBox="0 0 50 30" className="w-14 h-10">
                    <rect x="5" y="5" width="40" height="25" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <rect x="10" y="12" width="8" height="6" fill="#FCD34D" />
                </svg>
            </GalleryItem>
            <GalleryItem title="USB Key" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="20" y="10" width="30" height="10" rx="2" fill={theme.colors.text} />
                    <rect x="10" y="12" width="10" height="6" fill={theme.colors.surface} stroke={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Keypad" centered>
                <div className="grid grid-cols-3 gap-0.5 w-10 border p-1 rounded bg-gray-100">
                    {[1,2,3,4,5,6,7,8,9].map(n => <div key={n} className="w-2 h-2 bg-gray-400 rounded-full"></div>)}
                </div>
            </GalleryItem>
            <GalleryItem title="Faraday Cage" centered>
                <div className="w-12 h-12 border-2 grid grid-cols-4 grid-rows-4" style={{ borderColor: theme.colors.text }}>
                    {Array.from({length: 16}).map((_,i) => <div key={i} className="border border-gray-200"></div>)}
                </div>
            </GalleryItem>
            <GalleryItem title="Shredder" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="5" width="20" height="15" fill={theme.colors.text} opacity="0.2" />
                    <rect x="5" y="20" width="30" height="15" fill={theme.colors.text} />
                    <line x1="12" y1="20" x2="12" y2="35" stroke={theme.colors.surface} />
                    <line x1="20" y1="20" x2="20" y2="35" stroke={theme.colors.surface} />
                    <line x1="28" y1="20" x2="28" y2="35" stroke={theme.colors.surface} />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
