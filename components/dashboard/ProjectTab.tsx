import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemedButton } from '../ui-elements/ThemedButton';
import { ThemedCard } from '../ui-elements/ThemedCard';
import { Icon } from '../ui-elements/Icon';
import { Icons } from './DashboardIcons';
import { toast } from '../ui/Toaster';

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
        
        {/* 12. Gantt / Timeline */}
        <section>
        <div style={sectionTitleStyle}>12. Project Timeline (Gantt)</div>
        <ThemedCard className="overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <h3 className="text-lg" style={headingStyle}>Q4 Product Roadmap</h3>
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border border-white" style={{ backgroundColor: theme.colors.text + '30' }}></div>)}
                    </div>
                </div>
                <div className="flex gap-2">
                    <ThemedButton size="sm" variant="outline"><Icons.Calendar/> Oct</ThemedButton>
                    <ThemedButton size="sm" onClick={() => toast.success("New task created")}><Icons.Check/> Add Task</ThemedButton>
                </div>
            </div>
            
            {/* Gantt Header */}
            <div className="grid grid-cols-6 text-xs font-bold uppercase opacity-50 mb-2 px-2" style={{ color: theme.colors.text }}>
                <div className="col-span-2">Task</div>
                <div>Oct 1-7</div>
                <div>Oct 8-14</div>
                <div>Oct 15-21</div>
                <div>Oct 22-28</div>
            </div>

            {/* Gantt Rows */}
            <div className="space-y-2">
                {ganttTasks.map((task, i) => (
                    <div key={i} className="grid grid-cols-6 items-center hover:bg-black/5 p-2 rounded transition-colors group cursor-pointer" onClick={() => handleGanttClick(task.name)}>
                        <div className="col-span-2 flex items-center gap-3">
                            <Icons.Menu className="opacity-0 group-hover:opacity-30 cursor-grab" size="sm" style={{ color: theme.colors.text }}/>
                            <span className="text-sm font-medium" style={{ color: theme.colors.text }}>{task.name}</span>
                        </div>
                        <div className="col-span-4 relative h-8 flex items-center">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex">
                                {[1,2,3,4].map(l => <div key={l} className="flex-1 border-l border-dashed h-full" style={{ borderColor: theme.colors.text + '10' }}></div>)}
                            </div>
                            {/* Bar */}
                            <div 
                                className="h-5 rounded-full relative z-10 shadow-sm flex items-center px-2 text-[10px] text-white font-bold transition-all hover:brightness-110"
                                style={{ 
                                    width: task.duration, 
                                    marginLeft: task.offset, 
                                    backgroundColor: task.color 
                                }}
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/10"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ThemedCard>
        </section>

        {/* 13. Task Detail View */}
        <section>
        <div style={sectionTitleStyle}>13. Task Details</div>
        <div className="grid md:grid-cols-3 gap-6">
            {/* Main Ticket */}
            <ThemedCard className="md:col-span-2">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2">
                        <span className="text-xs font-mono opacity-50 px-1 rounded" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text }}>PROJ-123</span>
                        <span 
                            className="text-xs font-bold px-2 rounded-full transition-colors duration-300" 
                            style={{ 
                                backgroundColor: taskStatus === 'COMPLETED' ? theme.colors.success + '20' : theme.colors.primary + '20', 
                                color: taskStatus === 'COMPLETED' ? theme.colors.success : theme.colors.primary 
                            }}
                        >
                            {taskStatus}
                        </span>
                    </div>
                    <div className="flex gap-2 opacity-50" style={{ color: theme.colors.text }}>
                        <Icons.Link />
                        <Icons.More />
                    </div>
                </div>
                <h2 className={`text-2xl mb-4 transition-all duration-300 ${taskStatus === 'COMPLETED' ? 'line-through opacity-50' : ''}`} style={headingStyle}>Implement Authentication Flow</h2>
                <p className="text-sm opacity-70 leading-relaxed mb-6" style={{ color: theme.colors.text }}>
                    We need to update the login screen to support OAuth providers (Google, GitHub) and refresh the UI to match the new design system specs. Ensure that the session tokens are handled securely.
                </p>
                
                <div className="border-t pt-4 mt-4" style={{ borderColor: theme.colors.text + '10' }}>
                    <h4 className="text-sm mb-3" style={headingStyle}>
                        Subtasks ({subtasks.filter(t => t.completed).length}/{subtasks.length})
                    </h4>
                    <div className="space-y-2">
                        {subtasks.map((task) => (
                            <div 
                                key={task.id} 
                                onClick={() => handleToggleSubtask(task.id)}
                                className={`flex items-center gap-2 text-sm cursor-pointer select-none transition-all hover:bg-black/5 p-1 rounded`} 
                                style={{ color: task.completed ? theme.colors.textSecondary : theme.colors.text }}
                            >
                                <div 
                                    className={`rounded p-0.5 w-5 h-5 flex items-center justify-center border transition-colors`} 
                                    style={{ 
                                        backgroundColor: task.completed ? theme.colors.primary : 'transparent', 
                                        borderColor: task.completed ? theme.colors.primary : theme.colors.text,
                                        color: '#fff'
                                    }}
                                >
                                    {task.completed && <Icons.Check size="sm"/>}
                                </div>
                                <span className={task.completed ? 'line-through opacity-50' : ''}>{task.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-4 rounded-lg mt-6" style={{ backgroundColor: theme.colors.background, borderColor: theme.colors.text + '10' }}>
                        <h4 className="text-xs uppercase opacity-50 mb-3" style={headingStyle}>Activity</h4>
                        <div className="flex gap-3 text-sm">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs" style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent }}>JD</div>
                            <div>
                                <div className="text-xs" style={headingStyle}>John Doe <span className="font-normal opacity-50" style={{ color: theme.colors.textSecondary }}>commented 2h ago</span></div>
                                <p className="mt-1" style={{ color: theme.colors.text }}>I've pushed the initial styles. waiting for review.</p>
                            </div>
                        </div>
                </div>
            </ThemedCard>
            
            {/* Sidebar */}
            <div className="space-y-4">
                <ThemedCard className="p-4 text-sm space-y-4">
                    <div>
                        <label className="text-xs font-bold uppercase opacity-50 block mb-1" style={{ color: theme.colors.text }}>Assignees</label>
                        <div className="flex gap-2 flex-wrap">
                            {assignees.map(a => (
                                <div key={a} className="w-8 h-8 rounded-full" style={{ backgroundColor: theme.colors.text + '20' }}></div>
                            ))}
                            <button 
                                onClick={handleAddAssignee}
                                className="w-8 h-8 rounded-full border-2 border-dashed flex items-center justify-center text-xs hover:border-solid hover:bg-black/5" 
                                style={{ borderColor: theme.colors.text + '30', color: theme.colors.text + '50' }}
                            >+</button>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase opacity-50 block mb-1" style={{ color: theme.colors.text }}>Due Date</label>
                        <div className="flex items-center gap-2" style={{ color: theme.colors.text }}>
                            <Icons.Calendar />
                            <span>Oct 24, 2024</span>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase opacity-50 block mb-1" style={{ color: theme.colors.text }}>Priority</label>
                        <div className="flex items-center gap-2 font-bold" style={{ color: theme.colors.error }}>
                            <Icons.Flag />
                            <span>High</span>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase opacity-50 block mb-1" style={{ color: theme.colors.text }}>Tags</label>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: theme.colors.secondary + '20', color: theme.colors.secondary }}>Frontend</span>
                            <span className="px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent }}>v2.0</span>
                        </div>
                    </div>
                </ThemedCard>
                <ThemedButton 
                    className="w-full" 
                    variant={taskStatus === 'COMPLETED' ? 'outline' : 'primary'}
                    onClick={handleTaskComplete}
                >
                    {taskStatus === 'COMPLETED' ? 'Reopen Task' : 'Mark Complete'}
                </ThemedButton>
            </div>
        </div>
        </section>

        {/* 14. Activity Timeline (Vertical) */}
        <section>
            <div style={sectionTitleStyle}>14. Activity Feed</div>
            <ThemedCard className="max-w-md">
                <h3 className="text-lg mb-4" style={headingStyle}>Recent History</h3>
                <div className="relative pl-4 space-y-6">
                    {/* Vertical Line */}
                    <div className="absolute left-[23px] top-2 bottom-2 w-0.5" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                    
                    {[
                        { title: "Project Created", time: "2 days ago", icon: "Flag", color: theme.colors.primary },
                        { title: "Milestone Reached", time: "Yesterday", icon: "Star", color: theme.colors.accent },
                        { title: "Design Review", time: "4 hours ago", icon: "Check", color: theme.colors.success },
                        { title: "Deployment Failed", time: "Just now", icon: "Close", color: theme.colors.error }
                    ].map((item, i) => (
                        <div key={i} className="relative flex items-center gap-4 z-10 group cursor-default">
                            <div 
                            className="w-8 h-8 rounded-full border-4 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110"
                            style={{ backgroundColor: item.color, borderColor: theme.colors.surface }}
                            >
                            <Icon name={item.icon === 'Close' ? 'close' : item.icon === 'Check' ? 'check' : item.icon === 'Star' ? 'star' : 'flag'} size="sm" className="text-[12px]" />
                            </div>
                            <div>
                                <div className="text-sm font-bold" style={{ color: theme.colors.text }}>{item.title}</div>
                                <div className="text-xs opacity-50" style={{ color: theme.colors.textSecondary }}>{item.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </ThemedCard>
        </section>

        {/* 15. Kanban Board */}
        <section>
            <div style={sectionTitleStyle}>15. Kanban Board</div>
            <div className="overflow-x-auto pb-4">
                <div className="flex gap-4 min-w-[800px]">
                    {['Backlog', 'In Progress', 'Review', 'Done'].map((col, i) => (
                        <div key={i} className="flex-1 min-w-[250px] flex flex-col rounded-xl p-3 h-[500px]" style={{ backgroundColor: theme.colors.background }}>
                            <div className="flex justify-between items-center mb-3 px-1">
                                <div className="text-xs font-bold uppercase opacity-60 flex items-center gap-2" style={{ color: theme.colors.text }}>
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: i === 3 ? theme.colors.success : i === 1 ? theme.colors.primary : theme.colors.textSecondary }}></div>
                                    {col}
                                </div>
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text }}>
                                    {i === 0 ? 5 : i === 1 ? 2 : i === 2 ? 1 : 8}
                                </span>
                            </div>
                            <div className="space-y-3 overflow-y-auto flex-1 pr-1">
                                {/* Mock Cards */}
                                {[1, 2].map(card => (
                                    <ThemedCard 
                                        key={card} 
                                        className="p-3 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing group transition-all hover:-translate-y-1"
                                        onClick={() => toast.info(`Opened card TSK-${card * (i + 1) * 34}`)}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-mono opacity-50 px-1 rounded border" style={{ backgroundColor: theme.colors.background, borderColor: theme.colors.text + '10' }}>TSK-{card * (i + 1) * 34}</span>
                                            <button className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: theme.colors.textSecondary }}><Icons.More size="sm"/></button>
                                        </div>
                                        <div className="text-sm font-medium mb-3 leading-snug" style={{ color: theme.colors.text }}>
                                            {i === 0 ? 'Research competitor analysis' : i === 1 ? 'Implement SSO Authentication' : 'QA Review for v2.0'}
                                        </div>
                                        <div className="flex justify-between items-center mt-auto">
                                            <div className="flex -space-x-1.5">
                                                <div className="w-6 h-6 rounded-full border text-[10px] flex items-center justify-center font-bold" style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent, borderColor: theme.colors.surface }}>JD</div>
                                                {card % 2 === 0 && <div className="w-6 h-6 rounded-full border text-[10px] flex items-center justify-center font-bold" style={{ backgroundColor: theme.colors.secondary + '20', color: theme.colors.secondary, borderColor: theme.colors.surface }}>AL</div>}
                                            </div>
                                            <div className="flex gap-2">
                                                {card % 2 !== 0 && <Icons.Attach size="sm" className="text-[12px]" style={{ color: theme.colors.textSecondary }}/>}
                                                <div className="text-[10px] font-bold px-1.5 rounded" style={{ 
                                                    backgroundColor: i === 1 ? theme.colors.error + '20' : theme.colors.text + '10',
                                                    color: i === 1 ? theme.colors.error : theme.colors.textSecondary
                                                }}>
                                                    {i === 1 ? 'High' : 'Med'}
                                                </div>
                                            </div>
                                        </div>
                                    </ThemedCard>
                                ))}
                                <button 
                                    className="w-full py-2 text-xs hover:bg-black/5 rounded border border-dashed flex items-center justify-center gap-1 transition-colors" 
                                    style={{ color: theme.colors.textSecondary, borderColor: theme.colors.text + '30' }}
                                    onClick={() => toast.info("Creating new task...")}
                                >
                                    <span className="text-lg leading-none">+</span> Add Task
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 16. Calendar / Schedule */}
        <section>
            <div style={sectionTitleStyle}>16. Calendar Schedule</div>
            <ThemedCard className="p-0 overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b" style={{ borderColor: theme.colors.text + '10' }}>
                    <div className="text-lg" style={headingStyle}>{currentMonth}</div>
                    <div className="flex gap-1">
                        <ThemedButton size="sm" variant="outline" onClick={() => toast.info("Previous month")}>&lt;</ThemedButton>
                        <ThemedButton size="sm" variant="outline" onClick={() => toast.info("Next month")}>&gt;</ThemedButton>
                        <ThemedButton size="sm" onClick={() => setSelectedDay(new Date().getDate())}>Today</ThemedButton>
                    </div>
                </div>
                <div className="grid grid-cols-7 border-b text-xs font-bold text-center py-2" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background }}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} style={{ color: theme.colors.textSecondary }}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 grid-rows-5 h-[400px]">
                    {Array.from({length: 35}).map((_, i) => {
                        const day = i - 2; // Offset for month start
                        const isCurrentMonth = day > 0 && day <= 31;
                        const hasEvent = isCurrentMonth && [5, 12, 14, 24].includes(day);
                        const isSelected = selectedDay === day;
                        
                        return (
                            <div 
                                key={i} 
                                onClick={() => isCurrentMonth && handleDayClick(day)}
                                className={`border-r border-b p-1 relative group transition-colors ${isCurrentMonth ? 'cursor-pointer hover:bg-black/5' : ''}`}
                                style={{ borderColor: theme.colors.text + '10', backgroundColor: isSelected ? theme.colors.primary + '10' : !isCurrentMonth ? theme.colors.background : 'transparent' }}
                            >
                                <span 
                                    className="text-xs font-medium p-1 flex items-center justify-center w-6 h-6 rounded-full transition-all"
                                    style={{ 
                                        opacity: !isCurrentMonth ? 0.3 : 1,
                                        backgroundColor: isSelected ? theme.colors.primary : 'transparent',
                                        color: isSelected ? '#fff' : theme.colors.text
                                    }}
                                >
                                    {day > 0 && day <= 31 ? day : day <= 0 ? 30 + day : day - 31}
                                </span>
                                {hasEvent && (
                                    <div 
                                    className="mt-1 p-1 rounded text-[10px] font-medium truncate cursor-pointer hover:opacity-80"
                                    style={{ backgroundColor: day === 5 ? theme.colors.success + '20' : theme.colors.primary + '20', color: day === 5 ? theme.colors.success : theme.colors.primary }}
                                    onClick={(e) => { e.stopPropagation(); toast.info(`Viewing event details`); }}
                                    >
                                        {day === 5 ? 'Release v1.2' : day === 12 ? 'Team Sync' : 'Design Review'}
                                    </div>
                                )}
                                <button className="absolute bottom-1 right-1 w-5 h-5 rounded hover:bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs" style={{ color: theme.colors.textSecondary }}>+</button>
                            </div>
                        );
                    })}
                </div>
            </ThemedCard>
        </section>
    </div>
  );
};