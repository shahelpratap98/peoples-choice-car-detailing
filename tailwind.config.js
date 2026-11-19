/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // The client's chosen three-colour palette.
        raven: '#080402',
        powder: '#B6DFF5',
        // Poppy red is 4.1:1 on raven: fine for buttons (white on poppy is
        // 5.0:1), large type and graphics, but NOT for small text — use
        // `powder` (15:1) for small accents instead.
        brand: '#E0091F',
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
