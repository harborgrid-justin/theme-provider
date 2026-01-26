import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { Icons } from './DashboardIcons';

export const LegalGalleryTab: React.FC = () => {
  const { theme } = useTheme();

  const sectionTitleStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    marginTop: '3rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  const CardWrapper = ({ children, title, className = '' }: { children?: React.ReactNode, title: string, className?: string }) => (
      <ThemedCard className={`flex flex-col justify-between h-full group hover:shadow-lg transition-shadow min-h-[120px] ${className}`}>
          <div className="text-[10px] uppercase font-bold tracking-wider opacity-40 mb-3" style={{ color: theme.colors.text }}>{title}</div>
          <div className="flex-1 flex flex-col justify-center relative w-full">
            {children}
          </div>
      </ThemedCard>
  );

  return (
    <div className="animate-in fade-in duration-500 pb-20">
        <div style={{...sectionTitleStyle, marginTop: '1rem'}}>Legal Micro-Elements (45 Items)</div>
        <p className="mb-8 opacity-60" style={{ color: theme.colors.text }}>
            Specialized UI tokens for contract management, compliance, and legal workflows. 
        </p>

        {/* Micro Elements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {/* --- 1. Document Statuses --- */}
            <CardWrapper title="Status: Draft">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border border-dashed" style={{ borderColor: theme.colors.text + '60', color: theme.colors.textSecondary }}>
                    Draft v0.1
                </span>
            </CardWrapper>

            <CardWrapper title="Status: Review">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}>
                    In Review
                </span>
            </CardWrapper>

            <CardWrapper title="Status: Pending">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: '#F59E0B20', color: '#D97706' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse"></div> Pending Sig
                </span>
            </CardWrapper>

            <CardWrapper title="Status: Signed">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border" style={{ borderColor: theme.colors.success, color: theme.colors.success, backgroundColor: theme.colors.success + '10' }}>
                    <Icons.Check size="sm" className="mr-1"/> Signed
                </span>
            </CardWrapper>

            <CardWrapper title="Status: Expired">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.textSecondary, textDecoration: 'line-through' }}>
                    Expired
                </span>
            </CardWrapper>


            {/* --- 2. Document Types --- */}
            <CardWrapper title="Doc: PDF">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-10 rounded border flex items-center justify-center bg-red-50 text-red-600 border-red-100">
                        <span className="text-[10px] font-bold">PDF</span>
                    </div>
                    <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Contract.pdf</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Doc: Word">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-10 rounded border flex items-center justify-center bg-blue-50 text-blue-600 border-blue-100">
                        <span className="text-[10px] font-bold">DOC</span>
                    </div>
                    <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Draft.docx</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Doc: Spreadsheet">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-10 rounded border flex items-center justify-center bg-green-50 text-green-600 border-green-100">
                        <span className="text-[10px] font-bold">XLS</span>
                    </div>
                    <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Rates.xlsx</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Doc: Encrypted">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-10 rounded border flex items-center justify-center bg-gray-100 text-gray-500 relative">
                        <Icons.Lock size="sm" />
                    </div>
                    <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>Sensitive.dat</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Folder: Case">
                <div className="flex items-center gap-2 text-yellow-500">
                    <Icons.Folder size="lg" />
                    <span className="text-xs font-medium" style={{ color: theme.colors.text }}>Case #492</span>
                </div>
            </CardWrapper>


            {/* --- 3. Signatures & Initials --- */}
            <CardWrapper title="Signature Box">
                <div className="h-12 w-full border-b border-dashed relative flex items-end pb-1" style={{ borderColor: theme.colors.text + '40' }}>
                    <span className="font-serif italic text-xl transform -rotate-2 ml-4" style={{ color: theme.colors.primary }}>John Doe</span>
                    <span className="absolute top-0 right-0 text-[8px] text-green-600 flex items-center bg-green-50 px-1 rounded"><Icons.Check size="sm" className="mr-0.5"/> Verified</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Initials Box">
                <div className="w-10 h-10 border border-dashed rounded flex items-center justify-center bg-gray-50" style={{ borderColor: theme.colors.text + '40' }}>
                     <span className="font-serif italic text-sm" style={{ color: theme.colors.text }}>JD</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Sign Here Tab">
                <div className="relative h-8 w-full border-b" style={{ borderColor: theme.colors.text + '20' }}>
                    <div className="absolute -top-3 -right-2 bg-yellow-400 text-black text-[8px] font-bold px-2 py-1 shadow-sm transform rotate-12 rounded-sm">
                        SIGN HERE
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Digital Seal">
                <div className="w-12 h-12 rounded-full border-2 border-double flex items-center justify-center" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                    <div className="text-[6px] text-center font-bold leading-tight">OFFICIAL<br/>SEAL<br/>2024</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Timestamp">
                <div className="text-[10px] font-mono border px-2 py-1 rounded bg-gray-50 inline-block" style={{ borderColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>
                    2024-10-24 09:41:22 UTC
                </div>
            </CardWrapper>


            {/* --- 4. Redlining & Review --- */}
            <CardWrapper title="Redline: Delete">
                <span className="text-sm bg-red-100 text-red-800 line-through px-1 decoration-red-500 decoration-2">
                    termination clause
                </span>
            </CardWrapper>

            <CardWrapper title="Redline: Insert">
                <span className="text-sm bg-green-100 text-green-800 underline decoration-green-500 decoration-2 px-1">
                    expiration date
                </span>
            </CardWrapper>

            <CardWrapper title="Comment Bubble">
                 <div className="flex gap-2">
                     <div className="w-6 h-6 rounded-full bg-yellow-100 border border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-yellow-700">A</div>
                     <div className="bg-yellow-50 p-1.5 rounded-lg rounded-tl-none text-[10px] border border-yellow-100 text-yellow-900 leading-tight">
                         Can we clarify this term?
                     </div>
                 </div>
            </CardWrapper>

            <CardWrapper title="Review Status">
                 <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     <div className="h-1 flex-1 bg-gray-100 rounded-full" style={{ backgroundColor: theme.colors.text + '10' }}>
                         <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
                     </div>
                     <span className="text-[10px] font-bold" style={{ color: theme.colors.text }}>66%</span>
                 </div>
            </CardWrapper>

            <CardWrapper title="Clause Anchor">
                <div className="flex gap-2 items-start">
                    <span className="text-xs font-bold opacity-40 mt-0.5 select-none" style={{ color: theme.colors.text }}>§ 12.4</span>
                    <p className="text-[10px] leading-relaxed opacity-60 line-clamp-3" style={{ color: theme.colors.text }}>
                        Indemnification. The Supplier shall indemnify...
                    </p>
                </div>
            </CardWrapper>


            {/* --- 5. Metadata & Badges --- */}
            <CardWrapper title="Badge: Confidential">
                <span className="border border-red-200 bg-red-50 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    Confidential
                </span>
            </CardWrapper>

            <CardWrapper title="Badge: GDPR">
                <div className="flex items-center gap-1 border border-blue-200 bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    <Icons.Lock size="sm" className="text-[8px]"/> GDPR Ready
                </div>
            </CardWrapper>

             <CardWrapper title="Watermark">
                <div className="relative overflow-hidden h-8 w-full border bg-white flex items-center justify-center" style={{ borderColor: theme.colors.text + '10' }}>
                    <span className="absolute transform -rotate-12 text-2xl font-bold opacity-5 uppercase select-none pointer-events-none" style={{ color: theme.colors.text }}>DRAFT</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Jurisdiction">
                <div className="flex items-center gap-1 text-xs" style={{ color: theme.colors.textSecondary }}>
                    <Icons.Flag size="sm" />
                    <span>NY, USA</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Variable Field">
                 <span className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-xs font-mono border border-purple-200">
                     {'{{Effective_Date}}'}
                 </span>
            </CardWrapper>


            {/* --- 6. Security & Access --- */}
            <CardWrapper title="Access Level">
                 <div className="flex items-center justify-between border rounded p-1" style={{ borderColor: theme.colors.text + '20' }}>
                     <span className="text-[10px] font-bold px-1" style={{ color: theme.colors.text }}>Full Access</span>
                     <Icons.Lock size="sm" className="opacity-40" />
                 </div>
            </CardWrapper>

            <CardWrapper title="User Role">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gray-800 text-white flex items-center justify-center text-[10px]">L</div>
                    <div>
                        <div className="text-[10px] font-bold" style={{ color: theme.colors.text }}>Legal Counsel</div>
                        <div className="text-[8px] opacity-60" style={{ color: theme.colors.text }}>Editor</div>
                    </div>
                </div>
            </CardWrapper>

            <CardWrapper title="Secure Link">
                <div className="flex items-center gap-1 text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">
                    <Icons.Link size="sm"/> Encrypted Link
                </div>
            </CardWrapper>

            <CardWrapper title="MFA Badge">
                <div className="flex items-center gap-1 text-[10px] opacity-70" style={{ color: theme.colors.text }}>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div> 2FA Enabled
                </div>
            </CardWrapper>

            <CardWrapper title="Permission Toggle">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] opacity-70" style={{ color: theme.colors.text }}>Can Edit</span>
                    <div className="w-6 h-3 bg-green-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div></div>
                </div>
            </CardWrapper>


            {/* --- 7. Audit & Timeline --- */}
            <CardWrapper title="Audit Log">
                <div className="text-[10px] space-y-1 font-mono opacity-70" style={{ color: theme.colors.text }}>
                    <div>09:41 Opened by Alex</div>
                    <div>09:45 Edited Clause 3</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Version Tag">
                 <div className="inline-flex gap-1 items-center px-2 py-0.5 rounded-full border bg-gray-50 text-[10px]" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                     <span className="font-bold">v2.4</span>
                     <span className="opacity-50 text-[8px] border-l pl-1 ml-1 border-gray-300">Current</span>
                 </div>
            </CardWrapper>

            <CardWrapper title="Retention">
                <div className="flex items-center gap-1 text-[10px]" style={{ color: '#F59E0B' }}>
                    <Icons.Clock size="sm"/>
                    <span>Retain until 2030</span>
                </div>
            </CardWrapper>

            <CardWrapper title="History Dot">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="h-px w-4 bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full border-2 border-green-500 bg-white"></div>
                    <div className="h-px w-4 bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
            </CardWrapper>

            <CardWrapper title="Date Picker">
                <div className="flex items-center justify-between border rounded px-2 py-1" style={{ borderColor: theme.colors.text + '20' }}>
                    <span className="text-[10px]" style={{ color: theme.colors.text }}>Oct 24, 2024</span>
                    <Icons.Calendar size="sm" className="opacity-40"/>
                </div>
            </CardWrapper>


            {/* --- 8. Actions & Controls --- */}
            <CardWrapper title="Action: Download">
                <button className="flex items-center justify-center gap-1 w-full py-1.5 rounded text-[10px] font-bold border transition-colors hover:bg-gray-50" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                    <Icons.Cloud size="sm"/> Download
                </button>
            </CardWrapper>

            <CardWrapper title="Action: Print">
                <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5" style={{ color: theme.colors.text }}>
                    <Icons.File size="sm"/>
                </button>
            </CardWrapper>

            <CardWrapper title="Action: Share">
                <button className="flex items-center justify-center gap-1 w-full py-1.5 rounded text-[10px] font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: theme.colors.primary }}>
                    <Icons.Send size="sm"/> Share
                </button>
            </CardWrapper>

            <CardWrapper title="More Menu">
                 <div className="flex justify-center">
                     <div className="p-1 rounded hover:bg-black/5 cursor-pointer"><Icons.More /></div>
                 </div>
            </CardWrapper>

            <CardWrapper title="Filter Pill">
                <div className="inline-flex items-center px-2 py-1 rounded-full text-[10px] border cursor-pointer hover:bg-gray-50" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                    Type: MSA <Icons.Close size="sm" className="ml-1 opacity-40"/>
                </div>
            </CardWrapper>


            {/* --- 9. Form Inputs (Legal) --- */}
            <CardWrapper title="Party A Input">
                <div className="space-y-1">
                    <label className="text-[8px] uppercase font-bold opacity-60" style={{ color: theme.colors.text }}>Counterparty</label>
                    <div className="border-b border-dashed pb-0.5 text-xs" style={{ borderColor: theme.colors.text + '40', color: theme.colors.text }}>Acme Corp</div>
                </div>
            </CardWrapper>

            <CardWrapper title="Clause Select">
                 <div className="border rounded px-2 py-1 flex justify-between items-center text-[10px]" style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}>
                     <span>Force Majeure</span>
                     <Icons.ChevronDown size="sm" className="opacity-40"/>
                 </div>
            </CardWrapper>

             <CardWrapper title="Checkbox Terms">
                <div className="flex items-start gap-2">
                    <div className="w-3 h-3 rounded border mt-0.5 flex items-center justify-center" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.primary }}>
                        <Icons.Check size="sm" className="text-white text-[8px]" />
                    </div>
                    <span className="text-[8px] leading-tight" style={{ color: theme.colors.text }}>I agree to terms</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Radio Option">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border flex items-center justify-center" style={{ borderColor: theme.colors.primary }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current" style={{ color: theme.colors.primary }}></div>
                    </div>
                    <span className="text-[10px]" style={{ color: theme.colors.text }}>Net 30 Days</span>
                </div>
            </CardWrapper>

            <CardWrapper title="Notary Block">
                 <div className="h-full border border-double p-1 flex flex-col justify-center items-center opacity-40" style={{ borderColor: theme.colors.text }}>
                     <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-1">
                         <Icons.Star size="sm"/>
                     </div>
                     <span className="text-[6px] uppercase font-bold">Notary Public</span>
                 </div>
            </CardWrapper>
        </div>
        
        <div style={sectionTitleStyle}>Complex Legal Modules</div>
        
        {/* Large/Wide Components Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            
            {/* 1. Contract Header (Span 6) */}
            <CardWrapper title="Contract Header" className="col-span-2 md:col-span-6 min-h-[100px]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-red-50 flex items-center justify-center text-red-500 shadow-sm border border-red-100">
                             <Icons.File size="lg"/>
                        </div>
                        <div>
                             <div className="text-xl font-bold" style={{ color: theme.colors.text }}>Master Services Agreement</div>
                             <div className="flex items-center gap-3 text-xs opacity-60" style={{ color: theme.colors.text }}>
                                 <span>ID: MSA-2024-99</span>
                                 <span>•</span>
                                 <span>Last edit: 2 hrs ago</span>
                             </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <ThemedButton size="sm" variant="outline" className="flex-1 md:flex-none">Export PDF</ThemedButton>
                        <ThemedButton size="sm" className="flex-1 md:flex-none">Send for Sign</ThemedButton>
                    </div>
                </div>
            </CardWrapper>

            {/* 2. Audit Log Table (Span 6) */}
            <CardWrapper title="Detailed Audit Log" className="col-span-2 md:col-span-6">
                 <div className="overflow-x-auto">
                     <table className="w-full text-xs text-left">
                         <thead className="border-b" style={{ borderColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>
                             <tr>
                                 <th className="py-2 pl-2">Timestamp</th>
                                 <th className="py-2">User</th>
                                 <th className="py-2">Action</th>
                                 <th className="py-2">IP Address</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                             {[
                                 { time: 'Oct 24, 14:32', user: 'Alex M.', action: 'Modified Clause 4.2', ip: '192.168.1.1' },
                                 { time: 'Oct 24, 12:15', user: 'Sarah L.', action: 'Viewed Document', ip: '10.0.0.42' },
                                 { time: 'Oct 23, 09:44', user: 'System', action: 'Auto-saved version 2.1', ip: 'Internal' },
                             ].map((row, i) => (
                                 <tr key={i} className="hover:bg-black/5">
                                     <td className="py-2 pl-2 font-mono opacity-70" style={{ color: theme.colors.text }}>{row.time}</td>
                                     <td className="py-2 font-bold" style={{ color: theme.colors.text }}>{row.user}</td>
                                     <td className="py-2" style={{ color: theme.colors.text }}>{row.action}</td>
                                     <td className="py-2 opacity-50 font-mono" style={{ color: theme.colors.text }}>{row.ip}</td>
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                 </div>
            </CardWrapper>

            {/* 3. Clause Diff Viewer (Span 4) */}
            <CardWrapper title="Clause Diff Comparison" className="col-span-2 md:col-span-4 min-h-[200px]">
                <div className="grid grid-cols-2 gap-4 h-full text-xs">
                    <div className="p-3 rounded border bg-red-50/50" style={{ borderColor: theme.colors.error + '30' }}>
                         <div className="font-bold mb-2 text-red-700 uppercase tracking-wide text-[10px]">Original</div>
                         <p style={{ color: theme.colors.text }}>
                             The Supplier shall be liable for <span className="bg-red-200 text-red-900 px-0.5 rounded">any and all</span> damages caused by delay.
                         </p>
                    </div>
                    <div className="p-3 rounded border bg-green-50/50" style={{ borderColor: theme.colors.success + '30' }}>
                         <div className="font-bold mb-2 text-green-700 uppercase tracking-wide text-[10px]">Modified</div>
                         <p style={{ color: theme.colors.text }}>
                             The Supplier shall be liable for <span className="bg-green-200 text-green-900 px-0.5 rounded">direct</span> damages caused by delay.
                         </p>
                    </div>
                </div>
            </CardWrapper>

            {/* 4. Risk Matrix (Span 3) */}
            <CardWrapper title="Risk Matrix" className="col-span-2 md:col-span-3 lg:col-span-2">
                <div className="grid grid-cols-3 gap-1 aspect-square max-h-[200px] mx-auto">
                    {[
                        'bg-yellow-200', 'bg-orange-300', 'bg-red-400',
                        'bg-green-200', 'bg-yellow-200', 'bg-orange-300',
                        'bg-green-100', 'bg-green-200', 'bg-yellow-200'
                    ].map((bg, i) => (
                         <div key={i} className={`${bg} rounded flex items-center justify-center text-[10px] font-bold opacity-80 hover:opacity-100 cursor-pointer transition-opacity`}>
                             {i === 2 && 'High'}
                             {i === 6 && 'Low'}
                         </div>
                    ))}
                </div>
            </CardWrapper>

            {/* 5. Signatory Progress (Span 5) */}
            <CardWrapper title="Signature Progress" className="col-span-2 md:col-span-4 lg:col-span-5">
                <div className="flex items-center justify-between gap-4">
                    {[
                        { name: 'Initiator', status: 'signed', date: 'Oct 20' },
                        { name: 'Legal Dept', status: 'signed', date: 'Oct 21' },
                        { name: 'CFO', status: 'pending', date: 'Waiting' },
                        { name: 'Counterparty', status: 'waiting', date: '---' },
                    ].map((step, i, arr) => (
                        <div key={i} className="flex-1 flex flex-col items-center relative">
                            {i !== arr.length - 1 && (
                                <div className="absolute top-4 left-1/2 w-full h-0.5" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                            )}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 font-bold text-xs mb-2 transition-all ${
                                step.status === 'signed' ? 'bg-green-500 text-white' : 
                                step.status === 'pending' ? 'bg-orange-400 text-white animate-pulse' : 'bg-gray-200 text-gray-500'
                            }`}>
                                {step.status === 'signed' ? <Icons.Check size="sm"/> : i+1}
                            </div>
                            <div className="text-xs font-bold text-center" style={{ color: theme.colors.text }}>{step.name}</div>
                            <div className="text-[10px] opacity-60" style={{ color: theme.colors.text }}>{step.date}</div>
                        </div>
                    ))}
                </div>
            </CardWrapper>

            {/* 6. Terms Scrollbox (Span 3) */}
            <CardWrapper title="Terms Scroll Area" className="col-span-2 md:col-span-3">
                 <div className="h-48 border rounded p-3 overflow-y-auto text-xs leading-relaxed bg-gray-50/50" style={{ borderColor: theme.colors.text + '20' }}>
                     <h4 className="font-bold mb-2">1. Acceptance of Terms</h4>
                     <p className="mb-2 opacity-80">By accessing this website, we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.</p>
                     <h4 className="font-bold mb-2">2. Cookies</h4>
                     <p className="mb-2 opacity-80">We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the Company Name's Privacy Policy.</p>
                     <h4 className="font-bold mb-2">3. License</h4>
                     <p className="opacity-80">Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved.</p>
                 </div>
                 <div className="mt-3 flex items-center gap-2">
                     <div className="w-4 h-4 rounded border flex items-center justify-center" style={{ borderColor: theme.colors.primary }}><Icons.Check size="sm" className="text-[10px]"/></div>
                     <span className="text-xs font-bold" style={{ color: theme.colors.text }}>I have read and agree</span>
                 </div>
            </CardWrapper>

            {/* 7. Approval Chain (Span 4) */}
            <CardWrapper title="Approval Workflow" className="col-span-2 md:col-span-4">
                <div className="flex flex-col gap-4 pl-4 border-l-2" style={{ borderColor: theme.colors.text + '10' }}>
                    {[
                        { role: 'Project Manager', user: 'Mike Ross', status: 'Approved', time: '2d ago' },
                        { role: 'Finance Director', user: 'Jessica P.', status: 'Approved', time: '1d ago' },
                        { role: 'Legal Counsel', user: 'Harvey S.', status: 'Reviewing', time: 'Now' },
                    ].map((step, i) => (
                        <div key={i} className="relative pl-6">
                             <div className={`absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white`} style={{ 
                                 backgroundColor: step.status === 'Approved' ? theme.colors.success : theme.colors.accent 
                             }}></div>
                             <div className="flex justify-between items-start p-3 rounded border bg-white shadow-sm" style={{ borderColor: theme.colors.text + '10' }}>
                                 <div>
                                     <div className="text-xs font-bold uppercase opacity-60" style={{ color: theme.colors.text }}>{step.role}</div>
                                     <div className="font-bold text-sm" style={{ color: theme.colors.text }}>{step.user}</div>
                                 </div>
                                 <div className="text-right">
                                     <div className={`text-xs font-bold px-2 py-0.5 rounded-full ${step.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                                         {step.status}
                                     </div>
                                     <div className="text-[10px] mt-1 opacity-50">{step.time}</div>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>
            </CardWrapper>

            {/* 8. Metadata Grid (Span 6) */}
            <CardWrapper title="Contract Metadata" className="col-span-2 md:col-span-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50/50 p-4 rounded border" style={{ borderColor: theme.colors.text + '10' }}>
                    {[
                        { label: 'Contract Value', value: '$125,000.00' },
                        { label: 'Effective Date', value: 'Nov 01, 2024' },
                        { label: 'Renewal Type', value: 'Auto-Renew' },
                        { label: 'Notice Period', value: '60 Days' },
                        { label: 'Governing Law', value: 'Delaware' },
                        { label: 'Payment Terms', value: 'Net 45' },
                        { label: 'Counterparty', value: 'Globex Corp' },
                        { label: 'Department', value: 'Engineering' },
                    ].map((meta, i) => (
                        <div key={i}>
                            <div className="text-[10px] font-bold uppercase opacity-50 mb-1" style={{ color: theme.colors.text }}>{meta.label}</div>
                            <div className="text-sm font-medium" style={{ color: theme.colors.text }}>{meta.value}</div>
                        </div>
                    ))}
                </div>
            </CardWrapper>

            {/* 9. Compliance Dash (Span 3) */}
            <CardWrapper title="Compliance Score" className="col-span-2 md:col-span-3">
                 <div className="flex items-center justify-around h-full">
                     <div className="relative w-24 h-24">
                         <svg className="w-full h-full transform -rotate-90">
                             <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200" />
                             <circle cx="48" cy="48" r="40" stroke={theme.colors.success} strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="40" />
                         </svg>
                         <div className="absolute inset-0 flex flex-col items-center justify-center">
                             <span className="text-2xl font-bold" style={{ color: theme.colors.text }}>85%</span>
                             <span className="text-[10px] opacity-60">Pass</span>
                         </div>
                     </div>
                     <div className="space-y-2 text-xs">
                         <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div> <span>GDPR</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div> <span>CCPA</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-yellow-400"></div> <span>SOC2</span>
                         </div>
                     </div>
                 </div>
            </CardWrapper>

            {/* 10. Legal Team (Span 3) */}
            <CardWrapper title="Assigned Team" className="col-span-2 md:col-span-3">
                 <div className="space-y-3">
                     {[
                         { name: 'Rachel Zane', role: 'Paralegal', initials: 'RZ' },
                         { name: 'Mike Ross', role: 'Associate', initials: 'MR' },
                         { name: 'Louis Litt', role: 'Partner', initials: 'LL' },
                     ].map((p, i) => (
                         <div key={i} className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>
                                 {p.initials}
                             </div>
                             <div>
                                 <div className="text-xs font-bold" style={{ color: theme.colors.text }}>{p.name}</div>
                                 <div className="text-[10px] opacity-60">{p.role}</div>
                             </div>
                             <div className="ml-auto opacity-40 hover:opacity-100 cursor-pointer"><Icons.Chat size="sm"/></div>
                         </div>
                     ))}
                 </div>
            </CardWrapper>

            {/* 11. Negotiation Chat (Span 4) */}
            <CardWrapper title="Negotiation History" className="col-span-2 md:col-span-4 max-h-[250px] overflow-hidden">
                <div className="flex flex-col gap-3 p-2 h-full overflow-y-auto">
                    <div className="self-start max-w-[80%] bg-gray-100 p-2 rounded-lg rounded-tl-none text-xs" style={{ color: theme.colors.text }}>
                        We request changing the payment terms to Net 60.
                    </div>
                    <div className="self-end max-w-[80%] text-white p-2 rounded-lg rounded-tr-none text-xs" style={{ backgroundColor: theme.colors.primary }}>
                        We can agree to Net 45, but Net 60 is outside our policy.
                    </div>
                    <div className="self-start max-w-[80%] bg-gray-100 p-2 rounded-lg rounded-tl-none text-xs" style={{ color: theme.colors.text }}>
                        Understood. Net 45 is acceptable.
                    </div>
                    <div className="text-center text-[10px] opacity-40 my-2">-- Agreed on Clause 3.1 --</div>
                </div>
            </CardWrapper>

            {/* 12. Related Docs (Span 6) */}
            <CardWrapper title="Related Documents" className="col-span-2 md:col-span-6">
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {[
                        { name: 'NDA_Signed.pdf', type: 'PDF' },
                        { name: 'SOW_v2.docx', type: 'DOC' },
                        { name: 'Data_Processing_Addendum.pdf', type: 'PDF' },
                        { name: 'Security_Exhibits.zip', type: 'ZIP' },
                        { name: 'Prior_Agreement_2020.pdf', type: 'PDF' },
                    ].map((file, i) => (
                        <div key={i} className="min-w-[120px] p-3 border rounded flex flex-col items-center gap-2 hover:bg-gray-50 cursor-pointer" style={{ borderColor: theme.colors.text + '10' }}>
                             <div className="w-8 h-10 rounded border flex items-center justify-center bg-gray-100 text-[10px] font-bold" style={{ color: theme.colors.textSecondary }}>{file.type}</div>
                             <div className="text-[10px] text-center w-full truncate" style={{ color: theme.colors.text }}>{file.name}</div>
                        </div>
                    ))}
                </div>
            </CardWrapper>

            {/* 13. Smart Contract Code (Span 5) */}
            <CardWrapper title="Smart Contract Logic" className="col-span-2 md:col-span-4 lg:col-span-5">
                 <div className="bg-[#1E1E1E] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto">
                     <div><span className="text-purple-400">pragma</span> solidity ^0.8.0;</div>
                     <div className="mt-2"><span className="text-blue-400">contract</span> Escrow {'{'}</div>
                     <div className="pl-4"><span className="text-green-400">address</span> <span className="text-blue-400">public</span> payer;</div>
                     <div className="pl-4"><span className="text-green-400">address</span> <span className="text-blue-400">public</span> payee;</div>
                     <div className="pl-4"><span className="text-green-400">uint</span> <span className="text-blue-400">public</span> amount;</div>
                     <div className="mt-2 pl-4"><span className="text-blue-400">constructor</span>(address _payee) payable {'{'}</div>
                     <div className="pl-8">payee = _payee;</div>
                     <div className="pl-8">payer = msg.sender;</div>
                     <div className="pl-8">amount = msg.value;</div>
                     <div className="pl-4">{'}'}</div>
                     <div>{'}'}</div>
                 </div>
            </CardWrapper>

            {/* 14. Jurisdiction Map (Span 3) */}
            <CardWrapper title="Jurisdictions" className="col-span-2 md:col-span-3">
                 <div className="h-full flex flex-col gap-2">
                     <div className="flex items-center justify-between p-2 rounded bg-gray-50 border" style={{ borderColor: theme.colors.text + '10' }}>
                         <div className="flex items-center gap-2">
                             <div className="w-6 h-4 bg-blue-800 relative overflow-hidden"><div className="absolute top-0 left-0 w-2 h-2 bg-red-600"></div></div>
                             <span className="text-xs font-bold">United States</span>
                         </div>
                         <span className="text-[10px] bg-green-100 text-green-700 px-1 rounded">Active</span>
                     </div>
                     <div className="flex items-center justify-between p-2 rounded bg-gray-50 border" style={{ borderColor: theme.colors.text + '10' }}>
                         <div className="flex items-center gap-2">
                             <div className="w-6 h-4 bg-blue-600 flex items-center justify-center text-[6px] text-white">EU</div>
                             <span className="text-xs font-bold">European Union</span>
                         </div>
                         <span className="text-[10px] bg-green-100 text-green-700 px-1 rounded">Active</span>
                     </div>
                 </div>
            </CardWrapper>

            {/* 15. Identity Verification (Span 4) */}
            <CardWrapper title="Identity Verification" className="col-span-2 md:col-span-4">
                 <div className="flex items-center justify-between">
                     <div className="flex flex-col items-center">
                         <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mb-2"><Icons.Check/></div>
                         <span className="text-[10px] font-bold">ID Upload</span>
                     </div>
                     <div className="h-0.5 flex-1 mx-2 bg-green-500"></div>
                     <div className="flex flex-col items-center">
                         <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mb-2"><Icons.Check/></div>
                         <span className="text-[10px] font-bold">Liveness</span>
                     </div>
                     <div className="h-0.5 flex-1 mx-2 bg-green-500"></div>
                     <div className="flex flex-col items-center">
                         <div className="w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center mb-2 animate-pulse" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}><Icons.Search/></div>
                         <span className="text-[10px] font-bold">AML Check</span>
                     </div>
                 </div>
            </CardWrapper>

            {/* 16. Data Retention Banner (Span 6) */}
            <CardWrapper title="Data Policy" className="col-span-2 md:col-span-6">
                 <div className="flex items-center gap-4 p-4 rounded bg-blue-50 border border-blue-100 text-blue-900">
                     <Icons.Lock size="lg"/>
                     <div>
                         <h4 className="font-bold text-sm">Strict Data Retention Policy Active</h4>
                         <p className="text-xs opacity-80 mt-1">This document contains PII. It will be automatically purged from the system on <span className="font-bold">Oct 24, 2031</span> (7 years) in compliance with financial regulations.</p>
                     </div>
                 </div>
            </CardWrapper>

            {/* 17. License Rights (Span 3) */}
            <CardWrapper title="License Rights" className="col-span-2 md:col-span-3">
                 <div className="space-y-2">
                     <div className="flex items-center justify-between text-xs">
                         <span>Commercial Use</span>
                         <Icons.Check className="text-green-500" size="sm"/>
                     </div>
                     <div className="flex items-center justify-between text-xs">
                         <span>Modification</span>
                         <Icons.Check className="text-green-500" size="sm"/>
                     </div>
                     <div className="flex items-center justify-between text-xs">
                         <span>Distribution</span>
                         <Icons.Close className="text-red-500" size="sm"/>
                     </div>
                     <div className="flex items-center justify-between text-xs">
                         <span>Sublicensing</span>
                         <Icons.Close className="text-red-500" size="sm"/>
                     </div>
                 </div>
            </CardWrapper>

            {/* 18. Conflict Resolution (Span 4) */}
            <CardWrapper title="Conflict Resolution" className="col-span-2 md:col-span-4">
                 <div className="bg-yellow-50 p-3 rounded border border-yellow-100 mb-3 text-xs text-yellow-800">
                     Conflict detected in <strong>Clause 14.2 (Jurisdiction)</strong>. Party A proposes 'New York', Party B proposes 'California'.
                 </div>
                 <div className="flex gap-2">
                     <ThemedButton size="sm" className="flex-1">Accept A</ThemedButton>
                     <ThemedButton size="sm" className="flex-1">Accept B</ThemedButton>
                     <ThemedButton size="sm" variant="outline" className="flex-1">Discuss</ThemedButton>
                 </div>
            </CardWrapper>

            {/* 19. Billing Row (Span 5) */}
            <CardWrapper title="Service Line Item" className="col-span-2 md:col-span-4 lg:col-span-5">
                 <div className="flex items-center gap-4 p-2 border rounded hover:shadow-sm transition-shadow" style={{ borderColor: theme.colors.text + '10' }}>
                     <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center font-bold text-xs">01</div>
                     <div className="flex-1">
                         <div className="text-sm font-bold" style={{ color: theme.colors.text }}>Legal Consultation - Hourly</div>
                         <div className="text-xs opacity-60">Senior Partner Rate</div>
                     </div>
                     <div className="text-right px-4 border-l border-r" style={{ borderColor: theme.colors.text + '10' }}>
                         <div className="text-[10px] uppercase opacity-50">Hrs</div>
                         <div className="font-mono text-sm">4.5</div>
                     </div>
                     <div className="text-right px-4 border-r" style={{ borderColor: theme.colors.text + '10' }}>
                         <div className="text-[10px] uppercase opacity-50">Rate</div>
                         <div className="font-mono text-sm">$450</div>
                     </div>
                     <div className="text-right min-w-[80px]">
                         <div className="font-bold text-lg" style={{ color: theme.colors.text }}>$2,025</div>
                     </div>
                 </div>
            </CardWrapper>

            {/* 20. Search Results (Span 4) */}
            <CardWrapper title="Semantic Search" className="col-span-2 md:col-span-4">
                 <div className="space-y-3">
                     <div className="p-2 hover:bg-black/5 rounded cursor-pointer">
                         <div className="text-xs font-bold text-blue-600 mb-0.5">Clause 4.1 - Indemnity</div>
                         <div className="text-[10px] opacity-70 leading-relaxed" style={{ color: theme.colors.text }}>
                             ...Supplier shall <span className="bg-yellow-200 text-black">indemnify</span> Customer against all losses...
                         </div>
                     </div>
                     <div className="p-2 hover:bg-black/5 rounded cursor-pointer">
                         <div className="text-xs font-bold text-blue-600 mb-0.5">Clause 9.3 - Insurance</div>
                         <div className="text-[10px] opacity-70 leading-relaxed" style={{ color: theme.colors.text }}>
                             ...maintain comprehensive general liability <span className="bg-yellow-200 text-black">indemnity</span> insurance...
                         </div>
                     </div>
                 </div>
            </CardWrapper>

            {/* 21. Key Dates Timeline (Span 6) */}
            <CardWrapper title="Contract Lifecycle" className="col-span-2 md:col-span-6">
                 <div className="relative pt-6 pb-2">
                     <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 bg-gray-200"></div>
                     <div className="flex justify-between relative z-10">
                         {['Drafted', 'Internal Review', 'Negotiation', 'Signed', 'Active', 'Renewal'].map((stage, i) => (
                             <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                                 <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-125 ${i < 4 ? 'bg-green-500' : i === 4 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                                 <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: theme.colors.text }}>{stage}</span>
                             </div>
                         ))}
                     </div>
                 </div>
            </CardWrapper>

            {/* 22. Permissions Matrix (Span 5) */}
            <CardWrapper title="Access Control Matrix" className="col-span-2 md:col-span-4 lg:col-span-5">
                 <div className="overflow-x-auto">
                     <table className="w-full text-xs text-center">
                         <thead>
                             <tr>
                                 <th className="text-left pl-2">Role</th>
                                 <th>View</th>
                                 <th>Edit</th>
                                 <th>Comment</th>
                                 <th>Sign</th>
                                 <th>Delete</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                             <tr>
                                 <td className="text-left font-bold py-2 pl-2" style={{ color: theme.colors.text }}>Admin</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-green-500">●</td>
                             </tr>
                             <tr>
                                 <td className="text-left font-bold py-2 pl-2" style={{ color: theme.colors.text }}>Editor</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-gray-300">○</td>
                                 <td className="text-gray-300">○</td>
                             </tr>
                             <tr>
                                 <td className="text-left font-bold py-2 pl-2" style={{ color: theme.colors.text }}>Viewer</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-gray-300">○</td>
                                 <td className="text-green-500">●</td>
                                 <td className="text-gray-300">○</td>
                                 <td className="text-gray-300">○</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
            </CardWrapper>

            {/* 23. Notary Cert (Span 3) */}
            <CardWrapper title="Notarial Certificate" className="col-span-2 md:col-span-3">
                 <div className="border-4 border-double p-4 relative flex flex-col items-center justify-center text-center h-full" style={{ borderColor: theme.colors.text + '20' }}>
                     <div className="absolute top-2 right-2 opacity-20"><Icons.Star size="xl"/></div>
                     <h5 className="font-serif font-bold text-sm mb-2" style={{ color: theme.colors.text }}>State of California</h5>
                     <p className="text-[10px] italic opacity-60 mb-4">Subscribed and sworn to before me this 24th day of Oct, 2024.</p>
                     <div className="w-32 border-b border-black mb-1"></div>
                     <span className="text-[8px] uppercase">Notary Signature</span>
                 </div>
            </CardWrapper>

            {/* 24. Version Graph (Span 4) */}
            <CardWrapper title="Version Graph" className="col-span-2 md:col-span-4">
                 <div className="flex items-center h-full px-4">
                     <div className="flex flex-col items-center gap-1">
                         <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                         <div className="h-8 w-0.5 bg-gray-300"></div>
                         <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                         <div className="h-8 w-0.5 bg-gray-300"></div>
                         <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
                     </div>
                     <div className="flex flex-col justify-between h-[110px] ml-4 py-1">
                         <div className="text-xs">
                             <span className="font-bold">v1.0</span> <span className="opacity-50">- Initial Draft</span>
                         </div>
                         <div className="text-xs">
                             <span className="font-bold">v1.1</span> <span className="opacity-50">- Legal Edits</span>
                         </div>
                         <div className="text-xs">
                             <span className="font-bold text-blue-600">v2.0</span> <span className="opacity-50">- Current</span>
                         </div>
                     </div>
                 </div>
            </CardWrapper>

            {/* 25. Citation Card (Span 3) */}
            <CardWrapper title="Citations" className="col-span-2 md:col-span-3">
                 <div className="space-y-2 text-[10px] bg-yellow-50 p-2 rounded border border-yellow-100" style={{ color: theme.colors.text }}>
                     <div><span className="font-bold">1.</span> 15 U.S. Code § 7001 - Electronic records</div>
                     <div><span className="font-bold">2.</span> GDPR Art. 6(1)(b) - Contract necessity</div>
                     <div><span className="font-bold">3.</span> UCC § 2-207 - Add'l terms</div>
                 </div>
            </CardWrapper>

            {/* 26. File Upload Large (Span 4) */}
            <CardWrapper title="Bulk Upload" className="col-span-2 md:col-span-4">
                 <div className="border-2 border-dashed rounded-lg h-full min-h-[100px] flex flex-col items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors" style={{ borderColor: theme.colors.text + '20' }}>
                     <Icons.Cloud size="lg" className="opacity-30 mb-2"/>
                     <div className="text-xs font-bold" style={{ color: theme.colors.primary }}>Drop contracts here</div>
                     <div className="text-[10px] opacity-50">PDF, DOCX up to 50MB</div>
                 </div>
            </CardWrapper>

            {/* 27. Action Items (Span 3) */}
            <CardWrapper title="Action Items" className="col-span-2 md:col-span-3">
                 <div className="space-y-2">
                     <div className="flex items-center gap-2">
                         <div className="w-4 h-4 border rounded"></div>
                         <span className="text-xs line-through opacity-50">Review Exhibits</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <div className="w-4 h-4 border rounded"></div>
                         <span className="text-xs">Confirm Signatories</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <div className="w-4 h-4 border rounded bg-yellow-100 border-yellow-300"></div>
                         <span className="text-xs font-bold">Upload Insurance Cert</span>
                     </div>
                 </div>
            </CardWrapper>

            {/* 28. Tag Cloud (Span 3) */}
            <CardWrapper title="Key Terms" className="col-span-2 md:col-span-3">
                 <div className="flex flex-wrap gap-1.5">
                     {['Indemnity', 'Liability', 'Term', 'Termination', 'Warranty', 'Force Majeure', 'Governing Law', 'Arbitration', 'Confidentiality'].map(tag => (
                         <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] border opacity-80" style={{ borderColor: theme.colors.text + '20' }}>{tag}</span>
                     ))}
                 </div>
            </CardWrapper>

            {/* 29. Settlement Calc (Span 3) */}
            <CardWrapper title="Damages Calc" className="col-span-2 md:col-span-3">
                 <div className="flex flex-col gap-2">
                     <div className="flex justify-between text-xs">
                         <span className="opacity-70">Base Amount</span>
                         <span className="font-mono">$10,000</span>
                     </div>
                     <div className="flex justify-between text-xs">
                         <span className="opacity-70">Late Fees (5%)</span>
                         <span className="font-mono text-red-500">+$500</span>
                     </div>
                     <div className="border-t pt-1 flex justify-between text-sm font-bold">
                         <span>Total</span>
                         <span>$10,500</span>
                     </div>
                 </div>
            </CardWrapper>

            {/* 30. Footer (Span 6) */}
            <CardWrapper title="Legal Disclaimer" className="col-span-2 md:col-span-6">
                 <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-60">
                     <p>Confidential & Proprietary. Authorized use only.</p>
                     <div className="flex gap-4">
                         <span>Privacy Policy</span>
                         <span>Terms of Service</span>
                         <span>Support</span>
                     </div>
                     <p>© 2024 LegalTech Inc.</p>
                 </div>
            </CardWrapper>
        </div>
    </div>
  );
};