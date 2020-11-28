const webpack = require("webpack");
import path from 'path'
import fs from 'fs'

export default {
  server: {
    //port: 8000, // default: 3000
    //host: "0.0.0.0" // default: localhost
    //https: {

    //}
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Comissão Executiva Nacional do Programa de Educação Tutorial" }
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
    "@plugins/bootstrap.js",
    "@plugins/utils.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/markdownit",
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
  },
  fontawesome: {
    icons: {
      solid: ["faEnvelope", "faFile", "faSearch", "faChevronUp", "faChevronRight", "faChevronDown", "faChevronLeft", "faCheckCircle", "faExclamationTriangle", "faArrowLeft", "faExternalLinkAlt", "faPaintRoller"],
      regular: ["faFrownOpen", "faMeh", "faSadCry"],
      brands: ["faFacebookF", "faYoutube", "faInstagram", "faTwitter"]
    }
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
    vendor: ["bootstrap", "axios"],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
