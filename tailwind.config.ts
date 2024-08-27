import { title } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '3rem',
        lg: '7rem',
        xl: '12rem',
        '2xl': '14rem'
      }
    },
    
    colors: {
      'light-foreground': '#000000',
      'light-background': '#FCF5ED',

      'dark-foreground': '#ffffff',
      'dark-background': '#2E4374',

      'active': '#ec6363',
      'hover': '#F4BF96',

    },
    fontFamily: {
      title: ['Bungee', 'serif'],
      paragraph: ['Fira Code', 'monospace'],
    },
    extend: {
      margin: {
        'inner': '1rem 0 1rem 0'
      },
      backgroundColor: {
        'navigation-gradient-light': '#FCF5ED',
        'navigation-gradient-dark': '#2E4374' 
      },
      backgroundImage: {
        'navigation-radial-light': 'radial-gradient(#ec6363 1.1px, #FCF5ED 1.1px)',
        'navigation-radial-dark': 'radial-gradient(#ec6363 1.1px, #2E4374 1.1px)',
      },
      backgroundSize: {
        'navigation-size': '22px 22px',
      },
      gridTemplateColumns: {
        'navigation-grid': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  plugins: [],
};
export default config;
