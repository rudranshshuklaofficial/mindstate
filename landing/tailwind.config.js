/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#202321',
        paper: '#f2eee5',
        blush: '#df735d',
        moss: '#87967c',
        butter: '#e8c76a',
        sand: '#d8d0c2'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Fraunces', 'serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(32, 35, 33, 0.1)'
      }
    }
  },
  plugins: []
};
