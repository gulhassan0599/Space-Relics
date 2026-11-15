import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Cpu, Binoculars, Flag } from '@phosphor-icons/react';

export const HistoricalSection = () => {
  const storytellingBlocks = [
    {
      number: '01',
      tag: 'Engineering',
      icon: Cpu,
      heading: 'Operating Beyond Limits',
      description: 'Every relic represents the immense engineering challenges of surviving vacuum, extreme temperature swings, and unforgiving regolith far beyond Earth.'
    },
    {
      number: '02',
      tag: 'Discovery',
      icon: Binoculars,
      heading: 'Pioneering Planetary Science',
      description: 'Scientific instruments and robotic explorers helped humanity understand the Moon and Mars in ways previously impossible, finding ancient signs of water.'
    },
    {
      number: '03',
      tag: 'Legacy',
      icon: Flag,
      heading: 'Enduring Human Monuments',
      description: 'Even after missions end, their physical remains continue to tell stories about exploration, innovation, and humanity\'s unyielding curiosity.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-space-border/60 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Heading
            level={2}
            badge={<Badge variant="primary">More Than Just Equipment</Badge>}
            subtitle="Every object left behind represents a moment in humanity's journey beyond Earth."
            align="center"
          >
            The Heritage of Exploration
          </Heading>
        </motion.div>

        {/* 3 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {storytellingBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              >
                <Card elevated className="p-8 h-full flex flex-col justify-between border-space-border/80 hover:border-space-accent/50 transition-colors duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-bold text-space-accentLight/60">
                        {block.number}
                      </span>
                      <div className="p-2.5 rounded-lg bg-space-card border border-space-border text-space-accent">
                        <Icon weight="duotone" className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block mb-2">
                      {block.tag}
                    </span>

                    <h3 className="text-xl font-heading font-bold text-space-text mb-3">
                      {block.heading}
                    </h3>

                    <p className="text-sm text-space-textSecondary leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HistoricalSection;
