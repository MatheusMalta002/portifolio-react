import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#EFE7EB",
          // outras cores do modo claro
        },
        dark: {
          primary: "#181718",
          // outras cores do modo escuro
        },
      },
    },
  },
  plugins: [],
};

export default config;
