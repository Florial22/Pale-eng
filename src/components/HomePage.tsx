import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../data/categories';
import * as Icons from 'lucide-react';
import { tapHaptic } from '../utils/haptics';

interface HomePageProps {
  onSelectCategory: (category: Category) => void;
  username?: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCategory,
  username,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900 animate-fade-in">
      {/* 🔵 FIXED HEADER */}
      <div
        className="
          fixed top-0 left-0 w-full z-10 pt-safe
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
            Hello{username ? `, ${username}` : ''}{' '}
            <span className="inline-block origin-bottom-right">👋</span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">
            What do you want to practice today?
          </p>
        </div>

        {/* Settings Button */}
        <button
          onClick={() =>
            onSelectCategory({
              id: 'settings',
              name: '',
              label: '',
              subLabel: '',
              icon: '',
              color: '',
            })
          }
          className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-100 active:scale-95"
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
              <button
                key={cat.id}
                onClick={async () => {
                  await tapHaptic();
                  onSelectCategory(cat);
                }}
                className="flex flex-col items-start p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-indigo-100 dark:hover:border-indigo-400 active:scale-95 transition-all group"
              >
                <div
                  className={`w-9 h-9 rounded-full ${cat.color} text-white flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                  {cat.label}
                </span>
                <span className="text-[11px] text-slate-400 dark:text-slate-400 font-medium mt-1">
                  {cat.subLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
