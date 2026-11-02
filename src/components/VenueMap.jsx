import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, QrCode, ExternalLink } from 'lucide-react';
import { weddingData } from '../constants/weddingData';

export default function VenueMap() {
  const [copied, setCopied] = useState(false);
  const { venue } = weddingData;

  const fullAddress = `${venue.name}, ${venue.location}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="venue" className="py-20 px-4 relative z-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/40 text-[#dfbc60] text-xs font-serif uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#fde047]" />
            <span>Wedding Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff7cd] tracking-wide mb-3">
            Venue & Directions
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#eed999]/90">
            We look forward to welcoming you at V.S. Mahal in the heart of Trichy.
          </p>
        </div>

        {/* 2-Column Grid: Location Details + Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details & QR Code (Left column - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 gold-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-[#d4af37]/40"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#8c6519] text-[#032316] shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff7cd]">
                    {venue.name}
                  </h3>
                  <p className="text-xs font-serif text-[#dfbc60]">
                    Mannarpuram, Trichy
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-serif text-[#eed999]/90 leading-relaxed mb-4">
                {venue.location}
              </p>

              <div className="p-3 rounded-xl bg-black/30 border border-[#d4af37]/25 text-xs text-[#eed999] mb-6">
                <span className="font-semibold text-[#fde047]">Landmark: </span>
                <span>Near Mannarpuram Junction & Central Bus Stand Road, Trichy.</span>
              </div>

              {/* QR Code as shown in PDF Page 2 ("Scan For Location") */}
              <div className="p-4 rounded-2xl bg-white/95 text-center flex flex-col items-center shadow-lg border-2 border-[#d4af37]">
                <p className="text-[11px] font-serif font-bold uppercase tracking-wider text-[#063321] mb-2 flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-[#a87822]" />
                  <span>Scan for Direct Location</span>
                </p>

                <div className="relative p-2 bg-white rounded-lg">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent("https://maps.google.com/?q=V.S.+Mahal+Mannarpuram+Trichy")}&color=043927`}
                    alt="Scan for Location QR Code"
                    className="w-36 h-36 rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="text-[10px] text-gray-500 font-sans mt-1">
                    V.S. Mahal, Mannarpuram, Trichy
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-2 pt-4 border-t border-[#d4af37]/20">
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7d070] to-[#c59a3f] text-[#032316] font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-110 active:scale-95 transition"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                onClick={copyAddress}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 border border-[#d4af37]/40 text-xs font-serif text-[#fef9c3] flex items-center justify-center gap-2 transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Address Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#dfbc60]" />
                    <span>Copy Venue Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Interactive Map Embed View (Right column - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 gold-card rounded-3xl p-4 sm:p-6 border-2 border-[#d4af37]/40 flex flex-col justify-between overflow-hidden"
          >
            <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-inner">
              <iframe
                title="Google Maps Location of V.S. Mahal Trichy"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=V.S.+Mahal+Mannarpuram+Tiruchirappalli&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="filter contrast-[1.05] brightness-[0.95]"
              ></iframe>

              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#032316]/90 backdrop-blur-md border border-[#d4af37]/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-serif font-bold text-[#fff7cd]">
                    V.S. Mahal, Mannarpuram
                  </p>
                  <p className="text-[10px] text-gray-300">
                    Trichy, Tamil Nadu 620020
                  </p>
                </div>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#d4af37] text-[#032316] text-[11px] font-serif font-bold uppercase tracking-wider flex items-center gap-1 hover:brightness-110 transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#eed999]/80 font-serif">
              <span>🚗 Valet & Ample Parking Available at Venue</span>
              <span>📍 Distance: ~4 km from Trichy Central Bus Stand</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
