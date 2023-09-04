/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-locker": "url('/locker.jpg')",
        "benefit-bg": "url('/benefitsimg.webp')",
        "hero-register": "url('/heroregister.webp')",
        "cta-bg": "url('/cta.jpg')",
        "primary-gradient":
          "linear-gradient(to right, rgba(198, 78, 37, 0.8),  rgba(198, 78, 37, 0.8))",
      },
      colors: {
        primary: "#C64E25",
        secondary: "#002247",
        terciary: "#F6F7F8",
      },
    },
    fontFamily: {
      viga: ["Viga", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
