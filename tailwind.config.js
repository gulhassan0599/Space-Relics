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
          bg: '#090B0E',
          bgSecondary: '#11151B',
          card: '#141A23',
          cardElevated: '#1A222E',
          border: '#27313F',
          borderSubtle: '#1E2632',
          accent: '#4389D8',
          accentLight: '#60A5FA',
          text: '#F1EEE8',
          textSecondary: '#A6A9AD',
          textMuted: '#6B7280',
        },
        moon: {
          silver: '#B8C5D4',
          white: '#F1EEE8',
          blue: '#93C5FD',
          surface: '#1A222E',
        },
        mars: {
          rust: '#C47B4A',
          red: '#B91C1C',
          sand: '#D97706',
          surface: '#2B1612',
        },
      },
      fontFamily: {
        editorial: ['"Newsreader"', 'Georgia', 'serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
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
