/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04569d',
        secondary: '#176cab',
        third: '#532770',
        optional: '#6e3e11',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'slub': ['Roboto Slab', 'serif'],
        'fontspring': ['Fontspring', 'serif'],
      }
    },
  },
  plugins: [],
}
