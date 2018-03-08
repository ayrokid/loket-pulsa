module.exports = {
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === "vue-loader"
        )
        const { options: { loaders } } = vueLoader || { options: {} }
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }
        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
        // console.log(util.inspect(config.module.rules, { depth: 6 }))
      }
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: "example",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },

      // example vue-meta
      { hid: "title", name: "title", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      }
    ]
  },

  css: [{ src: "~/assets/scss/navigation.scss", lang: "scss" }],
  /*
  ** Custom Plugin
   */
  plugins: [{ src: "~plugins/swiper.js", ssr: false }, "~/plugins/axios"],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: "#3B8070"
  },
  /*
  ** Modules
  */
  modules: ["@nuxtjs/pwa", "@nuxtjs/axios", "@nuxtjs/toast"],

  toast: {
    position: "top-center"
  }
}

function changeLoaderOptions(loaders) {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === "sass-loader") {
        Object.assign(loader.options, {
          includePaths: ["./assets"]
          // data: '@import "_imports";'
        })
      }
    }
  }
}
