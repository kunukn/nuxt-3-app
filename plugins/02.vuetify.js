import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { themes } from '~/configuration/vuetify-configuration'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes,
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
