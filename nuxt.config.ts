import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

process.env.NUXT_ENV = 'true'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  runtimeConfig: {},
  env: {},
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
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
