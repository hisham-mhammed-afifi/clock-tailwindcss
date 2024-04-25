/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "spin-minute": "spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};
