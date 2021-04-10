const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // resolve algolia
  const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
        .keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
  )

  return {
    alias () {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js')
      }
    },

    plugins: [
      ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      '@vuepress/back-to-top',
      'vuepress-plugin-smooth-scroll',
      ['container', {
        type: 'tip',
        before: info => `<div class="custom-block tip"><p class="title">${info}</p>`,
        after: '</div>',
        defaultTitle: ''
      }],
      ['container', {
        type: 'warning',
        before: info => `<div class="custom-block warning"><p class="title">${info}</p>`,
        after: '</div>',
        defaultTitle: ''
      }],
      ['container', {
        type: 'danger',
        before: info => `<div class="custom-block danger"><p class="title">${info}</p>`,
        after: '</div>',
        defaultTitle: ''
      }],
      ['container', {
        type: 'right',
        defaultTitle: ''
      }],
      ['container', {
        type: 'theorem',
        before: info => `<div class="custom-block theorem"><p class="title">${info}</p>`,
        after: '</div>',
        defaultTitle: ''
      }],
      ['container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }]
    ]
  }
}
