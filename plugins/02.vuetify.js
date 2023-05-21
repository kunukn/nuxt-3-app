import { createVuetify } from 'vuetify'
import { themes } from '~/configuration/vuetify-configuration'

export default defineNuxtPlugin((nuxtApp) => {
  // https://vuetifyjs.com/en/features/treeshaking/
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      themes,
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
