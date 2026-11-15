import React, { useState } from 'react';
import { ArrowCounterClockwise, CheckCircle, XCircle } from '@phosphor-icons/react';
import { QUIZ_QUESTIONS } from '../../../models/data/quizQuestions.js';

/**
 * Interactive Educational Quiz component testing visitor knowledge
 * on the Moon and Mars relics with instant feedback and score tracking.
 * Redesigned with museum curatorial aesthetics and clear accessibility.
 */
export const EducationalQuiz = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="rounded border border-space-border bg-space-card p-6 sm:p-10 shadow-lg relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        {!showResults ? (
          <div>
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-space-border/80">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-space-bgSecondary text-space-accentLight border border-space-border">
                  Exhibition Assessment
                </span>
                <span className="text-xs font-mono text-space-textMuted">
                  Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>
              <span className="text-xs font-mono text-space-textSecondary">
                Score: {score}/{QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Question Prompt */}
            <h3 className="font-editorial text-xl sm:text-2xl text-space-text font-normal mb-6 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'border-space-border bg-space-bgSecondary text-space-textSecondary hover:border-space-textSecondary hover:text-white';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'border-emerald-600/80 bg-emerald-950/30 text-emerald-200';
                  } else if (idx === selectedOption) {
                    btnStyle = 'border-red-600/80 bg-red-950/30 text-red-200';
                  } else {
                    btnStyle = 'border-space-border/40 bg-space-bgSecondary/40 text-space-textMuted opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 font-sans min-h-[48px] ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-[10px] flex-shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle weight="fill" className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle weight="fill" className="w-5 h-5 text-red-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            {isAnswered && (
              <div className="p-4 rounded bg-space-bgSecondary border border-space-border/80 text-xs text-space-textSecondary mb-6 font-sans leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-wider text-space-accentLight block mb-1">
                  Archival Fact:
                </span>
                {currentQ.explanation}
              </div>
            )}

            {/* Next button */}
            {isAnswered && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded text-xs font-mono uppercase tracking-wider bg-space-text text-[#090B0E] font-semibold hover:bg-white transition-colors"
                >
                  {currentIdx + 1 < QUIZ_QUESTIONS.length ? 'Next Question →' : 'View Assessment Score'}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Results View */
          <div className="text-center py-6">
            <span className="font-mono text-xs uppercase tracking-widest text-space-accentLight block mb-2">
              Assessment Complete
            </span>

            <h3 className="font-editorial text-3xl sm:text-4xl text-space-text font-normal mb-3">
              {score === QUIZ_QUESTIONS.length
                ? 'Mastery of Extraterrestrial Heritage'
                : score >= 3
                ? 'Commendable Historical Knowledge'
                : 'Exploration in Progress'}
            </h3>

            <p className="text-sm text-space-textSecondary max-w-md mx-auto mb-6 font-sans">
              You correctly identified {score} out of {QUIZ_QUESTIONS.length} historical details regarding the technological artifacts left on the Moon and Mars.
            </p>

            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono uppercase tracking-wider text-space-text border border-space-border hover:border-space-textSecondary hover:bg-space-bgSecondary transition-all"
            >
              <ArrowCounterClockwise className="w-4 h-4" />
              <span>Retake Museum Assessment</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalQuiz;
