/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0C0C0D', // Deep slate-black for dark mode background
          card: '#151516',    // Slick charcoal for dark mode cards
        },
        offwhite: {
          DEFAULT: '#F7F7F8', // Sober paper-white (gentle on eyes, high contrast)
          card: '#EEEEEF',    // Muted light gray for secondary sections and badges
        },
        muted: '#888888',     // A sophisticated gray for subtitles instead of neon
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'scroll': 'scroll 15s linear infinite', 
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        scroll: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' }, 
        }
      },
    },
  },
  plugins: [],
}