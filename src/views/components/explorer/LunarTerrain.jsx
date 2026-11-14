import React from 'react';

/**
 * Procedural SVG Lunar Terrain component rendering craters, maria, and surface texture.
 */
export const LunarTerrain = () => {
  return (
    <g className="lunar-terrain select-none pointer-events-none">
      {/* Base Moon Surface Gradient Fill */}
      <defs>
        <radialGradient id="moonSurfaceGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#253248" />
          <stop offset="45%" stopColor="#182337" />
          <stop offset="80%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#0B1220" />
        </radialGradient>

        <linearGradient id="craterRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#475569" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1E293B" stopOpacity="0.9" />
        </linearGradient>

        <radialGradient id="mareTranquillitatisGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0A0F1D" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#111B2E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="oceanusProcellarumGrad" cx="40%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0B1120" stopOpacity="0.9" />
          <stop offset="75%" stopColor="#131E33" stopOpacity="0.55" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Main Lunar Disk / Base Plate */}
      <rect x="0" y="0" width="1000" height="700" fill="#070B16" />
      <ellipse cx="500" cy="350" rx="460" ry="320" fill="url(#moonSurfaceGradient)" />

      {/* Maria Formations (Dark Basaltic Plains) */}
      {/* Oceanus Procellarum (Left / West) */}
      <path
        d="M 220 200 C 320 180, 420 240, 390 400 C 360 520, 240 540, 200 440 C 160 340, 150 220, 220 200 Z"
        fill="url(#oceanusProcellarumGrad)"
      />
      {/* Mare Imbrium (Upper Center-Left) */}
      <circle cx="420" cy="240" r="110" fill="#0E172A" opacity="0.75" />
      {/* Mare Serenitatis (Center) */}
      <circle cx="570" cy="260" r="80" fill="#0D1628" opacity="0.8" />
      {/* Mare Tranquillitatis (Sea of Tranquility - Center-Right) */}
      <path
        d="M 620 300 C 700 300, 750 360, 720 430 C 680 490, 590 470, 580 400 C 570 340, 590 300, 620 300 Z"
        fill="url(#mareTranquillitatisGrad)"
      />

      {/* Terrain Ridge / Mountain Lines (Apennines & Highlands) */}
      <path
        d="M 430 330 Q 480 300 520 250"
        stroke="#475569"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 440 340 Q 490 310 530 260"
        stroke="#334155"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* Surface Micro-Texture & Small Crater Scatter */}
      <circle cx="180" cy="260" r="8" fill="#1E293B" stroke="#334155" strokeWidth="1" opacity="0.6" />
      <circle cx="280" cy="180" r="14" fill="#111B2E" stroke="#475569" strokeWidth="1.5" opacity="0.7" />
      <circle cx="310" cy="460" r="10" fill="#182337" stroke="#334155" strokeWidth="1" opacity="0.5" />
      <circle cx="480" cy="480" r="18" fill="#0F172A" stroke="#475569" strokeWidth="1.5" opacity="0.6" />
      <circle cx="750" cy="240" r="12" fill="#182337" stroke="#334155" strokeWidth="1" opacity="0.5" />
      <circle cx="780" cy="420" r="16" fill="#111B2E" stroke="#384964" strokeWidth="1.5" opacity="0.6" />
      <circle cx="510" cy="560" r="22" fill="#162238" stroke="#475569" strokeWidth="1.5" opacity="0.6" />
      <circle cx="260" cy="360" r="6" fill="#1E293B" opacity="0.5" />
      <circle cx="640" cy="210" r="7" fill="#1E293B" opacity="0.5" />
      <circle cx="390" cy="520" r="9" fill="#1E293B" opacity="0.4" />

      {/* Prominent Craters */}
      {/* Copernicus Crater */}
      <g transform="translate(380, 360)">
        <circle cx="0" cy="0" r="26" fill="#0C1322" stroke="url(#craterRimGrad)" strokeWidth="2.5" />
        <circle cx="-2" cy="-2" r="10" fill="#070B16" opacity="0.8" />
        {/* Ray system */}
        <line x1="0" y1="0" x2="-60" y2="-40" stroke="#475569" strokeWidth="1" opacity="0.25" strokeDasharray="3 4" />
        <line x1="0" y1="0" x2="50" y2="-50" stroke="#475569" strokeWidth="1" opacity="0.2" strokeDasharray="3 4" />
        <line x1="0" y1="0" x2="40" y2="60" stroke="#475569" strokeWidth="1" opacity="0.2" strokeDasharray="3 4" />
        <line x1="0" y1="0" x2="-50" y2="40" stroke="#475569" strokeWidth="1" opacity="0.25" strokeDasharray="3 4" />
      </g>

      {/* Tycho Crater (Southern Highlands) */}
      <g transform="translate(490, 580)">
        <circle cx="0" cy="0" r="28" fill="#0C1322" stroke="url(#craterRimGrad)" strokeWidth="3" />
        <circle cx="-1" cy="-1" r="9" fill="#080D1A" />
        {/* Prominent Tycho Rays */}
        <line x1="0" y1="0" x2="-180" y2="-160" stroke="#64748B" strokeWidth="1.2" opacity="0.3" strokeDasharray="4 6" />
        <line x1="0" y1="0" x2="160" y2="-180" stroke="#64748B" strokeWidth="1.2" opacity="0.25" strokeDasharray="4 6" />
        <line x1="0" y1="0" x2="30" y2="-260" stroke="#64748B" strokeWidth="1" opacity="0.2" strokeDasharray="4 6" />
      </g>

      {/* Mare / Landmark Labels (Subtle Cartographic Markings) */}
      <text x="210" y="320" fill="#475569" fontSize="12" fontFamily="Space Grotesk, sans-serif" letterSpacing="2" opacity="0.7">
        OCEANUS PROCELLARUM
      </text>
      <text x="360" y="220" fill="#475569" fontSize="11" fontFamily="Space Grotesk, sans-serif" letterSpacing="2" opacity="0.6">
        MARE IMBRIUM
      </text>
      <text x="610" y="380" fill="#475569" fontSize="11" fontFamily="Space Grotesk, sans-serif" letterSpacing="2" opacity="0.7">
        MARE TRANQUILLITATIS
      </text>
      <text x="490" y="270" fill="#3B82F6" fontSize="10" fontFamily="Space Grotesk, sans-serif" letterSpacing="1.5" opacity="0.6">
        MONTES APENNINUS
      </text>

      {/* Cartographic Latitude / Longitude Subtle Reference Lines */}
      <g stroke="#1E293B" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.4">
        {/* Equator */}
        <line x1="80" y1="350" x2="920" y2="350" />
        {/* Prime Meridian */}
        <line x1="500" y1="50" x2="500" y2="650" />
        {/* 30 Deg North & South */}
        <line x1="150" y1="210" x2="850" y2="210" />
        <line x1="150" y1="490" x2="850" y2="490" />
      </g>
    </g>
  );
};

export default LunarTerrain;
