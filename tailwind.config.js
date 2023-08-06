/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        container: "1120px",
      },
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
        monA: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        primary: "#262525",
        para: "#2B2B2B",
        yellowp: "#FDBD07",
        yellows: "#FFA02D",
        primaryBg: "#F0FBFF",
      },
      boxShadow: {
        cshadow: "2px 2px 5px 2px rgba(0,0,0,0.1)",
        cshadow2: "0px 0px 20px 0px rgba(0,0,0,0.2)",
        cshadow3:"0 10px 25px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}
