/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      scrollbar: ["rounded", "dark"],
      width: {
        "1/7": "16%",
        "95%": "95%",
        200: "890px",
      },
      height: {
        "8/10": "80%",
        "8/100": "8%",
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar")],
};
