/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  // theme: {
  //   extend: {
  //     scrollbar: ["rounded", "dark"],
  //     width: {
  //       "1/7": "16%",
  //       "95%": "95%",
  //       200: "890px",
  //     },
  //     height: {
  //       "8/10": "80%",
  //       "8/100": "8%",
  //     },
  //     animation: {
  //       loading: {
  //         "0%, 100%": { transform: "rotate(-3deg)" },
  //         "50%": { transform: "rotate(3deg)" },
  //       },

  //       wiggle: "wiggle 1s ease-in-out infinite",
  //     },
  //   },
  // },
  // variants: {},
  plugins: [require("tailwind-scrollbar")],
};
