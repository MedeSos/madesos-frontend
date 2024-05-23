/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins", "sans-serif"]
      },
      spacing: {
        '32.5': '8.5rem',
      },
      colors: {
        'primary': '#87C4FF',
        'primary-dark': '#39A7FF',
        'secondary': '#E0F4FF',
        'crims': '#FEEED9',
      }
    },
  },
  plugins: [],
}

