/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#27262B',
      'grey': '#46454B',
      'light-grey': '#7C7B81',
      'white': '#F4F3F5',
      'orange': '#FF8E00'
    },
    fontFamily: {
      sans: ['rajdhani']
    }
  },
  plugins: [],
}
