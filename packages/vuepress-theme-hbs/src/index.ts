const { path } = require('@vuepress/utils');
const tailwindConfig = require('./tailwindcss');

const hbsTheme = {
  name: 'vuepress-theme-hbs',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue')
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
  onInitialized(app) {
    app.options.bundlerConfig = {
      postcss: {
        postcssOptions: {
          plugins: [
            ['tailwindcss', tailwindConfig],
            ['autoprefixer', {}]
          ]
        }
      },
      ...app.options.bundlerConfig
    }
  }
}

module.exports = hbsTheme;
