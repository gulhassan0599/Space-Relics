import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ArrowRight, Compass, Globe2 } from 'lucide-react';

export const IntroductionSection = () => {
  return (
    <section id="introduction-section" className="py-20 sm:py-28 border-b border-space-border/60 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <Badge variant="primary" className="mb-3">
                A Museum Beyond Earth
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-space-text tracking-tight leading-tight">
                Not Everything We Send Comes Back.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-space-textSecondary leading-relaxed">
              Human exploration leaves traces behind. On the Moon and Mars, equipment from historic missions remains where exploration once unfolded.
            </p>

            <p className="text-sm sm:text-base text-space-textSecondary/90 leading-relaxed">
              Some objects helped us understand the surfaces of distant worlds. Others carried humans across the lunar landscape or conducted scientific experiments millions of kilometres from Earth.
            </p>

            <p className="text-sm sm:text-base text-space-textSecondary/90 leading-relaxed">
              <strong className="text-space-text font-semibold">Space Relics</strong> brings these stories together in one interactive museum.
            </p>

            <div className="pt-4">
              <Link to="/explore">
                <Button className="gap-2">
                  <span>Explore the Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Graphic (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-space-cardElevated to-space-card border border-space-border/80 p-8 shadow-2xl overflow-hidden group">
              {/* Decorative background glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-space-accent/20 rounded-full blur-2xl pointer-events-none" />
              
              {/* Graphic Representation */}
              <div className="relative z-10 flex flex-col items-center text-center py-6">
                <div className="w-20 h-20 rounded-2xl bg-[#070B16] border border-space-border flex items-center justify-center text-space-accentLight shadow-subtle-glow mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Globe2 className="w-10 h-10 text-space-accent" />
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight mb-2">
                  Off-World Heritage
                </span>
                <h3 className="text-xl font-heading font-bold text-space-text">
                  6 Relics Across 2 Worlds
                </h3>
                <p className="text-xs text-space-textSecondary mt-2 max-w-xs leading-relaxed">
                  Preserved in vacuum and Martian dust, these artifacts remain frozen at their final coordinates.
                </p>

                {/* Stat pills */}
                <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-6 border-t border-space-border/60">
                  <div className="p-3 rounded-xl bg-[#070B16]/80 border border-space-border text-center">
                    <span className="block text-lg font-heading font-bold text-moon-white">3</span>
                    <span className="text-[11px] text-space-textMuted uppercase tracking-wider">On The Moon</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070B16]/80 border border-space-border text-center">
                    <span className="block text-lg font-heading font-bold text-orange-400">3</span>
                    <span className="text-[11px] text-space-textMuted uppercase tracking-wider">On Mars</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default IntroductionSection;
