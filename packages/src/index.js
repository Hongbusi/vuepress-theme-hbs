const { path } = require('@vuepress/utils');

const hbsTheme = {
  name: 'vuepress-theme-hbs',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue')
  }
}

module.exports = hbsTheme;
