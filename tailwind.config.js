/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#fafafa',
        muted: '#171717',
        'muted-foreground': '#a1a1aa',
        accent: '#3b82f6',
        'accent-foreground': '#fafafa',
        card: '#141414',
        'card-foreground': '#fafafa',
        border: '#262626',
      },
    },
  },
  plugins: [],
}
