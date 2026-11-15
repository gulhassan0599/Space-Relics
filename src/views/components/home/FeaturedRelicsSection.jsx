import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import ObjectCard from '../object/ObjectCard';
import { getFeaturedRelics } from '../../../controllers/objectController';
import { ArrowRight } from '@phosphor-icons/react';

export const FeaturedRelicsSection = () => {
  // Retrieved via controller layer (strict MVC adherence)
  const relics = getFeaturedRelics();

  // Separate Moon relics (3) and Mars relics (3)
  const moonRelics = relics.filter((r) => r.destination.toLowerCase() === 'moon');
  const marsRelics = relics.filter((r) => r.destination.toLowerCase() === 'mars');

  return (
    <section className="py-12 border-b border-space-border/80 bg-space-bgSecondary/30 relative">
      <Container>
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-space-text font-normal tracking-tight">
            Curated Extraterrestrial Relics
          </h2>
          <p className="mt-4 text-sm sm:text-base text-space-textSecondary leading-relaxed font-sans">
            Six human-made artifacts resting at their final coordinates across the Moon and Mars. Each object represents a pivotal milestone in aerospace engineering and planetary science.
          </p>
        </div>

        {/* 1. LUNAR ARTIFACTS ROW (3 Objects from Moon) */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-space-border/60">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-moon-silver" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-moon-silver font-semibold">
                Lunar Surface Relics (3 Documented)
              </h3>
            </div>
            <Link
              to="/explore/moon"
              className="text-xs font-mono uppercase tracking-wider text-space-textSecondary hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Moon</span>
              <ArrowRight className="w-3.5 h-3.5 text-moon-silver" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {moonRelics.map((object) => (
              <div key={object.id} className="flex">
                <ObjectCard object={object} className="w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* 2. MARTIAN ARTIFACTS ROW (3 Objects from Mars) */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-space-border/60">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-mars-rust" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-mars-rust font-semibold">
                Martian Robotic Explorers (3 Documented)
              </h3>
            </div>
            <Link
              to="/explore/mars"
              className="text-xs font-mono uppercase tracking-wider text-space-textSecondary hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Mars</span>
              <ArrowRight className="w-3.5 h-3.5 text-mars-rust" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {marsRelics.map((object) => (
              <div key={object.id} className="flex">
                <ObjectCard object={object} className="w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* View All Relics Footer CTA */}
        <div className="mt-14 sm:mt-18 text-center pt-8 border-t border-space-border/60">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded text-xs font-mono uppercase tracking-wider text-space-text border border-space-border hover:border-space-textSecondary hover:bg-space-card transition-all"
          >
            <span>View All Documented Relics</span>
            <ArrowRight className="w-3.5 h-3.5 text-space-accentLight" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedRelicsSection;
