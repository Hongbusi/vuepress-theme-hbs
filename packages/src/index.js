const { path } = require('@vuepress/utils');
const tailwindConfig = require(path.resolve(__dirname, '../tailwind.config.js'));

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
          require('tailwindcss')(tailwindConfig),
          require('autoprefixer')
        ]
      }
    }
  },
  // onInitialized(app) {
  //   app.options.bundlerConfig = {
  //     postcss: {
  //       postcssOptions: {
  //         plugins: {
  //           tailwindcss: tailwindConfig,
  //           autoprefixer: {}
  //         }
  //       }
  //     },
  //     ...app.options.bundlerConfig
  //   }
  // }
}

module.exports = hbsTheme;
