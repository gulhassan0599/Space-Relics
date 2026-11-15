import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { Card } from "../components/common/Card";
import { Button } from "../components/common/Button";
import MarsMap from "../components/explorer/MarsMap";
import SelectedRelicPanel from "../components/explorer/SelectedRelicPanel";
import ObjectCard from "../components/object/ObjectCard";
import { getMarsObjects } from "../../models/objectModel";
import { getMapMarkers } from "../../controllers/mapController";
import {
  CaretRight,
  Planet,
  CalendarBlank,
  Stack,
  ArrowRight,
} from "@phosphor-icons/react";

export const MarsExplorerPage = () => {
  // Model data for Mars
  const marsRelics = getMarsObjects();
  // Controller markers data with normalized map coordinates
  const marsMarkers = getMapMarkers("Mars");

  // Selected relic state (default to the first relic on load)
  const [selectedRelic, setSelectedRelic] = useState(marsRelics[0] || null);

  useEffect(() => {
    document.title = "Mars Explorer | Space Relics";
  }, []);

  const handleSelectMarker = (marker) => {
    const fullRelic =
      marsRelics.find((item) => item.id === marker.id) || marker;
    setSelectedRelic(fullRelic);
  };

  const scrollToMap = () => {
    const mapElement = document.getElementById("interactive-mars-map-section");
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
            <li className="text-orange-300 font-semibold" aria-current="page">
              Mars
            </li>
          </ol>
        </nav>

        {/* 2. Mars Hero Section */}
        <section className="relative rounded-3xl border border-orange-900/60 p-8 sm:p-14 mb-16 overflow-hidden shadow-2xl bg-[#090B0E]">
          {/* Authentic Martian Surface Landscape Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/destinations/mars.jpg"
              alt="Mars Pathfinder panoramic terrain plate of Ares Vallis showing rocky surface and Twin Peaks"
              className="w-full h-full object-cover object-center filter contrast-[1.1] brightness-[0.7]"
            />
            {/* Dark editorial readability overlays */}
            <div className="absolute inset-0 bg-[#090B0E]/60 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090B0E] via-[#090B0E]/85 to-[#090B0E]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-orange-100 tracking-tight leading-tight drop-shadow-md">
              The Red Planet Awaits
            </h1>

            <p className="mt-5 text-sm sm:text-lg text-space-textSecondary leading-relaxed drop-shadow">
              Across the dusty plains and rocky landscapes of Mars, robotic
              explorers have carried humanity's curiosity to another world.
              Discover the machines that transformed our understanding of the
              Red Planet and the stories they left behind.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="mars"
                size="lg"
                onClick={scrollToMap}
                className="gap-2 shadow-mars-glow"
              >
                <span>Explore Martian Relics</span>
                <Planet weight="duotone" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Martian Information Overview (Compact Sample Statistics) */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card
              elevated
              className="p-6 border-orange-950/80 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-orange-950/70 text-orange-400 border border-orange-900/60">
                <Planet weight="duotone" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-orange-200">
                  03
                </span>
                <p className="text-xs text-space-textSecondary mt-0.5">
                  Featured Robotic Explorers
                </p>
              </div>
            </Card>

            <Card
              elevated
              className="p-6 border-orange-950/80 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-orange-950/70 text-orange-400 border border-orange-900/60">
                <CalendarBlank weight="duotone" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-orange-200">
                  1997
                </span>
                <p className="text-xs text-space-textSecondary mt-0.5">
                  Earliest Featured Rover
                </p>
              </div>
            </Card>

            <Card
              elevated
              className="p-6 border-orange-950/80 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-orange-950/70 text-orange-400 border border-orange-900/60">
                <Stack weight="duotone" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-orange-200">
                  03
                </span>
                <p className="text-xs text-space-textSecondary mt-0.5">
                  Featured Missions
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* 4. Interactive Mars Exploration Area */}
        <section id="interactive-mars-map-section" className="mb-20">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
                Interactive Mars Map
              </h2>
              <p className="text-xs sm:text-sm text-space-textSecondary mt-1">
                Select a rover marker to inspect the landing site and
                operational history.
              </p>
            </div>

            <span className="text-xs font-mono text-space-textMuted">
              Normalized Equirectangular Vector Chart
            </span>
          </div>

          {/* Desktop side-by-side (8 cols / 4 cols), Mobile stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive SVG Mars Map (8 cols on desktop) */}
            <div className="lg:col-span-8 flex flex-col">
              <MarsMap
                markers={marsMarkers}
                selectedRelic={selectedRelic}
                onSelectRelic={handleSelectMarker}
              />
            </div>

            {/* Selected Relic Details Panel (4 cols on desktop) */}
            <div className="lg:col-span-4 flex flex-col">
              <SelectedRelicPanel relic={selectedRelic} destination="Mars" />
            </div>
          </div>
        </section>

        {/* 5. Martian Relic Collection Section */}
        <section className="mb-20">
          <Heading
            level={2}
            subtitle="Meet the robotic pioneers that carried humanity's curiosity across the Martian landscape."
          >
            The Explorers of Mars
          </Heading>

          {/* 3 Objects Grid using reusable ObjectCard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {marsRelics.map((object) => (
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

        {/* 7. Call-To-Action: Navigate to the Moon */}
        <section className="rounded-3xl bg-gradient-to-r from-space-card to-space-cardElevated border border-space-border/80 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-moon-white">
              Journey to the Moon
            </h3>
            <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed">
              Having explored the robotic rovers of Mars, return inward to discover the early Apollo landers and lunar surface artifacts resting on the Moon.
            </p>
            <div className="pt-2">
              <Link to="/explore/moon">
                <Button variant="moon" size="lg" className="gap-2 shadow-moon-glow">
                  <span>Launch Moon Explorer</span>
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

export default MarsExplorerPage;
