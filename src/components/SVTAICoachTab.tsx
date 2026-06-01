import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, BrainCircuit, GraduationCap, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';

interface SVTAICoachTabProps {
  unitId?: string;
  unitTitle?: string;
}

export default function SVTAICoachTab({ unitId, unitTitle }: SVTAICoachTabProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Bienvenue, futur(e) bachelier(e) ! 🎓 
Je suis **Prof. Sofyan El Idrissi**, ton coach d'SVT par IA. Je suis là pour t'aider à réviser le programme de **2ème BAC (SVT / PC)** et cartonner dans ton Examen National !

Tu peux me poser des questions sur les cours, me demander d'expliquer un cycle complexe (Krebs, contraction, méiose), de générer un QCM, ou de t'expliquer des termes scientifiques en détail.

Qu'aimerais-tu réviser aujourd'hui ?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: "📍 Cycle de Krebs récap", query: "Explique-moi les étapes clés et le bilan du cycle de Krebs de manière simple." },
    { label: "🧬 Brassage Méiose", query: "Quelle est la différence entre le brassage interchromosomique et intrachromosomique lors de la méiose ?" },
    { label: "⛰️ Ophiolite & Obduction", query: "Pourquoi l'ophiolite est-elle considérée comme un indice d'une obduction ?" },
    { label: "⚡ Rendement d'ATP", query: "Calcule le rendement énergétique (en ATP) de la respiration par rapport à la fermentation." },
    { label: "🧬 Codominance vs Dominance", query: "Quelle est la différence entre la codominance et la dominance complète lors des croisements de génétique ?" }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    setErrorStatus(null);
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, text: m.text }))
        })
      });

      if (!response.ok) {
        throw new Error('Impossible de contacter le Prof SVT.');
      }

      const data = await response.json();
      const modelMsg: ChatMessage = {
        id: `mod-${Date.now()}`,
        role: 'model',
        text: data.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, modelMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(
        "Clé de l'API Gemini manquante ou serveur indisponible. Configurez la clé GEMINI_API_KEY dans le panneau Secrets !"
      );
      // Fallback response simulation when key is missing to protect UX
      const fallbackMsg: ChatMessage = {
        id: `mod-fallback-${Date.now()}`,
        role: 'model',
        text: `💡 **Note de l'Editeur**: Je n'arrive pas à me connecter à l'API Gemini (clé d'API manquante dans Secrets). \n\nMais pas de panique ! Ton application est livrée avec un **banque de données complète d'exercices hors-ligne** hyper interactifs (QCM, Tables, Mrbota, Monsadila) pour toutes les 5 unités dans l'onglet d'exercices à gauche ! Profites-en pour t'entraîner dès maintenant ! 👍`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex flex-col h-[650px] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md" id="svt-ai-coach-tab">
      {/* Tab Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-4 border-b border-indigo-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold">
            <Sparkles className="w-5 h-5 animate-pulse text-amber-300" />
          </div>
          <div>
            <h3 className="font-sans font-semibold text-white flex items-center gap-2">
              Prof. Sofyan El Idrissi
              <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full border border-white/30 font-mono font-medium">
                BAC 2026
              </span>
            </h3>
            <p className="text-xs text-indigo-100 font-sans">
              Interrogation & récapitulatifs interactifs
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-indigo-100">
          <GraduationCap className="w-5 h-5 text-amber-300 animate-bounce" />
          <span className="hidden sm:inline font-sans font-semibold">Révision Nationale 2ème BAC</span>
        </div>
      </div>

      {errorStatus && (
        <div className="p-3 bg-amber-50 border-b border-amber-200 text-amber-950 text-xs flex gap-2 items-center font-medium">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
          <span>{errorStatus}</span>
        </div>
      )}

      {/* Messages Scrollable Panel */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 shadow-sm font-sans text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
              }`}
            >
              <div className="whitespace-pre-line prose prose-emerald max-w-none">
                {m.text}
              </div>
              <span className={`block text-[10px] mt-2 text-right ${
                m.role === 'user' ? 'text-indigo-200' : 'text-slate-400'
              } font-mono`}>
                {m.timestamp}
              </span>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-4 max-w-[85%] flex items-center gap-3 shadow-sm">
              <span className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
              <span className="text-xs text-slate-500 font-mono">Le Professeur prépare l'explication...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick suggestions pills */}
      <div className="bg-white border-t border-slate-100 px-4 py-2 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => sendMessage(p.query)}
            className="text-xs bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 py-1.5 px-3 rounded-full transition-all shrink-0 cursor-pointer font-sans"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pose ta question (Ex: Expliquer la différence entre respiration et fermentation...)"
          className="flex-1 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 font-sans"
          disabled={loading}
          id="coach-chat-input"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-100 disabled:text-slate-400 text-white font-sans font-semibold px-5 py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 text-sm active:scale-95"
          disabled={loading || !input.trim()}
          id="coach-chat-submit"
        >
          <Send className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">Envoyer</span>
        </button>
      </form>
    </div>
  );
}
