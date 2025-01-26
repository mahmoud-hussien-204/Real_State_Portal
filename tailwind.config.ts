import type {Config} from "tailwindcss";

import plugin from "tailwindcss/plugin";

import {CSSRuleObject} from "tailwindcss/types/config";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [
    require("daisyui"),
    plugin(function ({addBase}) {
      // change rem value in small screens
      addBase({
        html: {
          "@media (max-width: 767px)": {
            fontSize: "14px",
          },
        },
      });
    }),

    plugin(function ({addUtilities, theme}) {
      const fontSize = theme("fontSize");

      if (!fontSize) return;

      const fontSizeUtilities = Object.entries(fontSize).reduce(
        (acc: Record<PropertyKey, CSSRuleObject>, [key, value]) => {
          acc[`.font-${key}`] = {fontSize: value};
          return acc;
        },
        {}
      );

      addUtilities(fontSizeUtilities);
    }),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          primary: "oklch(63.13% 0.254 25.65)",
          secondary: "oklch(32.11% 0 0)",
          "secondary-content": "oklch(100% 0 0)",
          accent: "oklch(76.76% 0.184 183.61)",
          neutral: "#A4A4A4",
          "neutral-content": "#D7DDE4",
          "base-100": "oklch(100% 0 0)",

          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#111111",

          "--colors-primary-colors-50": "#FFE9EE",
          "--colors-primary-colors-100": "#FFC9D1",
          "--colors-primary-colors-200": "#F79296",
          "--colors-primary-colors-300": "#F0646D",
          "--colors-primary-colors-400": "#FB3747",
          "--colors-primary-colors-500": "#FF0929",
          "--colors-primary-colors-600": "#F2002A",
          "--colors-primary-colors-700": "#E00024",
          "--colors-primary-colors-800": "#D3001C",
          "--colors-primary-colors-950": "#97020D",

          "--text-dark-grey": "#656F77",

          "--gray-1": "#333333",
          "--gray-3": "#828282",
          "--gray-4": "#BDBDBD",
          "--colors-grey-colors-100": "#FFFFFF",
          "--colors-grey-colors-150": "#F5F5F5",
          "--colors-grey-colors-300": "#D2D2D2",
          "--colors-grey-colors-700": "#777777",
          "--colors-grey-colors-800": "#606060",
          "--colors-grey-colors-900": "#4A4A4A",
          "--colors-grey-colors-1000": "#333333",
          "--colors-grey-colors-2000": "#111111",

          "--neural-colors-50": "#F6F6F6",
          "--colors-neutral-100": "#FFFFFF",
          "--colors-neutral-150": "239 64 64",
          "--colors-neutral-200": "#E8E8E8",
          "--colors-neutral-250": "#E5E5E5",
          "--colors-neutral-300": "#D2D2D2",
          "--colors-neutral-400": "#BBBBBB",
          "--colors-neutral-500": "#A4A4A4",
          "--colors-neutral-600": "#8E8E8E",
          "--colors-neutral-700": "#777777",
          "--colors-neutral-800": "#606060",
          "--colors-neutral-900": "#4A4A4A",
          "--colors-neutral-1000": "#333333",
          "--colors-neutral-alpha-10": "rgba(51, 51, 51, 0.1)",

          "--colors-red-100": "#FB3748",
          "--colors-red-200": "#D00416",
          "--colors-red-alpha-10": "rgba(251, 55, 72, 0.1)",

          "--colors-yellow-100": "#FFDB43",
          "--colors-yellow-200": "#DFB400",
          "--colors-yellow-alpha-10": "rgba(255, 219, 67, 0.1)",

          "--colors-green-100": "#84EBB4",
          "--colors-green-200": "#1FC16B",
          "--colors-green-alpha-10": "rgba(31, 193, 107, 0.1)",
        },
      },
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  theme: {
    extend: {
      colors: {
        "colors-primary-colors-50": "var(--colors-primary-colors-50)",
        "colors-primary-colors-100": "var(--colors-primary-colors-100)",
        "colors-neutral-150": "rgba(var(--colors-neutral-150) / <alpha-value>)",
        "colors-primary-colors-200": "var(--colors-primary-colors-200)",
        "colors-primary-colors-300": "var(--colors-primary-colors-300)",
        "colors-primary-colors-400": "var(--colors-primary-colors-400)",
        "colors-primary-colors-500": "var(--colors-primary-colors-500)",
        "colors-primary-colors-600": "var(--colors-primary-colors-600)",
        "colors-primary-colors-700": "var(--colors-primary-colors-700)",
        "colors-primary-colors-800": "var(--colors-primary-colors-800)",
        "colors-primary-colors-950": "var(--colors-primary-colors-950)",

        "text-dark-grey": "var(--text-dark-grey)",

        "gray-1": "var(--gray-1)",
        "gray-3": "var(--gray-3)",
        "gray-4": "var(--gray-4)",
        "colors-grey-colors-100": "var(--colors-grey-colors-100)",
        "colors-grey-colors-150": "var(--colors-grey-colors-150)",
        "colors-grey-colors-300": "var(--colors-grey-colors-300)",
        "colors-grey-colors-700": "var(--colors-grey-colors-700)",
        "colors-grey-colors-800": "var(--colors-grey-colors-800)",
        "colors-grey-colors-900": "var(--colors-grey-colors-900)",
        "colors-grey-colors-1000": "var(--colors-grey-colors-1000)",
        "colors-grey-colors-2000": "var(--colors-grey-colors-2000)",

        "neural-colors-50": "var(--neural-colors-50)",
        "colors-neutral-100": "var(--colors-neutral-100)",
        "colors-neutral-200": "var(--colors-neutral-200)",
        "colors-neutral-250": "var(--colors-neutral-250)",
        "colors-neutral-300": "var(--colors-neutral-300)",
        "colors-neutral-400": "var(--colors-neutral-400)",
        "colors-neutral-500": "var(--colors-neutral-500)",
        "colors-neutral-600": "var(--colors-neutral-600)",
        "colors-neutral-700": "var(--colors-neutral-700)",
        "colors-neutral-800": "var(--colors-neutral-800)",
        "colors-neutral-900": "var(--colors-neutral-900)",
        "colors-neutral-1000": "var(--colors-neutral-1000)",
        "colors-neutral-alpha-10": "var(--colors-neutral-alpha-10)",

        "colors-red-100": "var(--colors-red-100)",
        "colors-red-200": "var(--colors-red-200)",
        "colors-red-alpha-10": "var(--colors-red-alpha-10)",

        "colors-yellow-100": "var(--colors-yellow-100)",
        "colors-yellow-200": "var(--colors-yellow-200)",
        "colors-yellow-alpha-10": "var(--colors-yellow-alpha-10)",

        "colors-green-100": "var(--colors-green-100)",
        "colors-green-200": "var(--colors-green-200)",
        "colors-green-alpha-10": "var(--colors-green-alpha-10)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "custom-black-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
      },
      borderRadius: {
        "0.5rem": "0.5rem",
        "0.625rem": "0.625rem",
        "0.75rem": "0.75rem",
        "0.875rem": "0.875rem",
        "1rem": "1rem",
        "1.25rem": "1.25rem",
        "1.5rem": "1.5rem",
        "1.875rem": "1.875rem",
        "2rem": "2rem",
        "2.5rem": "2.5rem",
        "22.5rem": "22.5rem",
      },
      lineHeight: {
        "0.75rem": "0.75rem",
        "1rem": "1rem",
        "1.125rem": "1.125rem",
        "1.25rem": "1.25rem",
        "1.5rem": "1.5rem",
        "1.625rem": "1.625rem",
        "1.75rem": "1.75rem",
        "2rem": "2rem",
        "2.25rem": "2.25rem",
        "2.375rem": "2.375rem",
        "2.5rem": "2.5rem",
        "3rem": "3rem",
        "3.5rem": "3.5rem",
        "3.625rem": "3.625rem",
        "4.375rem": "4.375rem",
        "4.75rem": "4.75rem",
        "5.125rem": "5.125rem",
      },
      fontSize: {
        default: "1rem",
        64: "4.5rem",
        56: "4rem",
        48: "3rem",
        44: "2.75rem",
        42: "2.625rem",
        40: "2.5rem",
        38: "2.375rem",
        36: "2.25rem",
        32: "2rem",
        28: "1.75rem",
        26: "1.625rem",
        24: "1.5rem",
        22: "1.375rem",
        20: "1.25rem",
        18: "1.125rem",
        16: "1rem",
        15: "0.9375rem",
        14: "0.875rem",
        13: "0.813rem",
        12: "0.75rem",
        11: "0.688rem",
      },
      spacing: {
        "0.125rem": "0.125rem",
        "0.25rem": "0.25rem",
        "0.5rem": "0.5rem",
        "0.62rem": "0.62rem",
        "0.75rem": "0.75rem",
        "0.94rem": "0.94rem",
        "1rem": "1rem",
        "1.25rem": "1.25rem",
        "1.5rem": "1.5rem",
        "1.62rem": "1.62rem",
        "1.75rem": "1.75rem",
        "1.88rem": "1.88rem",
        "2rem": "2rem",
        "2.25rem": "2.25rem",
        "2.5rem": "2.5rem",
        "2.75rem": "2.75rem",
        "2.875rem": "2.875rem",
        "3rem": "3rem",
        "3.25rem": "3.25rem",
        "3.5rem": "3.5rem",
        "3.75rem": "3.75rem",
        "3.38rem": "3.38rem",
        "4rem": "4rem",
        "4.25rem": "4.25rem",
        "4.375rem": "4.375rem",
        "4.5rem": "4.5rem",
        "4.75rem": "4.75rem",
        "5rem": "5rem",
        "5.25rem": "5.25rem",
        "5.5rem": "5.5rem",
        "5.75rem": "5.75rem",
        "6rem": "6rem",
        "6.25rem": "6.25rem",
        "6.5rem": "6.5rem",
        "6.75rem": "6.75rem",
        "7rem": "7rem",
        "7.25rem": "7.25rem",
        "7.5rem": "7.5rem",
        "7.75rem": "7.75rem",
        "8rem": "8rem",
        "8.25rem": "8.25rem",
        "8.5rem": "8.5rem",
        "8.75rem": "8.75rem",
        "9rem": "9rem",
        "9.25rem": "9.25rem",
        "9.5rem": "9.5rem",
        "9.75rem": "9.75rem",
        "10rem": "10rem",
        "13.25rem": "13.25rem",
      },
      letterSpacing: {
        "0.0625rem": "0.0625rem",
        "0.0475rem": "0.0475rem",
      },

      height: {},
      boxShadow: {},
      gradientColorStops: {},
      gradientColorStopPositions: {
        279: "279deg",
        45: "45deg",
      },

      keyframes: {},
      animation: {},
      container: {
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          lg: "81.5rem",
        },
        center: true,
      },
      fontFamily: {
        ar: "var(--font_ar)",
        en: "var(--font_en)",
      },
    },
  },
};
export default config;
