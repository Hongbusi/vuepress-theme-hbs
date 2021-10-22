const { path } = require('@vuepress/utils');

const hbsTheme = {
  name: 'vuepress-theme-hbs',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue')
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
  bundlerConfig: {
    postcss: {
      postcssOptions: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer')
        ]
      }
    }
  }
}

module.exports = hbsTheme;
