/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "300px",
        md: "760px",
        lg: "1024px",
      },
      colors: {
        primary: {
          50: "#f8f7fe",
          100: "#f1f0fe",
          200: "#dbd9fb",
          300: "#c6c1f9",
          400: "#9b93f5",
          500: "#7065f0",
          600: "#655bd8",
          700: "#544cb4",
          800: "#433d90",
          900: "#373176",
        },
      },
    },
  },
  plugins: [],
};
