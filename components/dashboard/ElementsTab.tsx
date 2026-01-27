import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FormsDemo } from './elements/FormsDemo';
import { InteractiveDemo } from './elements/InteractiveDemo';
import { LayoutDemo } from './elements/LayoutDemo';
import { FeedbackDemo } from './elements/FeedbackDemo';
import { DataDisplayDemo } from './elements/DataDisplayDemo';
import { TypographyDemo } from './elements/TypographyDemo';
import { SectionTitle } from './SectionTitle';

export const ElementsTab: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
        <section>
            <SectionTitle style={{ marginTop: '2rem' }}>Typography Scale</SectionTitle>
            <TypographyDemo />
        </section>

        <section>
            <SectionTitle>Interactive & Buttons</SectionTitle>
            <InteractiveDemo />
        </section>

        <section>
            <SectionTitle>Forms & Inputs</SectionTitle>
            <FormsDemo />
        </section>

        <section>
            <SectionTitle>Layout & Navigation</SectionTitle>
            <LayoutDemo />
        </section>

        <section>
             <SectionTitle>Data Display</SectionTitle>
             <DataDisplayDemo />
        </section>

        <section>
            <SectionTitle>Feedback & Overlays</SectionTitle>
            <FeedbackDemo />
        </section>
    </div>
  );
};