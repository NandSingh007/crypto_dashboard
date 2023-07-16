/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      width: {
        '70': '17.5rem', // Add the desired width value here
      },
    },
  },
  plugins: [],
  purge: ['./src/**/*.js', './src/**/*.jsx'],
};
