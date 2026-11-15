import React from 'react';

/**
 * Apollo 11 Laser Ranging Retroreflector (LRRR - EASEP) SVG Illustration
 * Scientific features: Angled aluminum structural palette housing a precise 10x10 array
 * of synthetic silica corner-cube prisms that bounce laser photons back to Earth,
 * with rear thermal support leg and solar-orientation alignment gimbal.
 */
export const LaserRetroreflectorIcon = ({ className = 'w-8 h-8', 'aria-hidden': ariaHidden = true, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
    {...props}
  >
    {/* Regolith Ground Horizon */}
    <path d="M4 56C20 55 44 55 60 56" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />

    {/* Back Support Strut / Leveling Leg */}
    <path d="M18 53L24 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 54H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

    {/* Front Leveling Footpad */}
    <path d="M48 53L44 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="49" cy="53" rx="3.5" ry="1.2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />

    {/* Main Angled Retroreflector Pallet Housing (Tilted toward Earth) */}
    <path
      d="M20 38L32 18L52 26L40 46L20 38Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.12"
    />

    {/* Array Front Face Rim */}
    <path
      d="M23 37L33 21L49 27L39 43L23 37Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      fillOpacity="0.25"
    />

    {/* Corner Cube Quartz Prism Optics Grid (3x3 Isometric Matrix) */}
    <circle cx="28" cy="30" r="1.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.8" />
    <circle cx="35" cy="32" r="1.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.8" />
    <circle cx="42" cy="35" r="1.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.8" />

    <circle cx="31" cy="25" r="1.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.8" />
    <circle cx="37" cy="28" r="1.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.8" />
    <circle cx="44" cy="30" r="1.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.8" />

    {/* Reflected Earth Laser Pulse Line (Photons Returning to Earth) */}
    <path d="M37 28L54 10" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.85" />
    <path d="M50 10H54V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

    {/* Sun Compass / Angle Indicator Bracket */}
    <path d="M20 38V48H27" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
