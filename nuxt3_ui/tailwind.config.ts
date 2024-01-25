import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#2E47BA",
          50: "#f2f4f8",
          100: "#e0e9f4",
          200: "#8293E0",
          300: "#6277D8",
          400: "#415AD0",
          500: "#2E47BA",
          600: "#23368D",
          700: "#182560",
          800: "#0D1333",
          900: "#020206",
          950: "#000000",
        },
        custom: {
          DEFAULT: "#6C7E95",
          50: "#f5f6fc",  // used
          100: "#E0E9F4",  // used
          200: "#f5f6fc",  // used
          300: "#9BA8B7",
          400: "#8493A6",
          500: "#6C7E95",
          600: "#546275",
          700: "#3D4754",
          800: "#203551", // used
          900: "#0E1013",
          950: "#020203",
        },
      },
    },
  },
};
