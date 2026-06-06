import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:    "#050508",
          secondary:  "#0a0a0f",
          card:       "#0f0f17",
          "card-hover": "#14141f",
        },
        accent: {
          violet: "#7C3AED",   // primary brand
          purple: "#9D4EDD",   // mid tone
          cyan:   "#00E5FF",   // highlight / glow
          blue:   "#6366F1",   // alias kept for compat
        },
        text: {
          primary:   "#F1F5F9",
          secondary: "#94A3B8",
          muted:     "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      animation: {
        marquee:      "marquee 30s linear infinite",
        float:        "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
