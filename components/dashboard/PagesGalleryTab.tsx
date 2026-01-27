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
        <SectionTitle style={{ marginTop: '1rem' }}>Page Layouts (80+ Templates)</SectionTitle>
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

        {/* --- 7. E-commerce & Store --- */}
        <SectionTitle>7. E-commerce & Store</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Store Home" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="30" fill={theme.colors.surface} />
                    <rect x="10" y="10" width="80" height="10" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="10" y="35" width="20" height="20" rx="2" {...layoutProps} />
                    <rect x="35" y="35" width="20" height="20" rx="2" {...layoutProps} />
                    <rect x="60" y="35" width="20" height="20" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Prod List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="25" height="60" {...layoutProps} fillOpacity="0.05" />
                    <rect x="30" y="5" width="20" height="25" rx="2" {...layoutProps} />
                    <rect x="55" y="5" width="20" height="25" rx="2" {...layoutProps} />
                    <rect x="30" y="35" width="20" height="20" rx="2" {...layoutProps} />
                    <rect x="55" y="35" width="20" height="20" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Prod Detail" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="40" height="40" rx="2" {...layoutProps} fillOpacity="0.1" />
                    <rect x="55" y="10" width="35" height="6" rx="1" {...textFill} />
                    <rect x="55" y="20" width="25" height="4" rx="1" {...textFill} opacity="0.5" />
                    <rect x="55" y="30" width="35" height="15" rx="1" {...textFill} opacity="0.1" />
                    <rect x="55" y="50" width="20" height="5" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Cart" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="60" height="50" rx="2" {...layoutProps} />
                    <rect x="10" y="10" width="50" height="10" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="10" y="25" width="50" height="10" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <rect x="70" y="5" width="25" height="30" rx="2" {...layoutProps} fillOpacity="0.1" />
                    <rect x="75" y="40" width="15" height="5" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Checkout" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="55" height="50" rx="2" {...layoutProps} />
                    <rect x="10" y="10" width="45" height="6" rx="1" {...textFill} opacity="0.2" />
                    <rect x="10" y="20" width="20" height="6" rx="1" {...textFill} opacity="0.2" />
                    <rect x="35" y="20" width="20" height="6" rx="1" {...textFill} opacity="0.2" />
                    <rect x="65" y="5" width="30" height="50" rx="2" {...layoutProps} fillOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Order History" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="12" rx="2" {...layoutProps} />
                    <rect x="5" y="20" width="90" height="12" rx="2" {...layoutProps} />
                    <rect x="5" y="35" width="90" height="12" rx="2" {...layoutProps} />
                    <circle cx="85" cy="11" r="2" fill={theme.colors.success} />
                    <circle cx="85" cy="26" r="2" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Wishlist" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="25" height="30" rx="2" {...layoutProps} />
                    <path d="M25,10 L27,12 L30,10" fill="none" stroke={theme.colors.error} strokeWidth="1" />
                    <rect x="35" y="5" width="25" height="30" rx="2" {...layoutProps} />
                    <rect x="65" y="5" width="25" height="30" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Category" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutProps} fillOpacity="0.05" />
                    <rect x="25" y="5" width="70" height="15" rx="2" {...primaryFill} opacity="0.2" />
                    <rect x="25" y="25" width="70" height="30" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 8. Social & Community --- */}
        <SectionTitle>8. Social & Community</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Social Feed" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="25" y="0" width="50" height="60" fill={theme.colors.surface} />
                    <rect x="30" y="5" width="40" height="20" rx="2" {...layoutProps} />
                    <rect x="30" y="30" width="40" height="25" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Public Profile" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="100" height="25" fill={theme.colors.primary} fillOpacity="0.2" />
                    <circle cx="50" cy="25" r="10" {...layoutProps} fill={theme.colors.surface} />
                    <rect x="35" y="40" width="30" height="4" rx="1" {...textFill} />
                    <rect x="30" y="50" width="40" height="2" rx="1" {...textFill} opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Messaging" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="30" height="60" {...layoutProps} fillOpacity="0.05" />
                    <rect x="35" y="10" width="30" height="8" rx="4" {...primaryFill} opacity="0.3" />
                    <rect x="65" y="25" width="30" height="8" rx="4" {...layoutProps} />
                    <rect x="35" y="40" width="40" height="8" rx="4" {...primaryFill} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Groups List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <circle cx="15" cy="15" r="6" {...layoutProps} />
                    <rect x="25" y="12" width="50" height="6" rx="2" {...textFill} />
                    <circle cx="15" cy="35" r="6" {...layoutProps} />
                    <rect x="25" y="32" width="50" height="6" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Forum Topic" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="20" rx="2" {...layoutProps} />
                    <rect x="15" y="30" width="80" height="12" rx="2" {...layoutProps} fillOpacity="0.5" />
                    <rect x="15" y="45" width="80" height="12" rx="2" {...layoutProps} fillOpacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Event Detail" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="25" rx="2" {...layoutProps} fillOpacity="0.1" />
                    <rect x="10" y="35" width="30" height="4" rx="1" {...textFill} />
                    <rect x="10" y="45" width="50" height="10" rx="2" {...textFill} opacity="0.1" />
                    <rect x="70" y="35" width="20" height="20" rx="2" {...primaryFill} opacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Activity Stream" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <line x1="15" y1="5" x2="15" y2="55" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <circle cx="15" cy="15" r="3" {...primaryFill} />
                    <rect x="25" y="12" width="60" height="6" rx="2" {...textFill} />
                    <circle cx="15" cy="35" r="3" {...textFill} opacity="0.5" />
                    <rect x="25" y="32" width="60" height="6" rx="2" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Friends List" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="42" height="15" rx="2" {...layoutProps} />
                    <rect x="53" y="5" width="42" height="15" rx="2" {...layoutProps} />
                    <rect x="5" y="25" width="42" height="15" rx="2" {...layoutProps} />
                    <rect x="53" y="25" width="42" height="15" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 9. Data & Analytics --- */}
        <SectionTitle>9. Data & Analytics</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Report Builder" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutProps} fillOpacity="0.05" />
                    <rect x="25" y="5" width="70" height="50" rx="2" {...layoutProps} />
                    <rect x="30" y="10" width="60" height="20" rx="1" fill="none" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Live Monitor" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="20" rx="2" {...layoutProps} />
                    <rect x="36" y="5" width="28" height="20" rx="2" {...layoutProps} />
                    <rect x="67" y="5" width="28" height="20" rx="2" {...layoutProps} />
                    <path d="M5,45 L20,35 L40,45 L70,30 L95,40" fill="none" stroke={theme.colors.success} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Data Explorer" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="20" height="50" rx="2" {...layoutProps} fillOpacity="0.05" />
                    <rect x="30" y="5" width="65" height="50" rx="2" {...layoutProps} />
                    <line x1="30" y1="20" x2="95" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Geo Map" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutProps} />
                    <circle cx="30" cy="30" r="2" fill={theme.colors.error} />
                    <circle cx="70" cy="20" r="3" fill={theme.colors.error} />
                    <circle cx="50" cy="40" r="2" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Calendar Full" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutProps} />
                    <line x1="35" y1="5" x2="35" y2="55" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="65" y1="5" x2="65" y2="55" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="5" y1="20" x2="95" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="38" y="25" width="20" height="4" rx="1" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Kanban Board" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="50" rx="2" {...layoutProps} fillOpacity="0.05" />
                    <rect x="36" y="5" width="28" height="50" rx="2" {...layoutProps} fillOpacity="0.05" />
                    <rect x="67" y="5" width="28" height="50" rx="2" {...layoutProps} fillOpacity="0.05" />
                    <rect x="8" y="10" width="22" height="10" rx="1" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Timeline View" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutProps} />
                    <rect x="15" y="15" width="40" height="6" rx="2" fill={theme.colors.primary} />
                    <rect x="40" y="25" width="50" height="6" rx="2" fill={theme.colors.secondary} />
                    <rect x="20" y="35" width="30" height="6" rx="2" fill={theme.colors.accent} />
                </svg>
            </GalleryItem>
            <GalleryItem title="File Manager" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutProps} fillOpacity="0.05" />
                    <rect x="25" y="5" width="20" height="20" rx="2" {...layoutProps} />
                    <rect x="50" y="5" width="20" height="20" rx="2" {...layoutProps} />
                    <rect x="75" y="5" width="20" height="20" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 10. Admin & Management --- */}
        <SectionTitle>10. Admin & Management</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="User Mgmt" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutProps} />
                    <line x1="5" y1="20" x2="95" y2="20" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <circle cx="15" cy="12" r="3" {...textFill} opacity="0.2" />
                    <rect x="80" y="10" width="10" height="4" rx="1" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Role Perms" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutProps} />
                    <rect x="15" y="15" width="5" height="5" rx="1" fill={theme.colors.success} />
                    <rect x="15" y="25" width="5" height="5" rx="1" fill={theme.colors.error} />
                    <rect x="15" y="35" width="5" height="5" rx="1" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="System Health" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="25" height="25" rx="2" fill={theme.colors.success} fillOpacity="0.1" stroke={theme.colors.success} />
                    <rect x="35" y="5" width="25" height="25" rx="2" {...layoutProps} />
                    <rect x="65" y="5" width="25" height="25" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Audit Logs" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutProps} />
                    <line x1="15" y1="15" x2="85" y2="15" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="15" y1="25" x2="85" y2="25" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <line x1="15" y1="35" x2="85" y2="35" stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="API Mgmt" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="90" height="50" rx="2" {...layoutProps} />
                    <rect x="15" y="15" width="60" height="6" rx="2" fill={theme.colors.text} opacity="0.1" />
                    <rect x="80" y="15" width="10" height="6" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Billing" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="40" height="25" rx="2" {...layoutProps} />
                    <rect x="50" y="5" width="45" height="25" rx="2" {...layoutProps} />
                    <rect x="5" y="35" width="90" height="20" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Integrations" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="5" y="5" width="28" height="28" rx="2" {...layoutProps} />
                    <rect x="36" y="5" width="28" height="28" rx="2" {...layoutProps} />
                    <rect x="67" y="5" width="28" height="28" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Email Temps" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="5" width="60" height="50" rx="2" {...layoutProps} />
                    <rect x="30" y="15" width="40" height="4" rx="1" {...textFill} />
                    <rect x="30" y="25" width="40" height="20" rx="1" {...textFill} opacity="0.1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 11. Onboarding & Flows --- */}
        <SectionTitle>11. Onboarding & Flows</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Welcome" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="10" width="60" height="40" rx="3" {...layoutProps} />
                    <circle cx="50" cy="25" r="6" {...primaryFill} opacity="0.5" />
                    <rect x="35" y="35" width="30" height="4" rx="1" {...textFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Role Select" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="15" y="15" width="30" height="30" rx="2" {...layoutProps} />
                    <rect x="55" y="15" width="30" height="30" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Setup Wizard" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="10" y="10" width="80" height="40" rx="2" {...layoutProps} />
                    <line x1="10" y1="40" x2="90" y2="40" stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="70" y="43" width="15" height="4" rx="1" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Verify Email" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="25" y="10" width="50" height="40" rx="2" {...layoutProps} />
                    <rect x="40" y="20" width="20" height="12" rx="1" fill={theme.colors.text} opacity="0.1" />
                    <path d="M40,20 L50,26 L60,20" fill="none" stroke={theme.colors.text} opacity="0.3" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Invite Team" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="10" width="60" height="40" rx="2" {...layoutProps} />
                    <rect x="30" y="25" width="30" height="6" rx="1" {...layoutProps} />
                    <rect x="62" y="25" width="10" height="6" rx="1" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Success" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="25" y="10" width="50" height="40" rx="2" {...layoutProps} />
                    <circle cx="50" cy="25" r="8" fill={theme.colors.success} />
                    <path d="M47,25 L49,27 L53,23" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Upgrade" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="20" y="5" width="60" height="50" rx="2" stroke={theme.colors.primary} fill={theme.colors.surface} />
                    <rect x="35" y="40" width="30" height="6" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Empty Dash" centered>
                <svg viewBox="0 0 100 60" className="w-24 h-16">
                    <rect x="0" y="0" width="20" height="60" {...layoutProps} fillOpacity="0.05" />
                    <circle cx="60" cy="25" r="8" {...layoutProps} />
                    <rect x="50" y="38" width="20" height="4" rx="1" {...primaryFill} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 12. Mobile Shells --- */}
        <SectionTitle>12. Mobile Shells</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Mobile Login" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" {...layoutProps} />
                    <rect x="15" y="40" width="30" height="6" rx="1" {...layoutProps} />
                    <rect x="15" y="50" width="30" height="6" rx="1" {...layoutProps} />
                    <rect x="15" y="65" width="30" height="8" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Home" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" {...layoutProps} />
                    <rect x="5" y="85" width="50" height="10" rx="0" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="10" y="15" width="40" height="20" rx="2" {...textFill} />
                    <rect x="10" y="40" width="18" height="18" rx="2" {...layoutProps} />
                    <rect x="32" y="40" width="18" height="18" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Feed" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" {...layoutProps} />
                    <rect x="5" y="5" width="50" height="10" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                    <rect x="10" y="20" width="40" height="30" rx="2" {...layoutProps} />
                    <rect x="10" y="55" width="40" height="30" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Detail" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" {...layoutProps} />
                    <rect x="5" y="5" width="50" height="40" rx="0" {...textFill} />
                    <rect x="10" y="50" width="40" height="4" rx="1" {...textFill} />
                    <rect x="10" y="60" width="30" height="2" rx="1" {...textFill} />
                    <rect x="10" y="80" width="40" height="8" rx="2" {...primaryFill} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Profile" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" {...layoutProps} />
                    <circle cx="30" cy="25" r="10" {...textFill} />
                    <rect x="20" y="40" width="20" height="4" rx="1" {...textFill} />
                    <rect x="5" y="55" width="50" height="10" rx="0" {...layoutProps} />
                    <rect x="5" y="65" width="50" height="10" rx="0" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Chat" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" {...layoutProps} />
                    <rect x="10" y="20" width="30" height="8" rx="2" {...layoutProps} />
                    <rect x="20" y="35" width="30" height="8" rx="2" {...primaryFill} opacity="0.2" />
                    <rect x="5" y="85" width="50" height="10" fill={theme.colors.surface} stroke={theme.colors.text} strokeOpacity="0.1" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Search" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" {...layoutProps} />
                    <rect x="10" y="15" width="40" height="8" rx="4" {...layoutProps} />
                    <rect x="10" y="30" width="40" height="10" rx="2" {...layoutProps} />
                    <rect x="10" y="45" width="40" height="10" rx="2" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Settings" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" {...layoutProps} />
                    <rect x="5" y="20" width="50" height="10" {...layoutProps} />
                    <rect x="5" y="30" width="50" height="10" {...layoutProps} />
                    <rect x="5" y="40" width="50" height="10" {...layoutProps} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mobile Modal" centered>
                <svg viewBox="0 0 60 100" className="w-16 h-24">
                    <rect x="5" y="5" width="50" height="90" rx="4" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="10" y="30" width="40" height="40" rx="3" fill={theme.colors.surface} stroke={theme.colors.text} strokeWidth="1" />
                </svg>
            </GalleryItem>
        </div>
    </div>
  )
}
