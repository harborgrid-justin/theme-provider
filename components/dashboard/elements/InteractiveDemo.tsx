import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { Icons } from '../DashboardIcons';

export const InteractiveDemo: React.FC = () => {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = useState(1);
  const [progressValue, setProgressValue] = useState(75);
  const [activeTab, setActiveTab] = useState('Account');
  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="space-y-12">
        {/* Buttons */}
        <div className="space-y-4">
            <h4 className="text-sm font-bold opacity-50 uppercase" style={{ color: theme.colors.text }}>Buttons & Actions</h4>
            <div className="flex flex-wrap gap-4 items-center">
                <ThemedButton size="lg">Large Button</ThemedButton>
                <ThemedButton>Default Button</ThemedButton>
                <ThemedButton size="sm">Small</ThemedButton>
                <ThemedButton className="rounded-full w-10 h-10 p-0 flex items-center justify-center"><Icons.Check/></ThemedButton>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
                <ThemedButton variant="secondary">Secondary</ThemedButton>
                <ThemedButton variant="outline">Outline</ThemedButton>
                <ThemedButton variant="ghost">Ghost</ThemedButton>
                <ThemedButton variant="ghost" className="text-red-500 hover:bg-red-50">Destructive</ThemedButton>
            </div>
             <div className="flex flex-wrap gap-2 items-center">
                <div className="flex rounded-md shadow-sm overflow-hidden" style={{ borderRadius: theme.borderRadius.button }}>
                    <button className="px-4 py-2 text-sm font-medium bg-white border-r hover:bg-gray-50 transition-colors" style={{ color: theme.colors.text, borderColor: theme.colors.text+'20' }}>Years</button>
                    <button className="px-4 py-2 text-sm font-medium bg-white border-r hover:bg-gray-50 transition-colors" style={{ color: theme.colors.text, borderColor: theme.colors.text+'20' }}>Months</button>
                    <button className="px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors" style={{ backgroundColor: theme.colors.primary, color: '#fff' }}>Days</button>
                </div>
            </div>
        </div>

        {/* Dropdowns & Tooltips */}
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Dropdown Menu</h4>
                 <div className="relative inline-block text-left">
                    <ThemedButton onClick={() => setDropdownOpen(!dropdownOpen)}>
                        Options <Icons.ChevronDown size="sm" className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </ThemedButton>
                    {dropdownOpen && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" style={{ borderRadius: theme.borderRadius.md }}>
                            <div className="py-1">
                                {['Account settings', 'Support', 'License', 'Sign out'].map((item, i) => (
                                    <a key={i} href="#" className="block px-4 py-2 text-sm hover:bg-gray-100" style={{ color: theme.colors.text }}>{item}</a>
                                ))}
                            </div>
                        </div>
                    )}
                 </div>
            </div>
            <div>
                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Tooltips</h4>
                 <div className="flex gap-4">
                     <div className="group relative inline-block">
                         <ThemedButton variant="outline" size="sm">Hover Me</ThemedButton>
                         <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded whitespace-nowrap pointer-events-none">
                             Tooltip Text
                             <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>

        {/* Accordion */}
        <div>
             <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Accordion</h4>
             <div className="border rounded-lg overflow-hidden" style={{ borderColor: theme.colors.text + '20', borderRadius: theme.borderRadius.card }}>
                 {[
                     { q: "What is your refund policy?", a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked." },
                     { q: "Do you offer technical support?", a: "No, we don't." },
                     { q: "Can I cancel anytime?", a: "Yes, absolutely." },
                 ].map((item, i) => (
                     <div key={i} className="border-b last:border-0" style={{ borderColor: theme.colors.text + '20' }}>
                         <button 
                            className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
                            onClick={() => setAccordionOpen(accordionOpen === i ? null : i)}
                         >
                             <span className="font-medium text-sm" style={{ color: theme.colors.text }}>{item.q}</span>
                             <Icons.ChevronDown className={`transition-transform duration-200 ${accordionOpen === i ? 'rotate-180' : ''}`} style={{ color: theme.colors.text }} size="sm" />
                         </button>
                         <div 
                            className={`px-4 overflow-hidden transition-all duration-200 ${accordionOpen === i ? 'max-h-24 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                            style={{ backgroundColor: theme.colors.surface }}
                         >
                             <p className="text-sm" style={{ color: theme.colors.textSecondary }}>{item.a}</p>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Tabs & Navigation */}
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Tabs</h4>
                 <div className="border-b flex gap-6" style={{ borderColor: theme.colors.text + '20' }}>
                    {['Account', 'Team', 'Billing', 'Notifications'].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-sm font-medium transition-all relative`}
                            style={{ 
                                color: activeTab === tab ? theme.colors.primary : theme.colors.textSecondary,
                            }}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full" style={{ backgroundColor: theme.colors.primary }}></div>
                            )}
                        </button>
                    ))}
                 </div>
                 <div className="p-4 bg-gray-50/50 rounded-b-lg border border-t-0 text-sm" style={{ borderColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>
                    Content for {activeTab} tab...
                 </div>
            </div>

            <div>
                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Breadcrumbs</h4>
                 <div className="flex items-center gap-2 text-sm mb-6" style={{ color: theme.colors.textSecondary }}>
                    <span className="hover:underline cursor-pointer">Home</span>
                    <span className="opacity-50">/</span>
                    <span className="hover:underline cursor-pointer">Settings</span>
                    <span className="opacity-50">/</span>
                    <span className="font-medium" style={{ color: theme.colors.primary }}>Profile</span>
                 </div>

                 <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Pagination</h4>
                 <div className="flex items-center gap-2">
                    <ThemedButton 
                        size="sm" 
                        variant="outline" 
                        className="w-8 h-8 p-0 flex items-center justify-center"
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </ThemedButton>
                    
                    {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                         <button 
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className="w-8 h-8 rounded flex items-center justify-center text-sm font-medium hover:bg-black/5 transition-colors" 
                            style={{ 
                                backgroundColor: currentPage === page ? theme.colors.primary : 'transparent', 
                                color: currentPage === page ? '#fff' : theme.colors.text, 
                                borderRadius: theme.borderRadius.sm 
                            }}
                        >
                            {page}
                        </button>
                    ))}

                    <ThemedButton 
                        size="sm" 
                        variant="outline" 
                        className="w-8 h-8 p-0 flex items-center justify-center"
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                    >
                        {'>'}
                    </ThemedButton>
                 </div>
            </div>
        </div>

        {/* Stepper */}
        <div>
            <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Stepper</h4>
            <div className="flex items-center max-w-xl relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 -z-10" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                <div 
                    className="absolute top-1/2 left-0 h-0.5 -z-10 transition-all duration-300" 
                    style={{ 
                        backgroundColor: theme.colors.primary,
                        width: `${((activeStep - 1) / 2) * 100}%`
                    }}
                ></div>
                
                <div className="flex justify-between w-full">
                    {['Details', 'Payment', 'Review'].map((step, i) => {
                        const stepNum = i + 1;
                        const isActive = stepNum <= activeStep;
                        return (
                        <div key={i} className="flex flex-col items-center gap-2 px-2 cursor-pointer group" onClick={() => setActiveStep(stepNum)}>
                            <div 
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all relative z-10`}
                                style={{ 
                                    backgroundColor: isActive ? theme.colors.primary : theme.colors.background,
                                    border: `2px solid ${isActive ? theme.colors.primary : theme.colors.text + '20'}`,
                                    color: isActive ? '#fff' : theme.colors.textSecondary,
                                    boxShadow: stepNum === activeStep ? `0 0 0 4px ${theme.colors.primary}30` : 'none',
                                }}
                            >
                                {isActive && stepNum < activeStep ? <Icons.Check size="sm"/> : stepNum}
                            </div>
                            <span className={`text-xs font-medium`} style={{ color: isActive ? theme.colors.text : theme.colors.textSecondary }}>{step}</span>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>

        {/* Progress */}
         <div>
            <h4 className="text-sm font-bold opacity-50 uppercase mb-2" style={{ color: theme.colors.text }}>Progress</h4>
            <div className="max-w-xl">
                <div className="w-full h-2 rounded-full overflow-hidden mb-4" style={{ backgroundColor: theme.colors.text + '10' }}>
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progressValue}%`, backgroundColor: theme.colors.primary }}></div>
                </div>
                <div className="flex gap-2">
                    <ThemedButton size="sm" variant="outline" onClick={() => setProgressValue(Math.max(0, progressValue - 10))}>-</ThemedButton>
                    <ThemedButton size="sm" variant="outline" onClick={() => setProgressValue(Math.min(100, progressValue + 10))}>+</ThemedButton>
                </div>
            </div>
        </div>
    </div>
  );
};