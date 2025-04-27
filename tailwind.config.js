/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: "#263238",
          "dark-gray": "#4D4D4D",
          gray: "#717171",
          "light-gray": "#89939E",
          "grey-blue": "#ABBED1",
          silver: "#F5F7FA",
          white: "#FFFFFF",
        },

        primary: {
          DEFAULT: "#4CAF4F",
          100: "#E8F5E9",
          200: "#C8E6C9",
          300: "#A5D6A7",
          400: "#81C784",
          500: "#66BB69",
          600: "#43A046",
          700: "#388E3B",
          800: "#237D31",
          900: "#1B5E1F",
          950: "#103E13",
        },
        warning: "#FBC02D",
        error: "#E53835",
        success: "#2E7D31",
        info: "#2194f3",
        secondary: {
          DEFAULT: "#263238",
        },
      },
      fontSize: {
        "headline-1": ["64px", { lineHeight: "76px" }],
        "headline-2": ["36px", { lineHeight: "44px" }],
        "headline-3": ["28px", { lineHeight: "36px" }],
        "headline-4": ["20px", { lineHeight: "28px" }],
        "body-1": ["18px", { lineHeight: "28px" }],
        "body-2": ["16px", { lineHeight: "24px" }],
        "body-3": ["14px", { lineHeight: "20px" }],
        "body-4": ["12px", { lineHeight: "16px" }],
      },
    },
  },
  container: {
    // margin: "0 auto",
    // padding: "1rem",
    center: true,
    screens: {
      sm: "100%",
      md: "768px",
      lg: "1000px",
      xl: "1150px",
    },
  },
  plugins: [],
};
