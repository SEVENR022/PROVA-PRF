import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import type { UserData, ExamResult } from "../App";
import { questions, PASSING_SCORE } from "../data/questions";

interface ExamScreenProps {
  userData: UserData;
  onFinish: (result: ExamResult) => void;
}

const categoryIcons: Record<string, string> = {
  "Perfil e Conduta": "👤",
  "Ética e Disciplina": "⚖️",
  "Legislação de Trânsito": "📜",
  "Abordagem e Patrulha": "🚔",
  "Perseguição e Uso da Força": "⚡",
  "Códigos de Rádio": "📻",
  "Situações Práticas": "🎯",
  "Regras do RP": "🎮",
  "Operações e Equipe": "🤝",
  "Conhecimentos Específicos": "🏛️",
};

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function ExamScreen({ userData, onFinish }: ExamScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1)
  );
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(Date.now());
  const questionCardRef = useRef<HTMLDivElement>(null);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const question = questions[currentQuestion];
  const answeredCount = answers.filter((a) => a !== -1).length;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const allCategories = useMemo(() => {
    const cats: string[] = [];
    const seen = new Set<string>();
    questions.forEach((q) => {
      if (!seen.has(q.category)) {
        seen.add(q.category);
        cats.push(q.category);
      }
    });
    return cats;
  }, []);

  const categoryProgress = useMemo(() => {
    const prog: Record<string, { total: number; answered: number }> = {};
    questions.forEach((q, i) => {
      if (!prog[q.category]) prog[q.category] = { total: 0, answered: 0 };
      prog[q.category].total++;
      if (answers[i] !== -1) prog[q.category].answered++;
    });
    return prog;
  }, [answers]);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const scrollToQuestion = () => {
    if (questionCardRef.current) {
      questionCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]);
      scrollToQuestion();
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
      scrollToQuestion();
    }
  };

  const handleGoTo = (index: number) => {
    setCurrentQuestion(index);
    setSelectedOption(answers[index]);
    scrollToQuestion();
  };

  const handleFinish = useCallback(() => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    const percentage = Math.round((correct / questions.length) * 100);
    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
    onFinish({
      totalQuestions: questions.length,
      correctAnswers: correct,
      percentage,
      passed: percentage >= PASSING_SCORE,
      answers,
      timeSpent,
    });
  }, [answers, onFinish]);

  const getOptionLetter = (index: number) => {
    return String.fromCharCode(65 + index);
  };

  const filteredQuestionIndices = useMemo(() => {
    if (filterCategory === "all") return questions.map((_, i) => i);
    return questions
      .map((q, i) => (q.category === filterCategory ? i : -1))
      .filter((i) => i !== -1);
  }, [filterCategory]);

  // Current category index (1-based block of 10)
  const currentCategoryIndex = allCategories.indexOf(question.category);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center border-2 border-yellow-400/60 shrink-0">
                <span className="text-[9px] font-black text-yellow-400">PRF</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">{userData.name}</p>
                <p className="text-xs text-gray-400">ID: {userData.oderId}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Timer */}
              <div className="flex items-center gap-1.5 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm font-mono text-yellow-400 font-bold">{formatTime(elapsedTime)}</span>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-xs text-gray-400">Respondidas</p>
                <p className="text-sm font-bold text-yellow-400">
                  {answeredCount}/{questions.length}
                </p>
              </div>
              <button
                onClick={() => setShowConfirmFinish(true)}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20"
              >
                Finalizar
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[10px] sm:text-xs text-gray-500">
              Questão {currentQuestion + 1} de {questions.length}
              <span className="hidden sm:inline">
                {" "}• {categoryIcons[question.category]} {question.category}
              </span>
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500">
              {answeredCount} respondidas • {Math.round((answeredCount / questions.length) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Category Tabs (Mobile) */}
      <div className="lg:hidden bg-gray-900/60 border-b border-gray-700/30 overflow-x-auto">
        <div className="flex items-center gap-1 px-4 py-2 min-w-max">
          {allCategories.map((cat, idx) => {
            const p = categoryProgress[cat];
            const isActive = idx === currentCategoryIndex;
            const isDone = p && p.answered === p.total;
            return (
              <button
                key={cat}
                onClick={() => {
                  // Go to first question of this category
                  const firstIdx = questions.findIndex((q) => q.category === cat);
                  if (firstIdx !== -1) handleGoTo(firstIdx);
                }}
                className={`shrink-0 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-all flex items-center gap-1 ${
                  isActive
                    ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                    : isDone
                      ? "bg-green-900/30 text-green-400 border border-green-700/20"
                      : "bg-gray-800/50 text-gray-500 border border-gray-700/20"
                }`}
              >
                <span>{categoryIcons[cat]}</span>
                <span className="hidden xs:inline">{cat.split(" ")[0]}</span>
                {isDone && <span>✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar - Desktop */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4 sticky top-32">
            {/* Category Filter */}
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
              Filtrar por Categoria
            </h3>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900/70 border border-gray-600/50 rounded-lg text-xs text-white mb-3 focus:outline-none focus:ring-1 focus:ring-yellow-400/50"
            >
              <option value="all">Todas ({questions.length})</option>
              {allCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {categoryIcons[cat]} {cat} ({categoryProgress[cat]?.answered}/{categoryProgress[cat]?.total})
                </option>
              ))}
            </select>

            {/* Question Grid */}
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2">
              Navegação
              <span className="text-[10px] text-gray-500 font-normal">
                ({filteredQuestionIndices.length} questões)
              </span>
            </h3>
            <div className="grid grid-cols-5 gap-1.5 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
              {filteredQuestionIndices.map((index) => (
                <button
                  key={index}
                  onClick={() => handleGoTo(index)}
                  className={`
                    w-full aspect-square rounded-lg text-[10px] font-bold transition-all duration-150
                    ${currentQuestion === index
                      ? "bg-yellow-400 text-gray-900 scale-110 shadow-lg shadow-yellow-400/30 ring-2 ring-yellow-300/50"
                      : answers[index] !== -1
                        ? "bg-blue-600/60 text-white border border-blue-500/30 hover:bg-blue-500/60"
                        : "bg-gray-700/50 text-gray-400 border border-gray-600/30 hover:bg-gray-600/50"
                    }
                  `}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 space-y-1.5 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-400 rounded shrink-0" />
                Atual
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600/60 rounded border border-blue-500/30 shrink-0" />
                Respondida
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-700/50 rounded border border-gray-600/30 shrink-0" />
                Não respondida
              </div>
            </div>

            {/* Category Progress */}
            <div className="mt-4 pt-4 border-t border-gray-700/30">
              <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                Progresso por Categoria
              </h4>
              <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                {allCategories.map((cat) => {
                  const p = categoryProgress[cat];
                  const pct = p ? Math.round((p.answered / p.total) * 100) : 0;
                  const isDone = pct === 100;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        const firstIdx = questions.findIndex((q) => q.category === cat);
                        if (firstIdx !== -1) handleGoTo(firstIdx);
                      }}
                      className="group w-full text-left"
                    >
                      <div className="flex items-center justify-between text-[10px] text-gray-500 mb-0.5">
                        <span className="truncate group-hover:text-gray-300 transition-colors">
                          {categoryIcons[cat]} {cat}
                        </span>
                        <span className={`font-mono ${isDone ? "text-green-400" : ""}`}>
                          {p?.answered}/{p?.total}
                          {isDone && " ✓"}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-1.5">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${isDone ? "bg-green-500/70" : "bg-blue-500/60"}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="flex-1" ref={questionCardRef}>
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
            {/* Category Badge */}
            <div className="px-6 pt-5 pb-3 border-b border-gray-700/30 bg-gray-900/30">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-900/40 text-blue-300 text-xs rounded-full border border-blue-700/30 font-medium flex items-center gap-1.5">
                  <span>{categoryIcons[question.category]}</span>
                  {question.category}
                  <span className="text-blue-500">•</span>
                  <span className="text-blue-400">
                    {(currentQuestion % 10) + 1}/10
                  </span>
                </span>
                <span className="text-sm text-gray-400 font-medium font-mono">
                  #{currentQuestion + 1}
                </span>
              </div>
            </div>

            {/* Question */}
            <div className="px-6 py-6">
              <h2 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                {question.question}
              </h2>
            </div>

            {/* Options */}
            <div className="px-6 pb-6 space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectOption(index)}
                  className={`
                    w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 group
                    ${selectedOption === index
                      ? "bg-yellow-400/10 border-yellow-400/60 text-white shadow-lg shadow-yellow-400/5"
                      : "bg-gray-900/30 border-gray-700/30 text-gray-300 hover:bg-gray-700/30 hover:border-gray-500/50"
                    }
                  `}
                >
                  <span
                    className={`
                      w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-all mt-0.5
                      ${selectedOption === index
                        ? "bg-yellow-400 text-gray-900 shadow-md shadow-yellow-400/30"
                        : "bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50"
                      }
                    `}
                  >
                    {getOptionLetter(index)}
                  </span>
                  <span className="text-sm md:text-base leading-relaxed pt-1.5">{option}</span>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="px-6 py-4 border-t border-gray-700/30 bg-gray-900/20 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Anterior</span>
              </button>

              {/* Middle pagination (blocks of 10) */}
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: Math.min(10, questions.length) }, (_, i) => {
                  const start = Math.floor(currentQuestion / 10) * 10;
                  const idx = start + i;
                  if (idx >= questions.length) return null;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleGoTo(idx)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                        currentQuestion === idx
                          ? "bg-yellow-400 text-gray-900 shadow-md"
                          : answers[idx] !== -1
                            ? "bg-blue-600/50 text-white"
                            : "bg-gray-700/40 text-gray-500 hover:bg-gray-600/40"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all text-sm font-medium shadow-lg shadow-blue-600/20"
                >
                  <span className="hidden sm:inline">Próxima</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => setShowConfirmFinish(true)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all text-sm font-medium shadow-lg shadow-green-600/20"
                >
                  Finalizar
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Navigator */}
          <div className="lg:hidden mt-4 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                Navegação Rápida
              </p>
              <p className="text-xs text-gray-500">
                {answeredCount}/{questions.length} respondidas
              </p>
            </div>
            <div className="grid grid-cols-10 gap-1 max-h-32 overflow-y-auto">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleGoTo(index)}
                  className={`
                    aspect-square rounded text-[9px] font-bold transition-all
                    ${currentQuestion === index
                      ? "bg-yellow-400 text-gray-900"
                      : answers[index] !== -1
                        ? "bg-blue-600/60 text-white"
                        : "bg-gray-700/50 text-gray-500"
                    }
                  `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Finish Modal */}
      {showConfirmFinish && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-gray-800 rounded-2xl border border-gray-700/50 shadow-2xl max-w-lg w-full p-6 animate-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-4 border border-yellow-400/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Finalizar Prova?</h3>
              <p className="text-gray-400 text-sm">
                Você respondeu{" "}
                <span className="text-yellow-400 font-bold">{answeredCount}</span> de{" "}
                <span className="text-white font-bold">{questions.length}</span> questões.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Tempo decorrido: <span className="text-yellow-400 font-mono">{formatTime(elapsedTime)}</span>
              </p>
              {answeredCount < questions.length && (
                <p className="text-red-400 text-sm mt-3 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20 inline-block">
                  ⚠️ Existem{" "}
                  <span className="font-bold">{questions.length - answeredCount}</span>{" "}
                  questões sem resposta!
                </p>
              )}
            </div>

            {/* Category summary in modal */}
            {answeredCount < questions.length && (
              <div className="bg-gray-900/50 rounded-xl p-3 mb-4 max-h-40 overflow-y-auto border border-gray-700/30">
                <p className="text-xs text-gray-400 mb-2 font-semibold">Categorias incompletas:</p>
                <div className="space-y-1">
                  {allCategories.map((cat) => {
                    const p = categoryProgress[cat];
                    if (p && p.answered < p.total) {
                      return (
                        <div key={cat} className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">
                            {categoryIcons[cat]} {cat}
                          </span>
                          <span className="text-red-400 font-mono">
                            {p.answered}/{p.total}
                          </span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmFinish(false)}
                className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-xl font-medium transition-all text-sm"
              >
                Voltar à Prova
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-all text-sm shadow-lg shadow-green-600/20"
              >
                ✓ Confirmar Finalização
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
