/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#E7F3F9",
          550: "#83CFFF",
          650: "#003A92",
          750: "#272729",
        },
        teal: {
          450: "#70EDE2",
        },
      },
      fontFamily: {
        roboto: ["Roboto", ...fontFamily.sans],
      },
      transitionDuration: {
        700: "700ms",
      },
      transitionTimingFunction: {
        slide: "cubic-bezier(.75,0,.175,1)",
      },
      boxShadow: {
        "graph-card": "4px 4px 4px 0 #051C3F1F",
      },
    },
    plugins: [],
  },
}
