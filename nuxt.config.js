export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: 8000, // default: 3000
  },
  router: {
    // base: '/fdpg/', // gh-pages 需要
    middleware: 'auth',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fdpg',
    htmlAttrs: {
      lang: 'zh-Hant-TW',
    },
    title: 'Fourdesire | 2021 Playground',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      {
        name: 'viewport',
        content:
          'initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Fourdesire 透由旗下生活遊戲化產品《植物保姆》、《Walkr》及《記帳城市》傳達給使用者的生活哲學， Fourdesire 乘載著 3000 萬個想讓生活變好的信念，陪伴全球以玩心養成好習慣的生活玩樂家，一起玩出更好的你！',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Fourdesire | 2021 Playground',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Fourdesire 透由旗下生活遊戲化產品《植物保姆》、《Walkr》及《記帳城市》傳達給使用者的生活哲學， Fourdesire 乘載著 3000 萬個想讓生活變好的信念，陪伴全球以玩心養成好習慣的生活玩樂家，一起玩出更好的你！',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.imgur.com/D98O6se.jpg',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://i.imgur.com/D98O6se.jpg',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Fourdesire | 2021 Playground',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', '@/assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/honeybadger.client.js',
    '@/plugins/vue-awesome-swiper.client.js',
    '@/plugins/app-init.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: ['assets/scss/_variables.scss'],
  },
}
