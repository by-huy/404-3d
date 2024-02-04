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
      fontFamily: {
        denton: ['var(--font-denton)', 'sans-serif'],
        neuemontrealcondensed: ['var(--font-neuemontrealcondensed)', 'sans-serif'],
        neuemontreal: ['var(--font-neuemontreal)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
