import React from 'react';
import { ProjectPortfolio } from './project/ProjectPortfolio';
import { ProjectAnalytics } from './project/ProjectAnalytics';
import { ProjectLog } from './project/ProjectLog';
import { ProjectPlanning } from './project/ProjectPlanning';
import { ProjectTeam } from './project/ProjectTeam';
import { ProjectFiles } from './project/ProjectFiles';
import { useTheme } from '../../context/ThemeContext';

export const ProjectTab: React.FC = () => {
  const { theme } = useTheme();

  const sectionTitleStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1rem',
    marginTop: '3rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
        <section>
            <div style={{ ...sectionTitleStyle, marginTop: '1rem' }}>Portfolio Overview</div>
            <ProjectPortfolio />
        </section>

        <section>
            <div style={sectionTitleStyle}>Planning & Roadmap</div>
            <ProjectPlanning />
        </section>

        <section>
             <div style={sectionTitleStyle}>Team & Capacity</div>
             <ProjectTeam />
        </section>

        <section>
            <div style={sectionTitleStyle}>Analytics & Metrics</div>
            <ProjectAnalytics />
        </section>

        <section>
             <div style={sectionTitleStyle}>Files & Documents</div>
             <ProjectFiles />
        </section>

        <section>
            <div style={sectionTitleStyle}>Logs & Risks</div>
            <ProjectLog />
        </section>
    </div>
  );
};