import { GoogleGenAI, Type } from "@google/genai";
import { ThemeConfig } from "../types";
import { DEFAULT_THEME } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateThemeFromPrompt = async (prompt: string): Promise<Partial<ThemeConfig> | null> => {
  if (!apiKey) {
    console.error("API Key is missing");
    return null;
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    const response = await ai.models.generateContent({
      model,
      contents: `Generate a UI theme configuration JSON based on this description: "${prompt}". 
      Ensure high contrast and accessible colors. 
      Return ONLY the JSON matching the schema.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            framework: { type: Type.STRING, enum: ['modern', 'material', 'bootstrap', 'neobrutalism', 'glass', 'terminal', 'lucid', 'fluent'] },
            colors: {
              type: Type.OBJECT,
              properties: {
                primary: { type: Type.STRING },
                secondary: { type: Type.STRING },
                background: { type: Type.STRING },
                surface: { type: Type.STRING },
                text: { type: Type.STRING },
                textSecondary: { type: Type.STRING },
                accent: { type: Type.STRING },
                success: { type: Type.STRING },
                error: { type: Type.STRING },
              },
              required: ['primary', 'secondary', 'background', 'surface', 'text']
            },
            borderRadius: {
              type: Type.OBJECT,
              properties: {
                button: { type: Type.STRING },
                card: { type: Type.STRING }
              }
            }
          },
          required: ['colors', 'name']
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text);
      
      // Merge with default to ensure completeness
      const newTheme: Partial<ThemeConfig> = {
        name: data.name,
        framework: data.framework || 'modern',
        colors: { ...DEFAULT_THEME.colors, ...data.colors },
        borderRadius: {
            ...DEFAULT_THEME.borderRadius,
            ...(data.borderRadius || {})
        }
      };
      
      return newTheme;
    }
    return null;

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return null;
  }
};