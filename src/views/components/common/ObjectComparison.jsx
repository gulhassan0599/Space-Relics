import React, { useState } from 'react';
import { getAllObjects } from '../../../models/objectModel.js';
import { buildComparisonMatrix } from '../../../controllers/comparisonController.js';
import { ArrowsLeftRight } from '@phosphor-icons/react';

/**
 * Interactive Side-by-Side Comparison between Moon and Mars objects.
 * Designed with curatorial archival aesthetics and clean technical matrix rows.
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
      const alternate = allObjects.find((o) => o.slug !== newSlug);
      if (alternate) setSlugB(alternate.slug);
    }
  };

  const handleSlugBChange = (newSlug) => {
    setSlugB(newSlug);
    if (newSlug === slugA) {
      const alternate = allObjects.find((o) => o.slug !== newSlug);
      if (alternate) setSlugA(alternate.slug);
    }
  };

  const matrix = buildComparisonMatrix(itemA, itemB);

  return (
    <div className="rounded border border-space-border bg-space-card p-6 sm:p-10 shadow-lg relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-space-border/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded border border-space-border bg-space-bgSecondary flex items-center justify-center text-space-accent">
            <ArrowsLeftRight weight="bold" className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-space-accentLight block">
              Comparative Analysis
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-space-text font-normal tracking-tight">
              Evaluate Technical Specifications
            </h3>
          </div>
        </div>

        <span className="text-[11px] font-mono text-space-textMuted bg-space-bgSecondary px-3 py-1.5 rounded border border-space-border/60 self-start sm:self-auto">
          Side-by-side artifact evaluation
        </span>
      </div>

      {/* Selectors for Artifact A and Artifact B */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Selector A */}
        <div className="p-4 rounded bg-space-bgSecondary border border-space-border">
          <label htmlFor="select-relic-a" className="text-[10px] font-mono uppercase tracking-wider text-space-textMuted block mb-2">
            First Artifact (Artifact A):
          </label>
          <select
            id="select-relic-a"
            value={slugA}
            onChange={(e) => handleSlugAChange(e.target.value)}
            className="w-full bg-space-card text-space-text rounded p-2.5 border border-space-border focus:outline-none focus:ring-1 focus:ring-space-accent text-xs font-mono"
          >
            {allObjects.map((obj) => (
              <option
                key={obj.slug}
                value={obj.slug}
                disabled={obj.slug === slugB}
              >
                [{obj.destination.toUpperCase()}] {obj.name} ({obj.year})
              </option>
            ))}
          </select>
        </div>

        {/* Selector B */}
        <div className="p-4 rounded bg-space-bgSecondary border border-space-border">
          <label htmlFor="select-relic-b" className="text-[10px] font-mono uppercase tracking-wider text-space-textMuted block mb-2">
            Second Artifact (Artifact B):
          </label>
          <select
            id="select-relic-b"
            value={slugB}
            onChange={(e) => handleSlugBChange(e.target.value)}
            className="w-full bg-space-card text-space-text rounded p-2.5 border border-space-border focus:outline-none focus:ring-1 focus:ring-space-accent text-xs font-mono"
          >
            {allObjects.map((obj) => (
              <option
                key={obj.slug}
                value={obj.slug}
                disabled={obj.slug === slugA}
              >
                [{obj.destination.toUpperCase()}] {obj.name} ({obj.year})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Artifact Summary Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 rounded bg-space-bgSecondary/60 border border-space-border/60">
          <span className={`text-[10px] font-mono uppercase tracking-wider ${itemA.destination.toLowerCase() === 'moon' ? 'text-moon-silver' : 'text-mars-rust'}`}>
            {itemA.destination} • {itemA.year}
          </span>
          <h4 className="font-editorial text-xl text-space-text mt-1">{itemA.name}</h4>
          <p className="text-xs text-space-textSecondary mt-1 font-sans">{itemA.objectType}</p>
        </div>

        <div className="p-4 rounded bg-space-bgSecondary/60 border border-space-border/60">
          <span className={`text-[10px] font-mono uppercase tracking-wider ${itemB.destination.toLowerCase() === 'moon' ? 'text-moon-silver' : 'text-mars-rust'}`}>
            {itemB.destination} • {itemB.year}
          </span>
          <h4 className="font-editorial text-xl text-space-text mt-1">{itemB.name}</h4>
          <p className="text-xs text-space-textSecondary mt-1 font-sans">{itemB.objectType}</p>
        </div>
      </div>

      {/* Comparison Technical Matrix Table */}
      <div className="overflow-x-auto rounded border border-space-border">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-space-bgSecondary border-b border-space-border text-space-textMuted uppercase text-[10px]">
            <tr>
              <th scope="col" className="p-3.5 pl-4 w-1/3">Technical Metric</th>
              <th scope="col" className="p-3.5 w-1/3">{itemA.name}</th>
              <th scope="col" className="p-3.5 pr-4 w-1/3">{itemB.name}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-space-border/60 font-sans">
            {matrix.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-space-card' : 'bg-space-bgSecondary/40'}>
                <td className="p-3.5 pl-4 font-mono text-[11px] text-space-accentLight">{row.label}</td>
                <td className="p-3.5 text-space-textSecondary">{row.valA}</td>
                <td className="p-3.5 pr-4 text-space-textSecondary">{row.valB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ObjectComparison;
