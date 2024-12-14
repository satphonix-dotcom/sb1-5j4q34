/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velvet: {
          dark: '#0A0A0A',    // Dark background
          light: '#F5F5F5',   // Light text
          accent: '#C4A484',  // Gold accent
          muted: '#666666'    // Muted text
        }
      },
      fontFamily: {
        heading: ['Hiragino Mincho ProN', 'serif'],
        body: ['Avenir', 'sans-serif']
      },
      fontWeight: {
        heading1: '600', // W6
        heading2: '300', // W3
        body: '400'     // Roman
      }
    },
  },
  plugins: [],
};