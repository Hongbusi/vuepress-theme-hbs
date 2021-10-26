export const tailwindConfig = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '666': '666px'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '1200px',
          paddingRight: '20px',
          paddingLeft: '20px',
          marginRight: 'auto',
          marginLeft: 'auto'
        }
      })
    }
  ],
  corePlugins: {
    container: false
  }
}
