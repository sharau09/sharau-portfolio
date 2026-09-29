import React from 'react';
import { ArrowUpRight, Sparkles, Terminal, Code2, Cpu, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const technicalToolkit = [
    "Python", "SQL", "LangChain", "FastAPI", "n8n", 
    "Power Automate", "PyTorch", "TensorFlow", "Streamlit", "AWS"
  ];

  return (
    <section id="profile" className="py-24 sm:py-36 bg-ivory border-t border-espresso-200/80 relative overflow-hidden">
      {/* Invisible anchor for backward link compatibility */}
      <span id="about" className="absolute top-0 left-0 -mt-20"></span>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-200/80 pb-6 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-2">
              {personal.profileSectionNumber}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 tracking-tight max-w-2xl leading-[1.12]">
              {personal.profileHeading}
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-700/80 max-w-xs md:text-right">
            <span>ENGINEERING DISCIPLINE</span>
            <p className="font-serif italic tracking-normal text-xs text-espresso-600 mt-1">
              "Taking problems from experimentation to usable, deployable solutions."
            </p>
          </div>
        </div>

        {/* Typography-Focused Editorial Spread (No Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Paragraph 1: Lead */}
            <p className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal leading-relaxed tracking-tight">
              {personal.profileBody[0]}
            </p>

            {/* Paragraph 2: Experience Span */}
            <div className="p-6 sm:p-8 bg-cream/50 border-l-2 border-espresso-800 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block">
                CORE PHILOSOPHY
              </span>
              <p className="text-base sm:text-lg text-espresso-900 font-light leading-relaxed">
                {personal.profileBody[1]}
              </p>
            </div>

            {/* Paragraph 3: Technical Toolkit narrative */}
            <p className="text-base text-espresso-800 font-light leading-relaxed">
              {personal.profileBody[2]}
            </p>

            {/* Action link */}
            <div className="pt-2 flex items-center gap-6">
              <a
                href="#what-i-do"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-espresso-950 hover:text-espresso-600 transition-colors group"
              >
                <span>EXPLORE SPECIALIZED DISCIPLINES</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Index / Structured Focus Box (Clean Typography, No Photos) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Technical Toolkit Card */}
            <div className="bg-cream/40 border border-espresso-200/90 p-6 sm:p-8 shadow-editorial">
              <div className="flex items-center justify-between border-b border-espresso-200/80 pb-4 mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-600 font-semibold flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-espresso-700" />
                  <span>TECHNICAL TOOLKIT</span>
                </span>
                <span className="text-[10px] font-mono text-espresso-400">10 TECHNOLOGIES</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {technicalToolkit.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-ivory border border-espresso-200 text-xs font-medium text-espresso-900 tracking-wider hover:border-espresso-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-espresso-200/60 text-[10px] uppercase tracking-[0.2em] text-espresso-500">
                PROVEN ACROSS PRODUCTION & RESEARCH
              </div>
            </div>

            {/* Currently Exploring Card */}
            <div className="bg-ivory border border-espresso-200/90 p-6 sm:p-8 shadow-editorial">
              <div className="flex items-center justify-between border-b border-espresso-200/80 pb-4 mb-5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-600 font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-bronze-dark" />
                  <span>CURRENTLY EXPLORING</span>
                </span>
                <span className="text-[10px] font-mono text-espresso-400">ACTIVE RESEARCH</span>
              </div>

              <div className="space-y-3">
                {personal.currentlyExploring.map((area, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1.5 border-b border-espresso-100 last:border-0">
                    <span className="font-serif text-base text-espresso-950 font-normal">
                      {area}
                    </span>
                    <span className="text-[10px] font-mono text-espresso-400">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-espresso-200/60 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-espresso-500">
                <span>ACTIVE HORIZON</span>
                <span className="font-serif italic text-espresso-800 text-xs">Continuous Innovation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
