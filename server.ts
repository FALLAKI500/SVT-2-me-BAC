import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize server-side Gemini client securely
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
} catch (e) {
  console.error('Failed to initialize GoogleGenAI:', e);
}

// 1. Healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    aiEnabled: !!ai,
    time: new Date().toISOString()
  });
});

// 2. Generate customized SVT SVTQuestion
app.post('/api/generate-quiz', async (req, res) => {
  const { unitId, questionType } = req.body;

  if (!ai) {
    return res.status(400).json({
      error: 'Le service d\'IA n\'est pas encore configuré avec la clé API GEMINI_API_KEY.',
      useStaticFallback: true
    });
  }

  const unitTitles: { [key: string]: string } = {
    'unite-1': 'Consommation de la matière organique et flux d\'énergie (ATP, glycolyse, respiration, fermentation, contraction musculaire)',
    'unite-2': 'Nature et expression du matériel génétique (ADN, transcription, traduction, mitose, cycle cellulaire)',
    'unite-3': 'Transfert de l\'information génétique par la reproduction sexuée et les lois de Mendel',
    'unite-4': 'Utilisation des matières organiques et inorganiques (gestion des déchets, pollution, radioactivité)',
    'unite-5': 'Phénomènes géologiques accompagnant la formation des chaînes de montagnes (subduction, obduction, collision, métamorphisme)'
  };

  const selectedTitle = unitTitles[unitId] || unitId;

  // Let's create a specialized prompt tailored to the requested questionType with structured schema details
  let formatPrompt = '';
  let exampleJson = '';
  let responseSchema: any = {};

  if (questionType === 'qcm') {
    formatPrompt = `Generate a single Multiple Choice Question (QCM) with exactly 4 options. Only 1 option should be correct or multiple choices can be correct (indicated by correctIndices array).`;
    responseSchema = {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.STRING },
        type: { type: Type.STRING, description: 'Must be qcm' },
        title: { type: Type.STRING, description: 'Short attractive title in French' },
        instruction: { type: Type.STRING, description: 'Instruction for the student in French' },
        options: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: 'Exactly 4 choices in French'
        },
        correctIndices: {
          type: Type.ARRAY,
          items: { type: Type.INTEGER },
          description: 'Array of zero-indexed correct options'
        },
        allowMultiple: { type: Type.BOOLEAN, description: 'True if there is more than 1 correct answer, false otherwise' },
        explanation: { type: Type.STRING, description: 'Deep, helpful and precise scientific correction/explanation in French' },
        explanationAr: { type: Type.STRING, description: 'Brief and clear summary of explanation in Arabic for Moroccan students to review' }
      },
      required: ['id', 'type', 'title', 'instruction', 'options', 'correctIndices', 'allowMultiple', 'explanation', 'explanationAr']
    };
  } else if (questionType === 'dropdown') {
    formatPrompt = `Generate a fill-in-the-blanks style question (AJWIBA MONSADILA) for our dropdown selector component.
    Provide a paragraph containing between 2 to 4 placeholders marked specifically as [drop-0], [drop-1], [drop-2], etc.
    Specify options and correct answers for each placeholder.`;
    responseSchema = {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.STRING },
        type: { type: Type.STRING, description: 'Must be "dropdown"' },
        title: { type: Type.STRING, description: 'Short attractive title in French' },
        instruction: { type: Type.STRING, description: 'Instruction for the student in French' },
        textWithPlaceholders: { type: Type.STRING, description: 'Paragraph containing tokens [drop-0], [drop-1] etc. where choices go.' },
        dropdowns: {
          type: Type.OBJECT,
          description: 'A key-value dictionary where keys are "drop-0", "drop-1" etc. containing options list and correctValue.',
          properties: {
            'drop-0': {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correctValue: { type: Type.STRING }
              },
              required: ['id', 'options', 'correctValue']
            }
          },
          additionalProperties: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctValue: { type: Type.STRING }
            },
            required: ['id', 'options', 'correctValue']
          }
        },
        explanation: { type: Type.STRING, description: 'Deep, helpful and precise scientific correction/explanation in French' },
        explanationAr: { type: Type.STRING, description: 'Brief and clear summary of explanation in Arabic for Moroccan students to review' }
      },
      required: ['id', 'type', 'title', 'instruction', 'textWithPlaceholders', 'dropdowns', 'explanation', 'explanationAr']
    };
  } else if (questionType === 'matching') {
    formatPrompt = `Generate a matching question (AJWIBA MRBOTA) with 4 leftItems and 4 rightItems that should be connected.`;
    responseSchema = {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.STRING },
        type: { type: Type.STRING, description: 'Must be "matching"' },
        title: { type: Type.STRING },
        instruction: { type: Type.STRING },
        leftItems: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING, description: 'E.g. l1, l2, l3, l4' },
              text: { type: Type.STRING, description: 'Scientific term or concept in French' }
            },
            required: ['id', 'text']
          }
        },
        rightItems: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING, description: 'E.g. r1, r2, r3, r4' },
              text: { type: Type.STRING, description: 'Matching definition, partner or process in French' }
            },
            required: ['id', 'text']
          }
        },
        correctPairs: {
          type: Type.OBJECT,
          description: 'A key-value dictionary mapping leftId to rightId (e.g., {"l1": "r2", "l2": "r3"})',
          additionalProperties: { type: Type.STRING }
        },
        explanation: { type: Type.STRING, description: 'Scientific explanation in French' },
        explanationAr: { type: Type.STRING, description: 'Arabic translation summary' }
      },
      required: ['id', 'type', 'title', 'instruction', 'leftItems', 'rightItems', 'correctPairs', 'explanation', 'explanationAr']
    };
  } else {
    // table
    formatPrompt = `Generate a Table-Grid matrix comparison question (AJWINA FI JADWAL) with 2 columns representing concepts (e.g. Respiration vs Fermentation, or Kontakt vs Regional Metamorphism) and 3 to 4 row statements to be ticked as true or false for each concept column.`;
    responseSchema = {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.STRING },
        type: { type: Type.STRING, description: 'Must be "table"' },
        title: { type: Type.STRING },
        instruction: { type: Type.STRING },
        columns: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING, description: 'Column key e.g col1, col2' },
              label: { type: Type.STRING, description: 'Column concept name in French' }
            },
            required: ['id', 'label']
          }
        },
        rows: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING, description: 'Row key e.g row1, row2' },
              statement: { type: Type.STRING, description: 'Criterion or description statement to be compared in French' },
              expectedChoices: {
                type: Type.OBJECT,
                description: 'Key-value map of columnId -> boolean indicating if it applies',
                additionalProperties: { type: Type.BOOLEAN }
              }
            },
            required: ['id', 'statement', 'expectedChoices']
          }
        },
        explanation: { type: Type.STRING, description: 'Scientific explanation in French' },
        explanationAr: { type: Type.STRING, description: 'Arabic translation summary' }
      },
      required: ['id', 'type', 'title', 'instruction', 'columns', 'rows', 'explanation', 'explanationAr']
    };
  }

  try {
    const generatorPrompt = `You are an elite Moroccan SVT (Sciences de la Vie et de la Terre) Secondary School Inspector specialized in national exams (2ème Année Baccalaureate SVT / PC - Option Internationale).
    Generate a high-quality educational evaluation question for the following curriculum Unit: ${selectedTitle}.
    the question type requested is: "${questionType}".
    ${formatPrompt}

    Ensure details are highly scientific, pedagogically accurate according to the Moroccan national guidelines, and free from any errors.
    The response must follow the specified JSON schema completely.
    CRITICAL: All labels, questions, instructions, options, and explanations must be written in 100% pure international French (BIOF Option). Do NOT translate into Arabic. The field "explanationAr" must be set to an empty string ("") as everything should be 100% in French.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: generatorPrompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        temperature: 1.0,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empyp response from Gemini');
    }

    const questionData = JSON.parse(text);
    // Overwrite dynamic generated ID to avoid duplicates
    questionData.id = `dyn-q-${Date.now()}`;
    return res.json(questionData);

  } catch (error: any) {
    console.error('Error generating custom question:', error);
    return res.status(500).json({
      error: 'Un problème est survenu lors de la génération avec l\'intelligence artificielle. Fallback activé.',
      details: error.message,
      useStaticFallback: true
    });
  }
});

// 3. Explain / Ask Coach Route
app.post('/api/explain', async (req, res) => {
  const { questionTitle, questionType, context, studentAnswer, isCorrect } = req.body;

  if (!ai) {
    return res.status(400).json({ error: 'Le service d\'IA n\'est pas encore configuré.' });
  }

  try {
    const prompt = `You are the ultimate Moroccan SVT 2ème BAC teacher "Prof. Sofyan El Idrissi".
    A student has answered a "${questionType}" question titled "${questionTitle}".
    Question context: ${JSON.stringify(context)}
    Student answered: ${JSON.stringify(studentAnswer)}
    Is correct? ${isCorrect ? 'OUI (C\'est juste)' : 'NON (C\'est faux)'}

    Provide a warm, encouraging pedagogical correction and explanation.
    Talk directly to the student exclusively in French (100% pure international French, do not use any Arabic, transcription or Darija words at all, as the student requested everything to be 100% in French).
    Break down the science clearly so they can smash the national exam. Keep it medium length, highly scannable, starting with an encouraging word.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
    });

    res.json({ explanation: response.text });
  } catch (error: any) {
    console.error('Error in coach explanation:', error);
    res.status(500).json({ error: 'Erreur lors du contact avec le prof d\'SVT.', details: error.message });
  }
});

// 4. BAC SVT Live Coach Chat
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!ai) {
    return res.status(400).json({ error: 'Le service d\'IA n\'est pas encore configuré.' });
  }

  try {
    const conversationHistory = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    // Add immediate system instructions as first turn/context
    const chatInstance = ai.chats.create({
      model: 'gemini-3.5-flash',
      config: {
        systemInstruction: `You are "Prof. Sofyan El Idrissi", a passionate, friendly and elite Moroccan High School SVT teacher for 2ème BAC (Sciences de la Vie et de la Terre / Physique Chimie BAC).
        Your mission is to help students review, prepare for their national exam (Examen National), understand complex biology/geology pathways, and motivate them to get "Mention Très Bien"!
        
        Guidelines:
        1. Always be extremely encouraging and supportive.
        2. Deliver answers exclusively in clear scientific French (100% pure French, BIOF option. Do not use any Arabic or Darija words, subtitles or translations at all, as the student requested everything 100% in French).
        3. Explain complex diagrams, loops, or cycles (such as Krebs cycle, DNA transcription, Mendel statistical laws, Ophiolite sequence, collision mountains) using readable tables, lists, or text in French.
        4. Invite them to test their knowledge or ask for dynamic quizzes.`
      }
    });

    // Send latest message in the session
    const lastMessage = messages[messages.length - 1].text;
    const chatResponse = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `Here is our dialogue. Please reply to my last message with your SVT coach voice. Let's do it! Last message: "${lastMessage}"` }] }
      ]
    });

    res.json({ response: chatResponse.text });
  } catch (error: any) {
    console.error('Error in chat coach:', error);
    res.status(500).json({ error: 'Le Prof SVT est un peu occupé, réessayez dans un moment.', details: error.message });
  }
});

// Serve static elements or integrate Vite and route parsing
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server initialized on port ${PORT}`);
  });
}

startServer();
