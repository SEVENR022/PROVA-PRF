import { useState, useMemo } from "react";
import type { UserData, ExamResult } from "../App";
import { questions } from "../data/questions";

interface ResultScreenProps {
  userData: UserData;
  result: ExamResult;
  onRetry: () => void;
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
    return `${h}h ${String(m).padStart(2, "0")}min ${String(s).padStart(2, "0")}s`;
  }
  return `${m}min ${String(s).padStart(2, "0")}s`;
}

export function ResultScreen({ userData, result, onRetry }: ResultScreenProps) {
  const { totalQuestions, correctAnswers, percentage, passed, answers, timeSpent } = result;
  const [showFullReview, setShowFullReview] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | "correct" | "wrong">("all");
  const [reviewCategoryFilter, setReviewCategoryFilter] = useState<string>("all");

  const wrongAnswers = totalQuestions - correctAnswers;

  const categoryResults = useMemo(() => {
    const results: Record<string, { total: number; correct: number }> = {};
    questions.forEach((q, i) => {
      if (!results[q.category]) results[q.category] = { total: 0, correct: 0 };
      results[q.category].total++;
      if (answers[i] === q.correctAnswer) results[q.category].correct++;
    });
    return results;
  }, [answers]);

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

  const filteredQuestions = useMemo(() => {
    return questions
      .map((q, i) => {
        const userAnswer = answers[i];
        const isCorrect = userAnswer === q.correctAnswer;
        const wasAnswered = userAnswer !== -1;
        return { ...q, index: i, userAnswer, isCorrect, wasAnswered };
      })
      .filter((q) => {
        if (reviewFilter === "correct") return q.isCorrect;
        if (reviewFilter === "wrong") return !q.isCorrect;
        return true;
      })
      .filter((q) => {
        if (reviewCategoryFilter === "all") return true;
        return q.category === reviewCategoryFilter;
      });
  }, [answers, reviewFilter, reviewCategoryFilter]);

  // Best and worst categories
  const sortedCategories = useMemo(() => {
    return Object.entries(categoryResults)
      .map(([cat, data]) => ({
        name: cat,
        correct: data.correct,
        total: data.total,
        pct: Math.round((data.correct / data.total) * 100),
      }))
      .sort((a, b) => b.pct - a.pct);
  }, [categoryResults]);

  const bestCategory = sortedCategories[0];
  const worstCategory = sortedCategories[sortedCategories.length - 1];

  const examDate = new Date();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        {/* Result Header */}
        <div className="text-center mb-8">
          {passed ? (
            <>
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/30 mb-4 border-4 border-green-400/30 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                APROVADO!
              </h1>
              <p className="text-green-200 text-lg">
                Parabéns, <strong>{userData.name}</strong>! Você foi aprovado(a) na prova da PRF!
              </p>
            </>
          ) : (
            <>
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-2xl shadow-red-500/30 mb-4 border-4 border-red-400/30 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-red-300 via-red-400 to-red-500 bg-clip-text text-transparent">
                REPROVADO
              </h1>
              <p className="text-red-200 text-lg">
                <strong>{userData.name}</strong>, infelizmente você não atingiu a pontuação mínima.
              </p>
            </>
          )}
        </div>

        {/* Certificate Card (if passed) */}
        {passed && (
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/10 overflow-hidden mb-6 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-400/40 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-yellow-400/40 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-400/40 rounded-br-2xl" />

            <div className="px-8 py-8 text-center relative">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center border-2 border-yellow-400/60">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-yellow-400">POLÍCIA RODOVIÁRIA FEDERAL</h2>
                  <p className="text-xs text-blue-300">França RP — Servidor FiveM</p>
                </div>
              </div>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent mx-auto mb-4" />

              <p className="text-sm text-gray-400 mb-1">CERTIFICADO DE APROVAÇÃO</p>
              <p className="text-2xl font-bold text-white mb-1">{userData.name}</p>
              <p className="text-sm text-gray-400 mb-4">ID: {userData.oderId}</p>

              <div className="bg-green-900/20 border border-green-700/30 rounded-xl px-6 py-3 inline-block mb-4">
                <p className="text-green-400 font-bold text-lg">{percentage}% — {correctAnswers}/{totalQuestions} acertos</p>
                <p className="text-green-300/60 text-xs">Tempo de prova: {formatTime(timeSpent)}</p>
              </div>

              <p className="text-xs text-gray-500">
                Prova realizada em {examDate.toLocaleDateString("pt-BR")} às {examDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              </p>
              <p className="text-[10px] text-gray-600 mt-1">
                ⚠️ Tire um print desta tela para comprovar sua aprovação
              </p>
            </div>
          </div>
        )}

        {/* Score Card */}
        <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden mb-6">
          <div className={`px-6 py-4 border-b border-gray-700/30 ${passed ? "bg-green-900/20" : "bg-red-900/20"}`}>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              📊 Resultado Detalhado da Avaliação
            </h2>
          </div>

          <div className="p-6">
            {/* Score Circle + Quick Stats */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Circle */}
              <div className="relative w-44 h-44 shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-700/50" />
                  <circle
                    cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8"
                    strokeDasharray={`${(percentage / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
                    strokeLinecap="round"
                    className={passed ? "text-green-400" : "text-red-400"}
                    style={{ transition: "stroke-dasharray 1s ease-out" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-5xl font-extrabold ${passed ? "text-green-400" : "text-red-400"}`}>
                    {percentage}%
                  </span>
                  <span className="text-xs text-gray-400 mt-1">Aproveitamento</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex-1 w-full grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700/30">
                  <p className="text-3xl font-bold text-white">{totalQuestions}</p>
                  <p className="text-xs text-gray-400 mt-1">Total Questões</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-green-700/20">
                  <p className="text-3xl font-bold text-green-400">{correctAnswers}</p>
                  <p className="text-xs text-gray-400 mt-1">Acertos</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-red-700/20">
                  <p className="text-3xl font-bold text-red-400">{wrongAnswers}</p>
                  <p className="text-xs text-gray-400 mt-1">Erros</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-yellow-700/20">
                  <p className="text-xl font-bold text-yellow-400 font-mono">{formatTime(timeSpent)}</p>
                  <p className="text-xs text-gray-400 mt-1">Tempo de Prova</p>
                </div>
              </div>
            </div>

            {/* Best / Worst category highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-green-900/10 rounded-xl p-4 border border-green-700/20">
                <p className="text-[10px] text-green-400/60 uppercase tracking-wider font-semibold mb-1">🏆 Melhor Categoria</p>
                <p className="text-sm text-green-300 font-bold flex items-center gap-1.5">
                  {categoryIcons[bestCategory.name]} {bestCategory.name}
                </p>
                <p className="text-xs text-green-400/80 mt-0.5">{bestCategory.correct}/{bestCategory.total} acertos ({bestCategory.pct}%)</p>
              </div>
              <div className="bg-red-900/10 rounded-xl p-4 border border-red-700/20">
                <p className="text-[10px] text-red-400/60 uppercase tracking-wider font-semibold mb-1">⚠️ Precisa Melhorar</p>
                <p className="text-sm text-red-300 font-bold flex items-center gap-1.5">
                  {categoryIcons[worstCategory.name]} {worstCategory.name}
                </p>
                <p className="text-xs text-red-400/80 mt-0.5">{worstCategory.correct}/{worstCategory.total} acertos ({worstCategory.pct}%)</p>
              </div>
            </div>

            {/* Category Performance */}
            <div className="bg-gray-900/30 rounded-xl border border-gray-700/30 overflow-hidden mb-6">
              <div className="px-4 py-3 bg-gray-900/50 border-b border-gray-700/30">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  📊 Desempenho por Categoria
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {sortedCategories.map(({ name: cat, correct, total, pct }) => {
                  const isGood = pct >= 70;
                  return (
                    <div key={cat}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-300 flex items-center gap-1.5">
                          <span>{categoryIcons[cat]}</span>
                          {cat}
                        </span>
                        <span className={`text-xs font-bold font-mono ${isGood ? "text-green-400" : "text-red-400"}`}>
                          {correct}/{total} ({pct}%)
                          {isGood ? " ✓" : " ✗"}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2.5">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${isGood ? "bg-gradient-to-r from-green-600 to-green-400" : "bg-gradient-to-r from-red-600 to-red-400"}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* User Info */}
            <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-700/30 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 text-xs">Candidato</span>
                  <p className="text-white font-semibold">{userData.name}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">ID na Cidade</span>
                  <p className="text-white font-semibold">{userData.oderId}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">Corporação</span>
                  <p className="text-yellow-400 font-semibold">PRF — França RP</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">Data e Hora</span>
                  <p className="text-white font-semibold text-xs mt-0.5">
                    {examDate.toLocaleDateString("pt-BR")} {examDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            </div>

            {passed ? (
              <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">🎉</span>
                  <div>
                    <p className="text-green-300 font-bold text-sm mb-2">Próximos Passos para Aprovados:</p>
                    <ol className="text-green-200/70 text-sm space-y-2 list-decimal list-inside">
                      <li>Tire um <strong>print/screenshot</strong> desta tela de resultado (certificado acima)</li>
                      <li>Envie o print no <strong>canal de aprovação do Discord</strong> do França RP</li>
                      <li>Aguarde a <strong>convocação</strong> de um superior para o treinamento prático</li>
                      <li>Participe do <strong>treinamento operacional</strong> com seu instrutor</li>
                      <li>Receba sua <strong>farda, equipamento e viatura</strong> ao ser efetivado</li>
                      <li>Inicie seu serviço como <strong>Agente da PRF</strong> no França RP!</li>
                    </ol>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📚</span>
                  <div>
                    <p className="text-red-300 font-bold text-sm mb-2">Não desista! Dicas para a próxima tentativa:</p>
                    <ul className="text-red-200/70 text-sm space-y-2 list-disc list-inside">
                      <li>Foque na categoria <strong>"{worstCategory.name}"</strong> — foi sua menor nota ({worstCategory.pct}%)</li>
                      <li>Estude os <strong>procedimentos operacionais</strong> de abordagem e patrulha</li>
                      <li>Memorize os <strong>códigos de rádio</strong> (QAP, QSL, QTH, QRV, QRX)</li>
                      <li>Conheça bem as <strong>regras do servidor</strong> (VDM, RDM, metagaming, powergaming)</li>
                      <li>Entenda o conceito de <strong>uso progressivo da força</strong> e proporcionalidade</li>
                      <li>Revise o gabarito abaixo para entender os <strong>erros cometidos</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Status Badge */}
            <div className="text-center">
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-lg font-bold ${
                passed
                  ? "bg-green-500/10 border-green-500/30 text-green-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}>
                {passed ? "✅" : "❌"} STATUS: {passed ? "APROVADO" : "REPROVADO"}
              </div>
            </div>
          </div>
        </div>

        {/* Answer Review */}
        <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-700/30">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                📋 Gabarito — Revisão das Respostas
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setReviewFilter("all")}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                    reviewFilter === "all"
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-700/50 text-gray-400 hover:bg-gray-600/50"
                  }`}
                >
                  Todas ({totalQuestions})
                </button>
                <button
                  onClick={() => setReviewFilter("correct")}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                    reviewFilter === "correct"
                      ? "bg-green-500 text-white"
                      : "bg-gray-700/50 text-gray-400 hover:bg-gray-600/50"
                  }`}
                >
                  ✓ Acertos ({correctAnswers})
                </button>
                <button
                  onClick={() => setReviewFilter("wrong")}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                    reviewFilter === "wrong"
                      ? "bg-red-500 text-white"
                      : "bg-gray-700/50 text-gray-400 hover:bg-gray-600/50"
                  }`}
                >
                  ✗ Erros ({wrongAnswers})
                </button>
                <span className="text-gray-600 text-xs">|</span>
                <select
                  value={reviewCategoryFilter}
                  onChange={(e) => setReviewCategoryFilter(e.target.value)}
                  className="px-3 py-1.5 bg-gray-700/50 border border-gray-600/30 rounded-lg text-xs text-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-400/50"
                >
                  <option value="all">Todas categorias</option>
                  {allCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {categoryIcons[cat]} {cat}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-gray-500">
                Mostrando {filteredQuestions.length} de {totalQuestions} questões
              </p>
            </div>
          </div>

          {!showFullReview ? (
            <div className="px-6 py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm mb-1">
                Revise todas as suas respostas e veja onde errou
              </p>
              <p className="text-gray-500 text-xs mb-6">
                O gabarito mostra a resposta correta e a que você selecionou
              </p>
              <button
                onClick={() => setShowFullReview(true)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all text-sm shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95"
              >
                📖 Abrir Gabarito Completo
              </button>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-700/30 max-h-[70vh] overflow-y-auto">
                {filteredQuestions.map((q) => (
                  <div key={q.id} className={`px-6 py-4 ${!q.isCorrect ? "bg-red-500/[0.03]" : ""}`}>
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                          !q.wasAnswered
                            ? "bg-gray-600/50 text-gray-400"
                            : q.isCorrect
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {q.index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-[10px] text-gray-500 bg-gray-700/30 px-2 py-0.5 rounded-full">
                            {categoryIcons[q.category]} {q.category}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            q.isCorrect
                              ? "bg-green-500/10 text-green-400 border border-green-500/20"
                              : "bg-red-500/10 text-red-400 border border-red-500/20"
                          }`}>
                            {q.isCorrect ? "✓ Correto" : "✗ Errado"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 mb-2 leading-relaxed">{q.question}</p>
                        <div className="space-y-1.5">
                          {!q.wasAnswered && (
                            <p className="text-xs text-gray-500 italic bg-gray-800/50 px-3 py-1.5 rounded-lg">
                              ⚠️ Não respondida — questão em branco conta como erro
                            </p>
                          )}
                          {q.wasAnswered && !q.isCorrect && (
                            <p className="text-xs text-red-400 bg-red-500/5 px-3 py-1.5 rounded-lg">
                              ✗ Sua resposta: <span className="font-medium">{q.options[q.userAnswer]}</span>
                            </p>
                          )}
                          <p className="text-xs text-green-400 bg-green-500/5 px-3 py-1.5 rounded-lg">
                            ✓ Resposta correta: <span className="font-medium">{q.options[q.correctAnswer]}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 bg-gray-900/30 border-t border-gray-700/30 text-center">
                <button
                  onClick={() => setShowFullReview(false)}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  ▲ Fechar gabarito
                </button>
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button
            onClick={onRetry}
            className="flex-1 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-bold text-lg rounded-xl transition-all shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            {passed ? "Refazer Prova" : "Tentar Novamente"}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-xs pb-8 space-y-1">
          <p className="text-gray-500">© 2024 PRF — França RP | Todos os direitos reservados</p>
          <p>Servidor FiveM — Cidade França RP</p>
          <p>Prova com {totalQuestions} questões em 10 categorias • Nota mínima: 70%</p>
        </div>
      </div>
    </div>
  );
}
