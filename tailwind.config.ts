/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eeeeee",
        secondary: "#bbbbbb",
        tertiary: "#888888",
        fourth: "#494949a9",
      },
    },
  },
  plugins: [],
};
