import React, { useState } from "react";

type DragQuestionProps = {
  sentence: string;          // e.g. "He always expects his team to ____ and meet all deadlines."
  options: string[];         // e.g. ["pull his leg", "beat around the bush", "hit the nail on the head", "pull their weight"]
  correctIndex: number;      // index in options
  onNext: () => void;        // called when user taps "Continue"
};

export const DragQuestion: React.FC<DragQuestionProps> = ({
  sentence,
  options,
  correctIndex,
  onNext,
}) => {
  const [droppedIndex, setDroppedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Build the sentence with a drop zone instead of "____"
  const parts = sentence.split("____"); // you can use "____" as placeholder in your data

  const handleDrop = (index: number) => {
    if (hasAnswered) return; // don't allow multiple drops
    
    setDroppedIndex(index);
    const correct = index === correctIndex;
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  const onDragStart = (ev: React.DragEvent<HTMLButtonElement>, index: number) => {
    if (hasAnswered) return;
    ev.dataTransfer.setData("text/plain", String(index));
    ev.dataTransfer.effectAllowed = "move";
  };

  const onDrop = (ev: React.DragEvent<HTMLSpanElement>) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    const index = Number(data);
    if (!Number.isNaN(index)) {
      handleDrop(index);
    }
  };

  const onDragOver = (ev: React.DragEvent<HTMLSpanElement>) => {
    ev.preventDefault();
  };

  // For mobile/tap fallback: tap an answer to "drop" it
  const handleTapOption = (index: number) => {
    if (hasAnswered) return;
    handleDrop(index);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Instruction */}
      <div className="text-sm font-medium text-slate-600 dark:text-slate-200">
        Drag the correct answer into the blank.
      </div>

      {/* Sentence with drop zone */}
      <div className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50 leading-relaxed">
        {parts[0]}
        <span
          className={`
            inline-flex items-center justify-center 
            min-w-[90px] px-3 py-1 mx-1 
            rounded-lg border-2 border-dashed 
            ${
              hasAnswered
                ? isCorrect
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-200"
                  : "border-rose-500 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-200"
                : "border-indigo-400 bg-indigo-50/40 dark:bg-slate-800 text-indigo-600 dark:text-indigo-300"
            }
          `}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          {droppedIndex !== null ? options[droppedIndex] : "Drop here"}
        </span>
        {parts[1]}
      </div>

      {/* Options row – inline pills, sized to content */}
      <div className="flex flex-wrap gap-3 mt-2">
        {options.map((opt, index) => {
          const isUsed = droppedIndex === index;

          return (
            <button
              key={index}
              type="button"
              draggable={!hasAnswered && !isUsed} // allow drag until answered / used
              onDragStart={(ev) => onDragStart(ev, index)}
              onClick={() => handleTapOption(index)} // tap fallback
              className={`
                inline-flex items-center justify-center
                px-4 py-2 rounded-2xl text-sm font-medium
                shadow-sm border
                transition
                ${
                  isUsed
                    ? "bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600"
                    : "bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 border-slate-900/10 dark:border-slate-200 hover:scale-[1.03] active:scale-95"
                }
              `}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback + Continue */}
      {hasAnswered && (
        <div className="mt-4 space-y-3">
          <div
            className={`
              text-sm font-semibold
              ${
                isCorrect
                  ? "text-emerald-600 dark:text-emerald-300"
                  : "text-rose-600 dark:text-rose-300"
              }
            `}
          >
            {isCorrect ? "Nice! That's the correct answer. 🎉" : "Not quite, but keep going! 💪"}
          </div>

          {/* Show explanation / correct answer explicitly if wrong */}
          {!isCorrect && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              The correct answer is{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {options[correctIndex]}
              </span>
              .
            </p>
          )}

          <button
            type="button"
            onClick={onNext}
            className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white text-sm font-semibold py-2.5 shadow hover:bg-indigo-500 active:scale-95 transition"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};
