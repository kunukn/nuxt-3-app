import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export const vitePlugins = [
  tsconfigPaths(),
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
]
