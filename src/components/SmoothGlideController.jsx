import React, { useEffect, useRef } from 'react';
import { soundEngine } from '../utils/soundEngine';

export default function SmoothGlideController({ isEnvelopeOpen }) {
  const animationFrameRef = useRef(null);
  const isUserInteractingRef = useRef(false);
  const userInteractionTimerRef = useRef(null);
  const hasFinishedRef = useRef(false);

  useEffect(() => {
    if (!isEnvelopeOpen) {
      hasFinishedRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    let lastTimestamp = performance.now();
    let isRunning = false;

    const glide = (timestamp) => {
      // Check if paused or user is touching/scrolling or finished
      if (!soundEngine.isPlaying || isUserInteractingRef.current || hasFinishedRef.current) {
        isRunning = false;
        animationFrameRef.current = null;
        return;
      }

      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentScroll = window.scrollY;

      // Reached near the bottom of the invitation
      if (currentScroll >= maxScroll - 6) {
        hasFinishedRef.current = true;
        isRunning = false;
        animationFrameRef.current = null;
        return;
      }

      const now = timestamp || performance.now();
      const delta = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      const duration = soundEngine.getDuration();
      const currentTime = soundEngine.getCurrentTime();

      // If song reaches the end, stop scrolling
      if (currentTime >= duration && duration > 0) {
        hasFinishedRef.current = true;
        isRunning = false;
        animationFrameRef.current = null;
        return;
      }

      // Calculate exact speed so the entire remaining page scrolls in the remaining song seconds
      const remainingTime = Math.max(0.5, duration - currentTime);
      const remainingScroll = Math.max(0, maxScroll - currentScroll);
      const targetSpeed = remainingScroll / remainingTime; // px per second based on song seconds

      // Expected position based on song seconds progress
      const songProgress = Math.min(1, Math.max(0, currentTime / duration));
      const expectedTargetY = songProgress * maxScroll;
      const drift = expectedTargetY - currentScroll;

      // Base step plus smooth proportional synchronization
      const baseStep = targetSpeed * delta;
      const correction = drift * 0.05;
      const step = Math.max(0, baseStep + correction);

      window.scrollBy(0, step);

      animationFrameRef.current = requestAnimationFrame(glide);
    };

    const startGliding = () => {
      if (isRunning || hasFinishedRef.current) return;
      if (!soundEngine.isPlaying || isUserInteractingRef.current) return;
      isRunning = true;
      lastTimestamp = performance.now();
      animationFrameRef.current = requestAnimationFrame(glide);
    };

    const stopGliding = () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    // Synchronize auto-scroll with soundEngine play/pause events
    const unsubscribe = soundEngine.addListener((isPlaying) => {
      if (isPlaying && isEnvelopeOpen && !isUserInteractingRef.current && !hasFinishedRef.current) {
        startGliding();
      } else {
        stopGliding();
      }
    });

    // Start auto glide once the envelope reveal transition finishes
    const initialTimer = setTimeout(() => {
      if (isEnvelopeOpen && soundEngine.isPlaying && !hasFinishedRef.current) {
        startGliding();
      }
    }, 400);

    // If guest touches or scrolls with wheel, pause so they have full manual control
    const handleUserInteraction = (e) => {
      if (e.isTrusted) {
        isUserInteractingRef.current = true;
        stopGliding();

        if (userInteractionTimerRef.current) {
          clearTimeout(userInteractionTimerRef.current);
        }

        // Resume song-synced scroll 3.5s after guest stops scrolling
        userInteractionTimerRef.current = setTimeout(() => {
          isUserInteractingRef.current = false;
          if (soundEngine.isPlaying && isEnvelopeOpen && !hasFinishedRef.current) {
            startGliding();
          }
        }, 3500);
      }
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      if (userInteractionTimerRef.current) {
        clearTimeout(userInteractionTimerRef.current);
      }
      stopGliding();
      unsubscribe();
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
    };
  }, [isEnvelopeOpen]);

  // Headless - completely clean screen
  return null;
}
