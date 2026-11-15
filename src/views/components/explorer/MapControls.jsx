import React from 'react';
import { MagnifyingGlassPlus, MagnifyingGlassMinus, ArrowCounterClockwise } from '@phosphor-icons/react';

/**
 * Lightweight SVG map controls for zooming and resetting.
 */
export const MapControls = ({
  onZoomIn,
  onZoomOut,
  onReset,
  zoomLevel = 1,
  minZoom = 0.8,
  maxZoom = 2.5
}) => {
  return (
    <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#0B1220]/90 border border-space-border backdrop-blur-md shadow-lg select-none">
      <button
        type="button"
        onClick={onZoomIn}
        disabled={zoomLevel >= maxZoom}
        aria-label="Zoom in map"
        className="p-2 rounded-lg text-space-textSecondary hover:text-white hover:bg-space-cardElevated disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
      >
        <MagnifyingGlassPlus className="w-4 h-4" />
      </button>

      <span className="text-[11px] font-mono text-space-textMuted px-1 min-w-[36px] text-center">
        {Math.round(zoomLevel * 100)}%
      </span>

      <button
        type="button"
        onClick={onZoomOut}
        disabled={zoomLevel <= minZoom}
        aria-label="Zoom out map"
        className="p-2 rounded-lg text-space-textSecondary hover:text-white hover:bg-space-cardElevated disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
      >
        <MagnifyingGlassMinus className="w-4 h-4" />
      </button>

      <div className="w-[1px] h-4 bg-space-border/80 mx-0.5" />

      <button
        type="button"
        onClick={onReset}
        aria-label="Reset map view"
        className="p-2 rounded-lg text-space-textSecondary hover:text-white hover:bg-space-cardElevated transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
      >
        <ArrowCounterClockwise className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default MapControls;
