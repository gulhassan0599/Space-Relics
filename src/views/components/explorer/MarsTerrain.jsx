import React from 'react';

/**
 * Procedural SVG Mars Terrain component.
 * Renders distinct Martian geography: Chryse Planitia, Valles Marineris canyon rift,
 * Olympus Mons caldera, Meridiani Planum, Gusev Crater, dust streaks, and rocky outcrops.
 */
export const MarsTerrain = () => {
  return (
    <g className="mars-terrain select-none pointer-events-none">
      <defs>
        {/* Base Martian Surface Radial Gradient */}
        <radialGradient id="marsSurfaceGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C2D12" />
          <stop offset="35%" stopColor="#5B220E" />
          <stop offset="65%" stopColor="#3A1608" />
          <stop offset="85%" stopColor="#250F07" />
          <stop offset="100%" stopColor="#140804" />
        </radialGradient>

        {/* Canyon Rift Gradient (Valles Marineris) */}
        <linearGradient id="canyonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#170603" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#2A0B05" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#120502" stopOpacity="0.95" />
        </linearGradient>

        {/* Dust Plain / Sandy Basin Gradient */}
        <radialGradient id="dustBasinGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9A3412" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#7C2D12" stopOpacity="0.25" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>

        {/* Volcano Caldera Shading */}
        <radialGradient id="volcanoCalderaGrad" cx="45%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#1A0703" />
          <stop offset="70%" stopColor="#431407" />
          <stop offset="100%" stopColor="#7C2D12" />
        </radialGradient>
      </defs>

      {/* Main Mars Background Plate */}
      <rect x="0" y="0" width="1000" height="700" fill="#070B16" />
      <ellipse cx="500" cy="350" rx="465" ry="325" fill="url(#marsSurfaceGradient)" />

      {/* Vast Sandy Dust Basins & Iron-Rich Plains */}
      {/* Acidalia & Chryse Planitia (North-West) */}
      <path
        d="M 240 180 C 350 160, 440 220, 420 340 C 390 420, 280 430, 220 370 C 170 300, 180 200, 240 180 Z"
        fill="url(#dustBasinGrad)"
      />

      {/* Meridiani Planum (Equatorial Center) */}
      <ellipse cx="530" cy="370" rx="110" ry="70" fill="#2E0E06" opacity="0.75" />

      {/* Hellas Planitia (Deep Impact Basin - South East) */}
      <ellipse cx="730" cy="510" rx="95" ry="65" fill="#250B05" opacity="0.8" />

      {/* Valles Marineris — Enormous Canyon System (Grand Canyon of Mars) */}
      <g opacity="0.85">
        <path
          d="M 280 380 Q 420 395 560 385 T 670 410"
          stroke="url(#canyonGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 330 385 Q 450 405 570 392"
          stroke="#0F0402"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Canyon branch fractures */}
        <line x1="380" y1="388" x2="410" y2="430" stroke="#1F0703" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <line x1="500" y1="385" x2="525" y2="425" stroke="#1F0703" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Olympus Mons — Solar System's Largest Volcano (Far West) */}
      <g transform="translate(190, 310)">
        <ellipse cx="0" cy="0" rx="55" ry="42" fill="#541B0B" stroke="#7C2D12" strokeWidth="2" opacity="0.7" />
        <ellipse cx="-2" cy="-2" rx="22" ry="16" fill="url(#volcanoCalderaGrad)" stroke="#260C05" strokeWidth="1.5" />
        <circle cx="-3" cy="-3" r="6" fill="#0D0301" />
      </g>

      {/* Tharsis Shield Volcano Chain (Ascraeus, Pavonis, Arsia Mons) */}
      <g opacity="0.6">
        <circle cx="270" cy="240" r="14" fill="#3D1307" stroke="#7C2D12" strokeWidth="1" />
        <circle cx="290" cy="300" r="16" fill="#3D1307" stroke="#7C2D12" strokeWidth="1" />
        <circle cx="310" cy="360" r="15" fill="#3D1307" stroke="#7C2D12" strokeWidth="1" />
      </g>

      {/* Prominent Martian Craters */}
      {/* Gusev Crater (Ancient Lake Bed) */}
      <g transform="translate(830, 435)">
        <ellipse cx="0" cy="0" rx="36" ry="28" fill="#1C0703" stroke="#9A3412" strokeWidth="2" opacity="0.9" />
        <ellipse cx="2" cy="1" rx="20" ry="14" fill="#120401" opacity="0.75" />
        {/* Columbia Hills Ridge */}
        <path d="M -14 0 Q -2 -10 12 -4" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      </g>

      {/* Gale Crater (Curiosity Landing Sector) */}
      <g transform="translate(740, 380)">
        <circle cx="0" cy="0" r="22" fill="#180602" stroke="#7C2D12" strokeWidth="1.5" opacity="0.8" />
        <circle cx="-2" cy="-1" r="7" fill="#3F1407" />
      </g>

      {/* Endeavour Crater in Meridiani Planum */}
      <g transform="translate(530, 385)">
        <circle cx="0" cy="0" r="18" fill="#140502" stroke="#B45309" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Ares Vallis Outflow Channels (Pathfinder / Sojourner landing wash) */}
      <g opacity="0.5">
        <path
          d="M 370 240 Q 380 290 380 340"
          stroke="#9A3412"
          strokeWidth="4"
          strokeDasharray="4 6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 390 260 Q 395 300 405 330"
          stroke="#7C2D12"
          strokeWidth="3"
          strokeDasharray="3 5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Scattered Regolith Boulders & Small Craters */}
      <circle cx="230" cy="480" r="9" fill="#1F0803" stroke="#7C2D12" strokeWidth="1" opacity="0.6" />
      <circle cx="460" cy="230" r="12" fill="#1A0602" stroke="#541B0B" strokeWidth="1" opacity="0.5" />
      <circle cx="630" cy="270" r="8" fill="#240A04" stroke="#7C2D12" strokeWidth="1" opacity="0.6" />
      <circle cx="680" cy="460" r="14" fill="#180502" stroke="#5B220E" strokeWidth="1" opacity="0.6" />
      <circle cx="340" cy="530" r="11" fill="#1B0703" stroke="#7C2D12" strokeWidth="1" opacity="0.5" />
      <circle cx="860" cy="260" r="7" fill="#1A0602" opacity="0.4" />
      <circle cx="160" cy="390" r="8" fill="#1A0602" opacity="0.4" />

      {/* Cartographic Landmark Labels */}
      <text x="140" y="275" fill="#9A3412" fontSize="11" fontFamily="Space Grotesk, sans-serif" letterSpacing="1.5" opacity="0.85">
        OLYMPUS MONS
      </text>
      <text x="410" y="415" fill="#D97706" fontSize="12" fontFamily="Space Grotesk, sans-serif" letterSpacing="2" opacity="0.8">
        VALLES MARINERIS
      </text>
      <text x="340" y="270" fill="#9A3412" fontSize="11" fontFamily="Space Grotesk, sans-serif" letterSpacing="1.5" opacity="0.8">
        ARES VALLIS
      </text>
      <text x="470" y="350" fill="#D97706" fontSize="11" fontFamily="Space Grotesk, sans-serif" letterSpacing="1.5" opacity="0.85">
        MERIDIANI PLANUM
      </text>
      <text x="800" y="485" fill="#D97706" fontSize="11" fontFamily="Space Grotesk, sans-serif" letterSpacing="1.5" opacity="0.85">
        GUSEV CRATER
      </text>

      {/* Subtle Mars Grid Coordinate Lines */}
      <g stroke="#431407" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.4">
        <line x1="80" y1="350" x2="920" y2="350" />
        <line x1="500" y1="50" x2="500" y2="650" />
        <line x1="150" y1="210" x2="850" y2="210" />
        <line x1="150" y1="490" x2="850" y2="490" />
      </g>
    </g>
  );
};

export default MarsTerrain;
