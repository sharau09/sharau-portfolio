import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 bg-cream/30 border-t border-espresso-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-200/80 pb-6 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-2">
              06 — ACADEMIA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 tracking-tight">
              Formal Education
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-700/80 max-w-sm md:text-right">
            <span>RESUME ACADEMIC CREDENTIALS</span>
            <p className="font-serif italic tracking-normal text-xs text-espresso-600 mt-1">
              "Vishwakarma University, Pune & MIT World Peace University"
            </p>
          </div>
        </div>

        {/* Education Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-ivory border border-espresso-200/90 p-8 sm:p-10 flex flex-col justify-between hover:border-espresso-700 hover:shadow-editorial transition-all duration-300 relative group"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between border-b border-espresso-200/60 pb-4 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-espresso-600" />
                    <span>DEGREE 0{idx + 1}</span>
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-espresso-700 font-mono">
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal tracking-tight mb-2 group-hover:text-espresso-700 transition-colors">
                  {edu.degree}
                </h3>
                <h4 className="font-serif italic text-lg text-espresso-800 mb-6">
                  {edu.institution}
                </h4>
              </div>

              {/* Status / Compact Badge */}
              <div className="pt-4 border-t border-espresso-100 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-espresso-500">
                  DESIGNATION
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-cream border border-espresso-200 text-xs font-mono font-medium text-espresso-900">
                    {edu.shortFormat}
                  </span>
                  <span className="text-xs font-serif italic text-espresso-700">
                    ({edu.status})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
