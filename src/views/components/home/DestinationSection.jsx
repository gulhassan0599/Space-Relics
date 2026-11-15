import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Badge } from '../common/Badge';
import DestinationCard from './DestinationCard';

export const DestinationSection = () => {
  const moonRelics = [
    'Surveyor 3 (1967)',
    'Apollo Lunar Roving Vehicle (1971–1972)',
    'Apollo 11 Laser Retroreflector (1969)'
  ];

  const marsRelics = [
    'Sojourner Rover (1997)',
    'Spirit Rover (2004–2011)',
    'Opportunity Rover (2004–2019)'
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
            badge={<Badge variant="primary">Two Worlds. Six Relics.</Badge>}
            subtitle="Explore the objects humanity left behind across two extraordinary worlds."
            align="center"
          >
            Choose a Celestial Destination
          </Heading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-stretch">
          {/* Moon Destination Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex h-full"
          >
            <DestinationCard
              destination="The Moon"
              title="The Moon"
              description="Explore the remnants of historic lunar missions, from the Surveyor spacecraft to Apollo-era scientific instruments and lunar transportation equipment."
              relicsCount={3}
              relicsList={moonRelics}
              route="/explore/moon"
              variant="moon"
              className="w-full h-full"
            />
          </motion.div>

          {/* Mars Destination Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="flex h-full"
          >
            <DestinationCard
              destination="Mars"
              title="Mars"
              description="Discover the robotic explorers that transformed our understanding of the Red Planet, including Sojourner, Spirit, and Opportunity."
              relicsCount={3}
              relicsList={marsRelics}
              route="/explore/mars"
              variant="mars"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default DestinationSection;
