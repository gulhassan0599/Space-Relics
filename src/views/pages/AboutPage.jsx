import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { APP_IDENTITY } from '../../utils/constants';
import { Award, Info, ShieldCheck, Compass } from 'lucide-react';

export const AboutPage = () => {
  useEffect(() => {
    document.title = 'About the Project | Space Relics';
  }, []);

  return (
    <div className="py-12 sm:py-16">
      <Container size="narrow">
        <Heading
          level={1}
          badge={<Badge variant="primary">About Project</Badge>}
          subtitle="Understanding the educational mission and historical perspective of Space Relics."
        >
          About Space Relics
        </Heading>

        <div className="space-y-6 mt-8">
          <Card elevated className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-space-accent/10 text-space-accentLight border border-space-accent/20 flex-shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h2 className="font-heading font-semibold text-lg text-space-text">
                  The Stories We Left Behind
                </h2>
                <p className="text-sm text-space-textSecondary leading-relaxed">
                  Every piece of hardware resting on the Moon and Mars represents thousands of hours of human ingenuity, dreams, and courage. From Surveyor 3's pioneering lunar soft landing to Opportunity's record-breaking marathon across Martian craters, these silent artifacts remain as monumental markers of human exploration.
                </p>
                <p className="text-sm text-space-textSecondary leading-relaxed">
                  Space Relics was conceived as a digital museum experience designed to reconnect modern audiences with the engineering feats and historical contexts behind why these relics remain on other celestial bodies.
                </p>
              </div>
            </div>
          </Card>

          <Card elevated className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-space-accent/10 text-space-accentLight border border-space-accent/20 flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h2 className="font-heading font-semibold text-lg text-space-text">
                  Competition & Architecture
                </h2>
                <p className="text-sm text-space-textSecondary leading-relaxed">
                  Developed for the <span className="text-space-text font-medium">{APP_IDENTITY.competition}</span>. Space Relics uses a modern, lightweight, frontend-only architecture utilizing React, Vite, Tailwind CSS, and an MVC-inspired separation between static models, functional controllers, and presentation views.
                </p>
              </div>
            </div>
          </Card>

          <Card elevated className="p-6 sm:p-8 border-space-border/60">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading font-semibold text-base text-space-text">
                  Independent Project Disclaimer
                </h2>
                <p className="text-xs text-space-textMuted leading-relaxed">
                  {APP_IDENTITY.disclaimer}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
