import React from 'react';
import { Card } from '../common/Card';
import { Article, Lightbulb } from '@phosphor-icons/react';

/**
 * Main Storytelling Narrative Section explaining why the object was created,
 * how it traveled, what happened during the mission, and why it was left behind.
 */
export const ObjectStory = ({ object }) => {
  const isMars = object.destination.toLowerCase() === 'mars';

  return (
    <section className="mb-14">
      <Card elevated className="p-8 sm:p-12 border-space-border/90 shadow-2xl relative overflow-hidden">
        {/* Ambient background wash */}
        <div 
          className={`absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
            isMars ? 'bg-orange-600/10' : 'bg-blue-600/10'
          }`}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2.5 rounded-xl border ${
              isMars 
                ? 'bg-orange-950/70 border-orange-900/80 text-orange-400' 
                : 'bg-slate-800 border-slate-700 text-moon-blue'
            }`}>
              <Article weight="duotone" className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
                The Human Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
                The Story Behind {object.name}
              </h2>
            </div>
          </div>

          {/* Historical Story Narrative */}
          <div className="prose prose-invert max-w-none space-y-5 text-sm sm:text-base text-space-textSecondary leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:font-heading first-letter:mr-2 first-letter:float-left first-letter:text-space-text">
              {object.historicalStory}
            </p>
          </div>

          {/* Why It Was Left Behind Callout Box */}
          {object.whyLeftBehind && (
            <div className={`mt-8 p-6 rounded-2xl border-l-4 ${
              isMars 
                ? 'bg-[#1A0804]/90 border-l-orange-500 border border-orange-950/70' 
                : 'bg-[#0E172A]/90 border-l-space-accent border border-space-border/80'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb weight="duotone" className={`w-4 h-4 ${isMars ? 'text-orange-400' : 'text-space-accentLight'}`} />
                <h3 className="font-heading font-semibold text-base text-space-text">
                  Why It Remains on {object.destination}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed">
                {object.whyLeftBehind}
              </p>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default ObjectStory;
