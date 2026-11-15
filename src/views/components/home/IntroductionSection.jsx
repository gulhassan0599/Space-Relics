import React from "react";
import { Container } from "../common/Container";

export const IntroductionSection = () => {
  return (
    <section
      id="introduction-section"
      className="py-8 border-b border-space-border/80 bg-space-bgSecondary/40 relative"
    >
      <Container>
        {/* Curatorial Exhibition Essay Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="text-left">
            <h2 className="font-editorial text-3xl sm:text-5xl text-space-text font-normal tracking-tight leading-tight mb-8">
              Not everything we send comes back.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-space-textSecondary leading-relaxed font-sans">
              <p>
                Human exploration leaves physical traces behind. Across the Moon
                and Mars, equipment from historic missions remains where
                exploration once unfolded.
              </p>
              <p>
                Some objects helped us determine the structural bearing capacity
                of distant regolith before human boots arrived. Others carried
                astronauts across volcanic rilles or conducted laser
                rangefinding experiments that continue to measure the Moon's
                orbital distance decades after launch.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroductionSection;
