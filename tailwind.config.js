/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: '#bae6fd',
        pastelYellow: '#fef08a',
        background: '#f8fafc',
        textPrimary: '#1e293b',
        textSecondary: '#475569'
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
        flaviotte: ['Flaviotte', 'Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}
