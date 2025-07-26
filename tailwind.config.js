/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom': '-12px 12px 0px 0px #ffd204', // Custom shadow
        'custom2': '12px 12px 0px 0px #ffd204', // Custom shadow
      },
    },
  },
  plugins: [],
};
