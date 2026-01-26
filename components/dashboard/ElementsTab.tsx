import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { ThemedInput } from '../ui-elements/ThemedInput';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icons } from './DashboardIcons';
import { toast } from '../ui/Toaster';

export const ElementsTab: React.FC = () => {
  const { theme } = useTheme();
  
  // -- Interactive State Management --
  
  // 18. Sliders
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeValues, setRangeValues] = useState({ min: 20, max: 70 });

  // 19. Toggles & Controls
  const [toggleState, setToggleState] = useState(true);
  const [checkboxState, setCheckboxState] = useState(true);
  const [radioState, setRadioState] = useState('option1');

  // 20. Chips
  const [chips, setChips] = useState([
    { id: 1, label: 'Simple Tag', type: 'default', icon: 'Tag' },
    { id: 2, label: 'Primary Tag', type: 'primary', dismissible: true },
    { id: 3, label: 'Status', type: 'status' }
  ]);

  // 20. Stepper
  const [activeStep, setActiveStep] = useState(1);

  // 21. Progress
  const [progressValue, setProgressValue] = useState(75);

  // 24. Navigation
  const [activeNavTab, setActiveNavTab] = useState('Account');
  const [currentPage, setCurrentPage] = useState(1);

  // 28. Feedback
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [visibleToasts, setVisibleToasts] = useState([
      { id: 1, type: 'success', text: 'Changes saved successfully', icon: 'Check' },
      { id: 2, type: 'error', text: 'Connection failed', icon: 'Close' },
      { id: 3, type: 'info', text: 'Update available', icon: 'Help' },
  ]);

  // 29. Cards
  const [isFollowing, setIsFollowing] = useState(false);

  // 30. Social
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24);

  // 32. Advanced Nav
  const [verticalTab, setVerticalTab] = useState('Profile');
  const [accordionOpen, setAccordionOpen] = useState<number | null>(1);

  // 33. Tables
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'}>({ key: 'name', direction: 'asc' });

  // 34. Overlays
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 35. Input Groups
  const [showPassword, setShowPassword] = useState(false);

  // 36. Media
  const [uploadProgress, setUploadProgress] = useState(45);


  // -- Handlers --

  const handleChipDismiss = (id: number) => {
    setChips(prev => prev.filter(c => c.id !== id));
    toast.info("Tag removed");
  };

  const resetChips = () => {
    setChips([
        { id: 1, label: 'Simple Tag', type: 'default', icon: 'Tag' },
        { id: 2, label: 'Primary Tag', type: 'primary', dismissible: true },
        { id: 3, label: 'Status', type: 'status' }
    ]);
  };

  const handleModalAction = (action: 'cancel' | 'delete') => {
      setIsModalVisible(false);
      if (action === 'delete') toast.success("Item deleted successfully");
  };

  const handleLike = () => {
      setIsLiked(!isLiked);
      setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSort = (key: string) => {
      setSortConfig(prev => ({
          key,
          direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
      }));
      toast.info(`Sorted by ${key}`);
  };

  // -- Styles --

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

  const subHeadingStyle = {
      color: theme.colors.text,
      opacity: 0.5,
      fontWeight: 'bold',
      fontSize: '0.75rem',
      textTransform: 'uppercase' as const,
      marginBottom: '1rem'
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
        
        {/* 17. Buttons */}
        <section>
            <div style={sectionTitleStyle}>17. Button Variants</div>
            <div className="space-y-4">
                <div className="flex flex-wrap gap-4 items-center">
                    <ThemedButton size="lg" onClick={() => toast.info("Large button clicked")}>Large Button</ThemedButton>
                    <ThemedButton onClick={() => toast.info("Default button clicked")}>Default Button</ThemedButton>
                    <ThemedButton size="sm" onClick={() => toast.info("Small button clicked")}>Small</ThemedButton>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <ThemedButton variant="secondary" onClick={() => toast.info("Secondary action")}>Secondary</ThemedButton>
                    <ThemedButton variant="outline" onClick={() => toast.info("Outline action")}>Outline</ThemedButton>
                    <ThemedButton variant="ghost" onClick={() => toast.info("Ghost action")}>Ghost</ThemedButton>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <ThemedButton className="rounded-full">Pill Shape</ThemedButton>
                    <ThemedButton><Icons.Check/> With Icon</ThemedButton>
                    <ThemedButton disabled className="opacity-50 cursor-not-allowed">Disabled</ThemedButton>
                </div>
            </div>
        </section>

        {/* 18. Inputs & Sliders */}
        <section>
            <div style={sectionTitleStyle}>18. Input Fields & Sliders</div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
                <div className="space-y-4">
                    <ThemedInput placeholder="Default Input" />
                    <div className="relative">
                        <ThemedInput placeholder="With Icon" className="pl-10" />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" style={{ color: theme.colors.text }}><Icons.Search/></div>
                    </div>
                    <div>
                        <label className="text-xs font-bold mb-1 block" style={{ color: theme.colors.error }}>Error State</label>
                        <ThemedInput placeholder="Invalid input" style={{ borderColor: theme.colors.error }} />
                    </div>
                </div>
                <div className="space-y-8 pt-2">
                        {/* Slider Component */}
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-2 opacity-70" style={{ color: theme.colors.text }}>
                                <span>Opacity</span>
                                <span>{sliderValue}%</span>
                            </div>
                            <input 
                                type="range" 
                                min="0" max="100" 
                                value={sliderValue} 
                                onChange={(e) => setSliderValue(parseInt(e.target.value))}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                                style={{ 
                                    accentColor: theme.colors.primary,
                                    backgroundColor: theme.colors.text + '20'
                                }}
                            />
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-2 opacity-70" style={{ color: theme.colors.text }}>
                                <span>Range ({rangeValues.min} - {rangeValues.max})</span>
                            </div>
                            <div className="relative w-full h-2 rounded-lg" style={{ backgroundColor: theme.colors.text + '20' }}>
                                <div 
                                    className="absolute top-0 bottom-0 rounded-lg" 
                                    style={{ 
                                        backgroundColor: theme.colors.primary,
                                        left: `${rangeValues.min}%`,
                                        right: `${100 - rangeValues.max}%`
                                    }}
                                ></div>
                                {/* Mock Handles for range visualization */}
                                <div 
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border shadow rounded-full cursor-col-resize"
                                    style={{ left: `${rangeValues.min}%` }}
                                    title="Drag min (Mock)"
                                ></div>
                                <div 
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border shadow rounded-full cursor-col-resize"
                                    style={{ left: `${rangeValues.max}%` }}
                                    title="Drag max (Mock)"
                                ></div>
                            </div>
                        </div>
                </div>
            </div>
        </section>

        {/* 19. Toggles & Controls */}
        <section>
            <div style={sectionTitleStyle}>19. Toggles & Controls</div>
            <div className="flex flex-wrap gap-12">
                <div className="space-y-4">
                    <h4 style={subHeadingStyle}>Switches</h4>
                    <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setToggleState(!toggleState)}>
                        <div 
                        className={`w-12 h-6 rounded-full relative transition-colors duration-300`}
                        style={{ backgroundColor: toggleState ? theme.colors.success : theme.colors.text + '30' }}
                        >
                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${toggleState ? 'left-7' : 'left-1'}`}></div>
                        </div>
                        <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                            Notifications {toggleState ? 'On' : 'Off'}
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 style={subHeadingStyle}>Checkboxes</h4>
                    <div 
                        className="flex items-center gap-2 cursor-pointer select-none"
                        onClick={() => setCheckboxState(!checkboxState)}
                    >
                        <div 
                            className="w-5 h-5 rounded border flex items-center justify-center transition-colors" 
                            style={{ 
                                backgroundColor: checkboxState ? theme.colors.primary : theme.colors.surface, 
                                borderColor: checkboxState ? theme.colors.primary : theme.colors.text + '30', 
                                borderRadius: theme.borderRadius.sm,
                                color: 'white'
                            }}
                        >
                            {checkboxState && <Icons.Check/>}
                        </div>
                        <span className="text-sm" style={{ color: theme.colors.text }}>{checkboxState ? 'Selected' : 'Unselected'} Option</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 style={subHeadingStyle}>Radios</h4>
                    <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => setRadioState('option1')}>
                        <div className="w-5 h-5 rounded-full border flex items-center justify-center" style={{ borderColor: radioState === 'option1' ? theme.colors.primary : theme.colors.text + '30', backgroundColor: theme.colors.surface }}>
                            {radioState === 'option1' && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>}
                        </div>
                        <span className="text-sm" style={{ color: theme.colors.text }}>Option 1</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => setRadioState('option2')}>
                        <div className="w-5 h-5 rounded-full border flex items-center justify-center" style={{ borderColor: radioState === 'option2' ? theme.colors.primary : theme.colors.text + '30', backgroundColor: theme.colors.surface }}>
                            {radioState === 'option2' && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>}
                        </div>
                        <span className="text-sm" style={{ color: theme.colors.text }}>Option 2</span>
                    </div>
                </div>
            </div>
        </section>

        {/* 20. Chips & Steppers */}
        <section>
            <div style={sectionTitleStyle}>20. Chips & Steppers</div>
            <div className="space-y-8">
                {/* Chips */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h4 style={subHeadingStyle} className="mb-0">Tags / Chips</h4>
                        {chips.length < 3 && <button onClick={resetChips} className="text-xs hover:underline" style={{ color: theme.colors.primary }}>Reset</button>}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {chips.map(chip => (
                            <span 
                                key={chip.id}
                                className="px-3 py-1 rounded-full text-sm flex items-center gap-2 transition-all animate-in zoom-in duration-200"
                                style={{ 
                                    backgroundColor: chip.type === 'primary' ? theme.colors.primary : chip.type === 'status' ? theme.colors.primary + '20' : theme.colors.surface,
                                    color: chip.type === 'primary' ? '#fff' : chip.type === 'status' ? theme.colors.primary : theme.colors.text,
                                    border: chip.type === 'default' ? `1px solid ${theme.colors.text}30` : 'none'
                                }}
                            >
                                {chip.icon === 'Tag' && <Icons.Tag size="sm"/>}
                                {chip.type === 'status' && <div className="w-2 h-2 rounded-full bg-current"></div>}
                                {chip.label}
                                {chip.dismissible && (
                                    <button onClick={() => handleChipDismiss(chip.id)} className="hover:opacity-70 transition-opacity">
                                        <Icons.Close size="sm"/>
                                    </button>
                                )}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Steppers */}
                <div>
                    <h4 style={subHeadingStyle}>Process Stepper (Clickable)</h4>
                    <div className="flex items-center max-w-xl relative">
                        {/* Connecting Line Background */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 -z-10" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        {/* Connecting Line Active */}
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
                                const isCurrent = stepNum === activeStep;
                                return (
                                <div key={i} className="flex flex-col items-center gap-2 px-2 cursor-pointer group" onClick={() => setActiveStep(stepNum)}>
                                    <div 
                                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all relative z-10`}
                                        style={{ 
                                            backgroundColor: isActive ? theme.colors.primary : theme.colors.background,
                                            border: `2px solid ${isActive ? theme.colors.primary : theme.colors.text + '20'}`,
                                            color: isActive ? '#fff' : theme.colors.textSecondary,
                                            boxShadow: isCurrent ? `0 0 0 4px ${theme.colors.primary}30` : 'none',
                                            transform: isCurrent ? 'scale(1.1)' : 'scale(1)'
                                        }}
                                    >
                                        {isActive && stepNum < activeStep ? <Icons.Check size="sm"/> : stepNum}
                                    </div>
                                    <span className={`text-xs font-medium transition-colors`} style={{ color: isActive ? theme.colors.text : theme.colors.textSecondary }}>{step}</span>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 21. Progress & Loading */}
        <section>
            <div style={sectionTitleStyle}>21. Progress & Loading</div>
            <div className="max-w-xl space-y-8">
                <div>
                    <div className="flex justify-between text-xs font-bold mb-2" style={{ color: theme.colors.text }}>
                        <span>Profile Completion</span>
                        <span>{progressValue}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden mb-4" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <div 
                            className="h-full rounded-full transition-all duration-500 ease-out" 
                            style={{ width: `${progressValue}%`, backgroundColor: theme.colors.primary }}
                        ></div>
                    </div>
                    <div className="flex gap-2">
                        <ThemedButton size="sm" variant="outline" onClick={() => setProgressValue(Math.max(0, progressValue - 10))}>- 10%</ThemedButton>
                        <ThemedButton size="sm" variant="outline" onClick={() => setProgressValue(Math.min(100, progressValue + 10))}>+ 10%</ThemedButton>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: theme.colors.text + '20', borderTopColor: theme.colors.primary }}></div>
                    <div className="flex gap-1">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: theme.colors.text, animationDelay: `${i * 100}ms` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 22. Badges & Alerts */}
        <section>
            <div style={sectionTitleStyle}>22. Badges & Feedback</div>
            <div className="space-y-6">
                <div className="flex gap-4 flex-wrap">
                    {['primary', 'secondary', 'accent', 'success', 'error'].map(c => (
                        <span 
                        key={c}
                        className="px-2.5 py-0.5 text-xs font-bold rounded-full border hover:scale-105 transition-transform cursor-default"
                        style={{ 
                            backgroundColor: theme.colors[c as keyof typeof theme.colors] + '15',
                            color: theme.colors[c as keyof typeof theme.colors],
                            borderColor: theme.colors[c as keyof typeof theme.colors] + '30',
                        }}
                        >
                            {c} badge
                        </span>
                    ))}
                </div>

                <div className="grid gap-4 max-w-xl">
                    <div 
                    className="p-4 rounded-lg flex items-start gap-3 border transition-all hover:bg-opacity-80"
                    style={{ backgroundColor: theme.colors.success + '10', borderColor: theme.colors.success + '30' }}
                    >
                        <div style={{ color: theme.colors.success }}><Icons.Check/></div>
                        <div>
                            <h4 className="font-bold text-sm" style={{ color: theme.colors.success }}>Operation Successful</h4>
                            <p className="text-xs opacity-70 mt-1" style={{ color: theme.colors.text }}>Your changes have been saved to the cloud.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 23. Avatars & Tooltips */}
        <section>
            <div style={sectionTitleStyle}>23. Avatars & Tooltips</div>
            <div className="flex flex-wrap gap-12 items-center">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div 
                            key={i} 
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold hover:-translate-y-1 transition-transform cursor-pointer relative group"
                            style={{ 
                                borderColor: theme.colors.surface,
                                backgroundColor: theme.colors.text + '20',
                                color: theme.colors.text
                            }}
                            onClick={() => toast.info(`Clicked User ${i}`)}
                        >
                            {i === 4 ? '+5' : `U${i}`}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm" style={{ backgroundColor: theme.colors.text, color: theme.colors.surface }}>
                                User {i}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full relative" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <span className="absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.success, borderColor: theme.colors.surface }}></span>
                    </div>
                    <div className="w-12 h-12 rounded-full relative" style={{ backgroundColor: theme.colors.text + '10' }}>
                        <span className="absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full" style={{ backgroundColor: theme.colors.error, borderColor: theme.colors.surface }}></span>
                    </div>
                </div>
            </div>
        </section>

        {/* 24. Navigation Components */}
        <section>
            <div style={sectionTitleStyle}>24. Navigation Patterns</div>
            <div className="space-y-8">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm opacity-60" style={{ color: theme.colors.text }}>
                    <span className="hover:underline cursor-pointer">Home</span>
                    <Icons.ChevronRight/>
                    <span className="hover:underline cursor-pointer">Settings</span>
                    <Icons.ChevronRight/>
                    <span className="font-bold opacity-100" style={{ color: theme.colors.primary }}>Profile</span>
                </div>

                {/* Pagination */}
                <div className="flex items-center gap-2">
                    <ThemedButton size="sm" variant="outline" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>Prev</ThemedButton>
                    {[1, 2, 3].map(p => (
                        <button 
                        key={p} 
                        onClick={() => setCurrentPage(p)}
                        className="w-8 h-8 rounded flex items-center justify-center text-sm transition-colors"
                        style={{ 
                            backgroundColor: p === currentPage ? theme.colors.primary : 'transparent',
                            color: p === currentPage ? '#fff' : theme.colors.text
                        }}
                        >
                            {p}
                        </button>
                    ))}
                    <span className="text-xs opacity-50" style={{ color: theme.colors.text }}>...</span>
                    <ThemedButton size="sm" variant="outline" onClick={() => setCurrentPage(Math.min(3, currentPage + 1))} disabled={currentPage === 3}>Next</ThemedButton>
                </div>

                {/* Tab Bar */}
                <div className="border-b flex gap-6" style={{ borderColor: theme.colors.text + '20' }}>
                    {['Account', 'Security', 'Billing'].map((t) => (
                        <button 
                        key={t} 
                        onClick={() => setActiveNavTab(t)}
                        className="pb-2 text-sm font-medium transition-all relative"
                        style={{ 
                            color: activeNavTab === t ? theme.colors.primary : theme.colors.text,
                            opacity: activeNavTab === t ? 1 : 0.6 
                        }}
                        >
                            {t}
                            {activeNavTab === t && (
                                <span 
                                className="absolute bottom-0 left-0 w-full h-0.5 rounded-t-full transition-all" 
                                style={{ backgroundColor: theme.colors.primary }} 
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
        
        {/* 25. Layout Patterns */}
        <section>
            <div style={sectionTitleStyle}>25. Layout Patterns</div>
            <div className="space-y-8">
                
                {/* 1. Media Object */}
                <div>
                    <h4 style={subHeadingStyle}>Media Object (Flex)</h4>
                    <div className="flex gap-4 items-start p-4 rounded-lg border hover:shadow-sm transition-shadow cursor-pointer" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card}}>
                        <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center" style={{backgroundColor: theme.colors.primary + '20', color: theme.colors.primary}}>
                             <Icons.User size="sm" />
                        </div>
                        <div className="flex-1">
                            <div className="h-3 w-1/3 rounded mb-2" style={{backgroundColor: theme.colors.text, opacity: 0.8}} />
                            <div className="h-2 w-full rounded mb-1" style={{backgroundColor: theme.colors.text, opacity: 0.3}} />
                            <div className="h-2 w-2/3 rounded" style={{backgroundColor: theme.colors.text, opacity: 0.3}} />
                        </div>
                    </div>
                </div>

                {/* 2. Bento Grid */}
                <div>
                     <h4 style={subHeadingStyle}>Mosaic Grid (CSS Grid)</h4>
                     <div className="grid grid-cols-4 gap-2 h-48">
                        <div className="col-span-2 row-span-2 rounded-lg flex items-center justify-center border hover:brightness-95 transition-all cursor-pointer" style={{backgroundColor: theme.colors.primary + '20', borderColor: theme.colors.primary + '40', borderRadius: theme.borderRadius.md}}>
                            <span className="text-xs font-bold opacity-50" style={{color: theme.colors.primary}}>Main Feature</span>
                        </div>
                        <div className="col-span-2 rounded-lg border hover:brightness-95 transition-all" style={{backgroundColor: theme.colors.secondary + '10', borderColor: theme.colors.secondary + '30', borderRadius: theme.borderRadius.md}} />
                        <div className="col-span-1 rounded-lg border hover:brightness-95 transition-all" style={{backgroundColor: theme.colors.accent + '20', borderColor: theme.colors.accent + '40', borderRadius: theme.borderRadius.md}} />
                        <div className="col-span-1 rounded-lg border hover:brightness-95 transition-all" style={{backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '10', borderRadius: theme.borderRadius.md}} />
                     </div>
                </div>

                {/* 3. Split Card */}
                 <div>
                     <h4 style={subHeadingStyle}>Split Card (Flex Row)</h4>
                     <div className="flex flex-col sm:flex-row h-40 rounded-lg overflow-hidden border group cursor-pointer" style={{borderColor: theme.colors.text+'20', borderRadius: theme.borderRadius.card}}>
                        <div className="sm:w-1/3 flex items-center justify-center transition-colors group-hover:bg-opacity-80" style={{backgroundColor: theme.colors.text+'05'}}>
                           <Icons.Image style={{color: theme.colors.textSecondary, opacity: 0.5}} size="lg" />
                        </div>
                        <div className="flex-1 p-4 flex flex-col justify-center transition-colors group-hover:bg-gray-50" style={{backgroundColor: theme.colors.surface}}>
                           <div className="h-4 w-1/2 rounded mb-3" style={{backgroundColor: theme.colors.text, opacity: 0.8}} />
                           <div className="h-2 w-3/4 rounded mb-2" style={{backgroundColor: theme.colors.text, opacity: 0.3}} />
                           <div className="h-2 w-1/2 rounded" style={{backgroundColor: theme.colors.text, opacity: 0.3}} />
                        </div>
                    </div>
                </div>

                {/* 4. App Shell */}
                 <div>
                     <h4 style={subHeadingStyle}>Mini App Shell (Flex/Grid)</h4>
                     <div className="flex flex-col h-48 rounded-lg border overflow-hidden" style={{borderColor: theme.colors.text+'20', borderRadius: theme.borderRadius.card}}>
                        <div className="h-8 border-b flex items-center px-3 justify-between" style={{borderColor: theme.colors.text+'10', backgroundColor: theme.colors.surface}}>
                           <div className="flex gap-1.5">
                               <div className="w-2 h-2 rounded-full" style={{backgroundColor: theme.colors.error}}/>
                               <div className="w-2 h-2 rounded-full" style={{backgroundColor: theme.colors.accent}}/> 
                           </div>
                           <div className="h-1.5 w-16 rounded-full" style={{backgroundColor: theme.colors.text + '10'}}/>
                        </div>
                        <div className="flex flex-1">
                           <div className="w-12 border-r flex flex-col items-center py-3 gap-3" style={{borderColor: theme.colors.text+'10', backgroundColor: theme.colors.surface}}>
                               <div className="w-6 h-6 rounded flex items-center justify-center hover:bg-black/5 cursor-pointer" style={{backgroundColor: theme.colors.text+'05'}}><Icons.Menu size="sm"/></div>
                               <div className="w-6 h-6 rounded flex items-center justify-center hover:bg-black/5 cursor-pointer" style={{backgroundColor: theme.colors.text+'05'}}><Icons.User size="sm"/></div>
                           </div>
                           <div className="flex-1 p-3" style={{backgroundColor: theme.colors.background}}>
                              <div className="w-full h-full rounded border border-dashed flex items-center justify-center" style={{borderColor: theme.colors.text+'20'}}>
                                  <span className="text-xs opacity-40">Content Area</span>
                              </div>
                           </div>
                        </div>
                     </div>
                </div>

                {/* 5. Scroll Strip */}
                 <div>
                     <h4 style={subHeadingStyle}>Horizontal Scroll (Overflow)</h4>
                     <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                        {[1,2,3,4,5,6].map(i => (
                           <div 
                                key={i} 
                                className="w-24 h-24 shrink-0 rounded-lg flex flex-col items-center justify-center border hover:-translate-y-1 transition-transform cursor-pointer" 
                                style={{
                                    borderColor: theme.colors.text+'10', 
                                    backgroundColor: theme.colors.surface, 
                                    borderRadius: theme.borderRadius.md,
                                    boxShadow: `0 2px 4px ${theme.colors.text}05`
                                }}
                            >
                               <span className="text-xl font-bold mb-1" style={{color: theme.colors.primary}}>{i}</span>
                               <span className="text-[10px] uppercase tracking-wide opacity-50">Item</span>
                           </div>
                        ))}
                     </div>
                </div>
            </div>
        </section>

        {/* 26. Form Layouts */}
        <section>
            <div style={sectionTitleStyle}>26. Form Layouts</div>
            <div className="space-y-12">
                
                {/* Stacked Form */}
                <div className="max-w-md">
                    <h4 style={subHeadingStyle}>Stacked</h4>
                    <div className="p-6 border rounded-xl space-y-4" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card}}>
                        <div>
                            <label className="block text-xs font-bold mb-1.5" style={{color: theme.colors.text}}>Email Address</label>
                            <ThemedInput type="email" placeholder="you@example.com" />
                            <p className="text-[10px] mt-1 opacity-60" style={{color: theme.colors.text}}>We'll never share your email.</p>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1.5">
                                <label className="text-xs font-bold" style={{color: theme.colors.text}}>Password</label>
                                <a href="#" className="text-xs hover:underline" style={{color: theme.colors.primary}}>Forgot?</a>
                            </div>
                            <ThemedInput type="password" placeholder="••••••••" />
                        </div>
                        <ThemedButton className="w-full">Sign In</ThemedButton>
                    </div>
                </div>

                {/* Horizontal Form */}
                <div className="max-w-2xl">
                    <h4 style={subHeadingStyle}>Horizontal</h4>
                    <div className="p-6 border rounded-xl space-y-6" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card}}>
                        <div className="grid md:grid-cols-4 gap-4 items-center">
                            <label className="text-sm font-medium md:text-right" style={{color: theme.colors.text}}>Full Name</label>
                            <div className="md:col-span-3">
                                <ThemedInput placeholder="Jane Doe" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 items-center">
                            <label className="text-sm font-medium md:text-right" style={{color: theme.colors.text}}>Department</label>
                            <div className="md:col-span-3">
                                <select 
                                    className="w-full px-4 py-2 outline-none transition-all appearance-none bg-transparent border focus:ring-1"
                                    style={{
                                        borderRadius: theme.borderRadius.sm,
                                        borderColor: theme.colors.text+'20',
                                        color: theme.colors.text
                                    }}
                                >
                                    <option>Engineering</option>
                                    <option>Design</option>
                                    <option>Marketing</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 items-start">
                             <label className="text-sm font-medium md:text-right pt-2" style={{color: theme.colors.text}}>Bio</label>
                             <div className="md:col-span-3">
                                <textarea 
                                    className="w-full px-4 py-2 outline-none transition-all bg-transparent border min-h-[80px] focus:ring-1"
                                    placeholder="Tell us about yourself..."
                                    style={{
                                        borderRadius: theme.borderRadius.sm,
                                        borderColor: theme.colors.text+'20',
                                        color: theme.colors.text
                                    }}
                                />
                             </div>
                        </div>
                         <div className="grid md:grid-cols-4 gap-4">
                            <div className="md:col-start-2 md:col-span-3 flex justify-end gap-3">
                                <ThemedButton variant="ghost">Cancel</ThemedButton>
                                <ThemedButton>Save Profile</ThemedButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inline & Validation */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 style={subHeadingStyle}>Inline</h4>
                        <div className="p-6 border rounded-xl" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card}}>
                             <div className="flex gap-2 items-end">
                                <div className="flex-1">
                                    <label className="block text-xs font-bold mb-1.5" style={{color: theme.colors.text}}>Newsletter</label>
                                    <ThemedInput placeholder="Enter your email" />
                                </div>
                                <ThemedButton>Subscribe</ThemedButton>
                             </div>
                        </div>
                    </div>
                    <div>
                         <h4 style={subHeadingStyle}>Validation States</h4>
                         <div className="p-6 border rounded-xl space-y-4" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card}}>
                            <div>
                                <label className="block text-xs font-bold mb-1.5" style={{color: theme.colors.error}}>Invalid Input</label>
                                <div className="relative">
                                    <ThemedInput defaultValue="invalid-email" style={{borderColor: theme.colors.error, color: theme.colors.error}} />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2" style={{color: theme.colors.error}}>
                                        <Icons.Close size="sm"/>
                                    </div>
                                </div>
                                <p className="text-[10px] mt-1 font-medium" style={{color: theme.colors.error}}>Please enter a valid email address.</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold mb-1.5" style={{color: theme.colors.success}}>Valid Input</label>
                                <div className="relative">
                                    <ThemedInput defaultValue="user_validated" style={{borderColor: theme.colors.success, color: theme.colors.success}} />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2" style={{color: theme.colors.success}}>
                                        <Icons.Check size="sm"/>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

            </div>
        </section>

        {/* 27. Data Display */}
        <section>
            <div style={sectionTitleStyle}>27. Data Display</div>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Description List */}
                <ThemedCard className="p-0 overflow-hidden">
                    <div className="px-4 py-3 border-b" style={{borderColor: theme.colors.text+'10'}}>
                        <h4 className="text-sm font-bold" style={{color: theme.colors.text}}>Application Details</h4>
                    </div>
                    <div className="divide-y" style={{borderColor: theme.colors.text+'10'}}>
                        {[
                            {k: 'Application ID', v: 'APP_29384'},
                            {k: 'Status', v: 'Active', badge: true},
                            {k: 'Last Deployed', v: '2 hours ago'},
                            {k: 'Region', v: 'us-east-1'},
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-3 px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-default">
                                <span className="font-medium opacity-60" style={{color: theme.colors.text}}>{row.k}</span>
                                <span className="col-span-2 flex items-center" style={{color: theme.colors.text}}>
                                    {row.badge ? (
                                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{backgroundColor: theme.colors.success+'20', color: theme.colors.success}}>
                                            {row.v}
                                        </span>
                                    ) : row.v}
                                </span>
                            </div>
                        ))}
                    </div>
                </ThemedCard>

                {/* Tree View */}
                <ThemedCard>
                    <h4 className="text-sm font-bold mb-4" style={{color: theme.colors.text}}>File Structure</h4>
                    <div className="space-y-1 font-mono text-sm">
                        <div className="flex items-center gap-2 cursor-pointer" style={{color: theme.colors.primary}}>
                            <Icons.Folder size="sm"/> <span>src</span>
                        </div>
                        <div className="pl-4 space-y-1 border-l ml-2" style={{borderColor: theme.colors.text+'20'}}>
                            <div className="flex items-center gap-2 cursor-pointer" style={{color: theme.colors.accent}}>
                                <Icons.Folder size="sm"/> <span>components</span>
                            </div>
                            <div className="pl-4 space-y-1 border-l ml-2" style={{borderColor: theme.colors.text+'20'}}>
                                {['Button.tsx', 'Card.tsx', 'Input.tsx'].map(f => (
                                    <div key={f} className="flex items-center gap-2 hover:bg-black/5 rounded px-1 cursor-pointer transition-colors" style={{color: theme.colors.text}}>
                                        <Icons.File size="sm" className="opacity-50"/> <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ThemedCard>
            </div>
        </section>

        {/* 28. Feedback & Overlays */}
        <section>
            <div style={sectionTitleStyle}>28. Feedback States</div>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Static Modal */}
                <div className="relative h-64 rounded-xl overflow-hidden border flex items-center justify-center bg-black/5" style={{borderColor: theme.colors.text+'10'}}>
                    {/* Backdrop */}
                    {isModalVisible ? (
                        <>
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in"></div>
                            {/* Modal Content */}
                            <div className="relative w-64 p-4 rounded-lg shadow-xl bg-white animate-in zoom-in-95 duration-200" style={{
                                backgroundColor: theme.colors.surface, 
                                borderRadius: theme.borderRadius.card,
                                border: `1px solid ${theme.colors.text}10`
                            }}>
                                <h4 className="font-bold mb-2" style={{color: theme.colors.text}}>Confirm Action</h4>
                                <p className="text-xs mb-4 opacity-70" style={{color: theme.colors.text}}>Are you sure you want to delete this item? This cannot be undone.</p>
                                <div className="flex justify-end gap-2">
                                    <ThemedButton size="sm" variant="outline" onClick={() => handleModalAction('cancel')}>Cancel</ThemedButton>
                                    <ThemedButton size="sm" onClick={() => handleModalAction('delete')} style={{backgroundColor: theme.colors.error, borderColor: theme.colors.error}}>Delete</ThemedButton>
                                </div>
                            </div>
                        </>
                    ) : (
                        <ThemedButton onClick={() => setIsModalVisible(true)}>Open Modal</ThemedButton>
                    )}
                </div>

                {/* Toast Stack */}
                <div className="flex flex-col gap-3 justify-center p-4 border rounded-xl" style={{borderColor: theme.colors.text+'10', backgroundColor: theme.colors.background}}>
                    {visibleToasts.length > 0 ? visibleToasts.map((t) => (
                        <div key={t.id} className="flex items-center gap-3 p-3 rounded shadow-sm border bg-white animate-in slide-in-from-right-4 fade-in" style={{
                            backgroundColor: theme.colors.surface,
                            borderColor: theme.colors.text+'10',
                            borderRadius: theme.borderRadius.sm,
                            borderLeft: `4px solid ${theme.colors[t.type as keyof typeof theme.colors]}`
                        }}>
                            <div style={{color: theme.colors[t.type as keyof typeof theme.colors]}}>
                                {t.icon === 'Check' ? <Icons.Check/> : t.icon === 'Close' ? <Icons.Close/> : <Icons.Help/>}
                            </div>
                            <span className="text-sm font-medium flex-1" style={{color: theme.colors.text}}>{t.text}</span>
                            <button 
                                onClick={() => setVisibleToasts(prev => prev.filter(toast => toast.id !== t.id))}
                                className="opacity-40 hover:opacity-100" 
                                style={{color: theme.colors.text}}
                            >
                                <Icons.Close size="sm"/>
                            </button>
                        </div>
                    )) : (
                        <div className="text-center">
                            <ThemedButton size="sm" variant="outline" onClick={() => setVisibleToasts([
                                { id: Date.now(), type: 'success', text: 'New notification received', icon: 'Check' }
                            ])}>Reset Toasts</ThemedButton>
                        </div>
                    )}
                </div>
            </div>
        </section>

        {/* 29. Complex Cards */}
        <section>
            <div style={sectionTitleStyle}>29. Complex Cards</div>
            <div className="grid md:grid-cols-3 gap-6">
                
                {/* Profile Card */}
                <ThemedCard className="p-0 overflow-hidden group">
                    <div className="h-24 w-full transition-all group-hover:brightness-110" style={{backgroundColor: theme.colors.primary}}></div>
                    <div className="px-4 pb-4">
                        <div className="relative -mt-8 mb-3">
                            <div className="w-16 h-16 rounded-full border-4" style={{backgroundColor: theme.colors.surface, borderColor: theme.colors.surface}}>
                                <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-200" style={{color: theme.colors.textSecondary}}>
                                    <Icons.User size="md"/>
                                </div>
                            </div>
                        </div>
                        <h4 className="font-bold text-lg" style={{color: theme.colors.text}}>Jane Cooper</h4>
                        <p className="text-xs mb-4 opacity-60" style={{color: theme.colors.text}}>Senior Engineer</p>
                        <div className="flex gap-4 text-xs font-bold mb-4" style={{color: theme.colors.text}}>
                            <div>24 <span className="font-normal opacity-60">Projects</span></div>
                            <div>{isFollowing ? '12.1k' : '12k'} <span className="font-normal opacity-60">Followers</span></div>
                        </div>
                        <ThemedButton size="sm" className="w-full" variant={isFollowing ? 'outline' : 'primary'} onClick={() => setIsFollowing(!isFollowing)}>
                            {isFollowing ? 'Following' : 'Follow'}
                        </ThemedButton>
                    </div>
                </ThemedCard>

                {/* Skeleton Card */}
                <ThemedCard className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full animate-pulse" style={{backgroundColor: theme.colors.text+'10'}}></div>
                        <div className="space-y-1 flex-1">
                            <div className="h-3 w-1/3 rounded animate-pulse" style={{backgroundColor: theme.colors.text+'10'}}></div>
                            <div className="h-2 w-1/4 rounded animate-pulse" style={{backgroundColor: theme.colors.text+'10'}}></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-full rounded animate-pulse" style={{backgroundColor: theme.colors.text+'10'}}></div>
                        <div className="h-2 w-full rounded animate-pulse" style={{backgroundColor: theme.colors.text+'10'}}></div>
                        <div className="h-2 w-2/3 rounded animate-pulse" style={{backgroundColor: theme.colors.text+'10'}}></div>
                    </div>
                    <div className="h-24 w-full rounded animate-pulse" style={{backgroundColor: theme.colors.text+'05'}}></div>
                </ThemedCard>

                {/* Sparkline Stat */}
                <ThemedCard className="flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer">
                    <div>
                        <p className="text-xs font-bold uppercase opacity-50" style={{color: theme.colors.text}}>Total Revenue</p>
                        <h3 className="text-3xl font-bold my-2" style={{color: theme.colors.text}}>$24,500</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded" style={{backgroundColor: theme.colors.success+'20', color: theme.colors.success}}>
                            +12.5%
                        </span>
                    </div>
                    <div className="h-16 flex items-end gap-1 mt-4">
                        {[40, 60, 45, 70, 65, 85, 80, 95].map((h, i) => (
                            <div 
                                key={i} 
                                className="flex-1 rounded-t-sm transition-all hover:opacity-80"
                                style={{height: `${h}%`, backgroundColor: theme.colors.primary}}
                            ></div>
                        ))}
                    </div>
                </ThemedCard>

            </div>
        </section>

        {/* 30. Social & Content */}
        <section>
            <div style={sectionTitleStyle}>30. Social & Content</div>
            <div className="space-y-6 max-w-2xl">
                {/* Comment Thread */}
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full flex-shrink-0" style={{backgroundColor: theme.colors.text+'20'}}></div>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-sm" style={{color: theme.colors.text}}>Mike Ross</span>
                                <span className="text-xs opacity-50" style={{color: theme.colors.text}}>2 hours ago</span>
                            </div>
                            <p className="text-sm leading-relaxed" style={{color: theme.colors.text}}>
                                This design system is looking incredibly robust! I really like how the semantic colors are being applied across the different components.
                            </p>
                            <div className="flex gap-4 text-xs font-bold cursor-pointer select-none" style={{color: theme.colors.textSecondary}}>
                                <span className="hover:underline">Reply</span>
                                <span 
                                    className={`hover:underline flex items-center gap-1 transition-colors ${isLiked ? 'text-red-500' : ''}`}
                                    onClick={handleLike}
                                >
                                    Like {isLiked && `(${likeCount})`}
                                </span>
                            </div>
                            
                            {/* Nested Reply */}
                            <div className="flex gap-4 pt-4 mt-2 animate-in slide-in-from-left-4 fade-in duration-500">
                                <div className="w-8 h-8 rounded-full flex-shrink-0" style={{backgroundColor: theme.colors.primary+'20'}}></div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm" style={{color: theme.colors.text}}>Rachel Zane</span>
                                        <span className="text-xs px-1.5 py-0.5 rounded border" style={{borderColor: theme.colors.primary, color: theme.colors.primary, fontSize: '0.65rem'}}>AUTHOR</span>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{color: theme.colors.text}}>
                                        Thanks Mike! We're trying to cover as many edge cases as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 31. Typography & Prose */}
        <section>
             <div style={sectionTitleStyle}>31. Typography & Prose</div>
             <div className="grid md:grid-cols-2 gap-8">
                 <ThemedCard>
                     <h1 className="text-3xl font-bold mb-2" style={{color: theme.colors.text}}>Heading 1</h1>
                     <h2 className="text-2xl font-bold mb-2" style={{color: theme.colors.text}}>Heading 2</h2>
                     <h3 className="text-xl font-bold mb-2" style={{color: theme.colors.text}}>Heading 3</h3>
                     <h4 className="text-lg font-bold mb-2" style={{color: theme.colors.text}}>Heading 4</h4>
                 </ThemedCard>
                 <ThemedCard>
                     <p className="text-sm leading-relaxed mb-4" style={{color: theme.colors.text}}>
                         Regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         <a href="#" className="underline ml-1" style={{color: theme.colors.primary}}>Inline Link</a>
                     </p>
                     <blockquote className="pl-4 border-l-4 italic mb-4 text-sm opacity-80" style={{borderColor: theme.colors.primary, color: theme.colors.text}}>
                         "This is a blockquote element used for highlighting quotes or testimonials."
                     </blockquote>
                     <div className="flex gap-2 mb-4">
                         <code className="px-1.5 py-0.5 rounded text-xs font-mono" style={{backgroundColor: theme.colors.text+'10', color: theme.colors.text}}>const code = true;</code>
                         <kbd className="px-2 py-0.5 rounded border text-xs font-mono font-bold border-b-2" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, color: theme.colors.text}}>⌘ K</kbd>
                     </div>
                     <ul className="list-disc pl-5 text-sm space-y-1 opacity-80" style={{color: theme.colors.text}}>
                         <li>Unordered List Item 1</li>
                         <li>Unordered List Item 2</li>
                     </ul>
                 </ThemedCard>
             </div>
        </section>

        {/* 32. Advanced Navigation */}
        <section>
            <div style={sectionTitleStyle}>32. Advanced Navigation</div>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Vertical Tabs */}
                <div className="flex border rounded-lg overflow-hidden h-48" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card}}>
                    <div className="w-32 border-r flex flex-col" style={{borderColor: theme.colors.text+'10', backgroundColor: theme.colors.background}}>
                        {['Profile', 'Account', 'Privacy', 'Apps'].map(t => (
                            <button
                                key={t}
                                onClick={() => setVerticalTab(t)}
                                className="px-4 py-3 text-xs font-medium text-left hover:bg-black/5 transition-colors relative"
                                style={{color: verticalTab === t ? theme.colors.primary : theme.colors.text}}
                            >
                                {t}
                                {verticalTab === t && <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{backgroundColor: theme.colors.primary}}></div>}
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-center">
                        <span className="text-sm font-medium opacity-50" style={{color: theme.colors.text}}>{verticalTab} Content</span>
                    </div>
                </div>

                {/* Accordion */}
                <div className="border rounded-lg overflow-hidden" style={{borderColor: theme.colors.text+'20', borderRadius: theme.borderRadius.card}}>
                    {[1, 2, 3].map(i => (
                        <div key={i} className="border-b last:border-0" style={{borderColor: theme.colors.text+'10'}}>
                            <button 
                                onClick={() => setAccordionOpen(accordionOpen === i ? null : i)}
                                className="w-full flex justify-between items-center p-3 text-sm font-medium hover:bg-black/5"
                                style={{color: theme.colors.text, backgroundColor: theme.colors.surface}}
                            >
                                <span>Accordion Item {i}</span>
                                <div className={`transition-transform duration-200 ${accordionOpen === i ? 'rotate-180' : ''}`}><Icons.ChevronDown/></div>
                            </button>
                            {accordionOpen === i && (
                                <div className="p-3 text-xs opacity-70 border-t" style={{color: theme.colors.text, borderColor: theme.colors.text+'05', backgroundColor: theme.colors.background}}>
                                    Content for accordion item {i} goes here. Expanding reveals details.
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 33. Advanced Data Tables */}
        <section>
             <div style={sectionTitleStyle}>33. Data Tables</div>
             <ThemedCard className="p-0 overflow-hidden">
                 <div className="overflow-x-auto">
                     <table className="w-full text-sm">
                         <thead className="text-xs uppercase font-bold" style={{backgroundColor: theme.colors.text+'05', color: theme.colors.textSecondary}}>
                             <tr>
                                 {['Name', 'Role', 'Status', 'Last Active'].map((h) => (
                                     <th key={h} className="p-4 text-left cursor-pointer hover:bg-black/5 transition-colors" onClick={() => handleSort(h.toLowerCase())}>
                                         <div className="flex items-center gap-1">
                                             {h}
                                             {sortConfig.key === h.toLowerCase() && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                         </div>
                                     </th>
                                 ))}
                                 <th className="p-4 w-10"></th>
                             </tr>
                         </thead>
                         <tbody className="divide-y" style={{borderColor: theme.colors.text+'10'}}>
                             {[
                                 {name: 'Alice Smith', role: 'Admin', status: 'Online', time: 'Now'},
                                 {name: 'Bob Jones', role: 'Editor', status: 'Offline', time: '2h ago'},
                                 {name: 'Charlie Day', role: 'Viewer', status: 'Busy', time: '5m ago'},
                             ].map((row, i) => (
                                 <tr key={i} className="hover:bg-black/5 transition-colors group">
                                     <td className="p-4 font-medium" style={{color: theme.colors.text}}>{row.name}</td>
                                     <td className="p-4" style={{color: theme.colors.textSecondary}}>{row.role}</td>
                                     <td className="p-4">
                                         <span className="flex items-center gap-2">
                                            <span className={`w-2 h-2 rounded-full ${row.status === 'Online' ? 'bg-green-500' : row.status === 'Offline' ? 'bg-gray-400' : 'bg-orange-500'}`}></span>
                                            <span style={{color: theme.colors.text}}>{row.status}</span>
                                         </span>
                                     </td>
                                     <td className="p-4 font-mono text-xs opacity-60" style={{color: theme.colors.text}}>{row.time}</td>
                                     <td className="p-4 text-right">
                                         <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-black/10" style={{color: theme.colors.text}}>
                                             <Icons.More size="sm"/>
                                         </button>
                                     </td>
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                 </div>
                 <div className="p-3 border-t flex justify-between items-center text-xs opacity-60" style={{borderColor: theme.colors.text+'10', color: theme.colors.text}}>
                     <span>Showing 1-3 of 45</span>
                     <div className="flex gap-1">
                         <button className="px-2 py-1 rounded hover:bg-black/10">Prev</button>
                         <button className="px-2 py-1 rounded hover:bg-black/10">Next</button>
                     </div>
                 </div>
             </ThemedCard>
        </section>

        {/* 34. Overlays & Dialogs */}
        <section>
            <div style={sectionTitleStyle}>34. Overlays & Dialogs</div>
            <div className="flex flex-wrap gap-8 items-start">
                
                {/* Dropdown */}
                <div className="relative">
                    <ThemedButton onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2">
                        Options <Icons.ChevronDown/>
                    </ThemedButton>
                    {dropdownOpen && (
                        <div 
                            className="absolute top-full left-0 mt-2 w-48 shadow-lg rounded-lg border z-10 animate-in zoom-in-95 duration-100 origin-top-left"
                            style={{backgroundColor: theme.colors.surface, borderColor: theme.colors.text+'10'}}
                        >
                            <div className="p-1">
                                {['Edit Profile', 'Preferences', 'Integrations'].map(item => (
                                    <button key={item} className="w-full text-left px-3 py-2 text-sm rounded hover:bg-black/5" style={{color: theme.colors.text}}>
                                        {item}
                                    </button>
                                ))}
                                <div className="h-px my-1 bg-black/5"></div>
                                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-red-50 text-red-500">
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Context Menu Mock */}
                <div 
                    className="w-48 p-1 rounded-lg shadow-lg border cursor-default"
                    style={{backgroundColor: theme.colors.surface, borderColor: theme.colors.text+'10'}}
                >
                    <div className="px-3 py-1.5 text-xs font-bold opacity-50 uppercase mb-1" style={{color: theme.colors.text}}>Context Menu</div>
                    <div className="flex items-center justify-between px-3 py-2 text-sm rounded hover:bg-black/5 cursor-pointer" style={{color: theme.colors.text}}>
                        <span>Copy</span> <span className="opacity-40 text-xs">⌘C</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 text-sm rounded hover:bg-black/5 cursor-pointer" style={{color: theme.colors.text}}>
                        <span>Paste</span> <span className="opacity-40 text-xs">⌘V</span>
                    </div>
                </div>

                {/* Tooltip Mock */}
                <div className="relative group">
                    <ThemedButton variant="outline"><Icons.Help/></ThemedButton>
                    <div 
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded text-white bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                    >
                        Help Information
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* 35. Input Groups */}
        <section>
             <div style={sectionTitleStyle}>35. Input Groups</div>
             <div className="grid md:grid-cols-3 gap-6">
                 <div>
                     <label className="text-xs font-bold mb-1.5 block" style={{color: theme.colors.text}}>Website</label>
                     <div className="flex items-center">
                         <span className="px-3 py-2 text-sm border border-r-0 rounded-l-md bg-gray-50 text-gray-500" style={{borderColor: theme.colors.text+'20'}}>https://</span>
                         <input className="flex-1 min-w-0 px-3 py-2 text-sm border rounded-r-md outline-none focus:ring-1 transition-all" style={{borderColor: theme.colors.text+'20', borderRadius: `0 ${theme.borderRadius.sm} ${theme.borderRadius.sm} 0`}} placeholder="example.com"/>
                     </div>
                 </div>

                 <div>
                     <label className="text-xs font-bold mb-1.5 block" style={{color: theme.colors.text}}>Password Reveal</label>
                     <div className="relative">
                         <ThemedInput type={showPassword ? "text" : "password"} placeholder="Enter password" />
                         <button 
                            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{color: theme.colors.text}}
                         >
                             {showPassword ? <Icons.Image size="sm"/> : <Icons.Lock size="sm"/>}
                         </button>
                     </div>
                 </div>

                 <div>
                     <label className="text-xs font-bold mb-1.5 block" style={{color: theme.colors.text}}>Search Dropdown</label>
                     <div className="flex">
                         <input className="flex-1 min-w-0 px-3 py-2 text-sm border rounded-l-md outline-none focus:ring-1 z-10" style={{borderColor: theme.colors.text+'20', borderRadius: `${theme.borderRadius.sm} 0 0 ${theme.borderRadius.sm}`}} placeholder="Search..."/>
                         <button className="px-3 py-2 text-sm border border-l-0 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-r-md" style={{borderColor: theme.colors.text+'20'}}>
                             <Icons.Search size="sm"/>
                         </button>
                     </div>
                 </div>
             </div>
        </section>

        {/* 36. File & Media */}
        <section>
             <div style={sectionTitleStyle}>36. File & Media</div>
             <div className="grid md:grid-cols-2 gap-8">
                 {/* Upload */}
                 <div className="space-y-4">
                     <div 
                        className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-black/5 transition-colors group"
                        style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.background}}
                     >
                         <div className="p-3 rounded-full bg-gray-100 mb-3 group-hover:scale-110 transition-transform"><Icons.Cloud/></div>
                         <h4 className="text-sm font-bold" style={{color: theme.colors.text}}>Click to upload or drag and drop</h4>
                         <p className="text-xs opacity-50" style={{color: theme.colors.text}}>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                     </div>
                     <div className="bg-white p-3 rounded border flex items-center gap-3" style={{borderColor: theme.colors.text+'10'}}>
                         <Icons.File className="opacity-50"/>
                         <div className="flex-1">
                             <div className="flex justify-between text-xs mb-1">
                                 <span className="font-medium">uploading_file.zip</span>
                                 <span>{uploadProgress}%</span>
                             </div>
                             <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                 <div className="h-full bg-blue-500 transition-all duration-300" style={{width: `${uploadProgress}%`, backgroundColor: theme.colors.primary}}></div>
                             </div>
                         </div>
                         <button className="text-gray-400 hover:text-red-500"><Icons.Close size="sm"/></button>
                     </div>
                 </div>

                 {/* Media Player Shell */}
                 <div className="rounded-xl overflow-hidden border bg-black relative group" style={{borderColor: theme.colors.text+'20', height: '200px'}}>
                     <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all hover:scale-110">
                             <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                         </div>
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                         <button><Icons.Check size="sm"/></button> {/* Play icon placeholder */}
                         <div className="flex-1 h-1 bg-white/30 rounded-full">
                             <div className="w-1/3 h-full bg-white rounded-full"></div>
                         </div>
                         <span className="text-xs font-mono">03:45</span>
                     </div>
                 </div>
             </div>
        </section>

        {/* 37. Date & Time */}
        <section>
            <div style={sectionTitleStyle}>37. Date & Time</div>
            <div className="flex flex-wrap gap-8 items-start">
                {/* Mini Calendar */}
                <div className="p-4 rounded-lg border inline-block" style={{borderColor: theme.colors.text+'20', backgroundColor: theme.colors.surface, borderRadius: theme.borderRadius.card}}>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-bold" style={{color: theme.colors.text}}>October 2024</span>
                        <div className="flex gap-1">
                             <button className="p-1 hover:bg-black/5 rounded"><Icons.ChevronDown className="rotate-90" size="sm"/></button>
                             <button className="p-1 hover:bg-black/5 rounded"><Icons.ChevronRight size="sm"/></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 opacity-50">
                        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d}>{d}</span>)}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                        {Array.from({length: 31}).map((_, i) => (
                            <div 
                                key={i} 
                                className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer hover:bg-black/5 ${i === 23 ? 'text-white' : ''}`}
                                style={{
                                    backgroundColor: i === 23 ? theme.colors.primary : 'transparent',
                                    color: i === 23 ? '#fff' : theme.colors.text
                                }}
                            >
                                {i+1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Time Slots */}
                <div className="w-64">
                    <label className="text-xs font-bold mb-2 block" style={{color: theme.colors.text}}>Available Time</label>
                    <div className="grid grid-cols-2 gap-2">
                        {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'].map(t => (
                             <button 
                                key={t} 
                                className="px-3 py-2 text-xs border rounded hover:border-blue-500 hover:text-blue-500 transition-colors"
                                style={{borderColor: theme.colors.text+'20', color: theme.colors.text}}
                             >
                                 {t}
                             </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 38. Empty States */}
        <section>
             <div style={sectionTitleStyle}>38. Empty States</div>
             <div className="grid md:grid-cols-3 gap-6">
                 {/* No Data */}
                 <ThemedCard className="flex flex-col items-center justify-center text-center py-12">
                     <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-400">
                         <Icons.Search size="lg"/>
                     </div>
                     <h4 className="font-bold text-sm mb-1" style={{color: theme.colors.text}}>No results found</h4>
                     <p className="text-xs opacity-60 max-w-[200px]" style={{color: theme.colors.text}}>We couldn't find any items matching your search.</p>
                 </ThemedCard>

                 {/* Error State */}
                 <ThemedCard className="flex flex-col items-center justify-center text-center py-12 border-red-100 bg-red-50/50">
                     <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 text-red-500">
                         <Icons.Close size="lg"/>
                     </div>
                     <h4 className="font-bold text-sm mb-1 text-red-700">Connection Error</h4>
                     <ThemedButton size="sm" className="mt-2" style={{backgroundColor: theme.colors.error, borderColor: theme.colors.error}}>Retry</ThemedButton>
                 </ThemedCard>

                 {/* New Item */}
                 <ThemedCard className="flex flex-col items-center justify-center text-center py-12 border-dashed">
                     <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-4 text-indigo-500">
                         <Icons.File size="lg"/>
                     </div>
                     <h4 className="font-bold text-sm mb-1" style={{color: theme.colors.text}}>Start a new project</h4>
                     <ThemedButton size="sm" variant="outline" className="mt-2">Create Project</ThemedButton>
                 </ThemedCard>
             </div>
        </section>
    </div>
  );
};