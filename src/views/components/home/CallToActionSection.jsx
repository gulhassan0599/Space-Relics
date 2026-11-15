import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Compass, ArrowRight } from 'lucide-react';

export const CallToActionSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-space-bg via-space-bgSecondary to-space-bg">
      {/* Background Orbital Rings & Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-space-accent/10 rounded-full blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full opacity-10 stroke-slate-500"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="50%" cy="50%" rx="480" ry="220" fill="none" strokeWidth="0.75" strokeDasharray="3 7" />
          <ellipse cx="50%" cy="50%" rx="640" ry="300" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <Container size="narrow" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-8 sm:p-14 rounded-3xl bg-space-card/70 border border-space-border/80 shadow-2xl backdrop-blur-md"
        >
          <div className="w-14 h-14 rounded-2xl bg-space-card border border-space-border flex items-center justify-center mx-auto mb-6 text-space-accentLight shadow-subtle-glow">
            <Compass className="w-7 h-7 text-space-accent animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-space-text tracking-tight mb-4">
            Every Relic Has a Story.
          </h2>

          <p className="text-base sm:text-lg text-space-textSecondary max-w-xl mx-auto leading-relaxed mb-8">
            Explore the remnants of humanity's journey across the Moon and Mars. Discover the missions, the discoveries, and the stories that remain.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/explore">
              <Button size="lg" className="gap-2 shadow-subtle-glow text-base px-8 py-3.5">
                <span>Enter the Museum</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToActionSection;
