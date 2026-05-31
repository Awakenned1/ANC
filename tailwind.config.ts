import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "y":          "#F7C600",
        "y-lt":       "#FFD84D",
        "g":          "#00853F",
        "g-dk":       "#005A2C",
        "g-neon":     "#00FF84",
        "anc-black":  "#0A0A0A",
      },
      fontFamily: {
        bebas:   ["var(--font-bebas)",   "sans-serif"],
        outfit:  ["var(--font-outfit)",  "sans-serif"],
        dancing: ["var(--font-dancing)", "cursive"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg,#000000 0%,#00361B 35%,#000000 70%,#F7C600 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
