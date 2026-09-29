import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-ivory pt-24 pb-16 border-t border-white/10 relative overflow-hidden bg-dark-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Giant Editorial Brand Typography (scaled to fit viewport cleanly without overflow) */}
        <div className="border-b border-white/10 pb-12 sm:pb-16 mb-12 sm:mb-16 text-center select-none overflow-hidden">
          <h2 className="font-serif text-[13vw] sm:text-[12vw] md:text-[10vw] font-light leading-none tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.15em] text-ivory/90 hover:text-ivory transition-colors">
            {personal.name}
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-bronze-light">
            <span>{personal.title}</span>
            <span className="text-white/20 hidden xs:inline">•</span>
            <span>DATA SCIENCE SPECIALIST</span>
          </div>
        </div>

        {/* Colophon & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Colophon Editorial Notes */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-bronze-light font-semibold block">
              COLOPHON // SPECIFICATIONS
            </span>
            <p className="text-xs text-charcoal-300 font-light leading-relaxed max-w-sm">
              Designed with a luxury editorial aesthetic, pairing mathematical intelligence with editorial elegance. Built on React, Tailwind CSS, Vite, and Cloud Firestore.
            </p>
            <div className="text-[11px] text-charcoal-400 font-mono">
              COORDINATES: PUNE, INDIA // 18.5204° N, 73.8567° E
            </div>
          </div>

          {/* Directory Index */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-bronze-light font-semibold block">
              PORTFOLIO DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-300">
              <a href="#profile" className="hover:text-ivory transition-colors">01 — Profile</a>
              <a href="#what-i-do" className="hover:text-ivory transition-colors">02 — Disciplines</a>
              <a href="#work" className="hover:text-ivory transition-colors">03 — Selected Work</a>
              <a href="#skills" className="hover:text-ivory transition-colors">04 — Skills Index</a>
              <a href="#experience" className="hover:text-ivory transition-colors">05 — Experience</a>
              <a href="#education" className="hover:text-ivory transition-colors">06 — Education</a>
              <a href="#certifications" className="hover:text-ivory transition-colors">07 — Credentials</a>
              <a href="#why-build-with-me" className="hover:text-ivory transition-colors">08 — Manifesto</a>
              <a href="#contact" className="hover:text-ivory transition-colors">09 — Contact</a>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-bronze-light font-semibold block mb-3">
                CONNECTIVITY
              </span>
              <div className="flex flex-col space-y-2 text-xs text-charcoal-300">
                <a href={personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">GitHub</a>
                <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">LinkedIn</a>
                <a href={`mailto:${personal.socials.email}`} className="hover:text-ivory transition-colors">Email Dispatch</a>
              </div>
            </div>

            {/* Back to top button */}
            <div>
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-xs uppercase tracking-[0.2em] text-ivory hover:bg-white hover:text-charcoal-950 transition-all duration-300"
              >
                <span>TOP OF ARCHIVE</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-400">
          <div>
            © 2026 {personal.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 font-serif italic text-xs text-charcoal-300">
            <span>Built with code & creativity for real-world impact.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
