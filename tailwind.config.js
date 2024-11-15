/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#111C30',
        'secondary': '# FFFFFF',
      },
      fontFamily:{
        'primary':["Roboto","sans-serif"],
        'secondary': ["Raleway", "sans-serif"],
        'popins':["Poppins", "sans-serif"],
        'bebas':["Bebas Neue","sans-serif"]
      },
      backdropBlur: {
        'custom': '6.5px',
      },
    },
  },
  plugins: [],
}