import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import MarsMap from '../components/explorer/MarsMap';
import SelectedRelicPanel from '../components/explorer/SelectedRelicPanel';
import ObjectCard from '../components/object/ObjectCard';
import { getMarsObjects } from '../../models/objectModel';
import { getMapMarkers } from '../../controllers/mapController';
import {
  ChevronRight,
  Compass,
  Calendar,
  Layers,
  ArrowRight,
  Globe2
} from 'lucide-react';

export const MarsExplorerPage = () => {
  // Model data for Mars
  const marsRelics = getMarsObjects();
  // Controller markers data with normalized map coordinates
  const marsMarkers = getMapMarkers('Mars');

  // Selected relic state (default to the first relic on load)
  const [selectedRelic, setSelectedRelic] = useState(marsRelics[0] || null);

  useEffect(() => {
    document.title = 'Mars Explorer | Space Relics';
  }, []);

  const handleSelectMarker = (marker) => {
    const fullRelic = marsRelics.find((item) => item.id === marker.id) || marker;
    setSelectedRelic(fullRelic);
  };

  const scrollToMap = () => {
    const mapElement = document.getElementById('interactive-mars-map-section');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
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
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link to="/explore" className="hover:text-white transition-colors">
                Explore
              </Link>
            </li>
            <li className="text-space-textMuted">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-orange-300 font-semibold" aria-current="page">
              Mars
            </li>
          </ol>
        </nav>

        {/* 2. Mars Hero Section */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#1C0703] via-[#120502] to-[#070B16] border border-orange-900/60 p-8 sm:p-14 mb-16 overflow-hidden shadow-2xl">
          {/* Subtle Martian Rust / Red Glow Backdrops */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Orbital wireframe rings in hero */}
          <svg className="absolute -right-20 -bottom-20 w-[420px] h-[420px] opacity-15 stroke-orange-500 pointer-events-none">
            <circle cx="210" cy="210" r="160" fill="none" strokeWidth="0.75" strokeDasharray="3 6" />
            <circle cx="210" cy="210" r="200" fill="none" strokeWidth="0.5" />
          </svg>

          <div className="relative z-10 max-w-2xl">
            <Badge variant="mars" className="mb-4">
              Destination: Ares
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-orange-100 tracking-tight leading-tight">
              The Red Planet Awaits
            </h1>

            <p className="mt-5 text-sm sm:text-lg text-space-textSecondary leading-relaxed">
              Across the dusty plains and rocky landscapes of Mars, robotic explorers have carried humanity's curiosity to another world. Discover the machines that transformed our understanding of the Red Planet and the stories they left behind.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="mars" size="lg" onClick={scrollToMap} className="gap-2 shadow-mars-glow">
                <span>Explore Martian Relics</span>
                <Compass className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Martian Information Overview (Compact Sample Statistics) */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card elevated className="p-6 border-orange-950/80 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-950/70 text-orange-400 border border-orange-900/60">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-orange-200">03</span>
                <p className="text-xs text-space-textSecondary mt-0.5">Featured Robotic Explorers</p>
              </div>
            </Card>

            <Card elevated className="p-6 border-orange-950/80 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-950/70 text-orange-400 border border-orange-900/60">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-orange-200">1997</span>
                <p className="text-xs text-space-textSecondary mt-0.5">Earliest Featured Rover</p>
              </div>
            </Card>

            <Card elevated className="p-6 border-orange-950/80 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-950/70 text-orange-400 border border-orange-900/60">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-orange-200">03</span>
                <p className="text-xs text-space-textSecondary mt-0.5">Featured Missions</p>
              </div>
            </Card>
          </div>
        </section>

        {/* 4. Interactive Mars Exploration Area */}
        <section id="interactive-mars-map-section" className="mb-20">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <Badge variant="mars" className="mb-2">
                Cartographic Visualization
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
                Interactive Mars Map
              </h2>
              <p className="text-xs sm:text-sm text-space-textSecondary mt-1">
                Select a rover marker to inspect the landing site and operational history.
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
            badge={<Badge variant="mars">Martian Artifact Catalog</Badge>}
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
                className={`transition-all duration-200 rounded-xl ${
                  selectedRelic?.id === object.id ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-[#070B16]' : ''
                }`}
              >
                <ObjectCard object={object} />
              </div>
            ))}
          </div>
        </section>

        {/* 6. Cross-Destination Switcher */}
        <section className="mb-20">
          <Card elevated className="p-8 sm:p-10 border-space-border/80">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block mb-1">
                  Cross-Destination Navigation
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-space-text">
                  Explore Another World
                </h3>
                <p className="text-xs sm:text-sm text-space-textSecondary mt-1 max-w-md">
                  Compare the robotic rovers of Mars with the landing sites and Apollo equipment left on the Moon.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link to="/explore/moon" className="flex-1 sm:flex-none">
                  <Button variant="moon" size="md" className="w-full gap-2">
                    <Globe2 className="w-4 h-4 text-moon-blue" />
                    <span>Explore the Moon</span>
                  </Button>
                </Link>
                <div className="px-4 py-2 rounded-lg bg-orange-950/60 border border-orange-900/70 text-xs font-medium text-orange-300">
                  Mars (Active)
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* 7. Call-To-Action */}
        <section className="rounded-3xl bg-gradient-to-r from-space-card to-space-cardElevated border border-space-border/80 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-orange-200">
              Three Explorers. One Extraordinary World.
            </h3>
            <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed">
              Discover the machines that carried human curiosity across the Martian landscape.
            </p>
            <div className="pt-2">
              <Link to="/explore">
                <Button size="lg" className="gap-2 shadow-subtle-glow">
                  <span>Explore the Collection</span>
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
