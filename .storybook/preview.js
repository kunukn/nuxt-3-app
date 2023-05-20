import { setup } from '@storybook/vue3'
import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/styles'
import '../assets/css/tailwind.css'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { withVuetifyTheme } from './withVuetifyTheme.decorator'
import { themes } from '../configuration/vuetify-configuration'
import '../assets/styles/global.scss'

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
  theme: {
    themes,
  },
})

const pinia = createPinia()

setup((app) => {
  app.use(vuetify)
  app.use(pinia)
})

export const decorators = [withVuetifyTheme]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
        { value: 'brand', title: 'Brand', left: '+' },
        { value: 'nobrand', title: 'Nobrand', left: '-' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
}
