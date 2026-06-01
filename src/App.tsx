import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Folder, 
  FolderOpen, 
  Trophy,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { staticModules } from './data/staticQuizzes';
import SVTQuizPlayground from './components/SVTQuizPlayground';

export default function App() {
  const [selectedModuleId, setSelectedModuleId] = useState(staticModules[0].id);

  // Score stats state
  const [score, setScore] = useState(0);

  const activeModule = staticModules.find(m => m.id === selectedModuleId) || staticModules[0];

  const handleScoreUpdate = (points: number) => {
    setScore(prev => prev + points);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Decorative SVT top-bar */}
      <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 py-2.5 border-b border-slate-200 text-center text-[11.5px] sm:text-xs font-sans text-indigo-700 font-semibold tracking-wide">
        ⭐ Révision Examen National 2ème BAC Maroc • Sciences de la Vie et de la Terre (SVT & PC Option BIOF) ⭐
      </div>

      {/* Main Header */}
      <header className="bg-indigo-600 border-b border-indigo-700 p-4 sm:p-6 shadow-md" id="main-app-header">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & title */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg transform hover:scale-105 transition-all">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  SVT 2ème BAC
                </h1>
                <span className="text-xs bg-indigo-500 border border-indigo-400 text-white px-2.5 py-0.5 rounded-full font-bold">
                  Option BIOF
                </span>
              </div>
              <div className="mt-2.5 flex flex-col lg:flex-row lg:items-center gap-4">
                <p className="text-xs text-indigo-100/90 font-sans max-w-[320px] lg:max-w-xs leading-relaxed">
                  Préparez vos QCM, Textes de synthèse à trous, Liaisons de concepts et Tableaux comparatifs
                </p>
                
                {/* Premium Professional Professor Certificate Badge */}
                <div className="inline-flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-amber-400/30 shadow-xl transition-all hover:border-amber-400/60 group">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-md">
                    <Award className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 items-center justify-center">
                        <ShieldCheck className="w-2.5 h-2.5 text-white" />
                      </span>
                    </span>
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-black text-white font-sans tracking-wide leading-tight group-hover:text-amber-300 transition-colors">
                      Prof. Sofyan El Idrissi
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gamification score card */}
          <div className="flex items-center gap-4 bg-indigo-700/80 border border-indigo-500/30 px-5 py-2.5 rounded-xl shadow-inner">
            <div className="text-left">
              <span className="text-[10px] text-indigo-200 uppercase tracking-widest block font-mono font-semibold">Mon Score</span>
              <span className="text-lg font-bold text-amber-300 font-mono">{score} <span className="text-xs text-indigo-100 font-sans font-normal">Points</span></span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <Trophy className="w-5 h-5 text-amber-950 font-bold" />
            </div>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">

        {/* Top Moroccan SVT Curriculum Folders (Matches User Image exactly!) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm" id="curriculum-units-folders">
          <h3 className="text-xs uppercase text-slate-500 font-mono tracking-widest mb-4 flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-indigo-600" />
            <span>Sélectionner une unité du programme national Marocain :</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3">
            {staticModules.map((mod) => {
              const isSelected = mod.id === selectedModuleId;
              
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => {
                    setSelectedModuleId(mod.id);
                  }}
                  className={`relative p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-[130px] group ${
                    isSelected 
                      ? 'bg-indigo-50/75 border-indigo-500 hover:bg-indigo-50 ring-2 ring-indigo-500/20 shadow-md'
                      : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/50'
                  }`}
                  id={`folder-btn-${mod.id}`}
                >
                  {/* Folder Icon representing the 5 units of the Moroccan SVT uploaded picture */}
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <Folder className="w-4.5 h-4.5" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                    )}
                  </div>

                  <div>
                    <h4 className={`text-xs font-semibold line-clamp-2 leading-snug group-hover:text-indigo-600 transition font-sans ${
                      isSelected ? 'text-indigo-950 font-bold' : 'text-slate-700'
                    }`}>
                      {mod.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Workspace Splitter (Training vs AI Coach) */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-start">
          
          {/* Active Unit Description (1 column on XL, stacked on smaller boards) */}
          <div className="xl:col-span-1 space-y-4">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
              <span className="text-[10px] font-mono uppercase bg-indigo-100 text-indigo-700 border border-indigo-200 px-2.5 py-0.5 rounded font-bold">
                Unité Active
              </span>
              <h3 className="mt-3 font-semibold text-slate-900 text-sm sm:text-base font-sans">
                {activeModule.title}
              </h3>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed font-sans font-normal">
                {activeModule.description}
              </p>

              {/* Le travail autonome est centré uniquement sur les exercices nationaux */}
            </div>

            <div className="bg-indigo-50/50 border border-indigo-100/80 rounded-2xl p-4 text-xs space-y-2.5 font-sans">
              <span className="text-[10px] text-indigo-700 font-mono font-bold block uppercase tracking-wide">💡 TYPES D'EXERCICES DIRECTS :</span>
              <ul className="space-y-1.5 text-slate-600 font-sans">
                <li>• <b className="text-slate-800">QCM :</b> Choix multiples de synthèse nationale.</li>
                <li>• <b className="text-slate-800">Textes à Trous :</b> Remplir par liste déroulante.</li>
                <li>• <b className="text-slate-800">Couples Reliés :</b> Relier notions biologiques ou géologiques.</li>
                <li>• <b className="text-slate-800">Tableaux de Comparaison :</b> Cocher les critères de comparaison.</li>
              </ul>
            </div>
          </div>

          {/* Playground block (3 columns on XL) */}
          <div className="xl:col-span-3 pb-6">
            <SVTQuizPlayground 
              module={activeModule} 
              onScoreUpdate={handleScoreUpdate}
            />
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 px-4 text-center text-slate-500 text-xs font-sans">
        <p className="max-w-xl mx-auto text-slate-500">
          Conçu spécifiquement pour accompagner les élèves marocains du 2ème BAC SVT et PC Option BIOF à réussir haut la main l'épreuve nationale.
        </p>
        <p className="text-slate-400 mt-2 font-mono">
          © {new Date().getFullYear()} SVT 2ème BAC Maroc • Exercices et Intelligence Artificielle.
        </p>
      </footer>
    </div>
  );
}
