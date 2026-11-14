import React from 'react';

/**
 * Reusable Section Container with consistent maximum width and responsive padding.
 */
export const Container = ({
  children,
  className = '',
  size = 'default',
  ...props
}) => {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-screen-2xl'
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizes[size] || sizes.default} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
