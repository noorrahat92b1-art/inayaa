/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff5f7",
          100: "#ffe9ef",
          200: "#ffd3de",
          300: "#ffb3c6",
          400: "#ff8fae",
          500: "#f76d95",
          600: "#e14f7c",
          700: "#b93a63"
        },
        lavender: {
          50: "#f7f2ff",
          100: "#ede1ff",
          200: "#dcc4ff",
          300: "#c3a0ff",
          400: "#ab82f5",
          500: "#9169de"
        },
        peach: {
          50: "#fff7ef",
          100: "#ffecd6",
          200: "#ffd9ac",
          300: "#ffc180"
        },
        ivory: "#fffaf6"
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      backgroundImage: {
        "romantic-radial":
          "radial-gradient(circle at 20% 20%, #ffe9ef 0%, transparent 55%), radial-gradient(circle at 80% 0%, #ede1ff 0%, transparent 50%), radial-gradient(circle at 50% 100%, #ffecd6 0%, transparent 55%)",
        "silk-gradient":
          "linear-gradient(135deg, #ffe9ef 0%, #ede1ff 45%, #ffecd6 100%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(247, 109, 149, 0.35)",
        "glow-soft": "0 8px 32px rgba(171, 130, 245, 0.18)"
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-120vh) translateX(20px) rotate(25deg)", opacity: "0" }
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(247,109,149,0.35)" },
          "50%": { boxShadow: "0 0 45px rgba(247,109,149,0.65)" }
        }
      },
      animation: {
        floatUp: "floatUp linear forwards",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
