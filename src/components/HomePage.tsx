import React, { useState } from "react";
import { Category } from "../types";
import { CATEGORIES } from "../data/categories";
import * as Icons from "lucide-react";
import { tapHaptic } from "../utils/haptics";

interface HomePageProps {
  onSelectCategory: (category: Category) => void;   // normal practice
  onOpenQuiz?: (category: Category) => void;        // optional quiz callback
  onOpenSettings?: () => void;                      // open Settings screen
  username?: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCategory,
  onOpenQuiz,
  onOpenSettings,
  username,
}) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handlePractice = async (cat: Category) => {
    await tapHaptic();
    onSelectCategory(cat);
  };

  const handleQuiz = async (cat: Category) => {
    if (!onOpenQuiz) return;
    await tapHaptic();
    onOpenQuiz(cat);
    setOpenMenuId(null);
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900 animate-fade-in relative">
      {/* 🔵 FIXED HEADER */}
      <div
        className="
          fixed top-0 left-0 w-full z-20 pt-safe
          bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm
          px-6 pt-6 pb-4
          flex justify-between items-start
          border-b border-slate-100/50 dark:border-slate-800/60
          shadow-[0_2px_8px_rgba(0,0,0,0.05)]
        "
      >
        {/* Title + Subtitle */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Hello{username ? `, ${username}` : ""}{" "}
            <span className="inline-block origin-bottom-right">👋</span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">
            What do you want to practice today?
          </p>
        </div>

        {/* Settings Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenSettings?.();
          }}
          className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 
                     border border-slate-100 dark:border-slate-700 shadow-sm 
                     flex items-center justify-center text-slate-400 
                     dark:text-slate-300 hover:text-slate-600 
                     dark:hover:text-slate-100 active:scale-95"
        >
          <Icons.Cog className="w-5 h-5" />
        </button>
      </div>

      {/* 🔽 CONTENT BELOW HEADER */}
      <div className="mt-[120px] px-6 pb-10">
        <div className="grid grid-cols-2 gap-3 pb-6">
          {CATEGORIES.map((cat) => {
            const Icon = (Icons as any)[cat.icon];

            return (
              <div
                key={cat.id}
                className="relative"
                // tap empty area of card container = close menu
                onClick={() => {
                  if (openMenuId) setOpenMenuId(null);
                }}
              >
                {/* Main card click = PRACTICE */}
                <button
                  onClick={async (e) => {
                    e.stopPropagation();
                    if (openMenuId) {
                      setOpenMenuId(null);
                      return;
                    }
                    await handlePractice(cat);
                  }}
                  className="w-full flex flex-col items-start p-3 bg-white 
                             dark:bg-slate-800 rounded-2xl shadow-sm 
                             border border-slate-100 dark:border-slate-700 
                             hover:border-indigo-100 dark:hover:border-indigo-400 
                             active:scale-95 transition-all group"
                >
                  <div className="flex w-full items-start">
                    <div
                      className={`w-9 h-9 rounded-full ${cat.color} text-white 
                                  flex items-center justify-center mb-2 shadow-md 
                                  group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* ⋮ menu button — bigger circular hit area */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenuId((prev) =>
                          prev === cat.id ? null : cat.id
                        );
                      }}
                      className="
                        ml-auto mt-1 w-9 h-9 rounded-full flex items-center 
                        justify-center bg-slate-100/60 dark:bg-slate-800 
                        border border-slate-200 dark:border-slate-700 
                        text-slate-400 dark:text-slate-400 
                        hover:bg-slate-200/80 dark:hover:bg-slate-700/80 
                        active:scale-95
                      "
                    >
                      <Icons.MoreVertical className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                    {cat.label}
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-400 font-medium mt-1">
                    {cat.subLabel}
                  </span>
                </button>

                {/* POPUP MENU */}
                {openMenuId === cat.id && (
                  <div
                    className="
                      absolute right-2 top-2 mt-8
                      w-40 rounded-xl bg-white dark:bg-slate-800
                      border border-slate-200 dark:border-slate-700
                      shadow-lg z-30
                    "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="w-full text-left px-3 py-2 text-xs text-slate-700 
                                 dark:text-slate-100 hover:bg-slate-50 
                                 dark:hover:bg-slate-700 rounded-t-xl"
                      onClick={async () => {
                        await handlePractice(cat);
                        setOpenMenuId(null);
                      }}
                    >
                      Practice deck
                    </button>

                    <button
                      className="w-full text-left px-3 py-2 text-xs 
                                 text-indigo-600 dark:text-indigo-300 
                                 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 
                                 rounded-b-xl disabled:opacity-40"
                      disabled={!onOpenQuiz}
                      onClick={async () => {
                        if (!onOpenQuiz) return;
                        await handleQuiz(cat);
                      }}
                    >
                      Quiz (10 questions)
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
