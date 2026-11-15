import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Planet, List, X } from '@phosphor-icons/react';
import { APP_IDENTITY, NAVIGATION_LINKS } from '../../../utils/constants';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

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
    <header className="sticky top-0 z-50 bg-[#070B16]/90 backdrop-blur-md border-b border-space-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-space-accent rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-space-cardElevated border border-space-border flex items-center justify-center text-space-accentLight group-hover:border-space-accent transition-colors">
              <Planet weight="duotone" className="w-5 h-5 text-space-accent" />
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
                      ? 'text-white bg-space-cardElevated border border-space-border shadow-sm'
                      : 'text-space-textSecondary hover:text-white hover:bg-space-card/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/explore"
              className="ml-4 px-4 py-2 rounded-lg text-sm font-medium bg-space-accent hover:bg-blue-600 text-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-space-accent focus:ring-offset-2 focus:ring-offset-[#070B16]"
            >
              Start Exploring
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="p-2 rounded-lg text-space-textSecondary hover:text-white hover:bg-space-card border border-transparent hover:border-space-border focus:outline-none focus:ring-2 focus:ring-space-accent"
            >
              {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden border-b border-space-border bg-[#0B1220]/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-2"
        >
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-space-card border border-space-border'
                    : 'text-space-textSecondary hover:text-white hover:bg-space-card/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-2">
            <Link
              to="/explore"
              onClick={closeMobileMenu}
              className="block w-full text-center py-2.5 px-4 rounded-lg text-sm font-medium bg-space-accent hover:bg-blue-600 text-white transition-colors"
            >
              Start Exploring
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
