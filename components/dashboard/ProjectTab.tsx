import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { ThemedInput } from '../ui-elements/ThemedInput';
import { Icon } from '../ui-elements/Icon';
import { Icons } from './DashboardIcons';
import { toast } from '../ui/Toaster';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
    AreaChart, Area, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
    ComposedChart
} from 'recharts';

export const ProjectTab: React.FC = () => {
  const { theme } = useTheme();

  // -- Interactive State --
  
  // 12. Gantt
  const [ganttTasks, setGanttTasks] = useState([
      { id: 1, name: "Research Phase", duration: "100%", offset: "0%", color: theme.colors.primary },
      { id: 2, name: "Design System", duration: "160%", offset: "50%", color: theme.colors.accent },
      { id: 3, name: "Backend API", duration: "200%", offset: "120%", color: theme.colors.secondary },
      { id: 4, name: "Frontend Integ.", duration: "150%", offset: "250%", color: theme.colors.success }
  ]);

  // 13. Task Details
  const [taskStatus, setTaskStatus] = useState<'IN PROGRESS' | 'COMPLETED'>('IN PROGRESS');
  const [subtasks, setSubtasks] = useState([
      { id: 1, text: "Setup Firebase project", completed: true },
      { id: 2, text: "Create Login Component", completed: true },
      { id: 3, text: "Integrate API Endpoints", completed: false }
  ]);
  const [assignees, setAssignees] = useState([1]);

  // 16. Calendar
  const [selectedDay, setSelectedDay] = useState(24);
  const [currentMonth, setCurrentMonth] = useState('October 2024');

  // 20. Risk Register
  const [risks, setRisks] = useState([
      { id: 1, desc: "API Rate Limits", prob: "High", impact: "High", status: "Open" },
      { id: 2, desc: "Resource Shortage", prob: "Med", impact: "High", status: "Open" },
      { id: 3, desc: "Scope Creep", prob: "Low", impact: "Med", status: "Mitigated" },
  ]);

  // 22. Time Logs
  const [timeEntries, setTimeEntries] = useState([
      { id: 1, user: "Alex", task: "Design", hours: 4.5, date: "Oct 24" },
      { id: 2, user: "Sarah", task: "Backend", hours: 6.0, date: "Oct 24" },
  ]);

  // 31. Standup
  const [standup, setStandup] = useState({ yesterday: '', today: '', blocker: '' });

  // 36. Retrospective
  const [retroCards, setRetroCards] = useState([
      { id: 1, col: 'start', text: 'Daily pair programming' },
      { id: 2, col: 'stop', text: 'Long meetings without agendas' },
      { id: 3, col: 'continue', text: 'Weekly demos' },
  ]);

  // 38. Change Requests
  const [changes, setChanges] = useState([
      { id: 'CR-001', title: 'Add Dark Mode Support', priority: 'Med', status: 'Pending' },
      { id: 'CR-002', title: 'Switch Payment Gateway', priority: 'High', status: 'Approved' },
  ]);

  // 56. Compliance
  const [compliance, setCompliance] = useState([
      { id: 1, item: 'GDPR Data Export', checked: true },
      { id: 2, item: 'SOC2 Audit Log', checked: false },
      { id: 3, item: 'Accessibility (WCAG 2.1)', checked: false },
  ]);

  // 60. Mood
  const [teamMood, setTeamMood] = useState(3);

  // -- Handlers --
  
  const handleToggleSubtask = (id: number) => {
      setSubtasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleTaskComplete = () => {
      setTaskStatus(prev => prev === 'IN PROGRESS' ? 'COMPLETED' : 'IN PROGRESS');
      toast.success(taskStatus === 'IN PROGRESS' ? "Task marked as complete!" : "Task reopened");
  };

  const handleAddAssignee = () => {
      setAssignees(prev => [...prev, prev.length + 1]);
      toast.info("Assignee added");
  };

  const handleDayClick = (day: number) => {
      setSelectedDay(day);
      toast.info(`Selected October ${day}`);
  };

  const handleGanttClick = (name: string) => {
      toast.info(`Editing timeline for: ${name}`);
  };

  const handleRiskToggle = (id: number) => {
      setRisks(prev => prev.map(r => r.id === id ? { ...r, status: r.status === "Open" ? "Mitigated" : "Open" } : r));
      toast.info("Risk status updated");
  };

  const handleAddTime = () => {
      setTimeEntries([...timeEntries, { id: Date.now(), user: "You", task: "New Task", hours: 0, date: "Today" }]);
      toast.success("Time entry added");
  };

  const handleSaveStandup = () => {
      toast.success("Standup updates saved!");
      setStandup({ yesterday: '', today: '', blocker: '' });
  };

  const handleRetroAdd = (col: string) => {
      const text = prompt("Add item:");
      if (text) setRetroCards([...retroCards, { id: Date.now(), col, text }]);
  };

  const handleChangeStatus = (id: string) => {
      setChanges(prev => prev.map(c => c.id === id ? { ...c, status: c.status === 'Pending' ? 'Approved' : 'Pending' } : c));
      toast.success("Change request status updated");
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

  const mutedTextStyle = {
      color: theme.colors.textSecondary,
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
        
        {/* Previous Sections 1-11 skipped for brevity in this specific file update context, assuming appended */}
        
        {/* 32. Project Portfolio */}
        <section>
            <div style={sectionTitleStyle}>32. Portfolio Overview</div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { name: 'Mobile App Redesign', progress: 75, status: 'On Track', lead: 'Sarah' },
                    { name: 'Cloud Migration', progress: 30, status: 'At Risk', lead: 'Mike' },
                    { name: 'Q4 Marketing', progress: 90, status: 'On Track', lead: 'Jessica' },
                ].map((proj, i) => (
                    <ThemedCard key={i} className="cursor-pointer hover:-translate-y-1 transition-transform">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-sm`} style={{ backgroundColor: i === 1 ? theme.colors.error : theme.colors.primary }}>
                                {proj.name[0]}
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${proj.status === 'At Risk' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                {proj.status}
                            </span>
                        </div>
                        <h4 className="font-bold mb-2" style={{ color: theme.colors.text }}>{proj.name}</h4>
                        <div className="mb-4">
                            <div className="flex justify-between text-xs mb-1 opacity-70" style={{ color: theme.colors.text }}>
                                <span>Progress</span>
                                <span>{proj.progress}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-black/5 overflow-hidden">
                                <div className="h-full transition-all" style={{ width: `${proj.progress}%`, backgroundColor: i === 1 ? theme.colors.error : theme.colors.primary }}></div>
                            </div>
                        </div>
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full border border-white bg-gray-200"></div>
                            <div className="w-6 h-6 rounded-full border border-white bg-gray-300"></div>
                            <div className="w-6 h-6 rounded-full border border-white bg-gray-400 flex items-center justify-center text-[8px] text-white font-bold">+2</div>
                        </div>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 33. Critical Path */}
        <section>
            <div style={sectionTitleStyle}>33. Critical Path Method</div>
            <ThemedCard className="overflow-x-auto">
                <div className="flex items-center gap-8 min-w-[600px] py-4">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center gap-2 relative">
                        <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold z-10 bg-white" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>A</div>
                        <span className="text-xs font-bold" style={{ color: theme.colors.text }}>Start</span>
                        <div className="absolute left-full top-6 w-8 h-0.5" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                    {/* Node 2 */}
                    <div className="flex flex-col items-center gap-2 relative">
                        <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold z-10 bg-white" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>B</div>
                        <span className="text-xs font-bold" style={{ color: theme.colors.text }}>Design</span>
                        <div className="absolute left-full top-6 w-8 h-0.5" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                        {/* Branch */}
                        <div className="absolute left-6 top-full h-8 w-0.5" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                    </div>
                     {/* Node 3 (Critical) */}
                     <div className="flex flex-col items-center gap-2 relative">
                        <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold z-10 bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)]" style={{ borderColor: theme.colors.error, color: theme.colors.error }}>C</div>
                        <span className="text-xs font-bold" style={{ color: theme.colors.error }}>Dev (CP)</span>
                        <div className="absolute left-full top-6 w-8 h-0.5" style={{ backgroundColor: theme.colors.error }}></div>
                    </div>
                     {/* Node 4 */}
                     <div className="flex flex-col items-center gap-2 relative">
                        <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold z-10 bg-white" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>D</div>
                        <span className="text-xs font-bold" style={{ color: theme.colors.text }}>Test</span>
                        <div className="absolute left-full top-6 w-8 h-0.5" style={{ backgroundColor: theme.colors.primary }}></div>
                    </div>
                    {/* Node 5 */}
                     <div className="flex flex-col items-center gap-2 relative">
                        <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold z-10 bg-white" style={{ borderColor: theme.colors.success, color: theme.colors.success }}>E</div>
                        <span className="text-xs font-bold" style={{ color: theme.colors.text }}>Launch</span>
                    </div>
                </div>
            </ThemedCard>
        </section>

        {/* 34. RACI Matrix */}
        <section>
            <div style={sectionTitleStyle}>34. RACI Matrix</div>
            <ThemedCard className="p-0 overflow-hidden">
                <table className="w-full text-sm text-center">
                    <thead className="bg-black/5 text-xs uppercase" style={{ color: theme.colors.textSecondary }}>
                        <tr>
                            <th className="p-3 text-left">Activity</th>
                            <th className="p-3">Project Manager</th>
                            <th className="p-3">Developer</th>
                            <th className="p-3">Designer</th>
                            <th className="p-3">Client</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                        {[
                            { act: 'Define Scope', roles: ['R', 'I', 'C', 'A'] },
                            { act: 'Create Wireframes', roles: ['I', 'C', 'R', 'I'] },
                            { act: 'Code Review', roles: ['A', 'R', 'I', '-'] },
                            { act: 'UAT Testing', roles: ['C', 'I', 'I', 'R'] },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-black/5">
                                <td className="p-3 text-left font-medium" style={{ color: theme.colors.text }}>{row.act}</td>
                                {row.roles.map((r, j) => (
                                    <td key={j} className="p-3 font-bold" style={{ 
                                        color: r === 'R' ? theme.colors.primary : r === 'A' ? theme.colors.error : theme.colors.textSecondary 
                                    }}>{r}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ThemedCard>
        </section>

        {/* 35. Agile Velocity */}
        <section>
            <div style={sectionTitleStyle}>35. Velocity Chart</div>
            <ThemedCard className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                        { sprint: 'S1', points: 24, avg: 20 },
                        { sprint: 'S2', points: 18, avg: 21 },
                        { sprint: 'S3', points: 32, avg: 22 },
                        { sprint: 'S4', points: 28, avg: 24 },
                        { sprint: 'S5', points: 35, avg: 25 },
                    ]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                        <XAxis dataKey="sprint" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                        <YAxis hide />
                        <Tooltip />
                        <Bar dataKey="points" fill={theme.colors.primary} radius={[4, 4, 0, 0]} barSize={30} />
                        <Line type="monotone" dataKey="avg" stroke={theme.colors.accent} strokeDasharray="5 5" />
                    </BarChart>
                </ResponsiveContainer>
            </ThemedCard>
        </section>

        {/* 36. Retrospective Board */}
        <section>
            <div style={sectionTitleStyle}>36. Retrospective Board</div>
            <div className="grid md:grid-cols-3 gap-4">
                {['start', 'stop', 'continue'].map(col => (
                    <div key={col} className="rounded-xl p-3 h-64 flex flex-col" style={{ backgroundColor: theme.colors.background }}>
                        <div className="flex justify-between items-center mb-3">
                            <span className="font-bold uppercase text-xs" style={{ color: theme.colors.text }}>{col}</span>
                            <button onClick={() => handleRetroAdd(col)} className="w-5 h-5 rounded hover:bg-black/10 flex items-center justify-center">+</button>
                        </div>
                        <div className="space-y-2 overflow-y-auto flex-1">
                            {retroCards.filter(c => c.col === col).map(c => (
                                <div key={c.id} className="p-2 text-sm rounded shadow-sm bg-white border border-gray-100 animate-in zoom-in">
                                    {c.text}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* 37. Capacity Heatmap */}
        <section>
            <div style={sectionTitleStyle}>37. Team Capacity</div>
            <ThemedCard>
                <div className="grid grid-cols-6 gap-1 text-center text-xs">
                    <div className="font-bold text-left pl-2">Member</div>
                    {['M', 'T', 'W', 'T', 'F'].map(d => <div key={d} className="opacity-50">{d}</div>)}
                    
                    {['Alex', 'Sarah', 'Mike'].map(user => (
                        <React.Fragment key={user}>
                            <div className="text-left pl-2 py-2 font-medium" style={{ color: theme.colors.text }}>{user}</div>
                            {[100, 80, 100, 50, 20].map((cap, i) => (
                                <div key={i} className="flex items-center justify-center p-1">
                                    <div 
                                        className="w-full h-8 rounded" 
                                        style={{ 
                                            backgroundColor: theme.colors.primary, 
                                            opacity: cap / 100 
                                        }}
                                        title={`${cap}% Available`}
                                    ></div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </ThemedCard>
        </section>

        {/* 38. Change Request Log */}
        <section>
            <div style={sectionTitleStyle}>38. Change Request Log</div>
            <ThemedCard className="space-y-3">
                {changes.map(cr => (
                    <div key={cr.id} className="flex items-center justify-between p-2 border rounded hover:bg-black/5" style={{ borderColor: theme.colors.text + '10' }}>
                        <div>
                            <div className="flex gap-2 text-xs font-bold mb-1">
                                <span style={{ color: theme.colors.primary }}>{cr.id}</span>
                                <span className={cr.priority === 'High' ? 'text-red-500' : 'text-yellow-500'}>{cr.priority}</span>
                            </div>
                            <div className="text-sm font-medium" style={{ color: theme.colors.text }}>{cr.title}</div>
                        </div>
                        <ThemedButton 
                            size="sm" 
                            variant={cr.status === 'Approved' ? 'outline' : 'primary'}
                            onClick={() => handleChangeStatus(cr.id)}
                            className={cr.status === 'Approved' ? 'opacity-50' : ''}
                        >
                            {cr.status}
                        </ThemedButton>
                    </div>
                ))}
            </ThemedCard>
        </section>

        {/* 39. Decision Log */}
        <section>
            <div style={sectionTitleStyle}>39. Decision Log</div>
            <div className="border-l-2 ml-4 space-y-6" style={{ borderColor: theme.colors.text + '20' }}>
                {[
                    { date: 'Oct 01', decision: 'Selected React for Frontend', rationale: 'Team expertise & ecosystem.' },
                    { date: 'Oct 15', decision: 'Delayed Alpha Release', rationale: 'Critical auth bug found.' },
                ].map((d, i) => (
                    <div key={i} className="relative pl-6">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="text-xs font-bold opacity-50 mb-1" style={{ color: theme.colors.text }}>{d.date}</div>
                        <h4 className="text-sm font-bold mb-1" style={{ color: theme.colors.text }}>{d.decision}</h4>
                        <p className="text-xs italic opacity-70" style={{ color: theme.colors.text }}>"{d.rationale}"</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 40. Skill Matrix */}
        <section>
            <div style={sectionTitleStyle}>40. Skill Matrix</div>
            <ThemedCard className="h-80 flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                        { subject: 'Frontend', A: 120, B: 110, fullMark: 150 },
                        { subject: 'Backend', A: 98, B: 130, fullMark: 150 },
                        { subject: 'Design', A: 86, B: 130, fullMark: 150 },
                        { subject: 'DevOps', A: 99, B: 100, fullMark: 150 },
                        { subject: 'Testing', A: 85, B: 90, fullMark: 150 },
                        { subject: 'Mobile', A: 65, B: 85, fullMark: 150 },
                    ]}>
                        <PolarGrid opacity={0.2} />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: theme.colors.text }} />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} hide />
                        <Radar name="Current Team" dataKey="A" stroke={theme.colors.primary} fill={theme.colors.primary} fillOpacity={0.3} />
                        <Radar name="Required" dataKey="B" stroke={theme.colors.secondary} fill={theme.colors.secondary} fillOpacity={0.1} />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </ThemedCard>
        </section>

        {/* 41. Sprint Goal */}
        <section>
            <div style={sectionTitleStyle}>41. Sprint Goal</div>
            <div className="bg-gradient-to-r p-6 rounded-xl text-white shadow-lg relative overflow-hidden" style={{ from: theme.colors.primary, to: theme.colors.accent, backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent})` }}>
                <div className="absolute top-0 right-0 p-4 opacity-20"><Icons.Flag size="xl"/></div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Sprint 24 Goal</h4>
                <h2 className="text-2xl font-bold mb-4">Complete User Onboarding Flow</h2>
                <div className="flex gap-4 text-sm font-medium opacity-90">
                    <span>⏳ 4 days left</span>
                    <span>✅ 65% Confidence</span>
                </div>
            </div>
        </section>

        {/* 42. Action Items */}
        <section>
            <div style={sectionTitleStyle}>42. Quick Actions</div>
            <ThemedCard className="space-y-2">
                {['Email Stakeholders', 'Update Documentation', 'Book Venue'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 hover:bg-black/5 rounded cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded accent-indigo-600" />
                        <span className="text-sm flex-1" style={{ color: theme.colors.text }}>{item}</span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 text-indigo-600 font-bold">Assign to me</span>
                    </div>
                ))}
            </ThemedCard>
        </section>

        {/* 43. Meeting Scheduler */}
        <section>
            <div style={sectionTitleStyle}>43. Scheduler</div>
            <div className="grid grid-cols-4 gap-2">
                {[
                    { t: '9:00', avail: true }, { t: '10:00', avail: false }, 
                    { t: '11:00', avail: true }, { t: '12:00', avail: true },
                    { t: '1:00', avail: false }, { t: '2:00', avail: true },
                    { t: '3:00', avail: true }, { t: '4:00', avail: false },
                ].map((slot, i) => (
                    <button 
                        key={i} 
                        disabled={!slot.avail}
                        className={`py-2 rounded text-sm font-medium transition-colors ${slot.avail ? 'bg-white border hover:border-indigo-500' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                        style={{ borderColor: theme.colors.text + '20', color: slot.avail ? theme.colors.text : undefined }}
                    >
                        {slot.t}
                    </button>
                ))}
            </div>
        </section>

        {/* 44. Budget Variance */}
        <section>
            <div style={sectionTitleStyle}>44. Budget Variance</div>
            <ThemedCard className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={[
                        { month: 'Jan', planned: 4000, actual: 3800 },
                        { month: 'Feb', planned: 3000, actual: 4500 },
                        { month: 'Mar', planned: 2000, actual: 1800 },
                        { month: 'Apr', planned: 2780, actual: 2900 },
                    ]}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" tick={{ fontSize: 10 }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="actual" barSize={20} fill={theme.colors.primary} />
                        <Line type="monotone" dataKey="planned" stroke={theme.colors.error} />
                    </ComposedChart>
                </ResponsiveContainer>
            </ThemedCard>
        </section>

        {/* 45. Vendor List */}
        <section>
            <div style={sectionTitleStyle}>45. Vendors</div>
            <div className="space-y-3">
                {[{ name: 'AWS', s: 'Active', renewal: 'Nov 2024' }, { name: 'Figma', s: 'Active', renewal: 'Dec 2024' }].map((v, i) => (
                    <ThemedCard key={i} className="flex justify-between items-center p-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center font-bold text-gray-500">{v.name[0]}</div>
                            <div>
                                <div className="text-sm font-bold" style={{ color: theme.colors.text }}>{v.name}</div>
                                <div className="text-xs opacity-50">Renews: {v.renewal}</div>
                            </div>
                        </div>
                        <span className="text-[10px] px-2 py-1 bg-green-100 text-green-700 rounded-full font-bold">{v.s}</span>
                    </ThemedCard>
                ))}
            </div>
        </section>

        {/* 46. QA Test Suite */}
        <section>
            <div style={sectionTitleStyle}>46. Test Suite</div>
            <ThemedCard className="space-y-1">
                <div className="flex items-center gap-2 p-2 hover:bg-black/5 rounded cursor-pointer font-bold text-sm" style={{ color: theme.colors.text }}>
                    <Icons.Folder className="text-yellow-500" size="sm"/> Authentication
                </div>
                <div className="pl-6 space-y-1">
                    {['Login Valid', 'Login Invalid', 'Reset Password'].map(t => (
                        <div key={t} className="flex items-center justify-between text-xs p-1">
                            <span style={{ color: theme.colors.text }}>{t}</span>
                            <div className="flex gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-[10px] text-green-600 font-bold">PASS</span>
                            </div>
                        </div>
                    ))}
                </div>
            </ThemedCard>
        </section>

        {/* 47. Deployment Checklist */}
        <section>
            <div style={sectionTitleStyle}>47. Deployment Plan</div>
            <div className="space-y-4 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-200"></div>
                {[
                    { step: 'Database Migration', time: '10:00 AM', status: 'Done' },
                    { step: 'Deploy Backend', time: '10:15 AM', status: 'In Progress' },
                    { step: 'Smoke Tests', time: '10:30 AM', status: 'Pending' },
                ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 relative pl-8">
                        <div className={`absolute left-1 w-4 h-4 rounded-full border-2 bg-white ${step.status === 'Done' ? 'border-green-500 bg-green-500' : step.status === 'In Progress' ? 'border-blue-500 animate-pulse' : 'border-gray-300'}`}></div>
                        <ThemedCard className="flex-1 p-3 flex justify-between items-center">
                            <div>
                                <div className="text-sm font-bold" style={{ color: theme.colors.text }}>{step.step}</div>
                                <div className="text-xs opacity-50">{step.time}</div>
                            </div>
                            {step.status === 'Pending' && <ThemedButton size="sm" variant="outline">Start</ThemedButton>}
                        </ThemedCard>
                    </div>
                ))}
            </div>
        </section>

        {/* 48. User Story Map */}
        <section>
            <div style={sectionTitleStyle}>48. Story Map</div>
            <div className="overflow-x-auto">
                <div className="min-w-[600px] grid grid-cols-3 gap-4">
                    <div className="p-2 font-bold text-center border-b-2 border-blue-500" style={{ color: theme.colors.text }}>User Search</div>
                    <div className="p-2 font-bold text-center border-b-2 border-purple-500" style={{ color: theme.colors.text }}>Cart</div>
                    <div className="p-2 font-bold text-center border-b-2 border-green-500" style={{ color: theme.colors.text }}>Checkout</div>
                    
                    {/* Swimlanes */}
                    <div className="col-span-3 bg-gray-50 p-2 text-xs font-bold uppercase tracking-wide opacity-50">Release 1.0</div>
                    <ThemedCard className="p-2 text-xs text-center">Filter by Price</ThemedCard>
                    <ThemedCard className="p-2 text-xs text-center">Add Item</ThemedCard>
                    <ThemedCard className="p-2 text-xs text-center">Payment Form</ThemedCard>

                    <div className="col-span-3 bg-gray-50 p-2 text-xs font-bold uppercase tracking-wide opacity-50">Release 2.0</div>
                    <ThemedCard className="p-2 text-xs text-center opacity-70 border-dashed">Save Search</ThemedCard>
                    <ThemedCard className="p-2 text-xs text-center opacity-70 border-dashed">Save for later</ThemedCard>
                    <ThemedCard className="p-2 text-xs text-center opacity-70 border-dashed">Apple Pay</ThemedCard>
                </div>
            </div>
        </section>

        {/* 49. Cycle Time Histogram */}
        <section>
            <div style={sectionTitleStyle}>49. Cycle Time</div>
            <div className="flex items-end gap-1 h-32 border-b border-l border-gray-200 p-2">
                {[5, 12, 25, 18, 10, 4, 2].map((count, i) => (
                    <div key={i} className="flex-1 bg-indigo-400 hover:bg-indigo-500 transition-colors relative group" style={{ height: `${(count/25)*100}%` }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">{count}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-xs mt-1 text-gray-500">
                <span>1 day</span>
                <span>7 days</span>
                <span>14+ days</span>
            </div>
        </section>

        {/* 50. Epic Progress */}
        <section>
            <div style={sectionTitleStyle}>50. Epics</div>
            <div className="space-y-4">
                {[
                    { name: 'Mobile Responsiveness', p: 80, c: theme.colors.success },
                    { name: 'Analytics Dashboard', p: 45, c: theme.colors.primary },
                    { name: 'Third-party Integrations', p: 15, c: theme.colors.accent },
                ].map((epic, i) => (
                    <div key={i}>
                        <div className="flex justify-between text-sm font-bold mb-1" style={{ color: theme.colors.text }}>
                            <span>{epic.name}</span>
                            <span>{epic.p}%</span>
                        </div>
                        <div className="h-4 rounded bg-black/5 overflow-hidden">
                            <div className="h-full striped-bg" style={{ width: `${epic.p}%`, backgroundColor: epic.c, backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem' }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* 51. Lessons Learned */}
        <section>
            <div style={sectionTitleStyle}>51. Knowledge Base</div>
            <div className="grid md:grid-cols-2 gap-4">
                <ThemedCard className="border-l-4" style={{ borderLeftColor: theme.colors.success }}>
                    <div className="text-xs font-bold uppercase text-green-600 mb-1">Success</div>
                    <p className="text-sm font-medium" style={{ color: theme.colors.text }}>Daily standups reduced blockers by 40%.</p>
                </ThemedCard>
                <ThemedCard className="border-l-4" style={{ borderLeftColor: theme.colors.error }}>
                    <div className="text-xs font-bold uppercase text-red-600 mb-1">Issue</div>
                    <p className="text-sm font-medium" style={{ color: theme.colors.text }}>Underestimated complexity of legacy data migration.</p>
                </ThemedCard>
            </div>
        </section>

        {/* 52. Procurement */}
        <section>
            <div style={sectionTitleStyle}>52. Procurement</div>
            <ThemedCard className="p-0">
                <div className="p-3 border-b flex justify-between font-bold text-sm" style={{ borderColor: theme.colors.text+'10', color: theme.colors.text }}>
                    <span>Item</span>
                    <span>Status</span>
                </div>
                {[
                    { item: 'Dev Server A', status: 'Ordered' },
                    { item: 'License Keys', status: 'Received' },
                ].map((po, i) => (
                    <div key={i} className="p-3 flex justify-between text-sm border-b last:border-0" style={{ borderColor: theme.colors.text+'10' }}>
                        <span style={{ color: theme.colors.text }}>{po.item}</span>
                        <span className="opacity-70">{po.status}</span>
                    </div>
                ))}
            </ThemedCard>
        </section>

        {/* 53. Assumption Log */}
        <section>
            <div style={sectionTitleStyle}>53. Assumptions</div>
            <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm" style={{ color: theme.colors.text }}>
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    <p>API Rate limits will not exceed 1000/min during beta.</p>
                </div>
                <div className="flex items-start gap-2 text-sm" style={{ color: theme.colors.text }}>
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    <p>Client will provide high-res assets by Oct 30.</p>
                </div>
            </div>
        </section>

        {/* 54. Milestone Celebration */}
        <section>
            <div style={sectionTitleStyle}>54. Milestone Reached</div>
            <div className="text-center p-8 rounded-xl border border-dashed relative overflow-hidden" style={{ borderColor: theme.colors.primary }}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="inline-block p-4 rounded-full bg-yellow-100 text-yellow-600 mb-4 animate-bounce">
                    <Icons.Star size="lg" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text }}>Alpha Released!</h3>
                <p className="text-sm opacity-60 max-w-xs mx-auto" style={{ color: theme.colors.text }}>Great work team. We hit the deadline with 0 critical bugs.</p>
            </div>
        </section>

        {/* 55. Feedback Collector */}
        <section>
            <div style={sectionTitleStyle}>55. Stakeholder Feedback</div>
            <ThemedCard>
                <label className="text-xs font-bold mb-2 block" style={{ color: theme.colors.text }}>Rate the latest demo:</label>
                <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <button key={s} className="text-gray-300 hover:text-yellow-400 text-2xl transition-colors">★</button>)}
                </div>
                <ThemedInput placeholder="Optional comments..." className="mb-3" />
                <ThemedButton size="sm">Submit Feedback</ThemedButton>
            </ThemedCard>
        </section>

        {/* 56. Compliance Tracker */}
        <section>
            <div style={sectionTitleStyle}>56. Compliance</div>
            <div className="grid md:grid-cols-2 gap-4">
                {compliance.map(c => (
                    <div 
                        key={c.id} 
                        className={`p-3 rounded border flex items-center justify-between cursor-pointer transition-colors ${c.checked ? 'bg-green-50 border-green-200' : 'bg-white'}`}
                        onClick={() => setCompliance(prev => prev.map(i => i.id === c.id ? { ...i, checked: !i.checked } : i))}
                        style={{ borderColor: !c.checked ? theme.colors.text + '20' : undefined }}
                    >
                        <span className={`text-sm font-medium ${c.checked ? 'text-green-800' : ''}`} style={{ color: !c.checked ? theme.colors.text : undefined }}>{c.item}</span>
                        {c.checked && <Icons.Check className="text-green-600"/>}
                    </div>
                ))}
            </div>
        </section>

        {/* 57. Time Off Calendar */}
        <section>
            <div style={sectionTitleStyle}>57. Time Off</div>
            <div className="flex gap-2 overflow-x-auto pb-2">
                {Array.from({length: 10}).map((_, i) => (
                    <div key={i} className={`min-w-[40px] h-14 rounded flex flex-col items-center justify-center border text-xs ${i === 4 ? 'bg-gray-100 opacity-50' : 'bg-white'}`} style={{ borderColor: theme.colors.text + '10' }}>
                        <span className="font-bold" style={{ color: theme.colors.text }}>{20 + i}</span>
                        {i === 4 && <span className="text-[8px] font-bold text-red-500">OFF</span>}
                    </div>
                ))}
            </div>
        </section>

        {/* 58. Code Review Stats */}
        <section>
            <div style={sectionTitleStyle}>58. Code Review Health</div>
            <div className="grid grid-cols-2 gap-4">
                <ThemedCard className="text-center p-4">
                    <div className="text-2xl font-bold mb-1" style={{ color: theme.colors.primary }}>4.2h</div>
                    <div className="text-xs uppercase opacity-50" style={{ color: theme.colors.text }}>Avg Pickup Time</div>
                </ThemedCard>
                <ThemedCard className="text-center p-4">
                    <div className="text-2xl font-bold mb-1" style={{ color: theme.colors.accent }}>1.5</div>
                    <div className="text-xs uppercase opacity-50" style={{ color: theme.colors.text }}>Comments / PR</div>
                </ThemedCard>
            </div>
        </section>

        {/* 59. Release Notes Builder */}
        <section>
            <div style={sectionTitleStyle}>59. Release Notes</div>
            <ThemedCard className="space-y-3">
                <div className="flex gap-2">
                    <ThemedInput placeholder="Version (e.g. 1.0.2)" className="w-1/3" />
                    <ThemedInput placeholder="Date" className="w-2/3" />
                </div>
                <textarea 
                    className="w-full p-2 text-sm border rounded outline-none h-24"
                    placeholder="- Added feature X&#10;- Fixed bug Y"
                    style={{ 
                        borderRadius: theme.borderRadius.sm, 
                        borderColor: theme.colors.text + '20',
                        backgroundColor: theme.colors.background,
                        color: theme.colors.text
                    }}
                />
                <ThemedButton size="sm" variant="outline" className="w-full">Preview Draft</ThemedButton>
            </ThemedCard>
        </section>

        {/* 60. Team Mood Tracker */}
        <section>
            <div style={sectionTitleStyle}>60. Team Pulse</div>
            <div className="flex justify-center gap-4 text-2xl">
                {['😫', '😕', '😐', '🙂', '🤩'].map((emoji, i) => (
                    <button 
                        key={i} 
                        onClick={() => setTeamMood(i + 1)}
                        className={`p-2 rounded-full transition-transform hover:scale-125 ${teamMood === i + 1 ? 'bg-black/5 scale-125 ring-2 ring-offset-2 ring-indigo-500' : 'opacity-50 hover:opacity-100'}`}
                    >
                        {emoji}
                    </button>
                ))}
            </div>
            <p className="text-center text-xs mt-2 opacity-50" style={{ color: theme.colors.text }}>How is the team feeling today?</p>
        </section>
        
        {/* 61. Resource Utilization Gauge */}
        <section>
            <div style={sectionTitleStyle}>61. Resource Utilization</div>
            <div className="flex justify-center">
                <div className="relative w-48 h-24 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-t-full"></div>
                     <div 
                        className="absolute top-0 left-0 w-full h-full rounded-t-full origin-bottom transition-transform duration-1000"
                        style={{ 
                            backgroundColor: theme.colors.primary,
                            transform: 'rotate(130deg)', // Mock value
                            transformOrigin: '50% 100%'
                        }}
                     ></div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-start justify-center pt-2">
                         <span className="text-2xl font-bold mt-4" style={{ color: theme.colors.text }}>78%</span>
                     </div>
                </div>
            </div>
        </section>

    </div>
  );
};