import { setup } from '@storybook/vue3'
import '../assets/css/tailwind.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/lib/styles/main.sass';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

const vuetify = createVuetify({
  components,
  directives,
})

setup((app) => {
  app.use(vuetify, {})
})

export default preview
