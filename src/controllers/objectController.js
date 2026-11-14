/**
 * CONTROLLER LAYER: objectController.js
 * 
 * Handles object retrieval, filtering, search, and selection logic.
 * Keeps business logic separated from presentation components.
 */

import {
  getAllObjects,
  getMoonObjects,
  getMarsObjects,
  getObjectBySlug,
  getObjectsByDestination
} from '../models/objectModel.js';

/**
 * Controller to fetch all relics with optional search and destination filtering
 * @param {Object} options
 * @param {string} [options.destination] - 'Moon', 'Mars', or 'all'
 * @param {string} [options.query] - search string
 * @returns {Array<Object>}
 */
export const useObjectsList = ({ destination = 'all', query = '' } = {}) => {
  let objects = [];

  if (destination.toLowerCase() === 'moon') {
    objects = getMoonObjects();
  } else if (destination.toLowerCase() === 'mars') {
    objects = getMarsObjects();
  } else {
    objects = getAllObjects();
  }

  if (query.trim()) {
    const q = query.toLowerCase().trim();
    objects = objects.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.missionName.toLowerCase().includes(q) ||
        item.objectType.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q)
    );
  }

  return objects;
};

/**
 * Controller to fetch all 6 featured relics for the homepage
 * @returns {Array<Object>}
 */
export const getFeaturedRelics = () => {
  return getAllObjects();
};

/**
 * Controller to fetch single object details by slug
 * @param {string} slug
 * @returns {{ object: Object|null, notFound: boolean }}
 */
export const useObjectDetail = (slug) => {
  const object = getObjectBySlug(slug);
  return {
    object,
    notFound: !object
  };
};

/**
 * Controller to get related relics (same destination or era)
 * @param {string} currentSlug
 * @param {number} limit
 * @returns {Array<Object>}
 */
export const getRelatedObjects = (currentSlug, limit = 2) => {
  const current = getObjectBySlug(currentSlug);
  if (!current) return [];

  return getAllObjects()
    .filter((item) => item.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same destination
      if (a.destination === current.destination && b.destination !== current.destination) return -1;
      if (b.destination === current.destination && a.destination !== current.destination) return 1;
      return 0;
    })
    .slice(0, limit);
};
