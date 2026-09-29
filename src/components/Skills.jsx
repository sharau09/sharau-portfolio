import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', ...skills.map(s => s.category)];

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-cream/40 border-t border-espresso-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-200/80 pb-6 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-2">
              04 — CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 tracking-tight">
              Technical Index & Skills
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-700/80 max-w-sm md:text-right">
            <span>RESUME-AUDITED TAXONOMY</span>
            <p className="font-serif italic tracking-normal text-xs text-espresso-600 mt-1">
              "Focused on practical implementation & deployable systems."
            </p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-10 sm:mb-12 border-b border-espresso-200/60 pb-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold mr-2 sm:mr-3 w-full sm:w-auto mb-2 sm:mb-0">
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-espresso-950 text-ivory shadow-sm'
                  : 'bg-ivory border border-espresso-200 text-espresso-800 hover:border-espresso-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((section) => (
            <div
              key={section.category}
              className="bg-ivory border border-espresso-200/90 p-6 sm:p-8 flex flex-col justify-between hover:border-espresso-700 hover:shadow-editorial transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="border-b border-espresso-200/80 pb-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl sm:text-2xl text-espresso-950 font-normal tracking-tight">
                      {section.category}
                    </h3>
                    <span className="text-[10px] font-mono text-espresso-400">
                      {section.items.length} SKILLS
                    </span>
                  </div>
                  <p className="text-xs text-espresso-600/80 mt-1 font-light leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Skill List */}
                <div className="space-y-3">
                  {section.items.map((skill, idx) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-between py-2 border-b border-espresso-100 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-espresso-400">
                          0{idx + 1}
                        </span>
                        <span className="font-medium text-sm text-espresso-900 group-hover/item:text-espresso-700 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[9px] uppercase tracking-[0.15em] font-mono px-2 py-0.5 bg-cream text-espresso-700 border border-espresso-200/70">
                        VERIFIED
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-espresso-100 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-espresso-400">
                <span>CORE COMPETENCY</span>
                <span>PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
