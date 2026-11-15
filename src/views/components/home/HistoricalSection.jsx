import React from 'react';
import { Container } from '../common/Container';

export const HistoricalSection = () => {
  const storytellingBlocks = [
    {
      number: '01',
      tag: 'Engineering Under Extremes',
      heading: 'Operating Beyond Limits',
      description: 'Every relic represents solutions to unprecedented environmental challenges: surviving absolute vacuum, extreme thermal swings from -130°C to +120°C, and abrasive lunar regolith that wears through mechanical seals.'
    },
    {
      number: '02',
      tag: 'Planetary Science',
      heading: 'Pioneering Surface Science',
      description: 'Before human landings, robotic landers validated whether celestial surfaces could support spacecraft. Decades later, laser retroreflectors continue to calculate Earth-Moon orbits to millimeter precision.'
    },
    {
      number: '03',
      tag: 'Extraterrestrial Heritage',
      heading: 'Enduring Human Monuments',
      description: 'These six artifacts remain permanently at their exploration coordinates. Untouched by wind or preserved under Martian dust, they serve as the physical archaeological record of humanity’s journey outward.'
    }
  ];

  return (
    <section className="py-12 border-b border-space-border/80 bg-[#090B0E] relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-space-text font-normal tracking-tight">
            The Heritage of Exploration
          </h2>
          <p className="mt-4 text-sm sm:text-base text-space-textSecondary leading-relaxed font-sans">
            Beyond their physical components, these objects mark definitive turning points in humanity's scientific comprehension of the solar system.
          </p>
        </div>

        {/* 3 Editorial Pillars: Crisp Architectural Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mt-8 border-space-border/80">
          {storytellingBlocks.map((block) => (
            <div
              key={block.number}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-space-border/60">
                  <span className="font-mono text-xs font-semibold text-space-accentLight">
                    PLATE {block.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-space-textMuted">
                    ARCHIVE RECORD
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-space-textSecondary block mb-2">
                  {block.tag}
                </span>

                <h3 className="font-editorial text-2xl text-space-text font-normal tracking-tight mb-3">
                  {block.heading}
                </h3>

                <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed font-sans">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HistoricalSection;
