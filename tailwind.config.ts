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
        color1: "var(--color-1)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
        colorBg1: "var(--color-background-1)",
        colorBg2: "var(--color-background-2)",
        colorBg3: "var(--color-background-3)",
        colorText1: "var(--color-text-1)",
        colorText2: "var(--color-text-2)",
        colorText3: "var(--color-text-3)",
      },
      backgroundImage: ({ theme }) => ({
        bodyBgGradient: `linear-gradient(to top, ${theme("colors.colorBg3")}, ${theme("colors.colorBg1")})`,
      }),
    },
  },
  plugins: [],
};
export default config;
