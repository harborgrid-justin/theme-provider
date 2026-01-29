
import React from 'react';
import { useSvgTheme } from '../../hooks/useSvgTheme';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';

export const FinanceGalleryTab: React.FC = () => {
  const { theme, strokeProps, layoutProps, primaryFill, textFill, surfaceFill, faintFill, textStyle } = useSvgTheme();

  // Helper variables for cleaner JSX
  const successFill = { fill: theme.colors.success, stroke: 'none' };
  const errorFill = { fill: theme.colors.error, stroke: 'none' };
  const warningFill = { fill: theme.colors.warning, stroke: 'none' };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Finance & Trading Primitives (140+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Specialized UI tokens for banking, crypto, trading platforms, fintech dashboards, and wallets.
        </p>

        {/* --- 1. Markets & Trading --- */}
        <SectionTitle>1. Markets & Trading</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Ticker Up" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <text x="10" y="25" fontSize="14" fontWeight="bold" fill={theme.colors.text}>AAPL</text>
                    <path d="M60,25 L65,15 L70,25" fill={theme.colors.success} />
                    <rect x="75" y="15" width="25" height="12" rx="2" fill={theme.colors.success} fillOpacity="0.1" />
                    <text x="87.5" y="23" fontSize="6" fontWeight="bold" fill={theme.colors.success} textAnchor="middle">1.2%</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Ticker Down" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <text x="10" y="25" fontSize="14" fontWeight="bold" fill={theme.colors.text}>TSLA</text>
                    <path d="M60,15 L65,25 L70,15" fill={theme.colors.error} />
                    <rect x="75" y="15" width="25" height="12" rx="2" fill={theme.colors.error} fillOpacity="0.1" />
                    <text x="87.5" y="23" fontSize="6" fontWeight="bold" fill={theme.colors.error} textAnchor="middle">0.8%</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Order Book: Ask" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="60" y="5" width="40" height="30" rx="1" fill={theme.colors.error} fillOpacity="0.1" />
                    <text x="10" y="25" fontSize="10" fontFamily="monospace" fill={theme.colors.error}>142.50</text>
                    <text x="95" y="25" fontSize="8" fontFamily="monospace" fill={theme.colors.text} opacity="0.6" textAnchor="end">0.45</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Order Book: Bid" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="40" y="5" width="60" height="30" rx="1" fill={theme.colors.success} fillOpacity="0.1" />
                    <text x="10" y="25" fontSize="10" fontFamily="monospace" fill={theme.colors.success}>142.45</text>
                    <text x="95" y="25" fontSize="8" fontFamily="monospace" fill={theme.colors.text} opacity="0.6" textAnchor="end">1.20</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Candle: Bull" centered>
                <svg viewBox="0 0 40 60" className="w-8 h-12">
                    <line x1="20" y1="5" x2="20" y2="55" stroke={theme.colors.success} strokeWidth="1.5" />
                    <rect x="15" y="15" width="10" height="30" fill={theme.colors.success} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Candle: Bear" centered>
                <svg viewBox="0 0 40 60" className="w-8 h-12">
                    <line x1="20" y1="5" x2="20" y2="55" stroke={theme.colors.error} strokeWidth="1.5" />
                    <rect x="15" y="20" width="10" height="20" fill={theme.colors.error} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Leverage Slider" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <text x="5" y="10" fontSize="6" fontWeight="bold" fill={theme.colors.text} opacity="0.5">1x</text>
                    <text x="95" y="10" fontSize="6" fontWeight="bold" fill={theme.colors.text} opacity="0.5" textAnchor="end">100x</text>
                    <rect x="5" y="18" width="90" height="4" rx="2" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="5" y="18" width="30" height="4" rx="2" fill={theme.colors.warning} />
                    <circle cx="35" cy="20" r="4" fill={theme.colors.surface} stroke={theme.colors.warning} strokeWidth="1" />
                    <rect x="25" y="5" width="20" height="10" rx="2" fill={theme.colors.warning} />
                    <text x="35" y="12" fontSize="6" fill="white" fontWeight="bold" textAnchor="middle">20x</text>
                </svg>
            </GalleryItem>

            <GalleryItem title="Market Depth" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <path d="M0,40 L0,20 Q20,25 50,20 V40 Z" fill={theme.colors.success} fillOpacity="0.2" />
                    <path d="M0,20 Q20,25 50,20" fill="none" stroke={theme.colors.success} strokeWidth="1" />
                    <path d="M100,40 L100,10 Q80,25 50,20 V40 Z" fill={theme.colors.error} fillOpacity="0.2" />
                    <path d="M100,10 Q80,25 50,20" fill="none" stroke={theme.colors.error} strokeWidth="1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Financial Data Viz --- */}
        <SectionTitle>2. Financial Data Viz</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Sparkline: Profit" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12" style={{overflow: 'visible'}}>
                    <path d="M0,35 L20,30 L40,32 L60,15 L80,20 L100,5" fill="none" stroke={theme.colors.success} strokeWidth="2" />
                    <circle cx="100" cy="5" r="3" fill={theme.colors.success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sparkline: Loss" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12" style={{overflow: 'visible'}}>
                    <path d="M0,5 L20,10 L40,8 L60,25 L80,20 L100,35" fill="none" stroke={theme.colors.error} strokeWidth="2" />
                    <circle cx="100" cy="35" r="3" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mini Portfolio" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.primary} stroke={theme.colors.surface} strokeWidth="2" strokeDasharray="60 100" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.secondary} strokeWidth="4" strokeDasharray="30 100" strokeDashoffset="-60" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.warning} strokeWidth="4" strokeDasharray="10 100" strokeDashoffset="-90" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Asset Allocation" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <rect x="0" y="10" width="50" height="10" fill={theme.colors.primary} />
                    <rect x="50" y="10" width="30" height="10" fill={theme.colors.secondary} />
                    <rect x="80" y="10" width="20" height="10" fill={theme.colors.warning} />
                    <text x="15" y="30" fontSize="6" fill={theme.colors.text} opacity="0.6">Stocks</text>
                    <text x="60" y="30" fontSize="6" fill={theme.colors.text} opacity="0.6">Bonds</text>
                    <text x="85" y="30" fontSize="6" fill={theme.colors.text} opacity="0.6">Cash</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Yield Curve" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12" style={{overflow: 'visible'}}>
                    <path d="M0,35 Q30,10 60,15 T100,5" fill="none" stroke={theme.colors.text} strokeWidth="1.5" />
                    <line x1="0" y1="40" x2="100" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                    <line x1="0" y1="0" x2="0" y2="40" stroke={theme.colors.text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Volume Bar" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <rect x="5" y="25" width="8" height="15" fill={theme.colors.success} />
                    <rect x="15" y="15" width="8" height="25" fill={theme.colors.success} />
                    <rect x="25" y="20" width="8" height="20" fill={theme.colors.error} />
                    <rect x="35" y="10" width="8" height="30" fill={theme.colors.success} />
                    <rect x="45" y="30" width="8" height="10" fill={theme.colors.error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="RSI Meter" centered>
                <svg viewBox="0 0 100 30" className="w-24 h-8">
                    <rect x="0" y="10" width="100" height="10" rx="5" fill={theme.colors.text} fillOpacity="0.1" />
                    <rect x="0" y="10" width="30" height="10" rx="5" fill={theme.colors.success} fillOpacity="0.3" />
                    <rect x="70" y="10" width="30" height="10" rx="5" fill={theme.colors.error} fillOpacity="0.3" />
                    <rect x="60" y="8" width="2" height="14" fill={theme.colors.text} />
                    <text x="50" y="28" fontSize="8" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>RSI: 60</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Sentiment" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M5,25 A25,25 0 0,1 55,25" fill="none" stroke={theme.colors.text} strokeOpacity="0.2" strokeWidth="4" />
                    <path d="M5,25 A25,25 0 0,1 40,8" fill="none" stroke={theme.colors.success} strokeWidth="4" />
                    <text x="30" y="25" fontSize="8" fontWeight="bold" textAnchor="middle" fill={theme.colors.success}>Bullish</text>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 3. Banking & Payments --- */}
        <SectionTitle>3. Banking & Payments</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Credit Card" centered>
                <svg viewBox="0 0 80 50" className="w-20 h-12">
                    <rect x="5" y="5" width="70" height="40" rx="4" fill={theme.colors.primary} />
                    <rect x="12" y="25" width="10" height="8" rx="1" fill="#FCD34D" />
                    <text x="12" y="40" fontSize="6" fill="white" fontFamily="monospace">•••• 1234</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Chip" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="10" width="20" height="20" rx="2" fill="#FCD34D" stroke={theme.colors.text} strokeWidth="0.5" />
                    <path d="M10,20 H30 M20,10 V30 M15,10 V30 M25,10 V30" stroke={theme.colors.text} strokeWidth="0.5" opacity="0.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Contactless" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,20 Q20,5 30,20" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <path d="M14,20 Q20,10 26,20" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <path d="M18,20 Q20,15 22,20" fill="none" stroke={theme.colors.text} strokeWidth="2" />
                    <circle cx="20" cy="20" r="1" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="ATM" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="5" width="30" height="40" rx="2" fill="none" stroke={theme.colors.text} />
                    <rect x="10" y="10" width="20" height="10" rx="1" fill={theme.colors.primary} opacity="0.2" />
                    <rect x="10" y="25" width="20" height="2" fill={theme.colors.text} />
                    <rect x="12" y="30" width="4" height="4" fill={theme.colors.text} />
                    <rect x="18" y="30" width="4" height="4" fill={theme.colors.text} />
                    <rect x="24" y="30" width="4" height="4" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Swift Code" centered>
                <div className="border border-dashed rounded px-2 py-1 text-[8px] font-mono font-bold tracking-widest text-center" style={{ borderColor: theme.colors.text }}>
                    SWFTUS33
                </div>
            </GalleryItem>
            <GalleryItem title="Bank" centered>
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                    <path d="M10,25 L30,5 L50,25" fill="none" stroke={theme.colors.text} />
                    <rect x="10" y="25" width="40" height="5" fill={theme.colors.text} />
                    <rect x="15" y="30" width="5" height="20" fill={theme.colors.text} opacity="0.5" />
                    <rect x="27.5" y="30" width="5" height="20" fill={theme.colors.text} opacity="0.5" />
                    <rect x="40" y="30" width="5" height="20" fill={theme.colors.text} opacity="0.5" />
                    <rect x="5" y="50" width="50" height="5" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 4. Crypto & Web3 --- */}
        <SectionTitle>4. Crypto & Web3</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Bitcoin" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="18" fill="#F7931A" />
                    <text x="20" y="28" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">₿</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Ethereum" centered>
                <svg viewBox="0 0 40 60" className="w-10 h-14">
                    <path d="M20,5 L35,30 L20,40 L5,30 Z" fill="#627EEA" />
                    <path d="M20,45 L35,35 L20,55 L5,35 Z" fill="#627EEA" opacity="0.8" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Wallet" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M5,10 H50 A5,5 0 0,1 55,15 V35 A5,5 0 0,1 50,40 H5 V10 Z" fill={theme.colors.text} opacity="0.1" stroke={theme.colors.text} />
                    <path d="M45,20 H55 V30 H45 A2,2 0 0,1 45,20" fill={theme.colors.primary} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Hash Block" centered>
                <div className="border border-gray-300 bg-gray-50 px-2 py-1 rounded text-[6px] font-mono break-all text-center w-full">
                    0x8a7f...3b21
                </div>
            </GalleryItem>
            <GalleryItem title="Gas Fee" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,35 V15 Q10,5 20,5 Q30,5 30,15 V35 H10 Z" fill="none" stroke={theme.colors.warning} />
                    <rect x="15" y="15" width="10" height="10" fill={theme.colors.warning} opacity="0.2" />
                    <text x="20" y="30" fontSize="8" fontWeight="bold" textAnchor="middle" fill={theme.colors.warning}>GAS</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Blockchain" centered>
                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 border border-blue-500 rounded"></div>
                    <div className="w-2 h-0.5 bg-blue-500"></div>
                    <div className="w-4 h-4 border border-blue-500 rounded"></div>
                    <div className="w-2 h-0.5 bg-blue-500"></div>
                    <div className="w-4 h-4 border border-blue-500 rounded bg-blue-500"></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 5. Transactions --- */}
        <SectionTitle>5. Transactions</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Send" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.error + '20'} />
                    <path d="M20,10 L20,30 M20,10 L15,15 M20,10 L25,15" stroke={theme.colors.error} strokeWidth="2" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Receive" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.success + '20'} />
                    <path d="M20,30 L20,10 M20,30 L15,25 M20,30 L25,25" stroke={theme.colors.success} strokeWidth="2" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Swap" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={theme.colors.info + '20'} />
                    <path d="M15,15 H25 M25,15 L22,12" stroke={theme.colors.info} strokeWidth="1.5" />
                    <path d="M25,25 H15 M15,25 L18,28" stroke={theme.colors.info} strokeWidth="1.5" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Bill" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="5" width="30" height="40" fill="none" stroke={theme.colors.text} />
                    <line x1="10" y1="15" x2="30" y2="15" stroke={theme.colors.text} />
                    <line x1="10" y1="25" x2="20" y2="25" stroke={theme.colors.text} />
                    <text x="25" y="40" fontSize="8" fontWeight="bold" fill={theme.colors.text}>$</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Receipt" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <path d="M5,5 H35 V40 L30,45 L25,40 L20,45 L15,40 L10,45 L5,40 Z" fill="none" stroke={theme.colors.text} />
                    <line x1="10" y1="15" x2="30" y2="15" stroke={theme.colors.text} strokeDasharray="2 2" />
                    <line x1="10" y1="25" x2="30" y2="25" stroke={theme.colors.text} strokeDasharray="2 2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Pending" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={theme.colors.warning} strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M20,10 V20 H28" stroke={theme.colors.warning} strokeWidth="2" fill="none" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 6. Loans & Insurance --- */}
        <SectionTitle>6. Loans & Insurance</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Shield (Ins)" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L35,10 V20 C35,30 20,38 20,38 C20,38 5,30 5,20 V10 L20,5" fill={theme.colors.primary} />
                    <path d="M15,20 L20,25 L25,15" stroke="white" fill="none" strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Umbrella" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,20 Q20,0 35,20" fill={theme.colors.secondary} />
                    <line x1="20" y1="20" x2="20" y2="35" stroke={theme.colors.text} strokeWidth="2" />
                    <path d="M20,35 Q15,35 15,30" stroke={theme.colors.text} strokeWidth="2" fill="none" />
                </svg>
            </GalleryItem>
            <GalleryItem title="House Loan" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,20 L20,5 L35,20 V35 H5 Z" fill="none" stroke={theme.colors.text} />
                    <text x="20" y="30" fontSize="12" fontWeight="bold" textAnchor="middle" fill={theme.colors.text}>%</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Car Loan" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <path d="M10,25 L15,15 H45 L50,25 H60 V35 H0 V25 H10" fill={theme.colors.text} opacity="0.2" />
                    <circle cx="15" cy="35" r="4" fill={theme.colors.text} />
                    <circle cx="45" cy="35" r="4" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Life Ins" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,35 Q5,20 5,12 A8,8 0 0,1 20,12 A8,8 0 0,1 35,12 Q35,20 20,35" fill={theme.colors.error} />
                    <path d="M15,15 L25,15 M20,10 L20,20" stroke="white" strokeWidth="2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Calculator" centered>
                <svg viewBox="0 0 40 50" className="w-10 h-12">
                    <rect x="5" y="5" width="30" height="40" rx="2" fill={theme.colors.surface} stroke={theme.colors.text} />
                    <rect x="10" y="10" width="20" height="8" fill={theme.colors.text} opacity="0.1" />
                    <circle cx="12" cy="25" r="1.5" fill={theme.colors.text} />
                    <circle cx="20" cy="25" r="1.5" fill={theme.colors.text} />
                    <circle cx="28" cy="25" r="1.5" fill={theme.colors.text} />
                    <circle cx="12" cy="32" r="1.5" fill={theme.colors.text} />
                    <circle cx="20" cy="32" r="1.5" fill={theme.colors.text} />
                    <circle cx="28" cy="32" r="1.5" fill={theme.colors.text} />
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
