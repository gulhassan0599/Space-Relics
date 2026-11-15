import React from 'react';

/**
 * Sojourner Mars Rover (Mars Pathfinder 1997) SVG Illustration
 * Scientific features: Compact microrover proportions (65 cm length), flat rectangular
 * GaAs solar panel top deck, 6 aluminum cleated wheels with rocker-bogie suspension,
 * forward monochrome stereo camera hazard optics, and rear APXS spectrometer instrument.
 */
export const SojournerRoverIcon = ({ className = 'w-8 h-8', 'aria-hidden': ariaHidden = true, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
    {...props}
  >
    {/* Martian Terrain Surface */}
    <path d="M4 56C16 55.5 48 55.5 60 56" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />

    {/* Rocker-Bogie Suspension Linkages */}
    <path d="M16 48L24 38L32 40L42 42L48 48" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 40L32 48" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

    {/* 6 Cleated Metal Wheels (3 visible in side elevation) */}
    {/* Rear Wheel */}
    <circle cx="16" cy="48" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="16" cy="48" r="1.8" stroke="currentColor" strokeWidth="1" />
    <line x1="16" y1="43" x2="16" y2="53" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

    {/* Middle Wheel */}
    <circle cx="32" cy="48" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="32" cy="48" r="1.8" stroke="currentColor" strokeWidth="1" />
    <line x1="32" y1="43" x2="32" y2="53" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

    {/* Front Wheel */}
    <circle cx="48" cy="48" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="48" cy="48" r="1.8" stroke="currentColor" strokeWidth="1" />
    <line x1="48" y1="43" x2="48" y2="53" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

    {/* Warm Electronics Box (WEB) Core Chassis */}
    <path d="M18 38H46V30H18V38Z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.25" rx="1" />

    {/* Flat Rectangular Solar Panel Roof Deck */}
    <rect x="14" y="27" width="36" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.4" />
    <line x1="26" y1="27" x2="26" y2="31" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <line x1="38" y1="27" x2="38" y2="31" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

    {/* Forward Stereo Vision Cameras (Navigation Sensors) */}
    <rect x="44" y="24" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.3" />
    <circle cx="46.5" cy="26" r="1" fill="currentColor" />
    <circle cx="48.5" cy="26" r="1" fill="currentColor" />

    {/* Low Gain Omnidirectional Antenna Mast */}
    <line x1="20" y1="27" x2="20" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="20" cy="17" r="1.5" fill="currentColor" />

    {/* Rear Alpha Particle X-Ray Spectrometer (APXS) Arm */}
    <path d="M16 35L9 39V43" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="7" y="42" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.3" />
  </svg>
);
