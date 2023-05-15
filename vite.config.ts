import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

console.log(process.env)

// https://vitejs.dev/config/
let definedConfig = process.env.NUXT_ENV
  ? {}
  : defineConfig({
      plugins: [
        vue({
          template: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin#image-loading
            transformAssetUrls,
          },
        }),
        // Vuetify Loader
        // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin#vite-plugin-vuetify
        vuetify({
          autoImport: true,
          styles: { configFile: 'settings.scss' },
        }),
        AutoImport({
          imports: ['vue', 'vue-router'],
          dirs: ['./composables'],
          vueTemplate: true,
        }),
        Components({
          dirs: [
            './components/',
            // Component folders that should be auto-imported
          ],
          dts: true,
          directoryAsNamespace: true,
        }),
      ],
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
