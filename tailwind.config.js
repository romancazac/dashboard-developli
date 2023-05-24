/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': { 'max': '1280px' },
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' },
    },
    container: {
      padding: '20px',
      center: true

    },
    extend: {
      fontFamily: {
        readex: ['Readex Pro', 'sans-serif']

      },
      colors: {
        green: '#47D18C',
        gray: '#7F879E',
        blackColor: '#252A3F',
        blueColor: '#1F8FFF',
        bgColor: '#E3E3E3',
        textColor: '#3D425A',
        titlesColor: '#252A3F',
        yellowColor: '#EAEDB6'


      },
      backgroundImage: {
        'platform': 'url("/src/assets/img/bgPlatform.png")',
        'bgBanner': 'url("/src/assets/img/bg-baner.png")',
        'linearGradient': 'linear-gradient(180deg, rgba(37, 42, 63, 0) 0%, #252A3F 115.33%)',

       
      }


    },
  },
  plugins: [],
})