import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';
import { getAllObjects } from '../../../models/objectModel.js';
import { buildComparisonMatrix } from '../../../controllers/comparisonController.js';
import { ArrowRight, ArrowLeftRight, Compass } from 'lucide-react';

/**
 * Interactive Side-by-Side Comparison between Moon and Mars objects.
 */
export const ObjectComparison = ({ initialSlugA = 'surveyor-3', initialSlugB = 'sojourner-rover' }) => {
  const allObjects = getAllObjects();
  const [slugA, setSlugA] = useState(initialSlugA);
  const [slugB, setSlugB] = useState(initialSlugB);

  const itemA = allObjects.find((o) => o.slug === slugA) || allObjects[0];
  const itemB = allObjects.find((o) => o.slug === slugB) || allObjects[3];

  const handleSlugAChange = (newSlug) => {
    setSlugA(newSlug);
    if (newSlug === slugB) {
      // Find an alternate valid relic for B
      const alternate = allObjects.find((o) => o.slug !== newSlug);
      if (alternate) setSlugB(alternate.slug);
    }
  };

  const handleSlugBChange = (newSlug) => {
    setSlugB(newSlug);
    if (newSlug === slugA) {
      // Find an alternate valid relic for A
      const alternate = allObjects.find((o) => o.slug !== newSlug);
      if (alternate) setSlugA(alternate.slug);
    }
  };

  const matrix = buildComparisonMatrix(itemA, itemB);

  return (
    <Card elevated className="p-6 sm:p-10 border-space-border/90 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-space-card border border-space-border text-space-accentLight">
            <ArrowLeftRight className="w-5 h-5 text-space-accent" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-space-accentLight block">
              Comparative Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-space-text">
              Compare Moon & Mars Artifacts
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono text-space-textMuted bg-[#070B16] px-3 py-1.5 rounded-lg border border-space-border/60 self-start sm:self-auto">
          Side-by-side technical evaluation
        </span>
      </div>

      {/* Selectors for Artifact A and Artifact B */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Selector A */}
        <div className="p-4 rounded-2xl bg-[#070B16] border border-space-border/80">
          <label htmlFor="select-relic-a" className="text-xs font-mono uppercase tracking-wider text-space-textMuted block mb-2">
            Select First Relic:
          </label>
          <select
            id="select-relic-a"
            value={slugA}
            onChange={(e) => handleSlugAChange(e.target.value)}
            className="w-full bg-space-card text-space-text rounded-xl p-3 border border-space-border focus:outline-none focus:ring-1 focus:ring-space-accent text-sm"
          >
            {allObjects.map((obj) => (
              <option
                key={obj.slug}
                value={obj.slug}
                disabled={obj.slug === slugB}
              >
                {obj.destination}: {obj.name} ({obj.year}) {obj.slug === slugB ? '(Selected in B)' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Selector B */}
        <div className="p-4 rounded-2xl bg-[#070B16] border border-space-border/80">
          <label htmlFor="select-relic-b" className="text-xs font-mono uppercase tracking-wider text-space-textMuted block mb-2">
            Select Second Relic:
          </label>
          <select
            id="select-relic-b"
            value={slugB}
            onChange={(e) => handleSlugBChange(e.target.value)}
            className="w-full bg-space-card text-space-text rounded-xl p-3 border border-space-border focus:outline-none focus:ring-1 focus:ring-space-accent text-sm"
          >
            {allObjects.map((obj) => (
              <option
                key={obj.slug}
                value={obj.slug}
                disabled={obj.slug === slugA}
              >
                {obj.destination}: {obj.name} ({obj.year}) {obj.slug === slugA ? '(Selected in A)' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className={`p-5 rounded-2xl border ${
          itemA.destination === 'Mars' ? 'bg-[#180804] border-orange-900/60' : 'bg-[#0E172A] border-slate-700/80'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <Badge variant={itemA.destination === 'Mars' ? 'mars' : 'moon'}>{itemA.destination}</Badge>
            <span className="text-xs font-mono text-space-textMuted">{itemA.year}</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-space-text">{itemA.name}</h3>
          <p className="text-xs text-space-textSecondary mt-1 line-clamp-2">{itemA.shortDescription}</p>
          <div className="mt-4 pt-3 border-t border-space-border/50">
            <Link to={`/objects/${itemA.slug}`} className="text-xs text-space-accent hover:text-space-accentLight inline-flex items-center gap-1 font-medium">
              <span>View Exhibit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className={`p-5 rounded-2xl border ${
          itemB.destination === 'Mars' ? 'bg-[#180804] border-orange-900/60' : 'bg-[#0E172A] border-slate-700/80'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <Badge variant={itemB.destination === 'Mars' ? 'mars' : 'moon'}>{itemB.destination}</Badge>
            <span className="text-xs font-mono text-space-textMuted">{itemB.year}</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-space-text">{itemB.name}</h3>
          <p className="text-xs text-space-textSecondary mt-1 line-clamp-2">{itemB.shortDescription}</p>
          <div className="mt-4 pt-3 border-t border-space-border/50">
            <Link to={`/objects/${itemB.slug}`} className="text-xs text-space-accent hover:text-space-accentLight inline-flex items-center gap-1 font-medium">
              <span>View Exhibit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Comparison Rows */}
      <div className="space-y-4">
        {matrix.map((row, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-xl bg-[#070B16]/80 border border-space-border/60 hover:border-space-border transition-colors"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-space-accentLight block mb-3 font-semibold">
              {row.category}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-space-textSecondary leading-relaxed">
              <div className="border-l-2 border-space-accent/40 pl-3">
                <span className="text-[10px] font-mono uppercase text-space-textMuted block mb-0.5">{itemA.name}</span>
                <p className="text-space-text">{row.valueA || 'Not specified'}</p>
              </div>
              <div className="border-l-2 border-orange-500/40 pl-3">
                <span className="text-[10px] font-mono uppercase text-space-textMuted block mb-0.5">{itemB.name}</span>
                <p className="text-space-text">{row.valueB || 'Not specified'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ObjectComparison;
