import React from 'react';

/**
 * Reusable Badge for object types, destinations, and status indicators.
 */
export const Badge = ({
  children,
  variant = 'default',
  size = 'sm',
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    default: 'bg-space-cardElevated text-space-textSecondary border border-space-border',
    primary: 'bg-space-accent/15 text-space-accentLight border border-space-accent/30',
    moon: 'bg-slate-800/80 text-moon-silver border border-slate-700',
    mars: 'bg-orange-950/60 text-orange-300 border border-orange-900/50',
    success: 'bg-emerald-950/60 text-emerald-400 border border-emerald-900/50'
  };

  const sizes = {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.sm} ${className}`}>
      {children}
    </span>
  );
};
