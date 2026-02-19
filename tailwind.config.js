/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'Times New Roman', 'Times', 'serif'],
        body: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f8',
          100: '#eceef1',
          200: '#d7dbe3',
          300: '#b3bac8',
          400: '#7f889c',
          500: '#556079',
          600: '#3e475b',
          700: '#2d3444',
          800: '#1f2531',
          900: '#141822'
        },
        parchment: {
          50: '#fbfaf7',
          100: '#f5f1e7',
          200: '#ece3d0',
          300: '#decdb0',
          400: '#c9af86',
          500: '#b69363',
          600: '#9c774b',
          700: '#7c5c3c',
          800: '#5c4331',
          900: '#3b2c22'
        },
        brand: {
          500: '#0b3d91',
          600: '#09357e',
          700: '#072c6a'
        }
      },
      boxShadow: {
        soft: '0 14px 35px rgba(0,0,0,0.10)',
        insetLine: 'inset 0 0 0 1px rgba(40,40,40,0.14)'
      },
      backgroundImage: {
        'gridlines': 'linear-gradient(to right, rgba(50,60,70,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(50,60,70,0.08) 1px, transparent 1px)',
        'hero-sheen': 'radial-gradient(1200px 600px at 35% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.55) 35%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0.0) 70%), radial-gradient(900px 500px at 75% 35%, rgba(200,220,255,0.30), rgba(255,255,255,0.0) 60%)',
        'horizon': 'linear-gradient(90deg, rgba(11,61,145,0.90), rgba(11,61,145,0.35) 35%, rgba(220,160,80,0.32) 70%, rgba(220,160,80,0.55))'
      }
    },
  },
  plugins: [],
}
