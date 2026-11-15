import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Compass, Sun, Moon } from 'lucide-react';
import { APP_IDENTITY, NAVIGATION_LINKS } from '../../../utils/constants';
import { useTheme } from '../../../controllers/themeContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const { theme, toggleTheme, isDark } = useTheme();

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    // Return keyboard focus to menu toggle button if it was active
    if (menuButtonRef.current && mobileMenuOpen) {
      menuButtonRef.current.focus();
    }
  };

  // Close mobile navigation drawer on Escape key press
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (menuButtonRef.current) {
          menuButtonRef.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-space-bg/90 backdrop-blur-md border-b border-space-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-space-accent rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-space-cardElevated border border-space-border flex items-center justify-center text-space-accentLight group-hover:border-space-accent transition-colors">
              <Compass className="w-5 h-5 text-space-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-space-text tracking-wide group-hover:text-space-accentLight transition-colors">
                {APP_IDENTITY.name}
              </span>
              <span className="text-[11px] text-space-textMuted tracking-wider uppercase font-medium -mt-1 hidden sm:inline">
                {APP_IDENTITY.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-space-text bg-space-cardElevated border border-space-border shadow-sm'
                      : 'text-space-textSecondary hover:text-space-text hover:bg-space-card/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light observatory theme' : 'Switch to dark space museum theme'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="ml-2 p-2 rounded-lg text-space-textSecondary hover:text-space-text bg-space-cardElevated/80 hover:bg-space-card border border-space-border transition-colors focus:outline-none focus:ring-2 focus:ring-space-accent"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-space-accent hover:-rotate-12 transition-transform" />
              )}
            </button>
          </nav>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light observatory theme' : 'Switch to dark space museum theme'}
              className="p-2 rounded-lg text-space-textSecondary hover:text-space-text bg-space-cardElevated/80 border border-space-border focus:outline-none focus:ring-2 focus:ring-space-accent"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-space-accent" />
              )}
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="p-2 rounded-lg text-space-textSecondary hover:text-space-text hover:bg-space-card border border-transparent hover:border-space-border focus:outline-none focus:ring-2 focus:ring-space-accent"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden border-b border-space-border bg-space-bgSecondary/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-2"
        >
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-space-text bg-space-card border border-space-border'
                    : 'text-space-textSecondary hover:text-space-text hover:bg-space-card/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};
