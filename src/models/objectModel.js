/**
 * MODEL LAYER: objectModel.js
 * 
 * Reusable data access functions for Space Relics objects.
 * No UI components or presentation logic.
 */

import moonData from './data/moonObjects.json' with { type: 'json' };
import marsData from './data/marsObjects.json' with { type: 'json' };

/**
 * Get all Moon relics
 * @returns {Array<Object>}
 */
export const getMoonObjects = () => {
  return [...moonData];
};

/**
 * Get all Mars relics
 * @returns {Array<Object>}
 */
export const getMarsObjects = () => {
  return [...marsData];
};

/**
 * Get all relics combined (Moon + Mars)
 * @returns {Array<Object>}
 */
export const getAllObjects = () => {
  return [...moonData, ...marsData];
};

/**
 * Find an object by slug
 * @param {string} slug
 * @returns {Object|null}
 */
export const getObjectBySlug = (slug) => {
  if (!slug) return null;
  const all = getAllObjects();
  return all.find((item) => item.slug.toLowerCase() === slug.toLowerCase()) || null;
};

/**
 * Find an object by ID
 * @param {string} id
 * @returns {Object|null}
 */
export const getObjectById = (id) => {
  if (!id) return null;
  const all = getAllObjects();
  return all.find((item) => item.id.toLowerCase() === id.toLowerCase()) || null;
};

/**
 * Get objects by destination ('Moon' or 'Mars')
 * @param {string} destination
 * @returns {Array<Object>}
 */
export const getObjectsByDestination = (destination) => {
  if (!destination) return [];
  const all = getAllObjects();
  return all.filter(
    (item) => item.destination.toLowerCase() === destination.toLowerCase()
  );
};
