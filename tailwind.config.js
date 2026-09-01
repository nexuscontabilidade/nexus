/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta da Nexus — #242424 / #f7511f / #ff7228 / #faede5
        ink: {
          950: '#000000', // preto puro — base das páginas
          900: '#242424', // grafite da marca — cards e superfícies elevadas
          800: '#313030',
          700: '#403e3d',
          600: '#514e4d',
        },
        signal: {
          DEFAULT: '#f7511f', // acento primário
          dim: '#c13f18',
        },
        ember: {
          DEFAULT: '#ff7228', // acento secundário
          dim: '#c7591f',
        },
        cream: '#faede5', // cor de texto/foreground clara (substitui o branco puro)
        mist: {
          900: '#9a938e',
          700: '#b6ada7',
          500: '#cfc5be',
          100: '#e9ddd6',
        },
      },
      fontFamily: {
        // Fonte única do site (mesma do site original) — display/body/mono
        // apontam todos para a mesma família para manter as classes já
        // usadas nos componentes sem precisar reescrevê-las.
        display: ['"Loos Normal"', 'sans-serif'],
        body: ['"Loos Normal"', 'sans-serif'],
        mono: ['"Loos Normal"', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '9xl':  ['8rem',  { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '8xl':  ['6rem',  { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee 25s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
