module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({ 
        DEFAULT: {
          css: {
            h1: {color: theme('colors.blue.500')},
            h2: {color: theme('colors.blue.500')},
            h3: {color: theme('colors.blue.500')},
            h4: {color: theme('colors.blue.500')},
            h5: {color: theme('colors.blue.500')},
            h6: {color: theme('colors.blue.500')},
            code: {color: theme('colors.gray.500')},
            strong: {color: theme('colors.gray.500')},
            blockquote: {color: theme('colors.blue.500')},
            th: {color: theme('colors.gray.500')},
          }
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
