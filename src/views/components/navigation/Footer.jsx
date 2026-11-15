import React from 'react';
import { Link } from 'react-router-dom';
import { APP_IDENTITY, NAVIGATION_LINKS } from '../../../utils/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-space-border bg-[#0B1220]/80 py-14 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Project Identity */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-heading font-bold text-xl text-space-text tracking-wide block">
              {APP_IDENTITY.name}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-space-accentLight block">
              {APP_IDENTITY.tagline}
            </span>
            <p className="text-sm text-space-textSecondary max-w-sm leading-relaxed">
              An independent educational museum exploring human-made objects left on the Moon and Mars.
            </p>
            <p className="text-xs text-space-textMuted pt-2 leading-relaxed">
              Space Relics is an independent educational project created for NASA Space Apps Challenge 2026. It is not an official NASA website and does not imply NASA endorsement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-space-text uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-space-textSecondary hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-space-text uppercase tracking-wider mb-3">
              Destinations
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/explore/moon"
                  className="text-space-textSecondary hover:text-moon-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  Explore the Moon
                </Link>
              </li>
              <li>
                <Link
                  to="/explore/mars"
                  className="text-space-textSecondary hover:text-orange-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Explore Mars
                </Link>
              </li>
              <li>
                <Link
                  to="/timeline"
                  className="text-space-textSecondary hover:text-space-accentLight transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-space-accent"></span>
                  Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 border-t border-space-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-space-textMuted gap-4">
          <p>
            © {currentYear} {APP_IDENTITY.name}. Developed for the {APP_IDENTITY.competition}.
          </p>
          <p>
            Educational frontend prototype. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
