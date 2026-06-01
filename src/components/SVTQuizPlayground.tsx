import React, { useState, useEffect } from 'react';
import { SVTQuestion, SVTModule } from '../types';
import { CheckCircle2, AlertCircle, Sparkles, BookOpen, ArrowRight, RotateCcw, HelpCircle, Award, ShieldCheck } from 'lucide-react';

interface SVTQuizPlaygroundProps {
  module: SVTModule;
  onScoreUpdate: (points: number) => void;
}

export default function SVTQuizPlayground({ module, onScoreUpdate }: SVTQuizPlaygroundProps) {
  const [questions, setQuestions] = useState<SVTQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // User responses
  const [qcmSelection, setQcmSelection] = useState<number[]>([]);
  const [dropdownSelection, setDropdownSelection] = useState<{ [key: string]: string }>({});
  const [matchingSelection, setMatchingSelection] = useState<{ [leftId: string]: string }>({});
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [tableSelection, setTableSelection] = useState<{ [rowId: string]: { [columnId: string]: boolean } }>({});

  // Question validation state
  const [hasCheckedAnswer, setHasCheckedAnswer] = useState(false);
  const [isCorrectResult, setIsCorrectResult] = useState(false);
  const [scoreFeedback, setScoreFeedback] = useState<string>('');

  // AI Assistant Custom Explainer
  const [coachExplanation, setCoachExplanation] = useState<string | null>(null);
  const [loadingCoach, setLoadingCoach] = useState(false);

  // Dynamic AI generation
  const [generatingCustom, setGeneratingCustom] = useState(false);
  const [aiGenError, setAiGenError] = useState<string | null>(null);

  // Reset indices and load list
  useEffect(() => {
    setQuestions(module.questions);
    setCurrentIndex(0);
    resetAnswerState();
  }, [module]);

  const resetAnswerState = () => {
    setQcmSelection([]);
    setDropdownSelection({});
    setMatchingSelection({});
    setSelectedLeftId(null);
    setTableSelection({});
    setHasCheckedAnswer(false);
    setIsCorrectResult(false);
    setScoreFeedback('');
    setCoachExplanation(null);
    setAiGenError(null);
  };

  const activeQuestion = questions[currentIndex];

  if (!activeQuestion) {
    return (
      <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 font-sans text-slate-300">
        Aucune question disponible pour ce module.
      </div>
    );
  }

  // 1. QCM Toggle choice
  const handleQcmToggle = (index: number) => {
    if (hasCheckedAnswer) return;
    if (activeQuestion.type !== 'qcm') return;

    if (activeQuestion.allowMultiple) {
      setQcmSelection(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setQcmSelection([index]);
    }
  };

  // 2. Dropdown (Monsadila) change handler
  const handleDropdownChange = (dropKey: string, val: string) => {
    if (hasCheckedAnswer) return;
    setDropdownSelection(prev => ({
      ...prev,
      [dropKey]: val
    }));
  };

  // 3. Matching (Mrbota) connect helper
  const handleLeftItemClick = (id: string) => {
    if (hasCheckedAnswer) return;
    setSelectedLeftId(id);
  };

  const handleRightItemClick = (rightId: string) => {
    if (hasCheckedAnswer) return;
    if (!selectedLeftId) return;

    // Conect active Left item with chosen Right item
    setMatchingSelection(prev => ({
      ...prev,
      [selectedLeftId]: rightId
    }));
    // Deselect Left item
    setSelectedLeftId(null);
  };

  const clearMatchingSelection = () => {
    if (hasCheckedAnswer) return;
    setMatchingSelection({});
    setSelectedLeftId(null);
  };

  // 4. Table check state toggler (Jadwal)
  const handleTableToggle = (rowId: string, columnId: string) => {
    if (hasCheckedAnswer) return;
    setTableSelection(prev => {
      const rowState = prev[rowId] || {};
      const nextRowState = {
        ...rowState,
        [columnId]: !rowState[columnId]
      };
      return {
        ...prev,
        [rowId]: nextRowState
      };
    });
  };

  // Check overall Answer
  const checkAnswer = () => {
    if (hasCheckedAnswer) return;

    let isCorrect = false;
    let scoreText = '';

    if (activeQuestion.type === 'qcm') {
      const correctList = [...activeQuestion.correctIndices].sort();
      const userList = [...qcmSelection].sort();
      isCorrect = JSON.stringify(correctList) === JSON.stringify(userList);
      scoreText = isCorrect ? 'Excellent ! Réponse correcte.' : 'Incorrect. Examinez l\'explication scientifique ci-dessous.';
    }
    else if (activeQuestion.type === 'dropdown') {
      let correctCount = 0;
      const totalDrops = Object.keys(activeQuestion.dropdowns).length;

      Object.keys(activeQuestion.dropdowns).forEach(k => {
        if (dropdownSelection[k] === activeQuestion.dropdowns[k].correctValue) {
          correctCount++;
        }
      });

      isCorrect = correctCount === totalDrops;
      scoreText = `Score: ${correctCount}/${totalDrops} mots correctement placés.`;
    }
    else if (activeQuestion.type === 'matching') {
      let correctCount = 0;
      const totalPairs = Object.keys(activeQuestion.correctPairs).length;

      Object.keys(activeQuestion.correctPairs).forEach(leftId => {
        if (matchingSelection[leftId] === activeQuestion.correctPairs[leftId]) {
          correctCount++;
        }
      });

      isCorrect = correctCount === totalPairs;
      scoreText = `Score: ${correctCount}/${totalPairs} couples correctement liés.`;
    }
    else if (activeQuestion.type === 'table') {
      let correctMatches = 0;
      let totalExpected = 0;

      activeQuestion.rows.forEach(row => {
        activeQuestion.columns.forEach(col => {
          totalExpected++;
          const expected = row.expectedChoices[col.id] || false;
          const selected = (tableSelection[row.id] && tableSelection[row.id][col.id]) || false;
          if (expected === selected) {
            correctMatches++;
          }
        });
      });

      isCorrect = correctMatches === totalExpected;
      scoreText = `Score: ${correctMatches}/${totalExpected} cases validées correctement.`;
    }

    setIsCorrectResult(isCorrect);
    setScoreFeedback(scoreText);
    setHasCheckedAnswer(true);

    if (isCorrect) {
      onScoreUpdate(10); // Reward 10 points
    }
  };

  // Load custom explanation from AI Prof secure Coach endpoint
  const askAICoachForExplanation = async () => {
    if (loadingCoach) return;
    setLoadingCoach(true);

    let formattedStudentAnswer = {};
    if (activeQuestion.type === 'qcm') formattedStudentAnswer = qcmSelection;
    else if (activeQuestion.type === 'dropdown') formattedStudentAnswer = dropdownSelection;
    else if (activeQuestion.type === 'matching') formattedStudentAnswer = matchingSelection;
    else if (activeQuestion.type === 'table') formattedStudentAnswer = tableSelection;

    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionTitle: activeQuestion.title,
          questionType: activeQuestion.type,
          context: activeQuestion,
          studentAnswer: formattedStudentAnswer,
          isCorrect: isCorrectResult
        })
      });

      if (!response.ok) {
        throw new Error('Erreur de communication');
      }

      const data = await response.json();
      setCoachExplanation(data.explanation);
    } catch (e) {
      setCoachExplanation(
        "Désolé, impossible de joindre le prof d'SVT en direct. La correction standard du comité d'inspection est disponible ci-dessous en Français !"
      );
    } finally {
      setLoadingCoach(false);
    }
  };

  // Generate an extra customized dynamic question using Google GenAI API on the backend
  const generateExtraQuestionAI = async () => {
    if (generatingCustom) return;
    setGeneratingCustom(true);
    setAiGenError(null);

    try {
      const response = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          unitId: module.id,
          questionType: activeQuestion.type // same category as what they play or pick
        })
      });

      if (!response.ok) {
        throw new Error("L'API Gemini du serveur n'a pas pu générer l'exercice.");
      }

      const parsedQuestion = await response.json();

      // Check schema conformity
      if (parsedQuestion && parsedQuestion.title) {
        setQuestions(prev => {
          const nextList = [...prev];
          // Insert after current index or append
          nextList.splice(currentIndex + 1, 0, parsedQuestion);
          return nextList;
        });
        // Jump to next index directly
        setCurrentIndex(prev => prev + 1);
        resetAnswerState();
      } else {
        throw new Error("Format de question générée incorrect.");
      }
    } catch (err: any) {
      console.error(err);
      setAiGenError(
        "Clé d'API GEMINI_API_KEY non fournie ou dépassée. Profitez de nos exercices pré-rédigés haut de gamme !"
      );
    } finally {
      setGeneratingCustom(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetAnswerState();
    }
  };

  const handleReviewFromStart = () => {
    setCurrentIndex(0);
    resetAnswerState();
  };

  // Render Inline Paragraph for Dropdown matching with placeholder splits
  const renderDropdownParagraph = (q: any) => {
    const text: string = q.textWithPlaceholders;
    // Split by bracket placeholders [drop-N]
    const parts = text.split(/(\[drop-\d+\])/g);

    return (
      <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 leading-loose text-slate-800 text-sm sm:text-base font-sans">
        {parts.map((p, index) => {
          const isPlaceholder = p.match(/^\[drop-\d+\]$/);
          if (isPlaceholder) {
            const key = p.replace('[', '').replace(']', '');
            const dropKey = q.dropdowns[key];
            if (!dropKey) return p;

            return (
              <select
                key={index}
                value={dropdownSelection[key] || ''}
                onChange={(e) => handleDropdownChange(key, e.target.value)}
                disabled={hasCheckedAnswer}
                className={`mx-2 my-1.5 inline-block bg-white border-2 text-xs sm:text-sm rounded hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 py-1.5 px-3 max-w-[200px] text-indigo-700 font-semibold cursor-pointer ${
                  hasCheckedAnswer
                    ? dropdownSelection[key] === dropKey.correctValue
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                      : 'border-rose-500 bg-rose-50 text-rose-800'
                    : 'border-slate-300'
                }`}
                id={`dropdown-select-${key}`}
              >
                <option value="" className="text-slate-400">Choisir...</option>
                {dropKey.options.map((opt: string, oIdx: number) => (
                  <option key={oIdx} value={opt} className="text-slate-800 font-sans font-medium">{opt}</option>
                ))}
              </select>
            );
          }
          return <span key={index} className="font-medium text-slate-700">{p}</span>;
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6" id="svt-quiz-playground">
      {/* Quiz Card Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase bg-indigo-100 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-full font-sans font-bold">
              Fiche {currentIndex + 1} / {questions.length}
            </span>
            <span className="text-xs uppercase bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full font-sans font-medium">
              Format: {activeQuestion.type.toUpperCase()}
            </span>
          </div>


        </div>

        {aiGenError && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-850 text-xs rounded-xl mb-4 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <span>{aiGenError}</span>
          </div>
        )}

        <h2 className="text-lg sm:text-xl font-bold font-sans text-slate-900 tracking-tight mb-2">
          {activeQuestion.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 font-sans">
          {activeQuestion.instruction}
        </p>

        {/* Question Type Interfaces */}

        {/* 1. QCM */}
        {activeQuestion.type === 'qcm' && (
          <div className="space-y-2.5">
            {activeQuestion.options.map((opt, oIdx) => {
              const isSelected = qcmSelection.includes(oIdx);
              const isCorrectOpt = activeQuestion.correctIndices.includes(oIdx);

              let optionColor = 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/50 hover:border-slate-350';
              if (hasCheckedAnswer) {
                if (isCorrectOpt) {
                  optionColor = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium';
                } else if (isSelected) {
                  optionColor = 'bg-rose-50 border-rose-400 text-rose-900';
                } else {
                  optionColor = 'bg-slate-50/20 border-slate-200 opacity-40 text-slate-400';
                }
              } else if (isSelected) {
                optionColor = 'bg-indigo-50 border-indigo-400 text-indigo-900 font-medium';
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  onClick={() => handleQcmToggle(oIdx)}
                  disabled={hasCheckedAnswer}
                  className={`w-full p-4 text-left rounded-xl border text-sm sm:text-base font-sans transition-all flex items-start gap-4 cursor-pointer select-none ${optionColor}`}
                  id={`qcm-option-${oIdx}`}
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 ${
                    isSelected ? 'bg-indigo-600 text-white font-bold' : 'bg-white border-2 border-slate-300'
                  }`}>
                    {isSelected ? '✓' : ''}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* 2. Dropdown (Monsadila) */}
        {activeQuestion.type === 'dropdown' && (
          <div className="space-y-4">
            {renderDropdownParagraph(activeQuestion)}
          </div>
        )}

        {/* 3. Matching (Ajwiba Mrbota / Relier couples) */}
        {activeQuestion.type === 'matching' && (
          <div className="space-y-4 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column list */}
              <div className="space-y-2">
                <p className="text-xs text-slate-550 uppercase tracking-widest font-mono">Éléments</p>
                {activeQuestion.leftItems.map((leftItem) => {
                  const targetRightId = matchingSelection[leftItem.id];
                  const rightItem = activeQuestion.rightItems.find(r => r.id === targetRightId);
                  const isSelected = selectedLeftId === leftItem.id;

                  let itemStyle = 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-350 text-slate-800';
                  if (isSelected) {
                    itemStyle = 'border-indigo-500 bg-indigo-50 text-indigo-700';
                  } else if (targetRightId) {
                    itemStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800';
                  }

                  return (
                    <button
                      key={leftItem.id}
                      type="button"
                      onClick={() => handleLeftItemClick(leftItem.id)}
                      disabled={hasCheckedAnswer}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${itemStyle}`}
                      id={`matching-left-${leftItem.id}`}
                    >
                      <span className="font-semibold">{leftItem.text}</span>
                      {rightItem && (
                        <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full border border-indigo-200 font-semibold font-mono">
                          Lié à {targetRightId.toUpperCase()}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right Column list */}
              <div className="space-y-2">
                <p className="text-xs text-slate-550 uppercase tracking-widest font-mono">Définitions / Rôles</p>
                {activeQuestion.rightItems.map((rightItem) => {
                  const connectedLeft = Object.keys(matchingSelection).find(
                    k => matchingSelection[k] === rightItem.id
                  );
                  const leftItem = connectedLeft
                    ? activeQuestion.leftItems.find(l => l.id === connectedLeft)
                    : null;

                  const isConnecting = selectedLeftId !== null;

                  return (
                    <button
                      key={rightItem.id}
                      type="button"
                      onClick={() => handleRightItemClick(rightItem.id)}
                      disabled={hasCheckedAnswer || !isConnecting}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-normal transition-all flex flex-col gap-1.5 cursor-pointer ${
                        leftItem
                          ? 'border-indigo-500 bg-indigo-50/50'
                          : isConnecting
                          ? 'border-dashed border-indigo-400 bg-indigo-50/30 text-indigo-700 hover:bg-indigo-100/50 animate-pulse'
                          : 'border-slate-200 bg-slate-50 text-slate-705'
                      }`}
                      id={`matching-right-${rightItem.id}`}
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-mono text-[10px] text-white bg-slate-800 px-1.5 py-0.5 rounded shrink-0 font-bold">
                          {rightItem.id.toUpperCase()}
                        </span>
                        <span className="text-slate-800 text-xs sm:text-sm font-medium">{rightItem.text}</span>
                      </div>
                      {leftItem && (
                        <div className="mt-1 flex items-center gap-1.5 text-[10px] text-indigo-700 bg-indigo-150 py-1 px-2.5 rounded border border-indigo-200">
                          <span className="font-bold">✓</span> Lié à : <span className="underline font-bold text-indigo-800">{leftItem.text}</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Link Summaries and Reset */}
            {!hasCheckedAnswer && Object.keys(matchingSelection).length > 0 && (
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={clearMatchingSelection}
                  className="text-xs text-slate-500 hover:text-indigo-600 underline flex items-center gap-1.5 cursor-pointer"
                  id="reset-matching-selections"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Effacer les liaisons
                </button>
              </div>
            )}
          </div>
        )}

        {/* 4. Table Matrix Grid (Ajwiba en tableau) */}
        {activeQuestion.type === 'table' && (
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm font-sans" id="matrix-comparison-table">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-800 text-left">
                  <th className="p-4 text-white font-medium max-w-[300px]">Propriété / Indicateur</th>
                  {activeQuestion.columns.map((col) => (
                    <th key={col.id} className="p-4 text-center text-amber-300 font-bold whitespace-nowrap">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {activeQuestion.rows.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 text-slate-800 leading-relaxed font-sans text-xs sm:text-sm font-semibold max-w-[300px]">
                      {row.statement}
                    </td>
                    {activeQuestion.columns.map((col) => {
                      const isChecked = (tableSelection[row.id] && tableSelection[row.id][col.id]) || false;
                      const isCorrectChoice = row.expectedChoices[col.id] || false;

                      // Colors on check answer
                      let checkColor = 'text-slate-400 bg-slate-50 hover:bg-slate-100';
                      if (hasCheckedAnswer) {
                        if (isChecked === isCorrectChoice) {
                          checkColor = isChecked
                            ? 'text-emerald-700 bg-emerald-100 border-emerald-500 shadow-sm'
                            : 'text-slate-350 opacity-40 bg-slate-50';
                        } else {
                          checkColor = isChecked
                            ? 'text-rose-700 bg-rose-100 border-rose-500'
                            : 'text-rose-550 bg-rose-50 border-rose-350';
                        }
                      } else if (isChecked) {
                        checkColor = 'bg-indigo-600 text-white border-indigo-600 font-bold ring-2 ring-indigo-500/20';
                      }

                      return (
                        <td key={col.id} className="p-4 text-center sm:table-cell align-middle">
                          <button
                            type="button"
                            onClick={() => handleTableToggle(row.id, col.id)}
                            disabled={hasCheckedAnswer}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-slate-300 transition-all font-bold flex items-center justify-center cursor-pointer select-none mx-auto ${checkColor}`}
                            id={`table-cell-${row.id}-${col.id}`}
                          >
                            {isChecked ? '✓' : ''}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Action button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <div className="text-xs text-slate-500 font-mono font-medium">
            {hasCheckedAnswer ? (
              <span className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-sans font-bold text-slate-950">{scoreFeedback}</span>
              </span>
            ) : (
              <span>Renseignez vos réponses puis vérifiez la fiche.</span>
            )}
          </div>

          <div className="flex w-full sm:w-auto items-center justify-end gap-3 shrink-0">
            {!hasCheckedAnswer ? (
              <button
                type="button"
                onClick={checkAnswer}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-955 font-sans font-bold px-6 py-2.5 rounded-xl transition cursor-pointer select-none text-center transform active:scale-95 shadow-sm"
                id="submit-quiz-answers"
              >
                Vérifier ma réponse
              </button>
            ) : (
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={askAICoachForExplanation}
                  disabled={loadingCoach}
                  className="bg-slate-105 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-250 flex items-center gap-2 cursor-pointer transition select-none font-sans font-semibold text-slate-700 bg-slate-100"
                  id="ask-coach-explain-btn"
                >
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  <span>{loadingCoach ? 'Appel de Prof. Sofyan El Idrissi...' : 'Correction de Prof. Sofyan El Idrissi'}</span>
                </button>

                {currentIndex < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 font-sans font-bold cursor-pointer transition select-none shadow-sm"
                    id="next-quiz-btn"
                  >
                    <span>Fiche suivante</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleReviewFromStart}
                    className="bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center justify-center gap-1 font-sans font-bold cursor-pointer transition select-none"
                    id="restart-review-btn"
                  >
                    <span>Recommencer la série</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Coach Detailed Explainer Bubble */}
      {hasCheckedAnswer && (coachExplanation || activeQuestion.explanation) && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm" id="scientific-correction-container">
          <div className="flex items-center gap-2 text-indigo-750 border-b border-slate-150 pb-3">
            <BookOpen className="w-5 h-5 shrink-0 text-indigo-650" />
            <h3 className="font-bold font-sans text-sm sm:text-base text-slate-900">
              Correction & Analyse Pédagogique (Explication Nationale)
            </h3>
          </div>

          {/* AI Prof Voice if called - Ultra Premium Pro design */}
          {coachExplanation && (
            <div className="overflow-hidden rounded-2xl border border-amber-400/20 shadow-lg bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
              {/* Header Profile Area */}
              <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-amber-400 text-slate-950 shadow">
                    <Award className="w-5 h-5" />
                    <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm tracking-wide font-sans flex items-center gap-1.5">
                      Prof. Sofyan El Idrissi
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    </h4>
                    <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-mono">
                      Professeur Agrégé SVT • BIOF Expert
                    </p>
                  </div>
                </div>
                
                <span className="text-[10px] font-mono font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <span>🔊 ANALYSE EN DIRECT</span>
                </span>
              </div>
              
              {/* Explanation Body content */}
              <div className="p-5 sm:p-6 bg-slate-950/40 relative">
                <div className="absolute right-4 top-4 opacity-5 text-slate-100 pointer-events-none select-none">
                  <span className="text-8xl font-serif">“</span>
                </div>
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans tracking-wide">
                  {coachExplanation}
                </p>
              </div>
            </div>
          )}

          {/* Standard Correction (100% French) */}
          <div className="pt-1 text-xs sm:text-sm font-sans">
            <div className="space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-150 leading-relaxed text-slate-700 font-medium">
              <span className="text-[10px] uppercase font-mono text-indigo-700 font-bold block mb-1">Analyse Scientifique & Correction :</span>
              {activeQuestion.explanation}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
