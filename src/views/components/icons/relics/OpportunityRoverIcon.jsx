import React from 'react';

/**
 * Opportunity Mars Exploration Rover (MER-B, 2004–2019) SVG Illustration
 * Scientific features: Shared MER architecture with Spirit (rocker-bogie, solar wing panels,
 * Pancam mast), with authentic distinguishing historical features: extended robotic arm
 * with Rock Abrasion Tool (RAT) deployed forward examining bedrock, and forward-canted mast.
 */
export const OpportunityRoverIcon = ({ className = 'w-8 h-8', 'aria-hidden': ariaHidden = true, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
    {...props}
  >
    {/* Endurance / Endeavour Crater Rim Horizon */}
    <path d="M4 56C14 55 34 54 46 56L60 57" stroke="currentColor" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
    
    {/* Rocker-Bogie Suspension Assembly (Full Operational Mobility) */}
    <path d="M14 49L24 40L34 43L44 49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 42L28 49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* 6 Wheels - 45.16 km Marathon Record Holder */}
    {/* Rear Wheel */}
    <circle cx="14" cy="49" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
    <circle cx="14" cy="49" r="1.8" stroke="currentColor" strokeWidth="1" />

    {/* Middle Wheel */}
    <circle cx="28" cy="49" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
    <circle cx="28" cy="49" r="1.8" stroke="currentColor" strokeWidth="1" />

    {/* Front Wheel (Functional, driving forward) */}
    <circle cx="44" cy="49" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
    <circle cx="44" cy="49" r="1.8" stroke="currentColor" strokeWidth="1" />

    {/* Warm Electronics Box Body */}
    <path d="M16 40H44V34H16V40Z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.25" rx="1" />

    {/* Triangular Solar Panel Deck Wings (MER Platform) */}
    <path d="M10 34L20 31H42L52 34H10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.35" />
    <line x1="26" y1="31" x2="26" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="36" y1="31" x2="36" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.6" />

    {/* Steerable High-Gain Dish Antenna */}
    <ellipse cx="20" cy="27" rx="3.5" ry="1.8" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.3" transform="rotate(-15 20 27)" />
    <line x1="20" y1="31" x2="20" y2="28" stroke="currentColor" strokeWidth="1.4" />

    {/* Tall Remote Sensing Mast (PMA) with Pancam & Navcam Stereo Head */}
    <path d="M37 31V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 13H42V9H34V13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.5" />
    {/* Twin Panoramic Cameras (Pancam) */}
    <circle cx="36" cy="11" r="1.2" fill="currentColor" />
    <circle cx="40" cy="11" r="1.2" fill="currentColor" />

    {/* Distinguishing Opportunity Feature: Fully Extended Robotic Arm (IDD) */}
    {/* 5-Degree of Freedom Arm deployed forward inspecting hematite blueberries */}
    <path d="M42 38L49 39L56 46L55 52" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    {/* Rock Abrasion Tool (RAT) / Mössbauer Spectrometer Turret */}
    <circle cx="55" cy="52" r="2.2" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.6" />
    <circle cx="58" cy="54" r="1" fill="currentColor" opacity="0.8" />
  </svg>
);
