import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ThemedCard } from '../../ui-elements/ThemedCard';

export const TypographyDemo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="text-sm font-bold opacity-50 uppercase mb-6" style={{ color: theme.colors.text }}>Headings</h4>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6].map((level) => {
                        const Tag = `h${level}` as React.ElementType;
                        const sizes = ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base'];
                        return (
                            <div key={level} className="flex items-baseline gap-4">
                                <span className="text-xs font-mono opacity-40 w-8" style={{ color: theme.colors.text }}>H{level}</span>
                                <Tag 
                                    className={`${sizes[level-1]} font-bold`} 
                                    style={{ 
                                        color: theme.colors.text,
                                        fontWeight: level === 1 ? '900' : theme.typography.headingWeight 
                                    }}
                                >
                                    The quick brown fox
                                </Tag>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="space-y-8">
                <div>
                    <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Body Text</h4>
                    <p className="mb-4 leading-relaxed" style={{ color: theme.colors.text }}>
                        Standard body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                        Secondary/Small text. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Inline Elements</h4>
                    <div className="space-y-2 text-sm" style={{ color: theme.colors.text }}>
                        <div>You can use <span className="font-bold">bold text</span> for emphasis.</div>
                        <div>You can use <span className="italic">italic text</span> for nuance.</div>
                        <div>You can use <span className="underline decoration-2" style={{ decorationColor: theme.colors.primary }}>underlined text</span> for links.</div>
                        <div>
                            <span className="px-1.5 py-0.5 rounded text-xs font-mono" style={{ backgroundColor: theme.colors.text + '10', color: theme.colors.primary }}>code_snippet</span> for technical terms.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ThemedCard className="p-8">
            <h4 className="text-sm font-bold opacity-50 uppercase mb-4" style={{ color: theme.colors.text }}>Content Layout</h4>
            <div className="grid md:grid-cols-2 gap-8">
                <ul className="list-disc pl-5 space-y-1" style={{ color: theme.colors.text }}>
                    <li>Unordered list item one</li>
                    <li>Unordered list item two</li>
                    <li>Unordered list item three with nested:
                        <ul className="list-circle pl-5 mt-1 space-y-1 opacity-80">
                            <li>Nested item A</li>
                            <li>Nested item B</li>
                        </ul>
                    </li>
                </ul>
                <div className="border-l-4 pl-4 italic" style={{ borderColor: theme.colors.primary, color: theme.colors.textSecondary }}>
                    "Blockquotes are a great way to highlight specific text or user testimonials. 
                    They break up the flow and draw attention."
                    <div className="mt-2 text-xs font-bold not-italic" style={{ color: theme.colors.text }}>— Design System Guide</div>
                </div>
            </div>
        </ThemedCard>
    </div>
  );
};