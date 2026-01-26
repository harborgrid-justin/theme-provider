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
  error: string;
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
  unit: number; // base multiplier
  pagePadding: string;
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
  updateTypography: (key: keyof ThemeConfig['typography'], value: any) => void;
  updateEffect: (key: keyof ThemeConfig['effects'], value: any) => void;
  updateSpacing: (key: keyof ThemeConfig['spacing'], value: any) => void;
  updateBorderRadius: (key: keyof ThemeConfig['borderRadius'], value: any) => void;
  resetTheme: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}