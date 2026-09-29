import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-espresso-950 text-ivory border border-espresso-700 p-4 shadow-2xl flex items-start gap-3 animate-fade-in">
      <CheckCircle2 className="w-5 h-5 text-bronze-light shrink-0 mt-0.5" />
      <div className="flex-1 pr-2">
        <span className="block text-[9px] uppercase tracking-[0.25em] text-bronze-light font-semibold mb-0.5">
          CORRESPONDENCE STATUS
        </span>
        <p className="text-xs text-ivory/90 leading-relaxed font-light">
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-ivory/60 hover:text-ivory transition-colors p-1"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
