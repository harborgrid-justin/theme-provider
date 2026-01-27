import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { ThemedInput } from '../../ui-elements/ThemedInput';
import { ThemedModal } from '../../ui-elements/ThemedModal';
import { Icons } from '../DashboardIcons';
import { toast } from '../../ui/Toaster';

export const ProjectLog: React.FC = () => {
  const { theme } = useTheme();
  
  const [issues, setIssues] = useState([
    { id: 'BUG-102', title: 'Login page crash on iOS', sev: 'P0', status: 'Open' },
    { id: 'BUG-105', title: 'Dark mode contrast issues', sev: 'P2', status: 'In Progress' },
    { id: 'BUG-110', title: 'Export PDF fails for large data', sev: 'P1', status: 'Open' },
  ]);

  const [isBugModalOpen, setIsBugModalOpen] = useState(false);
  const [bugTitle, setBugTitle] = useState('');
  const [bugSev, setBugSev] = useState('P2');

  const handleReportBug = () => {
      if (!bugTitle) return;
      const newIssue = {
          id: `BUG-${Math.floor(Math.random() * 1000) + 111}`,
          title: bugTitle,
          sev: bugSev,
          status: 'Open'
      };
      setIssues([newIssue, ...issues]);
      setBugTitle('');
      setBugSev('P2');
      setIsBugModalOpen(false);
      toast.error('Bug reported to tracking system.');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
            {/* Risk Register */}
            <ThemedCard className="p-0 overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.text + '05' }}>
                    <h4 className="font-bold text-sm" style={{ color: theme.colors.text }}>Risk Register</h4>
                    <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-600 font-bold">2 High</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs text-left opacity-60 border-b" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface }}>
                            <tr>
                                <th className="p-3 font-medium">Risk Description</th>
                                <th className="p-3 font-medium">Prob.</th>
                                <th className="p-3 font-medium">Impact</th>
                                <th className="p-3 font-medium">Owner</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                            {[
                                { desc: 'API Rate Limits exceeded', prob: 'High', impact: 'High', owner: 'DevOps' },
                                { desc: 'Key stakeholder unavailable', prob: 'Med', impact: 'High', owner: 'PM' },
                                { desc: 'Mobile UI lag on older devices', prob: 'High', impact: 'Low', owner: 'QA' },
                                { desc: 'Third-party lib deprecation', prob: 'Low', impact: 'Med', owner: 'Eng' },
                            ].map((risk, i) => (
                                <tr key={i} className="group hover:bg-black/5 cursor-pointer">
                                    <td className="p-3 font-medium" style={{ color: theme.colors.text }}>{risk.desc}</td>
                                    <td className="p-3"><span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${risk.prob === 'High' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>{risk.prob}</span></td>
                                    <td className="p-3"><span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${risk.impact === 'High' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>{risk.impact}</span></td>
                                    <td className="p-3 text-xs opacity-60" style={{ color: theme.colors.text }}>{risk.owner}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ThemedCard>

            {/* Issues */}
            <ThemedCard>
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-sm" style={{ color: theme.colors.text }}>Issue Tracker</h4>
                    <ThemedButton size="sm" variant="outline" onClick={() => setIsBugModalOpen(true)}>Report Bug</ThemedButton>
                </div>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                    {issues.map(issue => (
                        <div key={issue.id} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-sm transition-shadow cursor-pointer group" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.surface }}>
                            <div className="flex items-center gap-3">
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${issue.sev === 'P0' ? 'bg-red-500 text-white' : issue.sev === 'P1' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>{issue.sev}</span>
                                <div>
                                    <div className="text-xs font-mono opacity-50 group-hover:underline" style={{ color: theme.colors.text }}>{issue.id}</div>
                                    <div className="text-sm font-medium" style={{ color: theme.colors.text }}>{issue.title}</div>
                                </div>
                            </div>
                            <div className="text-xs opacity-60" style={{ color: theme.colors.text }}>{issue.status}</div>
                        </div>
                    ))}
                </div>
            </ThemedCard>
        </div>

        {/* Activity Stream */}
        <ThemedCard className="relative overflow-hidden">
            <h4 className="font-bold text-sm mb-6" style={{ color: theme.colors.text }}>Project Activity</h4>
            <div className="absolute top-16 bottom-0 left-8 w-px" style={{ backgroundColor: theme.colors.text + '10' }}></div>
            <div className="space-y-6 relative max-h-[400px] overflow-y-auto pr-2">
                {[
                    { user: 'Sarah W.', action: 'pushed 3 commits', target: 'feature/auth', time: '10 mins ago', type: 'code' },
                    { user: 'Alex M.', action: 'commented on', target: 'Design Specs v2', time: '1 hour ago', type: 'comment' },
                    { user: 'James R.', action: 'uploaded', target: 'Q4_Assets.zip', time: '3 hours ago', type: 'upload' },
                    { user: 'System', action: 'deployed', target: 'Staging Environment', time: '5 hours ago', type: 'system' },
                    { user: 'Tom H.', action: 'closed ticket', target: 'BUG-99', time: 'Yesterday', type: 'close' },
                ].map((act, i) => (
                    <div key={i} className="flex gap-4 items-start pl-2">
                         <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs relative z-10 border-4 shadow-sm"
                            style={{ 
                                backgroundColor: act.type === 'system' ? theme.colors.textSecondary : theme.colors.primary, 
                                color: '#fff',
                                borderColor: theme.colors.surface
                            }}
                         >
                            {act.type === 'code' && <Icons.Code size="sm"/>}
                            {act.type === 'comment' && <Icons.Chat size="sm"/>}
                            {act.type === 'upload' && <Icons.Attach size="sm"/>}
                            {act.type === 'system' && <Icons.Settings size="sm"/>}
                            {act.type === 'close' && <Icons.Check size="sm"/>}
                         </div>
                         <div className="flex-1 pt-1">
                             <div className="text-sm" style={{ color: theme.colors.text }}>
                                 <span className="font-bold">{act.user}</span> <span className="opacity-80">{act.action}</span> <span className="font-medium text-indigo-600">{act.target}</span>
                             </div>
                             <div className="text-xs opacity-50 mt-0.5" style={{ color: theme.colors.text }}>{act.time}</div>
                         </div>
                    </div>
                ))}
            </div>
            <ThemedButton size="sm" variant="ghost" className="w-full mt-6">View All Activity</ThemedButton>
        </ThemedCard>

        <ThemedModal
            isOpen={isBugModalOpen}
            onClose={() => setIsBugModalOpen(false)}
            title="Report Issue"
            footer={
                <>
                    <ThemedButton variant="ghost" onClick={() => setIsBugModalOpen(false)}>Cancel</ThemedButton>
                    <ThemedButton onClick={handleReportBug} style={{ backgroundColor: theme.colors.error, borderColor: theme.colors.error }}>Submit Bug</ThemedButton>
                </>
            }
        >
            <div className="space-y-4">
                <div>
                    <label className="text-xs font-bold mb-1.5 block opacity-70" style={{ color: theme.colors.text }}>Issue Description</label>
                    <ThemedInput 
                        placeholder="What went wrong?" 
                        value={bugTitle}
                        onChange={(e) => setBugTitle(e.target.value)}
                        autoFocus
                    />
                </div>
                <div>
                    <label className="text-xs font-bold mb-1.5 block opacity-70" style={{ color: theme.colors.text }}>Severity</label>
                    <div className="flex gap-2">
                        {['P0', 'P1', 'P2'].map(p => (
                            <button
                                key={p}
                                onClick={() => setBugSev(p)}
                                className={`px-3 py-1.5 rounded text-sm font-bold border transition-colors ${bugSev === p ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-transparent border-gray-200 text-gray-500'}`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </ThemedModal>
    </div>
  );
};