/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003B73',
          light: '#0056A9',
          dark: '#002B54'
        },
        secondary: '#A6CAEC',
        accent: '#FFB800',
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F8FA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'hero': 'calc(100vh - 4rem)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
