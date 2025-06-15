/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan all JS/JSX files in src
    './index.html',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      width: {
        '24': '96px', // For w-24
        '40': '160px', // For w-40
        '64': '256px', // For w-64
      },
    },
  },
  plugins: [],
};