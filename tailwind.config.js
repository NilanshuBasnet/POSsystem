/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['Host Grotesk', 'serif'], // Add the Google font here
    },
  },
  },
  plugins: [],
}

