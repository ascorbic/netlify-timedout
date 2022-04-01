const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pdfjsgray: '#EDEDF0',
        pdftoolbar: '#E7EBEE',
        pdftoolbartext: '#868E96',
        toolbg: '#E7EBEE',
        tooltext: '#3183C8',
        teal: colors.teal,
        cyan: colors.cyan,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
