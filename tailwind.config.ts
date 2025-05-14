import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        colors: {
    lamaGreen: "#A8E6A3",         // light-medium green
    lamaGreenLight: "#E6F9E5",    // very light green
    lamaRed: "#F28B82",           // soft red
    lamaRedLight: "#FDECEA",      // very light red/pink
    lamaGreenDark: "#4CAF50",     // medium-dark green
    lamaRedDark: "#D32F2F",       // dark red
      },
    },
  },
  plugins: [],
};
export default config;
