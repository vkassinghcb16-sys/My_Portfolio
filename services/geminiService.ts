
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const askVikasAI = async (userQuery: string, portfolioData: any) => {
  if (!API_KEY) throw new Error("API Key not found");
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    You are Vikas Singh's personal AI agent. Vikas is a Product Manager with 3+ years of experience.
    Context about Vikas:
    - Education: MBA from IIM Udaipur, B.Tech from IIT Patna.
    - Career: Livekeeping, Decimal Technologies, Physicswallah, Embibe.
    - Skills: Product Strategy, Data Analytics (SQL, Mixpanel), UX Research, Agile.
    - Focus: Growth, Funnel Optimization, and User-Centric Design.
    
    Answer questions as Vikas's representative. Be professional, insightful, and concise. 
    If you don't know something based on the context, politely suggest contacting Vikas via LinkedIn.
    
    Portfolio Data Context: ${JSON.stringify(portfolioData)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or reach out to Vikas directly.";
  }
};
