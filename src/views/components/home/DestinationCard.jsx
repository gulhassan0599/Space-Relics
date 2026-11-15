import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ArrowRight } from '@phosphor-icons/react';

/**
 * Large interactive destination portal card for Moon or Mars.
 */
export const DestinationCard = ({
  destination,
  title,
  description,
  relicsCount = 3,
  badgeText,
  relicsList = [],
  route,
  variant = 'moon',
  className = ''
}) => {
  const navigate = useNavigate();
  const isMoon = variant === 'moon';

  const handleCardClick = () => {
    if (route) navigate(route);
  };

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && route) {
      e.preventDefault();
      navigate(route);
    }
  };

  return (
    <Card
      elevated
      interactive
      destination={isMoon ? 'Moon' : 'Mars'}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`Explore ${destination}: ${title}`}
      className={`group relative flex flex-col justify-between overflow-hidden p-8 sm:p-10 border-space-border/80 hover:border-opacity-100 transition-all duration-300 min-h-[460px] h-full focus:outline-none focus:ring-2 focus:ring-space-accent cursor-pointer ${className}`}
    >
      {/* Background Ambience & Gradient */}
      <div 
        className={`absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none ${
          isMoon
            ? 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-transparent'
            : 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-700 via-red-950 to-transparent'
        }`} 
      />

      {/* Subtle Planetary Sphere Ring Graphic */}
      <div className={`absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-dashed opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 ${
        isMoon ? 'border-moon-blue' : 'border-orange-500'
      }`} />

      {/* Card Content Top */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Badge variant={isMoon ? 'moon' : 'mars'}>
            {badgeText || `${relicsCount} Relics Documented`}
          </Badge>
          <span className={`text-xs font-mono uppercase tracking-widest ${isMoon ? 'text-moon-blue' : 'text-orange-400'}`}>
            {destination}
          </span>
        </div>

        <h3 className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-3 transition-colors ${
          isMoon ? 'text-moon-white group-hover:text-blue-100' : 'text-orange-200 group-hover:text-amber-100'
        }`}>
          {title}
        </h3>

        <p className="text-sm sm:text-base text-space-textSecondary leading-relaxed">
          {description}
        </p>

        {/* Relics Included Pill List */}
        {relicsList.length > 0 && (
          <div className="mt-6 pt-6 border-t border-space-border/60">
            <span className="text-[11px] font-mono uppercase tracking-wider text-space-textMuted block mb-2.5">
              Included Relics:
            </span>
            <ul className="space-y-1.5">
              {relicsList.map((relic, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-space-textSecondary">
                  <span className={`w-1.5 h-1.5 rounded-full ${isMoon ? 'bg-moon-blue' : 'bg-orange-500'}`} />
                  <span className="font-medium text-space-text">{relic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card CTA Bottom */}
      <div className="relative z-10 mt-8 pt-6 border-t border-space-border/60">
        <Button
          variant={isMoon ? 'moon' : 'mars'}
          size="lg"
          tabIndex={-1}
          className="w-full justify-between group-hover:shadow-md pointer-events-none"
        >
          <span>Explore {destination}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

export default DestinationCard;
