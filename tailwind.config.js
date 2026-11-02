/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#032316',
          900: '#063f27',
          850: '#084d30',
          800: '#0b5d3b',
          700: '#117b4f',
        },
        gold: {
          100: '#fcf8ea',
          200: '#f7edcc',
          300: '#eed999',
          400: '#dfbc60',
          500: '#cfa235',
          600: '#b88926',
          700: '#946a1e',
          800: '#75521e',
        },
        cream: {
          50: '#fffefb',
          100: '#fdfbf7',
          200: '#f7f2e7',
          300: '#ede4d1',
          400: '#ded0b4',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        script: ['Great Vibes', 'Alex Brush', 'cursive'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'swing-slow': 'swing 5s ease-in-out infinite',
        'swing-delayed': 'swing 6s ease-in-out 1.5s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.85))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

