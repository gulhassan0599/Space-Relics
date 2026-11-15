import React from 'react';

/**
 * Apollo Lunar Roving Vehicle (LRV) SVG Illustration
 * Scientific features: Low-slung aluminum chassis, 4 open-mesh zinc-coated wire wheels
 * with chevron treads, tubular fold-down crew seats, control console joystick,
 * and high-gain mesh dish antenna mounted on the forward chassis.
 */
export const LunarRovingVehicleIcon = ({ className = 'w-8 h-8', 'aria-hidden': ariaHidden = true, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
    {...props}
  >
    {/* Ground line */}
    <path d="M4 56H60" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />

    {/* Low-Chassis Beam & Skid Plates */}
    <path d="M12 45H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 45L22 41H42L46 45" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />

    {/* Wire-Mesh Wheels (4 wheels represented in 2.5D profile) */}
    {/* Rear Wheels */}
    <g>
      <circle cx="15" cy="48" r="7" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="15" cy="48" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 48H20M15 43V53" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    </g>
    
    {/* Front Wheels */}
    <g>
      <circle cx="49" cy="48" r="7" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="49" cy="48" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M44 48H54M49 43V53" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    </g>

    {/* Tubular Crew Seats (Side Profile) */}
    <path d="M26 41V30C26 29 27 28 28 28H32V41" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
    <path d="M33 41V30C33 29 34 28 35 28H39V41" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    
    {/* T-Handle Control Console / Display */}
    <path d="M40 41L42 34H45" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />

    {/* High-Gain Parabolic Mesh Dish Antenna (Forward Deck) */}
    <path d="M46 41L48 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    {/* Parabolic Dish Arc */}
    <path d="M43 16C47 18 52 23 53 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M48 22L44 19" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="43.5" cy="18.5" r="1.5" fill="currentColor" />

    {/* Low Gain Omnidirectional Antenna */}
    <path d="M22 41V33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="22" cy="32" r="1" fill="currentColor" />
  </svg>
);
