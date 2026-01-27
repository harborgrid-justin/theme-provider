import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const PagesGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const layoutProps = {
    vectorEffect: "non-scaling-stroke",
    stroke: theme.colors.text,
    strokeWidth: "1",
    strokeOpacity: "0.2",
    fill: theme.colors.surface,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const primaryFill = { fill: theme.colors.primary, stroke: 'none' };
  const textFill = { fill: theme.colors.text, stroke: 'none' };
  const accentFill = { fill: theme.colors.accent, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Page Layouts (33 Templates)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            High-fidelity full-page layout patterns leveraging the theme's structural tokens.
        </p>

        {/* --- 1. Public & Marketing --- */}
        <SectionTitle>1. Public & Marketing</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="SaaS Landing" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} />
                    <rect x="0" y="0" width="100" height="8" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="20" y="15" width="60" height="6" rx="2" {...textFill} />
                    <rect x="30" y="25" width="40" height="3" rx="1" {...textFill} fillOpacity="0.5" />
                    <rect x="40" y="32" width="20" height="5" rx="1" {...primaryFill} />
                    <rect x="10" y="45" width="25" height="10" rx="1" {...layoutProps} />
                    <rect x="37.5" y="45" width="25" height="10" rx="1" {...layoutProps} />
                    <rect x="65" y="45" width="25" height="10" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Feature Grid" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} />
                    <rect x="10" y="10" width="80" height="4" rx="1" {...textFill} />
                    <rect x="10" y="20" width="25" height="15" rx="1" {...layoutProps} />
                    <rect x="37.5" y="20" width="25" height="15" rx="1" {...layoutProps} />
                    <rect x="65" y="20" width="25" height="15" rx="1" {...layoutProps} />
                    <rect x="10" y="40" width="25" height="15" rx="1" {...layoutProps} />
                    <rect x="37.5" y="40" width="25" height="15" rx="1" {...layoutProps} />
                    <rect x="65" y="40" width="25" height="15" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pricing Page" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} />
                    <rect x="30" y="5" width="40" height="4" rx="1" {...textFill} />
                    <rect x="10" y="15" width="25" height="35" rx="2" {...layoutProps} />
                    <rect x="37.5" y="12" width="25" height="40" rx="2" {...layoutProps} stroke={theme.colors.primary} />
                    <rect x="65" y="15" width="25" height="35" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Blog Index" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} />
                    <rect x="10" y="10" width="20" height="20" rx="1" {...layoutProps} />
                    <rect x="35" y="10" width="55" height="4" rx="1" {...textFill} />
                    <rect x="35" y="18" width="40" height="2" rx="1" {...textFill} fillOpacity="0.5" />
                    
                    <rect x="10" y="35" width="20" height="20" rx="1" {...layoutProps} />
                    <rect x="35" y="35" width="55" height="4" rx="1" {...textFill} />
                    <rect x="35" y="43" width="40" height="2" rx="1" {...textFill} fillOpacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Article Post" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} />
                    <rect x="20" y="5" width="60" height="20" rx="1" {...layoutProps} fillOpacity="0.1" />
                    <rect x="20" y="30" width="50" height="4" rx="1" {...textFill} />
                    <rect x="20" y="38" width="60" height="2" rx="0.5" {...textFill} fillOpacity="0.5" />
                    <rect x="20" y="43" width="60" height="2" rx="0.5" {...textFill} fillOpacity="0.5" />
                    <rect x="20" y="48" width="40" height="2" rx="0.5" {...textFill} fillOpacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Contact Us" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} />
                    <rect x="10" y="10" width="35" height="40" rx="2" fill="none" />
                    <rect x="10" y="10" width="30" height="4" rx="1" {...textFill} />
                    <rect x="10" y="18" width="30" height="2" rx="0.5" {...textFill} fillOpacity="0.5" />
                    
                    <rect x="55" y="10" width="35" height="40" rx="2" {...layoutProps} />
                    <rect x="60" y="15" width="25" height="4" rx="1" {...layoutProps} />
                    <rect x="60" y="22" width="25" height="4" rx="1" {...layoutProps} />
                    <rect x="60" y="29" width="25" height="12" rx="1" {...layoutProps} />
                    <rect x="60" y="44" width="15" height="4" rx="1" {...primaryFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Authentication --- */}
        <SectionTitle>2. Authentication</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Login Split" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="50" height="60" {...layoutProps} />
                    <rect x="50" y="0" width="50" height="60" fill={theme.colors.primary} fillOpacity="0.1" />
                    <rect x="10" y="15" width="30" height="4" rx="1" {...textFill} />
                    <rect x="10" y="25" width="30" height="5" rx="1" {...layoutProps} />
                    <rect x="10" y="35" width="30" height="5" rx="1" {...layoutProps} />
                    <rect x="10" y="45" width="15" height="5" rx="1" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sign Up Card" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.text} fillOpacity="0.05" />
                    <rect x="30" y="5" width="40" height="50" rx="2" {...layoutProps} fill={theme.colors.surface} />
                    <rect x="35" y="10" width="30" height="4" rx="1" {...textFill} />
                    <rect x="35" y="20" width="30" height="4" rx="1" {...layoutProps} />
                    <rect x="35" y="28" width="30" height="4" rx="1" {...layoutProps} />
                    <rect x="35" y="36" width="30" height="4" rx="1" {...layoutProps} />
                    <rect x="35" y="45" width="30" height="5" rx="1" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Forgot Password" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="30" y="10" width="40" height="40" rx="2" {...layoutProps} />
                    <rect x="35" y="15" width="20" height="3" rx="1" {...textFill} />
                    <rect x="35" y="25" width="30" height="5" rx="1" {...layoutProps} />
                    <rect x="35" y="35" width="20" height="5" rx="1" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="OTP Verify" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="30" y="15" width="40" height="30" rx="2" {...layoutProps} />
                    <rect x="35" y="25" width="6" height="8" rx="1" {...layoutProps} />
                    <rect x="43" y="25" width="6" height="8" rx="1" {...layoutProps} />
                    <rect x="51" y="25" width="6" height="8" rx="1" {...layoutProps} />
                    <rect x="59" y="25" width="6" height="8" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Lock Screen" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.primary} fillOpacity="0.2" />
                    <circle cx="50" cy="20" r="6" {...layoutProps} fill={theme.colors.surface} />
                    <rect x="40" y="30" width="20" height="4" rx="1" {...textFill} />
                    <rect x="35" y="38" width="30" height="5" rx="1" {...layoutProps} fill={theme.colors.surface} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. Application Dashboards --- */}
        <SectionTitle>3. Application Dashboards</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Analytics Dash" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="15" height="60" {...layoutProps} />
                    <rect x="20" y="5" width="25" height="15" rx="1" {...layoutProps} />
                    <rect x="48" y="5" width="25" height="15" rx="1" {...layoutProps} />
                    <rect x="76" y="5" width="20" height="15" rx="1" {...layoutProps} />
                    <rect x="20" y="25" width="53" height="30" rx="1" {...layoutProps} />
                    <rect x="76" y="25" width="20" height="30" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="eCommerce Dash" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="8" {...layoutProps} />
                    <rect x="5" y="12" width="20" height="15" rx="1" {...layoutProps} />
                    <rect x="28" y="12" width="20" height="15" rx="1" {...layoutProps} />
                    <rect x="51" y="12" width="20" height="15" rx="1" {...layoutProps} />
                    <rect x="74" y="12" width="20" height="15" rx="1" {...layoutProps} />
                    <rect x="5" y="30" width="60" height="25" rx="1" {...layoutProps} />
                    <rect x="68" y="30" width="27" height="25" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Project Dash" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutProps} />
                    <rect x="25" y="5" width="70" height="8" rx="1" {...layoutProps} />
                    <rect x="25" y="18" width="22" height="35" rx="1" {...layoutProps} />
                    <rect x="49" y="18" width="22" height="35" rx="1" {...layoutProps} />
                    <rect x="73" y="18" width="22" height="35" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="CRM Dash" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="15" height="60" {...layoutProps} />
                    <rect x="20" y="5" width="55" height="20" rx="1" {...layoutProps} />
                    <rect x="20" y="30" width="55" height="25" rx="1" {...layoutProps} />
                    <rect x="80" y="5" width="15" height="50" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Finance Dash" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="60" fill={theme.colors.surface} />
                    <rect x="5" y="5" width="30" height="15" rx="1" {...layoutProps} />
                    <rect x="5" y="25" width="30" height="30" rx="1" {...layoutProps} />
                    <rect x="40" y="5" width="55" height="50" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Health Dash" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutProps} />
                    <rect x="25" y="5" width="20" height="20" rx="1" {...layoutProps} />
                    <rect x="50" y="5" width="20" height="20" rx="1" {...layoutProps} />
                    <rect x="75" y="5" width="20" height="20" rx="1" {...layoutProps} />
                    <rect x="25" y="30" width="70" height="25" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Settings & Profile --- */}
        <SectionTitle>4. Settings & Profile</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="User Profile" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="20" fill={theme.colors.primary} fillOpacity="0.1" />
                    <circle cx="15" cy="20" r="8" {...layoutProps} fill={theme.colors.surface} />
                    <rect x="30" y="25" width="30" height="4" rx="1" {...textFill} />
                    <rect x="5" y="35" width="90" height="20" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Global Settings" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="25" height="60" {...layoutProps} fillOpacity="0.05" />
                    <rect x="30" y="5" width="60" height="6" rx="1" {...textFill} />
                    <rect x="30" y="15" width="65" height="10" rx="1" {...layoutProps} />
                    <rect x="30" y="28" width="65" height="10" rx="1" {...layoutProps} />
                    <rect x="30" y="41" width="65" height="10" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Billing" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="40" height="20" rx="1" {...layoutProps} />
                    <rect x="50" y="5" width="45" height="20" rx="1" {...layoutProps} />
                    <rect x="5" y="30" width="90" height="25" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Security Log" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="1" {...layoutProps} />
                    <line x1="5" y1="15" x2="95" y2="15" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="5" y1="25" x2="95" y2="25" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="5" y1="35" x2="95" y2="35" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Team Perms" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="10" rx="1" {...layoutProps} />
                    <rect x="5" y="20" width="90" height="35" rx="1" {...layoutProps} />
                    <rect x="10" y="25" width="10" height="4" rx="1" {...textFill} />
                    <rect x="80" y="25" width="10" height="4" rx="1" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Notifications" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="15" y="5" width="70" height="10" rx="1" {...layoutProps} />
                    <rect x="15" y="18" width="70" height="10" rx="1" {...layoutProps} />
                    <rect x="15" y="31" width="70" height="10" rx="1" {...layoutProps} />
                    <rect x="75" y="7" width="6" height="6" rx="3" {...primaryFill} />
                    <rect x="75" y="33" width="6" height="6" rx="3" {...primaryFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 5. Content & Files --- */}
        <SectionTitle>5. Content & Files</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="File Drive" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutProps} />
                    <rect x="25" y="5" width="15" height="15" rx="1" {...layoutProps} />
                    <rect x="45" y="5" width="15" height="15" rx="1" {...layoutProps} />
                    <rect x="65" y="5" width="15" height="15" rx="1" {...layoutProps} />
                    <rect x="25" y="25" width="70" height="30" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Photo Gallery" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="23" rx="1" {...layoutProps} />
                    <rect x="36" y="5" width="28" height="23" rx="1" {...layoutProps} />
                    <rect x="67" y="5" width="28" height="23" rx="1" {...layoutProps} />
                    <rect x="5" y="32" width="28" height="23" rx="1" {...layoutProps} />
                    <rect x="36" y="32" width="28" height="23" rx="1" {...layoutProps} />
                    <rect x="67" y="32" width="28" height="23" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Chat App" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="30" height="60" {...layoutProps} />
                    <rect x="30" y="0" width="70" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="35" y="10" width="30" height="8" rx="2" {...primaryFill} opacity="0.2" />
                    <rect x="65" y="22" width="30" height="8" rx="2" {...layoutProps} />
                    <rect x="30" y="50" width="70" height="10" fill={theme.colors.text} fillOpacity="0.05" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Email Inbox" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutProps} fillOpacity="0.05" />
                    <rect x="20" y="0" width="30" height="60" {...layoutProps} />
                    <rect x="50" y="0" width="50" height="60" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="55" y="10" width="40" height="4" rx="1" {...textFill} />
                    <rect x="55" y="20" width="30" height="2" rx="1" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Doc Editor" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="10" {...layoutProps} />
                    <rect x="15" y="15" width="70" height="40" rx="1" {...layoutProps} fill="white" />
                    <rect x="20" y="20" width="40" height="2" rx="0.5" {...textFill} />
                    <rect x="20" y="25" width="60" height="2" rx="0.5" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Utility & Error --- */}
        <SectionTitle>6. Utility & Error</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="404 Error" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <text x="50" y="25" fontSize="20" fontWeight="bold" fill={theme.colors.text} opacity="0.1" textAnchor="middle">404</text>
                    <rect x="35" y="35" width="30" height="6" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="500 Error" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <text x="50" y="25" fontSize="20" fontWeight="bold" fill={theme.colors.error} opacity="0.2" textAnchor="middle">500</text>
                    <rect x="35" y="35" width="30" height="6" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Maintenance" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <path d="M40,20 L50,10 L60,20 L50,30 Z" fill={theme.colors.warning} />
                    <rect x="30" y="35" width="40" height="4" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Search Res" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="5" width="80" height="8" rx="4" {...layoutProps} />
                    <rect x="10" y="20" width="80" height="10" rx="1" {...layoutProps} />
                    <rect x="10" y="35" width="80" height="10" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Empty State" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="50" cy="25" r="10" {...layoutProps} />
                    <rect x="35" y="40" width="30" height="4" rx="1" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
        </div>
    </div>
  )
}
