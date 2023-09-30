/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ["rounded", "dark"],
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar")],
};
