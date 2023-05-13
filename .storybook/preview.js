import { setup } from '@storybook/vue3'
// import MyPlugin from 'example-vue-plugin'

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

// setup((app) => {
//   app.use(MyPlugin, {
//     secret: import.meta.env.STORYBOOK_PLUGIN_SECRET,
//   })
// })

export default preview
