const webpack = require("webpack");
export default {
  mode: "universal",
  /*server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },*/
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
  ** Global CSS
  */
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "@assets/css/main.css",
    "@assets/fonts/roboto.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@plugins/bootstrap.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/markdownit",
    [
      "nuxt-fontawesome", {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["faFacebookF", "faInstagram", "faTwitter", "faYoutube"]
          },
        ],
      },
    ],
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/recaptcha"
  ],
  env: {
    //baseURL: "/api"
    baseURL: "https://strapi.petbcc.tech",
    mbToken: ""
  },
  recaptcha: {
    siteKey: "",
    version: 2,
    size: "invisible",
    hideBadge: true,
  },/*
  axios: {
    proxy: true,
    proxyHeaders: false,
    credentials: false,
    debug: true,
    retry: { retries: 3 }
  },
  proxy: {
    "/api/": {
      target: "http://localhost:1337", pathRewrite: { "^/api/": "" },
      changeOrigin: true
    }
  },*/
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["jquery", "bootstrap", "axios"],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
