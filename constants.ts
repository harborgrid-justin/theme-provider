
import { ThemeConfig } from './types';

export const DEFAULT_THEME: ThemeConfig = {
  name: 'Default Modern',
  framework: 'modern',
  buttonStyle: 'solid',
  colors: {
    primary: '#3b82f6', // blue-500
    secondary: '#64748b', // slate-500
    background: '#f8fafc', // slate-50
    surface: '#ffffff',
    text: '#0f172a', // slate-900
    textSecondary: '#475569', // slate-600
    accent: '#8b5cf6', // violet-500
    success: '#22c55e',
    warning: '#f59e0b', // amber-500
    error: '#ef4444',
    info: '#0ea5e9', // sky-500
  },
  typography: {
    fontFamily: 'sans',
    baseSize: 16,
    headingWeight: '700',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    button: '0.5rem',
    card: '0.75rem',
  },
  spacing: {
    unit: 4,
    pagePadding: '2rem',
    density: 1,
  },
  effects: {
    shadow: 'sm',
    glassBlur: false,
    borderWidth: '1px',
  },
};

export const FRAMEWORKS = [
  { id: 'modern', name: 'Modern (Clean)', description: 'Clean lines, subtle shadows, Inter font.' },
  { id: 'material', name: 'Material-ish', description: 'Ripple effects, elevated surfaces, Roboto font.' },
  { id: 'bootstrap', name: 'Classic Bootstrap', description: 'Solid primary colors, slight rounded corners.' },
  { id: 'lucid', name: 'Lucid UI', description: 'Sharp, high-contrast, clean lines, minimal noise.' },
  { id: 'fluent', name: 'Fluent Design', description: 'Microsoft-inspired. Depth, motion, materials.' },
  { id: 'neobrutalism', name: 'Neo-Brutalism', description: 'High contrast, thick borders, hard shadows.' },
  { id: 'glass', name: 'Glassmorphism', description: 'Blurry backgrounds, transparency, gradients.' },
  { id: 'terminal', name: 'Terminal / Retro', description: 'Monospaced, high contrast, minimalist.' },
];

export const FONTS = [
  { id: 'sans', name: 'Inter (Sans)' },
  { id: 'roboto', name: 'Roboto' },
  { id: 'serif', name: 'Playfair Display (Serif)' },
  { id: 'mono', name: 'JetBrains Mono' },
  { id: 'system', name: 'System UI (Segoe/SF)' },
];
