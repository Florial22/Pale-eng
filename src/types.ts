export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface WordCardData {
  id: string;
  english: string;
  french: string;
  type: 'Word' | 'Idiom' | 'Phrasal Verb';
  example: string;
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
