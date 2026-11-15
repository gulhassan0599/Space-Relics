import React from 'react';

/**
 * Reusable Button Component adhering to the Dark Space Museum design tokens.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#070B16] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-space-accent hover:bg-blue-600 text-white shadow-sm focus:ring-space-accent',
    secondary: 'bg-space-card hover:bg-space-cardElevated text-space-text border border-space-border hover:border-space-accent/50 focus:ring-space-accent',
    outline: 'border border-space-border hover:border-space-accent text-space-textSecondary hover:text-white bg-transparent focus:ring-space-accent',
    ghost: 'text-space-textSecondary hover:text-white hover:bg-space-card/60 focus:ring-space-accent',
    moon: 'bg-slate-800 hover:bg-slate-700 text-moon-white border border-slate-700 hover:border-moon-blue/50 focus:ring-moon-blue',
    mars: 'bg-orange-950/40 hover:bg-orange-900/50 text-orange-200 border border-orange-900/60 hover:border-orange-500/50 focus:ring-orange-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
