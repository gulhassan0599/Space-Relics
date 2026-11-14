import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  Calendar,
  MapPin,
  Building,
  Flag,
  Activity,
  Archive,
  Compass
} from 'lucide-react';

/**
 * Reusable Overview Matrix for Object Details Page
 * Strictly separates mission status and current physical equipment status.
 */
export const ObjectOverview = ({ object }) => {
  const isMars = object.destination.toLowerCase() === 'mars';

  const overviewItems = [
    {
      icon: Building,
      label: 'Responsible Agency',
      value: object.agency || 'NASA'
    },
    {
      icon: Compass,
      label: 'Associated Mission',
      value: object.missionName
    },
    {
      icon: Calendar,
      label: 'Launch Date',
      value: object.launchDate || `${object.year} Launch`
    },
    {
      icon: Calendar,
      label: 'Landing Date',
      value: object.landingDate || 'Surface Deployment'
    },
    {
      icon: MapPin,
      label: 'Landing Location',
      value: object.location?.locationName || 'Extraterrestrial Surface'
    },
    {
      icon: Activity,
      label: 'Mission Status',
      value: object.missionStatus || 'Mission Concluded',
      isStatus: true
    },
    {
      icon: Archive,
      label: 'Physical Equipment Status',
      value: object.equipmentStatus || 'Preserved Surface Artifact',
      highlight: true
    }
  ];

  return (
    <section className="mb-14">
      <Card elevated className="p-6 sm:p-10 border-space-border/90 shadow-2xl">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-space-text mb-6 flex items-center gap-2">
          <span>Mission & Artifact Overview</span>
        </h2>

        {/* Narrative Summary paragraph */}
        {object.overview && (
          <p className="text-sm sm:text-base text-space-textSecondary leading-relaxed mb-8 pb-8 border-b border-space-border/60">
            {object.overview}
          </p>
        )}

        {/* Structured Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-colors ${
                  item.highlight
                    ? isMars
                      ? 'bg-orange-950/30 border-orange-900/60'
                      : 'bg-slate-800/40 border-slate-700'
                    : 'bg-[#070B16]/70 border-space-border/70'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-space-textMuted">
                  <Icon className={`w-3.5 h-3.5 ${isMars ? 'text-orange-400' : 'text-moon-blue'}`} />
                  <span>{item.label}</span>
                </div>
                <p className={`text-sm font-medium leading-snug ${
                  item.highlight 
                    ? isMars ? 'text-orange-200' : 'text-moon-white font-semibold'
                    : 'text-space-text'
                }`}>
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
};

export default ObjectOverview;
