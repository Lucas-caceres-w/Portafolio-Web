/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#a20098",
        blue: "#007acc",
        black2: "#1c1c1c",
        black1: "#393939",
        "green-text": "#3EA784",
        "dark-light": "#29263c",
        dark: "#2d2b38",
      },
      keyframes: {
        anime: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".6" },
        },
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/line-clamp"),
  ],
};
