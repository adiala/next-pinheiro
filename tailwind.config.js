module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {'roboto':['Roboto']},
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity:'0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity:'1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      colors: {
        'primary': '#162836',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
