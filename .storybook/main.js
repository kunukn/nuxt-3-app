import path from 'path'
import { loadConfigFromFile, mergeConfig } from 'vite'

/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // https://laurentcazanove.com/articles/storybook-nuxt-guide/
  async viteFinal(baseConfig) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    )

    return mergeConfig(baseConfig, userConfig)
  },
}

export default config
