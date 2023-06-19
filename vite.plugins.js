import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export const vitePlugins = [
  tsconfigPaths(),
  vue({
    template: {},
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
