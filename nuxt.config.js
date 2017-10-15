
module.exports = {
  /*
  ** Headers of the page
  */
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
    { src: "~/plugins/vuetify.js"},
  ],
  css: [
    { src: "~/assets/style/app.styl", ssr: true },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#212121" },
  /*
  ** Build configuration
  */
  build: {
    // extend (config, { dev, isServer}){
    //   config.node = {
    //     fs: 'empty', net: 'empty', tls: 'empty', module: 'empty'
    //   }
    // },
    vendor: ["vuetify", "axios", "js-cookie","~/plugins/vuetify.js"],
    extractCSS: true,
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
