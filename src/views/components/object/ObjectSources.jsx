import React from 'react';
import { Card } from '../common/Card';
import { Bookmark, ExternalLink } from 'lucide-react';

/**
 * Sources and Further Reading references section.
 * Provides verifiable links to NASA, JPL, and official publications.
 */
export const ObjectSources = ({ sources = [], destination = 'Moon' }) => {
  if (!sources || sources.length === 0) return null;

  const isMars = destination.toLowerCase() === 'mars';

  return (
    <section className="mb-14">
      <Card elevated className="p-8 sm:p-12 border-space-border/90 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-2.5 rounded-xl border ${
            isMars 
              ? 'bg-orange-950/70 border-orange-900/80 text-orange-400' 
              : 'bg-slate-800 border-slate-700 text-moon-blue'
          }`}>
            <Bookmark className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
              Documentation & Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
              Sources & Further Reading
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-space-textSecondary mb-6 leading-relaxed">
          Historical records, telemetry, and research documentation referenced from official space-agency archives:
        </p>

        <div className="space-y-3">
          {sources.map((src, idx) => (
            <a
              key={idx}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#070B16] border border-space-border/70 hover:border-space-accent/60 flex items-center justify-between gap-4 transition-all group"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-space-accentLight block mb-0.5">
                  {src.organization}
                </span>
                <h3 className="text-sm font-semibold text-space-text group-hover:text-white transition-colors">
                  {src.title}
                </h3>
              </div>
              <ExternalLink className="w-4 h-4 text-space-textMuted group-hover:text-space-accent transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default ObjectSources;
