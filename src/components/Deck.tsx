import React, { useState, useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import { WordCardData, TranslationPreference } from '../types';
import { Card } from './Card';
import swipeSound from '../assets/sounds/swipe_rl.mp3';
import { playSound } from '../utils/sound';

type DeckMode = 'learn' | 'review';

interface DeckProps {
  cards: WordCardData[];
  onSwipeLeft: (card: WordCardData) => void;
  onSwipeRight: (card: WordCardData) => void;
  isLoading: boolean;
  mode: DeckMode;
  soundOn: boolean;
  translationPreference: TranslationPreference; // ✅ NEW
}

export const Deck: React.FC<DeckProps> = ({
  cards,
  onSwipeLeft,
  onSwipeRight,
  isLoading,
  mode,
  soundOn,
  translationPreference, // ✅ NEW
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const offsetRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);

  const activeCard = cards[0];
  const nextCard = cards[1];
  const thirdCard = cards[2];

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!activeCard || isAnimating) return;
    if ((e.target as HTMLElement).closest('.audio-btn')) return;

    const clientX =
      'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    dragStartRef.current = { x: clientX, y: clientY };
    setIsDragging(true);
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!dragStartRef.current) return;

    const clientX =
      'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clientY =
      'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

    const newOffset = {
      x: clientX - dragStartRef.current.x,
      y: clientY - dragStartRef.current.y,
    };

    offsetRef.current = newOffset;
    setOffset(newOffset);
  };

  const handleEnd = () => {
    if (!dragStartRef.current || !activeCard) return;

    const threshold = 80;
    const screenWidth = window.innerWidth;
    const currentX = offsetRef.current.x;

    setIsDragging(false);
    dragStartRef.current = null;

    if (currentX > threshold) {
      if (soundOn) playSound(swipeSound);
      animateOut(
        screenWidth + 160,
        offsetRef.current.y * 1.5,
        () => onSwipeRight(activeCard)
      );
    } else if (currentX < -threshold) {
      if (soundOn) playSound(swipeSound);
      animateOut(
        -screenWidth - 160,
        offsetRef.current.y * 1.5,
        () => onSwipeLeft(activeCard)
      );
    } else {
      animateBack();
    }
  };

  const animateOut = (endX: number, endY: number, callback: () => void) => {
    setIsAnimating(true);
    setOffset({ x: endX, y: endY });
    offsetRef.current = { x: endX, y: endY };

    setTimeout(() => {
      callback();
      requestAnimationFrame(() => {
        setIsAnimating(false);
        setOffset({ x: 0, y: 0 });
        offsetRef.current = { x: 0, y: 0 };
      });
    }, 200);
  };

  const animateBack = () => {
    setIsAnimating(true);
    setOffset({ x: 0, y: 0 });
    offsetRef.current = { x: 0, y: 0 };
    setTimeout(() => setIsAnimating(false), 250);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  const swipeProgress = Math.min(Math.abs(offset.x) / 320, 1);
  const nextCardScale = 0.94 + 0.06 * swipeProgress;
  const nextCardY = 14 * (1 - swipeProgress);

  if (cards.length === 0 && isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center animate-pulse">
          <div className="w-[260px] h-[340px] bg-slate-200 rounded-2xl" />
          <p className="mt-4 text-slate-400 text-sm font-medium">
            Loading cards...
          </p>
        </div>
      </div>
    );
  }

  if (cards.length === 0 && !isLoading) {
    if (mode === 'learn') {
      return (
        <div className="w-full h-full flex items-center justify-center text-center p-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xs">
            <div className="text-5xl mb-2">🎉</div>
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              Great job!
            </h2>
            <p className="text-slate-500 text-sm">
              You’ve learned all the words in this category.  
              You can review them in Review mode.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full flex items-center justify-center text-center p-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xs">
          <div className="text-4xl mb-2">📚</div>
          <h2 className="text-lg font-bold text-slate-800 mb-1">
            No words to review
          </h2>
          <p className="text-slate-500 text-sm">
            Nothing to review right now — learn new words first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[300px] h-[400px] mx-auto mt-4 perspective-1000">
      
      {/* 3rd card */}
      {thirdCard && (
        <div
          className="absolute top-0 w-full h-full bg-white rounded-2xl border border-slate-100 shadow-sm"
          style={{
            zIndex: 0,
            transform: 'scale(0.9) translateY(28px)',
            opacity: 0.28,
          }}
        />
      )}

      {/* 2nd card */}
      {nextCard && (
        <div
          className="absolute top-0 w-full h-full transition-transform duration-75"
          style={{
            zIndex: 1,
            transform: `scale(${nextCardScale}) translateY(${nextCardY}px)`,
          }}
        >
          <Card
            key={nextCard.id}
            data={nextCard}
            active={false}
            translationPreference={translationPreference} // ✅ NEW
          />
          <div
            className="absolute inset-0 bg-white/40 rounded-2xl transition-opacity duration-75 pointer-events-none"
            style={{ opacity: 1 - swipeProgress }}
          />
        </div>
      )}

      {/* Active card */}
      {activeCard && (
        <div
          className="absolute top-0 w-full h-full z-10"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.x * 0.05}deg)`,
            transition: isDragging
              ? 'none'
              : 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          <Card
            key={activeCard.id}
            data={activeCard}
            active={true}
            onMouseDown={handleStart}
            translationPreference={translationPreference} // ✅ NEW
          />

          {/* LABELS */}
          {mode === 'learn' ? (
            <>
              {/* LEFT = "Don’t know it" */}
              <div
                className="absolute top-0 left-4 border-4 border-red-500 text-red-500 rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-widest pointer-events-none transform -rotate-12 transition-opacity"
                style={{
                  opacity: offset.x < -20 ? Math.min(-offset.x / 100, 1) : 0,
                }}
              >
                Don’t know it
              </div>

              {/* RIGHT = "Know it" */}
              <div
                className="absolute top-0 right-4 border-4 border-green-500 text-green-500 rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-widest pointer-events-none transform rotate-12 transition-opacity"
                style={{
                  opacity: offset.x > 20 ? Math.min(offset.x / 100, 1) : 0,
                }}
              >
                Know it
              </div>
            </>
          ) : (
            <>
              {/* LEFT = "Forgot it" */}
              <div
                className="absolute top-0 left-4 border-4 border-red-500 text-red-500 rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-widest pointer-events-none transform -rotate-12 transition-opacity"
                style={{
                  opacity: offset.x < -20 ? Math.min(-offset.x / 100, 1) : 0,
                }}
              >
                Forgot it
              </div>

              {/* RIGHT = "Still know it" */}
              <div
                className="absolute top-0 right-4 border-4 border-green-500 text-green-500 rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-widest pointer-events-none transform rotate-12 transition-opacity"
                style={{
                  opacity: offset.x > 20 ? Math.min(offset.x / 100, 1) : 0,
                }}
              >
                Still know it
              </div>
            </>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="absolute -bottom-16 w-full flex justify-between px-4">
        <button
          onClick={() => {
            if (activeCard && !isAnimating) {
              if (soundOn) playSound(swipeSound);
              animateOut(
                -window.innerWidth - 160,
                0,
                () => onSwipeLeft(activeCard)
              );
            }
          }}
          disabled={isAnimating || !activeCard}
          className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-200 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <X className="w-5 h-5" />
        </button>

        <button
          onClick={() => {
            if (activeCard && !isAnimating) {
              if (soundOn) playSound(swipeSound);
              animateOut(
                window.innerWidth + 160,
                0,
                () => onSwipeRight(activeCard)
              );
            }
          }}
          disabled={isAnimating || !activeCard}
          className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-200 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed}"
        >
          <Check className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
