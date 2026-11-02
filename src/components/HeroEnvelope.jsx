import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, MailOpen, Music } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function HeroEnvelope({ isOpen, onOpen, guestName }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);
    soundEngine.playBlessingChime();
    soundEngine.startBackgroundMusic();

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FDE047', '#0A5C36', '#FAF6EE', '#EAB308'],
      shapes: ['circle', 'square']
    });

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

        <div className="relative w-full max-w-lg perspective-1000">
          {/* Card Container */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-gradient-to-b from-[#063321] via-[#042417] to-[#02170f] rounded-2xl p-6 sm:p-8 border-2 border-[#d4af37]/60 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.25)] text-center overflow-hidden"
          >
            {/* Corner Filigree Borders */}
            <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-[#d4af37]/80 rounded-tl-lg pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-[#d4af37]/80 rounded-tr-lg pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-[#d4af37]/80 rounded-bl-lg pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-[#d4af37]/80 rounded-br-lg pointer-events-none"></div>

            {/* Sacred Invocation */}
            <div className="text-[#dfbc60] text-base sm:text-lg font-serif font-bold tracking-widest uppercase mb-1 filter drop-shadow">
              BISMILLAH
            </div>

            <p className="text-xs tracking-[0.2em] uppercase text-[#f9e7a2] font-serif mb-3">
              All Praise Belongs to Allah
            </p>

            {/* K.V.R Header */}
            <div className="my-2">
              <span className="inline-block text-3xl sm:text-4xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ffe484] via-[#f7d070] to-[#c59a3f]">
                K.V.R
              </span>
              <p className="text-lg font-script text-[#f9e7a2] tracking-wider -mt-1">
                Family Invites
              </p>
            </div>

            {/* Couple Announcement */}
            <div className="my-5 py-4 border-y border-[#d4af37]/30 bg-black/20 rounded-xl relative">
              <div className="text-xl sm:text-2xl font-serif text-[#fff7cd] font-semibold tracking-wide">
                M. Riyas Khan
              </div>
              <div className="text-sm font-script text-[#dfbc60] my-1 flex items-center justify-center gap-2">
                <span className="w-8 h-[1px] bg-[#dfbc60]/40"></span>
                <span>Weds</span>
                <span className="w-8 h-[1px] bg-[#dfbc60]/40"></span>
              </div>
              <div className="text-xl sm:text-2xl font-serif text-[#fff7cd] font-semibold tracking-wide">
                R. Juhi Jahan Fathima
              </div>
              
              <div className="mt-3 inline-block px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-xs sm:text-sm font-serif tracking-widest text-[#fde047]">
                23.11.2026 MONDAY
              </div>
            </div>

            {/* Guest Personalization Box (Page 1 of Invitation: To & From) */}
            <div className="text-left bg-emerald-950/70 p-3.5 rounded-lg border border-[#d4af37]/30 text-xs sm:text-sm mb-6 space-y-2">
              <div>
                <span className="text-[#dfbc60] font-semibold font-serif">To: </span>
                <span className="text-[#fff9db] font-medium font-serif italic border-b border-[#dfbc60]/40 pb-0.5 px-1 inline-block min-w-[180px]">
                  {guestName ? decodeURIComponent(guestName) : "Honoured Guest & Family"}
                </span>
              </div>
              <div className="pt-1 border-t border-[#d4af37]/20 text-[11px] sm:text-xs text-[#dfbc60]/80">
                <span className="font-semibold text-[#dfbc60]">From: </span>
                <span>Janab KVR N. Raja Mohamed (TRICHY CARS)</span>
                <div className="text-gray-300">Annanagar, Trichy - 620017. Ph: 91437 33333</div>
              </div>
            </div>

            {/* 3D Wax Seal Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={handleOpenInvitation}
            >
              <div className="relative">
                {/* Glowing Outer Ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#dfbc60] to-[#b88926] rounded-full blur-sm opacity-70 group-hover:opacity-100 transition animate-pulse"></div>

                {/* Royal Wax Seal */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#d4af37] via-[#946a1e] to-[#593e0f] border-2 border-[#fff3c4] shadow-2xl flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-[#ffe699] flex flex-col items-center justify-center text-center">
                    <span className="font-serif font-bold text-sm sm:text-base text-[#fff9db] tracking-tighter">
                      RJ
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#fff9db] -mt-1" />
                  </div>
                </div>
              </div>

              {/* Action Text */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-serif uppercase tracking-widest text-[#fde047] group-hover:text-white transition"
              >
                <MailOpen className="w-4 h-4 text-[#d4af37]" />
                <span>{isOpening ? "Opening Royal Invite..." : "Tap to Open Royal Invitation"}</span>
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
              </motion.div>
              <p className="text-[10px] text-emerald-300/80 mt-1 flex items-center gap-1 font-sans">
                <Music className="w-3 h-3 text-[#d4af37]" /> With Wedding Music
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
