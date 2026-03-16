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
          DEFAULT: '#121212', // Deep, true charcoal for dark mode background
          card: '#1e1e1e',    // Slightly lighter charcoal for cards/sections
        },
        offwhite: {
          DEFAULT: '#fafafa', // Clean, premium off-white for light mode background
          card: '#f0f0f0',    // Slightly darker off-white for light mode cards
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