/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the Soft Touch Auto Finishing logo.
        // `brand` is lightened from the logo's #D9430E so it clears 4.5:1
        // against the #0c0c0c ground when used as text.
        brand: '#F2661F',
        ember: '#D9430E',
        gold: '#F5C518',
        azure: '#2E86DE',
        aqua: '#5BC8DC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shiny: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        shiny: 'shiny 6s linear infinite',
      },
    },
  },
  plugins: [],
}
