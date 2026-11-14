import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroductionSection from '../components/home/IntroductionSection';
import DestinationSection from '../components/home/DestinationSection';
import FeaturedRelicsSection from '../components/home/FeaturedRelicsSection';
import HistoricalSection from '../components/home/HistoricalSection';
import CallToActionSection from '../components/home/CallToActionSection';
import EducationalQuiz from '../components/common/EducationalQuiz';
import ObjectComparison from '../components/common/ObjectComparison';
import { Container } from '../components/common/Container';
import { Heading } from '../components/common/Heading';
import { Badge } from '../components/common/Badge';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Space Relics | The Stories We Left Behind';
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic Hero Section with Animated Scroll Indicator */}
      <HeroSection />

      {/* 2. Museum Introduction Section with Editorial Two-Column Layout */}
      <IntroductionSection />

      {/* 3. Destination Selection: The Moon & Mars Interactive Cards */}
      <DestinationSection />

      {/* 4. Featured Relics: Responsive Grid of All 6 Artifacts from Model/Controller */}
      <FeaturedRelicsSection />

      {/* 5. Historical Storytelling: Engineering, Discovery, Legacy Pillars */}
      <HistoricalSection />

      {/* 6. Interactive Comparison Laboratory Section */}
      <section className="py-20 sm:py-28 border-b border-space-border/60 relative">
        <Container>
          <Heading
            level={2}
            badge={<Badge variant="primary">Exploration Laboratory</Badge>}
            subtitle="Compare engineering design, mission durations, and physical conditions across worlds."
            align="center"
          >
            Direct Relic Comparison
          </Heading>

          <div className="mt-10">
            <ObjectComparison initialSlugA="surveyor-3" initialSlugB="sojourner-rover" />
          </div>
        </Container>
      </section>

      {/* 7. Interactive Educational Quiz Section */}
      <section className="py-20 sm:py-28 border-b border-space-border/60 relative">
        <Container size="narrow">
          <Heading
            level={2}
            badge={<Badge variant="primary">Museum Challenge</Badge>}
            subtitle="Test what you have learned about humanity's footsteps on other worlds."
            align="center"
          >
            Interactive Knowledge Quiz
          </Heading>

          <div className="mt-10">
            <EducationalQuiz />
          </div>
        </Container>
      </section>

      {/* 8. Call To Action: Final Immersive Museum Gateway */}
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
