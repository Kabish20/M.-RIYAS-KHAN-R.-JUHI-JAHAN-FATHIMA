import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Share2, Mail, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function Navbar({ onReopenEnvelope, onOpenShare, onTriggerConfetti }) {
  const [isPlaying, setIsPlaying] = useState(soundEngine.isPlaying);

  useEffect(() => {
    return soundEngine.addListener((state) => {
      setIsPlaying(state);
    });
  }, []);

  const toggleMusic = () => {
    const state = soundEngine.toggleMusic();
    setIsPlaying(state);
  };

  return (
    /* Floating Action Buttons Alone (Top Bar Removed) */
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#032316]/80 backdrop-blur-md border border-[#d4af37]/40 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
      
      {/* Confetti Celebration Button */}
      <button
        onClick={onTriggerConfetti}
        title="Bless the couple with flower shower"
        className="p-2 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 border border-[#d4af37]/40 text-[#fde047] hover:scale-105 active:scale-95 transition shadow-sm"
      >
        <Sparkles className="w-4 h-4 animate-spin-very-slow" />
      </button>

      {/* Music Play/Pause with visualizer */}
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute Music" : "Play Music"}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 border border-[#d4af37]/40 text-[#fde047] hover:scale-105 active:scale-95 transition text-xs font-serif shadow-sm"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#fde047]" />
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-full bg-[#fde047] animate-pulse"></span>
              <span className="w-0.5 h-2 bg-[#fde047] animate-bounce"></span>
              <span className="w-0.5 h-2.5 bg-[#fde047] animate-pulse"></span>
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-gray-400" />
            <span className="text-[10px] hidden sm:inline text-gray-300">Music</span>
          </>
        )}
      </button>

      {/* Reopen Envelope */}
      <button
        onClick={onReopenEnvelope}
        title="View Royal Envelope Cover"
        className="p-2 rounded-full bg-emerald-900/60 hover:bg-emerald-800 border border-[#d4af37]/40 text-[#fde047] hover:scale-105 active:scale-95 transition shadow-sm"
      >
        <Mail className="w-4 h-4" />
      </button>

      {/* Share Button */}
      <button
        onClick={onOpenShare}
        className="p-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b88926] text-[#032316] font-bold hover:brightness-110 hover:scale-105 active:scale-95 transition shadow-sm"
        title="Share Invitation"
      >
        <Share2 className="w-4 h-4" />
      </button>

    </div>
  );
}
