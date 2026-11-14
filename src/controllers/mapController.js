/**
 * CONTROLLER LAYER: mapController.js
 * 
 * Handles map coordinate transformations, marker filtering, selection state,
 * and marker position calculations for Moon and Mars custom SVG maps.
 */

import { getMoonObjects, getMarsObjects } from '../models/objectModel.js';

/**
 * Approximate standard equirectangular projection mapping to SVG percentage (0-100%)
 * Latitude: +90 (top 0%) to -90 (bottom 100%)
 * Longitude: -180 (left 0%) to +180 (right 100%)
 * 
 * @param {number|null} lat
 * @param {number|null} lon
 * @returns {{ x: number, y: number } | null}
 */
export const projectCoordinatesToPercent = (lat, lon) => {
  if (lat === null || lon === null || isNaN(lat) || isNaN(lon)) {
    return null;
  }

  // Normalize longitude to -180 to 180
  let normalizedLon = lon;
  while (normalizedLon > 180) normalizedLon -= 360;
  while (normalizedLon < -180) normalizedLon += 360;

  const x = ((normalizedLon + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;

  return {
    x: Math.max(0, Math.min(100, x)),
    y: Math.max(0, Math.min(100, y))
  };
};

/**
 * Controller to get map markers for a given destination
 * Prioritizes normalized mapPosition (0-100) from JSON if present,
 * otherwise falls back to equirectangular projected coordinates.
 * 
 * @param {'Moon'|'Mars'} destination
 * @returns {Array<Object>}
 */
export const getMapMarkers = (destination) => {
  const items = destination.toLowerCase() === 'moon' ? getMoonObjects() : getMarsObjects();

  return items.map((item) => {
    // If explicit normalized map coordinates exist in JSON (0-100%), prefer them
    let markerPosition = null;
    if (item.mapPosition && typeof item.mapPosition.x === 'number' && typeof item.mapPosition.y === 'number') {
      markerPosition = {
        x: item.mapPosition.x,
        y: item.mapPosition.y
      };
    } else {
      markerPosition = projectCoordinatesToPercent(
        item.location?.latitude,
        item.location?.longitude
      ) || { x: 50, y: 50 };
    }

    return {
      id: item.id,
      slug: item.slug,
      name: item.name,
      destination: item.destination,
      year: item.year,
      objectType: item.objectType,
      shortDescription: item.shortDescription,
      missionName: item.missionName,
      locationName: item.location?.locationName || 'Unknown Location',
      latitude: item.location?.latitude,
      longitude: item.location?.longitude,
      coordinateAccuracy: item.location?.coordinateAccuracy || 'sample-coordinates',
      developmentNote: item.developmentNote || 'Sample development position',
      hasCoordinates: true,
      markerPosition
    };
  });
};
