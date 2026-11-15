import React from 'react';
import { Link } from 'react-router-dom';
import { APP_IDENTITY, NAVIGATION_LINKS } from '../../../utils/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-space-border bg-[#090B0E] py-14 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Project Identity */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-heading font-semibold text-lg text-space-text tracking-tight block">
              {APP_IDENTITY.name}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-space-accentLight block">
              Digital Museum Archive
            </span>
            <p className="text-xs sm:text-sm text-space-textSecondary max-w-sm leading-relaxed font-sans">
              An educational museum dedicated to documenting the human-made technological artifacts left on the surfaces of the Moon and Mars.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-space-textMuted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
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
            <h4 className="font-mono text-xs uppercase tracking-widest text-space-textMuted mb-4">
              Sectors & Timeline
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link
                  to="/explore/moon"
                  className="text-space-textSecondary hover:text-moon-silver transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-moon-silver"></span>
                  The Moon
                </Link>
              </li>
              <li>
                <Link
                  to="/explore/mars"
                  className="text-space-textSecondary hover:text-mars-rust transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-mars-rust"></span>
                  The Mars 
                </Link>
              </li>
              <li>
                <Link
                  to="/timeline"
                  className="text-space-textSecondary hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-space-accent"></span>
                  Mission Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-space-border/60 flex flex-col sm:flex-row text-center justify-center text-xs font-mono text-space-textMuted gap-4">
          <p>
            © {currentYear} {APP_IDENTITY.name}. Built for {APP_IDENTITY.competition}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
