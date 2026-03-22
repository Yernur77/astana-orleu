import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A7A62',
          light: '#5AAD62',
          dark: '#2A5A47',
        },
        secondary: {
          DEFAULT: '#4264A0',
          light: '#42B3E0',
        },
        bg: {
          DEFAULT: '#F7FBFA',
          card: '#FFFFFF',
          gradient: '#EAF5F0',
        },
        text: {
          DEFAULT: '#1A2B25',
          secondary: '#567068',
          muted: '#8AA8A0',
        },
        divider: '#D8EAE5',
        accent: '#42B3E0',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '600' }],
        'display': ['40px', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '600' }],
        'label': ['11px', { lineHeight: '1.5', letterSpacing: '1.5px', fontWeight: '500' }],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(58,122,98,0.08)',
        'card-hover': '0 8px 24px rgba(58,122,98,0.14)',
        'nav': '0 1px 0 rgba(58,122,98,0.08)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3A7A62 0%, #4264A0 100%)',
        'gradient-green': 'linear-gradient(135deg, #3A7A62 0%, #5AAD62 100%)',
        'gradient-hero': 'linear-gradient(135deg, #EAF5F0 0%, #E8EFF8 100%)',
        'gradient-logo-green': 'linear-gradient(135deg, #3A7A62 0%, #4A9362 50%, #5AAD62 100%)',
        'gradient-logo-blue': 'linear-gradient(135deg, #4C568F 0%, #42B3E0 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
