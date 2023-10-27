/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: {
          100: "#D0E7D2",
          200: "#B0D9B1",
          300: "#79AC78",
          400: "#618264",
        },
      },
    },
  },
  plugins: [],
};
