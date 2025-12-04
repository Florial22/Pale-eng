// src/components/Card.tsx
import React, { useState } from 'react';
import { Volume2, RefreshCw } from 'lucide-react';
import { WordCardData } from '../types';

interface CardProps {
  data: WordCardData;
  active: boolean;
  style?: React.CSSProperties;
  onMouseDown?: (e: React.MouseEvent | React.TouchEvent) => void;
}

export const Card: React.FC<CardProps> = ({ data, active, style, onMouseDown }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);

  const handleFlip = (e: React.MouseEvent | React.TouchEvent) => {
    if (!active) return;
    if ((e.target as HTMLElement).closest('.audio-btn')) return;
    setIsFlipped((prev) => !prev);
  };

  const handlePlayAudio = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!active || loadingAudio) return;

    try {
      setLoadingAudio(true);
      const utter = new SpeechSynthesisUtterance(data.english);
      utter.lang = 'en-US';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    } finally {
      setLoadingAudio(false);
    }
  };

  return (
    <div
      className={`absolute w-full h-full perspective-1000 ${
        active ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
      }`}
      style={style}
      onMouseDown={active ? onMouseDown : undefined}
      onTouchStart={active ? onMouseDown : undefined}
    >
      <div
        className={`relative w-full h-full text-center transition-transform duration-500 transform-style-3d shadow-lg rounded-2xl ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full bg-white rounded-2xl backface-hidden flex flex-col items-center justify-between p-4 border border-slate-100">
          <div className="w-full flex justify-between items-center text-slate-400 text-[10px] font-semibold uppercase tracking-wider">
            <span>{data.type}</span>
            <RefreshCw className="w-3 h-3" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-slate-800 break-words max-w-full leading-tight px-1">
              {data.english}
            </h2>

            <button
              onClick={handlePlayAudio}
              className={`audio-btn w-11 h-11 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm transition-all ${
                active ? 'hover:bg-indigo-100 active:scale-95 cursor-pointer pointer-events-auto' : ''
              }`}
            >
              {loadingAudio ? (
                <span className="text-[10px] animate-pulse">...</span>
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="text-slate-300 text-[10px]">Tap to flip</div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl backface-hidden rotate-y-180 flex flex-col items-center justify-between p-4 text-white">
          <div className="w-full flex justify-between items-center text-indigo-100 text-[10px] font-semibold uppercase tracking-wider">
            <span>Français</span>
            <RefreshCw className="w-3 h-3" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <h2 className="text-xl font-bold break-words max-w-full leading-tight px-1">
              {data.french}
            </h2>
            <div className="bg-white/10 p-3 rounded-lg text-xs font-light italic leading-relaxed backdrop-blur-sm">
              "{data.example}"
            </div>
          </div>

          <div className="text-indigo-200 text-[10px]">Tap to flip back</div>
        </div>
      </div>
    </div>
  );
};
