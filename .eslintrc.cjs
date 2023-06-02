// https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg

module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vitest'],
  rules: {
    'no-console': 'off',
    'vue/v-on-event-hyphenation': 'off',
  },
}
