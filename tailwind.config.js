/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        50: "#B9DFF9",
        100: "#A6D7F7",
        200: "#80C6F4",
        300: "#5BB5F1",
        400: "#35A4ED",
        500: "#1492E6",
        600: "#1071B2",
        700: "#0B507F",
        800: "#07304B",
        900: "#020F18",
        950: "#000000",
      },
    },
    extend: {
      boxShadow: {
        'shadow': '0 4px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
