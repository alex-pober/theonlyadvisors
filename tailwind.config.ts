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
        'toa-1' : "#FDFBED",
        'toa-2' : "#F1B2B7",
        'toa-3' : "#F18E96",
        'toa-4' : "#EF5078",
        'toa-5' : "#482646",
      }
    },
  },
  plugins: [],
};
export default config;
