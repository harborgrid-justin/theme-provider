import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';
import { ThemedButton } from '../../ui-elements/ThemedButton';
import { ThemedInput } from '../../ui-elements/ThemedInput';
import { ThemedModal } from '../../ui-elements/ThemedModal';
import { Icons } from '../DashboardIcons';
import { toast } from '../../ui/Toaster';

interface Project {
    id: number;
    name: string;
    progress: number;
    status: string;
    lead: string;
    due: string;
}

interface Task {
    id: number;
    title: string;
    tag: string;
    priority: 'Low' | 'Med' | 'High';
}

interface KanbanData {
    [key: string]: Task[];
}

export const ProjectPortfolio: React.FC = () => {
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState<'grid' | 'kanban' | 'list'>('kanban');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  
  // Data State
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: 'Mobile App Redesign', progress: 75, status: 'In Progress', lead: 'Sarah', due: '2 days left' },
    { id: 2, name: 'Cloud Migration', progress: 30, status: 'At Risk', lead: 'Mike', due: '1 week left' },
    { id: 3, name: 'Q4 Marketing', progress: 90, status: 'Done', lead: 'Jessica', due: 'Completed' },
    { id: 4, name: 'Internal Tools', progress: 45, status: 'In Progress', lead: 'Tom', due: '3 weeks' },
    { id: 5, name: 'Website Refresh', progress: 10, status: 'In Progress', lead: 'Anna', due: '1 month' },
    { id: 6, name: 'Analytics Dashboard', progress: 60, status: 'Review', lead: 'Dave', due: '5 days' },
  ]);

  const [kanbanTasks, setKanbanTasks] = useState<KanbanData>({
      'Backlog': [
          { id: 101, title: 'User Interviews', tag: 'Research', priority: 'Med' },
          { id: 102, title: 'Competitor Analysis', tag: 'Strategy', priority: 'Low' },
      ],
      'In Progress': [
          { id: 103, title: 'Implement new nav', tag: 'Dev', priority: 'High' },
          { id: 104, title: 'Design System Update', tag: 'Design', priority: 'High' },
      ],
      'Done': [
          { id: 105, title: 'Q3 Report', tag: 'Admin', priority: 'Low' },
      ]
  });

  // Modal State
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const getStatusColor = (status: string) => {
      switch(status) {
          case 'Done': return theme.colors.success;
          case 'In Progress': return theme.colors.primary;
          case 'At Risk': return theme.colors.error;
          case 'Review': return '#F59E0B'; // Amber
          default: return theme.colors.textSecondary;
      }
  };

  const handleAddProject = () => {
      if (!newProjectName) return;
      const newProj: Project = {
          id: Date.now(),
          name: newProjectName,
          progress: 0,
          status: 'In Progress',
          lead: 'You',
          due: 'TBD'
      };
      setProjects([newProj, ...projects]);
      setNewProjectName('');
      setIsProjectModalOpen(false);
      toast.success('Project created successfully');
  };

  const handleAddTask = () => {
      if (!newTaskTitle) return;
      setKanbanTasks(prev => ({
          ...prev,
          'Backlog': [{ id: Date.now(), title: newTaskTitle, tag: 'General', priority: 'Med' }, ...prev['Backlog']]
      }));
      setNewTaskTitle('');
      setIsTaskModalOpen(false);
      toast.success('Task added to Backlog');
  };

  // Skeletons
  const SkeletonPulse = ({ className }: { className?: string }) => (
    <div className={`animate-pulse rounded ${className}`} style={{ backgroundColor: theme.colors.text + '10' }}></div>
  );

  return (
    <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <h3 className="text-lg font-bold" style={{ color: theme.colors.text }}>Active Projects</h3>
                <ThemedButton size="sm" onClick={() => setIsProjectModalOpen(true)}>
                    <Icons.Check size="sm"/> New Project
                </ThemedButton>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-lg" style={{ backgroundColor: theme.colors.text + '05' }}>
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-black/5'}`} style={{ color: viewMode === 'grid' ? theme.colors.primary : theme.colors.textSecondary }}><Icons.Menu/></button>
                <button onClick={() => setViewMode('kanban')} className={`p-2 rounded transition-all ${viewMode === 'kanban' ? 'bg-white shadow' : 'hover:bg-black/5'}`} style={{ color: viewMode === 'kanban' ? theme.colors.primary : theme.colors.textSecondary }}><Icons.Chart/></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded transition-all ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-black/5'}`} style={{ color: viewMode === 'list' ? theme.colors.primary : theme.colors.textSecondary }}><Icons.Menu/></button>
            </div>
        </div>

        {viewMode === 'grid' && (
            <div className="grid md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">
                {isLoading ? Array.from({length: 6}).map((_, i) => (
                    <ThemedCard key={i} className="h-full flex flex-col justify-between">
                        <div>
                             <div className="flex justify-between items-start mb-4">
                                <SkeletonPulse className="w-10 h-10 rounded-lg" />
                                <SkeletonPulse className="w-16 h-5" />
                             </div>
                             <SkeletonPulse className="w-3/4 h-6 mb-4" />
                             <div className="mb-6 space-y-2">
                                <div className="flex justify-between">
                                     <SkeletonPulse className="w-16 h-3" />
                                     <SkeletonPulse className="w-8 h-3" />
                                </div>
                                <SkeletonPulse className="w-full h-2 rounded-full" />
                             </div>
                        </div>
                         <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: theme.colors.text + '10' }}>
                             <div className="flex -space-x-2">
                                 <div className="w-6 h-6 rounded-full border-2 border-white animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                                 <div className="w-6 h-6 rounded-full border-2 border-white animate-pulse" style={{ backgroundColor: theme.colors.text + '10' }}></div>
                             </div>
                             <SkeletonPulse className="w-20 h-3" />
                         </div>
                    </ThemedCard>
                )) : (
                    <>
                    {projects.map((proj) => (
                        <ThemedCard key={proj.id} className="cursor-pointer hover:-translate-y-1 transition-transform group h-full flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-sm`} style={{ backgroundColor: getStatusColor(proj.status) }}>
                                        {proj.name[0]}
                                    </div>
                                    <span className={`px-2 py-1 rounded text-xs font-bold`} style={{ 
                                        backgroundColor: getStatusColor(proj.status) + '20', 
                                        color: getStatusColor(proj.status)
                                    }}>
                                        {proj.status}
                                    </span>
                                </div>
                                <h4 className="font-bold mb-4 group-hover:underline decoration-2" style={{ color: theme.colors.text, decorationColor: theme.colors.primary }}>{proj.name}</h4>
                                <div className="mb-6">
                                    <div className="flex justify-between text-xs mb-1.5 opacity-70" style={{ color: theme.colors.text }}>
                                        <span>Progress</span>
                                        <span>{proj.progress}%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-black/5 overflow-hidden" style={{ backgroundColor: theme.colors.text + '10' }}>
                                        <div className="h-full transition-all" style={{ width: `${proj.progress}%`, backgroundColor: getStatusColor(proj.status) }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-xs opacity-60 pt-4 border-t" style={{ borderColor: theme.colors.text + '10', color: theme.colors.text }}>
                                 <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>
                                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300"></div>
                                 </div>
                                 <span>{proj.due}</span>
                            </div>
                        </ThemedCard>
                    ))}
                    <button 
                        onClick={() => setIsProjectModalOpen(true)}
                        className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-8 hover:bg-black/5 transition-colors group"
                        style={{ borderColor: theme.colors.text + '20', borderRadius: theme.borderRadius.card }}
                    >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text }}>
                            <Icons.Check size="md" />
                        </div>
                        <span className="font-bold text-sm" style={{ color: theme.colors.text }}>Create New Project</span>
                    </button>
                    </>
                )}
            </div>
        )}

        {viewMode === 'kanban' && (
            <div className="grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 animate-in fade-in slide-in-from-right-4 duration-300">
                {(Object.entries(kanbanTasks) as [string, Task[]][]).map(([col, tasks]) => (
                    <div key={col} className="min-w-[300px] flex flex-col h-full rounded-xl p-4 border" style={{ borderColor: theme.colors.text + '10', backgroundColor: theme.colors.background }}>
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-sm uppercase tracking-wide" style={{ color: theme.colors.text }}>{col}</h4>
                            <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.text }}>{tasks.length}</span>
                        </div>
                        <div className="space-y-3 flex-1">
                            {isLoading ? Array.from({length: 3}).map((_, idx) => (
                                <ThemedCard key={idx} className="p-4">
                                     <div className="flex gap-2 mb-2">
                                         <SkeletonPulse className="w-16 h-4" />
                                         <SkeletonPulse className="w-12 h-4" />
                                     </div>
                                     <SkeletonPulse className="w-3/4 h-4 mb-3" />
                                     <div className="flex justify-between items-center">
                                         <SkeletonPulse className="w-6 h-6 rounded-full" />
                                         <SkeletonPulse className="w-8 h-3" />
                                     </div>
                                </ThemedCard>
                            )) : tasks.map(task => (
                                <ThemedCard key={task.id} className="p-4 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                    <div className="flex gap-2 mb-2">
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase" style={{ backgroundColor: theme.colors.primary + '20', color: theme.colors.primary }}>{task.tag}</span>
                                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase`} style={{ 
                                            backgroundColor: task.priority === 'High' ? theme.colors.error + '20' : theme.colors.secondary + '20', 
                                            color: task.priority === 'High' ? theme.colors.error : theme.colors.secondary 
                                        }}>
                                            {task.priority}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium mb-3" style={{ color: theme.colors.text }}>{task.title}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: theme.colors.secondary + '30', color: theme.colors.secondary }}>U</div>
                                        <div className="flex items-center gap-2 text-xs opacity-60" style={{ color: theme.colors.text }}>
                                            <div className="flex items-center gap-0.5"><Icons.Attach size="sm"/> 1</div>
                                        </div>
                                    </div>
                                </ThemedCard>
                            ))}
                        </div>
                        <button 
                            onClick={() => setIsTaskModalOpen(true)}
                            className="mt-4 w-full py-2 border-2 border-dashed rounded-lg text-sm font-medium opacity-50 hover:opacity-100 hover:bg-black/5 transition-all" 
                            style={{ borderColor: theme.colors.text + '20', color: theme.colors.text }}
                        >
                            + Add Task
                        </button>
                    </div>
                ))}
            </div>
        )}

        {viewMode === 'list' && (
            <ThemedCard className="p-0 overflow-hidden animate-in fade-in duration-300">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs uppercase font-bold border-b" style={{ backgroundColor: theme.colors.text + '05', borderColor: theme.colors.text + '10', color: theme.colors.textSecondary }}>
                            <tr>
                                <th className="p-4 text-left pl-6">Project Name</th>
                                <th className="p-4 text-left">Owner</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-left">Progress</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y" style={{ borderColor: theme.colors.text + '10' }}>
                            {isLoading ? Array.from({length: 5}).map((_, i) => (
                                <tr key={i}>
                                    <td className="p-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            <SkeletonPulse className="w-8 h-8" />
                                            <SkeletonPulse className="w-32 h-4" />
                                        </div>
                                    </td>
                                    <td className="p-4">
                                         <div className="flex items-center gap-2">
                                            <SkeletonPulse className="w-6 h-6 rounded-full" />
                                            <SkeletonPulse className="w-16 h-3" />
                                         </div>
                                    </td>
                                    <td className="p-4"><SkeletonPulse className="w-20 h-5 rounded-full" /></td>
                                    <td className="p-4"><SkeletonPulse className="w-32 h-2 rounded-full" /></td>
                                    <td className="p-4"></td>
                                </tr>
                            )) : projects.map((row, i) => (
                                <tr key={i} className="group hover:bg-black/5 transition-colors">
                                    <td className="p-4 pl-6 font-medium" style={{ color: theme.colors.text }}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">{row.name[0]}</div>
                                            {row.name}
                                        </div>
                                    </td>
                                    <td className="p-4" style={{ color: theme.colors.textSecondary }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">{row.lead[0]}</div>
                                            {row.lead}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold border`} style={{ 
                                            borderColor: getStatusColor(row.status) + '40', 
                                            color: getStatusColor(row.status),
                                            backgroundColor: getStatusColor(row.status) + '10'
                                        }}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="p-4 w-32">
                                         <div className="flex items-center gap-2">
                                            <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full rounded-full" style={{ width: `${row.progress}%`, backgroundColor: getStatusColor(row.status) }}></div>
                                            </div>
                                            <span className="text-xs w-8 text-right" style={{ color: theme.colors.text }}>{row.progress}%</span>
                                         </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/10 transition-all text-gray-500">
                                            <Icons.More size="sm"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ThemedCard>
        )}

        {/* Modals */}
        <ThemedModal 
            isOpen={isProjectModalOpen} 
            onClose={() => setIsProjectModalOpen(false)}
            title="Create New Project"
            footer={
                <>
                    <ThemedButton variant="ghost" onClick={() => setIsProjectModalOpen(false)}>Cancel</ThemedButton>
                    <ThemedButton onClick={handleAddProject}>Create Project</ThemedButton>
                </>
            }
        >
            <div className="space-y-4">
                <div>
                    <label className="text-xs font-bold mb-1.5 block opacity-70" style={{ color: theme.colors.text }}>Project Name</label>
                    <ThemedInput 
                        placeholder="e.g. Website Redesign" 
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                        autoFocus
                    />
                </div>
            </div>
        </ThemedModal>

        <ThemedModal 
            isOpen={isTaskModalOpen} 
            onClose={() => setIsTaskModalOpen(false)}
            title="Add New Task"
            footer={
                <>
                    <ThemedButton variant="ghost" onClick={() => setIsTaskModalOpen(false)}>Cancel</ThemedButton>
                    <ThemedButton onClick={handleAddTask}>Add Task</ThemedButton>
                </>
            }
        >
            <div className="space-y-4">
                <div>
                    <label className="text-xs font-bold mb-1.5 block opacity-70" style={{ color: theme.colors.text }}>Task Title</label>
                    <ThemedInput 
                        placeholder="e.g. Research user flows" 
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        autoFocus
                    />
                </div>
            </div>
        </ThemedModal>

    </div>
  );
};