import React, { useEffect } from 'react';
import { X, ExternalLink, Award, CheckCircle } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
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

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-ivory border border-espresso-200 p-8 sm:p-10 shadow-2xl z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-espresso-900 hover:text-espresso-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold">
            <Award className="w-4 h-4 text-bronze-dark" />
            <span>VERIFIED CREDENTIAL</span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-espresso-600 font-medium">
              {cert.organization}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal tracking-tight mt-1">
              {cert.title}
            </h3>
          </div>

          {/* Certificate Frame Preview */}
          <div className="p-6 bg-cream border border-espresso-200 text-center relative overflow-hidden">
            <div className="text-[10px] uppercase tracking-[0.3em] text-espresso-400 mb-2">
              ISSUING AUTHORITY // {cert.organization}
            </div>
            <div className="font-serif text-xl sm:text-2xl text-espresso-900 italic font-light my-2">
              Sharau
            </div>
            <p className="text-xs text-espresso-700/90 max-w-xs mx-auto leading-relaxed">
              {cert.description || "Demonstrated competencies in Generative AI, machine learning pipelines, and data analytics."}
            </p>
            <div className="mt-4 pt-3 border-t border-espresso-200/80 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-emerald-800 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>AUTHENTICATED ACCREDITATION</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-espresso-200">
            {cert.verificationUrl && cert.verificationUrl !== '#' ? (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-espresso-950 text-ivory text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-espresso-800 transition-colors shadow-sm"
              >
                <span>OPEN OFFICIAL CREDENTIAL</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            ) : (
              <span className="text-xs font-serif italic text-espresso-700">
                Verified on Resume
              </span>
            )}

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-[0.2em] text-espresso-600 hover:text-espresso-950 transition-colors self-start sm:self-auto pt-1 sm:pt-0"
            >
              DISMISS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
