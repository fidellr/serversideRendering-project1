
module.exports = {
  /*
  ** Headers of the page
  */
  // env: {
  //   _id: process.env._id
  // },
  head: {
    title: "project-1",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js + Vuetify.js project + express.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  router: {
    middleware: ['check-auth']
  },
  plugins: [
    // {src: "~/plugins/vue-awesome.js", ssr: false},
    { src: "~/plugins/vuetify.js", ssr: true },
    // {src: '~/plugins/babel-plugin.js'},
    // {src: "~/plugins/dateFilter.js"},
    // {src: "~/plugins/chart.js", ssr: true}
  ],
  css: [
    { src: "~/assets/style/app.styl", ssr: true },
    // {src: "swiper/dist/css/swiper.css"}
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    // extend (config, { dev, isServer}){
    //   config.node = {
    //     fs: 'empty', net: 'empty', tls: 'empty', module: 'empty'
    //   }
    // },
    vendor: ["vuetify", "axios", "chart.js", "js-cookie"],
    extractCSS: true
    /*
    ** Run ESLINT on save
    */
  },
  // modules: [
  //   // // Simple usage
  //   // '@nuxtjs/pwa',

  //   // With options
  //   ['@nuxtjs/pwa', { optimize: true }, '@nuxtjs/icon']
  //  ]
};
