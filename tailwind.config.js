/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "6rem",
          xl: "7rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        reward: "url('reward.png')",
      },
      colors: {
        bg: {
          DEFAULT: "#FF8B42",
          200: "#272727",
          300: "#2e2e2e",
        },
        primary: {
          DEFAULT: "#010F58",
        },
        secondary: {
          DEFAULT: "#FF5017",
        },
      },
    },
    fontFamily: {
      'grotesk': ['Space Grotesk', 'sans-serif']
    },
  },
  plugins: [],
};
