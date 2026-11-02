import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, MessageSquare, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    confetti({ particleCount: 35, spread: 50 });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsAppShare = () => {
    const inviteMessage = `✨ Royal Wedding Invitation ✨\n\nJanab KVR N. Raja Mohamed & K.V.R Family cordially invite you to the Nikkah & Walima ceremony of M. RIYAS KHAN & R. JUHI JAHAN FATHIMA on Monday, 23rd November 2026 at V.S. Mahal, Mannarpuram, Trichy.\n\nOpen your royal digital invitation here:\n${currentUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(inviteMessage)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-md gold-card rounded-3xl p-6 border-2 border-[#d4af37]/60 shadow-2xl text-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-emerald-950/80 border border-[#d4af37]/40 text-[#dfbc60] hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-3 text-[#fde047]">
            <Share2 className="w-6 h-6" />
          </div>

          <h3 className="font-serif font-bold text-xl text-[#fff7cd] mb-1">
            Share Royal Invitation
          </h3>
          <p className="text-xs font-serif text-[#eed999]/80 mb-6">
            Share this blessed celebration with your family, relatives, and loved ones.
          </p>

          {/* Quick Action Buttons (No Form Elements) */}
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppShare}
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-[#d4af37]/40 text-xs font-serif text-[#fef9c3] flex items-center justify-center gap-2 transition"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#dfbc60]" />
                  <span>Copy Invitation Link</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
