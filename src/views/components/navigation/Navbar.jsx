import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { APP_IDENTITY, NAVIGATION_LINKS } from "../../../utils/constants";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    if (menuButtonRef.current && mobileMenuOpen) {
      menuButtonRef.current.focus();
    }
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (menuButtonRef.current) {
          menuButtonRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#090B0E]/90 backdrop-blur-md border-b border-space-border/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          {/* Brand Logo & Wordmark - Editorial Archival Museum Styling */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-space-accent rounded p-1"
          >

            <div className="flex flex-col">
              <span className="font-heading font-semibold text-base sm:text-lg text-space-text tracking-tight group-hover:text-white transition-colors">
                {APP_IDENTITY.name}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 sm:gap-1.5"
            aria-label="Main Navigation"
          >
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-space-text bg-space-card border border-space-border"
                      : "text-space-textSecondary hover:text-space-text hover:bg-space-bgSecondary/60"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/explore"
              className="ml-5 px-4 py-1.5 rounded text-xs font-mono uppercase tracking-wider text-space-text border border-space-border hover:border-space-accent hover:text-white bg-space-bgSecondary/80 hover:bg-space-card transition-all focus:outline-none focus:ring-1 focus:ring-space-accent"
            >
              Enter Museum
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
              className="p-2 rounded text-space-textSecondary hover:text-white hover:bg-space-card border border-space-border focus:outline-none focus:ring-1 focus:ring-space-accent"
            >
              {mobileMenuOpen ? (
                <X size={20} weight="bold" />
              ) : (
                <List size={20} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#090B0E] border-b border-space-border px-4 pt-3 pb-6 space-y-2 animate-fadeIn"
        >
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-xs font-mono uppercase tracking-wider ${
                  isActive
                    ? "text-space-text bg-space-card border border-space-border"
                    : "text-space-textSecondary hover:text-white hover:bg-space-card/40"
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
              className="block text-center w-full py-2.5 rounded text-xs font-mono uppercase tracking-wider text-space-text border border-space-border bg-space-card hover:border-space-accent transition-colors"
            >
              Enter Museum
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
