import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Clock, Calendar, CheckCircle2, ChevronRight, Info } from 'lucide-react';

/**
 * Interactive Timeline component allowing users to click individual milestones
 * and inspect detailed descriptions with active highlighted states.
 */
export const ObjectTimeline = ({ timeline = [], destination = 'Moon' }) => {
  if (!timeline || timeline.length === 0) return null;

  const isMars = destination.toLowerCase() === 'mars';
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selectedMilestone = timeline[selectedIdx] || timeline[0];

  return (
    <section className="mb-14">
      <Card elevated className="p-8 sm:p-12 border-space-border/90 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border ${
              isMars 
                ? 'bg-orange-950/70 border-orange-900/80 text-orange-400' 
                : 'bg-slate-800 border-slate-700 text-moon-blue'
            }`}>
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
                Interactive Chronology
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
                Mission Milestones
              </h2>
            </div>
          </div>

          <div className="text-xs font-mono text-space-textMuted bg-space-card px-3 py-1.5 rounded-lg border border-space-border/60 self-start sm:self-auto">
            Click milestones to inspect phase details
          </div>
        </div>

        {/* Selected Milestone Spotlight Banner */}
        {selectedMilestone && (
          <div className={`mb-10 p-6 rounded-2xl border transition-all duration-300 ${
            isMars 
              ? 'bg-[#1C0804]/90 border-orange-900/80 shadow-mars-glow' 
              : 'bg-[#0E172A]/90 border-space-accent/50 shadow-subtle-glow'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <Badge variant={isMars ? 'mars' : 'moon'}>
                Phase {selectedIdx + 1} of {timeline.length}
              </Badge>
              <span className={`text-xs font-mono font-bold ${isMars ? 'text-orange-300' : 'text-space-accentLight'}`}>
                {selectedMilestone.date || selectedMilestone.year}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-space-text mb-2">
              {selectedMilestone.title}
            </h3>
            <p className="text-sm text-space-textSecondary leading-relaxed">
              {selectedMilestone.description}
            </p>
          </div>
        )}

        {/* Interactive Milestone Nodes Track */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-space-border/80 space-y-6 ml-3">
          {timeline.map((event, idx) => {
            const isCurrent = idx === selectedIdx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedIdx(idx);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isCurrent}
                className="relative group cursor-pointer focus:outline-none"
              >
                {/* Node Dot Indicator */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isCurrent
                    ? isMars
                      ? 'bg-orange-500 border-white scale-125 ring-4 ring-orange-500/30'
                      : 'bg-space-accent border-white scale-125 ring-4 ring-space-accent/30'
                    : isMars
                      ? 'bg-orange-950/70 border-orange-900/90 group-hover:border-orange-500'
                      : 'bg-space-card border-space-border group-hover:border-space-accent'
                }`} />

                {/* Milestone Card */}
                <div className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 ${
                  isCurrent
                    ? isMars
                      ? 'bg-orange-950/40 border-orange-700/80'
                      : 'bg-space-cardElevated border-space-accent/60'
                    : 'bg-space-card/70 border-space-border/60 hover:border-space-border hover:bg-space-card/60'
                }`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs font-mono font-bold ${
                      isCurrent 
                        ? (isMars ? 'text-orange-300' : 'text-space-accentLight') 
                        : 'text-space-textMuted'
                    }`}>
                      {event.date || event.year}
                    </span>
                    <span className="text-[10px] font-mono text-space-textMuted uppercase">
                      Stage 0{idx + 1}
                    </span>
                  </div>

                  <h4 className={`font-heading font-semibold text-sm sm:text-base mt-1 ${
                    isCurrent ? 'text-white' : 'text-space-textSecondary group-hover:text-space-text'
                  }`}>
                    {event.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
};

export default ObjectTimeline;
