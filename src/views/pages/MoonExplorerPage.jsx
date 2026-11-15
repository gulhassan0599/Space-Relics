import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { Card } from "../components/common/Card";
import { Button } from "../components/common/Button";
import LunarMap from "../components/explorer/LunarMap";
import SelectedRelicPanel from "../components/explorer/SelectedRelicPanel";
import ObjectCard from "../components/object/ObjectCard";
import { getMoonObjects } from "../../models/objectModel";
import { getMapMarkers } from "../../controllers/mapController";
import {
  CaretRight,
  MoonStars,
  CalendarBlank,
  Stack,
  ArrowRight,
} from "@phosphor-icons/react";

export const MoonExplorerPage = () => {
  // Model data
  const moonRelics = getMoonObjects();
  // Controller markers data with normalized map coordinates
  const moonMarkers = getMapMarkers("Moon");

  // Selected relic state (default to the first relic on load)
  const [selectedRelic, setSelectedRelic] = useState(moonRelics[0] || null);

  useEffect(() => {
    document.title = "Moon Explorer | Space Relics";
  }, []);

  const handleSelectMarker = (marker) => {
    const fullRelic =
      moonRelics.find((item) => item.id === marker.id) || marker;
    setSelectedRelic(fullRelic);
  };

  const scrollToMap = () => {
    const mapElement = document.getElementById("interactive-lunar-map-section");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full py-8 sm:py-12">
      <Container>
        {/* 1. Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono text-space-textSecondary">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-space-textMuted">
              <CaretRight weight="bold" className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link
                to="/explore"
                className="hover:text-white transition-colors"
              >
                Explore
              </Link>
            </li>
            <li className="text-space-textMuted">
              <CaretRight weight="bold" className="w-3.5 h-3.5" />
            </li>
            <li className="text-moon-white font-semibold" aria-current="page">
              The Moon
            </li>
          </ol>
        </nav>

        {/* 2. Moon Hero Section */}
        <section className="relative rounded-3xl border border-space-border/90 p-8 sm:p-14 mb-16 overflow-hidden shadow-2xl bg-[#090B0E]">
          {/* Authentic Lunar Surface Landscape Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/destinations/moon.jpg"
              alt="Apollo 17 high-resolution archival photograph of the Taurus-Littrow lunar valley"
              className="w-full h-full object-cover object-center filter contrast-[1.08] grayscale-[0.2] brightness-[0.7]"
            />
            {/* Dark editorial readability overlays */}
            <div className="absolute inset-0 bg-[#090B0E]/60 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090B0E] via-[#090B0E]/85 to-[#090B0E]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-moon-white tracking-tight leading-tight drop-shadow-md">
              Our Nearest Celestial Neighbor
            </h1>

            <p className="mt-5 text-sm sm:text-lg text-space-textSecondary leading-relaxed drop-shadow">
              A world that has witnessed some of humanity's earliest steps
              beyond Earth. Explore the equipment, experiments, and vehicles
              that remain on its surface, each carrying a story from a different
              chapter of lunar exploration.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="moon"
                size="lg"
                onClick={scrollToMap}
                className="gap-2 shadow-moon-glow"
              >
                <span>Explore Lunar Relics</span>
                <MoonStars weight="duotone" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Lunar Information Overview (Compact Sample Statistics) */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card
              elevated
              className="p-6 border-space-border/80 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-slate-800 text-moon-blue border border-slate-700">
                <MoonStars weight="duotone" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-moon-white">
                  03
                </span>
                <p className="text-xs text-space-textSecondary mt-0.5">
                  Featured Lunar Relics
                </p>
              </div>
            </Card>

            <Card
              elevated
              className="p-6 border-space-border/80 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-slate-800 text-moon-blue border border-slate-700">
                <CalendarBlank weight="duotone" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-moon-white">
                  1967
                </span>
                <p className="text-xs text-space-textSecondary mt-0.5">
                  Earliest Featured Object
                </p>
              </div>
            </Card>

            <Card
              elevated
              className="p-6 border-space-border/80 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-slate-800 text-moon-blue border border-slate-700">
                <Stack weight="duotone" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-moon-white">
                  03
                </span>
                <p className="text-xs text-space-textSecondary mt-0.5">
                  Featured Mission Programs
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* 4. Interactive Lunar Exploration Area */}
        <section id="interactive-lunar-map-section" className="mb-20">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
                Lunar Map
              </h2>
              <p className="text-xs sm:text-sm text-space-textSecondary mt-1">
                Select a marker to inspect the landing site and relic telemetry.
              </p>
            </div>
          </div>

          {/* Desktop side-by-side (8 cols / 4 cols), Mobile stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive SVG Lunar Map (8 cols on desktop) */}
            <div className="lg:col-span-8 flex flex-col">
              <LunarMap
                markers={moonMarkers}
                selectedRelic={selectedRelic}
                onSelectRelic={handleSelectMarker}
              />
            </div>

            {/* Selected Relic Details Panel (4 cols on desktop) */}
            <div className="lg:col-span-4 flex flex-col">
              <SelectedRelicPanel relic={selectedRelic} />
            </div>
          </div>
        </section>

        {/* 5. Relic Collection Section */}
        <section className="mb-20">
          <Heading
            level={2}
            subtitle="Explore the objects that preserve the history of humanity's lunar exploration."
          >
            The Relics of the Moon
          </Heading>

          {/* 3 Objects Grid using reusable ObjectCard from Stage 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {moonRelics.map((object) => (
              <div
                key={object.id}
                onClick={() => setSelectedRelic(object)}
                className="transition-all duration-200 rounded-xl"
              >
                <ObjectCard object={object} />
              </div>
            ))}
          </div>
        </section>

        {/* 6. Moon Exploration Call-To-Action */}
        <section className="rounded-3xl bg-gradient-to-r from-space-card to-space-cardElevated border border-space-border/80 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-moon-white">
              Continue to the Red Planet
            </h3>
            <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed">
              Having surveyed the Moon, travel further outward to explore the
              robotic scouts left behind across Martian craters.
            </p>
            <div className="pt-2">
              <Link to="/explore/mars">
                <Button variant="mars" size="lg" className="gap-2">
                  <span>Launch Mars Explorer</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default MoonExplorerPage;
