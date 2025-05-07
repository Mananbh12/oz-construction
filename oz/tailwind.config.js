/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Chemin vers le dossier 'app'
    './components/**/*.{js,ts,jsx,tsx}', // Chemin vers les composants
    './src/**/*.{js,ts,jsx,tsx}', // Si tu as un dossier 'src' également
    './styles/**/*.{css}', // Ajout du chemin vers le dossier styles
  ],
  theme: {
    extend: {
      maxWidth: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      colors: {
        gray: {
          200: '#D3D3D3',
          400: '#4B5EAA',
          600: '#4B5EAA',
          700: '#4B5EAA',
        },
        yellow: {
          500: '#FFC107',
        },
      },
      filter: {
        'grayscale-20': 'grayscale(20%)',
      },
    },
  },
  plugins: [],
};
