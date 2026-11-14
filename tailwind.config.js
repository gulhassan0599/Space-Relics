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
        space: {
          bg: '#070B16',
          bgSecondary: '#0B1220',
          card: '#111B2E',
          cardElevated: '#162238',
          border: '#263449',
          accent: '#3B82F6',
          accentLight: '#38BDF8',
          text: '#F8FAFC',
          textSecondary: '#94A3B8',
          textMuted: '#64748B',
        },
        moon: {
          silver: '#E2E8F0',
          white: '#F8FAFC',
          blue: '#93C5FD',
          surface: '#1E293B',
        },
        mars: {
          rust: '#C2410C',
          red: '#DC2626',
          sand: '#FDE047',
          surface: '#431407',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle-glow': '0 0 20px -5px rgba(59, 130, 246, 0.15)',
        'moon-glow': '0 0 25px -5px rgba(226, 232, 240, 0.12)',
        'mars-glow': '0 0 25px -5px rgba(194, 65, 12, 0.2)',
      },
    },
  },
  plugins: [],
}
