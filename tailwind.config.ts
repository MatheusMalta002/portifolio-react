import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        light: {
          primary: "rgb(238, 238, 238)",
          secondary: "#362f2f",
          textNavbar: "#362f2f",
          image: "#362f2f",
          typewriter: "#362f2f"
          // outras cores do modo claro
        },
        dark: {
          primary: "#242424",
          secondary: "#ffffff",
          textNavbar: "#11f389",
          image: "#11f389",
          typewriter: "#11f389"

          // outras cores do modo escuro
        },
      },
    },
  },
  plugins: [],
};

export default config;
