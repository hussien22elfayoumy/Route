/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light": "#2c3e50",
        "blue-dark": "#2c3e50",
        "green-light": "#1abc9c",
      },
    },
  },
  plugins: [],
};
