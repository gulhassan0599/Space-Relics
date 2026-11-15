import React from 'react';

/**
 * Spirit Mars Exploration Rover (MER-A, 2004–2011) SVG Illustration
 * Scientific features: Shared MER architecture with tall Pancam/Navcam masthead (1.5 m),
 * triangular multi-panel solar array wings, 6-wheel rocker-bogie chassis with spiral-flexures,
 * circular Low-Gain Antenna, and distinctive right-front wheel locked in 2006 (dragging trench).
 */
export const SpiritRoverIcon = ({ className = 'w-8 h-8', 'aria-hidden': ariaHidden = true, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
    {...props}
  >
    {/* Ground Horizon / Martian Dust Trench Behind Right Front Wheel */}
    <path d="M4 56C16 55.5 38 55.5 48 57L54 58H60" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
    {/* Locked Wheel Drag Mark */}
    <path d="M48 57C44 57 40 56.5 36 56" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

    {/* Rocker-Bogie Suspension Assembly */}
    <path d="M14 49L24 40L34 43L44 49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 42L28 49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* 6 Cleated Aluminum Wheels with Spiral Flexure Hubs */}
    {/* Rear Wheel */}
    <circle cx="14" cy="49" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
    <circle cx="14" cy="49" r="1.8" stroke="currentColor" strokeWidth="1" />

    {/* Middle Wheel */}
    <circle cx="28" cy="49" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
    <circle cx="28" cy="49" r="1.8" stroke="currentColor" strokeWidth="1" />

    {/* Front Wheel (Spirit's historical stuck wheel, canted slightly) */}
    <circle cx="44" cy="49" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.35" />
    <line x1="41" y1="46" x2="47" y2="52" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
    <line x1="47" y1="46" x2="41" y2="52" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />

    {/* Central Warm Electronics Box (Body Chassis) */}
    <path d="M16 40H44V34H16V40Z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.25" rx="1" />

    {/* Triangular Solar Panel Deck Wings (MER Characteristic Shape) */}
    <path d="M10 34L20 31H42L52 34H10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.35" />
    <line x1="26" y1="31" x2="26" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="36" y1="31" x2="36" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.6" />

    {/* High-Gain Steerable Dish Antenna */}
    <ellipse cx="21" cy="27" rx="3.5" ry="1.8" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.3" transform="rotate(-20 21 27)" />
    <line x1="21" y1="31" x2="21" y2="28" stroke="currentColor" strokeWidth="1.4" />

    {/* Tall Remote Sensing Mast (PMA) with Pancam & Navcam Stereo Head */}
    <path d="M38 31V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 14H43V10H35V14Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.5" />
    {/* Twin Panoramic Cameras (Pancam) */}
    <circle cx="37" cy="12" r="1.2" fill="currentColor" />
    <circle cx="41" cy="12" r="1.2" fill="currentColor" />
    {/* Mini-TES Mirror Cylinder */}
    <rect x="36" y="14" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />

    {/* Instrument Deployment Device (IDD Robotic Arm - Stowed Position) */}
    <path d="M42 38L48 40L50 44" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="44" r="1.5" fill="currentColor" />
  </svg>
);
