export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

// Optional: languages you explicitly support for translations
export type SupportedTranslationLang = 'fr' | 'es';

// Global preference stored in App & Settings
export type TranslationPreference =
  | 'auto'   // use system language automatically (fr/es)
  | 'fr'     // force French translation
  | 'es'     // force Spanish translation
  | 'none';  // hide translation entirely

export interface WordCardData {
  id: string;
  english: string;

  // Example: { fr: "se réveiller", es: "despertarse" }
  translations?: Partial<Record<SupportedTranslationLang | string, string>>;

  definition?: string;
  example?: string;

  type: 'Word' | 'Idiom' | 'Phrasal Verb';
  difficulty: Difficulty;
}

export enum SwipeDirection {
  LEFT = 'left',
  RIGHT = 'right',
  NONE = 'none',
}

export interface DeckState {
  cards: WordCardData[];
  swipedRight: number;
  swipedLeft: number;
}

export interface Category {
  id: string;
  name: string;
  label: string;
  subLabel: string;
  icon: string;
  color: string;
}