import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js.ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      // fontFamily: {
      //   pretendard: ["var(--font-pretendard)"],
      // },
      // container: {
      //   center: true,
      //   padding: "1rem",
      //   screens: {
      //     sm: "640px",
      //     md: "768px",
      //     lg: "1200px",
      //   },
      // },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1200px",
      },
    },
  },
};
export default config;
