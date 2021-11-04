const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [
        "lg:max-w-20",
        "lg:max-w-30",
        "lg:max-w-40",
        "lg:max-w-50",
        "lg:max-w-55",
        "lg:max-w-60",
        "lg:max-w-70",
        "lg:max-w-80",
        "text-blue-400",
        "text-green-400",
        "text-red-400",
        "text-indigo-400",
        "bg-white",
        "bg-gray-700",
        "bg-teal-50",
        "text-teal-600",
        "border-teal-600",
      ],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vh",
      },
      maxWidth: {
        "1/2": "50%",
        "3/5": "60%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
        55: "55%",
        60: "60%",
        70: "70%",
        80: "80%",
      },
      width: {
        "90%": "90%",
      },
      fontFamily: {
        sans: ["Nunito\\ Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto\\ Mono", ...defaultTheme.fontFamily.mono],
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      screens: {
        print: { raw: "print" },
      },
      colors: {
        // orange: {
        //   400: "#FF7733",
        //   50: "#FFF1EB",
        // },
        transparent: "transparent",
        current: "currentColor",
        ...colors,
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
