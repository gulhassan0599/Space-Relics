import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ArrowRight, Compass, Globe2 } from 'lucide-react';

export const ExplorePage = () => {
  useEffect(() => {
    document.title = 'Explore Destinations | Space Relics';
  }, []);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Heading
          level={1}
          badge={<Badge variant="primary">Destination Selection</Badge>}
          subtitle="Choose a celestial destination to investigate the technological relics humanity left behind."
        >
          Explore Artifacts
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Moon Card */}
          <Card elevated interactive destination="Moon" className="p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="moon">3 Relics Documented</Badge>
                <span className="text-xs text-moon-blue font-mono font-medium">0.0026 AU</span>
              </div>
              <h2 className="text-3xl font-heading font-bold text-moon-white group-hover:text-blue-100 transition-colors">
                The Moon
              </h2>
              <p className="text-sm text-space-textSecondary mt-3 leading-relaxed">
                Earth's silent companion. Explore Surveyor 3, the Apollo Lunar Roving Vehicles, and the Apollo 11 Laser Retroreflector resting on the lunar regolith.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-space-border/60">
              <Link to="/explore/moon" className="block w-full">
                <Button variant="moon" size="lg" className="w-full justify-between">
                  <span>Launch Moon Explorer</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Card>

          {/* Mars Card */}
          <Card elevated interactive destination="Mars" className="p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="mars">3 Relics Documented</Badge>
                <span className="text-xs text-orange-400 font-mono font-medium">1.524 AU</span>
              </div>
              <h2 className="text-3xl font-heading font-bold text-orange-200 group-hover:text-amber-100 transition-colors">
                Mars
              </h2>
              <p className="text-sm text-space-textSecondary mt-3 leading-relaxed">
                The Red Planet. Discover Sojourner, Spirit, and Opportunity—the pioneering rovers that blazed trails across Martian craters and ancient lakebeds.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-space-border/60">
              <Link to="/explore/mars" className="block w-full">
                <Button variant="mars" size="lg" className="w-full justify-between">
                  <span>Launch Mars Explorer</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ExplorePage;
