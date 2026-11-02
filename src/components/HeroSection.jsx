import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Sparkles, Heart, ChevronDown } from 'lucide-react';
import IslamicLanterns from './IslamicLanterns';
import { weddingData } from '../constants/weddingData';

export default function HeroSection({ guestName, onSaveDate }) {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 pb-16 flex flex-col items-center justify-center text-center px-4 overflow-hidden islamic-arabesque-bg">
      {/* Hanging animated lanterns */}
      <IslamicLanterns />

      {/* Decorative Rotating Mandala in background */}
      <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] border border-[#d4af37]/10 rounded-full animate-spin-very-slow pointer-events-none flex items-center justify-center">
        <div className="w-[85%] h-[85%] border border-dashed border-[#d4af37]/15 rounded-full"></div>
        <div className="absolute w-[70%] h-[70%] border border-[#d4af37]/10 rounded-full"></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Personalized Guest Badge if name is present */}
        {guestName && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-900/90 to-[#043321] border border-[#d4af37]/60 text-xs sm:text-sm font-serif text-[#fff7cd] shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#fde047]" />
            <span>Cordial Invitation For: </span>
            <span className="font-bold text-[#fde047] italic underline decoration-[#d4af37]/50">
              {decodeURIComponent(guestName)}
            </span>
          </motion.div>
        )}

        {/* Sacred Invocation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 mb-4"
        >
          <div className="text-xl sm:text-2xl font-serif font-bold text-[#dfbc60] tracking-widest uppercase filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
            {weddingData.bismillah.title}
          </div>
          <p className="text-xs sm:text-sm font-serif text-[#eed999] tracking-widest font-medium max-w-lg mx-auto">
            {weddingData.bismillah.subtitle}
          </p>
        </motion.div>

        {/* Host Banner */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-block px-5 py-1 rounded-full border-t border-b border-[#d4af37]/40 bg-black/20">
            <span className="font-serif tracking-[0.25em] text-xs sm:text-sm text-[#f9e7a2] uppercase font-semibold">
              {weddingData.family.inviter}
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-script text-[#eed999] tracking-wider mt-1">
            Cordially Invites You To The
          </h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#fff3c4] via-[#dfbc60] to-[#cfa235] uppercase mt-2">
            Nikkah & Walima
          </h1>
          <p className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#eed999]/90 mt-1">
            WEDDING INVITATION
          </p>
        </motion.div>

        {/* Couple Monogram Crest */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative my-4"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-[#d4af37] p-2 flex items-center justify-center bg-gradient-to-br from-[#063321] to-[#02170f] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <div className="w-full h-full rounded-full border border-dashed border-[#dfbc60] flex flex-col items-center justify-center">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#fff7cd] tracking-tight">
                R & J
              </span>
              <span className="text-[10px] uppercase font-serif text-[#dfbc60] tracking-widest -mt-1">
                K.V.R
              </span>
            </div>
            
            {/* Date Jewel */}
            <div className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-[#d4af37] text-[#032316] text-[10px] font-bold font-serif shadow-md">
              23.11.2026
            </div>
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-3 mt-4"
        >
          {/* Groom */}
          <div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#fff7cd] tracking-wide">
              {weddingData.couple.groom.name}
            </h3>
            <p className="text-xs sm:text-sm font-serif text-[#dfbc60] font-medium tracking-wider">
              {weddingData.couple.groom.degree}
            </p>
          </div>

          {/* Connector */}
          <div className="flex items-center justify-center gap-4 py-1">
            <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            <span className="font-script text-2xl sm:text-3xl text-[#f9e7a2] italic">
              Weds
            </span>
            <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          </div>

          {/* Bride */}
          <div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#fff7cd] tracking-wide">
              {weddingData.couple.bride.name}
            </h3>
            <p className="text-xs sm:text-sm font-serif text-[#dfbc60] font-medium tracking-wider">
              {weddingData.couple.bride.degree}
            </p>
          </div>
        </motion.div>

        {/* Date, Time & Venue Key Highlights */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl px-2"
        >
          {/* Date Card */}
          <div className="gold-card p-3.5 rounded-xl flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-lg bg-emerald-900/80 border border-[#d4af37]/40 text-[#fde047]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#dfbc60] font-semibold">
                Date
              </p>
              <p className="text-xs sm:text-sm font-serif font-bold text-[#fff7cd]">
                {weddingData.date.displayDate}
              </p>
            </div>
          </div>

          {/* Hijri & Time Card */}
          <div className="gold-card p-3.5 rounded-xl flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-lg bg-emerald-900/80 border border-[#d4af37]/40 text-[#fde047]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#dfbc60] font-semibold">
                Time & Hijri
              </p>
              <p className="text-xs sm:text-sm font-serif font-bold text-[#fff7cd]">
                {weddingData.date.time}
              </p>
              <p className="text-[10px] text-[#eed999]/90 font-serif">
                {weddingData.date.hijri}
              </p>
            </div>
          </div>

          {/* Venue Card */}
          <div className="gold-card p-3.5 rounded-xl flex items-center gap-3 text-left sm:col-span-1">
            <div className="p-2.5 rounded-lg bg-emerald-900/80 border border-[#d4af37]/40 text-[#fde047]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#dfbc60] font-semibold">
                Venue
              </p>
              <p className="text-xs sm:text-sm font-serif font-bold text-[#fff7cd]">
                {weddingData.venue.name}
              </p>
              <p className="text-[10px] text-gray-300 truncate max-w-[140px]">
                Mannarpuram, Trichy
              </p>
            </div>
          </div>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={onSaveDate}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#eed999] to-[#cfa235] text-[#032316] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Calendar</span>
          </button>

          <a
            href="#venue"
            className="px-6 py-3 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-[#d4af37]/60 text-[#fff7cd] font-serif font-semibold text-xs sm:text-sm tracking-wider uppercase hover:border-[#fde047] active:scale-95 transition flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#fde047]" />
            <span>View Venue Map</span>
          </a>

          <a
            href="#family"
            className="px-6 py-3 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 border border-[#d4af37]/40 text-[#fde047] font-serif font-semibold text-xs sm:text-sm tracking-wider uppercase active:scale-95 transition flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-[#fde047]" />
            <span>Family & Contacts</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#countdown"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-[#dfbc60]/70 hover:text-[#fde047] transition flex flex-col items-center gap-1 text-xs font-serif"
        >
          <span className="tracking-widest uppercase text-[10px]">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>

      </div>
    </section>
  );
}
