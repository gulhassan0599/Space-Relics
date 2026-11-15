import React from 'react';

/**
 * Compact Map Legend identifying marker conventions and terrain symbology.
 */
export const MapLegend = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-space-textSecondary p-2.5 px-3.5 rounded-xl bg-space-bgSecondary/90 border border-space-border backdrop-blur-md">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-moon-silver" />
        <span>Relic Location</span>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-space-accent border border-white ring-2 ring-space-accent/40" />
        <span>Selected Relic</span>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#0E172A] border border-slate-700" />
        <span>Lunar Maria</span>
      </div>
    </div>
  );
};

export default MapLegend;
