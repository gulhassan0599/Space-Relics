import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { ArrowRight } from '@phosphor-icons/react';

export const CallToActionSection = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-[#090B0E] border-b border-space-border/80">
      <Container size="narrow" className="relative z-10 text-center">
        <div className="p-8 sm:p-14 rounded border border-space-border bg-space-card shadow-lg">
          <h2 className="font-editorial text-3xl sm:text-5xl text-space-text font-normal tracking-tight mb-4">
            Every Relic Preserves a Journey.
          </h2>

          <p className="text-sm sm:text-base text-space-textSecondary max-w-xl mx-auto leading-relaxed mb-8 font-sans">
            From the Apollo 12 visit to Surveyor 3 to Opportunity's 15-year exploration of Martian craters, explore the interactive records of human exploration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded text-xs font-mono uppercase tracking-wider bg-space-text text-[#090B0E] font-semibold hover:bg-white transition-all"
            >
              <span>Enter the Full Museum</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-mono uppercase tracking-wider text-space-textSecondary border border-space-border hover:border-space-textSecondary hover:text-white transition-colors"
            >
              <span>Explore Timeline</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToActionSection;
