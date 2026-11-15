import React, { useState } from "react";
import LunarTerrain from "./LunarTerrain";
import RelicMarker from "./RelicMarker";
import MapControls from "./MapControls";
import MapLegend from "./MapLegend";

/**
 * Main Interactive 2D SVG Lunar Map.
 * Renders custom SVG lunar terrain, responsive viewBox, zoom controls, and interactive markers.
 */
export const LunarMap = ({
  markers = [],
  selectedRelic = null,
  onSelectRelic,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // SVG Native Coordinate dimensions
  const baseWidth = 1000;
  const baseHeight = 700;

  // Zoom handling by transforming the SVG viewBox
  const handleZoomIn = () =>
    setZoomLevel((prev) => Math.min(2.0, +(prev + 0.25).toFixed(2)));
  const handleZoomOut = () =>
    setZoomLevel((prev) => Math.max(0.8, +(prev - 0.25).toFixed(2)));
  const handleReset = () => setZoomLevel(1);

  // Calculate viewBox based on zoom centered at (500, 350)
  const currentWidth = baseWidth / zoomLevel;
  const currentHeight = baseHeight / zoomLevel;
  const currentMinX = (baseWidth - currentWidth) / 2;
  const currentMinY = (baseHeight - currentHeight) / 2;

  const viewBoxString = `${currentMinX} ${currentMinY} ${currentWidth} ${currentHeight}`;

  return (
    <div className="relative w-full h-[440px] sm:h-[540px] lg:h-[600px] rounded-2xl bg-[#070B16] border border-space-border/90 overflow-hidden shadow-2xl flex flex-col justify-between select-none">
      {/* Top Map Bar: Destination Label & Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto px-3 py-1.5 rounded-lg bg-[#0B1220]/80 border border-space-border backdrop-blur-md">
          <span className="text-[11px] font-mono tracking-wider text-moon-blue uppercase font-medium">
            Lunar Surface Map
          </span>
        </div>

        <div className="pointer-events-auto">
          <MapControls
            zoomLevel={zoomLevel}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onReset={handleReset}
          />
        </div>
      </div>

      {/* SVG Interactive Canvas */}
      <div className="w-full h-full cursor-crosshair overflow-hidden flex items-center justify-center">
        <svg
          viewBox={viewBoxString}
          className="w-full h-full transition-[viewBox] duration-300 ease-out"
          preserveAspectRatio="xMidYMid meet"
          role="region"
          aria-label="Interactive map of technological artifacts resting on the Moon"
        >
          {/* Layer 1: Procedural Lunar Basemap & Craters */}
          <LunarTerrain />

          {/* Layer 2: Interactive Relic Markers from JSON Controller */}
          <g className="relic-markers-layer">
            {markers.map((marker) => (
              <RelicMarker
                key={marker.id}
                marker={marker}
                isSelected={selectedRelic?.id === marker.id}
                onSelect={onSelectRelic}
                svgWidth={baseWidth}
                svgHeight={baseHeight}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Bottom Map Bar: Legend & Sample Coordinates Notice */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="pointer-events-auto">
          <MapLegend />
        </div>
      </div>
    </div>
  );
};

export default LunarMap;
