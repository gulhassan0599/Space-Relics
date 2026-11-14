import React from 'react';

/**
 * Editorial Heading Component for consistent museum typographic hierarchy.
 */
export const Heading = ({
  level = 1,
  children,
  subtitle = null,
  badge = null,
  align = 'left',
  className = ''
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right'
  };

  const alignClass = alignments[align] || alignments.left;

  return (
    <div className={`mb-8 ${alignClass} ${className}`}>
      {badge && <div className="mb-3">{badge}</div>}
      
      {level === 1 && (
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-space-text tracking-tight">
          {children}
        </h1>
      )}
      {level === 2 && (
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-space-text tracking-tight">
          {children}
        </h2>
      )}
      {level === 3 && (
        <h3 className="text-xl sm:text-2xl font-semibold font-heading text-space-text">
          {children}
        </h3>
      )}

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-space-textSecondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
