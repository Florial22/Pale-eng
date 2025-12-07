import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, Share2 } from "lucide-react";
import { Category } from "../types";
import { getQuestionsForCategory, QuizQuestion } from "../data/quizQuestions";
import { getKnownWords } from "../utils/progressStorage";
import { playSound } from "../utils/sound";

import rightSfx from "../assets/sounds/right.mp3";
import wrongSfx from "../assets/sounds/wrong.mp3";
import beatSfx from "../assets/sounds/beat.mp3";
import {
  showInterstitialOnce,
  hideBanner,
  showBottomBanner,
} from "../capacitor/admob";

import html2canvas from "html2canvas";

interface QuizPageProps {
  category: Category;
  onBack: () => void;
  soundOn?: boolean; // 🔊 optional, default true
}

type QuizState = "question" | "feedback" | "finished";

const QUESTIONS_PER_QUIZ = 10;
const TIME_PER_QUESTION = 18; // seconds
const BEAT_THRESHOLD = 6; // start heartbeat at 6s

// 🔀 helper to shuffle an array
function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Convert a data URL to a File so we can use Web Share with files
const dataUrlToFile = async (dataUrl: string, filename: string): Promise<File> => {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], filename, { type: "image/png" });
};

export const QuizPage: React.FC<QuizPageProps> = ({
  category,
  onBack,
  soundOn = true,
}) => {
  // 🔻 Hide banner while in quiz, restore on exit
  useEffect(() => {
    hideBanner().catch(() => {});
    return () => {
      showBottomBanner().catch(() => {});
    };
  }, []);

  // Build quiz once when category changes
  const [questions] = useState<QuizQuestion[]>(() => {
    const all = getQuestionsForCategory(category.id);
    const knownIds = getKnownWords(category.id);

    const forKnown = all.filter(
      (q) => q.wordId && knownIds.includes(q.wordId)
    );
    const others = all.filter((q) => !q.wordId || !knownIds.includes(q.wordId));

    const combined: QuizQuestion[] = [...forKnown, ...others];
    const shuffledQuestions = [...combined].sort(() => Math.random() - 0.5);
    const picked = shuffledQuestions.slice(0, QUESTIONS_PER_QUIZ);

    // 🔀 shuffle options for each question & recompute correctIndex
    return picked.map((q) => {
      const indices = q.options.map((_, i) => i); // [0,1,2,3...]
      const shuffledIndices = shuffleArray(indices);

      const newOptions = shuffledIndices.map((i) => q.options[i]);
      const newCorrectIndex = shuffledIndices.indexOf(q.correctIndex);

      return {
        ...q,
        options: newOptions,
        correctIndex: newCorrectIndex,
      };
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [state, setState] = useState<QuizState>("question");
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  // Track which question is currently in feedback mode
  const [feedbackQuestionId, setFeedbackQuestionId] = useState<string | null>(
    null
  );

  // ⏰ track if last answer ended because of timeout
  const [lastWasTimeout, setLastWasTimeout] = useState(false);

  // 🔙 confirm-leave modal
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Drag behaviour
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [placedIndex, setPlacedIndex] = useState<number | null>(null);

  // Heartbeat audio
  const beatAudioRef = useRef<HTMLAudioElement | null>(null);
  const beatPlayingRef = useRef(false);

  // 📸 hidden share card (neutral UI, no green/red)
  const shareCardRef = useRef<HTMLDivElement | null>(null);

  const currentQuestion = questions[currentIndex];
  const isDrag = currentQuestion?.type === "drag";
  const isChoice = currentQuestion?.type === "choice";

  /* ---------------- Helper: stop heartbeat ---------------- */
  const stopBeat = () => {
    if (beatAudioRef.current && beatPlayingRef.current) {
      beatAudioRef.current.pause();
      beatAudioRef.current.currentTime = 0;
      beatPlayingRef.current = false;
    }
  };

  /* ---------------- Helper: exit quiz with ad ---------------- */
  const exitWithAd = async () => {
    // stop any sounds / timers
    stopBeat();
    try {
      await showInterstitialOnce();
    } catch (e) {
      console.warn("Interstitial error on exit:", e);
    }
    onBack();
  };

  /* ---------------- Timer ---------------- */
  useEffect(() => {
    if (state !== "question") return;
    if (showExitConfirm) return; // ⏸ pause timer while confirm modal open

    if (timeLeft <= 0) {
      // ⏰ Time’s up
      handleSubmitAnswer(null, true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, state, currentIndex, showExitConfirm]);

  /* ---------------- Heartbeat sound (last 6 seconds) ---------------- */
  useEffect(() => {
    // If confirm modal is open, make sure beat is off
    if (showExitConfirm) {
      stopBeat();
      return;
    }

    if (!soundOn) {
      stopBeat();
      return;
    }

    const shouldPlayBeat =
      state === "question" &&
      selectedIndex === null &&
      timeLeft > 0 &&
      timeLeft <= BEAT_THRESHOLD;

    if (shouldPlayBeat) {
      if (!beatPlayingRef.current) {
        if (!beatAudioRef.current) {
          beatAudioRef.current = new Audio(beatSfx);
          beatAudioRef.current.loop = true;
        }
        beatAudioRef.current.currentTime = 0;
        beatAudioRef.current.play().catch(() => {});
        beatPlayingRef.current = true;
      }
    } else {
      stopBeat();
    }

    return () => {
      if (state !== "question") {
        stopBeat();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, timeLeft, selectedIndex, soundOn, showExitConfirm]);

  const handleSelect = (index: number) => {
    if (state !== "question") return;
    setSelectedIndex(index);
  };

  // 👉 add `wasTimeout` flag
  const handleSubmitAnswer = (index: number | null, wasTimeout = false) => {
    if (!currentQuestion) return;

    stopBeat();
    setLastWasTimeout(wasTimeout);

    const isCorrect =
      index !== null && index === currentQuestion.correctIndex;

    if (soundOn) {
      if (isCorrect) {
        playSound(rightSfx);
      } else {
        playSound(wrongSfx);
      }
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // For timeout, we still want to SHOW the correct answer in UI
    if (wasTimeout && index === null) {
      setSelectedIndex(currentQuestion.correctIndex);
    } else {
      setSelectedIndex(index);
    }

    setFeedbackQuestionId(currentQuestion.id); // 🔑 feedback is for THIS question
    setState("feedback");
    setPlacedIndex(null);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setState("finished");
      setFeedbackQuestionId(null);
      setLastWasTimeout(false);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
      setDraggedIndex(null);
      setPlacedIndex(null);
      setTimeLeft(TIME_PER_QUESTION);
      setFeedbackQuestionId(null);
      setLastWasTimeout(false);
      setState("question");
    }
  };

  // User drops an option on the blank
  const handleDropOnBlank = () => {
    if (state !== "question") return;
    if (draggedIndex === null) return;
    setSelectedIndex(draggedIndex);
    setPlacedIndex(draggedIndex);
    setTimeout(() => {
      handleSubmitAnswer(draggedIndex, false);
      setDraggedIndex(null);
    }, 200);
  };

  /* ---------------- Share current question as PNG (neutral card) ---------------- */
  const handleShareQuestion = async () => {
    if (!shareCardRef.current || !currentQuestion) return;

    try {
      const canvas = await html2canvas(shareCardRef.current, {
        backgroundColor: "#020617", // nice dark slate background
        scale: 2,
      });

      const dataUrl = canvas.toDataURL("image/png");

      // build nice filename: pale_[category]_[3digits].png
      const safeCategory = category.label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      const randomNum = Math.floor(100 + Math.random() * 900); // 100–999
      const filename = `pale_${safeCategory || "quiz"}_${randomNum}.png`;

      const nav = navigator as any;

      // Try Web Share API with FILES (best for mobile share sheet)
      if (nav.share) {
        try {
          const file = await dataUrlToFile(dataUrl, filename);

          if (nav.canShare && nav.canShare({ files: [file] })) {
            await nav.share({
              files: [file],
              title: "Pale – Quiz question",
              text: `${category.label} • Practice this question in Pale 📚`,
            });
            return;
          } else if (!nav.canShare) {
            // Older / simpler implementations: share text only
            await nav.share({
              title: "Pale – Quiz question",
              text: `${category.label} • Practice this question in Pale 📚`,
            });
            // (no image, but at least share sheet appears)
            return;
          }
        } catch (shareErr) {
          console.warn("Web Share failed, falling back to download:", shareErr);
        }
      }

      // Fallback: download PNG so user can share manually
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error generating share image:", err);
    }
  };

  /* ---------------- Edge: no questions ---------------- */
  if (!currentQuestion && questions.length === 0) {
    return (
      <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900 px-4 pt-4 pb-6">
        <div className="flex items-center mb-4 gap-3">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-100 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {category.label} Quiz
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-center text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md max-w-xs">
            <p className="text-slate-700 dark:text-slate-200 text-sm">
              No quiz questions available for this category yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- Finished ---------------- */
  if (state === "finished") {
    const total = questions.length || QUESTIONS_PER_QUIZ;
    const ratio = total > 0 ? score / total : 0;
    let message = "Nice work! Keep practicing this category.";

    if (ratio <= 0.4) {
      message = "Good start. Keep practicing and you'll improve quickly.";
    } else if (ratio >= 0.9) {
      message = "Amazing! You really know these expressions.";
    }

    const handleResultBack = async () => {
      await exitWithAd();
    };

    return (
      <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900 px-4 pt-4 pb-6">
        {/* Top bar */}
        <div className="flex items-center mb-4 gap-3">
          <button
            onClick={handleResultBack}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-100 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
              Quiz result
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {category.label}
            </span>
          </div>
        </div>

        {/* Result card */}
        <div className="flex-1 flex items-center justify-center text-center px-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md max-w-xs w-full">
            <div className="text-4xl mb-2">🎯</div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
              {score}/{questions.length}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              {message}
            </p>
            <button
              onClick={handleResultBack}
              className="w-full mt-2 px-4 py-2 rounded-xl bg-indigo-500 text-white text-sm font-semibold active:scale-95"
            >
              Back to categories
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isBlankView = isDrag;

  /* ---------------- Active question UI ---------------- */
  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900 px-4 pt-4 pb-6 relative">
      {/* Hidden neutral share card (for PNG export only) */}
      <div
        ref={shareCardRef}
        className="fixed -left-[9999px] top-0 w-[360px] rounded-3xl bg-slate-950 text-slate-50 px-5 py-5"
      >
        {/* HEADER: Pale + category */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Pale
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              {category.label} · Quiz question
            </span>
          </div>
        </div>

        {/* QUESTION */}
        <p className="text-sm font-semibold mb-4 leading-relaxed">
          {currentQuestion.prompt}
        </p>

        {/* ANSWERS (A. / B. / C. / D.) */}
        <div className="flex flex-col gap-2">
          {currentQuestion.options.map((opt, idx) => (
            <div
              key={idx}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm flex items-start gap-2"
            >
              <span className="text-[11px] font-semibold text-emerald-300 mt-[1px]">
                {String.fromCharCode(65 + idx)}.
              </span>
              <span className="text-slate-100 text-[13px] leading-snug">
                {opt}
              </span>
            </div>
          ))}
        </div>

        {/* FOOTER MARKETING */}
        <div className="mt-6 pt-3 border-t border-slate-800">
          <p className="text-[11px] text-slate-400 text-center leading-snug">
            Practice English every day with{" "}
            <span className="text-emerald-300 font-semibold">Pale</span>. <br />
            Download the app and keep learning. 📚
          </p>
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center mb-4 gap-3">
        <button
          onClick={() => setShowExitConfirm(true)}
          className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-100 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Quiz
          </span>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {category.label}
          </span>
        </div>

        {/* Question counter + timer */}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-300">
            {currentIndex + 1}/{questions.length}
          </span>
          <div className="w-9 h-9 rounded-full border-2 border-indigo-400 flex items-center justify-center text-xs font-semibold text-indigo-600 dark:text-indigo-300">
            {timeLeft}s
          </div>
        </div>
      </div>

      {/* Question body */}
      <div className="flex-1 flex flex-col items-stretch justify-start mt-4 pb-16">
        {/* Instruction */}
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 text-center">
          {isDrag ? "Choose the right answer." : "Choose the right answer."}
        </p>

        {/* ⏰ Timeout banner */}
        {state === "feedback" && lastWasTimeout && (
          <div className="mb-3 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200 text-[11px] font-semibold text-amber-800 text-center">
            ⏰ Time&apos;s up. The correct answer is highlighted in green.
          </div>
        )}

        {/* Sentence / Prompt card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-4 mb-4">
          {isBlankView ? (
            <p className="text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
              {currentQuestion.prompt.split("____").map((chunk, idx, arr) => (
                <React.Fragment key={idx}>
                  {chunk}
                  {idx < arr.length - 1 && (
                    <span
                      className="inline-flex items-center justify-center px-3 py-1 mx-1 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200 text-xs font-semibold cursor-pointer transition-transform"
                      onDragOver={(e) => {
                        if (state === "question") e.preventDefault();
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        handleDropOnBlank();
                      }}
                    >
                      {selectedIndex !== null
                        ? currentQuestion.options[selectedIndex]
                        : "________"}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
          ) : (
            <p className="text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
              {currentQuestion.prompt}
            </p>
          )}
        </div>

        {/* Options */}
        <div
          key={currentQuestion.id}
          className="mt-auto flex flex-wrap gap-2 justify-center"
        >
          {currentQuestion.options.map((opt, index) => {
            const isSelected = selectedIndex === index;
            const isCorrect = index === currentQuestion.correctIndex;

            const isFeedbackForThisQuestion =
              state === "feedback" && feedbackQuestionId === currentQuestion.id;

            let base =
              "inline-flex items-center justify-center px-3 py-2 rounded-full border text-base transition-transform active:scale-[0.97] ";
            let style =
              "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100";

            if (state === "question") {
              if (isSelected && !isDrag) {
                style =
                  "bg-indigo-50 dark:bg-indigo-900/40 border-indigo-400 text-indigo-700 dark:text-indigo-200";
              }
            } else if (isFeedbackForThisQuestion) {
              if (isCorrect) {
                // ✅ always show correct answer in green (even on timeout)
                style =
                  "bg-green-50 dark:bg-green-900/40 border-green-500 text-green-700 dark:text-green-200";
              } else if (!lastWasTimeout && isSelected && !isCorrect) {
                // ❌ red only if user actually picked a wrong answer
                style =
                  "bg-red-50 dark:bg-red-900/40 border-red-500 text-red-700 dark:text-red-200";
              } else {
                // dim others
                style =
                  "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 opacity-60";
              }
            }

            const canDrag = isDrag && state === "question";

            const flyClass =
              isDrag && placedIndex === index
                ? "opacity-0 scale-75 -translate-y-1 transition-all duration-200"
                : "opacity-100 scale-100 transition-all duration-200";

            return (
              <button
                key={index}
                type="button"
                disabled={state !== "question"}
                draggable={canDrag}
                onDragStart={() => {
                  if (!canDrag) return;
                  setDraggedIndex(index);
                  setSelectedIndex(index);
                }}
                onClick={() => {
                  if (state !== "question") return;
                  if (isDrag) {
                    setSelectedIndex(index);
                    setPlacedIndex(index);
                    setTimeout(() => {
                      handleSubmitAnswer(index, false);
                    }, 200);
                  } else {
                    handleSelect(index);
                    handleSubmitAnswer(index, false);
                  }
                }}
                className={base + style + " " + flyClass}
              >
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ⬆️ Bottom sheet for feedback: Share icon + big Continue */}
      {state === "feedback" && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-0 z-20 w-full max-w-[480px] px-3 pb-3">
          <div className="rounded-3xl bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-700 shadow-[0_-8px_20px_rgba(15,23,42,0.35)] px-4 pt-2 pb-3">
            {/* top row with share icon on the right */}
            <div className="flex justify-end mb-1">
              <button
                type="button"
                onClick={handleShareQuestion}
                className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center active:scale-95"
              >
                <Share2 className="w-4 h-4 text-emerald-700 dark:text-emerald-100" />
              </button>
            </div>

            {/* big Continue button */}
            <button
              onClick={handleNext}
              className="w-full mt-1 px-4 py-3 rounded-2xl bg-emerald-500 text-white text-sm font-semibold active:scale-95 tracking-wide"
            >
              CONTINUE
            </button>
          </div>
        </div>
      )}

      {/* 🔙 Exit confirm modal */}
      {showExitConfirm && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 px-6">
          <div className="w-full max-w-xs rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-700 p-4">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
              Leave this quiz?
            </h2>
            <p className="text-[13px] text-slate-600 dark:text-slate-300 mb-4">
              Your current progress in this quiz will be lost.
            </p>
            <div className="flex gap-2 justify-end">
              <button
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 active:scale-95"
                onClick={() => setShowExitConfirm(false)}
              >
                Keep practicing
              </button>
              <button
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-rose-500 active:scale-95"
                onClick={async () => {
                  setShowExitConfirm(false);
                  await exitWithAd();
                }}
              >
                Quit quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
