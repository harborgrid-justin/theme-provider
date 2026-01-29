
import React from 'react';

export type FrameworkType = 'modern' | 'material' | 'bootstrap' | 'neobrutalism' | 'glass' | 'terminal' | 'lucid' | 'fluent';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Typography {
  fontFamily: 'sans' | 'serif' | 'mono' | 'roboto' | 'system';
  baseSize: number; // in px
  headingWeight: '400' | '500' | '600' | '700' | '800';
}

export interface BorderRadius {
  sm: string;
  md: string;
  lg: string;
  button: string;
  card: string;
}

export interface Spacing {
  unit: number; // base multiplier (px)
  pagePadding: string;
  density: number; // 0.75 (compact) to 1.5 (spacious)
}

export interface Effects {
  shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'hard';
  glassBlur: boolean;
  borderWidth: string;
}

export interface ThemeConfig {
  name: string;
  framework: FrameworkType;
  buttonStyle: 'solid' | 'outline' | 'ghost';
  colors: ThemeColors;
  typography: Typography;
  borderRadius: BorderRadius;
  spacing: Spacing;
  effects: Effects;
}

export interface GeneratedThemeResponse {
  name: string;
  colors: Partial<ThemeColors>;
  framework?: FrameworkType;
  description?: string;
}

export interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
  updateColor: (key: keyof ThemeConfig['colors'], value: string) => void;
  updateTypography: <K extends keyof ThemeConfig['typography']>(key: K, value: ThemeConfig['typography'][K]) => void;
  updateEffect: <K extends keyof ThemeConfig['effects']>(key: K, value: ThemeConfig['effects'][K]) => void;
  updateSpacing: <K extends keyof ThemeConfig['spacing']>(key: K, value: ThemeConfig['spacing'][K]) => void;
  updateBorderRadius: <K extends keyof ThemeConfig['borderRadius']>(key: K, value: ThemeConfig['borderRadius'][K]) => void;
  resetTheme: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}
