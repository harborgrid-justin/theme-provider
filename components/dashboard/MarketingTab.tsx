import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';

export const MarketingTab: React.FC = () => {
  const { theme } = useTheme();

  const headingStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
  };

  const sectionTitleStyle = {
    ...headingStyle,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1rem',
    marginTop: '2rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  const mutedTextStyle = {
      color: theme.colors.textSecondary,
  };

  const subtleBgStyle = {
      backgroundColor: theme.colors.text + '05', // 5% opacity of text color for subtle backgrounds
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
        {/* 1. Hero Sections */}
        <section>
            <div style={sectionTitleStyle}>1. Hero Sections</div>
            <div className="grid gap-8">
                <ThemedCard className="overflow-hidden relative">
                    <div className="text-center max-w-2xl mx-auto py-12 px-4">
                        <span className="text-sm tracking-widest uppercase mb-4 block" style={{ color: theme.colors.primary, fontWeight: theme.typography.headingWeight }}>New Arrival</span>
                        <h1 className="text-4xl md:text-5xl mb-6 leading-tight" style={headingStyle}>Build faster with <br/><span style={{ opacity: 0.5 }}>Intelligent Tools.</span></h1>
                        <p className="text-lg mb-8 max-w-lg mx-auto" style={mutedTextStyle}>Scale your development workflow with our automated CI/CD pipeline generator.</p>
                        <div className="flex justify-center gap-4">
                            <ThemedButton size="lg">Get Started</ThemedButton>
                            <ThemedButton variant="outline" size="lg">Documentation</ThemedButton>
                        </div>
                    </div>
                </ThemedCard>

                <ThemedCard className="grid md:grid-cols-2 gap-8 items-center overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-3xl mb-4" style={headingStyle}>Data driven decisions.</h2>
                        <p className="mb-6" style={mutedTextStyle}>Stop guessing. Start knowing. Our analytics platform gives you the insights you need.</p>
                        <div className="flex items-center gap-4 text-sm font-medium" style={{ color: theme.colors.text }}>
                            <div className="flex items-center gap-2"><Icons.Check/> Real-time</div>
                            <div className="flex items-center gap-2"><Icons.Check/> Secure</div>
                        </div>
                    </div>
                    <div className="h-64 relative group overflow-hidden" style={subtleBgStyle}>
                        <div className="absolute inset-0 flex items-center justify-center font-mono text-xs" style={{ color: theme.colors.textSecondary, opacity: 0.3 }}>
                            <Icons.Image />
                        </div>
                        <div 
                            className="absolute bottom-4 right-4 p-4 shadow-lg max-w-xs" 
                            style={{ 
                                backgroundColor: theme.colors.surface,
                                borderRadius: theme.borderRadius.card,
                                borderLeft: `4px solid ${theme.colors.success}` 
                            }}
                        >
                            <div className="text-xs font-bold uppercase mb-1" style={mutedTextStyle}>Growth</div>
                            <div className="text-xl" style={headingStyle}>+127%</div>
                        </div>
                    </div>
                </ThemedCard>
            </div>
        </section>

        {/* 2. Feature Grids */}
        <section>
            <div style={sectionTitleStyle}>2. Feature Sections</div>
            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <ThemedCard key={i} className="text-center p-6">
                        <div 
                            className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                            style={{ 
                                backgroundColor: theme.colors.primary + '20', 
                                color: theme.colors.primary,
                                borderRadius: theme.borderRadius.md 
                            }}
                        >
                            <Icons.Chart />
                        </div>
                        <h3 className="text-lg mb-2" style={headingStyle}>Analytics {i}</h3>
                        <p className="text-sm" style={mutedTextStyle}>Deep dive into your data with our advanced processing engine.</p>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 3. Blog / News Grid */}
        <section>
            <div style={sectionTitleStyle}>3. Latest Updates</div>
            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                        <ThemedCard key={i} className="overflow-hidden flex flex-col p-0">
                            <div className="h-40 w-full flex items-center justify-center" style={{ ...subtleBgStyle, color: theme.colors.textSecondary }}>
                                <Icons.Image />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-60" style={{ color: theme.colors.accent }}>Engineering</div>
                                <h4 className="text-lg mb-3" style={headingStyle}>Scaling our database to 1M users</h4>
                                <p className="text-sm mb-4 flex-1" style={mutedTextStyle}>A deep dive into the challenges we faced when scaling our PostgreSQL cluster.</p>
                                <div className="flex items-center gap-2 mt-auto">
                                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                                    <div className="text-xs font-medium" style={{ color: theme.colors.text }}>
                                        <div>Sarah Jenkins</div>
                                        <div style={{ opacity: 0.5 }}>Oct 24 • 5 min read</div>
                                    </div>
                                </div>
                            </div>
                        </ThemedCard>
                ))}
            </div>
        </section>

        {/* 4. Pricing Cards */}
        <section>
            <div style={sectionTitleStyle}>4. Pricing Tables</div>
            <div className="grid md:grid-cols-3 gap-6 items-start">
                <ThemedCard className="p-6">
                    <h3 className="text-lg opacity-50" style={headingStyle}>Starter</h3>
                    <div className="text-3xl my-4" style={headingStyle}>$0<span className="text-sm font-normal opacity-50">/mo</span></div>
                    <ul className="space-y-3 mb-8 text-sm opacity-80" style={{ color: theme.colors.text }}>
                        <li className="flex gap-2"><Icons.Check/> 1 User</li>
                        <li className="flex gap-2"><Icons.Check/> 5 Projects</li>
                    </ul>
                    <ThemedButton variant="outline" className="w-full">Sign Up</ThemedButton>
                </ThemedCard>
                
                <ThemedCard className="p-6 relative transform md:-translate-y-4 shadow-xl" style={{ borderColor: theme.colors.primary, borderWidth: 2 }}>
                    <div className="absolute top-0 right-0 p-2">
                            <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.sm }}>POPULAR</span>
                    </div>
                    <h3 className="text-lg" style={{ ...headingStyle, color: theme.colors.primary }}>Pro</h3>
                    <div className="text-3xl my-4" style={headingStyle}>$29<span className="text-sm font-normal opacity-50">/mo</span></div>
                    <ul className="space-y-3 mb-8 text-sm opacity-80" style={{ color: theme.colors.text }}>
                        <li className="flex gap-2"><Icons.Check/> Unlimited Users</li>
                        <li className="flex gap-2"><Icons.Check/> Unlimited Projects</li>
                        <li className="flex gap-2"><Icons.Check/> Priority Support</li>
                    </ul>
                    <ThemedButton className="w-full">Get Started</ThemedButton>
                </ThemedCard>

                <ThemedCard className="p-6">
                    <h3 className="text-lg opacity-50" style={headingStyle}>Enterprise</h3>
                    <div className="text-3xl my-4" style={headingStyle}>$99<span className="text-sm font-normal opacity-50">/mo</span></div>
                    <ul className="space-y-3 mb-8 text-sm opacity-80" style={{ color: theme.colors.text }}>
                        <li className="flex gap-2"><Icons.Check/> Dedicated Cloud</li>
                        <li className="flex gap-2"><Icons.Check/> 24/7 SLA</li>
                    </ul>
                    <ThemedButton variant="outline" className="w-full">Contact Sales</ThemedButton>
                </ThemedCard>
            </div>
        </section>

        {/* 5. FAQ Accordion */}
        <section>
            <div style={sectionTitleStyle}>5. FAQ Section</div>
            <ThemedCard className="max-w-2xl mx-auto">
                {[
                    { q: "How do I change my subscription?", a: "You can update your plan anytime from the billing settings.", open: true },
                    { q: "Is there a free trial available?", a: "Yes, we offer a 14-day free trial on all paid plans.", open: false },
                    { q: "What payment methods do you accept?", a: "We accept all major credit cards and PayPal.", open: false }
                ].map((item, i) => (
                    <div key={i} className="border-b last:border-0" style={{ borderColor: theme.colors.text + '10' }}>
                        <button className="w-full flex items-center justify-between p-4 text-left font-medium transition-colors hover:bg-black/5">
                            <span style={{ color: theme.colors.text }}>{item.q}</span>
                            <div className={`transform transition-transform ${item.open ? 'rotate-180' : ''}`} style={{ color: theme.colors.textSecondary }}><Icons.ChevronDown/></div>
                        </button>
                        {item.open && (
                            <div className="px-4 pb-4 text-sm animate-in slide-in-from-top-2" style={mutedTextStyle}>
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </ThemedCard>
        </section>

        {/* 6. Footer */}
        <section>
            <div style={sectionTitleStyle}>6. Footer</div>
            <div className="border-t pt-8" style={{ borderColor: theme.colors.text + '20' }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="mb-4" style={headingStyle}>Product</h4>
                        <ul className="space-y-2 text-sm" style={mutedTextStyle}>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Roadmap</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4" style={headingStyle}>Company</h4>
                        <ul className="space-y-2 text-sm" style={mutedTextStyle}>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <h4 className="mb-4" style={headingStyle}>Subscribe</h4>
                        <div className="flex gap-2">
                            <input 
                                placeholder="Enter email"
                                className="w-full px-4 py-2 outline-none border transition-all"
                                style={{ 
                                    borderRadius: theme.borderRadius.sm,
                                    borderColor: theme.colors.text + '30',
                                    backgroundColor: theme.colors.surface,
                                    color: theme.colors.text
                                }}
                            />
                            <ThemedButton>Join</ThemedButton>
                        </div>
                    </div>
                </div>
                <div className="text-center text-xs opacity-40" style={{ color: theme.colors.textSecondary }}>© 2024 Chameleon Inc. All rights reserved.</div>
            </div>
        </section>
    </div>
  );
};