import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function SelectedWork() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 sm:py-32 bg-ivory border-t border-espresso-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-200/80 pb-6 mb-20 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-2">
              03 — SELECTED WORK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 tracking-tight">
              Featured Systems & Architecture
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-700/80 max-w-sm md:text-right">
            <span>07 REPOSITORIES & PRODUCTION SYSTEMS</span>
            <p className="font-serif italic tracking-normal text-xs text-espresso-600 mt-1">
              "Each system engineered with algorithmic intent & deployable code."
            </p>
          </div>
        </div>

        {/* Alternating Editorial Project Spreads */}
        <div className="space-y-28 lg:space-y-36">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    {/* Decorative Asymmetric Framing */}
                    <div className="absolute -inset-1.5 sm:-inset-2.5 bg-cream/70 border border-espresso-200/60 -z-10 transition-transform duration-500 group-hover:scale-[1.01]"></div>

                    <div className="bg-ivory border border-espresso-200/90 p-3 sm:p-4 shadow-editorial overflow-hidden">
                      <div className="relative aspect-[16/10] overflow-hidden bg-espresso-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover filter contrast-[1.04] group-hover:scale-[1.02] transition-all duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-espresso-950/15 group-hover:opacity-0 transition-opacity duration-500"></div>
                        
                        {/* Fig Stamp */}
                        <div className="absolute top-3 left-3 bg-ivory/95 backdrop-blur-sm border border-espresso-200 px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-espresso-900 font-semibold shadow-sm">
                          {project.figure}
                        </div>

                        {/* Category badge */}
                        <div className="absolute bottom-3 right-3 bg-espresso-950/80 text-ivory backdrop-blur-sm px-2.5 sm:px-3 py-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-medium hidden xs:block sm:block">
                          {project.category}
                        </div>
                      </div>

                      {/* Editorial image caption */}
                      <div className="pt-3 pb-1 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-espresso-600 border-t border-espresso-100 mt-2">
                        <span>OPEN-SOURCE REPOSITORY</span>
                        <span className="font-serif italic tracking-normal text-xs text-espresso-800">
                          Verified Codebase
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-5 sm:space-y-6`}>
                  
                  {/* Metadata Header */}
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-espresso-500 font-medium">
                    <span>{project.figure}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-espresso-950 font-normal leading-tight tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-serif italic text-base sm:text-lg text-espresso-700 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-espresso-800/90 font-light leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Technology Tags */}
                  <div className="pt-1">
                    <span className="block text-[9px] uppercase tracking-[0.22em] text-espresso-500 font-semibold mb-2">
                      CORE ARCHITECTURE
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-cream/80 border border-espresso-200/70 text-[10px] sm:text-[11px] text-espresso-800 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with Working Links */}
                  <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 border-t border-espresso-200/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-espresso-950 text-ivory text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-espresso-800 transition-colors shadow-sm"
                    >
                      <Github className="w-3.5 h-3.5 shrink-0" />
                      <span>GITHUB REPO</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 border border-espresso-300 text-espresso-900 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-cream transition-colors"
                    >
                      <span>VIEW DETAILS</span>
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
