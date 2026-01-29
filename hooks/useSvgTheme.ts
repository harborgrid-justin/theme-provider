
import { useTheme } from '../context/ThemeContext';

export const useSvgTheme = () => {
  const { theme } = useTheme();

  // Helper to parse radius string to number for SVG 'rx'
  const getRadius = (key: 'sm' | 'md' | 'lg' | 'card' | 'button' = 'md'): number => {
      const val = theme.borderRadius[key];
      if (!val) return 4;
      
      const num = parseFloat(val);
      if (isNaN(num)) return 4;
      
      // If rem, approximate to 16px base
      if (val.includes('rem')) return num * 16;
      // If px or unitless, return as is
      return num;
  };

  const corner = getRadius('md'); // Standard corner
  const cornerSm = getRadius('sm');
  const cornerLg = getRadius('lg');
  const cornerBtn = getRadius('button');

  // Determine stroke width based on density and framework
  let strokeWidthNum = 1.5;
  if (theme.effects.borderWidth) {
      const parsed = parseFloat(theme.effects.borderWidth);
      if (!isNaN(parsed)) strokeWidthNum = Math.max(parsed, 0.5); // Ensure at least visible
  }
  
  // Specific overrides for frameworks
  if (theme.framework === 'neobrutalism') strokeWidthNum = Math.max(2, strokeWidthNum);
  if (theme.framework === 'lucid') strokeWidthNum = 1;

  const strokeWidth = strokeWidthNum.toString();

  // Common SVG props for lines/borders
  const strokeProps = {
    vectorEffect: "non-scaling-stroke",
    stroke: theme.colors.text,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  // Props for filled shapes (cards, modals)
  const layoutProps = {
    vectorEffect: "non-scaling-stroke",
    fill: theme.colors.surface,
    stroke: theme.colors.text,
    strokeWidth,
    strokeOpacity: "0.2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  // Solid fills
  const primaryFill = { fill: theme.colors.primary, stroke: 'none' };
  const secondaryFill = { fill: theme.colors.secondary, stroke: 'none' };
  const textFill = { fill: theme.colors.text, stroke: 'none' };
  const surfaceFill = { fill: theme.colors.surface, stroke: 'none' };
  
  // Opacity helpers for backgrounds
  const faintFill = { fill: theme.colors.text, fillOpacity: 0.05, stroke: 'none' };
  
  // Text Styles inside SVG
  const textStyle = {
      fill: theme.colors.text,
      fontSize: "8px",
      fontFamily: theme.typography.fontFamily === 'mono' ? 'monospace' : 'inherit',
      textAnchor: "middle" as const,
      dominantBaseline: "middle" as const,
      fontWeight: "bold",
      pointerEvents: "none" as const
  };

  return {
    strokeProps,
    layoutProps,
    primaryFill,
    secondaryFill,
    textFill,
    surfaceFill,
    faintFill,
    textStyle,
    theme,
    corner,
    cornerSm,
    cornerLg,
    cornerBtn,
    strokeWidth,
    strokeWidthNum
  };
};
