// Audio engine playing the chosen wedding soundtrack (Asalayavale-Downringtone.com.mp3)
// with smooth volume fading, play/pause controls, and Web Audio fallback.

class SoundEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.75;
    this.listeners = new Set();
    this.synthCtx = null;
    this.initAudio();
  }

  initAudio() {
    if (typeof window === 'undefined') return;
    try {
      this.audio = new Audio('/music.mp3');
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = this.volume;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });
    } catch (e) {
      console.warn("Audio element initialization note:", e);
    }
  }

  addListener(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  notifyListeners() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  startBackgroundMusic() {
    if (!this.audio) this.initAudio();
    if (!this.audio) return;

    this.audio.volume = this.isMuted ? 0 : this.volume;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.notifyListeners();
        })
        .catch((err) => {
          console.log("Audio autoplay waiting for user interaction:", err);
          // If browser requires user interaction first, listen on next click
          const handleFirstClick = () => {
            if (this.audio) {
              this.audio.play().then(() => {
                this.isPlaying = true;
                this.notifyListeners();
              });
            }
            window.removeEventListener('click', handleFirstClick);
          };
          window.addEventListener('click', handleFirstClick, { once: true });
        });
    }
  }

  stopBackgroundMusic() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notifyListeners();
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.stopBackgroundMusic();
      return false;
    } else {
      this.startBackgroundMusic();
      return true;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : this.volume;
    }
    return this.isMuted;
  }

  playBlessingChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!this.synthCtx && AudioCtx) {
        this.synthCtx = new AudioCtx();
      }
      if (this.synthCtx && this.synthCtx.state === 'suspended') {
        this.synthCtx.resume();
      }
      if (!this.synthCtx || this.isMuted) return;

      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      const now = this.synthCtx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.synthCtx.createOscillator();
        const gain = this.synthCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.0001, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.07 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 1.2);
        osc.connect(gain);
        gain.connect(this.synthCtx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 1.2);
      });
    } catch (e) {
      // ignore
    }
  }
}

export const soundEngine = new SoundEngine();
