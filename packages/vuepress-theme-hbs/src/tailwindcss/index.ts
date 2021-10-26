module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
