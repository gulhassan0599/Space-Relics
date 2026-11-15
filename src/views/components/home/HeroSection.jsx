import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextElem = document.getElementById('introduction-section');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-space-border/60">
      {/* Cinematic Deep Space Background */}
      <div className="absolute inset-0 z-0 bg-space-bg pointer-events-none overflow-hidden">
        {/* Distant Earth/Celestial Orb Simulation with soft atmospheric glow */}
        <div className="absolute -top-32 -right-32 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full bg-gradient-to-br from-blue-600/15 via-sky-500/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-orange-600/10 via-amber-700/5 to-transparent blur-3xl pointer-events-none" />
        
        {/* Subtle Orbital Geometry Lines */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-15 stroke-slate-500"
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true"
        >
          <circle cx="85%" cy="30%" r="280" fill="none" strokeWidth="0.75" strokeDasharray="4 6" />
          <circle cx="85%" cy="30%" r="420" fill="none" strokeWidth="0.5" />
          <line x1="0" y1="65%" x2="100%" y2="65%" strokeWidth="0.5" strokeDasharray="2 12" />
        </svg>

        {/* Dark Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-bg/50 via-transparent to-space-bg" />
      </div>

      <Container className="relative z-10 py-16 sm:py-24">
        <div className="max-w-3xl">
          {/* Small Introductory Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-cardElevated/80 border border-space-border text-xs font-mono tracking-wider uppercase text-space-accentLight mb-6 shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-space-accent" />
            <span>An Interactive Space Museum</span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading text-space-text tracking-tight leading-[1.08]"
          >
            The Stories <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-text via-space-accent to-space-accentLight">
              We Left Behind.
            </span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 text-base sm:text-xl text-space-textSecondary max-w-2xl leading-relaxed"
          >
            Across the Moon and Mars, traces of human exploration remain. From abandoned rovers to scientific instruments, each relic tells a story of discovery, ambition, and the people who pushed beyond Earth.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/explore">
              <Button size="lg" className="gap-2 shadow-subtle-glow">
                <span>Explore the Relics</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link to="/about">
              <Button variant="secondary" size="lg">
                Discover Our Mission
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Subtle Hero Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 pb-8 flex flex-col items-center justify-center text-center"
      >
        <button
          type="button"
          onClick={scrollToNextSection}
          aria-label="Scroll down to introduction section"
          className="group flex flex-col items-center gap-1.5 text-xs text-space-textMuted hover:text-space-textSecondary transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent rounded p-1"
        >
          <span className="font-mono uppercase tracking-widest text-[10px]">Scroll to enter</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-space-accent group-hover:text-space-accentLight transition-colors" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
