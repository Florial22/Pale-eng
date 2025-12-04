// src/utils/progressStorage.ts
const STORAGE_KEY = "pale_progress";

export interface CategoryProgress {
  known: string[];  // IDs of known words
}

export interface ProgressState {
  [categoryId: string]: CategoryProgress;
}

// ------------------------------
// Load full progress from localStorage
// ------------------------------
export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load progress:", err);
    return {};
  }
}

// ------------------------------
// Save full progress to localStorage
// ------------------------------
function saveProgress(data: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ------------------------------
// Get known word IDs for a category
// ------------------------------
export function getKnownWords(categoryId: string): string[] {
  const progress = loadProgress();
  return progress[categoryId]?.known || [];
}

// ------------------------------
// Add one word to known list
// ------------------------------
export function addKnownWord(categoryId: string, wordId: string) {
  const progress = loadProgress();

  if (!progress[categoryId]) {
    progress[categoryId] = { known: [] };
  }

  if (!progress[categoryId].known.includes(wordId)) {
    progress[categoryId].known.push(wordId);
  }

  saveProgress(progress);
}

// ------------------------------
// Remove a word from known list (for Review mode or Reset)
// ------------------------------
export function removeKnownWord(categoryId: string, wordId: string) {
  const progress = loadProgress();

  if (!progress[categoryId]) return;

  progress[categoryId].known = progress[categoryId].known.filter(id => id !== wordId);

  saveProgress(progress);
}

// ------------------------------
// Reset a full category (start fresh)
// ------------------------------
export function clearCategoryProgress(categoryId: string) {
  const progress = loadProgress();
  delete progress[categoryId];
  saveProgress(progress);
}

// ------------------------------
// Reset ALL categories
// ------------------------------
export function clearAllProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
