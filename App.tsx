import { useState, useEffect } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ExamScreen } from "./components/ExamScreen";
import { ResultScreen } from "./components/ResultScreen";

export type AppScreen = "welcome" | "exam" | "result";

export interface UserData {
  name: string;
  oderId: string;
}

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  passed: boolean;
  answers: number[];
  timeSpent: number; // in seconds
}

export function App() {
  const [screen, setScreen] = useState<AppScreen>("welcome");
  const [userData, setUserData] = useState<UserData>({ name: "", oderId: "" });
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [fadeIn, setFadeIn] = useState(true);

  const changeScreen = (newScreen: AppScreen) => {
    setFadeIn(false);
    setTimeout(() => {
      setScreen(newScreen);
      window.scrollTo({ top: 0, behavior: "instant" });
      setFadeIn(true);
    }, 300);
  };

  const handleStartExam = (data: UserData) => {
    setUserData(data);
    changeScreen("exam");
  };

  const handleFinishExam = (result: ExamResult) => {
    setExamResult(result);
    changeScreen("result");
  };

  const handleRetry = () => {
    setExamResult(null);
    changeScreen("welcome");
  };

  useEffect(() => {
    // Set page title based on screen
    const titles: Record<AppScreen, string> = {
      welcome: "PRF — Prova de Ingresso | França RP",
      exam: `PRF — Prova em Andamento | ${userData.name || "França RP"}`,
      result: `PRF — ${examResult?.passed ? "APROVADO ✅" : "Resultado"} | França RP`,
    };
    document.title = titles[screen];
  }, [screen, userData.name, examResult?.passed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white selection:bg-yellow-400/30 selection:text-yellow-200">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-500/[0.03] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/[0.02] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-green-500/[0.02] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4.5s" }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        className={`relative z-10 transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
      >
        {screen === "welcome" && <WelcomeScreen onStart={handleStartExam} />}
        {screen === "exam" && (
          <ExamScreen userData={userData} onFinish={handleFinishExam} />
        )}
        {screen === "result" && examResult && (
          <ResultScreen
            userData={userData}
            result={examResult}
            onRetry={handleRetry}
          />
        )}
      </div>
    </div>
  );
}
