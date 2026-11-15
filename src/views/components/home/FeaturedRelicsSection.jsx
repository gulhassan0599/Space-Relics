import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import ObjectCard from '../object/ObjectCard';
import { getFeaturedRelics } from '../../../controllers/objectController';
import { ArrowRight } from '@phosphor-icons/react';

export const FeaturedRelicsSection = () => {
  // Retrieved via controller layer (strict MVC adherence)
  const relics = getFeaturedRelics();

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
            badge={<Badge variant="primary">Humanity's Forgotten Footprints</Badge>}
            subtitle="Six remarkable objects. Two distant worlds. Countless stories of exploration."
            align="center"
          >
            Featured Extraterrestrial Relics
          </Heading>
        </motion.div>

        {/* 6 Objects Grid: 3 cols on desktop, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {relics.map((object, index) => (
            <motion.div
              key={object.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              className="flex"
            >
              <ObjectCard object={object} className="w-full" />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link to="/explore">
            <Button variant="secondary" size="lg" className="gap-2">
              <span>View All Relics</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedRelicsSection;
