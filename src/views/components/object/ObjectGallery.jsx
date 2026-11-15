import React from 'react';
import { Card } from '../common/Card';
import { Image, ExternalLink, Camera } from 'lucide-react';

/**
 * Visual Gallery for verified NASA / official mission photography.
 * Displays captions, official credits, and verified archive attribution.
 */
export const ObjectGallery = ({ images = [], destination = 'Moon' }) => {
  if (!images || images.length === 0) return null;

  const isMars = destination.toLowerCase() === 'mars';

  return (
    <section className="mb-14">
      <Card elevated className="p-8 sm:p-12 border-space-border/90 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className={`p-2.5 rounded-xl border ${
            isMars 
              ? 'bg-orange-950/70 border-orange-900/80 text-orange-400' 
              : 'bg-slate-800 border-slate-700 text-moon-blue'
          }`}>
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
              Photographic Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
              Images & Mission Gallery
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#070B16] border border-space-border/80 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Graphic / Placeholder Container */}
              <div className="relative h-56 bg-gradient-to-b from-[#111B2E] to-[#070B16] flex items-center justify-center p-6 border-b border-space-border/60 overflow-hidden group">
                {img.imageUrl ? (
                  <img
                    src={img.imageUrl}
                    alt={img.caption || 'Mission photograph'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <div className="w-12 h-12 rounded-xl bg-space-cardElevated border border-space-border flex items-center justify-center text-space-accentLight mb-2 shadow-sm">
                      <Image className="w-6 h-6 text-space-accent" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-space-textMuted">
                      Official Mission Photo
                    </span>
                  </div>
                )}
              </div>

              {/* Caption & Attribution Info */}
              <div className="p-5 space-y-2">
                <p className="text-xs sm:text-sm font-medium text-space-text leading-snug">
                  {img.caption}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-space-border/60 text-[11px] font-mono text-space-textMuted">
                  <span>Credit: {img.credit}</span>
                  {img.sourceUrl && (
                    <a
                      href={img.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-space-accent hover:text-space-accentLight transition-colors"
                    >
                      <span>Archive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default ObjectGallery;
