/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {Alegreya: "'Alegreya', serif"}
    },
  },
  plugins: [require('daisyui')],
}

