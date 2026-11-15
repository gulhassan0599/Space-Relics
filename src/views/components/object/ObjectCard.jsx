import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { ArrowRight, MapPin, Radio, Compass, Disc } from 'lucide-react';

/**
 * Reusable ObjectCard component representing a Moon or Mars technological relic.
 * Adheres to Dark Space Museum styling and the MVC architecture.
 */
export const ObjectCard = ({ object, className = '' }) => {
  const navigate = useNavigate();
  if (!object) return null;

  const isMoon = object.destination.toLowerCase() === 'moon';
  const objectUrl = `/objects/${object.slug}`;

  // Contextual icon based on object category/type
  const renderRelicIcon = () => {
    const typeLower = (object.objectType || '').toLowerCase();
    if (typeLower.includes('rover') || typeLower.includes('vehicle')) {
      return <Compass className={`w-8 h-8 ${isMoon ? 'text-moon-blue' : 'text-orange-400'}`} />;
    }
    if (typeLower.includes('retroreflector') || typeLower.includes('instrument')) {
      return <Disc className={`w-8 h-8 ${isMoon ? 'text-moon-blue' : 'text-orange-400'}`} />;
    }
    return <Radio className={`w-8 h-8 ${isMoon ? 'text-moon-blue' : 'text-orange-400'}`} />;
  };

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
    <Card
      elevated
      interactive
      destination={object.destination}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`View story for ${object.name}`}
      className={`group flex flex-col justify-between overflow-hidden relative border-space-border/80 hover:border-opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-space-accent cursor-pointer ${className}`}
    >
      {/* Top Graphic / Visual Area */}
      <div className="relative h-44 w-full bg-[#0B1220] overflow-hidden flex items-center justify-center border-b border-space-border/60">
        {/* Abstract space backdrop */}
        <div 
          className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${
            isMoon 
              ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-transparent' 
              : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-stone-900 to-transparent'
          }`}
        />
        
        {/* Orbital grid lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Dynamic Object Placeholder Graphic */}
        <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-2 border backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 ${
            isMoon 
              ? 'bg-slate-800/80 border-slate-700 text-moon-silver shadow-moon-glow' 
              : 'bg-orange-950/70 border-orange-900/80 text-orange-200 shadow-mars-glow'
          }`}>
            {renderRelicIcon()}
          </div>
          <span className="text-[11px] font-mono tracking-wider uppercase text-space-textMuted">
            {object.missionName || 'Historic Mission'}
          </span>
        </div>

        {/* Destination & Year Badge Overlay */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant={isMoon ? 'moon' : 'mars'} size="xs">
            {object.destination}
          </Badge>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#070B16]/80 text-space-textSecondary border border-space-border backdrop-blur-sm">
            {object.year}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-space-accentLight">
            <span>{object.objectType}</span>
          </div>

          <h3 className={`font-heading font-bold text-lg leading-snug transition-colors ${
            isMoon ? 'text-space-text group-hover:text-moon-white' : 'text-space-text group-hover:text-orange-200'
          }`}>
            {object.name}
          </h3>

          <p className="text-xs sm:text-sm text-space-textSecondary mt-2.5 line-clamp-3 leading-relaxed">
            {object.shortDescription || 'Technological artifact resting as a monument of extraterrestrial science and exploration.'}
          </p>

          {object.location?.locationName && (
            <div className="mt-4 flex items-center gap-1.5 text-xs text-space-textMuted">
              <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${isMoon ? 'text-moon-blue' : 'text-orange-400'}`} />
              <span className="truncate">{object.location.locationName}</span>
            </div>
          )}
        </div>

        {/* Card CTA Footer */}
        <div className="mt-6 pt-4 border-t border-space-border/60">
          <div
            className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-space-textSecondary group-hover:text-white transition-colors"
          >
            <span>View Story</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-space-accent" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ObjectCard;
