import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FormsDemo } from './elements/FormsDemo';
import { InteractiveDemo } from './elements/InteractiveDemo';
import { LayoutDemo } from './elements/LayoutDemo';
import { FeedbackDemo } from './elements/FeedbackDemo';
import { DataDisplayDemo } from './elements/DataDisplayDemo';
import { TypographyDemo } from './elements/TypographyDemo';

export const ElementsTab: React.FC = () => {
  const { theme } = useTheme();

  const sectionTitleStyle = {
    color: theme.colors.text,
    fontWeight: theme.typography.headingWeight,
    opacity: 0.9,
    fontSize: '1.25rem',
    marginBottom: '1rem',
    marginTop: '2rem',
    paddingBottom: '0.5rem',
    borderBottom: `1px solid ${theme.colors.text}20`
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
        <section>
            <div style={sectionTitleStyle}>Typography Scale</div>
            <TypographyDemo />
        </section>

        <section>
            <div style={sectionTitleStyle}>Interactive & Buttons</div>
            <InteractiveDemo />
        </section>

        <section>
            <div style={sectionTitleStyle}>Forms & Inputs</div>
            <FormsDemo />
        </section>

        <section>
            <div style={sectionTitleStyle}>Layout & Navigation</div>
            <LayoutDemo />
        </section>

        <section>
             <div style={sectionTitleStyle}>Data Display</div>
             <DataDisplayDemo />
        </section>

        <section>
            <div style={sectionTitleStyle}>Feedback & Overlays</div>
            <FeedbackDemo />
        </section>
    </div>
  );
};