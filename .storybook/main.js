// import path from 'path'
// import { loadConfigFromFile, mergeConfig } from 'vite'

/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  // // https://storybook.js.org/docs/react/builders/vite
  // // https://laurentcazanove.com/articles/storybook-nuxt-guide/
  // async viteFinal(baseConfig) {
  //   // @ts-ignore
  //   const { config: userConfig } = await loadConfigFromFile()
  //   // @ts-ignore
  //    path.resolve(__dirname, '../vite.config.ts')

  //   let merged = mergeConfig(baseConfig, userConfig)

  //   console.log('merged', merged)
  //   console.log('userConfig', userConfig)

  //   return merged
  // },
}

export default config
