import { useState } from "react";
import type { UserData } from "../App";
import { questions, PASSING_SCORE, MIN_CORRECT } from "../data/questions";

interface WelcomeScreenProps {
  onStart: (data: UserData) => void;
}

const categories = [
  { name: "Perfil e Conduta", icon: "👤", desc: "Como deve ser o agente" },
  { name: "Ética e Disciplina", icon: "⚖️", desc: "Valores e princípios" },
  { name: "Legislação de Trânsito", icon: "📜", desc: "Leis e normas" },
  { name: "Abordagem e Patrulha", icon: "🚔", desc: "Procedimentos táticos" },
  { name: "Perseguição e Uso da Força", icon: "⚡", desc: "Quando e como agir" },
  { name: "Códigos de Rádio", icon: "📻", desc: "Comunicação operacional" },
  { name: "Situações Práticas", icon: "🎯", desc: "Cenários do dia a dia" },
  { name: "Regras do RP", icon: "🎮", desc: "Regras do servidor" },
  { name: "Operações e Equipe", icon: "🤝", desc: "Trabalho em equipe" },
  { name: "Conhecimentos Específicos", icon: "🏛️", desc: "Hierarquia e relatórios" },
];

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState("");
  const [oderId, setOderId] = useState("");
  const [error, setError] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !oderId.trim()) {
      setError("Preencha todos os campos para continuar.");
      return;
    }
    setError("");
    onStart({ name: name.trim(), oderId: oderId.trim() });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl">
        {/* Header / Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 shadow-2xl shadow-blue-500/30 mb-6 border-4 border-yellow-400/80 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/10" />
            <div className="text-center relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-yellow-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs font-black text-yellow-400 tracking-[0.2em]">PRF</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
            PRF — França RP
          </h1>
          <p className="text-blue-200 text-lg md:text-xl font-medium">
            Polícia Rodoviária Federal
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-700/50">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-300">Sistema de Avaliação Completa</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-blue-800/80 to-blue-900/80 px-6 py-5 border-b border-blue-700/30">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Prova de Ingresso na PRF
            </h2>
            <p className="text-blue-200 text-sm mt-2 leading-relaxed">
              Esta prova avalia o perfil completo do candidato: conduta pessoal, ética, 
              conhecimento técnico, procedimentos de abordagem, uso da força, comunicação via rádio, 
              regras de RP e capacidade de lidar com situações práticas do dia a dia como agente da PRF.
            </p>
          </div>

          {/* Exam Info */}
          <div className="px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700/30 hover:border-yellow-400/20 transition-colors">
              <p className="text-3xl font-bold text-yellow-400">{questions.length}</p>
              <p className="text-xs text-gray-400 mt-1">Questões</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700/30 hover:border-yellow-400/20 transition-colors">
              <p className="text-3xl font-bold text-yellow-400">{PASSING_SCORE}%</p>
              <p className="text-xs text-gray-400 mt-1">Mín. Aprovação</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700/30 hover:border-yellow-400/20 transition-colors">
              <p className="text-3xl font-bold text-yellow-400">{MIN_CORRECT}</p>
              <p className="text-xs text-gray-400 mt-1">Acertos Mín.</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700/30 hover:border-yellow-400/20 transition-colors">
              <p className="text-3xl font-bold text-yellow-400">{categories.length}</p>
              <p className="text-xs text-gray-400 mt-1">Categorias</p>
            </div>
          </div>

          {/* Categories Toggle */}
          <div className="px-6 pb-4">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="w-full flex items-center justify-between text-left group py-1"
            >
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                📋 Categorias da Prova ({categories.length}):
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${showCategories ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {showCategories ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                {categories.map((cat, index) => (
                  <div
                    key={cat.name}
                    className="flex items-center gap-3 px-3 py-2.5 bg-blue-900/30 rounded-xl border border-blue-700/20 hover:border-blue-600/40 transition-all"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-blue-200 font-medium">{cat.name}</p>
                      <p className="text-xs text-gray-500">{cat.desc} • 10 questões</p>
                    </div>
                    <span className="text-[10px] text-gray-600 font-mono shrink-0">
                      {index * 10 + 1}-{(index + 1) * 10}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.map((cat) => (
                  <span
                    key={cat.name}
                    className="px-3 py-1 bg-blue-900/40 text-blue-300 text-xs rounded-full border border-blue-700/30 flex items-center gap-1.5"
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Important Notice */}
          <div className="px-6 pb-4">
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <div>
                  <p className="text-yellow-300 font-semibold text-sm">⚠️ Atenção, Candidato!</p>
                  <ul className="text-yellow-200/70 text-xs mt-1.5 space-y-1.5 list-disc list-inside">
                    <li>A prova avalia seu conhecimento completo para atuar como agente da PRF</li>
                    <li>Leia cada questão com atenção antes de responder</li>
                    <li>É necessário acertar no mínimo <strong>{PASSING_SCORE}%</strong> ({MIN_CORRECT} de {questions.length} questões)</li>
                    <li>O tempo da prova será cronometrado</li>
                    <li>Ao finalizar, tire um <strong>print da tela de resultado</strong> se aprovado</li>
                    <li>Você pode navegar entre as questões e alterar respostas antes de finalizar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-6 pt-2 space-y-4 border-t border-gray-700/30">
            <p className="text-sm text-gray-400 font-medium">Identifique-se para iniciar a prova:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Nome Completo (RP)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João Silva"
                  className="w-full px-4 py-3 bg-gray-900/70 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  ID na Cidade (FiveM)
                </label>
                <input
                  type="text"
                  value={oderId}
                  onChange={(e) => setOderId(e.target.value)}
                  placeholder="Ex: 123"
                  className="w-full px-4 py-3 bg-gray-900/70 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              INICIAR PROVA — {questions.length} QUESTÕES
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600 text-xs space-y-1">
          <p className="text-gray-500">© 2024 PRF — França RP | Todos os direitos reservados</p>
          <p>Servidor FiveM — Cidade França RP</p>
        </div>
      </div>
    </div>
  );
}
