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
    <div className="flex flex-col w-full bg-[#090B0E]">
      {/* 1. Cinematic Editorial Hero Section with AS12-48-7134 plate */}
      <HeroSection />

      {/* 2. Curatorial Introduction Section */}
      <IntroductionSection />

      {/* 3. Destination Selection: The Moon & Mars Photographic Portals */}
      <DestinationSection />

      {/* 4. Featured Relics: Curated Museum Exhibition Gallery */}
      <FeaturedRelicsSection />

      {/* 5. Historical Pillars: Engineering, Discovery, Extraterrestrial Heritage */}
      <HistoricalSection />

      {/* 8. Call To Action & Exhibition Conclusion */}
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
