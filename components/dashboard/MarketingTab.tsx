import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedInput } from '../ui-elements/ThemedInput';
import { Icons } from './DashboardIcons';
import { SectionTitle } from './SectionTitle';

export const MarketingTab: React.FC = () => {
  const { theme } = useTheme();

  const headingStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
  };

  const mutedTextStyle = {
      color: theme.colors.textSecondary,
  };

  return (
    <div className="space-y-20 animate-in fade-in duration-500 pb-20">
        {/* 1. Hero Sections */}
        <section>
            <SectionTitle style={{ marginTop: 0 }}>1. Hero Sections</SectionTitle>
            <div className="grid gap-8">
                <ThemedCard className="overflow-hidden relative text-center py-20 px-6">
                    <span className="inline-block py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider mb-8" style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}>
                        New v2.0 Released
                    </span>
                    <h1 className="text-4xl md:text-6xl mb-6 leading-tight max-w-4xl mx-auto" style={headingStyle}>
                        Design faster with <br/>
                        <span style={{ color: theme.colors.primary }}>Intelligent Intelligence.</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={mutedTextStyle}>
                        Stop wrestling with CSS. Our platform automates your design tokens, scales your components, and documents everything instantly.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <ThemedButton size="lg">Start Building Free</ThemedButton>
                        <ThemedButton variant="outline" size="lg" className="gap-2"><Icons.Chart/> View Demo</ThemedButton>
                    </div>
                    <div className="pt-8 border-t flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100" style={{ borderColor: theme.colors.text + '10' }}>
                         {/* Fake Logos using Theme Colors */}
                         <div className="font-bold text-xl flex items-center gap-2" style={{ color: theme.colors.text }}>
                             <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>Acme
                         </div>
                         <div className="font-bold text-xl flex items-center gap-2" style={{ color: theme.colors.text }}>
                             <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>Globex
                         </div>
                         <div className="font-bold text-xl flex items-center gap-2" style={{ color: theme.colors.text }}>
                             <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.text }}></div>Soylent
                         </div>
                    </div>
                </ThemedCard>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="p-4 flex flex-col justify-center">
                        <h2 className="text-3xl mb-4 font-bold" style={headingStyle}>Seamless Integration</h2>
                        <p className="mb-6 leading-relaxed" style={mutedTextStyle}>
                            Connect with your existing tools. We support Figma, Sketch, and Adobe XD out of the box. 
                            Sync your tokens in real-time.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Real-time sync', 'Version control', 'Role-based access', 'Audit logs'].map(item => (
                                <li key={item} className="flex items-center gap-3" style={{ color: theme.colors.text }}>
                                    <div className="p-1 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.success + '20', color: theme.colors.success }}><Icons.Check size="sm"/></div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <ThemedButton variant="secondary">Learn more <Icons.ChevronRight/></ThemedButton>
                        </div>
                    </div>
                    <ThemedCard className="min-h-[320px] relative overflow-hidden group flex items-center justify-center bg-gray-50/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 pointer-events-none"></div>
                         <div className="w-3/4 aspect-video rounded-lg shadow-2xl border bg-white flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500" style={{ borderColor: theme.colors.text + '10' }}>
                             <div className="h-8 border-b bg-gray-50 flex items-center px-4 gap-2">
                                 <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                 <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                 <div className="w-2 h-2 rounded-full bg-green-400"></div>
                             </div>
                             <div className="flex-1 p-4 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                                 <div className="text-center z-10">
                                    <div className="w-16 h-16 rounded-xl mx-auto mb-4 shadow-lg rotate-12 flex items-center justify-center" style={{ backgroundColor: theme.colors.primary }}>
                                        <Icons.Star className="text-white" size="lg" />
                                    </div>
                                    <div className="h-2 w-24 bg-gray-300 rounded mx-auto mb-2 opacity-50"></div>
                                    <div className="h-2 w-16 bg-gray-300 rounded mx-auto opacity-50"></div>
                                 </div>
                             </div>
                         </div>
                    </ThemedCard>
                </div>
            </div>
        </section>

        {/* 2. Stats Grid */}
        <section>
            <SectionTitle>2. Statistics</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Active Users', value: '100k+' },
                    { label: 'Components', value: '500+' },
                    { label: 'Uptime', value: '99.9%' },
                    { label: 'Support', value: '24/7' },
                ].map((stat, i) => (
                    <ThemedCard key={i} className="text-center py-8 h-full flex flex-col justify-center">
                        <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: theme.colors.primary }}>{stat.value}</div>
                        <div className="text-xs md:text-sm font-bold uppercase tracking-wide opacity-60" style={{ color: theme.colors.text }}>{stat.label}</div>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 3. Feature Grids */}
        <section>
            <SectionTitle>3. Feature Sections</SectionTitle>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: 'Analytics', icon: 'Chart', desc: 'Deep dive into your data with our advanced processing engine.' },
                    { title: 'Security', icon: 'Lock', desc: 'Enterprise-grade security with SSO and audit logs.' },
                    { title: 'Collaboration', icon: 'User', desc: 'Work together in real-time with your entire team.' },
                    { title: 'Cloud Sync', icon: 'Cloud', desc: 'Access your designs from anywhere, on any device.' },
                    { title: 'Versioning', icon: 'Clock', desc: 'Rollback to any previous version with a single click.' },
                    { title: 'Export', icon: 'Code', desc: 'Export to React, Vue, Angular, or raw HTML/CSS.' },
                ].map((feat, i) => (
                    <ThemedCard key={i} className="p-6 transition-all hover:-translate-y-1 h-full flex flex-col">
                        <div 
                            className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl"
                            style={{ 
                                backgroundColor: theme.colors.primary + '10', 
                                color: theme.colors.primary,
                            }}
                        >
                           <Icons.Star />
                        </div>
                        <h3 className="text-lg font-bold mb-3" style={headingStyle}>{feat.title}</h3>
                        <p className="text-sm leading-relaxed flex-1" style={mutedTextStyle}>{feat.desc}</p>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 4. Testimonials */}
        <section>
             <SectionTitle>4. Social Proof & Testimonials</SectionTitle>
             <div className="grid md:grid-cols-3 gap-6">
                 {[
                     { text: "This tool has completely transformed how we build our design systems. It's simply incredible.", author: "Jane Doe", role: "CTO at TechCorp" },
                     { text: "The AI integration is mind-blowing. I generated a full theme in seconds.", author: "John Smith", role: "Freelance Designer" },
                     { text: "Finally, a tool that developers and designers both love using.", author: "Emily White", role: "Product Manager" },
                 ].map((t, i) => (
                     <ThemedCard key={i} className="p-8 h-full flex flex-col">
                         <div className="mb-4 text-4xl opacity-20 font-serif leading-none" style={{ color: theme.colors.primary }}>"</div>
                         <p className="mb-8 leading-relaxed italic text-lg flex-1" style={{ color: theme.colors.text }}>{t.text}</p>
                         <div className="flex items-center gap-4 mt-auto">
                             <div className="w-10 h-10 rounded-full bg-gray-200" style={{ backgroundColor: theme.colors.text + '20' }}></div>
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
            <SectionTitle>5. Team</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[1,2,3,4].map(i => (
                    <div key={i} className="group">
                        <div className="aspect-square rounded-2xl bg-gray-100 mb-4 relative overflow-hidden" style={{ backgroundColor: theme.colors.surface }}>
                             <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                        </div>
                        <h4 className="font-bold text-lg" style={{ color: theme.colors.text }}>Team Member {i}</h4>
                        <p className="text-sm mb-3" style={{ color: theme.colors.textSecondary }}>Position Title</p>
                        <div className="flex justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity" style={{ color: theme.colors.primary }}>
                            <Icons.Link size="sm"/>
                            <Icons.Chat size="sm"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* 6. Blog Grid */}
        <section>
            <SectionTitle>6. Blog & News</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
                 {[
                     { title: "The Future of Design Systems", cat: "Thought Leadership" },
                     { title: "How to Scale your CSS", cat: "Engineering" },
                     { title: "What's new in v2.0", cat: "Product" },
                 ].map((post, i) => (
                     <div key={i} className="group cursor-pointer flex flex-col h-full">
                         <div className="aspect-video rounded-xl bg-gray-100 mb-4 border relative overflow-hidden" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.text + '05' }}>
                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold rounded shadow-sm" style={{ color: theme.colors.text }}>{post.cat}</div>
                         </div>
                         <h4 className="font-bold text-xl mb-3 group-hover:underline decoration-2 underline-offset-4" style={{ color: theme.colors.text, textDecorationColor: theme.colors.primary }}>{post.title}</h4>
                         <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: theme.colors.textSecondary }}>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                         </p>
                         <div className="text-sm font-bold flex items-center gap-2 mt-auto" style={{ color: theme.colors.primary }}>Read Article <Icons.ChevronRight size="sm"/></div>
                     </div>
                 ))}
            </div>
        </section>

        {/* 7. FAQ */}
        <section>
            <SectionTitle>7. FAQ</SectionTitle>
            <div className="max-w-3xl mx-auto space-y-4">
                {[
                    "What is the difference between the Free and Pro plan?",
                    "Can I export the code to Angular?",
                    "Do you offer team training?",
                    "How secure is my data?"
                ].map((q, i) => (
                    <ThemedCard key={i} className="p-5 cursor-pointer hover:brightness-95 transition-all">
                        <div className="flex justify-between items-center">
                            <h5 className="font-medium" style={{ color: theme.colors.text }}>{q}</h5>
                            <Icons.ChevronDown size="sm" style={{ color: theme.colors.textSecondary }} />
                        </div>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 8. Contact */}
        <section>
             <SectionTitle>8. Contact Form</SectionTitle>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h3 className="text-3xl font-bold mb-4" style={headingStyle}>Get in touch</h3>
                     <p className="mb-8" style={mutedTextStyle}>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                     
                     <div className="space-y-6">
                         <div className="flex items-center gap-4" style={{ color: theme.colors.text }}>
                             <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}><Icons.Chat/></div>
                             <span className="font-medium">support@chameleon.io</span>
                         </div>
                         <div className="flex items-center gap-4" style={{ color: theme.colors.text }}>
                              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}><Icons.User/></div>
                             <span className="font-medium">+1 (555) 123-4567</span>
                         </div>
                         <div className="flex items-center gap-4" style={{ color: theme.colors.text }}>
                              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}><Icons.Search/></div>
                             <span className="font-medium">123 Design St, San Francisco, CA</span>
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
            <SectionTitle>9. Pricing Tables</SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 items-start">
                {/* Basic */}
                <ThemedCard className="p-8 h-full flex flex-col">
                    <h3 className="text-lg opacity-50 font-bold uppercase tracking-wide" style={{ color: theme.colors.text }}>Starter</h3>
                    <div className="text-4xl font-bold my-6" style={{ color: theme.colors.text }}>$0<span className="text-base font-normal opacity-50 ml-1">/mo</span></div>
                    <ul className="space-y-4 mb-8 text-sm opacity-80 flex-1" style={{ color: theme.colors.text }}>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> 1 User</li>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> 5 Projects</li>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> Community Support</li>
                    </ul>
                    <div className="mt-auto">
                        <ThemedButton variant="outline" className="w-full">Sign Up</ThemedButton>
                    </div>
                </ThemedCard>
                
                {/* Pro */}
                <ThemedCard className="p-8 relative transform md:-translate-y-4 shadow-2xl h-full flex flex-col z-10" style={{ borderColor: theme.colors.primary, borderWidth: 2 }}>
                    <div className="absolute top-0 right-0 p-3">
                            <span className="text-xs font-bold px-3 py-1 rounded text-white shadow-sm" style={{ backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.sm }}>POPULAR</span>
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-wide" style={{ color: theme.colors.primary }}>Pro</h3>
                    <div className="text-4xl font-bold my-6" style={{ color: theme.colors.text }}>$29<span className="text-base font-normal opacity-50 ml-1">/mo</span></div>
                    <ul className="space-y-4 mb-8 text-sm flex-1" style={{ color: theme.colors.text }}>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> <strong>Unlimited</strong> Users</li>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> Unlimited Projects</li>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> Priority Support</li>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> Advanced Analytics</li>
                    </ul>
                     <div className="mt-auto">
                        <ThemedButton className="w-full">Get Started</ThemedButton>
                    </div>
                </ThemedCard>

                {/* Enterprise */}
                <ThemedCard className="p-8 h-full flex flex-col" style={{ backgroundColor: theme.colors.surface }}>
                    <h3 className="text-lg opacity-50 font-bold uppercase tracking-wide" style={{ color: theme.colors.text }}>Enterprise</h3>
                    <div className="text-4xl font-bold my-6" style={{ color: theme.colors.text }}>$99<span className="text-base font-normal opacity-50 ml-1">/mo</span></div>
                    <ul className="space-y-4 mb-8 text-sm opacity-80 flex-1" style={{ color: theme.colors.text }}>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> Dedicated Cloud</li>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> 24/7 SLA</li>
                        <li className="flex gap-3 items-center"><Icons.Check size="sm" className="text-green-500"/> Custom SSO</li>
                    </ul>
                     <div className="mt-auto">
                        <ThemedButton variant="outline" className="w-full">Contact Sales</ThemedButton>
                    </div>
                </ThemedCard>
            </div>
        </section>

        {/* 10. Footer */}
        <section>
            <SectionTitle>10. Footer & CTA</SectionTitle>
            <ThemedCard className="mb-12 text-center py-16 px-4" style={{ backgroundColor: theme.colors.surface }}>
                <h3 className="text-3xl font-bold mb-4" style={headingStyle}>Ready to get started?</h3>
                <p className="mb-8 max-w-md mx-auto text-lg" style={mutedTextStyle}>Join over 100,000 developers building better apps today.</p>
                <div className="max-w-md mx-auto flex gap-3">
                     <input 
                        placeholder="Enter your email" 
                        className="flex-1 p-3 border outline-none focus:ring-2 bg-transparent"
                        style={{ borderColor: theme.colors.text + '30', borderRadius: theme.borderRadius.sm, color: theme.colors.text }}
                     />
                     <ThemedButton>Subscribe</ThemedButton>
                </div>
            </ThemedCard>

            <div className="border-t pt-12" style={{ borderColor: theme.colors.text + '20' }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h4 className="mb-6 font-bold uppercase tracking-wider text-xs" style={headingStyle}>Product</h4>
                        <ul className="space-y-3 text-sm" style={mutedTextStyle}>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Roadmap</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 font-bold uppercase tracking-wider text-xs" style={headingStyle}>Company</h4>
                        <ul className="space-y-3 text-sm" style={mutedTextStyle}>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 font-bold uppercase tracking-wider text-xs" style={headingStyle}>Resources</h4>
                        <ul className="space-y-3 text-sm" style={mutedTextStyle}>
                            <li>Documentation</li>
                            <li>API Reference</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 font-bold uppercase tracking-wider text-xs" style={headingStyle}>Legal</h4>
                        <ul className="space-y-3 text-sm" style={mutedTextStyle}>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center text-xs opacity-40" style={{ color: theme.colors.textSecondary }}>
                    <span>© 2024 Chameleon Inc. All rights reserved.</span>
                    <div className="flex gap-4">
                        <Icons.Chat size="sm"/>
                        <Icons.User size="sm"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};