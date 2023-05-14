<template>
  <v-app>
    <div class="d-flex align-center flex-column -p-4">
      <p class="-underline underline">Underlined text</p>
      <v-icon class="-relative">mdi-home</v-icon>
      <v-card class="-px-4">
        <v-card-title>This is a title</v-card-title>
        <v-card-subtitle>This is a subtitle</v-card-subtitle>
        <v-card-text> This is content </v-card-text>
      </v-card>
      <v-btn class="mt-10 -font-bold">Hello Sass Changes</v-btn>
    </div>
    <MyComponent />
  </v-app>
</template>

<style lang="scss">
// @use './assets/styles/vuetify-settings.scss';
</style>
