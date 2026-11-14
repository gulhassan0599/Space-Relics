import React from 'react';

/**
 * Interactive SVG Marker for a Moon or Mars technological relic.
 * Maps normalized coordinates (0-100) into SVG coordinates.
 * Adapts pin accents based on destination ('Moon' vs 'Mars').
 */
export const RelicMarker = ({
  marker,
  isSelected,
  onSelect,
  svgWidth = 1000,
  svgHeight = 700
}) => {
  if (!marker || !marker.markerPosition) return null;

  const isMars = marker.destination?.toLowerCase() === 'mars';
  const posX = (marker.markerPosition.x / 100) * svgWidth;
  const posY = (marker.markerPosition.y / 100) * svgHeight;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(marker);
    }
  };

  return (
    <g
      transform={`translate(${posX}, ${posY})`}
      onClick={() => onSelect(marker)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Select ${marker.name} at ${marker.locationName}`}
      aria-pressed={isSelected}
      className="cursor-pointer group focus:outline-none"
    >
      {/* Outer Pulsing Aura (Enhanced on selection) */}
      <circle
        cx="0"
        cy="0"
        r={isSelected ? 26 : 16}
        className={`transition-all duration-300 ${
          isSelected
            ? isMars
              ? 'fill-orange-600/25 stroke-orange-400 stroke-1 animate-ping'
              : 'fill-space-accent/20 stroke-space-accentLight stroke-1 animate-ping'
            : isMars
              ? 'fill-orange-950/20 stroke-orange-700/50 group-hover:fill-orange-900/30'
              : 'fill-moon-blue/10 stroke-moon-blue/30 group-hover:fill-moon-blue/20'
        }`}
      />

      {/* Target Crosshairs for precision scientific feel */}
      <g
        stroke={isSelected ? (isMars ? '#FB923C' : '#38BDF8') : (isMars ? '#9A3412' : '#94A3B8')}
        strokeWidth="1"
        opacity={isSelected ? 0.95 : 0.45}
      >
        <line x1="-14" y1="0" x2="-8" y2="0" />
        <line x1="8" y1="0" x2="14" y2="0" />
        <line x1="0" y1="-14" x2="0" y2="-8" />
        <line x1="0" y1="8" x2="0" y2="14" />
      </g>

      {/* Primary Inner Pin Circle */}
      <circle
        cx="0"
        cy="0"
        r={isSelected ? 9 : 7}
        className={`transition-all duration-200 ${
          isSelected
            ? isMars
              ? 'fill-orange-600 stroke-white stroke-2 shadow-mars-glow'
              : 'fill-space-accent stroke-white stroke-2 shadow-subtle-glow'
            : isMars
              ? 'fill-[#2A0C06] stroke-orange-400 stroke-1.5 group-hover:fill-orange-700 group-hover:stroke-white'
              : 'fill-slate-800 stroke-moon-silver stroke-1.5 group-hover:fill-space-accent/80 group-hover:stroke-white'
        }`}
      />

      {/* Center Spec Point */}
      <circle
        cx="0"
        cy="0"
        r={isSelected ? 3 : 2}
        fill={isSelected ? '#FFFFFF' : (isMars ? '#FED7AA' : '#93C5FD')}
      />

      {/* Tooltip / Label Flag */}
      <g
        transform="translate(14, -14)"
        className={`transition-all duration-200 pointer-events-none select-none ${
          isSelected ? 'opacity-100' : 'opacity-85 group-hover:opacity-100 group-focus:opacity-100'
        }`}
      >
        {/* Tooltip Background Pill */}
        <rect
          x="0"
          y="-12"
          width={marker.name.length * 7.5 + 34}
          height="24"
          rx="6"
          className={`${
            isSelected
              ? isMars
                ? 'fill-[#200A06] stroke-orange-500 stroke-1 shadow-lg'
                : 'fill-[#162238] stroke-space-accent stroke-1 shadow-lg'
              : 'fill-[#0B1220]/95 stroke-space-border stroke-1'
          }`}
        />

        {/* Status Dot */}
        <circle
          cx="10"
          cy="0"
          r="3"
          fill={isSelected ? (isMars ? '#F97316' : '#38BDF8') : (isMars ? '#7C2D12' : '#64748B')}
        />

        {/* Object Name Text */}
        <text
          x="20"
          y="3.5"
          fill={isSelected ? '#F8FAFC' : '#CBD5E1'}
          fontSize="11"
          fontWeight={isSelected ? '600' : '500'}
          fontFamily="Space Grotesk, sans-serif"
        >
          {marker.name}
        </text>
      </g>
    </g>
  );
};

export default RelicMarker;
