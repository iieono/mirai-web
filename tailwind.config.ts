import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roundo: ["Roundo", "sans-serif"],
      },
      colors: {
        primary: "#E6B8A2", // Peachy Beige
        secondary: "#A0C1B9", // Muted Teal
        accent: "#F4D06F", // Soft Yellow
        neutral: "#FFFFFF", // Pure White
        text: "#2E2E2E", // Deep Brown-Gray
      },
    },
  },
  plugins: [],
} satisfies Config;
