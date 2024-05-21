/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "outfit",
        prata: "prata"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        vignette: '0 0 0px #fff, 0 0 1px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff'
      },
      colors: {
        'the-lilac': "#ecddef",
        'the-red': "#FC5356",
        'the-off-white': '#f0efea',
        'the-purple': '#c5ade1',
        'the-blue-grey': '#303A40',
        'the-salmon': '#e8bfb2',
        'the-white': '#'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-vignette': {
          textShadow: '0 0 0px #fff, 0 0 0px #fff, 0 0 2px #FFD6E0, 0 0 0px #fff, 0 0 0px #fff'
        }
      }, ['responsive', 'hover']);
    }
  ]
};
