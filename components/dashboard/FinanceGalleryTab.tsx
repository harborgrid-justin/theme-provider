import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const FinanceGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Finance & Trading Primitives</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Specialized UI tokens for banking, crypto, trading platforms, and wallets.
        </p>

        {/* --- 1. Markets & Trading --- */}
        <SectionTitle>Markets & Trading</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Ticker Up" centered>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-sm" style={{ color: theme.colors.text }}>AAPL</span>
                    <span className="text-xs font-bold text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
                        <span className="text-[8px] mr-0.5">▲</span> 1.2%
                    </span>
                </div>
            </GalleryItem>

            <GalleryItem title="Ticker Down" centered>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-sm" style={{ color: theme.colors.text }}>TSLA</span>
                    <span className="text-xs font-bold text-red-600 flex items-center bg-red-50 px-1.5 py-0.5 rounded">
                        <span className="text-[8px] mr-0.5">▼</span> 0.8%
                    </span>
                </div>
            </GalleryItem>

            <GalleryItem title="Order Book: Ask" centered>
                <div className="w-full px-2 relative h-full flex items-center">
                    <div className="absolute right-0 top-1 bottom-1 bg-red-500 opacity-10 w-[40%] rounded-l"></div>
                    <div className="w-full flex justify-between text-xs font-mono relative z-10">
                        <span style={{ color: theme.colors.error }}>142.50</span>
                        <span className="opacity-60" style={{ color: theme.colors.text }}>0.4521</span>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Order Book: Bid" centered>
                <div className="w-full px-2 relative h-full flex items-center">
                    <div className="absolute right-0 top-1 bottom-1 bg-green-500 opacity-10 w-[65%] rounded-l"></div>
                    <div className="w-full flex justify-between text-xs font-mono relative z-10">
                        <span style={{ color: theme.colors.success }}>142.45</span>
                        <span className="opacity-60" style={{ color: theme.colors.text }}>1.2004</span>
                    </div>
                </div>
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
                <div className="w-full px-3">
                    <div className="flex justify-between text-[8px] font-bold mb-1 opacity-50 uppercase tracking-wide">
                        <span>1x</span><span>100x</span>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full">
                        <div className="absolute left-0 top-0 h-full w-1/3 bg-orange-500 rounded-full"></div>
                        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-orange-500 rounded-full shadow-sm"></div>
                        <div className="absolute -top-5 left-1/3 -translate-x-1/2 bg-orange-500 text-white text-[8px] px-1 rounded font-bold">20x</div>
                    </div>
                </div>
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

        {/* --- 2. Banking & Cards --- */}
        <SectionTitle>Banking & Cards</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Credit Card" centered>
                <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-gray-800 to-black text-white p-2 flex flex-col justify-between shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-5 rounded-full -mr-8 -mt-8"></div>
                    <div className="flex justify-between items-start">
                        <div className="w-3 h-2 bg-yellow-200 rounded-[1px] opacity-80"></div>
                        <span className="text-[6px] font-bold tracking-widest">VISA</span>
                    </div>
                    <div>
                        <div className="text-[6px] font-mono tracking-widest mb-0.5">•••• 4242</div>
                        <div className="flex justify-between text-[4px] opacity-70">
                            <span>ALEX MORGAN</span>
                            <span>12/26</span>
                        </div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Card: Apple Pay" centered>
                <div className="w-24 h-16 rounded-lg bg-black text-white p-2 flex items-center justify-center border border-gray-800 shadow-sm">
                    <div className="flex items-center gap-1 font-bold text-xs">
                        <span className="material-icons text-sm">apple</span> Pay
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Masked Account" centered>
                <div className="flex items-center gap-2 font-mono text-xs opacity-70">
                    <span className="tracking-widest">••••</span> 8829
                </div>
            </GalleryItem>

            <GalleryItem title="Amount Input" centered>
                <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 font-bold opacity-40">$</span>
                    <div className="pl-5 pr-2 py-1 border rounded text-lg font-bold w-24 text-right" style={{ borderColor: theme.colors.text + '20' }}>
                        0.00
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="CVV Hint" centered>
                <div className="w-10 h-7 border rounded bg-gray-50 relative flex items-center justify-center">
                    <div className="w-full h-1.5 bg-gray-300 absolute top-1"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-red-500 absolute right-1 top-2.5 opacity-50"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Statement Row" centered>
                <div className="w-full px-2">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold" style={{ color: theme.colors.text }}>Netflix</span>
                        <span className="text-[10px] font-bold" style={{ color: theme.colors.text }}>-$14.99</span>
                    </div>
                    <div className="text-[8px] opacity-50">Oct 24 • Entertainment</div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 3. Crypto & Web3 --- */}
        <SectionTitle>Crypto & Web3</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Wallet Address" centered>
                <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1 border border-gray-200 cursor-pointer hover:bg-gray-200">
                    <span className="font-mono text-[8px] text-gray-600">0x71...3A4f</span>
                    <Icons.Copy size="sm" className="w-2 h-2 opacity-50"/>
                </div>
            </GalleryItem>

            <GalleryItem title="Gas Fee" centered>
                <div className="flex items-center gap-1 text-[10px] font-medium text-gray-500">
                    <Icons.Battery size="sm" className="w-3 h-3"/> 12 Gwei
                </div>
            </GalleryItem>

            <GalleryItem title="Token Pair" centered>
                <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-orange-500 z-10 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-500 -ml-2 border-2 border-white"></div>
                    <span className="ml-2 text-[10px] font-bold">BTC-ETH</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Connect Wallet" centered>
                <button className="px-3 py-1.5 rounded-full border border-gray-300 text-[10px] font-bold hover:bg-gray-50 transition-colors shadow-sm">
                    Connect Wallet
                </button>
            </GalleryItem>

            <GalleryItem title="Network Badge" centered>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-purple-50 text-purple-700 border border-purple-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span className="text-[8px] font-bold uppercase">Polygon</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Seed Phrase" centered>
                <div className="grid grid-cols-2 gap-1 w-full px-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="flex items-center gap-1 bg-gray-50 rounded px-1 py-0.5 border border-gray-100">
                            <span className="text-[6px] opacity-40">{i}</span>
                            <div className="h-1 w-6 bg-gray-300 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </GalleryItem>
        </div>
    </div>
  );
};
