const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/charts/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["CircularXX", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ["40px", "49px"],
        heading: ["30px", "36px"],
        subheading: ["26px", "32px"],
        largeParagraph: ["18px", "25px"],
        paragraph: ["16px", "20px"],
        smallParagraph: ["13px", "18px"],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        transparent: "transparent",
        gray: {
          DEFAULT: "#94959A",
          /*  transparent */
          T08: "rgba(0, 0, 0, 0.08)",
          T40: "rgba(0, 0, 0, 0.4)",
          T50: "rgba(0, 0, 0, 0.5)",
        },
        orange: {
          light: "#FFEFD0",
          pastel: "#FED88A",
        },
        misty: {
          20: "#DFE7EC",
          40: "#A6B3C4",
        },
      },
      gridTemplateColumns: {
        connect: "40px 1fr",
        landing: "40px 1fr 24px",
        connected: "48px 1fr 1fr 24px",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
