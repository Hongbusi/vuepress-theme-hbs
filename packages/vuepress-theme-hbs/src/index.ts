import { path } from '@vuepress/utils';
import { tailwindConfig } from './node';

const hbsTheme = (options, app) => {
  return {
    name: 'vuepress-theme-hbs',

    layouts: {
      Layout: path.resolve(__dirname, './client/layouts/Layout.vue'),
      404: path.resolve(__dirname, './client/layouts/404.vue')
    },

    clientAppEnhanceFiles: path.resolve(__dirname, './client/clientAppEnhance.js'),

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
    },

    plugins: [
      ['@vuepress/plugin-theme-data', { themeData: options }]
    ]
  }
}

export default hbsTheme;
