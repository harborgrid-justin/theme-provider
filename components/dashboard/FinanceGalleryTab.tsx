import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GalleryItem } from './GalleryItem';
import { SectionTitle } from './SectionTitle';
import { Icons } from './DashboardIcons';

export const FinanceGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  // Helper variables for cleaner JSX
  const text = theme.colors.text;
  const primary = theme.colors.primary;
  const secondary = theme.colors.secondary;
  const success = theme.colors.success;
  const error = theme.colors.error;
  const warning = theme.colors.warning;
  const surface = theme.colors.surface;
  
  // Reusable styles
  const svgStyle = { overflow: 'visible' as const };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <SectionTitle style={{ marginTop: '1rem' }}>Finance & Trading Primitives (140+ Items)</SectionTitle>
        <p className="mb-8 opacity-60" style={{ color: text }}>
            Specialized UI tokens for banking, crypto, trading platforms, fintech dashboards, and wallets.
        </p>

        {/* --- 1. Markets & Trading --- */}
        <SectionTitle>Markets & Trading</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Ticker Up" centered>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-sm" style={{ color: text }}>AAPL</span>
                    <span className="text-xs font-bold flex items-center px-1.5 py-0.5 rounded" style={{ color: success, backgroundColor: success + '10' }}>
                        <span className="text-[8px] mr-0.5">▲</span> 1.2%
                    </span>
                </div>
            </GalleryItem>

            <GalleryItem title="Ticker Down" centered>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-sm" style={{ color: text }}>TSLA</span>
                    <span className="text-xs font-bold flex items-center px-1.5 py-0.5 rounded" style={{ color: error, backgroundColor: error + '10' }}>
                        <span className="text-[8px] mr-0.5">▼</span> 0.8%
                    </span>
                </div>
            </GalleryItem>

            <GalleryItem title="Order Book: Ask" centered>
                <div className="w-full px-2 relative h-full flex items-center">
                    <div className="absolute right-0 top-1 bottom-1 opacity-10 w-[40%] rounded-l" style={{ backgroundColor: error }}></div>
                    <div className="w-full flex justify-between text-xs font-mono relative z-10">
                        <span style={{ color: error }}>142.50</span>
                        <span className="opacity-60" style={{ color: text }}>0.4521</span>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Order Book: Bid" centered>
                <div className="w-full px-2 relative h-full flex items-center">
                    <div className="absolute right-0 top-1 bottom-1 opacity-10 w-[65%] rounded-l" style={{ backgroundColor: success }}></div>
                    <div className="w-full flex justify-between text-xs font-mono relative z-10">
                        <span style={{ color: success }}>142.45</span>
                        <span className="opacity-60" style={{ color: text }}>1.2004</span>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Candle: Bull" centered>
                <svg viewBox="0 0 40 60" className="w-8 h-12">
                    <line x1="20" y1="5" x2="20" y2="55" stroke={success} strokeWidth="1.5" />
                    <rect x="15" y="15" width="10" height="30" fill={success} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Candle: Bear" centered>
                <svg viewBox="0 0 40 60" className="w-8 h-12">
                    <line x1="20" y1="5" x2="20" y2="55" stroke={error} strokeWidth="1.5" />
                    <rect x="15" y="20" width="10" height="20" fill={error} />
                </svg>
            </GalleryItem>

            <GalleryItem title="Leverage Slider" centered>
                <div className="w-full px-3">
                    <div className="flex justify-between text-[8px] font-bold mb-1 opacity-50 uppercase tracking-wide" style={{ color: text }}>
                        <span>1x</span><span>100x</span>
                    </div>
                    <div className="relative h-2 rounded-full" style={{ backgroundColor: text + '20' }}>
                        <div className="absolute left-0 top-0 h-full w-1/3 rounded-full" style={{ backgroundColor: warning }}></div>
                        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 border rounded-full shadow-sm" style={{ backgroundColor: surface, borderColor: warning }}></div>
                        <div className="absolute -top-5 left-1/3 -translate-x-1/2 text-white text-[8px] px-1 rounded font-bold" style={{ backgroundColor: warning }}>20x</div>
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Market Depth" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12">
                    <path d="M0,40 L0,20 Q20,25 50,20 V40 Z" fill={success} fillOpacity="0.2" />
                    <path d="M0,20 Q20,25 50,20" fill="none" stroke={success} strokeWidth="1" />
                    <path d="M100,40 L100,10 Q80,25 50,20 V40 Z" fill={error} fillOpacity="0.2" />
                    <path d="M100,10 Q80,25 50,20" fill="none" stroke={error} strokeWidth="1" />
                </svg>
            </GalleryItem>
        </div>

        {/* --- 2. Financial Data Viz --- */}
        <SectionTitle>Financial Data Viz</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Sparkline: Profit" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12" style={svgStyle}>
                    <path d="M0,35 L20,30 L40,32 L60,15 L80,20 L100,5" fill="none" stroke={success} strokeWidth="2" />
                    <circle cx="100" cy="5" r="3" fill={success} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Sparkline: Loss" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12" style={svgStyle}>
                    <path d="M0,5 L20,10 L40,8 L60,25 L80,20 L100,35" fill="none" stroke={error} strokeWidth="2" />
                    <circle cx="100" cy="35" r="3" fill={error} />
                </svg>
            </GalleryItem>
            <GalleryItem title="Mini Portfolio" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill={primary} stroke={surface} strokeWidth="2" strokeDasharray="60 100" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={secondary} strokeWidth="4" strokeDasharray="30 100" strokeDashoffset="-60" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke={warning} strokeWidth="4" strokeDasharray="10 100" strokeDashoffset="-90" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Asset Allocation" centered>
                <div className="w-full px-2">
                    <div className="flex h-3 rounded-sm overflow-hidden w-full">
                        <div className="w-[50%]" style={{ backgroundColor: primary }}></div>
                        <div className="w-[30%]" style={{ backgroundColor: secondary }}></div>
                        <div className="w-[20%]" style={{ backgroundColor: warning }}></div>
                    </div>
                    <div className="flex justify-between text-[6px] mt-1 opacity-60" style={{ color: text }}>
                        <span>Stocks</span><span>Bonds</span><span>Cash</span>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Yield Curve" centered>
                <svg viewBox="0 0 100 40" className="w-24 h-12" style={svgStyle}>
                    <path d="M0,35 Q30,10 60,15 T100,5" fill="none" stroke={text} strokeWidth="1.5" />
                    <line x1="0" y1="40" x2="100" y2="40" stroke={text} strokeOpacity="0.2" />
                    <line x1="0" y1="0" x2="0" y2="40" stroke={text} strokeOpacity="0.2" />
                </svg>
            </GalleryItem>
            <GalleryItem title="Volume Bar" centered>
                <div className="flex items-end gap-1 h-12">
                    <div className="w-2 h-4" style={{ backgroundColor: success }}></div>
                    <div className="w-2 h-8" style={{ backgroundColor: success }}></div>
                    <div className="w-2 h-6" style={{ backgroundColor: error }}></div>
                    <div className="w-2 h-10" style={{ backgroundColor: success }}></div>
                    <div className="w-2 h-3" style={{ backgroundColor: error }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="RSI Meter" centered>
                <div className="w-24 h-4 border rounded-full relative overflow-hidden" style={{ borderColor: text + '20' }}>
                    <div className="absolute top-0 bottom-0 left-0 bg-green-500 opacity-20 w-[30%]"></div>
                    <div className="absolute top-0 bottom-0 right-0 bg-red-500 opacity-20 w-[30%]"></div>
                    <div className="absolute top-0 bottom-0 left-[60%] w-1 bg-black" style={{ backgroundColor: text }}></div>
                </div>
                <div className="text-[8px] mt-1 font-mono font-bold" style={{ color: text }}>RSI: 60</div>
            </GalleryItem>
            <GalleryItem title="Sentiment" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M5,25 A25,25 0 0,1 55,25" fill="none" stroke={text} strokeOpacity="0.2" strokeWidth="4" />
                    <path d="M5,25 A25,25 0 0,1 40,8" fill="none" stroke={success} strokeWidth="4" />
                    <text x="30" y="25" fontSize="8" fontWeight="bold" textAnchor="middle" fill={success}>Bullish</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Correlation" centered>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-100 p-0.5">
                    {[1, 0.8, 0.2, 0.8, 1, -0.5, 0.2, -0.5, 1].map((v, i) => (
                        <div key={i} className="w-6 h-6 flex items-center justify-center text-[6px]" 
                             style={{ backgroundColor: v === 1 ? primary : v > 0 ? success : error, opacity: Math.abs(v), color: '#fff' }}>
                            {v}
                        </div>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="Treemap Node" centered>
                <div className="w-24 h-16 border p-1 relative flex flex-col justify-between" style={{ backgroundColor: success + '20', borderColor: success }}>
                    <span className="text-[8px] font-bold" style={{ color: text }}>NVDA</span>
                    <span className="text-[10px] font-bold" style={{ color: success }}>+4.2%</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 3. Transaction Lists --- */}
        <SectionTitle>Transaction Lists</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Transaction Row" centered>
                <div className="w-full px-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100" style={{ backgroundColor: text + '10' }}>
                            <Icons.ShoppingBag size="sm" className="w-3" style={{ color: text }} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-bold" style={{ color: text }}>Apple Store</span>
                            <span className="text-[6px] opacity-60" style={{ color: text }}>Electronics</span>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold" style={{ color: text }}>-$120.00</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Pending Tx" centered>
                <div className="w-full px-2 flex justify-between items-center opacity-60">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full border-2 border-dashed flex items-center justify-center" style={{ borderColor: text }}>
                            <Icons.Clock size="sm" className="w-3" style={{ color: text }} />
                        </div>
                        <span className="text-[8px] italic" style={{ color: text }}>Pending...</span>
                    </div>
                    <span className="text-[10px]" style={{ color: text }}>-$45.00</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Failed Tx" centered>
                <div className="w-full px-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-100" style={{ backgroundColor: error + '20' }}>
                            <Icons.Close size="sm" className="w-3" style={{ color: error }} />
                        </div>
                        <span className="text-[8px] font-bold" style={{ color: error }}>Failed</span>
                    </div>
                    <span className="text-[10px] line-through opacity-50" style={{ color: text }}>$99.00</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Refund Row" centered>
                <div className="w-full px-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-100" style={{ backgroundColor: success + '20' }}>
                            <Icons.Refresh size="sm" className="w-3" style={{ color: success }} />
                        </div>
                        <span className="text-[8px] font-bold" style={{ color: text }}>Refund</span>
                    </div>
                    <span className="text-[10px] font-bold" style={{ color: success }}>+$24.99</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Recurring Bill" centered>
                <div className="w-full px-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-black flex items-center justify-center text-white font-bold text-[8px]">N</div>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-bold" style={{ color: text }}>Netflix</span>
                            <span className="text-[6px] opacity-60" style={{ color: text }}>Monthly</span>
                        </div>
                    </div>
                    <span className="text-[10px]" style={{ color: text }}>$15.00</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Date Divider" centered>
                <div className="flex items-center gap-2 w-full px-4">
                    <span className="text-[8px] font-bold opacity-60 whitespace-nowrap" style={{ color: text }}>Today, Oct 24</span>
                    <div className="h-px bg-gray-200 flex-1" style={{ backgroundColor: text + '20' }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Receipt Item" centered>
                <div className="w-full px-4 flex justify-between text-[8px]" style={{ color: text }}>
                    <span>1x Coffee Latte</span>
                    <span>$4.50</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Tax Row" centered>
                <div className="w-full px-4 flex justify-between text-[8px] opacity-60" style={{ color: text }}>
                    <span>VAT (20%)</span>
                    <span>$0.90</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Total Row" centered>
                <div className="w-full px-4 flex justify-between text-[10px] font-bold border-t pt-1 mt-1" style={{ color: text, borderColor: text + '20' }}>
                    <span>Total</span>
                    <span>$5.40</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Category Icon" centered>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: warning + '20', color: warning }}>
                    <Icons.ShoppingBag size="sm"/>
                </div>
            </GalleryItem>
        </div>

        {/* --- 4. Wallet & Accounts --- */}
        <SectionTitle>Wallet & Accounts</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Total Balance" centered>
                <div className="text-center">
                    <span className="text-[8px] opacity-60 uppercase tracking-wide" style={{ color: text }}>Total Balance</span>
                    <div className="text-xl font-bold" style={{ color: text }}>$24,500<span className="opacity-50 text-sm">.00</span></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Currency Switch" centered>
                <div className="flex bg-gray-100 p-0.5 rounded-lg border" style={{ backgroundColor: text + '05', borderColor: text + '10' }}>
                    <div className="px-2 py-0.5 rounded text-[8px] font-bold shadow-sm" style={{ backgroundColor: surface, color: text }}>USD</div>
                    <div className="px-2 py-0.5 rounded text-[8px] opacity-50 cursor-pointer" style={{ color: text }}>EUR</div>
                    <div className="px-2 py-0.5 rounded text-[8px] opacity-50 cursor-pointer" style={{ color: text }}>BTC</div>
                </div>
            </GalleryItem>
            <GalleryItem title="IBAN Display" centered>
                <div className="font-mono text-[8px] p-2 bg-gray-50 rounded border flex items-center gap-2" style={{ backgroundColor: text + '05', borderColor: text + '10', color: text }}>
                    <span>DE89 3704...</span>
                    <Icons.Copy size="sm" className="w-2 opacity-50"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Account Masked" centered>
                <div className="flex items-center gap-1 text-[10px]" style={{ color: text }}>
                    <span className="font-bold">Checking</span>
                    <span className="opacity-50">•••• 4242</span>
                </div>
            </GalleryItem>
            <GalleryItem title="QR Code Mini" centered>
                <div className="w-10 h-10 bg-white p-0.5 border rounded" style={{ borderColor: text }}>
                    <div className="w-full h-full bg-black" style={{ backgroundColor: text, clipPath: 'polygon(0% 0%, 0% 100%, 20% 100%, 20% 20%, 80% 20%, 80% 80%, 20% 80%, 20% 100%, 100% 100%, 100% 0%)' }}></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Address Chip" centered>
                <div className="flex items-center gap-1 pl-2 pr-1 py-0.5 rounded-full border bg-gray-50 max-w-full" style={{ borderColor: text + '20', backgroundColor: surface }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primary }}></div>
                    <span className="text-[6px] font-mono truncate w-12" style={{ color: text }}>0x71C...9A</span>
                    <Icons.Copy size="sm" className="w-2 opacity-50"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Network Fee" centered>
                <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold" style={{ color: text }}>$0.45</span>
                    <span className="text-[6px] opacity-50" style={{ color: text }}>Network Fee</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Gas Limit" centered>
                <div className="border px-2 py-1 rounded text-[8px] font-mono" style={{ borderColor: text + '20', color: text }}>
                    21000
                </div>
            </GalleryItem>
            <GalleryItem title="Block Height" centered>
                <div className="flex items-center gap-1 text-[8px]" style={{ color: text }}>
                    <Icons.Layers size="sm" className="w-2 opacity-50"/>
                    <span className="font-mono">#182934</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Swift Code" centered>
                <div className="text-[8px] font-mono tracking-widest border-b border-dashed" style={{ color: text, borderColor: text + '40' }}>
                    BOFAUS3N
                </div>
            </GalleryItem>
        </div>

        {/* --- 5. Banking & Cards --- */}
        <SectionTitle>Banking & Cards</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Credit Card" centered>
                <div className="w-24 h-16 rounded-lg text-white p-2 flex flex-col justify-between shadow-lg relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${text}, ${theme.colors.textSecondary})` }}>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-5 rounded-full -mr-8 -mt-8"></div>
                    <div className="flex justify-between items-start">
                        <div className="w-3 h-2 rounded-[1px] opacity-80" style={{ backgroundColor: '#FCD34D' }}></div>
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
                <div className="w-24 h-16 rounded-lg text-white p-2 flex items-center justify-center border shadow-sm" style={{ backgroundColor: '#000', borderColor: text + '40' }}>
                    <div className="flex items-center gap-1 font-bold text-xs">
                        <span className="material-icons text-sm">apple</span> Pay
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="Amount Input" centered>
                <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 font-bold opacity-40" style={{ color: text }}>$</span>
                    <div className="pl-5 pr-2 py-1 border rounded text-lg font-bold w-24 text-right" style={{ borderColor: text + '20', color: text }}>
                        0.00
                    </div>
                </div>
            </GalleryItem>

            <GalleryItem title="CVV Hint" centered>
                <div className="w-10 h-7 border rounded relative flex items-center justify-center" style={{ backgroundColor: text + '05', borderColor: text + '20' }}>
                    <div className="w-full h-1.5 absolute top-1" style={{ backgroundColor: text + '20' }}></div>
                    <div className="w-3 h-3 rounded-full border-2 absolute right-1 top-2.5 opacity-50" style={{ borderColor: error }}></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Card Chip" centered>
                <div className="w-8 h-6 rounded bg-[#FCD34D] relative overflow-hidden border border-black/10">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-black/20"></div>
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-black/20"></div>
                    <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/20"></div>
                </div>
            </GalleryItem>

            <GalleryItem title="Freeze Card" centered>
                <div className="flex flex-col items-center gap-1 text-[8px]" style={{ color: text }}>
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:bg-gray-50" style={{ borderColor: text + '20' }}>
                        <Icons.Lock size="sm"/>
                    </div>
                    <span>Freeze</span>
                </div>
            </GalleryItem>
        </div>

        {/* --- 6. Invoicing & Pay --- */}
        <SectionTitle>Invoicing & Payments</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Invoice Header" centered>
                <div className="w-full px-2">
                    <div className="text-[10px] font-bold" style={{ color: text }}>INVOICE</div>
                    <div className="text-[8px] opacity-60" style={{ color: text }}>#INV-001</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Status: Paid" centered>
                <div className="border-2 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider transform -rotate-12 opacity-80" style={{ borderColor: success, color: success }}>
                    PAID
                </div>
            </GalleryItem>
            <GalleryItem title="Status: Overdue" centered>
                <div className="px-2 py-1 rounded text-[8px] font-bold uppercase tracking-wider bg-red-100 text-red-600" style={{ backgroundColor: error + '20', color: error }}>
                    Overdue
                </div>
            </GalleryItem>
            <GalleryItem title="Due Date" centered>
                <div className="flex items-center gap-1 text-[8px]" style={{ color: text }}>
                    <span className="opacity-50">Due:</span>
                    <span className="font-bold">Oct 31</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Method: Card" centered>
                <div className="flex items-center gap-2 border px-2 py-1 rounded cursor-pointer hover:border-blue-500" style={{ borderColor: text + '20' }}>
                    <div className="w-4 h-3 bg-gray-200 rounded"></div>
                    <span className="text-[8px] font-bold" style={{ color: text }}>Card</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Method: Crypto" centered>
                <div className="flex items-center gap-2 border px-2 py-1 rounded cursor-pointer hover:border-blue-500" style={{ borderColor: text + '20' }}>
                    <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                    <span className="text-[8px] font-bold" style={{ color: text }}>BTC</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Discount Chip" centered>
                <span className="px-1.5 py-0.5 rounded text-[8px] font-mono text-green-600 bg-green-50 border border-green-200">
                    -10%
                </span>
            </GalleryItem>
            <GalleryItem title="Grand Total" centered>
                <div className="text-right w-full px-4">
                    <div className="text-[6px] opacity-50 uppercase" style={{ color: text }}>Total</div>
                    <div className="text-sm font-bold" style={{ color: text }}>$1,250.00</div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 7. Trading Controls --- */}
        <SectionTitle>Trading Controls</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Buy Button" centered>
                <button className="w-20 py-1.5 rounded text-[10px] font-bold text-white shadow-sm hover:brightness-110 active:scale-95 transition-all" style={{ backgroundColor: success }}>
                    BUY
                </button>
            </GalleryItem>
            <GalleryItem title="Sell Button" centered>
                <button className="w-20 py-1.5 rounded text-[10px] font-bold text-white shadow-sm hover:brightness-110 active:scale-95 transition-all" style={{ backgroundColor: error }}>
                    SELL
                </button>
            </GalleryItem>
            <GalleryItem title="Order Type" centered>
                <div className="flex text-[8px] border rounded overflow-hidden" style={{ borderColor: text + '20' }}>
                    <div className="px-2 py-1 bg-gray-100 font-bold" style={{ backgroundColor: text + '10', color: text }}>Limit</div>
                    <div className="px-2 py-1 opacity-50 cursor-pointer hover:bg-gray-50" style={{ color: text }}>Market</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Stop Loss Input" centered>
                <div className="relative w-20">
                    <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[6px] font-bold opacity-50" style={{ color: text }}>SL</span>
                    <input className="w-full pl-4 py-1 text-[8px] border rounded text-right outline-none focus:border-red-400" placeholder="0.00" style={{ borderColor: text + '20', color: text, backgroundColor: 'transparent' }} />
                </div>
            </GalleryItem>
            <GalleryItem title="Margin Mode" centered>
                <span className="text-[8px] font-bold uppercase border-b border-dashed cursor-help" style={{ color: warning, borderColor: warning }}>Isolated 5x</span>
            </GalleryItem>
            <GalleryItem title="Slippage" centered>
                <div className="flex items-center gap-1 text-[8px] opacity-60" style={{ color: text }}>
                    <Icons.Settings size="sm" className="w-2"/> 0.5%
                </div>
            </GalleryItem>
            <GalleryItem title="Cancel Order" centered>
                <div className="flex items-center gap-1 text-[8px] text-red-500 font-bold cursor-pointer hover:underline">
                    <Icons.Close size="sm" className="w-2"/> Cancel
                </div>
            </GalleryItem>
            <GalleryItem title="Percent Select" centered>
                <div className="flex gap-1">
                    {['25%', '50%', 'MAX'].map(p => (
                        <button key={p} className="px-1 py-0.5 border rounded text-[6px] hover:bg-gray-50 transition-colors" style={{ borderColor: text + '20', color: text }}>{p}</button>
                    ))}
                </div>
            </GalleryItem>
        </div>

        {/* --- 8. Security & Identity --- */}
        <SectionTitle>Security & Identity</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="KYC Verified" centered>
                <div className="flex flex-col items-center text-green-600">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <Icons.Check size="sm"/>
                    </div>
                    <span className="text-[8px] font-bold">Verified</span>
                </div>
            </GalleryItem>
            <GalleryItem title="2FA Token" centered>
                <div className="flex gap-1">
                    <div className="w-6 h-8 border rounded flex items-center justify-center font-mono text-xs" style={{ borderColor: text + '20', color: text }}>2</div>
                    <div className="w-6 h-8 border rounded flex items-center justify-center font-mono text-xs" style={{ borderColor: text + '20', color: text }}>9</div>
                    <div className="w-6 h-8 border rounded flex items-center justify-center font-mono text-xs" style={{ borderColor: text + '20', color: text }}>4</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Recovery Word" centered>
                <div className="flex items-center gap-2 border px-2 py-1 rounded bg-gray-50" style={{ borderColor: text + '10', backgroundColor: text + '05' }}>
                    <span className="text-[8px] opacity-40 font-mono">1.</span>
                    <span className="text-[10px] font-bold" style={{ color: text }}>apple</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Fingerprint" centered>
                <div className="w-10 h-10 border rounded flex items-center justify-center text-red-500" style={{ borderColor: error }}>
                    <Icons.Lock size="md"/>
                </div>
            </GalleryItem>
            <GalleryItem title="Security Score" centered>
                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-[10px] font-bold" style={{ borderColor: success, color: success }}>
                    A+
                </div>
            </GalleryItem>
            <GalleryItem title="Pin Dot" centered>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-black" style={{ backgroundColor: text }}></div>
                    <div className="w-2 h-2 rounded-full bg-black" style={{ backgroundColor: text }}></div>
                    <div className="w-2 h-2 rounded-full border" style={{ borderColor: text }}></div>
                    <div className="w-2 h-2 rounded-full border" style={{ borderColor: text }}></div>
                </div>
            </GalleryItem>
        </div>

        {/* --- 9. Crypto & Web3 (Originals) --- */}
        <SectionTitle>Crypto & Web3 (Originals)</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Wallet Address" centered>
                <div className="flex items-center gap-1 rounded-full px-2 py-1 border cursor-pointer hover:bg-opacity-80" style={{ backgroundColor: text + '05', borderColor: text + '20' }}>
                    <span className="font-mono text-[8px]" style={{ color: text }}>0x71...3A4f</span>
                    <Icons.Copy size="sm" className="w-2 h-2 opacity-50" style={{ color: text }}/>
                </div>
            </GalleryItem>

            <GalleryItem title="Gas Fee" centered>
                <div className="flex items-center gap-1 text-[10px] font-medium" style={{ color: secondary }}>
                    <Icons.Battery size="sm" className="w-3 h-3"/> 12 Gwei
                </div>
            </GalleryItem>

            <GalleryItem title="Token Pair" centered>
                <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full z-10 border-2 border-white" style={{ backgroundColor: '#F7931A' }}></div>
                    <div className="w-6 h-6 rounded-full -ml-2 border-2 border-white" style={{ backgroundColor: '#627EEA' }}></div>
                    <span className="ml-2 text-[10px] font-bold" style={{ color: text }}>BTC-ETH</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Connect Wallet" centered>
                <button className="px-3 py-1.5 rounded-full border text-[10px] font-bold hover:bg-opacity-80 transition-colors shadow-sm" style={{ borderColor: text + '30', color: text }}>
                    Connect Wallet
                </button>
            </GalleryItem>

            <GalleryItem title="Network Badge" centered>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded border" style={{ backgroundColor: theme.colors.accent + '10', color: theme.colors.accent, borderColor: theme.colors.accent + '30' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
                    <span className="text-[8px] font-bold uppercase">Polygon</span>
                </div>
            </GalleryItem>

            <GalleryItem title="Seed Phrase" centered>
                <div className="grid grid-cols-2 gap-1 w-full px-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="flex items-center gap-1 rounded px-1 py-0.5 border" style={{ backgroundColor: text + '05', borderColor: text + '10' }}>
                            <span className="text-[6px] opacity-40" style={{ color: text }}>{i}</span>
                            <div className="h-1 w-6 rounded-full" style={{ backgroundColor: text + '20' }}></div>
                        </div>
                    ))}
                </div>
            </GalleryItem>
        </div>

        {/* --- 10. DeFi & Advanced Crypto (NEW) --- */}
        <SectionTitle>DeFi & Advanced Crypto</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Token Swap" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M15,10 V30 M15,30 L10,25 M15,30 L20,25" stroke={text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M25,30 V10 M25,10 L20,15 M25,10 L30,15" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Liquidity Pool" centered>
                <svg viewBox="0 0 60 40" className="w-16 h-12">
                    <circle cx="20" cy="20" r="15" fill={primary} fillOpacity="0.5" stroke={primary} strokeWidth="1"/>
                    <circle cx="40" cy="20" r="15" fill={secondary} fillOpacity="0.5" stroke={secondary} strokeWidth="1"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Staking Vault" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="10" width="30" height="25" rx="2" fill="none" stroke={text} strokeWidth="1.5"/>
                    <circle cx="20" cy="22" r="4" fill={text}/>
                    <path d="M20,10 V5 M15,5 H25" stroke={text} strokeWidth="1.5"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Yield Farm" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,35 V15" stroke={success} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20,25 Q30,20 30,10" fill="none" stroke={success} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20,25 Q10,20 10,15" fill="none" stroke={success} strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="20" cy="35" r="2" fill={text} opacity="0.5"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Bridge Transfer" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <rect x="0" y="10" width="15" height="20" rx="2" fill={text} opacity="0.2"/>
                    <rect x="45" y="10" width="15" height="20" rx="2" fill={primary} opacity="0.2"/>
                    <path d="M15,20 Q30,5 45,20" fill="none" stroke={text} strokeWidth="1.5" strokeDasharray="3 3"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Airdrop" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,10 C10,0 30,0 30,10 C30,18 10,18 10,10" fill={primary} fillOpacity="0.2" stroke={primary} strokeWidth="1.5"/>
                    <line x1="12" y1="15" x2="18" y2="25" stroke={text} strokeWidth="1"/>
                    <line x1="28" y1="15" x2="22" y2="25" stroke={text} strokeWidth="1"/>
                    <rect x="15" y="25" width="10" height="10" rx="1" fill={text}/>
                </svg>
            </GalleryItem>
            <GalleryItem title="DAO Proposal" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="10" y="5" width="20" height="30" rx="2" fill="none" stroke={text} strokeWidth="1.5"/>
                    <line x1="15" y1="12" x2="25" y2="12" stroke={text} strokeWidth="1.5"/>
                    <line x1="15" y1="18" x2="25" y2="18" stroke={text} strokeWidth="1.5"/>
                    <path d="M15,26 L18,29 L26,21" fill="none" stroke={success} strokeWidth="2"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Gas Tracker" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M5,25 A15,15 0 1,1 35,25" fill="none" stroke={text} strokeWidth="2" strokeOpacity="0.2"/>
                    <path d="M5,25 A15,15 0 0,1 20,10" fill="none" stroke={warning} strokeWidth="2"/>
                    <line x1="20" y1="25" x2="20" y2="15" stroke={text} strokeWidth="2"/>
                    <circle cx="20" cy="25" r="2" fill={text}/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Slippage" centered>
                <div className="w-full px-4">
                    <div className="flex justify-between text-[6px] font-bold mb-1 opacity-50 uppercase tracking-wide" style={{ color: text }}>
                        <span>0.1%</span><span>5%</span>
                    </div>
                    <div className="relative h-1.5 rounded-full" style={{ backgroundColor: text + '10' }}>
                        <div className="absolute left-0 top-0 h-full w-[10%] rounded-full" style={{ backgroundColor: primary }}></div>
                        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border shadow-sm rounded-full cursor-pointer" style={{borderColor: primary}}></div>
                    </div>
                </div>
            </GalleryItem>
            <GalleryItem title="Impermanent Loss" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M0,15 Q30,15 60,5" fill="none" stroke={success} strokeWidth="1.5" strokeDasharray="2 2"/>
                    <path d="M0,15 Q30,25 60,28" fill="none" stroke={error} strokeWidth="1.5"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Smart Contract" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,5 H30 V35 H10 Z" fill="none" stroke={text} strokeWidth="1.5"/>
                    <path d="M15,15 L20,20 L15,25" fill="none" stroke={primary} strokeWidth="1.5"/>
                    <path d="M25,28 H20" stroke={primary} strokeWidth="1.5"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Audit Shield" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 L35,10 V20 C35,28 28,35 20,38 C12,35 5,28 5,20 V10 L20,5 Z" fill={success} fillOpacity="0.1" stroke={success} strokeWidth="1.5"/>
                    <path d="M15,20 L18,23 L25,16" fill="none" stroke={success} strokeWidth="2"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Flash Loan" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M22,5 L12,20 H20 L18,35 L28,20 H20 Z" fill={warning} stroke={surface} strokeWidth="1"/>
                </svg>
            </GalleryItem>
        </div>

        {/* --- 11. Personal Finance (NEW) --- */}
        <SectionTitle>Personal Finance</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Savings Jar" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,10 H30 V35 Q30,38 27,38 H13 Q10,38 10,35 Z" fill="none" stroke={text} strokeWidth="1.5"/>
                    <rect x="8" y="5" width="24" height="5" rx="1" fill={text} fillOpacity="0.1" stroke={text} strokeWidth="1.5"/>
                    <circle cx="20" cy="25" r="5" fill={success} opacity="0.8"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Goal Target" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <circle cx="20" cy="20" r="15" fill="none" stroke={text} strokeWidth="1" opacity="0.2"/>
                    <circle cx="20" cy="20" r="10" fill="none" stroke={primary} strokeWidth="3" strokeDasharray="40 60"/>
                    <text x="20" y="23" fontSize="8" fontWeight="bold" textAnchor="middle" fill={text}>60%</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Monthly Budget" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,20 L20,5 A15,15 0 0,1 35,20 Z" fill={primary}/>
                    <path d="M20,20 L35,20 A15,15 0 0,1 20,35 Z" fill={secondary}/>
                    <path d="M20,20 L20,35 A15,15 0 0,1 5,20 Z" fill={warning}/>
                    <path d="M20,20 L5,20 A15,15 0 0,1 20,5 Z" fill={text} opacity="0.1"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Subscription" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="8" y="8" width="24" height="24" rx="3" fill="none" stroke={text} strokeWidth="1.5"/>
                    <path d="M8,14 H32" stroke={text} strokeWidth="1" opacity="0.3"/>
                    <path d="M20,18 V28 M15,23 H25" stroke={primary} strokeWidth="2"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Credit Score" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M5,30 A25,25 0 0,1 55,30" fill="none" stroke={text} strokeWidth="4" opacity="0.1"/>
                    <path d="M5,30 A25,25 0 0,1 40,8" fill="none" stroke={success} strokeWidth="4"/>
                    <text x="30" y="25" fontSize="10" fontWeight="bold" textAnchor="middle" fill={text}>750</text>
                </svg>
            </GalleryItem>
            <GalleryItem title="Net Worth" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <rect x="5" y="25" width="6" height="10" rx="1" fill={primary} opacity="0.4"/>
                    <rect x="13" y="20" width="6" height="15" rx="1" fill={primary} opacity="0.6"/>
                    <rect x="21" y="15" width="6" height="20" rx="1" fill={primary} opacity="0.8"/>
                    <rect x="29" y="5" width="6" height="30" rx="1" fill={primary}/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Cash Flow" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M0,15 Q15,5 30,15 T60,15" fill="none" stroke={success} strokeWidth="2"/>
                    <path d="M0,15 Q15,25 30,15 T60,15" fill="none" stroke={error} strokeWidth="1.5" strokeDasharray="3 3"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Bill Reminder" centered>
                <div className="relative">
                    <Icons.Bell size="md" style={{ color: text }}/>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-[6px] text-white font-bold">$</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Split Expense" centered>
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[8px]">A</div>
                    <div className="w-6 h-6 rounded-full bg-gray-300 border border-white flex items-center justify-center text-[8px]">B</div>
                    <div className="w-6 h-6 rounded-full bg-primary text-white border border-white flex items-center justify-center text-[8px]">$</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Round Up" centered>
                <div className="w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center text-[8px] font-mono" style={{ borderColor: primary, color: primary }}>
                    +0.45
                </div>
            </GalleryItem>
            <GalleryItem title="Emergency Fund" centered>
                <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center text-red-500 border border-red-200">
                    <span className="text-lg font-bold">+</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Income Stream" centered>
                <div className="flex items-center gap-1">
                    <div className="w-8 h-5 border rounded bg-white relative" style={{ borderColor: text }}>
                        <div className="absolute top-1 right-1 w-1 h-3 bg-green-500"></div>
                    </div>
                    <span className="text-green-500 text-lg">→</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Expense Cat" centered>
                <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-orange-600">
                    <Icons.ShoppingBag size="sm"/>
                </div>
            </GalleryItem>
        </div>

        {/* --- 12. Institutional & Pro Tools (NEW) --- */}
        <SectionTitle>Institutional & Pro Tools</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            <GalleryItem title="Algo Strategy" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 V10 M35,20 H30 M20,35 V30 M5,20 H10" stroke={text} strokeWidth="1.5"/>
                    <rect x="12" y="12" width="16" height="16" rx="2" fill={surface} stroke={primary} strokeWidth="1.5"/>
                    <circle cx="20" cy="20" r="3" fill={primary}/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Iceberg Order" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <line x1="0" y1="15" x2="60" y2="15" stroke={text} strokeWidth="1" strokeDasharray="3 3"/>
                    <polygon points="20,15 30,5 40,15" fill={primary}/>
                    <path d="M15,15 L30,28 L45,15" fill={primary} opacity="0.2"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="VWAP Indicator" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M0,25 Q15,5 30,15 T60,10" fill="none" stroke={text} strokeWidth="1" opacity="0.3"/>
                    <path d="M0,22 Q15,8 30,12 T60,12" fill="none" stroke={warning} strokeWidth="1.5" strokeDasharray="2 1"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="MACD" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <line x1="0" y1="15" x2="60" y2="15" stroke={text} strokeWidth="0.5"/>
                    {[5,10,15,20,25,30,35,40,45,50,55].map((x, i) => (
                        <line key={x} x1={x} y1={15} x2={x} y2={15 - Math.sin(i)*10} stroke={Math.sin(i)>0 ? success : error} strokeWidth="3"/>
                    ))}
                </svg>
            </GalleryItem>
            <GalleryItem title="Bollinger Bands" centered>
                <svg viewBox="0 0 60 30" className="w-16 h-8">
                    <path d="M0,10 Q15,0 30,5 T60,2" fill="none" stroke={text} strokeWidth="1" opacity="0.5"/>
                    <path d="M0,20 Q15,10 30,15 T60,12" fill="none" stroke={primary} strokeWidth="1.5"/>
                    <path d="M0,30 Q15,20 30,25 T60,22" fill="none" stroke={text} strokeWidth="1" opacity="0.5"/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Fibonacci" centered>
                <div className="w-12 h-12 border flex flex-col justify-between" style={{borderColor: text+'20'}}>
                    <div className="h-px bg-blue-500 opacity-20"></div>
                    <div className="h-px bg-blue-500 opacity-40"></div>
                    <div className="h-px bg-blue-500 opacity-60"></div>
                    <div className="h-px bg-blue-500 opacity-80"></div>
                    <div className="h-px bg-blue-500"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="Heatmap View" centered>
                <div className="grid grid-cols-3 gap-0.5 w-12 h-12">
                    {[0.2, 0.8, 0.4, 0.9, 0.1, 0.5, 0.7, 0.3, 0.6].map((o, i) => (
                        <div key={i} style={{ backgroundColor: i % 2 ? error : success, opacity: o }}></div>
                    ))}
                </div>
            </GalleryItem>
            <GalleryItem title="Latency" centered>
                <div className="flex items-end gap-0.5">
                    <div className="w-1 h-2 bg-green-500"></div>
                    <div className="w-1 h-3 bg-green-500"></div>
                    <div className="w-1 h-4 bg-green-500"></div>
                    <div className="w-1 h-5 bg-gray-200"></div>
                </div>
            </GalleryItem>
            <GalleryItem title="API Connection" centered>
                <div className="flex items-center gap-1 border rounded px-1 text-[8px] font-mono" style={{ borderColor: success, color: success }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    CONNECTED
                </div>
            </GalleryItem>
            <GalleryItem title="Webhook Alert" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M10,20 C10,10 20,10 20,20 C20,30 30,30 30,20" fill="none" stroke={warning} strokeWidth="2"/>
                    <circle cx="30" cy="20" r="3" fill={warning}/>
                </svg>
            </GalleryItem>
            <GalleryItem title="Margin Call" centered>
                <div className="w-10 h-10 bg-red-100 flex items-center justify-center rounded text-red-600 border border-red-200">
                    <span className="text-lg font-bold">!</span>
                </div>
            </GalleryItem>
            <GalleryItem title="Beta Metric" centered>
                <div className="border rounded p-1 text-center w-16" style={{ borderColor: text+'20' }}>
                    <div className="text-[6px] uppercase opacity-50">Beta</div>
                    <div className="text-[10px] font-bold">1.45</div>
                </div>
            </GalleryItem>
            <GalleryItem title="Arbitrage" centered>
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                    <path d="M20,5 V35" stroke={text} strokeWidth="1"/>
                    <path d="M5,15 H35" stroke={text} strokeWidth="1"/>
                    <rect x="5" y="15" width="10" height="10" fill={primary} opacity="0.5"/>
                    <rect x="25" y="25" width="10" height="10" fill={secondary} opacity="0.5"/>
                </svg>
            </GalleryItem>
        </div>
    </div>
  );
};
