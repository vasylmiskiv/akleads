/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        modal: 'rgba(116, 134, 128, 0.22)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
