import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, GraduationCap, Users } from 'lucide-react';
import { weddingData } from '../constants/weddingData';

export default function CoupleProfile() {
  const { groom, bride } = weddingData.couple;

  return (
    <section id="couple" className="py-20 px-4 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/40 text-[#dfbc60] text-xs font-serif uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-[#fde047]" />
            <span>The Blessed Union</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff7cd] tracking-wide mb-3">
            Meet the Bride & Groom
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#eed999]/90">
            United in faith, love, and sacred matrimony with the prayers of parents and elders.
          </p>
        </div>

        {/* 2-Column Couple Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="gold-card rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between border-2 border-[#d4af37]/40 shadow-2xl hover:border-[#fde047]/70 transition-all duration-300"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-[#d4af37]/25 pb-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[11px] font-serif font-bold uppercase tracking-wider text-[#fde047]">
                {groom.role}
              </span>
              <span className="text-xs font-serif text-[#eed999]/80 italic">
                Blessings of Elders
              </span>
            </div>

            {/* Avatar Crest */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0a4d30] via-[#042417] to-[#01140c] border-2 border-[#fef08a] p-1 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <div className="w-full h-full rounded-full border border-dashed border-[#dfbc60] flex flex-col items-center justify-center text-[#fff9db]">
                    <span className="font-serif font-bold text-2xl tracking-tight">MRK</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#fde047]" />
                  </div>
                </div>
              </div>

              {/* Name & Qualifications */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff7cd]">
                {groom.name}
              </h3>
              <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/30 border border-[#dfbc60]/30 text-xs font-serif text-[#fde047]">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{groom.degree}</span>
              </div>
            </div>

            {/* Parents & Family Lineage */}
            <div className="mt-8 space-y-4 pt-6 border-t border-[#d4af37]/25 text-left text-xs sm:text-sm">
              <div className="bg-emerald-950/60 p-4 rounded-xl border border-[#d4af37]/20">
                <p className="text-[10px] uppercase tracking-wider text-[#dfbc60] font-semibold mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Son Of (Parents)</span>
                </p>
                <p className="font-serif font-bold text-[#fff7cd] text-sm sm:text-base">
                  {groom.father} & {groom.mother}
                </p>
              </div>

              {/* Lineage */}
              <div className="bg-black/25 p-4 rounded-xl border border-[#d4af37]/20 space-y-2">
                <p className="text-[10px] uppercase tracking-wider text-[#dfbc60] font-semibold">
                  Elders & Lineage
                </p>
                <div className="space-y-1.5 text-xs text-[#eed999]/90 font-serif leading-relaxed">
                  {groom.lineage.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#fde047] mt-1">•</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="gold-card rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between border-2 border-[#d4af37]/40 shadow-2xl hover:border-[#fde047]/70 transition-all duration-300"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-[#d4af37]/25 pb-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[11px] font-serif font-bold uppercase tracking-wider text-[#fde047]">
                {bride.role}
              </span>
              <span className="text-xs font-serif text-[#eed999]/80 italic">
                Blessings of Elders
              </span>
            </div>

            {/* Avatar Crest */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0a4d30] via-[#042417] to-[#01140c] border-2 border-[#fef08a] p-1 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <div className="w-full h-full rounded-full border border-dashed border-[#dfbc60] flex flex-col items-center justify-center text-[#fff9db]">
                    <span className="font-serif font-bold text-2xl tracking-tight">RJF</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#fde047]" />
                  </div>
                </div>
              </div>

              {/* Name & Qualifications */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff7cd]">
                {bride.name}
              </h3>
              <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/30 border border-[#dfbc60]/30 text-xs font-serif text-[#fde047]">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{bride.degree}</span>
              </div>
            </div>

            {/* Parents & Family Lineage */}
            <div className="mt-8 space-y-4 pt-6 border-t border-[#d4af37]/25 text-left text-xs sm:text-sm">
              <div className="bg-emerald-950/60 p-4 rounded-xl border border-[#d4af37]/20">
                <p className="text-[10px] uppercase tracking-wider text-[#dfbc60] font-semibold mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Daughter Of (Parents)</span>
                </p>
                <p className="font-serif font-bold text-[#fff7cd] text-sm sm:text-base">
                  {bride.father} & {bride.mother}
                </p>
              </div>

              {/* Lineage */}
              <div className="bg-black/25 p-4 rounded-xl border border-[#d4af37]/20 space-y-2">
                <p className="text-[10px] uppercase tracking-wider text-[#dfbc60] font-semibold">
                  Elders & Lineage
                </p>
                <div className="space-y-1.5 text-xs text-[#eed999]/90 font-serif leading-relaxed">
                  {bride.lineage.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#fde047] mt-1">•</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
