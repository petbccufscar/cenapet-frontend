const webpack = require("webpack");
import path from "path"
import fs from "fs"
import axios from "axios"

export default {
  target: "static",
  server: {
    /*port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
    https: {

    }*/
  },
  generate: {
    fallback: true,
    interval: 500,
    routes(callback) {
      axios
        .get("https://strapi.cenapet.org/pets")
        .then(res => {
          const routes = res.data.map(pet => {
            return "/grupos/" + pet.id
          })
          callback(null, routes)
        })
        .catch(callback)
    }
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
    "@nuxtjs/fontawesome",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/markdownit",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/recaptcha",
    [
      "nuxt-image-extractor",
      {
        baseUrl: "https://strapi.cenapet.org",
        path: "/_images",
        extensions: ["jpg", "jpeg", "gif", "png", "webp", "svg"],
      }
    ],
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: process.env.firebaseApiKey,
          authDomain: process.env.firebaseAuthDomain,
          databaseURL: process.env.firebaseDatabaseURL,
          projectId: process.env.firebaseProjectId,
          storageBucket: process.env.firebaseStorageBucket,
          messagingSenderId: process.env.firebaseMessagingSenderId,
          appId: process.env.firebaseAppId,
          measurementId: process.env.firebaseMeasurementId
        },
        services: {
          analytics: true
        }
      }
    ]
  ],
  env: {
    //baseURL: "/api"
    baseURL: "https://strapi.cenapet.org",
    mbToken: process.env.mbToken
  },
  analytics: {
    static: true,
    collectionEnabled: true
  },  
  recaptcha: {
    siteKey: process.env.recaptchaSiteKey,
    version: 2,
    size: "invisible",
    hideBadge: true,
  },
  fontawesome: {
    icons: {
      solid: ["faEnvelope", "faFile", "faSearch", "faChevronUp", "faChevronRight", "faChevronDown", "faChevronLeft", "faCheckCircle", "faExclamationTriangle", "faArrowLeft", "faExternalLinkAlt", "faPaintRoller"],
      regular: ["faFrownOpen", "faMeh", "faSadCry"],
      brands: ["faFacebookF", "faYoutube", "faInstagram", "faTwitter","faGithub"]
    }
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
  },
  build: {
    //analyze: true,
    vendor: ["bootstrap", "axios"],
    extend(config, ctx) {
    }
  }
};
