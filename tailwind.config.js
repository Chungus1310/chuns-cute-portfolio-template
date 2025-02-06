/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b8a',
        'secondary-pink': '#ff4d6d',
        'accent-pink': '#ff335c',
        'soft-purple': '#9d84b7',
        'soft-peach': '#ffe0e0',
        'text-pink': '#ff1a4d',  // Made slightly darker
        'text-gray': '#1a202c',  // Made darker for better contrast
        'text-muted': '#718096',
        cream: 'rgba(255, 255, 255, 0.95)',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif']
      },
      cursor: {
        'custom': 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><circle cx="16" cy="16" r="8" fill="%23ff335c"/></svg>) 16 16, auto'
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(255, 107, 138, 0.15)',
        'glow': '0 0 30px rgba(255, 51, 92, 0.3)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.15), 0 4px 16px rgba(255, 107, 138, 0.2)',
        'glass-hover': '0 8px 32px rgba(31, 38, 135, 0.2), 0 4px 16px rgba(255, 107, 138, 0.3)',
      },
      backgroundColor: {
        'glass-light': 'rgba(255, 255, 255, 0.95)',
        'glass-dark': 'rgba(45, 55, 72, 0.95)',
      },
      borderColor: {
        'glass-light': 'rgba(255, 255, 255, 0.3)',
        'glass-dark': 'rgba(45, 55, 72, 0.1)',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '0 0 8px rgba(255, 107, 138, 0.5)',
        'pink': '0 0 8px rgba(255, 51, 92, 0.5)',
        'glow': '0 0 10px rgba(255, 51, 92, 0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 0 8px rgba(255, 107, 138, 0.5)',
        },
        '.text-shadow-pink': {
          textShadow: '0 0 8px rgba(255, 51, 92, 0.5)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 10px rgba(255, 51, 92, 0.7)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
