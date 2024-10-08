/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-bg': "url('./assets/images/body-bg.png')",
      }

    },
  },
  plugins: [],
}