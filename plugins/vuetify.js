import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: '#E65180',
            secondary: '#FBC27C',
          },
        },
        dark: {
          dark: true,
          colors: {
            background: '#2B2C28',
            surface: '#2B2C28',
            primary: '#CC3363',
            secondary: '#F7B05B',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
