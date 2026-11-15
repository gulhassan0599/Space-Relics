import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../common/Badge';
import { RelicIllustration } from '../icons/relics';
import { ArrowLeft } from '@phosphor-icons/react';

/**
 * Reusable Hero Section for Object Details Page
 */
export const ObjectHero = ({ object }) => {
  const isMars = object.destination.toLowerCase() === 'mars';
  const explorerPath = isMars ? '/explore/mars' : '/explore/moon';

  const renderIcon = () => {
    return (
      <RelicIllustration
        slug={object.slug}
        className={`w-16 h-16 sm:w-20 sm:h-20 ${isMars ? 'text-orange-400' : 'text-moon-blue'}`}
        aria-hidden="true"
      />
    );
  };

  return (
    <section className="relative rounded-3xl bg-gradient-to-b from-[#0B1220] via-space-card to-[#070B16] border border-space-border/90 p-8 sm:p-14 mb-14 overflow-hidden shadow-2xl">
      {/* Planetary ambient gradient */}
      <div 
        className={`absolute top-0 right-0 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none ${
          isMars ? 'bg-orange-600/15' : 'bg-blue-600/10'
        }`} 
      />

      {/* Subtle orbital lines */}
      <svg className="absolute -right-16 -bottom-16 w-96 h-96 opacity-10 stroke-slate-400 pointer-events-none">
        <circle cx="192" cy="192" r="140" fill="none" strokeWidth="0.75" strokeDasharray="3 6" />
        <circle cx="192" cy="192" r="180" fill="none" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10">
        {/* Navigation back link */}
        <div className="mb-6">
          <Link
            to={explorerPath}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-space-textSecondary hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to {object.destination} Explorer</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <Badge variant={isMars ? 'mars' : 'moon'}>{object.destination}</Badge>
              <Badge variant="default" size="sm">{object.objectType}</Badge>
              <span className={`text-xs font-mono font-medium px-2.5 py-1 rounded border ${
                isMars 
                  ? 'text-orange-300 bg-orange-950/70 border-orange-900/80' 
                  : 'text-moon-blue bg-slate-800/80 border-slate-700'
              }`}>
                {object.year}
              </span>
            </div>

            {/* Object Title */}
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight mb-4 ${
              isMars ? 'text-orange-100' : 'text-moon-white'
            }`}>
              {object.name}
            </h1>

            {/* Introductory Description */}
            <p className="text-base sm:text-xl text-space-textSecondary leading-relaxed max-w-2xl">
              {object.shortDescription}
            </p>
          </div>

          {/* Graphic Icon Emblem / Authentic Museum Placeholder */}
          <div className="flex-shrink-0 self-start lg:self-center">
            <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-3xl border flex items-center justify-center shadow-2xl backdrop-blur-md transition-transform hover:scale-105 duration-300 ${
              isMars 
                ? 'bg-[#1F0904]/90 border-orange-900/70 shadow-mars-glow' 
                : 'bg-slate-900/90 border-slate-700 shadow-moon-glow'
            }`}>
              {renderIcon()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectHero;
