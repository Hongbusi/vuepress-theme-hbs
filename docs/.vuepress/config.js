const { path } = require('@vuepress/utils');

module.exports = {
  title: 'vuepress-theme-hbs',
  theme: path.resolve(__dirname, '../../packages/vuepress-theme-hbs'),
  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      { text: 'Git stars', link: '/git-stars' }
    ]
  }
}
