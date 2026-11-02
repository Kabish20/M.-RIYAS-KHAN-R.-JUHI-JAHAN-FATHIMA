import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, HeartHandshake, Utensils, Download } from 'lucide-react';
import { weddingData } from '../constants/weddingData';

export default function EventsTimeline() {
  const downloadIcsFile = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//KVR Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:kvr-wedding-20261123@kvrgroups.com
DTSTAMP:20261102T000000Z
DTSTART:20261123T063000Z
DTEND:20261123T113000Z
SUMMARY:Nikkah & Walima: M. Riyas Khan & R. Juhi Jahan Fathima
DESCRIPTION:KVR Family cordially invites you to the Nikkah & Walima ceremony of M. Riyas Khan and R. Juhi Jahan Fathima.
LOCATION:V.S. Mahal, Mannarpuram, Trichy, Tamil Nadu 620020
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Riyas_Weds_Juhi_Wedding_Invite.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGoogleCalendar = () => {
    const title = encodeURIComponent("Nikkah & Walima: M. Riyas Khan & R. Juhi Jahan Fathima");
    const details = encodeURIComponent("K.V.R Family cordially invites you to the Nikkah & Walima ceremony of M. Riyas Khan (B.Sc., M.Sc.) & R. Juhi Jahan Fathima (B.Sc., MBA Aalima). Contact: 91437 33333");
    const location = encodeURIComponent("V.S. Mahal, Mannarpuram, Trichy, Tamil Nadu 620020");
    const start = "20261123T120000";
    const end = "20261123T170000";
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`, '_blank');
  };

  return (
    <section id="events" className="py-20 px-4 relative z-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/40 text-[#dfbc60] text-xs font-serif uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#fde047]" />
            <span>Program Itinerary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff7cd] tracking-wide mb-3">
            The Wedding Ceremonies
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#eed999]/90">
            Join us in celebrating two hearts united in accordance with Islamic tradition.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Nikkah Ceremony */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="gold-card rounded-3xl p-6 sm:p-8 border-2 border-[#d4af37]/40 relative flex flex-col justify-between hover:border-[#fde047] transition group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#8c6519] flex items-center justify-center text-[#032316] shadow-md group-hover:scale-110 transition">
                  <HeartHandshake className="w-6 h-6" />
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-900/60 border border-[#d4af37]/40 text-[11px] font-serif text-[#fde047] uppercase tracking-wider font-semibold">
                  Solemnization
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff7cd] mb-2">
                {weddingData.events[0].title}
              </h3>

              <p className="text-xs sm:text-sm font-serif text-[#eed999]/85 leading-relaxed mb-6">
                {weddingData.events[0].description}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm pt-4 border-t border-[#d4af37]/20">
                <div className="flex items-center gap-3 text-[#fef9c3]">
                  <Calendar className="w-4 h-4 text-[#fde047] shrink-0" />
                  <span>{weddingData.events[0].date}</span>
                </div>
                <div className="flex items-center gap-3 text-[#fef9c3]">
                  <Clock className="w-4 h-4 text-[#fde047] shrink-0" />
                  <span className="font-semibold text-[#fde047]">
                    {weddingData.events[0].time}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#fef9c3]">
                  <MapPin className="w-4 h-4 text-[#fde047] shrink-0" />
                  <span>{weddingData.events[0].venue}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d4af37]/20 flex items-center gap-2">
              <button
                onClick={openGoogleCalendar}
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 border border-[#d4af37]/40 text-xs font-serif font-semibold text-[#fde047] transition flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Google Calendar</span>
              </button>
              <button
                onClick={downloadIcsFile}
                className="py-2.5 px-3 rounded-xl bg-[#d4af37]/20 hover:bg-[#d4af37]/30 border border-[#d4af37]/40 text-xs font-serif text-[#fff7cd] transition flex items-center gap-1.5"
                title="Download .ics for Apple / Outlook"
              >
                <Download className="w-3.5 h-3.5" />
                <span>.ICS</span>
              </button>
            </div>
          </motion.div>

          {/* Walima Feast Reception */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="gold-card rounded-3xl p-6 sm:p-8 border-2 border-[#d4af37]/40 relative flex flex-col justify-between hover:border-[#fde047] transition group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#8c6519] flex items-center justify-center text-[#032316] shadow-md group-hover:scale-110 transition">
                  <Utensils className="w-6 h-6" />
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-900/60 border border-[#d4af37]/40 text-[11px] font-serif text-[#fde047] uppercase tracking-wider font-semibold">
                  Celebration Feast
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff7cd] mb-2">
                {weddingData.events[1].title}
              </h3>

              <p className="text-xs sm:text-sm font-serif text-[#eed999]/85 leading-relaxed mb-6">
                {weddingData.events[1].description}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm pt-4 border-t border-[#d4af37]/20">
                <div className="flex items-center gap-3 text-[#fef9c3]">
                  <Calendar className="w-4 h-4 text-[#fde047] shrink-0" />
                  <span>{weddingData.events[1].date}</span>
                </div>
                <div className="flex items-center gap-3 text-[#fef9c3]">
                  <Clock className="w-4 h-4 text-[#fde047] shrink-0" />
                  <span className="font-semibold text-[#fde047]">
                    {weddingData.events[1].time}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#fef9c3]">
                  <MapPin className="w-4 h-4 text-[#fde047] shrink-0" />
                  <span>{weddingData.events[1].venue}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d4af37]/20 flex items-center gap-2">
              <button
                onClick={openGoogleCalendar}
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 border border-[#d4af37]/40 text-xs font-serif font-semibold text-[#fde047] transition flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Google Calendar</span>
              </button>
              <button
                onClick={downloadIcsFile}
                className="py-2.5 px-3 rounded-xl bg-[#d4af37]/20 hover:bg-[#d4af37]/30 border border-[#d4af37]/40 text-xs font-serif text-[#fff7cd] transition flex items-center gap-1.5"
                title="Download .ics for Apple / Outlook"
              >
                <Download className="w-3.5 h-3.5" />
                <span>.ICS</span>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
