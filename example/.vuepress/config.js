module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  theme: require.resolve('../../'),
  themeConfig: {
    nav: [
      { text: 'blog', link: '/_posts/' },
      { text: '时间轴', link: '/timeline/' }
    ],
    sidebar: {
      collapsable: false,
      '/_post/':   {
        title: 'vuepress',
        collapsable: false,
        children: [
          '/_post/'
        ]
      }
    }
  }
}
