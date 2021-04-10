module.exports = {
  title: 'vuepress-theme-hbs',
  description: 'A simple vuepress blog theme.',
  theme: require.resolve('../../packages'),
  themeConfig: require('./config/themeConfig'),
  plugins: require('./config/plugins')
}
