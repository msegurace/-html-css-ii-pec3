/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend: {
      colors: {
        'texto-fondo-oscuro': '#2a2a2a',
        'color-texto': '#fcfcfc',
        'color-principal': '#79baab',
        'color-principal-light': '#c5e1db',
        'color-contraste': '#dc4a23',
        'color-contraste-light': '#eb9781',
        'color-fondo-body': '#fff7e8',
        'color-fondo-boton': '#806600'
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

