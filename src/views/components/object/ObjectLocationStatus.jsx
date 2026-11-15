import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { MapPin, Navigation, ShieldCheck, AlertCircle } from 'lucide-react';

/**
 * Location, Geographical Context, and Current Physical Equipment Status
 */
export const ObjectLocationStatus = ({ object }) => {
  const isMars = object.destination.toLowerCase() === 'mars';
  const loc = object.location || {};
  const isVerified = loc.coordinateAccuracy === 'verified';

  return (
    <section className="mb-14">
      <Card elevated className="p-8 sm:p-12 border-space-border/90 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className={`p-2.5 rounded-xl border ${
            isMars 
              ? 'bg-orange-950/70 border-orange-900/80 text-orange-400' 
              : 'bg-slate-800 border-slate-700 text-moon-blue'
          }`}>
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
              Geographical Coordinates
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
              Location & Resting Site
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Location Description & Regional Context */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-space-textMuted block mb-1">
                Resting Region
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-space-text mb-3">
                {loc.locationName || 'Extraterrestrial Terrain'}
              </h3>
              <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed">
                {loc.description || 'Resting at its final landing or operational destination.'}
              </p>
            </div>

            {/* Equipment Physical State */}
            <div className={`p-5 rounded-2xl border ${
              isMars 
                ? 'bg-orange-950/20 border-orange-900/50' 
                : 'bg-slate-800/30 border-slate-700/60'
            }`}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-space-textMuted block mb-1">
                Last Known Physical State
              </span>
              <p className={`text-sm font-semibold ${isMars ? 'text-orange-200' : 'text-moon-white'}`}>
                {object.equipmentStatus}
              </p>
            </div>
          </div>

          {/* Coordinates Telemetry Box */}
          <div className="p-6 rounded-2xl bg-space-card border border-space-border/80 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-space-accentLight">
                  Telemetry Coordinates
                </span>
                <Badge variant={isVerified ? 'success' : 'default'} size="xs">
                  {isVerified ? 'Verified Coordinates' : 'Sample / Approximate'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="p-3 rounded-xl bg-space-card/70 border border-space-border/60">
                  <span className="text-[10px] text-space-textMuted uppercase block">Latitude</span>
                  <span className="text-sm font-bold text-space-text">
                    {loc.latitude !== null && loc.latitude !== undefined ? `${loc.latitude}°` : 'Unpublished'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-space-card/70 border border-space-border/60">
                  <span className="text-[10px] text-space-textMuted uppercase block">Longitude</span>
                  <span className="text-sm font-bold text-space-text">
                    {loc.longitude !== null && loc.longitude !== undefined ? `${loc.longitude}°` : 'Unpublished'}
                  </span>
                </div>
              </div>
            </div>

            {/* Development / Archival Note */}
            <div className="pt-4 border-t border-space-border/60 flex items-start gap-2.5 text-xs text-space-textMuted">
              <ShieldCheck className="w-4 h-4 text-space-accentLight flex-shrink-0 mt-0.5" />
              <span>
                {object.developmentNote || 'Coordinate telemetry verified against official mission archive records.'}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ObjectLocationStatus;
