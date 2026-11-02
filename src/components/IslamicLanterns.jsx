import React from 'react';
import { motion } from 'framer-motion';

export default function IslamicLanterns() {
  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none z-10 overflow-hidden h-48 md:h-64 flex justify-between px-4 md:px-16">
      {/* Lantern 1 - Leftmost */}
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
        className="flex flex-col items-center"
      >
        <div className="w-[1.5px] h-14 md:h-20 bg-gradient-to-b from-[#e5bd57] via-[#a87822] to-[#e5bd57] shadow-sm"></div>
        <div className="relative filter drop-shadow-[0_0_12px_rgba(235,190,65,0.7)]">
          <svg width="42" height="64" viewBox="0 0 42 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top crescent & cap */}
            <path d="M21 2C22.1 2 23 2.9 23 4C23 4.5 22.8 5 22.5 5.4C24 5.9 25 7.3 25 9H17C17 7.3 18 5.9 19.5 5.4C19.2 5 19 4.5 19 4C19 2.9 19.9 2 21 2Z" fill="#E5BD57" />
            <path d="M12 9H30L33 16H9L12 9Z" fill="#C59A3F" stroke="#FDE047" strokeWidth="0.5" />
            
            {/* Lantern Glass Body */}
            <path d="M9 16L6 34L14 48H28L36 34L33 16H9Z" fill="url(#glassGrad1)" stroke="#E5BD57" strokeWidth="1" />
            
            {/* Filigree Arches inside */}
            <path d="M14 18V44M21 16V46M28 18V44" stroke="#A87822" strokeWidth="0.75" />
            <circle cx="21" cy="31" r="5" fill="#FFEAA7" className="animate-pulse" opacity="0.9" filter="blur(1px)" />
            
            {/* Bottom taper & tassel */}
            <path d="M14 48L21 56L28 48H14Z" fill="#C59A3F" stroke="#E5BD57" strokeWidth="0.5" />
            <line x1="21" y1="56" x2="21" y2="64" stroke="#FDE047" strokeWidth="1.5" />
            <circle cx="21" cy="63" r="1.5" fill="#FDE047" />

            <defs>
              <linearGradient id="glassGrad1" x1="21" y1="16" x2="21" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF3B0" stopOpacity="0.85" />
                <stop offset="0.5" stopColor="#F59E0B" stopOpacity="0.75" />
                <stop offset="1" stopColor="#B45309" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Lantern 2 - Mid Left (Slightly shorter chain) */}
      <motion.div
        animate={{ rotate: [3.5, -3.5, 3.5] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ transformOrigin: "top center" }}
        className="hidden sm:flex flex-col items-center"
      >
        <div className="w-[1.5px] h-8 md:h-12 bg-gradient-to-b from-[#e5bd57] via-[#a87822] to-[#e5bd57]"></div>
        <div className="relative filter drop-shadow-[0_0_10px_rgba(235,190,65,0.65)]">
          <svg width="32" height="50" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C16.8 2 17.5 2.7 17.5 3.5C17.5 4 17.3 4.4 17 4.7C18.2 5.1 19 6.2 19 7.5H13C13 6.2 13.8 5.1 15 4.7C14.7 4.4 14.5 4 14.5 3.5C14.5 2.7 15.2 2 16 2Z" fill="#E5BD57" />
            <path d="M9 7.5H23L25 13H7L9 7.5Z" fill="#C59A3F" />
            <path d="M7 13L4 27L10 38H22L28 27L25 13H7Z" fill="url(#glassGrad2)" stroke="#E5BD57" strokeWidth="0.8" />
            <circle cx="16" cy="25" r="4" fill="#FFF7CD" className="animate-pulse" opacity="0.9" />
            <path d="M10 38L16 44L22 38H10Z" fill="#C59A3F" />
            <line x1="16" y1="44" x2="16" y2="50" stroke="#FDE047" strokeWidth="1.2" />
            <defs>
              <linearGradient id="glassGrad2" x1="16" y1="13" x2="16" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF9DB" stopOpacity="0.85" />
                <stop offset="0.6" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="1" stopColor="#92400E" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Center Crescent Arch Ornament */}
      <div className="flex flex-col items-center pt-1 opacity-80 md:opacity-100">
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#e5bd57] to-[#a87822]"></div>
        <div className="p-1 rounded-full bg-emerald-950/70 border border-[#dfbc60]/40 filter drop-shadow-[0_0_10px_rgba(223,188,96,0.5)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            <path d="M19 3v4"></path>
            <path d="M21 5h-4"></path>
          </svg>
        </div>
      </div>

      {/* Lantern 3 - Mid Right (Slightly shorter chain) */}
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        style={{ transformOrigin: "top center" }}
        className="hidden sm:flex flex-col items-center"
      >
        <div className="w-[1.5px] h-8 md:h-12 bg-gradient-to-b from-[#e5bd57] via-[#a87822] to-[#e5bd57]"></div>
        <div className="relative filter drop-shadow-[0_0_10px_rgba(235,190,65,0.65)]">
          <svg width="32" height="50" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C16.8 2 17.5 2.7 17.5 3.5C17.5 4 17.3 4.4 17 4.7C18.2 5.1 19 6.2 19 7.5H13C13 6.2 13.8 5.1 15 4.7C14.7 4.4 14.5 4 14.5 3.5C14.5 2.7 15.2 2 16 2Z" fill="#E5BD57" />
            <path d="M9 7.5H23L25 13H7L9 7.5Z" fill="#C59A3F" />
            <path d="M7 13L4 27L10 38H22L28 27L25 13H7Z" fill="url(#glassGrad3)" stroke="#E5BD57" strokeWidth="0.8" />
            <circle cx="16" cy="25" r="4" fill="#FFF7CD" className="animate-pulse" opacity="0.9" />
            <path d="M10 38L16 44L22 38H10Z" fill="#C59A3F" />
            <line x1="16" y1="44" x2="16" y2="50" stroke="#FDE047" strokeWidth="1.2" />
            <defs>
              <linearGradient id="glassGrad3" x1="16" y1="13" x2="16" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF9DB" stopOpacity="0.85" />
                <stop offset="0.6" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="1" stopColor="#92400E" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Lantern 4 - Rightmost */}
      <motion.div
        animate={{ rotate: [4, -4, 4] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{ transformOrigin: "top center" }}
        className="flex flex-col items-center"
      >
        <div className="w-[1.5px] h-14 md:h-20 bg-gradient-to-b from-[#e5bd57] via-[#a87822] to-[#e5bd57] shadow-sm"></div>
        <div className="relative filter drop-shadow-[0_0_12px_rgba(235,190,65,0.7)]">
          <svg width="42" height="64" viewBox="0 0 42 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 2C22.1 2 23 2.9 23 4C23 4.5 22.8 5 22.5 5.4C24 5.9 25 7.3 25 9H17C17 7.3 18 5.9 19.5 5.4C19.2 5 19 4.5 19 4C19 2.9 19.9 2 21 2Z" fill="#E5BD57" />
            <path d="M12 9H30L33 16H9L12 9Z" fill="#C59A3F" stroke="#FDE047" strokeWidth="0.5" />
            <path d="M9 16L6 34L14 48H28L36 34L33 16H9Z" fill="url(#glassGrad4)" stroke="#E5BD57" strokeWidth="1" />
            <path d="M14 18V44M21 16V46M28 18V44" stroke="#A87822" strokeWidth="0.75" />
            <circle cx="21" cy="31" r="5" fill="#FFEAA7" className="animate-pulse" opacity="0.9" filter="blur(1px)" />
            <path d="M14 48L21 56L28 48H14Z" fill="#C59A3F" stroke="#E5BD57" strokeWidth="0.5" />
            <line x1="21" y1="56" x2="21" y2="64" stroke="#FDE047" strokeWidth="1.5" />
            <circle cx="21" cy="63" r="1.5" fill="#FDE047" />
            <defs>
              <linearGradient id="glassGrad4" x1="21" y1="16" x2="21" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF3B0" stopOpacity="0.85" />
                <stop offset="0.5" stopColor="#F59E0B" stopOpacity="0.75" />
                <stop offset="1" stopColor="#B45309" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

