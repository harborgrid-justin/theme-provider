import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { Icons } from '../DashboardIcons';
import { toast } from '../../ui/Toaster';

export const ProjectFiles: React.FC = () => {
  const { theme } = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Initial static data moved to state for interactivity
  const [files, setFiles] = useState([
    { name: 'Q4_Financial_Report.pdf', size: '2.4 MB', type: 'pdf', date: 'Today, 10:23 AM', user: 'Alex M.' },
    { name: 'Homepage_Mockup_v3.fig', size: '45 MB', type: 'fig', date: 'Yesterday', user: 'James R.' },
    { name: 'Project_Timeline.xlsx', size: '128 KB', type: 'xls', date: 'Oct 24', user: 'Sarah W.' },
    { name: 'Logo_Pack_Final.zip', size: '12 MB', type: 'zip', date: 'Oct 22', user: 'James R.' },
  ]);

  useEffect(() => {
    // Simulate initial data fetch
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList).map(file => ({
      name: file.name,
      size: formatSize(file.size),
      type: file.name.split('.').pop()?.toLowerCase() || 'file',
      date: 'Just now',
      user: 'You'
    }));
    
    setFiles(prev => [...newFiles, ...prev]);
    toast.success(`Uploaded ${newFiles.length} file(s)`);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes('pdf')) return <Icons.File style={{ color: theme.colors.error }} />;
    if (t.includes('fig') || t.includes('png') || t.includes('jpg')) return <Icons.Image style={{ color: theme.colors.accent }} />;
    if (t.includes('xls') || t.includes('csv')) return <Icons.Chart style={{ color: theme.colors.success }} />;
    if (t.includes('zip') || t.includes('rar')) return <Icons.Folder style={{ color: '#F59E0B' }} />;
    return <Icons.File style={{ color: theme.colors.textSecondary }} />;
  };

  const SkeletonPulse = ({ className }: { className?: string }) => (
    <div className={`animate-pulse rounded ${className}`} style={{ backgroundColor: theme.colors.text + '10' }}></div>
  );

  return (
    <div className="space-y-8">
        <h3 className="text-lg font-bold" style={{ color: theme.colors.text }}>Documents & Assets</h3>
        
        {/* Upload Zone */}
        <div 
            className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all cursor-pointer ${isDragging ? 'bg-opacity-10' : 'bg-transparent hover:bg-gray-50'}`}
            style={{ 
                borderColor: isDragging ? theme.colors.primary : theme.colors.text + '20',
                backgroundColor: isDragging ? theme.colors.primary + '10' : undefined
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
        >
            <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                multiple 
                onChange={handleFileSelect} 
            />
            <div 
                className={`mb-4 p-4 rounded-full transition-colors`}
                style={{ 
                    backgroundColor: isDragging ? theme.colors.primary + '20' : theme.colors.text + '05',
                    color: isDragging ? theme.colors.primary : theme.colors.textSecondary
                }}
            >
                <Icons.Cloud size="lg"/>
            </div>
            <h4 className="font-bold text-sm mb-1" style={{ color: theme.colors.text }}>
                {isDragging ? 'Drop files here' : 'Click or drag files to upload'}
            </h4>
            <p className="text-xs opacity-50" style={{ color: theme.colors.text }}>
                Support for PDF, FIG, XLS, ZIP
            </p>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {['Contracts', 'Design Assets', 'Specifications', 'Invoices', 'Reports'].map((folder, i) => (
                 <ThemedCard key={i} className="flex flex-col items-center justify-center p-6 cursor-pointer hover:brightness-95 transition-all group">
                     <div className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform">
                         <Icons.Folder size="xl" />
                     </div>
                     <span className="text-sm font-medium text-center" style={{ color: theme.colors.text }}>{folder}</span>
                     <span className="text-[10px] opacity-50" style={{ color: theme.colors.text }}>{Math.floor(Math.random() * 20) + 1} items</span>
                 </ThemedCard>
             ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <ThemedCard className="col-span-2 p-0 overflow-hidden flex flex-col">
                <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: theme.colors.text + '10' }}>
                     <h4 className="font-bold text-sm" style={{ color: theme.colors.text }}>Recent Uploads</h4>
                     <button className="text-xs font-medium hover:underline" style={{ color: theme.colors.primary }}>View All</button>
                </div>
                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-sm">
                        <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                            {isLoading ? Array.from({length: 4}).map((_, i) => (
                                <tr key={i}>
                                    <td className="p-4 pl-6 flex items-center gap-3">
                                        <SkeletonPulse className="w-8 h-8 rounded" />
                                        <div className="space-y-1">
                                            <SkeletonPulse className="w-32 h-3" />
                                            <SkeletonPulse className="w-16 h-2" />
                                        </div>
                                    </td>
                                    <td className="p-4"><SkeletonPulse className="w-20 h-3" /></td>
                                    <td className="p-4"><SkeletonPulse className="w-24 h-3" /></td>
                                    <td className="p-4"></td>
                                </tr>
                            )) : files.map((file, i) => (
                                <tr 
                                    key={i} 
                                    className="hover:bg-black/5 group cursor-pointer transition-colors"
                                    onClick={() => toast.success(`Downloading ${file.name}...`)}
                                >
                                    <td className="p-4 pl-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded flex items-center justify-center bg-gray-50" style={{ backgroundColor: theme.colors.text + '05' }}>
                                            {getFileIcon(file.type)}
                                        </div>
                                        <div>
                                            <div className="font-medium" style={{ color: theme.colors.text }}>{file.name}</div>
                                            <div className="text-[10px] opacity-60" style={{ color: theme.colors.text }}>{file.size}</div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-xs opacity-60" style={{ color: theme.colors.text }}>{file.date}</td>
                                    <td className="p-4 text-xs" style={{ color: theme.colors.text }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>
                                                {file.user.split(' ')[0][0]}
                                            </div>
                                            {file.user}
                                        </div>
                                    </td>
                                    <td className="p-4 text-right pr-6">
                                        <button 
                                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-black/10 rounded transition-all" 
                                            style={{ color: theme.colors.textSecondary }}
                                            onClick={(e) => { e.stopPropagation(); toast.info("Menu clicked"); }}
                                        >
                                            <Icons.More size="sm"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ThemedCard>

            <div className="space-y-6">
                <ThemedCard>
                     <h4 className="font-bold text-sm mb-4" style={{ color: theme.colors.text }}>Storage Usage</h4>
                     <div className="relative w-40 h-40 mx-auto mb-4">
                         {/* Simple CSS Donut representation */}
                         <div className="w-full h-full rounded-full border-[12px] flex items-center justify-center relative" style={{ borderColor: theme.colors.text + '05' }}>
                            <div 
                                className="absolute inset-0 rounded-full border-[12px] border-transparent"
                                style={{ 
                                    borderTopColor: theme.colors.primary, 
                                    borderRightColor: theme.colors.primary, 
                                    transform: 'rotate(45deg)',
                                    zIndex: 10
                                }}
                            ></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold" style={{ color: theme.colors.text }}>75%</div>
                                <div className="text-[10px] opacity-60" style={{ color: theme.colors.text }}>Used</div>
                            </div>
                         </div>
                     </div>
                     <div className="space-y-2 text-xs">
                         <div className="flex justify-between" style={{ color: theme.colors.text }}>
                             <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div> Documents</span>
                             <span className="font-bold">12 GB</span>
                         </div>
                         <div className="flex justify-between" style={{ color: theme.colors.text }}>
                             <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.text + '20' }}></div> Images</span>
                             <span className="font-bold">4.2 GB</span>
                         </div>
                     </div>
                     <ThemedButton size="sm" variant="outline" className="w-full mt-6">Upgrade Storage</ThemedButton>
                </ThemedCard>
            </div>
        </div>
    </div>
  );
};