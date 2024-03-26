/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['inter', 'serif'],
      },
      colors: {
        visionBlue: '#003049',
        visionGold: '#D4AF37',
      },
      sectionHeading: {
        fontSize: '60px',
        marginLeft: '20px',
        marginTop: '20px',
      },
      sectionText: {
        fontSize: '20px',
      }
    },
  },
  plugins: [],
};
