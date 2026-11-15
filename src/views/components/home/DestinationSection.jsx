import React from 'react';
import { Container } from '../common/Container';
import DestinationCard from './DestinationCard';

export const DestinationSection = () => {
  return (
    <section className="py-12 border-b border-space-border/80 bg-[#090B0E] relative">
      <Container>
        {/* Section Heading */}
        <div className="max-w-2xl">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-space-text font-normal tracking-tight">
            Choose a Destination Sector
          </h2>
          <p className="mt-4 text-sm sm:text-base text-space-textSecondary leading-relaxed font-sans">
            Humanity's technological heritage is distributed across two vastly different environments: the undisturbed vacuum of the Moon and the ferric winds of Mars.
          </p>
        </div>

        {/* 2 Photographic Exhibition Portals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mt-12 ">
          {/* Moon Destination Card */}
          <div className="flex h-full">
            <DestinationCard
              destination="The Moon"
              title="The Lunar Surface"
              sectorCode="SECTOR 01"
              description="Explore the undisturbed remnants of robotic landers, scientific reflectors, and crewed lunar roving vehicles preserved under lunar vacuum since the Apollo era."
              route="/explore/moon"
              variant="moon"
              imageSrc="/images/destinations/moon.jpg"
              imageAlt="Apollo 17 high-resolution archival photograph of the Taurus-Littrow lunar valley"
              className="w-full "
            />
          </div>

          {/* Mars Destination Card */}
          <div className="flex">
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
        </div>
      </Container>
    </section>
  );
};

export default DestinationSection;
