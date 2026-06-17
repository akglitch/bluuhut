import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
import { nextTheme } from "./app/utils/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        // Light engineering palette — cool surfaces, emerald accent
        paper: "#F4F6F8",
        surface: "#FFFFFF",
        sand: "#ECEFF3",
        ink: {
          DEFAULT: "#0B1620",
          soft: "#34434E",
        },
        muted: "#64748B",
        accent: {
          DEFAULT: "#059669",
          ink: "#047857",
          bright: "#059669",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,22,32,0.05), 0 1px 3px rgba(11,22,32,0.04)",
        card: "0 2px 8px rgba(11,22,32,0.06), 0 8px 24px rgba(11,22,32,0.05)",
        float: "0 8px 24px rgba(11,22,32,0.08), 0 24px 56px rgba(11,22,32,0.08)",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.02em",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: nextTheme,
    }),
  ],
};
export default config;
