module.exports = {
  title: 'Hongbusi',
  description: 'Just playing around',
  theme: require.resolve('../../'),
  themeConfig: {
    record: '浙ICP备2020035758号-2',
    recordLink: 'https://beian.miit.gov.cn',
    startYear: '2021',
    author: 'Hongbusi',
    logo: 'http://xubusi.com/images/logo.png',
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
