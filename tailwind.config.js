/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#0A192F",
        "bgr-github": "#333333",
        "bgr-linkedin": "#0A66C2",
        "bgr-facebook": "#1877F2",
      },
    },
  },
  plugins: [],
};
