import React from 'react';
import { Sparkles, Terminal, Flame, Compass, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function WhyBuildWithMe() {
  const { whyBuildWithMe } = portfolioData;

  const getPillarSymbol = (idx) => {
    if (idx === 0) return <Compass className="w-5 h-5 text-bronze-light" />;
    if (idx === 1) return <Flame className="w-5 h-5 text-bronze-light" />;
    return <CheckCircle className="w-5 h-5 text-bronze-light" />;
  };

  return (
    <section id="why-build-with-me" className="py-28 sm:py-36 bg-charcoal-950 text-ivory relative overflow-hidden bg-dark-grain">
      
      {/* Background Graphic Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-gradient from-espresso-800/10 via-transparent to-transparent pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Masthead in Dark Mode */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-20 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-bronze-light font-semibold block mb-3">
              08 — MANIFESTO
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-ivory">
              Why Build With Me
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-charcoal-400 max-w-sm md:text-right">
            <span>PHILOSOPHY OF HIGH-FIDELITY ENGINEERING</span>
            <p className="font-serif italic tracking-normal text-xs text-charcoal-300 mt-1">
              "Quiet discipline, production resilience, zero compromise."
            </p>
          </div>
        </div>

        {/* Three Editorial Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {whyBuildWithMe.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="group relative bg-charcoal-900/70 border border-white/10 p-8 sm:p-12 flex flex-col justify-between hover:border-bronze-light/50 transition-all duration-500 hover:shadow-editorial-dark"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-transparent group-hover:bg-bronze-light transition-colors duration-500"></div>

              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-charcoal-600 group-hover:text-bronze-light transition-colors">
                    {pillar.number}
                  </span>
                  <div className="p-3 bg-charcoal-800/80 border border-white/5 group-hover:border-bronze-light/40 transition-colors">
                    {getPillarSymbol(idx)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal tracking-tight mb-2 group-hover:text-bronze-light transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-bronze-light/90 font-medium mb-6">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-charcoal-300 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Quote / Principle */}
              <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-charcoal-500 group-hover:text-charcoal-300 transition-colors">
                <span>ETHOS VERIFIED</span>
                <span className="font-serif italic tracking-normal text-xs text-bronze-light">
                  Sharau Standard
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Manifesto Quote Banner */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-12 border border-white/10 bg-charcoal-900/40 text-center relative">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-bronze-light font-medium">
              CORE COMMITMENT
            </span>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ivory italic font-light leading-relaxed">
              "We don't simply assemble models. We engineer dependable, transparent, and resilient cognitive infrastructure."
            </p>
            <div className="pt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-charcoal-400">
              SHARAU &nbsp;•&nbsp; AI / ML ENGINEER
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
