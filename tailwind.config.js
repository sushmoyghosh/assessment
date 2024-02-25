/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          'lexend': ['"Lexend Deca"', 'sans-serif'], //font-lexend
          'dm': ["DM Sans", 'sans-serif'], //font-dm
        },
        
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #F6DFDA, #EFF3F7, #EAF1F6, #F3F3F5, #F5F1E0)',
      }),
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
