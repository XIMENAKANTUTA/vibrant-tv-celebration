
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        neonPink: "#FF1B8D",
        deepBlack: "#000000",
      },
      fontFamily: {
        script: ["Dancing Script", "cursive"],
        marker: ["Permanent Marker", "cursive"],
      },
      keyframes: {
        glow: {
          "0%": {
            textShadow: "0 0 10px #FF1B8D, 0 0 20px #FF1B8D",
            opacity: "0.8"
          },
          "50%": {
            textShadow: "0 0 20px #FF1B8D, 0 0 30px #FF1B8D, 0 0 40px #FF1B8D",
            opacity: "1"
          },
          "100%": {
            textShadow: "0 0 10px #FF1B8D, 0 0 20px #FF1B8D",
            opacity: "0.8"
          }
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
