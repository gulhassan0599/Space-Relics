/**
 * CONTROLLER LAYER: timelineController.js
 * 
 * Handles timeline data preparation, chronological sorting, and era grouping.
 */

import { getAllObjects } from '../models/objectModel.js';

/**
 * Get all objects sorted chronologically for the timeline view
 * @param {'asc'|'desc'} [order='asc']
 * @returns {Array<Object>}
 */
export const getChronologicalTimeline = (order = 'asc') => {
  const objects = getAllObjects();

  return objects.sort((a, b) => {
    if (order === 'desc') {
      return b.year - a.year;
    }
    return a.year - b.year;
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
      items: chronological.filter((item) => item.year >= 1960 && item.year < 1980)
    },
    {
      era: 'Early Mars Mobile Scouts (1990s)',
      description: 'The proof-of-concept era that validated mobile robotic roving on Mars.',
      items: chronological.filter((item) => item.year >= 1990 && item.year < 2000)
    },
    {
      era: 'Mars Long-Range Exploration Rovers (2000s)',
      description: 'The golden age of twin robotic geologists searching for signs of water.',
      items: chronological.filter((item) => item.year >= 2000 && item.year < 2020)
    }
  ];

  return eras.filter((era) => era.items.length > 0);
};
