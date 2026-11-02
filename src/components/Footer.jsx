import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 pt-16 pb-12 px-4 border-t border-[#d4af37]/30 bg-[#02180f] text-center overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-[#d4af37]/10 blur-2xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Monogram Seal */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] via-[#946a1e] to-[#422e0a] border-2 border-[#fff3c4] p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-4">
          <div className="w-full h-full rounded-full border border-dashed border-[#ffe699] flex flex-col items-center justify-center text-[#fff9db]">
            <span className="font-serif font-bold text-base tracking-tight">RJ</span>
          </div>
        </div>

        {/* Couple Names */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fff7cd] mb-1">
          M. Riyas Khan & R. Juhi Jahan Fathima
        </h3>
        
        <p className="text-xs font-serif text-[#dfbc60] tracking-widest uppercase mb-4">
          Nikkah & Walima Ceremony • 23.11.2026
        </p>

        <p className="text-xs font-serif text-[#eed999]/80 max-w-md mx-auto mb-6">
          With deepest regards from Janab KVR N. Raja Mohamed & K.V.R Family, Trichy.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-[#d4af37]/40 text-[#fde047] hover:text-white transition shadow-lg flex items-center gap-2 text-xs font-serif uppercase tracking-wider"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Back to Top</span>
        </button>

        <div className="mt-8 pt-6 border-t border-[#d4af37]/20 text-[11px] font-sans text-gray-400">
          Digital Wedding Invitation crafted for K.V.R Groups • Trichy, Tamil Nadu
        </div>

      </div>
    </footer>
  );
}
