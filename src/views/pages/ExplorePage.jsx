import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { Heading } from '../components/common/Heading';
import { Badge } from '../components/common/Badge';
import DestinationCard from '../components/home/DestinationCard';

export const ExplorePage = () => {
  useEffect(() => {
    document.title = 'Explore Destinations | Space Relics';
  }, []);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Heading
          level={1}
          subtitle="Choose a celestial destination to investigate the technological relics humanity left behind."
        >
          Explore Artifacts
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Moon Card */}
          <DestinationCard
            destination="The Moon"
            title="The Lunar Surface"
            sectorCode="SECTOR 01"
            description="Explore the undisturbed remnants of robotic landers, scientific reflectors, and crewed lunar roving vehicles preserved under lunar vacuum since the Apollo era."
            route="/explore/moon"
            variant="moon"
            imageSrc="/images/destinations/moon.jpg"
            imageAlt="Apollo 17 high-resolution archival photograph of the Taurus-Littrow lunar valley"
            className="w-full"
          />

          {/* Mars Card */}
          <DestinationCard
            destination="The Mars"
            title="The Red Planet"
            sectorCode="SECTOR 02"
            description="Discover the robotic rovers that traversed ancient river valleys, volcanic plains, and impact craters to revolutionize planetary science on Mars."
            route="/explore/mars"
            variant="mars"
            imageSrc="/images/destinations/mars.jpg"
            imageAlt="Mars Pathfinder panoramic terrain plate of Ares Vallis showing rocky surface and Twin Peaks"
            className="w-full"
          />
        </div>
      </Container>
    </div>
  );
};

export default ExplorePage;
