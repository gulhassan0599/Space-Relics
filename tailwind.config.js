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
          bg: 'var(--bg-primary)',
          bgSecondary: 'var(--bg-secondary)',
          card: 'var(--card-bg)',
          cardElevated: 'var(--card-elevated)',
          border: 'var(--border-color)',
          accent: 'var(--primary-accent)',
          accentLight: 'var(--secondary-accent)',
          text: 'var(--primary-text)',
          textSecondary: 'var(--secondary-text)',
          textMuted: 'var(--muted-text)',
        },
        moon: {
          silver: '#CBD5E1',
          white: '#F8FAFC',
          blue: '#38BDF8',
          surface: '#1E293B',
        },
        mars: {
          rust: '#EA580C',
          red: '#DC2626',
          sand: '#EAB308',
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
