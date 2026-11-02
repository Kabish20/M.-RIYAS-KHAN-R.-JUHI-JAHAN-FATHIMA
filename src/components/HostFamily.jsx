import React from 'react';
import { motion } from 'framer-motion';
import { Users, Phone, MessageSquare, Heart, Building2 } from 'lucide-react';
import { weddingData } from '../constants/weddingData';

export default function HostFamily() {
  const { family } = weddingData;

  const handleWhatsAppContact = (phone) => {
    const text = encodeURIComponent(
      "Assalamu Alaikum Janab Raja Mohamed! We received the royal invitation for M. Riyas Khan & R. Juhi Jahan Fathima's wedding. Insha Allah we will be attending to shower our blessings."
    );
    window.open(`https://wa.me/91${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="family" className="py-20 px-4 relative z-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/40 text-[#dfbc60] text-xs font-serif uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5 text-[#fde047]" />
            <span>Hosts & Family</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff7cd] tracking-wide mb-3">
            The K.V.R. Family
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#eed999]/90">
            Welcoming you with warmth, joy, and gracious hospitality.
          </p>
        </div>

        {/* Primary Host Spotlight Card (Janab KVR N. Raja Mohamed - TRICHY CARS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gold-card rounded-3xl p-6 sm:p-10 border-2 border-[#d4af37]/50 shadow-2xl relative overflow-hidden mb-10 text-center max-w-3xl mx-auto"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fde047] to-transparent"></div>

          <div className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-xs font-serif uppercase tracking-widest text-[#fde047] font-bold mb-3">
            Primary Host & Inviter
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff7cd] mb-1">
            {family.primaryContact.name}
          </h3>

          <div className="flex items-center justify-center gap-2 text-sm font-serif font-semibold text-[#fde047] mb-2">
            <Building2 className="w-4 h-4" />
            <span>( {family.primaryContact.business} )</span>
          </div>

          <p className="text-xs sm:text-sm font-serif text-[#eed999]/80 mb-6">
            {family.primaryContact.address}
          </p>

          {/* Quick Contact & WhatsApp Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#d4af37]/25">
            <a
              href="tel:9143733333"
              className="px-5 py-2.5 rounded-full bg-emerald-900/80 hover:bg-emerald-800 border border-[#d4af37]/40 text-xs font-serif font-semibold text-[#fef08a] transition flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#fde047]" />
              <span>Call: 91437 33333</span>
            </a>

            <a
              href="tel:9942599997"
              className="px-5 py-2.5 rounded-full bg-emerald-900/80 hover:bg-emerald-800 border border-[#d4af37]/40 text-xs font-serif font-semibold text-[#fef08a] transition flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#fde047]" />
              <span>Call: 99425 99997</span>
            </a>

            <button
              onClick={() => handleWhatsAppContact("9143733333")}
              className="px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-xs font-serif font-semibold text-emerald-300 transition flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Message</span>
            </button>
          </div>
        </motion.div>

        {/* Welcoming Family Members Grid */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest font-serif text-[#dfbc60] font-semibold">
            With Kind Wishes From Family Members
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {family.welcomingMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="gold-card rounded-2xl p-4 sm:p-5 text-center border border-[#d4af37]/35"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-900/70 border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-2 text-[#fde047]">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#fff7cd]">
                {member.name}
              </h4>
              <p className="text-[11px] font-serif text-[#dfbc60] mt-0.5">
                {member.degree}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Warm Message */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-[#042417] to-emerald-950/80 border border-[#d4af37]/35 text-center max-w-2xl mx-auto">
          <Heart className="w-5 h-5 text-[#fde047] mx-auto mb-2 fill-[#fde047]/30" />
          <p className="text-xs sm:text-sm font-serif text-[#fef9c3] leading-relaxed italic">
            "{family.closingMessage}"
          </p>
        </div>

      </div>
    </section>
  );
}
