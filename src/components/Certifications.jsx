import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-ivory border-t border-espresso-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-200/80 pb-6 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-2">
              07 — CREDENTIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 tracking-tight">
              Certifications & Accreditations
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-700/80 max-w-sm md:text-right">
            <span>VERIFIED PROFESSIONAL ACCREDITATIONS</span>
            <p className="font-serif italic tracking-normal text-xs text-espresso-600 mt-1">
              "Generative AI, Microsoft Azure & Machine Learning."
            </p>
          </div>
        </div>

        {/* Editorial Table Register */}
        <div className="border border-espresso-200 divide-y divide-espresso-200 bg-ivory shadow-editorial">
          
          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-12 px-8 py-4 bg-cream/70 text-[10px] uppercase tracking-[0.25em] text-espresso-600 font-semibold">
            <div className="col-span-6">CERTIFICATION</div>
            <div className="col-span-3">ORGANIZATION / ISSUER</div>
            <div className="col-span-3 text-right">ACTION</div>
          </div>

          {/* Table Rows */}
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="flex flex-col lg:grid lg:grid-cols-12 p-6 sm:px-8 sm:py-6 lg:items-center gap-4 hover:bg-cream/40 transition-colors group"
            >
              {/* Certification Name */}
              <div className="lg:col-span-6">
                <div className="flex items-start sm:items-center gap-3">
                  <span className="text-[10px] font-mono text-espresso-400 mt-1 sm:mt-0 shrink-0">0{idx + 1}</span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-2xl text-espresso-950 font-normal group-hover:text-espresso-700 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-espresso-600 font-light mt-0.5 lg:hidden">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Organization (Desktop/Large Screens) */}
              <div className="hidden lg:block lg:col-span-3 text-xs uppercase tracking-[0.18em] text-espresso-800 font-medium">
                {cert.organization}
              </div>

              {/* Action Buttons: Direct Verified Link & Modal */}
              <div className="lg:col-span-3 flex items-center lg:justify-end gap-2.5 pt-2 lg:pt-0">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-espresso-950 text-ivory text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-espresso-800 transition-all duration-300 shadow-sm shrink-0"
                >
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1 px-3 py-2 border border-espresso-300 text-espresso-900 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-cream transition-colors shrink-0"
                >
                  <span>INFO</span>
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
