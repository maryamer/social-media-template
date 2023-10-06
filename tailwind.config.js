/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ["rounded", "dark"],
      width: {
        "1/7": "16%",
        "95%": "95%",
        200: "890px",
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar")],
};
