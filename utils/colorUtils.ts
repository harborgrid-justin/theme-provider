export interface Palette {
    name: string;
    colors: string[];
}
  
function hexToRgb(hex: string): {r: number, g: number, b: number} | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
  
function rgbToHsl(r: number, g: number, b: number): {h: number, s: number, l: number} {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb(h: number, s: number, l: number): {r: number, g: number, b: number} {
    let r, g, b;
    h /= 360; s /= 100; l /= 100;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function rgbToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Wrapper to handle Hex string directly
function adjustHue(hex: string, degree: number): string {
    const rgb = hexToRgb(hex);
    if(!rgb) return hex;
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    hsl.h = (hsl.h + degree + 360) % 360; // Safe rotation
    const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
    return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
}

export function generatePalettes(baseColor: string): Palette[] {
    const palettes: Palette[] = [];
    
    // Complementary (Base + 180deg)
    palettes.push({
        name: 'Complementary',
        colors: [baseColor, adjustHue(baseColor, 180)]
    });

    // Analogous (Base - 30, Base + 30)
    palettes.push({
        name: 'Analogous',
        colors: [adjustHue(baseColor, -30), baseColor, adjustHue(baseColor, 30)]
    });

    // Triadic (Base + 120, Base + 240)
    palettes.push({
        name: 'Triadic',
        colors: [baseColor, adjustHue(baseColor, 120), adjustHue(baseColor, 240)]
    });

    // Split Complementary
    palettes.push({
        name: 'Split Compl.',
        colors: [baseColor, adjustHue(baseColor, 150), adjustHue(baseColor, 210)]
    });

    return palettes;
}