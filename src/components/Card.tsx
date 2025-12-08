// src/components/Card.tsx
import React, { useState } from 'react';
import { Volume2, RefreshCw } from 'lucide-react';
import { WordCardData, TranslationPreference } from '../types';

interface CardProps {
  data: WordCardData;
  active: boolean;
  style?: React.CSSProperties;
  onMouseDown?: (e: React.MouseEvent | React.TouchEvent) => void;
  translationPreference: TranslationPreference; // ✅ NEW
}

export const Card: React.FC<CardProps> = ({
  data,
  active,
  style,
  onMouseDown,
  translationPreference, // ✅ NEW
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);

  // 🌍 Decide which translation language to use based on user preference
  const translations = data.translations || {};

  let preferredLang: 'fr' | 'es' | null = null;

  if (translationPreference === 'fr') {
    preferredLang = 'fr';
  } else if (translationPreference === 'es') {
    preferredLang = 'es';
  } else if (translationPreference === 'none') {
    preferredLang = null;
  } else if (translationPreference === 'auto') {
    let systemLang = 'en';
    if (typeof navigator !== 'undefined' && navigator.language) {
      systemLang = navigator.language.toLowerCase();
    }
    if (systemLang.startsWith('fr')) {
      preferredLang = 'fr';
    } else if (systemLang.startsWith('es')) {
      preferredLang = 'es';
    } else {
      preferredLang = null;
    }
  }

  const translationText =
    preferredLang && translations ? translations[preferredLang] : undefined;

  const hasTranslation = Boolean(translationText);
  const hasDefinition = Boolean(data.definition);
  const hasExample = Boolean(data.example);

  const backHeaderLabel =
    preferredLang === 'fr'
      ? 'Français'
      : preferredLang === 'es'
      ? 'Español'
      : 'Definition';

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
                active
                  ? 'hover:bg-indigo-100 active:scale-95 cursor-pointer pointer-events-auto'
                  : ''
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
            <span>{backHeaderLabel}</span>
            <RefreshCw className="w-3 h-3" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-3 px-1 text-center">
            {/* Main line: translation OR definition */}
            {hasTranslation ? (
              <h2 className="text-xl font-bold break-words max-w-full leading-tight">
                {translationText}
              </h2>
            ) : hasDefinition ? (
              <h2 className="text-base font-semibold break-words max-w-full leading-snug">
                {data.definition}
              </h2>
            ) : (
              <h2 className="text-base font-semibold break-words max-w-full leading-snug opacity-80">
                No translation available
              </h2>
            )}

            {/* Definition under translation, if we have both */}
            {hasTranslation && hasDefinition && (
              <p className="text-[11px] text-indigo-100/90 leading-snug px-1">
                {data.definition}
              </p>
            )}

            {/* Example bubble */}
            {hasExample && (
              <div className="bg-white/10 p-3 rounded-lg text-xs font-light italic leading-relaxed backdrop-blur-sm">
                "{data.example}"
              </div>
            )}
          </div>

          <div className="text-indigo-200 text-[10px]">Tap to flip back</div>
        </div>
      </div>
    </div>
  );
};
