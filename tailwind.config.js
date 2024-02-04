/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        blob: 'blob 12s infinite'
      },
      keyframes: {
        blob: {
          '0%': {transform: "translate(0px, 0px)"},
          '33%': {transform: "translate(-100px, -40px)"},
          '66%': {transform: "translate(100px, 20px)"},
          '100%': {transform: "translate(0px, 0px)"},
        }
      },
      fontFamily: {
        denton: ['var(--font-denton)', 'sans-serif'],
        neuemontrealcondensed: ['var(--font-neuemontrealcondensed)', 'sans-serif'],
        neuemontreal: ['var(--font-neuemontreal)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
