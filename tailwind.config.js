/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "984px",
      xl: "1240px",
      "2xl": "1400px", 
    },
    extend: {
      colors: {
        myColor: {
          50: "#e7f7e7",
          100: "#ceefce",
          200: "#b6e6b6",
          300: "#9dde9d",
          400: "#85d685",
          500: "#6cce6c",
          600: "#54c654",
          700: "#3bbd3b",
          800: "#23b523",
          900: "#0aad0a",
          950: "#055705",
        },
      },
    },
  },
  plugins: [
     require('flowbite/plugin'),
  ],
}
