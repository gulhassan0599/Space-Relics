import React from 'react';
import { Card } from '../common/Card';
import { Sparkles, Lightbulb, Compass, Award } from 'lucide-react';

/**
 * Educational Highlights & "Did You Know?" fact panel
 */
export const ObjectFacts = ({ facts = [], destination = 'Moon' }) => {
  if (!facts || facts.length === 0) return null;

  const isMars = destination.toLowerCase() === 'mars';

  return (
    <section className="mb-14">
      <Card elevated className="p-8 sm:p-12 border-space-border/90 shadow-2xl relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
          isMars ? 'bg-amber-600/10' : 'bg-sky-600/10'
        }`} />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-2.5 rounded-xl border ${
              isMars 
                ? 'bg-orange-950/70 border-orange-900/80 text-orange-400' 
                : 'bg-slate-800 border-slate-700 text-moon-blue'
            }`}>
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
                Educational Discovery
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
                Did You Know? Curated Highlights
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {facts.map((fact, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                  isMars
                    ? 'bg-[#180804]/90 border-orange-900/60 hover:border-orange-500/60'
                    : 'bg-[#0B1528]/90 border-space-border/80 hover:border-space-accent/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className={`w-4 h-4 ${isMars ? 'text-orange-400' : 'text-space-accentLight'}`} />
                  <span className="text-xs font-mono uppercase tracking-wider text-space-textMuted">
                    Fact #{idx + 1}
                  </span>
                </div>
                <p className="text-sm text-space-textSecondary leading-relaxed">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ObjectFacts;
