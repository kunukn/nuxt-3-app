import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

process.env.NUXT_ENV = 'true' // used as a flag to avoid using the vite.config.ts file.

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  runtimeConfig: {},
  env: {},

  css: [
    'vuetify/lib/styles/main.sass', // instead of: import 'vuetify/styles'
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/styles/global.scss',
  ],

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  build: {
    transpile: ['vuetify'],
  },

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

  i18n: {
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'de-DE',
        file: 'de-DE.json',
      },
      {
        code: 'es-ES',
        file: 'es-ES.json',
      },
      {
        code: 'ja',
        file: 'ja.json',
      },
      {
        code: 'zh-CN',
        file: 'zh-CN.json',
      },
    ],
    lazy: true,
    langDir: 'internationalization',
    defaultLocale: 'en',
  },

  devtools: {
    enabled: true,
  },
})
