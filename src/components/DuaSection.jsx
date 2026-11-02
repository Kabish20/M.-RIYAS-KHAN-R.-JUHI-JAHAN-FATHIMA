import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Volume2, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/soundEngine';
import { weddingData } from '../constants/weddingData';

export default function DuaSection() {
  const { dua } = weddingData;
  const [hasSaidAmeen, setHasSaidAmeen] = useState(false);

  const handleSayAmeen = () => {
    setHasSaidAmeen(true);
    soundEngine.playBlessingChime();

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FDE047', '#10B981', '#FFFBEB'],
    });

    setTimeout(() => setHasSaidAmeen(false), 4000);
  };

  const handleReciteDua = () => {
    soundEngine.playBlessingChime();
  };

  return (
    <section id="dua" className="py-20 px-4 relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/40 text-[#dfbc60] text-xs font-serif uppercase tracking-widest mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#fde047]" />
          <span>Sacred Dua & Blessings</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff7cd] tracking-wide mb-3">
          {dua.title}
        </h2>
        
        <p className="text-xs sm:text-sm font-serif text-[#eed999]/90 max-w-xl mx-auto mb-10">
          Recited from the Sunnah of Prophet Muhammad (peace be upon him) for love, prosperity, and Barakah.
        </p>

        {/* Central Dua Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gold-card rounded-3xl p-6 sm:p-10 border-2 border-[#d4af37]/50 shadow-[0_15px_45px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          {/* Subtle Arch Framing */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#fde047] to-transparent"></div>

          {/* Transliteration */}
          <div className="my-5 py-4 px-6 rounded-2xl bg-black/40 border border-[#d4af37]/40 max-w-2xl mx-auto shadow-inner">
            <p className="text-base sm:text-xl font-serif text-[#fffbeb] font-bold tracking-wide leading-relaxed italic">
              "{dua.transliteration}"
            </p>
          </div>

          {/* Meaning */}
          <p className="text-sm sm:text-base font-serif text-[#eed999] max-w-2xl mx-auto leading-relaxed mt-4">
            {dua.meaning}
          </p>

          {/* Holy Quran Verse Box */}
          <div className="mt-8 pt-6 border-t border-[#d4af37]/30 text-center sm:text-left bg-emerald-950/40 p-4 rounded-2xl">
            <p className="text-xs sm:text-sm font-serif text-[#fef9c3]/90 italic leading-relaxed">
              "{dua.quranVerse}"
            </p>
          </div>

          {/* Say Ameen Interactive Button */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSayAmeen}
              className={`px-6 py-2.5 rounded-full font-serif font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-lg ${
                hasSaidAmeen
                  ? "bg-emerald-600 text-white"
                  : "bg-gradient-to-r from-[#d4af37] via-[#f7d070] to-[#c59a3f] text-[#032316]"
              }`}
            >
              {hasSaidAmeen ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Ameen! Prayers Sent</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#032316]" />
                  <span>Say 'Ameen' & Bless Couple</span>
                </>
              )}
            </motion.button>

            <button
              onClick={handleReciteDua}
              className="px-4 py-2.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800 border border-[#d4af37]/40 text-[#fde047] text-xs font-serif transition flex items-center gap-1.5"
            >
              <Volume2 className="w-4 h-4" />
              <span>Chime</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
