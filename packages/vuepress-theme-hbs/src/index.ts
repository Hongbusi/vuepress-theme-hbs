import { path } from '@vuepress/utils';
import { createPage } from '@vuepress/core';
import { tailwindConfig } from './node';

const hbsTheme = (options, app) => {
  return {
    name: 'vuepress-theme-hbs',

    layouts: {
      Layout: path.resolve(__dirname, './client/layouts/Layout.vue'),
      GitStars: path.resolve(__dirname, './client/layouts/GitStars.vue'),
      404: path.resolve(__dirname, './client/layouts/404.vue')
    },

    clientAppEnhanceFiles: path.resolve(__dirname, './client/clientAppEnhance.js'),

    async onInitialized(app) {
      // tailwindcss
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

      // git stars
      if (app.pages.every((page) => page.path !== '/git-stars')) {
        const gitStarsPage = await createPage(app, {
          path: '/git-stars',
          frontmatter: {
            layout: 'GitStars'
          }
        })
        app.pages.push(gitStarsPage);
      }
    },

    plugins: [
      ['@vuepress/plugin-theme-data', { themeData: options }]
    ]
  }
}

export default hbsTheme;
