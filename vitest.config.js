import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { vitePlugins } from './vite.plugins'

export default defineConfig({
  plugins: [...vitePlugins],
  test: {
    globals: true,
    environment: 'happy-dom',
    deps: {
      inline: ['element-plus'],
    },
    include: ['./components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      '**/*.css',
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
  },
  // setupFiles: 'setupFiles.js',
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./', import.meta.url)),
      // Add any other aliases you use in your code base
      // https://nuxt.com/docs/api/configuration/nuxt-config/#alias
    },
  },
})
