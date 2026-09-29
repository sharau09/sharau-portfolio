import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal-950/80 backdrop-blur-md animate-fade-in">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-ivory border border-espresso-200 overflow-y-auto shadow-2xl z-10">
        
        {/* Top Editorial Bar */}
        <div className="sticky top-0 bg-ivory/95 backdrop-blur-sm border-b border-espresso-200/80 px-6 sm:px-8 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-espresso-600 font-semibold">
            <span>{project.figure}</span>
            <span>//</span>
            <span>{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-espresso-950 hover:text-espresso-600 hover:rotate-90 transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Headline & Subtitle */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-medium">
              CASE STUDY // PRODUCTION SPECIFICATION
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-espresso-950 tracking-tight mt-1 mb-3">
              {project.title}
            </h3>
            <p className="font-serif italic text-lg sm:text-xl text-espresso-800">
              {project.subtitle}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-espresso-100 border border-espresso-200 shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-[1.05]"
            />
            <div className="absolute bottom-3 left-3 bg-ivory/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-espresso-900 border border-espresso-200">
              ARCHITECTURE & IMPLEMENTATION OVERVIEW
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold mb-3">
              TECHNICAL STACK & FRAMEWORKS
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-cream border border-espresso-200 text-xs font-medium text-espresso-900 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview / Context */}
          <div className="border-t border-espresso-200/70 pt-6">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-espresso-600 font-semibold mb-3">
              PROJECT SCOPE & TECHNICAL IMPLEMENTATION
            </h4>
            <p className="text-sm sm:text-base text-espresso-800/90 leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          {/* Technical Architecture Breakdown */}
          {project.architecture && (
            <div className="border-t border-espresso-200/70 pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.25em] text-espresso-600 font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-espresso-700" />
                <span>SUBSYSTEM BREAKDOWN</span>
              </h4>
              <div className="space-y-3">
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="p-4 bg-cream/70 border border-espresso-200/80 flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-espresso-500 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-espresso-900 leading-relaxed font-light">
                      {arch}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && (
            <div className="border-t border-espresso-200/70 pt-6">
              <h4 className="text-[11px] uppercase tracking-[0.25em] text-espresso-600 font-semibold mb-4">
                VERIFIED HIGHLIGHTS & CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-4 bg-ivory border border-espresso-300 text-center">
                    <div className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal">
                      {metric.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-espresso-600 mt-1 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="border-t border-espresso-200/80 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-espresso-950 text-ivory text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-espresso-800 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span>VIEW GITHUB REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              {project.demo && project.demo !== project.github && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-espresso-800 text-espresso-950 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-espresso-100 transition-colors"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-[0.2em] text-espresso-500 hover:text-espresso-950 transition-colors self-start sm:self-auto pt-2 sm:pt-0"
            >
              RETURN TO ARCHIVE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
