import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroductionSection from '../components/home/IntroductionSection';
import DestinationSection from '../components/home/DestinationSection';
import FeaturedRelicsSection from '../components/home/FeaturedRelicsSection';
import HistoricalSection from '../components/home/HistoricalSection';
import CallToActionSection from '../components/home/CallToActionSection';

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

      {/* 6. Call To Action: Final Immersive Museum Gateway */}
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
