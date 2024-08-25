import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   primary: "#4F46E5",
    //   secondary: "#7C3AED",
    //   info: "#2563eb",
    //   success: "#0D9488",
    //   danger: "#E11D48",
    //   warning: "#fbbf24",
    // },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
