/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f44bd5",
        
"secondary": "#6bc4c4",
        
"accent": "#ce6548",
        
"neutral": "#1D2930",
        
"base-100": "#EDE8F2",
        
"info": "#5894F3",
        
"success": "#156A43",
        
"warning": "#E68414",
        
"error": "#E52E68",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

