import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { vitePlugins } from './vite.plugins'

console.debug('process.env', process.env)

// https://vitejs.dev/config/
const definedConfig = process.env.NUXT_ENV
  ? {
      /* Nuxt detects vite.config.ts file, avoid using it. This is for Storybook. */
    }
  : defineConfig({
      ssr: {
        noExternal: true,
      },
      plugins: [...vitePlugins],
      css: {
        // preprocessorOptions: {
        //   scss: {
        //     additionalData: `
        //       @import "./path/to/file.scss";
        //     `
        //   }
        // }
      },
      resolve: {
        alias: {
          '~': fileURLToPath(new URL('./', import.meta.url)),
          '@': fileURLToPath(new URL('./', import.meta.url)),
          // Add any other aliases you use in your code base
          // https://nuxt.com/docs/api/configuration/nuxt-config/#alias
        },
      },
    })

export default definedConfig
