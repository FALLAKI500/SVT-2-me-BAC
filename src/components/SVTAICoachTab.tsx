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

  // Base de connaissances SVT hors-ligne complète pour le BAC Marocain
  const OFFLINE_SVT_KNOWLEDGE = [
    {
      keywords: ["krebs", "matrice", "acétyl"],
      title: "Cycle de Krebs (Oxydation de l'Acétyl-CoA)",
      response: `🎓 **Le Cycle de Krebs (Résumé complet pour le BAC 2026)** :
      
Le Cycle de Krebs se déroule entièrement dans la **matrice mitochondriale** et constitue une étape majeure de la respiration cellulaire aérobie.

**1. Étape préparatoire :**
Avant d'entrer dans le cycle, le pyruvate (produit de la glycolyse dans le cytoplasme) pénètre la mitochondrie et est converti en **Acétyl-Coenzyme A** (Acétyl-CoA) par décarboxylation oxydative, libérant 1 molécule de **CO₂** et réduisant 1 molécule de **NAD⁺** en **NADH,H⁺**.

**2. Le Cycle (Bilan pour 1 molécule d'Acétyl-CoA) :**
* L'Acétyl-CoA (2C) se condense avec l'oxaloacétate (4C) pour former de l'acide citrique (6C).
* À chaque tour de cycle, on obtient :
  * 2 molécules de **CO₂** (déchets éliminés).
  * 3 molécules de **NADH,H⁺** (transporteurs de protons et d'électrons réduits).
  * 1 molécule de **FADH₂** (autre transporteur réduit).
  * 1 molécule d'**ATP** (générée directement par phosphorylation du GDP/ADP).

**3. Rôle clé dans la cellule :**
Tous ces coenzymes réduits (NADH,H⁺ et FADH₂) vont ensuite rejoindre la **chaîne respiratoire** située dans la **membrane interne de la mitochondrie** pour subir une réoxydation qui générera une grande quantité d'ATP par phosphorylation oxydative.`
    },
    {
      keywords: ["méiose", "brassage", "interchromosomique", "intrachromosomique", "crossing", "chiasma"],
      title: "Le Brassage Génétique lors de la Méiose",
      response: `🧬 **Méiose & Diversité Génétique (Cours & Explications BAC)** :

La méiose est un mécanisme clé de la reproduction sexuée permettant d'obtenir des gamètes haploïdes ($n$ chromosomes) à partir de cellules diploïdes ($2n$ chromosomes). Elle orchestre deux types de brassages :

**1. Le Brassage Intrachromosomique (Crossing-Over) :**
* **Quand :** Durant la **Prophase I**.
* **Mécanisme :** Les chromosomes homologues s'apparient fidèlement. Les chromatides non-sœurs s'entrecroisent au niveau des **chiasmas**, s'échangent des segments de gènes et créent de nouvelles associations d'allèles.
* **Résultat :** Apparition de chromosomes dits "recombines".

**2. Le Brassage Interchromosomique :**
* **Quand :** Durant l'**Anaphase I**.
* **Mécanisme :** Les chromosomes homologues de chaque paire migrent de manière aléatoire et indépendante vers l'un des deux pôles de la cellule.
* **Résultat :** Pour $n$ paires de chromosomes, ce brassage crée $2^n$ combinaisons de gamètes possibles.

💡 **Astuce d'Examen :** Lors d'un croisement-test (test-cross), si les descendants présentent quatre phénotypes en proportions égales (4 x 25%), les gènes étudiés sont **indépendants** (brassage interchromosomique). S'il y a deux phénotypes parentaux majoritaires et deux phénotypes recombinés minoritaires, les gènes sont **liés** avec crossing-over (brassage intrachromosomique).`
    },
    {
      keywords: ["ophiolite", "obduction", "subduction", "collision", "suture", "péridotite"],
      title: "L'Ophiolite, Témoin de l'Obduction d'un Océan",
      response: `⛰️ **L'Ophiolite et la Géodynamique des Chaînes de Montagnes** :

L'ophiolite représente un fragment préservé de la **lithosphère océanique** charrié et déposé au-dessus de la lithosphère continentale lors de la collision sédimentaire.

**1. Structure classique d'une Série Ophiolitique (du haut vers le bas) :**
1. **Sédiments marins** (radiolarites, argiles silico-calcaires).
2. **Basaltes en coussins (Pillow lavas)** : témoignent d'une éruption sous-marine brusque.
3. **Complexes filoniens** (basalte en filons).
4. **Gabbros** : roches cristallines plutoniques grenues.
5. **Péridotites** : roches caractéristiques du manteau supérieur.

**2. Phénomène d'Obduction :**
Lors de la fermeture d'un océan, si la croûte continentale ne peut pas plonger à cause de sa faible densité, la lithosphère océanique se détache et "grimpe" (chevauches) par-dessus la plaque continentale. La ligne où affleurent ces ophiolites s'appelle la **zone de suture**, marquant la disparition d'un ancien bassin océanique.`
    },
    {
      keywords: ["rendement", "atp", "respiration", "fermentation", "bilan"],
      title: "Comparaison Énergétique : Respiration vs Fermentation",
      response: `⚡ **Rendement Énergétique et Dégradation du Glucose** :

Les cellules dégradent la matière organique (le glucose) par deux voies biochimiques différentes :

**1. La Respiration Cellulaire (Aérobie - en présence de $O_2$) :**
* **Lieu :** Hyaloplasme (glycolyse) puis Mitochondrie (cycle de Krebs et chaîne respiratoire).
* **Dégradation :** Complète (production de déchets minéraux sans énergie : $CO_2$ et $H_2O$).
* **Bilan :** **36 ou 38 ATP** par molécule de glucose dégradée.
* **Rendement :** Environ **40%** (le reste de l'énergie chimique du glucose est dissipé sous forme de chaleur).

**2. La Fermentation (Anaérobie - en l'absence de $O_2$) :**
*La fermentation peut être lactique (production d'acide lactique) ou alcoolique (production d'éthanol et CO₂).*
* **Lieu :** Uniquement dans l'hyaloplasme (pas d'intervention mitochondriale).
* **Dégradation :** Incomplète (le produit final est un déchet organique encore riche en énergie chimique).
* **Bilan :** **2 ATP** stables (via la glycolyse).
* **Rendement :** Environ **2%** seulement. C'est une voie peu efficace mais extrêmement rapide pour pallier le manque d'oxygène.`
    },
    {
      keywords: ["sarcomère", "contraction", "muscle", "actine", "myosine", "glissement", "calcium"],
      title: "Mécanisme de la Contraction Musculaire",
      response: `💪 **Raccourcissement du Sarcomère lors de la Contraction** :

Le muscle squelettique strié se contracte grâce au glissement moléculaire réciproque des **microfilaments d'actine** entre les **microfilaments de myosine** au sein du **sarcomère**.

**Les étapes cycliques de la contraction :**
1. **Éxcitation nerveuse :** L'influx nerveux déclenche la libération des ions $Ca^{2+}$ stockés dans le réticulum sarcoplasmique.
2. **Attachement :** Le $Ca^{2+}$ se fixe sur la **troponine**, libérant le site de liaison de la myosine sur l'actine. Les têtes génératrices de myosine (liées à de l'ADP + Pi) s'y fixent.
3. **Pivotement (La phase motrice) :** La libération d'ADP et Pi entraîne le pivotement des têtes de myosine de 45°, tractant les filaments d'actine vers la strie M centrale (le sarcomère se raccourcit).
4. **Détachement :** Une molécule d'**ATP** vient se fixer sur chaque tête de myosine, libérant l'affinité avec l'actine.
5. **Réarmement :** L'hydrolyse de l'ATP en $ADP+Pi$ réarme la tête de myosine à 90°, prête pour un nouveau cycle de contraction.`
    },
    {
      keywords: ["déchet", "pollution", "nucléaire", "radioactif", "effet de serre", "ozone"],
      title: "Gestion des Déchets et Pollution de l'Environnement",
      response: `♻️ **Cours Environnement (Unité 4 du BAC - Déchets & Énergies)** :

Cette partie du programme aborde l'impact humain sur la biosphère et l'atmosphère :

* **L'Effet de Serre :** Accentuation du réchauffement climatique par de forts rejets de gaz à effet de serre (GES) comme le dioxyde de carbone ($CO_2$), le méthane ($CH_4$), et le protoxyde d'azote ($N_2O$).
* **L'Eutrophisation :** Appauvrissement en oxygène des milieux aquatiques causé par une prolifération excessive d'algues due au déversement d'engrais riches en phosphates et matières azotées.
* **Les Déchets Radioactifs :** Divisés en catégories selon leur durée de vie (courte ou longue période) et leur niveau d'activité (faible, moyen, fort). Les modes de traitement consistent en le stockage sécurisé à grande profondeur ou la vitrification.
* **Le Tri et Recyclage :** Valorisation organique (compostage), valorisation énergétique (incinération avec production d'électricité) et valorisation matière (tri sélectif).`
    }
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
        throw new Error('Impossible de contacter le Prof l\'SVT.');
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
      console.warn("Backend API inaccessible. Activation du moteur de réponse scientifique locale :", err);
      
      // Recherche d'un mot-clé pertinent dans la question du bachelier
      const normalizedQuery = textToSend.toLowerCase();
      const matchedKnowledge = OFFLINE_SVT_KNOWLEDGE.find(item =>
        item.keywords.some(kw => normalizedQuery.includes(kw))
      );

      let replyText = "";
      if (matchedKnowledge) {
        replyText = `### Enseignement Scientifique local (Mode Hors-ligne) 📝\n\n**Sujet d'étude : ${matchedKnowledge.title}**\n\n${matchedKnowledge.response}\n\n💡 *Note : Tu es actuellement en mode hors-ligne spécial GitHub Pages. J'ai détecté ta question et activé ce récapitulatif officiel rédigé spécifiquement pour le programme officiel de 2ème BAC !*`;
      } else {
        replyText = `Bonjour cher(e) élève de 2ème BAC ! 🎓

Je vois que tu prépares activement ton Examen National de SVT. En tant que coach de révision, voici mes recommandations prioritaires d'étude basées sur ta question :

1. **Assure tes notions de cours de base :** Revois rigoureusement les schémas légendés du sarcomère, de la mitochondrie, et des principaux cycles métaboliques.
2. **Maîtrise le vocabulaire :** Les inspecteurs du BAC accordent une attention cruciale à l'usage exact de mots clés (e.g. *chiasma*, *nappe de charriage*, *phosphorylation*, *respiration cellulaire*).
3. **Méthodologie des exercices :** Ne confonds jamais "Décrire" (reproduire les variations graphiques) et "Expliquer" (lier les observations aux mécanismes biologiques sous-jacents).

Tu as à ta disposition un **générateur d'exercices d'SVT nationaux complet** classé par unité dans l'onglet des chapitres à gauche. Profite de ces épreuves d'entraînement corrigées ! 👍`;
      }

      const modelMsg: ChatMessage = {
        id: `mod-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, modelMsg]);
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
