import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedInput } from '../ui-elements/ThemedInput';
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

  return (
    <div className="space-y-16 animate-in fade-in duration-500 pb-20">
        {/* 1. Hero Sections */}
        <section>
            <div style={sectionTitleStyle}>1. Hero Sections</div>
            <div className="grid gap-8">
                <ThemedCard className="overflow-hidden relative text-center py-16">
                    <span className="inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-6" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>
                        New v2.0 Released
                    </span>
                    <h1 className="text-4xl md:text-6xl mb-6 leading-tight max-w-4xl mx-auto" style={headingStyle}>
                        Design faster with <br/>
                        <span style={{ color: theme.colors.primary }}>Intelligent Intelligence.</span>
                    </h1>
                    <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={mutedTextStyle}>
                        Stop wrestling with CSS. Our platform automates your design tokens, scales your components, and documents everything instantly.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <ThemedButton size="lg">Start Building Free</ThemedButton>
                        <ThemedButton variant="outline" size="lg" className="gap-2"><Icons.Chart/> View Demo</ThemedButton>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-center gap-8 opacity-50 grayscale" style={{ borderColor: theme.colors.text + '10' }}>
                         {/* Fake Logos */}
                         <div className="font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 bg-gray-400 rounded-full"></div>Acme</div>
                         <div className="font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 bg-gray-400 rounded-full"></div>Globex</div>
                         <div className="font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 bg-gray-400 rounded-full"></div>Soylent</div>
                    </div>
                </ThemedCard>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="p-4">
                        <h2 className="text-3xl mb-4 font-bold" style={headingStyle}>Seamless Integration</h2>
                        <p className="mb-6 leading-relaxed" style={mutedTextStyle}>
                            Connect with your existing tools. We support Figma, Sketch, and Adobe XD out of the box. 
                            Sync your tokens in real-time.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Real-time sync', 'Version control', 'Role-based access', 'Audit logs'].map(item => (
                                <li key={item} className="flex items-center gap-3" style={{ color: theme.colors.text }}>
                                    <div className="p-1 rounded-full" style={{ backgroundColor: theme.colors.success + '20', color: theme.colors.success }}><Icons.Check size="sm"/></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ThemedButton variant="secondary">Learn more <Icons.ChevronRight/></ThemedButton>
                    </div>
                    <ThemedCard className="h-80 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-3/4 h-3/4 rounded-lg shadow-2xl border bg-white flex flex-col overflow-hidden" style={{ borderColor: theme.colors.text + '10' }}>
                                 <div className="h-8 border-b bg-gray-50 flex items-center px-4 gap-2">
                                     <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                     <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                     <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                 </div>
                                 <div className="flex-1 p-4 bg-gray-100 flex items-center justify-center">
                                     <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto mb-4 shadow-lg rotate-12"></div>
                                        <div className="h-2 w-24 bg-gray-300 rounded mx-auto mb-2"></div>
                                        <div className="h-2 w-16 bg-gray-300 rounded mx-auto"></div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </ThemedCard>
                </div>
            </div>
        </section>

        {/* 2. Stats Grid */}
        <section>
            <div style={sectionTitleStyle}>2. Statistics</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Active Users', value: '100k+' },
                    { label: 'Components', value: '500+' },
                    { label: 'Uptime', value: '99.9%' },
                    { label: 'Support', value: '24/7' },
                ].map((stat, i) => (
                    <ThemedCard key={i} className="text-center py-8">
                        <div className="text-3xl font-bold mb-2" style={{ color: theme.colors.primary }}>{stat.value}</div>
                        <div className="text-sm font-medium uppercase tracking-wide opacity-60" style={{ color: theme.colors.text }}>{stat.label}</div>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 3. Feature Grids */}
        <section>
            <div style={sectionTitleStyle}>3. Feature Sections</div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: 'Analytics', icon: 'Chart', desc: 'Deep dive into your data with our advanced processing engine.' },
                    { title: 'Security', icon: 'Lock', desc: 'Enterprise-grade security with SSO and audit logs.' },
                    { title: 'Collaboration', icon: 'User', desc: 'Work together in real-time with your entire team.' },
                    { title: 'Cloud Sync', icon: 'Cloud', desc: 'Access your designs from anywhere, on any device.' },
                    { title: 'Versioning', icon: 'Clock', desc: 'Rollback to any previous version with a single click.' },
                    { title: 'Export', icon: 'Code', desc: 'Export to React, Vue, Angular, or raw HTML/CSS.' },
                ].map((feat, i) => (
                    <ThemedCard key={i} className="p-6 transition-all hover:-translate-y-1">
                        <div 
                            className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg"
                            style={{ 
                                backgroundColor: theme.colors.primary + '10', 
                                color: theme.colors.primary,
                            }}
                        >
                           {/* @ts-ignore */}
                           <Icons.Star />
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={headingStyle}>{feat.title}</h3>
                        <p className="text-sm leading-relaxed" style={mutedTextStyle}>{feat.desc}</p>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 4. Testimonials */}
        <section>
             <div style={sectionTitleStyle}>4. Social Proof & Testimonials</div>
             <div className="grid md:grid-cols-3 gap-6">
                 {[
                     { text: "This tool has completely transformed how we build our design systems. It's simply incredible.", author: "Jane Doe", role: "CTO at TechCorp" },
                     { text: "The AI integration is mind-blowing. I generated a full theme in seconds.", author: "John Smith", role: "Freelance Designer" },
                     { text: "Finally, a tool that developers and designers both love using.", author: "Emily White", role: "Product Manager" },
                 ].map((t, i) => (
                     <ThemedCard key={i} className="p-8">
                         <div className="mb-4 text-2xl opacity-30" style={{ color: theme.colors.primary }}>"</div>
                         <p className="mb-6 leading-relaxed italic" style={{ color: theme.colors.text }}>{t.text}</p>
                         <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                             <div>
                                 <div className="font-bold text-sm" style={{ color: theme.colors.text }}>{t.author}</div>
                                 <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>{t.role}</div>
                             </div>
                         </div>
                     </ThemedCard>
                 ))}
             </div>
        </section>

        {/* 5. Team Section */}
        <section>
            <div style={sectionTitleStyle}>5. Team</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[1,2,3,4].map(i => (
                    <div key={i} className="group">
                        <div className="aspect-square rounded-xl bg-gray-100 mb-4 relative overflow-hidden">
                             <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                        </div>
                        <h4 className="font-bold text-lg" style={{ color: theme.colors.text }}>Team Member {i}</h4>
                        <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Position Title</p>
                        <div className="flex justify-center gap-2 mt-2 opacity-50">
                            <Icons.Link size="sm"/>
                            <Icons.Chat size="sm"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* 6. Blog Grid */}
        <section>
            <div style={sectionTitleStyle}>6. Blog & News</div>
            <div className="grid md:grid-cols-3 gap-8">
                 {[
                     { title: "The Future of Design Systems", cat: "Thought Leadership" },
                     { title: "How to Scale your CSS", cat: "Engineering" },
                     { title: "What's new in v2.0", cat: "Product" },
                 ].map((post, i) => (
                     <div key={i} className="group cursor-pointer">
                         <div className="aspect-video rounded-xl bg-gray-100 mb-4 border relative overflow-hidden" style={{ borderColor: theme.colors.text + '10' }}>
                            <div className="absolute top-4 left-4 px-2 py-1 bg-white/90 backdrop-blur text-xs font-bold rounded" style={{ color: theme.colors.text }}>{post.cat}</div>
                         </div>
                         <h4 className="font-bold text-xl mb-2 group-hover:underline decoration-2 underline-offset-4" style={{ color: theme.colors.text, decorationColor: theme.colors.primary }}>{post.title}</h4>
                         <p className="text-sm leading-relaxed mb-4" style={{ color: theme.colors.textSecondary }}>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                         </p>
                         <div className="text-sm font-bold flex items-center gap-1" style={{ color: theme.colors.primary }}>Read Article <Icons.ChevronRight size="sm"/></div>
                     </div>
                 ))}
            </div>
        </section>

        {/* 7. FAQ */}
        <section>
            <div style={sectionTitleStyle}>7. FAQ</div>
            <div className="max-w-3xl mx-auto space-y-4">
                {[
                    "What is the difference between the Free and Pro plan?",
                    "Can I export the code to Angular?",
                    "Do you offer team training?",
                    "How secure is my data?"
                ].map((q, i) => (
                    <ThemedCard key={i} className="p-4 cursor-pointer hover:bg-black/5 transition-colors">
                        <div className="flex justify-between items-center">
                            <h5 className="font-medium" style={{ color: theme.colors.text }}>{q}</h5>
                            <Icons.ChevronDown size="sm" />
                        </div>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 8. Contact */}
        <section>
             <div style={sectionTitleStyle}>8. Contact Form</div>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h3 className="text-3xl font-bold mb-4" style={headingStyle}>Get in touch</h3>
                     <p className="mb-8" style={mutedTextStyle}>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                     
                     <div className="space-y-4">
                         <div className="flex items-center gap-3" style={{ color: theme.colors.text }}>
                             <Icons.Chat/> <span>support@chameleon.io</span>
                         </div>
                         <div className="flex items-center gap-3" style={{ color: theme.colors.text }}>
                             <Icons.User/> <span>+1 (555) 123-4567</span>
                         </div>
                         <div className="flex items-center gap-3" style={{ color: theme.colors.text }}>
                             <Icons.Search/> <span>123 Design St, San Francisco, CA</span>
                         </div>
                     </div>
                 </div>
                 <ThemedCard className="p-8">
                     <div className="space-y-4">
                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase" style={{ color: theme.colors.text }}>First Name</label>
                                <ThemedInput placeholder="Jane" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase" style={{ color: theme.colors.text }}>Last Name</label>
                                <ThemedInput placeholder="Doe" />
                            </div>
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase" style={{ color: theme.colors.text }}>Email</label>
                            <ThemedInput placeholder="jane@example.com" />
                         </div>
                         <div className="space-y-1">
                            <label className="text-xs font-bold uppercase" style={{ color: theme.colors.text }}>Message</label>
                            <textarea className="w-full p-3 border rounded-md text-sm h-32 outline-none focus:ring-2" style={{ borderColor: theme.colors.text + '20', backgroundColor: theme.colors.surface, color: theme.colors.text }} placeholder="How can we help?"></textarea>
                         </div>
                         <ThemedButton className="w-full">Send Message</ThemedButton>
                     </div>
                 </ThemedCard>
             </div>
        </section>

        {/* 9. Pricing Cards */}
        <section>
            <div style={sectionTitleStyle}>9. Pricing Tables</div>
            <div className="grid md:grid-cols-3 gap-6 items-start">
                <ThemedCard className="p-6">
                    <h3 className="text-lg opacity-50" style={headingStyle}>Starter</h3>
                    <div className="text-3xl my-4" style={headingStyle}>$0<span className="text-sm font-normal opacity-50">/mo</span></div>
                    <ul className="space-y-3 mb-8 text-sm opacity-80" style={{ color: theme.colors.text }}>
                        <li className="flex gap-2"><Icons.Check/> 1 User</li>
                        <li className="flex gap-2"><Icons.Check/> 5 Projects</li>
                        <li className="flex gap-2"><Icons.Check/> Community Support</li>
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
                        <li className="flex gap-2"><Icons.Check/> Advanced Analytics</li>
                    </ul>
                    <ThemedButton className="w-full">Get Started</ThemedButton>
                </ThemedCard>

                <ThemedCard className="p-6">
                    <h3 className="text-lg opacity-50" style={headingStyle}>Enterprise</h3>
                    <div className="text-3xl my-4" style={headingStyle}>$99<span className="text-sm font-normal opacity-50">/mo</span></div>
                    <ul className="space-y-3 mb-8 text-sm opacity-80" style={{ color: theme.colors.text }}>
                        <li className="flex gap-2"><Icons.Check/> Dedicated Cloud</li>
                        <li className="flex gap-2"><Icons.Check/> 24/7 SLA</li>
                        <li className="flex gap-2"><Icons.Check/> Custom SSO</li>
                    </ul>
                    <ThemedButton variant="outline" className="w-full">Contact Sales</ThemedButton>
                </ThemedCard>
            </div>
        </section>

        {/* 10. Footer */}
        <section>
            <div style={sectionTitleStyle}>10. Footer & CTA</div>
            <ThemedCard className="mb-12 text-center py-12" style={{ backgroundColor: theme.colors.surface }}>
                <h3 className="text-2xl font-bold mb-4" style={headingStyle}>Ready to get started?</h3>
                <p className="mb-8 max-w-md mx-auto" style={mutedTextStyle}>Join over 100,000 developers building better apps today.</p>
                <div className="max-w-md mx-auto flex gap-2">
                     <input 
                        placeholder="Enter your email" 
                        className="flex-1 p-3 border rounded-md outline-none focus:ring-2"
                        style={{ borderColor: theme.colors.text + '20', borderRadius: theme.borderRadius.sm }}
                     />
                     <ThemedButton>Subscribe</ThemedButton>
                </div>
            </ThemedCard>

            <div className="border-t pt-8" style={{ borderColor: theme.colors.text + '20' }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="mb-4 font-bold" style={headingStyle}>Product</h4>
                        <ul className="space-y-2 text-sm" style={mutedTextStyle}>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Roadmap</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold" style={headingStyle}>Company</h4>
                        <ul className="space-y-2 text-sm" style={mutedTextStyle}>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold" style={headingStyle}>Resources</h4>
                        <ul className="space-y-2 text-sm" style={mutedTextStyle}>
                            <li>Documentation</li>
                            <li>API Reference</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold" style={headingStyle}>Legal</h4>
                        <ul className="space-y-2 text-sm" style={mutedTextStyle}>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-xs opacity-40" style={{ color: theme.colors.textSecondary }}>© 2024 Chameleon Inc. All rights reserved.</div>
            </div>
        </section>
    </div>
  );
};