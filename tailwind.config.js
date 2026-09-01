/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta da Nexus (preto + laranja) nos mesmos tokens do template original
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#222222',
          600: '#2e2e2e',
        },
        signal: {
          DEFAULT: '#FFA500', // laranja Nexus — acento primário
          dim: '#cc8400',
        },
        ember: {
          DEFAULT: '#FF8C00', // laranja escuro Nexus — acento secundário
          dim: '#cc7000',
        },
        mist: {
          900: '#B0B0B0',
          700: '#c4c4c4',
          500: '#d8d8d8',
          100: '#f0f0f0',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"Cabinet Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
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
