
import { useTheme } from '../context/ThemeContext';

export const useSvgTheme = () => {
  const { theme } = useTheme();

  // Determine stroke width based on density and framework
  let strokeWidth = "1.5";
  if (theme.framework === 'neobrutalism') strokeWidth = "2";
  if (theme.framework === 'lucid') strokeWidth = "1";

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
    strokeWidth: "1",
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
    theme // expose raw theme if needed
  };
};
