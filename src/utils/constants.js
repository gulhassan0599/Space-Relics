/**
 * SPACE RELICS - Global Constants and Design Tokens
 */

export const APP_IDENTITY = {
  name: 'Space Relics',
  tagline: 'The Stories We Left Behind',
  competition: 'NASA Space Apps Challenge 2026',
  disclaimer: 'Space Relics is an independent educational museum project created for the NASA Space Apps Challenge 2026 and is not affiliated with or endorsed by NASA.'
};

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Explore', path: '/explore' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'About', path: '/about' }
];

export const DESTINATIONS = {
  MOON: {
    id: 'moon',
    name: 'The Moon',
    subtitle: 'Earth\'s Celestial Companion',
    color: 'moon-blue',
    path: '/explore/moon'
  },
  MARS: {
    id: 'mars',
    name: 'Mars',
    subtitle: 'The Red Planet',
    color: 'mars-rust',
    path: '/explore/mars'
  }
};

export const COLOR_TOKENS = {
  primaryBg: '#070B16',
  secondaryBg: '#0B1220',
  cardBg: '#111B2E',
  elevatedSurface: '#162238',
  primaryAccent: '#3B82F6',
  secondaryAccent: '#38BDF8',
  primaryText: '#F8FAFC',
  secondaryText: '#94A3B8',
  mutedText: '#64748B',
  border: '#263449',
  moon: {
    silver: '#E2E8F0',
    white: '#F8FAFC',
    blue: '#93C5FD'
  },
  mars: {
    rust: '#C2410C',
    red: '#DC2626',
    sand: '#FDE047'
  }
};
