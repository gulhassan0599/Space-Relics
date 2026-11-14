import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { getTimelineByEras } from '../../controllers/timelineController';
import { Calendar, ArrowRight } from 'lucide-react';

export const TimelinePage = () => {
  const eras = getTimelineByEras();

  useEffect(() => {
    document.title = 'Mission Timeline | Space Relics';
  }, []);

  return (
    <div className="py-12 sm:py-16">
      <Container size="narrow">
        <Heading
          level={1}
          badge={<Badge variant="primary">Chronology</Badge>}
          subtitle="Explore the progression of human exploratory hardware left across other worlds from 1967 to 2019."
        >
          Mission Timeline
        </Heading>

        <div className="space-y-12 mt-10">
          {eras.map((eraGroup, index) => (
            <div key={index} className="relative">
              {/* Era Header */}
              <div className="mb-4">
                <h2 className="text-xl font-heading font-bold text-space-text">
                  {eraGroup.era}
                </h2>
                <p className="text-xs text-space-textSecondary mt-1">
                  {eraGroup.description}
                </p>
              </div>

              {/* Items in Era */}
              <div className="space-y-4 border-l-2 border-space-border/80 pl-6 ml-2">
                {eraGroup.items.map((item) => (
                  <Card key={item.id} elevated interactive className="p-5 group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono font-bold text-space-accentLight">
                            {item.year}
                          </span>
                          <Badge variant={item.destination.toLowerCase() === 'moon' ? 'moon' : 'mars'} size="xs">
                            {item.destination}
                          </Badge>
                        </div>
                        <h3 className="font-heading font-semibold text-base text-space-text group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-space-textSecondary mt-1 line-clamp-2 leading-relaxed">
                          {item.shortDescription}
                        </p>
                      </div>

                      <Link
                        to={`/objects/${item.slug}`}
                        aria-label={`View full story of ${item.name}`}
                        className="sm:self-center flex-shrink-0"
                      >
                        <span className="text-xs text-space-accent group-hover:text-space-accentLight font-medium inline-flex items-center gap-1.5 transition-colors">
                          <span>View Story</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TimelinePage;
