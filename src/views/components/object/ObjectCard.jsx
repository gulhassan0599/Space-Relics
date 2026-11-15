import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from '@phosphor-icons/react';

// Map verified NASA archival photograph paths by object slug
const RELIC_IMAGES = {
  'surveyor-3': {
    src: '/images/relics/surveyor-3.jpg',
    alt: 'NASA AS12-48-7133: Surveyor 3 robotic lander resting in Surveyor Crater on the Moon',
    caption: 'NASA / AS12-48-7133'
  },
  'apollo-lunar-roving-vehicle': {
    src: '/images/relics/apollo-lrv.jpg',
    alt: 'NASA AS15-88-11901: Apollo 15 Lunar Roving Vehicle at its final resting place near Hadley Rille',
    caption: 'NASA / AS15-88-11901'
  },
  'apollo-15-lunar-module': {
    src: '/images/relics/apollo-15-lm-falcon.jpg',
    alt: 'NASA S71-41511: Apollo 15 Lunar Module Falcon resting on the lunar surface at Hadley-Apennine',
    caption: 'NASA / S71-41511'
  },
  'apollo-11-laser-retroreflector': {
    src: '/images/relics/apollo-11-lrrr.jpg',
    alt: 'NASA AS11-40-5952: Apollo 11 Laser Ranging Retroreflector deployed on lunar surface at Tranquility Base',
    caption: 'NASA / AS11-40-5952'
  },
  'apollo-11-lunar-module': {
    src: '/images/relics/apollo-11-lm-eagle.jpg',
    alt: 'NASA AS11-40-5902: Apollo 11 Lunar Module Eagle descent stage at Tranquility Base with Buzz Aldrin',
    caption: 'NASA / AS11-40-5902'
  },
  'sojourner-rover': {
    src: '/images/relics/sojourner.jpg',
    alt: 'NASA/JPL PIA01122: Sojourner Rover near The Dice rocks and Yogi at Ares Vallis on Mars',
    caption: 'NASA/JPL / PIA01122'
  },
  'mars-pathfinder': {
    src: '/images/relics/pathfinder-presidential-panorama.jpg',
    alt: 'NASA/JPL-Caltech: Mars Pathfinder and Sojourner Rover on the surface of Mars in Ares Vallis',
    caption: 'NASA/JPL-Caltech'
  },
  'spirit-rover': {
    src: '/images/relics/spirit.jpg',
    alt: 'NASA/JPL PIA07371: Spirit Mars Exploration Rover solar deck self-portrait mosaic',
    caption: 'NASA/JPL / PIA07371'
  },
  'mars-spirit': {
    src: '/images/relics/spirit-columbia-memorial-station.jpg',
    alt: 'NASA/JPL-Caltech/Cornell: Spirit landing site at Gusev Crater, showing Columbia Memorial Station',
    caption: 'NASA/JPL-Caltech/Cornell'
  },
  'opportunity-rover': {
    src: '/images/relics/opportunity.jpg',
    alt: 'NASA/JPL PIA18079: Opportunity Rover true-color solar deck self-portrait after wind cleaning',
    caption: 'NASA/JPL / PIA18079'
  },
  'mars-opportunity': {
    src: '/images/relics/opportunity-clean-solar-panels.jpg',
    alt: 'NASA/JPL-Caltech/Cornell/ASU: Opportunity self-portrait showing solar panels after Martian winds',
    caption: 'NASA/JPL-Caltech/Cornell/ASU'
  }
};

export const ObjectCard = ({ object, className = '' }) => {
  const navigate = useNavigate();
  if (!object) return null;

  const isMoon = object.destination.toLowerCase() === 'moon';
  const objectUrl = `/objects/${object.slug}`;
  const imageData = RELIC_IMAGES[object.slug];

  const handleCardClick = () => {
    navigate(objectUrl);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(objectUrl);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`View archival record for ${object.name}`}
      className={`group flex flex-col justify-between overflow-hidden rounded border border-space-border hover:border-space-border/100 bg-space-card transition-all duration-300 cursor-pointer h-[460px] w-full ${className}`}
    >
      {/* Top Authentic Image Window */}
      <div className="relative aspect-[16/10] w-full bg-black overflow-hidden border-b border-space-border">
        {imageData ? (
          <img
            src={imageData.src}
            alt={imageData.alt}
            className="w-full h-full object-cover filter contrast-[1.05] grayscale-[0.1] group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-[#11151B]" />
        )}

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141A23] via-transparent to-black/30 pointer-events-none" />

        {/* Destination & Year Badge Overlay */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider backdrop-blur-sm border ${
            isMoon 
              ? 'bg-[#090B0E]/85 text-moon-silver border-moon-silver/20' 
              : 'bg-[#090B0E]/85 text-mars-rust border-mars-rust/20'
          }`}>
            {object.destination}
          </span>
        </div>

        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#090B0E]/85 text-space-textSecondary border border-space-border backdrop-blur-sm">
            {object.year}
          </span>
        </div>

        {/* Photo Credit Overlay */}
        {imageData && (
          <div className="absolute bottom-2 right-2 z-10 pointer-events-none">
            <span className="text-[9px] font-mono text-white/70 bg-black/70 px-1.5 py-0.5 rounded">
              {imageData.caption}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5 text-[11px] font-mono text-space-accentLight">
            <span>{object.objectType}</span>
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl text-space-text font-normal tracking-tight mb-2 group-hover:text-white transition-colors">
            {object.name}
          </h3>

          <p className="text-xs text-space-textSecondary leading-relaxed line-clamp-3 mb-4 font-sans">
            {object.shortDescription}
          </p>
        </div>

        {/* Card Footer: Coordinates & Action link */}
        <div className="pt-4 border-t border-space-border/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-space-textMuted font-mono text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-space-accentLight flex-shrink-0" />
            <span className="truncate max-w-[170px]">{object.location?.locationName || 'Extraterrestrial Surface'}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-space-text group-hover:text-white transition-colors">
            <span>Examine</span>
            <ArrowRight className="w-3.5 h-3.5 text-space-accentLight group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ObjectCard;
