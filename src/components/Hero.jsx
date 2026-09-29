import React from 'react';
import { ArrowDownRight, Sparkles, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[calc(100vh-60px)] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-ivory bg-grain">
      
      {/* Editorial Watermark / Monogram Background Accent (contained to avoid horizontal overflow) */}
      <div className="absolute right-0 top-[15vh] select-none pointer-events-none opacity-[0.03] text-espresso-950 font-serif text-[32vw] lg:text-[24vw] leading-none font-thin overflow-hidden max-w-full">
        S
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
        
        {/* Top Editorial Index Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-espresso-200/80 pb-4 mb-8 sm:mb-10 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-espresso-700 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-espresso-800 rounded-none inline-block"></span>
            <span>VOL. 26 // AI ARCHITECTURE</span>
          </div>
          <div className="hidden sm:block text-espresso-400">
            [ ML · GENERATIVE AI · AUTOMATION · GRAPH ML ]
          </div>
          <div className="font-serif italic tracking-normal text-xs sm:text-sm text-espresso-800">
            Automating Complexity with Elegance
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left / Main Editorial Typography Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Sub-label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-espresso-100/70 border border-espresso-200/80 w-fit text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-espresso-900 font-medium">
              <Sparkles className="w-3 h-3 text-bronze-dark" />
              <span>{personal.title}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-espresso-950 tracking-tight leading-[1.12] sm:leading-[1.08] break-words">
              Building{' '}
              <span className="italic font-normal text-espresso-800 underline decoration-espresso-300/60 decoration-[1px] underline-offset-8">
                Intelligent Systems
              </span>{' '}
              with Code & Creativity.
            </h1>

            {/* Introduction Lead */}
            <p className="text-base sm:text-lg text-espresso-800/90 font-light leading-relaxed max-w-xl">
              {personal.heroSubheadline}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-5">
              <a
                href="#work"
                className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-espresso-950 text-ivory text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-espresso-800 shadow-editorial"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-espresso-800/60 text-espresso-950 text-xs uppercase tracking-[0.2em] font-medium hover:bg-espresso-900 hover:text-ivory transition-all duration-300"
              >
                <span>LET'S CONNECT</span>
              </a>
            </div>

            {/* Quick Editorial Metadata Ticker */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-espresso-200/70">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-espresso-500 mb-1">Core Focus</span>
                <span className="font-serif text-base text-espresso-950 font-normal leading-snug block">
                  AI/ML & GenAI Systems
                </span>
              </div>
              <div className="sm:col-span-1">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-espresso-500 mb-1">Status & Education</span>
                <span className="font-serif text-base text-espresso-950 font-normal leading-tight block">
                  {personal.statusCompact}
                </span>
                <span className="font-serif text-xs text-espresso-700 italic block mt-0.5">
                  {personal.statusSub}
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-espresso-500 mb-1">Experience</span>
                <span className="font-serif text-base text-espresso-950 font-normal leading-snug block">
                  ML Intern @ Cognifyz
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: User's Professional Portrait with Zoomed-Out Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end pt-4 lg:pt-0">
            
            {/* Outer offset frame */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              
              {/* Decorative background paper offset */}
              <div className="absolute -inset-2 sm:-inset-3 bg-cream-dark/50 border border-espresso-200/60 transform rotate-[-1.5deg] -z-10"></div>
              
              {/* Main Image Card */}
              <div className="relative bg-ivory border border-espresso-200/80 p-3 sm:p-4 shadow-editorial-lg">
                
                {/* 
                  Container tuned to aspect-[4/3.8] with object-[center_35%] 
                  to gracefully show full head, hair, collar, blazer and natural background 
                  without tight face zooming 
                */}
                <div className="overflow-hidden aspect-[4/3.8] bg-[#C8C5C1] relative">
                  <img
                    src={personal.images.hero}
                    alt="Sharau — AI/ML Engineer"
                    className="w-full h-full object-cover object-[center_35%] filter contrast-[1.02] hover:scale-[1.02] transition-all duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle luxury editorial gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/20 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Stamp Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-ivory/95 backdrop-blur-sm border border-espresso-200 px-2.5 sm:px-3 py-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-espresso-900 font-semibold shadow-sm">
                    PORTFOLIO 2026
                  </div>
                </div>

                {/* Editorial Caption Under Image */}
                <div className="pt-3 sm:pt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-espresso-700 border-t border-espresso-200/60 mt-3">
                  <span>FIG. 00 // PORTRAIT</span>
                  <span className="font-serif italic tracking-normal text-xs text-espresso-900">Sharau — Pune, IN</span>
                </div>
              </div>

              {/* Floating Overlapping Editorial Accent Card (safely anchored to avoid column collision) */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 bg-ivory/95 backdrop-blur-md border border-espresso-200 p-3 sm:p-4 max-w-[190px] sm:max-w-[210px] shadow-editorial hidden xs:block sm:block z-10">
                <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-espresso-500 font-medium mb-1">
                  CURRENT FOCUS
                </div>
                <div className="font-serif text-xs sm:text-sm text-espresso-950 leading-snug">
                  AI/ML Engineering · Generative AI · Intelligent Automation
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 sm:pt-10 flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-espresso-500">
        <span>CONTINUE EXPLORING</span>
        <a href="#profile" className="inline-flex items-center gap-2 hover:text-espresso-900 transition-colors group">
          <span>SECTION 01 — PROFILE</span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>

    </section>
  );
}
