import React from 'react';
import { Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 bg-ivory border-t border-espresso-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-200/80 pb-6 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-2">
              05 — CAREER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 tracking-tight">
              Work Experience & Tenure
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-700/80 max-w-sm md:text-right">
            <span>RESUME SOURCE OF TRUTH</span>
            <p className="font-serif italic tracking-normal text-xs text-espresso-600 mt-1">
              "Predictive models, pipeline automation, and recommendation systems."
            </p>
          </div>
        </div>

        {/* Experience Showcase */}
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-cream/40 border border-espresso-200/90 p-8 sm:p-12 shadow-editorial relative"
            >
              {/* Header meta */}
              <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-espresso-200/80 pb-6 mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 bg-espresso-950 text-ivory font-semibold">
                      {exp.type}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-espresso-600 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3 h-3" />
                      Cognifyz Technologies
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="font-serif italic text-xl text-espresso-800 mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="text-[11px] uppercase tracking-[0.22em] text-espresso-700 font-medium md:text-right flex items-center md:justify-end gap-2">
                  <Calendar className="w-3.5 h-3.5 text-espresso-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Overview */}
              <p className="text-base text-espresso-800/90 font-light leading-relaxed max-w-3xl mb-8">
                {exp.overview}
              </p>

              {/* Measurable Achievements List */}
              <div className="border-t border-espresso-200/70 pt-8">
                <h4 className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold mb-6 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-bronze-dark" />
                  <span>KEY MEASURABLE ACHIEVEMENTS</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((item, aIdx) => (
                    <div
                      key={aIdx}
                      className="bg-ivory p-5 border border-espresso-200 flex items-start gap-3.5 hover:border-espresso-700 transition-colors group"
                    >
                      <span className="font-mono text-xs text-espresso-400 font-bold mt-0.5">
                        0{aIdx + 1}
                      </span>
                      <p className="text-sm text-espresso-900 leading-relaxed font-light">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-10 pt-6 border-t border-espresso-200/60 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-espresso-500">
                <span>VERIFIED TENURE</span>
                <span className="font-serif italic tracking-normal text-xs text-espresso-700">
                  Automated Preprocessing · Regression (R² = 0.84) · Recommendation (60% Effort Reduction)
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
