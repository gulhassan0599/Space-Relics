import React from 'react';
import { Card } from '../common/Card';
import { Clock } from 'lucide-react';

/**
 * Chronological Mission Timeline for the specific object
 */
export const ObjectTimeline = ({ timeline = [], destination = 'Moon' }) => {
  if (!timeline || timeline.length === 0) return null;

  const isMars = destination.toLowerCase() === 'mars';

  return (
    <section className="mb-14">
      <Card elevated className="p-8 sm:p-12 border-space-border/90 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className={`p-2.5 rounded-xl border ${
            isMars 
              ? 'bg-orange-950/70 border-orange-900/80 text-orange-400' 
              : 'bg-slate-800 border-slate-700 text-moon-blue'
          }`}>
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
              Chronology
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
              Mission Milestones
            </h2>
          </div>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-space-border/80 space-y-8 ml-3">
          {timeline.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Event Pin Node */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                isMars 
                  ? 'bg-[#140804] border-orange-500 shadow-mars-glow' 
                  : 'bg-[#070B16] border-space-accent shadow-subtle-glow'
              }`} />

              <div className="p-5 rounded-2xl bg-[#070B16]/80 border border-space-border/80 group-hover:border-space-border transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`text-xs font-mono font-bold ${isMars ? 'text-orange-400' : 'text-space-accentLight'}`}>
                    {event.date || event.year}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-space-textMuted px-2 py-0.5 rounded bg-space-card">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-space-text mb-1.5">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default ObjectTimeline;
