import React from 'react';

/**
 * Surveyor 3 Lunar Lander SVG Illustration
 * Scientific features: Tripod landing leg structure with footpads, tubular spaceframe,
 * central planar solar panel mast, omnidirectional antenna, and surface sampler scoop arm.
 */
export const Surveyor3Icon = ({ className = 'w-8 h-8', 'aria-hidden': ariaHidden = true, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
    {...props}
  >
    {/* Lunar Surface Baseline */}
    <path d="M6 56C18 55 46 55 58 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    
    {/* Landing Tripod Legs & Footpads */}
    {/* Center Leg */}
    <path d="M32 38V54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <ellipse cx="32" cy="54" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
    
    {/* Left Leg with shock strut */}
    <path d="M25 36L14 52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M22 44L16 48" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    <ellipse cx="13" cy="52" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" transform="rotate(-15 13 52)" />

    {/* Right Leg with shock strut */}
    <path d="M39 36L50 52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M42 44L48 48" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    <ellipse cx="51" cy="52" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" transform="rotate(15 51 52)" />

    {/* Tubular Spaceframe Central Body */}
    <path d="M24 38L32 26L40 38H24Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    <circle cx="32" cy="33" r="3" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.3" />

    {/* Central Solar Panel & Mast */}
    <path d="M32 26V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="25" y="8" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.25" />
    <line x1="32" y1="8" x2="32" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    <line x1="25" y1="12" x2="39" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.7" />

    {/* High Gain Planar / Omnidirectional Antenna */}
    <path d="M36 8L44 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="45" cy="3.5" r="1.5" fill="currentColor" />

    {/* Surface Sampler Arm (Apollo 12 retrieved scoop) */}
    <path d="M24 36L16 32L10 40H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 38V42L8 41Z" fill="currentColor" />
  </svg>
);
