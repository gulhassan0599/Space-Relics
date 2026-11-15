import React from 'react';
import { Surveyor3Icon } from './Surveyor3Icon';
import { LunarRovingVehicleIcon } from './LunarRovingVehicleIcon';
import { LaserRetroreflectorIcon } from './LaserRetroreflectorIcon';
import { SojournerRoverIcon } from './SojournerRoverIcon';
import { SpiritRoverIcon } from './SpiritRoverIcon';
import { OpportunityRoverIcon } from './OpportunityRoverIcon';

export {
  Surveyor3Icon,
  LunarRovingVehicleIcon,
  LaserRetroreflectorIcon,
  SojournerRoverIcon,
  SpiritRoverIcon,
  OpportunityRoverIcon
};

/**
 * Universal Relic Icon Resolver
 * Maps any object slug or ID to its scientifically accurate custom SVG illustration.
 * Uses React.createElement to remain 100% valid JavaScript without requiring JSX transformation.
 */
export const RelicIllustration = ({ slug, className = 'w-8 h-8', ...props }) => {
  switch (slug) {
    case 'surveyor-3':
      return React.createElement(Surveyor3Icon, { className, ...props });
    case 'apollo-lunar-roving-vehicle':
    case 'apollo-15-lunar-roving-vehicle':
    case 'apollo-15-lunar-module':
      return React.createElement(LunarRovingVehicleIcon, { className, ...props });
    case 'apollo-11-laser-retroreflector':
    case 'apollo-11-lunar-module':
      return React.createElement(LaserRetroreflectorIcon, { className, ...props });
    case 'sojourner-rover':
    case 'mars-pathfinder':
      return React.createElement(SojournerRoverIcon, { className, ...props });
    case 'spirit-rover':
    case 'mars-spirit':
      return React.createElement(SpiritRoverIcon, { className, ...props });
    case 'opportunity-rover':
    case 'mars-opportunity':
      return React.createElement(OpportunityRoverIcon, { className, ...props });
    default:
      return null;
  }
};

export default RelicIllustration;
