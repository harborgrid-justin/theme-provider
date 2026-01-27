import React from 'react';
import { ProjectPortfolio } from './project/ProjectPortfolio';
import { ProjectAnalytics } from './project/ProjectAnalytics';
import { ProjectLog } from './project/ProjectLog';
import { ProjectPlanning } from './project/ProjectPlanning';
import { ProjectTeam } from './project/ProjectTeam';
import { ProjectFiles } from './project/ProjectFiles';
import { useTheme } from '../../context/ThemeContext';
import { SectionTitle } from './SectionTitle';

export const ProjectTab: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
        <section>
            <SectionTitle style={{ marginTop: '1rem' }}>Portfolio Overview</SectionTitle>
            <ProjectPortfolio />
        </section>

        <section>
            <SectionTitle>Planning & Roadmap</SectionTitle>
            <ProjectPlanning />
        </section>

        <section>
             <SectionTitle>Team & Capacity</SectionTitle>
             <ProjectTeam />
        </section>

        <section>
            <SectionTitle>Analytics & Metrics</SectionTitle>
            <ProjectAnalytics />
        </section>

        <section>
             <SectionTitle>Files & Documents</SectionTitle>
             <ProjectFiles />
        </section>

        <section>
            <SectionTitle>Logs & Risks</SectionTitle>
            <ProjectLog />
        </section>
    </div>
  );
};