/**
 * CONTROLLER: comparisonController.js
 * 
 * Logic for selecting, validating, and comparing two artifacts across Moon and Mars.
 */

import { getAllObjects, getObjectBySlug } from '../models/objectModel.js';

/**
 * Get pairs of objects for side-by-side comparison
 * @param {string} slugA
 * @param {string} slugB
 * @returns {{ itemA: Object|null, itemB: Object|null }}
 */
export const getComparisonPair = (slugA, slugB) => {
  const all = getAllObjects();
  const itemA = getObjectBySlug(slugA) || all[0] || null;
  const itemB = getObjectBySlug(slugB) || all[3] || null;

  return { itemA, itemB };
};

/**
 * Generates structured comparison categories between two relics
 * @param {Object} itemA
 * @param {Object} itemB
 * @returns {Array<{ category: string, valueA: any, valueB: any }>}
 */
export const buildComparisonMatrix = (itemA, itemB) => {
  if (!itemA || !itemB) return [];

  return [
    {
      category: 'Target Celestial Body',
      valueA: itemA.destination,
      valueB: itemB.destination
    },
    {
      category: 'Object Type / Classification',
      valueA: itemA.objectType,
      valueB: itemB.objectType
    },
    {
      category: 'Responsible Agency',
      valueA: itemA.agency || 'NASA',
      valueB: itemB.agency || 'NASA'
    },
    {
      category: 'Historic Mission',
      valueA: itemA.missionName,
      valueB: itemB.missionName
    },
    {
      category: 'Mission Launch & Landing Era',
      valueA: `${itemA.year} (${itemA.landingDate || 'Surface Arrival'})`,
      valueB: `${itemB.year} (${itemB.landingDate || 'Surface Arrival'})`
    },
    {
      category: 'Resting Geographical Location',
      valueA: itemA.location?.locationName || 'Unknown Region',
      valueB: itemB.location?.locationName || 'Unknown Region'
    },
    {
      category: 'Primary Scientific / Operational Purpose',
      valueA: itemA.purpose,
      valueB: itemB.purpose
    },
    {
      category: 'Last Known Physical Status',
      valueA: itemA.equipmentStatus,
      valueB: itemB.equipmentStatus
    },
    {
      category: 'Why It Remains Behind',
      valueA: itemA.whyLeftBehind,
      valueB: itemB.whyLeftBehind
    }
  ];
};
