/**
 * CONTROLLER LAYER: timelineController.js
 * 
 * Handles timeline data preparation, chronological sorting, and era grouping.
 */

import { getAllObjects } from '../models/objectModel.js';

/**
 * Safely extracts the 4-digit starting year from numbers or range strings
 * (e.g. 1967, "1971–1972", "2004-2011").
 * Handles null, undefined, and non-numeric inputs safely.
 * 
 * @param {number|string|null|undefined} yearVal
 * @returns {number|null}
 */
export const getStartYear = (yearVal) => {
  if (yearVal === null || yearVal === undefined) return null;
  if (typeof yearVal === 'number') {
    return isNaN(yearVal) ? null : yearVal;
  }
  if (typeof yearVal === 'string') {
    const match = yearVal.match(/\b\d{4}\b/);
    if (match) {
      return parseInt(match[0], 10);
    }
    const parsed = parseInt(yearVal.trim(), 10);
    return isNaN(parsed) ? null : parsed;
  }
  return null;
};

/**
 * Get all objects sorted chronologically for the timeline view
 * @param {'asc'|'desc'} [order='asc']
 * @returns {Array<Object>}
 */
export const getChronologicalTimeline = (order = 'asc') => {
  const objects = getAllObjects();

  return [...objects].sort((a, b) => {
    const yearA = getStartYear(a.year) ?? 0;
    const yearB = getStartYear(b.year) ?? 0;

    if (order === 'desc') {
      return yearB - yearA;
    }
    return yearA - yearB;
  });
};

/**
 * Group objects into historical eras for structured timeline presentation
 * @returns {Array<{ era: string, description: string, items: Array<Object> }>}
 */
export const getTimelineByEras = () => {
  const chronological = getChronologicalTimeline('asc');

  const eras = [
    {
      era: 'Apollo & Early Lunar Exploration (1960s – 1970s)',
      description: 'The pioneering era of human lunar landings and robotic reconnaissance.',
      items: chronological.filter((item) => {
        const y = getStartYear(item.year);
        return y !== null && y >= 1960 && y < 1980;
      })
    },
    {
      era: 'Early Mars Mobile Scouts (1990s)',
      description: 'The proof-of-concept era that validated mobile robotic roving on Mars.',
      items: chronological.filter((item) => {
        const y = getStartYear(item.year);
        return y !== null && y >= 1990 && y < 2000;
      })
    },
    {
      era: 'Mars Long-Range Exploration Rovers (2000s)',
      description: 'The golden age of twin robotic geologists searching for signs of water.',
      items: chronological.filter((item) => {
        const y = getStartYear(item.year);
        return y !== null && y >= 2000 && y < 2020;
      })
    }
  ];

  return eras.filter((era) => era.items.length > 0);
};
