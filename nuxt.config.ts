import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

process.env.NUXT_ENV = 'true'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    // '~/assets/styles/_colors.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },

  modules: ['@nuxtjs/tailwindcss'],

  // https://tailwindcss.nuxtjs.org/getting-started/options
  // @ts-ignore
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    exposeLevel: 2,
    // @ts-ignore
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  hooks: {
    'vite:extendConfig': (config) => {
      // @ts-ignore
      config.plugins.push(
        vuetify({
          styles: { configFile: resolve('./settings.scss') },
        })
      )
    },
  },
})
