import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { CheckCircle2, XCircle, RotateCcw, Award, HelpCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../../../models/data/quizQuestions.js';

/**
 * Interactive Educational Quiz component testing visitor knowledge
 * on the Moon and Mars relics with instant feedback and score tracking.
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
    <Card elevated className="p-8 sm:p-12 border-space-border/90 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-space-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {!showResults ? (
          <div>
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Badge variant="primary">Museum Knowledge Check</Badge>
                <span className="text-xs font-mono text-space-textMuted">
                  Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>
              <span className="text-xs font-mono text-space-accentLight">
                Score: {score}/{QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Question Prompt */}
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-space-text mb-6 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'border-space-border/80 bg-space-card text-space-textSecondary hover:border-space-accent/60 hover:text-space-text';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'border-emerald-500 bg-emerald-500/15 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500/50';
                  } else if (idx === selectedOption) {
                    btnStyle = 'border-red-500 bg-red-500/15 dark:bg-red-950/40 text-red-700 dark:text-red-200 font-semibold ring-1 ring-red-500/50';
                  } else {
                    btnStyle = 'border-space-border/40 bg-space-card/50 text-space-textMuted opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Explanation Box */}
            {isAnswered && (
              <div className="mb-6 p-4 rounded-xl bg-space-cardElevated/80 border border-space-border/80 text-xs sm:text-sm text-space-textSecondary leading-relaxed flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-space-accentLight flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-space-text block mb-1">
                    {selectedOption === currentQ.correctIndex ? 'Correct!' : 'Historical Context:'}
                  </span>
                  <span>{currentQ.explanation}</span>
                </div>
              </div>
            )}

            {/* Next Question Action */}
            {isAnswered && (
              <div className="flex justify-end">
                <Button onClick={handleNext} className="gap-2">
                  <span>{currentIdx + 1 === QUIZ_QUESTIONS.length ? 'View Results' : 'Next Question'}</span>
                </Button>
              </div>
            )}
          </div>
        ) : (
          /* Results View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-space-accent/15 border border-space-accent/30 flex items-center justify-center mx-auto mb-4 text-space-accentLight shadow-subtle-glow">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-space-text mb-2">
              Quiz Completed!
            </h3>

            <p className="text-sm text-space-textSecondary mb-6">
              You scored <span className="font-bold text-space-accentLight text-lg">{score}</span> out of <span className="font-bold text-space-text text-lg">{QUIZ_QUESTIONS.length}</span>.
            </p>

            <p className="text-xs text-space-textMuted max-w-md mx-auto mb-8 leading-relaxed">
              {score >= 5
                ? 'Outstanding! You have a commanding grasp of human equipment resting across the Moon and Mars.'
                : score >= 3
                ? 'Great exploration! You know the essentials of our off-world robotic and Apollo heritage.'
                : 'Good effort! Revisit the Moon and Mars exhibits to uncover more details about these six artifacts.'}
            </p>

            <Button onClick={handleRestart} className="gap-2">
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default EducationalQuiz;
