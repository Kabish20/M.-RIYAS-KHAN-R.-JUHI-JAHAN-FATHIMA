import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sparkles } from 'lucide-react';
import { weddingData } from '../constants/weddingData';

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-11-23T12:00:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-16 px-4 relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/40 text-[#dfbc60] text-xs font-serif uppercase tracking-widest mb-3">
          <Moon className="w-3.5 h-3.5 text-[#fde047]" />
          <span>The Auspicious Countdown</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#fff7cd] tracking-wide mb-2">
          Counting Down to the Blessed Nikkah
        </h2>
        
        <p className="text-xs sm:text-sm font-serif text-[#eed999]/90 max-w-xl mx-auto mb-8">
          {weddingData.date.displayDate} • {weddingData.date.hijri} • {weddingData.date.time}
        </p>

        {/* Countdown Dials */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {timeBlocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="gold-card rounded-2xl p-4 sm:p-6 border border-[#d4af37]/40 relative group overflow-hidden"
            >
              {/* Sheen */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#fde047] to-transparent"></div>

              {/* Number Value */}
              <div className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#fffbeb] via-[#fef08a] to-[#ca8a04] filter drop-shadow">
                {String(block.value).padStart(2, '0')}
              </div>

              {/* Label */}
              <div className="mt-2 text-[10px] sm:text-xs font-serif uppercase tracking-widest text-[#dfbc60] font-semibold">
                {block.label}
              </div>

              <Sparkles className="w-3 h-3 text-[#d4af37]/40 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>

        {/* Elders Blessing Quote */}
        <div className="mt-10 p-4 sm:p-6 rounded-2xl bg-[#042a1b]/70 border border-[#d4af37]/30 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-xs sm:text-sm font-serif text-[#fef08a] leading-relaxed">
            {weddingData.elders}
          </p>
        </div>

      </div>
    </section>
  );
}
