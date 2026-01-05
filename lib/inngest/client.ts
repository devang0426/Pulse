import { Inngest} from "inngest";

export const inngest = new Inngest({
    id: 'PULSE',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY || process.env.API_KEY! }}
})
