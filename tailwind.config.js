const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        primary: {
          DEFAULT: '#1e3a5f', // marine foncé
          dark: '#0f2340',
          light: '#2d4a7c',
        },
        secondary: {
          DEFAULT: '#f5f5f0', // blanc cassé
          dark: '#e8e8e3',
        },
        accent: {
          DEFAULT: '#3b82f6', // bleu vif
          dark: '#2563eb',
        },
        background: {
          DEFAULT: '#f5f5f0', // jour : fond blanc cassé
          dark: '#0a0a0a', // nuit : fond noir/bleu très foncé
        },
        card: {
          DEFAULT: '#ffffff', // jour : cartes blanc pur
          dark: '#111111', // nuit : cartes noir/bleu foncé
        },
        text: {
          DEFAULT: '#1e3a5f', // jour : texte marine
          dark: '#f5f5f0', // nuit : texte blanc cassé
        },
        muted: {
          DEFAULT: '#64748b', // jour : gris doux
          dark: '#94a3b8', // nuit : gris plus clair
        },
      }
    }
  },
  plugins: []
};