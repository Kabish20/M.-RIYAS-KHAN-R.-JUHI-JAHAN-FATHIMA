import React, { useEffect, useRef } from 'react';

export default function SmoothGlideController({ isEnvelopeOpen }) {
  const animationFrameRef = useRef(null);
  const isGlidingRef = useRef(false);

  useEffect(() => {
    if (!isEnvelopeOpen) return;

    // Automatically start smooth glide 1.2 seconds after opening envelope
    const timer = setTimeout(() => {
      isGlidingRef.current = true;
      let lastTimestamp = performance.now();

      const glide = (timestamp) => {
        if (!isGlidingRef.current) return;

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY >= maxScroll - 5) {
          isGlidingRef.current = false;
          return;
        }

        const now = timestamp || performance.now();
        const delta = Math.min((now - lastTimestamp) / 1000, 0.1);
        lastTimestamp = now;

        // Smooth scroll downwards (~105px/second - a little bit faster, comfortable reading pace)
        window.scrollBy(0, 105 * delta);
        animationFrameRef.current = requestAnimationFrame(glide);
      };

      animationFrameRef.current = requestAnimationFrame(glide);
    }, 1200);

    // If guest touches or scrolls with wheel, pause auto-glide so they have manual control
    const handleUserInteraction = (e) => {
      if (e.isTrusted) {
        isGlidingRef.current = false;
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
      }
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      isGlidingRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
    };
  }, [isEnvelopeOpen]);

  // Headless - completely removes the floating button from the screen
  return null;
}
