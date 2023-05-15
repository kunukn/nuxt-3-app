// https://laurentcazanove.com/articles/storybook-nuxt-guide/
import { Meta, StoryObj } from '@storybook/vue3'
import App from '~/components/AppContent.vue'

const meta: Meta<typeof App> = {
  component: App,
  render: (args) => ({
    components: { App }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
     <App/>
   `,
  }),
}

export default meta

type Story = StoryObj<typeof App>

export const Default: Story = {}
