import React from 'react';
import { Sparkles, Brain, Cpu, Workflow, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function WhatIDo() {
  const { whatIDo } = portfolioData;

  const getAreaIcon = (index) => {
    if (index === 0) return <Brain className="w-5 h-5 text-espresso-800" />;
    if (index === 1) return <Sparkles className="w-5 h-5 text-espresso-800" />;
    return <Workflow className="w-5 h-5 text-espresso-800" />;
  };

  return (
    <section id="what-i-do" className="py-24 sm:py-32 bg-cream/60 border-t border-espresso-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-200/80 pb-6 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-2">
              02 — DISCIPLINES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 tracking-tight">
              What I Do
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-700/80 max-w-sm md:text-right">
            <span>ENGINEERING THREE INTERSECTING HORIZONS</span>
            <p className="font-serif italic tracking-normal text-xs text-espresso-600 mt-1">
              "From foundational models to self-executing pipelines."
            </p>
          </div>
        </div>

        {/* Three Editorial Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {whatIDo.map((area, idx) => (
            <div
              key={area.title}
              className="bg-ivory border border-espresso-200/90 p-8 sm:p-10 flex flex-col justify-between hover:border-espresso-800 hover:shadow-editorial-lg transition-all duration-500 group relative"
            >
              {/* Subtle top index bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-espresso-800 transition-colors duration-500"></div>

              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between border-b border-espresso-200/60 pb-6 mb-6">
                  <span className="font-serif text-4xl text-espresso-300 group-hover:text-espresso-800 transition-colors font-light">
                    {area.num}
                  </span>
                  <div className="p-2.5 bg-cream/80 border border-espresso-200/60 group-hover:border-espresso-400 transition-colors">
                    {getAreaIcon(idx)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal tracking-tight mb-2 group-hover:text-espresso-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-espresso-600 font-medium mb-6">
                  {area.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-espresso-800/85 leading-relaxed font-light mb-8">
                  {area.description}
                </p>

                {/* Key Capabilities List */}
                <div className="border-t border-espresso-100 pt-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold mb-4">
                    SPECIALIZED DELIVERABLES
                  </div>
                  <ul className="space-y-2.5">
                    {area.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="text-xs text-espresso-800 flex items-start gap-2.5">
                        <span className="text-espresso-400 mt-0.5 select-none">—</span>
                        <span className="leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="mt-10 pt-6 border-t border-espresso-200/60">
                <p className="font-serif italic text-xs text-espresso-700 leading-relaxed">
                  "{area.tagline}"
                </p>
                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-espresso-500 group-hover:text-espresso-950 transition-colors">
                  <span>DISCIPLINE VERIFIED</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
