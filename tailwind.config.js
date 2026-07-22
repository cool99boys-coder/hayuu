export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light: '#f5e29a',
          deep: '#a67c1a',
          glow: '#fff7d6',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 40px -5px rgba(212, 175, 55, 0.45)',
        'gold-lg': '0 0 80px -10px rgba(212, 175, 55, 0.55)',
      },
    },
  },
}
