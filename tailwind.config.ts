import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ttCommons: "var(--font-tt-commons, sans-serif)",
        grift: "var(--font-grift, sans-serif)",
      },
      fontWeight: {
        400: "400",
        500: "500",
      },
      colors: {
        primary: {
          dark: "#211d1d",
          bg: "#f4f4f4",
        },
        green: "#a1ff62",
        purple: "#6841ff",
      },
    },
  },
  plugins: [],
};

export default config;
