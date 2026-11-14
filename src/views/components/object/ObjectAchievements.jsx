import React from 'react';
import { Card } from '../common/Card';
import { Trophy, CheckCircle2 } from 'lucide-react';

/**
 * Key Achievements & Scientific Contributions section
 */
export const ObjectAchievements = ({ achievements = [], destination = 'Moon' }) => {
  if (!achievements || achievements.length === 0) return null;

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
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
              Historical Significance
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
              Key Achievements & Discoveries
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#070B16]/70 border border-space-border/70 flex items-start gap-3.5 hover:border-space-border transition-colors"
            >
              <div className="mt-0.5 flex-shrink-0">
                <CheckCircle2 className={`w-5 h-5 ${isMars ? 'text-emerald-400' : 'text-emerald-400'}`} />
              </div>
              <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default ObjectAchievements;
