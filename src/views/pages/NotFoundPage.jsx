import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Planet, House, Binoculars } from '@phosphor-icons/react';

export const NotFoundPage = () => {
  return (
    <div className="py-20 flex-grow flex items-center justify-center">
      <Container size="narrow">
        <Card elevated className="p-8 sm:p-12 text-center border-space-border/80">
          <div className="w-16 h-16 rounded-full bg-space-card border border-space-border flex items-center justify-center mx-auto mb-6 text-space-accentLight">
            <Planet weight="duotone" className="w-8 h-8 text-space-accent animate-pulse" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block mb-2">
            Error 404 — Deep Space Coordinates Unknown
          </span>

          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-space-text mb-3">
            Lost In Orbit
          </h1>

          <p className="text-sm sm:text-base text-space-textSecondary max-w-md mx-auto leading-relaxed mb-8">
            The celestial sector or archival page you are trying to reach does not exist or has drifted beyond telemetry range.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/">
              <Button className="gap-2">
                <House className="w-4 h-4" />
                Return to Base
              </Button>
            </Link>
            <Link to="/explore">
              <Button variant="secondary" className="gap-2">
                <Binoculars className="w-4 h-4" />
                Explore Relics
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default NotFoundPage;
