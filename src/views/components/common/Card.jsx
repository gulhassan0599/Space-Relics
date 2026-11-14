import React from 'react';

/**
 * Reusable Museum Card Component with subtle borders and controlled elevations.
 */
export const Card = ({
  children,
  className = '',
  elevated = false,
  interactive = false,
  destination = null,
  onClick,
  ...props
}) => {
  const baseStyles = 'rounded-xl border transition-all duration-300';
  const bgStyles = elevated ? 'bg-space-cardElevated' : 'bg-space-card';
  
  let borderStyles = 'border-space-border';
  let hoverStyles = '';

  if (interactive) {
    if (destination === 'Moon') {
      hoverStyles = 'hover:border-moon-blue/40 hover:shadow-moon-glow cursor-pointer';
    } else if (destination === 'Mars') {
      hoverStyles = 'hover:border-mars-rust/40 hover:shadow-mars-glow cursor-pointer';
    } else {
      hoverStyles = 'hover:border-space-accent/40 hover:shadow-subtle-glow cursor-pointer';
    }
  }

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${bgStyles} ${borderStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
