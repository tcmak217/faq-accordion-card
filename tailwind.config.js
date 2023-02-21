/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-violet": "hsl(273, 75%, 66%)",
        "bg-blue": "hsl(240, 73%, 65%)",
      },
    },
  },
  plugins: [],
}
