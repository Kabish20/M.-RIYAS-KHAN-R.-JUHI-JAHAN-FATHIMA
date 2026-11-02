import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import HeroEnvelope from './components/HeroEnvelope';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import CoupleProfile from './components/CoupleProfile';
import DuaSection from './components/DuaSection';
import EventsTimeline from './components/EventsTimeline';
import VenueMap from './components/VenueMap';
import HostFamily from './components/HostFamily';
import Footer from './components/Footer';
import ShareModal from './components/ShareModal';
import FallingParticles from './components/FallingParticles';
import SmoothGlideController from './components/SmoothGlideController';
import { soundEngine } from './utils/soundEngine';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [guestName, setGuestName] = useState('');

  // Extract personalized guest name from URL query parameter e.g. ?to=Janab+Farooq+Family
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to') || params.get('name') || params.get('guest');
    if (toParam) {
      setGuestName(toParam);
    }
  }, []);

  const triggerConfetti = () => {
    soundEngine.playBlessingChime();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FDE047', '#10B981', '#F59E0B', '#FFFBEB'],
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#031d13] text-[#f7edcc] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#032316]">
      {/* Falling Gold Sparkles & Jasmine Petals Canvas */}
      <FallingParticles />

      {/* Interactive Envelope Reveal Modal */}
      <HeroEnvelope
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
        guestName={guestName}
      />

      {/* Navigation Bar */}
      <Navbar
        onReopenEnvelope={() => setIsEnvelopeOpen(false)}
        onOpenShare={() => setIsShareOpen(true)}
        onTriggerConfetti={triggerConfetti}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          guestName={guestName}
          onSaveDate={() => scrollToSection('events')}
        />

        {/* Live Countdown Timer to 23.11.2026 */}
        <CountdownTimer />

        {/* Detailed Couple Profile (Bride & Groom Lineage from PDF) */}
        <CoupleProfile />

        {/* Sacred Dua & Quranic Verse */}
        <DuaSection />

        {/* Ceremony & Walima Events Timeline */}
        <EventsTimeline />

        {/* Venue, Interactive Map & QR Code Scanner */}
        <VenueMap />

        {/* Host & Family Welcoming Details (Janab KVR N. Raja Mohamed - Trichy Cars) */}
        <HostFamily />
      </main>

      {/* Footer */}
      <Footer />

      {/* Smooth Glide & Music Controller */}
      <SmoothGlideController
        isEnvelopeOpen={isEnvelopeOpen}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}
