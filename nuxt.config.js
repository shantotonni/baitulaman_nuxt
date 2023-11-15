//for server
//let api_url = 'https://apibaitul.newmusicparadigm.com/'
//for Local
let api_url = 'http://127.0.0.1:8000/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Baitul Aman Islamic Society Edmonton',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Baitul Aman Islamic Society Edmonton website' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: '/assets/js/jquery.min.js' },
      { src: '/assets/js/bootstrap.bundle.min.js' },
      { src: '/assets/lib/wow/wow.min.js' },
      { src: '/assets/lib/easing/easing.min.js' },
      { src: '/assets/lib/waypoints/waypoints.min.js' },
      { src: '/assets/lib/owlcarousel/owl.carousel.min.js' },
      { src: 'https://checkout.stripe.com/checkout.js' },
      { src: '/assets/js/main.js' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/assets/img/icon/fav.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',type: 'text/css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css',type: 'text/css' },
      { rel: 'stylesheet', href: '/assets/lib/animate/animate.min.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/lib/owlcarousel/assets/owl.carousel.min.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/css/style.css' ,type: 'text/css'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  //plugins: ['~/plugins/vee-validate.js', '~/plugins/toaster.js', '~/plugins/global-components.js'],
  plugins: [
    { src: '~/plugins/vue-datepicker.js', ssr: false },
    {src: '~/plugins/editor', ssr: false},
    { src: '~/plugins/vue-html2pdf', mode: 'client' },
    { src: '~/plugins/print.js', ssr: false },
    '~/plugins/base_url.js','~/plugins/toaster.js','~/plugins/filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
   // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
           type: 'Bearer'
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' }
        }
      }
    },
    redirect: {
      //home: '/customer/dashboard',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
   // baseURL: 'http://192.168.100.63/exchange/'
    baseURL: api_url + '/'
  },

  router:{
    middleware:['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
