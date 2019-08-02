const pkg = require('./package');
const LessPlugin = require("less-plugin-functions");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path")


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // 页面顶部loading效果
  loading: {
    color: '#00b38a',
    height: '2px',
    failedColor: '#00b38a'
  },
  // 页面的过渡效果
  transition: {
    name: 'page'
  },

  // 配置路由
  router: {
    middleware: 'adminAuth',
    fallback: true
  },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/style/main.less', lang: 'less' }, // 指定 less
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/iview', ssr: true },
    { src: '~plugins/axios' },
    { src: '~plugins/main', ssr: true },
    { src: '~plugins/hUtils', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        // Disable `postcss-url`
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {}
      }
    },
    extractCSS: true, // 开启extractCSS
    publicPath: '/static/',

    vendor: ['axios'],
    // filenames: {
    //     css: 'common.[hash].css',
    //     manifest: 'manifest.[hash].js',
    //     vendor: 'vendor.bundle.[hash].js',
    //     app: 'app.bundle.[hash].js'
    // },

    // babel: {
    //   configFile: true,
    //   babelrc: true,
    //   cacheDirectory: undefined,
    //   plugins: ["syntax-dynamic-import", ["import", {
    //     "libraryName": "iview",
    //     "libraryDirectory": "src/components"
    //   }]]
    // },
    loaders: {
      less: {
        javascriptEnabled: true,
        plugins: [ new LessPlugin() ]
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, { isClient, isServer }) {
      if (isClient) {
      } else if (isServer) {
      }

    }
  },
  serverMiddleware: [
    // API middleware
    '~/server/api.js'
  ]
}
