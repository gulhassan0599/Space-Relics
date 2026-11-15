import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { ArrowRight, Compass } from '@phosphor-icons/react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden border-b border-space-border/80 bg-[#090B0E]">
      
      {/* 1. Full Widescreen Archival Lunar Landscape Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-landscape-bg.jpg"
          alt="Archival panoramic landscape of the Moon's surface captured during NASA Apollo missions"
          className="w-full h-full object-cover object-center filter contrast-[1.1] grayscale-[0.35] brightness-[0.7] transform scale-105"
        />

        {/* Sophisticated Multi-Layer Editorial Gradients for Flawless Readability */}
        {/* Layer A: Obsidian vignette all around */}
        <div className="absolute inset-0 bg-[#090B0E]/60 mix-blend-multiply" />
        
        {/* Layer B: Directional dark gradient behind text on left/center */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B0E] via-[#090B0E]/85 to-[#090B0E]/40" />
        
        {/* Layer C: Top & Bottom smooth fades for seamless transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090B0E]/90 via-transparent to-[#090B0E]" />
      </div>

      {/* 2. Main Content: Elegant Editorial Typography with High Contrast */}
      <div className="relative z-10 my-auto py-8">
        <Container>
          <div className="max-w-3xl">

            {/* Expressive Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-space-text font-normal tracking-tight leading-[1.08] drop-shadow-md">
              The Stories We Left Behind. 
            </h1>

            {/* Concise Supporting Description */}
            <p className="mt-6 text-base sm:text-lg text-space-textSecondary max-w-2xl leading-relaxed font-sans drop-shadow">
              Across the Moon and Mars, traces of human exploration remain. From abandoned rovers to scientific instruments, each relic tells a story of discovery, ambition, and the people who pushed beyond Earth.
            </p>

            {/* Clear Primary Navigation Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded text-xs font-mono uppercase tracking-wider bg-space-text text-[#090B0E] font-semibold hover:bg-white hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-space-accent"
              >
                <span>Explore the Relics</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/timeline"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded text-xs font-mono uppercase tracking-wider text-space-text border border-space-border/80 hover:border-space-text hover:bg-space-card/80 backdrop-blur-md bg-[#090B0E]/60 transition-all focus:outline-none focus:ring-2 focus:ring-space-accent"
              >
                <Compass className="w-4 h-4 text-space-accentLight" />
                <span>Mission Timeline</span>
              </Link>
            </div>

          </div>
        </Container>
      </div>

      {/* 3. Discrete Metadata Strip & Background Caption at Section Footer */}
      <div className="relative z-10 border-t border-space-border/70 bg-[#090B0E]/90 backdrop-blur-md py-4">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
            {/* Quick Stats Grid */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <span className="block text-space-textMuted uppercase text-[10px]">Catalog Span</span>
                <span className="text-space-text font-medium">1967 — 2019</span>
              </div>
              <div>
                <span className="block text-space-textMuted uppercase text-[10px]">Documented Objects</span>
                <span className="text-space-text font-medium">6 Preserved Artifacts</span>
              </div>
              <div>
                <span className="block text-space-textMuted uppercase text-[10px]">Planetary Bodies</span>
                <span className="text-space-text font-medium">The Moon & Mars</span>
              </div>
            </div>

            {/* Archival Landscape Caption */}
            <div className="text-space-textMuted text-[11px] flex items-center gap-2 self-start md:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-space-textMuted" />
              <span>Background: Apollo 17 Taurus-Littrow Lunar Panorama (NASA JSC2004E52777)</span>
            </div>
          </div>
        </Container>
      </div>

    </section>
  );
};

export default HeroSection;
