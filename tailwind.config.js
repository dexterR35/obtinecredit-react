/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: {
          100: "#EBF3E8",
          200: "#B0D9B1",
          300: "#B2C8BA",
          400: "#79AC78",
          500: "#ff4211",
          600: "#7D8F69",
          700: "#3A4D39",
          800: "#001524",
        },
      },
    },
  },
  plugins: [],
};
