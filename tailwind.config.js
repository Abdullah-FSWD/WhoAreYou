/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#007bff",
        accent: "#acacac",
        background: "#f8f9fa",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        fadeUp: "fadeUp 0.5s ease-in-out forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
        rgbBorder: "rgb-border 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        rgbBorder: {
          "0%": { borderColor: "rgb(255, 0, 0)" },
          "33%": { borderColor: "rgb(0, 255, 0)" },
          "66%": { borderColor: "rgb(0, 0, 255)" },
          "100%": { borderColor: "rgb(255, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
