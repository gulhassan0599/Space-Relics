import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ArrowRight, MapPin, Compass, Radio, Disc } from 'lucide-react';

/**
 * Reusable Information Panel displayed alongside the Lunar or Mars Map.
 * Adapts themes and accents according to the selected relic's destination.
 */
export const SelectedRelicPanel = ({ relic, destination = 'Moon' }) => {
  const isMars = (relic?.destination || destination).toLowerCase() === 'mars';

  if (!relic) {
    return (
      <Card elevated className="p-8 h-full flex flex-col items-center justify-center text-center border-space-border/80">
        <div className="w-14 h-14 rounded-2xl bg-space-card border border-space-border flex items-center justify-center text-space-textMuted mb-4">
          <Compass className={`w-7 h-7 ${isMars ? 'text-orange-500' : 'text-space-accent'}`} />
        </div>
        <h3 className="font-heading font-semibold text-lg text-space-text">
          {isMars ? 'Explore Martian Explorers' : 'Explore Lunar Artifacts'}
        </h3>
        <p className="text-xs sm:text-sm text-space-textSecondary mt-2 max-w-xs leading-relaxed">
          Select a relic on the map or from the list below to discover its historical story and mission impact.
        </p>
      </Card>
    );
  }

  const renderIcon = () => {
    const typeLower = (relic.objectType || '').toLowerCase();
    if (typeLower.includes('rover') || typeLower.includes('vehicle')) {
      return <Compass className={`w-6 h-6 ${isMars ? 'text-orange-400' : 'text-moon-blue'}`} />;
    }
    if (typeLower.includes('retroreflector') || typeLower.includes('instrument')) {
      return <Disc className={`w-6 h-6 ${isMars ? 'text-orange-400' : 'text-moon-blue'}`} />;
    }
    return <Radio className={`w-6 h-6 ${isMars ? 'text-orange-400' : 'text-moon-blue'}`} />;
  };

  return (
    <Card
      elevated
      className="p-6 sm:p-7 flex flex-col justify-between border-space-border/90 shadow-2xl relative overflow-hidden h-full"
    >
      {/* Decorative ambient gradient */}
      <div 
        className={`absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none ${
          isMars ? 'bg-orange-600/15' : 'bg-moon-blue/10'
        }`} 
      />

      <div>
        {/* Top Badges & Destination */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Badge variant={isMars ? 'mars' : 'moon'}>{relic.destination || destination}</Badge>
            <Badge variant="default" size="xs">{relic.objectType}</Badge>
          </div>
          <span 
            className={`text-xs font-mono font-medium px-2 py-0.5 rounded border ${
              isMars 
                ? 'text-orange-300 bg-orange-950/70 border-orange-900/80' 
                : 'text-moon-blue bg-slate-800/80 border-slate-700'
            }`}
          >
            {relic.year}
          </span>
        </div>

        {/* Relic Title & Mission */}
        <div className="flex items-start gap-3.5 mb-4">
          <div 
            className={`p-2.5 rounded-xl border flex-shrink-0 ${
              isMars 
                ? 'bg-[#200A06] border-orange-900/80 text-orange-200' 
                : 'bg-space-card border-space-border text-moon-silver'
            }`}
          >
            {renderIcon()}
          </div>
          <div>
            <h3 
              className={`font-heading font-bold text-xl sm:text-2xl leading-tight ${
                isMars ? 'text-orange-100' : 'text-moon-white'
              }`}
            >
              {relic.name}
            </h3>
            <span className="text-xs font-mono uppercase tracking-wider text-space-textMuted block mt-0.5">
              Mission: {relic.missionName}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed mb-6">
          {relic.shortDescription}
        </p>

        {/* Location Details Box */}
        <div className="p-4 rounded-xl bg-space-card/80 border border-space-border/80 space-y-2.5 mb-6">
          <div className="flex items-start gap-2 text-xs">
            <MapPin className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isMars ? 'text-orange-400' : 'text-moon-blue'}`} />
            <div>
              <span className="font-semibold text-space-text block">
                {relic.location?.locationName || relic.locationName || 'Martian Surface'}
              </span>
              <p className="text-[11px] text-space-textMuted mt-0.5 leading-normal">
                {relic.location?.description || 'Preserved robotic explorer resting at historic planetary coordinates.'}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-space-border/60 flex items-center justify-between text-[11px] font-mono text-space-textMuted">
            <span>Coordinate Status:</span>
            <span className={isMars ? 'text-orange-300' : 'text-space-accentLight'}>
              {relic.coordinateAccuracy === 'sample-coordinates' ? 'Sample Simulation' : 'Archival'}
            </span>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-space-border/60">
        <Link to={`/objects/${relic.slug}`} className="block w-full">
          <Button variant={isMars ? 'mars' : 'moon'} size="md" className="w-full justify-between">
            <span>View Full Story</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default SelectedRelicPanel;
