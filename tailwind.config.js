/** @type {import('tailwindcss').Config} */
export default {
  // IMPORTANT: This tells Tailwind where to scan for classes (all files in src/)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'], // Sets the default font to Inter
        },
        colors: {
            'green-800': '#1A5D1A',
            'green-900': '#104A10',
            'yellow-400': '#FFD700',
        },
    },
  },
  plugins: [],
}