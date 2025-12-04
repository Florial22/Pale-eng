import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Category, DeckState, WordCardData } from '../types';
import { Deck } from './Deck';
import { decksByCategoryId } from '../data/wordDecks';
import {
  getKnownWords,
  addKnownWord,
  removeKnownWord,
} from '../utils/progressStorage';

interface PracticePageProps {
  category: Category;
  onBack: () => void;
  soundOn: boolean; 
}

type PracticeMode = 'learn' | 'review';

export const PracticePage: React.FC<PracticePageProps> = ({
  category,
  onBack,
  soundOn,
}) => {
  const [mode, setMode] = useState<PracticeMode>('learn');
  const [state, setState] = useState<DeckState>({
    cards: [],
    swipedLeft: 0,
    swipedRight: 0,
  });
  const [isLoading] = useState(false);

  const loadCardsForMode = (currentMode: PracticeMode): DeckState => {
    const allCards = decksByCategoryId[category.id] || [];
    const knownIds = getKnownWords(category.id);

    const cards =
      currentMode === 'learn'
        ? allCards.filter((card) => !knownIds.includes(card.id))
        : allCards.filter((card) => knownIds.includes(card.id));

    return {
      cards,
      swipedLeft: 0,
      swipedRight: 0,
    };
  };

  useEffect(() => {
    setState(loadCardsForMode(mode));
  }, [mode, category.id]);

  const handleSwipeLeft = (card: WordCardData) => {
    if (mode === 'review') {
      removeKnownWord(category.id, card.id);
    }

    setState(prev => ({
      ...prev,
      cards: prev.cards.filter(c => c.id !== card.id),
      swipedLeft: prev.swipedLeft + 1,
    }));
  };

  const handleSwipeRight = (card: WordCardData) => {
    if (mode === 'learn') {
      addKnownWord(category.id, card.id);
    }

    setState(prev => ({
      ...prev,
      cards: prev.cards.filter(c => c.id !== card.id),
      swipedRight: prev.swipedRight + 1,
    }));
  };

  return (
    <div className="w-full h-full flex flex-col px-4 pt-4 pb-6 bg-slate-50 dark:bg-slate-900 transition-colors">

      {/* Top bar */}
      <div className="flex items-center mb-4 gap-3">
        <button
          onClick={() => {
            onBack();
          }}
          className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-100 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Category
          </span>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {category.label}
          </span>
        </div>

        {/* Learn / Review toggle */}
        <div className="ml-auto flex bg-slate-100 dark:bg-slate-800 rounded-full p-1 text-xs font-medium">
          <button
            onClick={() => setMode('learn')}
            className={
              'px-3 py-1 rounded-full transition ' +
              (mode === 'learn'
                ? 'bg-white dark:bg-slate-900 shadow text-slate-900 dark:text-slate-50'
                : 'text-slate-500 dark:text-slate-300')
            }
          >
            Learn
          </button>
          <button
            onClick={() => setMode('review')}
            className={
              'px-3 py-1 rounded-full transition ' +
              (mode === 'review'
                ? 'bg-white dark:bg-slate-900 shadow text-slate-900 dark:text-slate-50'
                : 'text-slate-500 dark:text-slate-300')
            }
          >
            Review
          </button>
        </div>
      </div>

      {/* Deck */}
      <div className="flex-1 flex flex-col items-center justify-center pb-20">
        <Deck
          cards={state.cards}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
          isLoading={isLoading}
          mode={mode}
          soundOn={soundOn}
        />
      </div>

      {/* Stats (LEFT = don't know / RIGHT = know) */}
      <div className="mt-6 grid grid-cols-2 gap-3 text-xs">

        {/* LEFT: Don't know / Forgot */}
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-700 rounded-xl px-3 py-2 flex items-center justify-between">
          <span className="text-red-700 dark:text-red-300 font-medium">
            {mode === 'learn' ? "I don't know it" : 'Forgot it'}
          </span>
          <span className="text-red-800 dark:text-red-200 font-bold text-sm">
            {state.swipedLeft}
          </span>
        </div>

        {/* RIGHT: Know / Still Know */}
        <div className="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-700 rounded-xl px-3 py-2 flex items-center justify-between">
          <span className="text-green-700 dark:text-green-300 font-medium">
            {mode === 'learn' ? 'I know it' : 'Still know it'}
          </span>
          <span className="text-green-800 dark:text-green-200 font-bold text-sm">
            {state.swipedRight}
          </span>
        </div>
      </div>
    </div>
  );
};
