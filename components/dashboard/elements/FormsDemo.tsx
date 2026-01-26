import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedInput } from '../../ui-elements/ThemedInput';
import { Icons } from '../DashboardIcons';

export const FormsDemo: React.FC = () => {
  const { theme } = useTheme();
  const [toggle, setToggle] = useState(true);
  const [radio, setRadio] = useState('Option 1');

  const labelStyle = { color: theme.colors.text, opacity: 0.8 };

  return (
    <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
            <h4 className="text-sm font-bold opacity-50 uppercase" style={{ color: theme.colors.text }}>Input Fields</h4>
            
            <div className="space-y-1">
                <label className="text-xs font-bold" style={labelStyle}>Email Address</label>
                <ThemedInput placeholder="name@example.com" />
                <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>We'll never share your email.</div>
            </div>

            <div className="space-y-1">
                 <label className="text-xs font-bold" style={labelStyle}>Search</label>
                <div className="relative">
                    <ThemedInput placeholder="Search..." className="pl-10" />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" style={{ color: theme.colors.text }}><Icons.Search/></div>
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold" style={labelStyle}>Message</label>
                <textarea 
                    className="w-full p-3 border text-sm focus:ring-2 outline-none h-28 transition-all" 
                    placeholder="Type your message here..."
                    style={{ 
                        borderRadius: theme.borderRadius.sm,
                        borderColor: theme.colors.text + '30',
                        backgroundColor: theme.colors.surface,
                        color: theme.colors.text,
                    }} 
                />
            </div>

            {/* File Upload */}
             <div className="space-y-1">
                 <label className="text-xs font-bold" style={labelStyle}>Upload Document</label>
                 <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-black/5 transition-colors cursor-pointer" style={{ borderColor: theme.colors.text + '20' }}>
                     <div className="opacity-50 mb-2" style={{ color: theme.colors.text }}><Icons.Cloud size="md" /></div>
                     <span className="text-sm font-medium" style={{ color: theme.colors.primary }}>Click to upload</span>
                     <span className="text-xs opacity-50" style={{ color: theme.colors.text }}>or drag and drop</span>
                 </div>
             </div>

             <div className="space-y-1">
                <label className="text-xs font-bold" style={{ color: theme.colors.error }}>Error State</label>
                <ThemedInput placeholder="Invalid input" style={{ borderColor: theme.colors.error }} defaultValue="Invalid Value" />
                <div className="text-xs" style={{ color: theme.colors.error }}>Please enter a valid value.</div>
            </div>
        </div>

        <div className="space-y-8">
             <h4 className="text-sm font-bold opacity-50 uppercase" style={{ color: theme.colors.text }}>Selection Controls</h4>
             
             {/* Select */}
             <div className="space-y-1">
                <label className="text-xs font-bold" style={labelStyle}>Country</label>
                <div className="relative">
                    <select 
                        className="w-full p-2.5 border text-sm focus:ring-2 outline-none appearance-none bg-transparent"
                        style={{ 
                            borderRadius: theme.borderRadius.sm,
                            borderColor: theme.colors.text + '30',
                            color: theme.colors.text
                        }}
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" style={{ color: theme.colors.text }}>
                        <Icons.ChevronDown />
                    </div>
                </div>
             </div>

             {/* Switch */}
             <div className="flex items-center justify-between p-3 border rounded-lg" style={{ borderColor: theme.colors.text + '10' }}>
                <span className="text-sm font-medium" style={{ color: theme.colors.text }}>Push Notifications</span>
                <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setToggle(!toggle)}>
                    <div 
                    className={`w-11 h-6 rounded-full relative transition-colors duration-300`}
                    style={{ backgroundColor: toggle ? theme.colors.success : theme.colors.text + '30' }}
                    >
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${toggle ? 'left-6' : 'left-1'}`}></div>
                    </div>
                </div>
            </div>
            
            {/* Checkbox Group */}
            <div>
                 <label className="text-xs font-bold mb-2 block" style={labelStyle}>Preferences</label>
                 <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded border flex items-center justify-center transition-colors" style={{ borderColor: theme.colors.primary, backgroundColor: theme.colors.primary }}>
                            <Icons.Check className="text-white" size="sm"/>
                        </div>
                        <span className="text-sm" style={{ color: theme.colors.text }}>Newsletter</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded border flex items-center justify-center transition-colors" style={{ borderColor: theme.colors.text+'40', backgroundColor: 'transparent' }}></div>
                        <span className="text-sm" style={{ color: theme.colors.text }}>Marketing Emails</span>
                    </div>
                 </div>
            </div>

            {/* Radio Group */}
            <div>
                <label className="text-xs font-bold mb-2 block" style={labelStyle}>Plan</label>
                <div className="space-y-2">
                    {['Option 1', 'Option 2', 'Option 3'].map(opt => (
                        <div key={opt} className="flex items-center gap-2 cursor-pointer" onClick={() => setRadio(opt)}>
                            <div className="w-5 h-5 rounded-full border flex items-center justify-center" style={{ borderColor: radio === opt ? theme.colors.primary : theme.colors.text+'40' }}>
                                {radio === opt && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>}
                            </div>
                            <span className="text-sm" style={{ color: theme.colors.text }}>{opt}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Range */}
            <div>
                 <label className="text-xs font-bold mb-2 block" style={labelStyle}>Volume</label>
                 <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            </div>

            {/* Rich Text Sim */}
            <div>
                 <label className="text-xs font-bold mb-2 block" style={labelStyle}>Rich Text Editor</label>
                 <div className="border rounded-md overflow-hidden" style={{ borderColor: theme.colors.text + '20' }}>
                     <div className="bg-gray-50 border-b p-2 flex gap-2" style={{ borderColor: theme.colors.text + '20' }}>
                         <button className="p-1 hover:bg-gray-200 rounded font-bold text-xs" style={{ color: theme.colors.text }}>B</button>
                         <button className="p-1 hover:bg-gray-200 rounded italic text-xs" style={{ color: theme.colors.text }}>I</button>
                         <button className="p-1 hover:bg-gray-200 rounded underline text-xs" style={{ color: theme.colors.text }}>U</button>
                     </div>
                     <div className="p-3 h-24 text-sm" style={{ backgroundColor: theme.colors.surface, color: theme.colors.text }}>
                         Start typing...
                     </div>
                 </div>
            </div>
        </div>
    </div>
  );
};