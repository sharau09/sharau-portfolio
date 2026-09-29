/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F5',
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F4EFEB',
          300: '#ECE3DA',
          400: '#DECFC1',
        },
        cream: {
          DEFAULT: '#F5EFE6',
          light: '#FBF9F5',
          dark: '#EAE1D2',
        },
        espresso: {
          50: '#F8F5F2',
          100: '#EFE7E0',
          200: '#DFCEC1',
          300: '#C7AE9B',
          400: '#AA8A71',
          500: '#8C6D53',
          600: '#6E523D',
          700: '#523C2C',
          800: '#3A291E',
          900: '#271B14',
          950: '#1A120D',
        },
        charcoal: {
          50: '#F5F5F4',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#141210',
          950: '#0E0D0C',
        },
        bronze: {
          light: '#CBB29E',
          DEFAULT: '#9E7B58',
          dark: '#7A5B3D',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Bodoni Moda', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        script: ['Italiana', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'magazine': '0.18em',
        'editorial': '0.12em',
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(26, 18, 13, 0.08)',
        'editorial-lg': '0 30px 60px -15px rgba(26, 18, 13, 0.12)',
        'editorial-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        'hairline': '0.5px',
      }
    },
  },
  plugins: [],
}
