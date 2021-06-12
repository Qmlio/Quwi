export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: 'Quwi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/notification/index.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios'

  ],
  axios: {
    baseURL: 'https://api.quwi.com/v2',

  },

  auth: {
    strategies: {

      local: {
        user: {
          autoFetch: false
        },
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "data.token",
          },
          logout: {
            url: "auth/logout",
            method: "post"
          },
          user: {
            url: "/users/profile",
            method: "get",
            propertyName: false,
          },
        },
        tokenType: '',
        tokenName: 'x-auth',
        autoFetchUser: false
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: false
}
