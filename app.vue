<template>
  <div class="d-flex align-center flex-column -p-4">
    <v-icon>mdi-home</v-icon>
    <v-card class="-px-4">
      <v-card-title>This is a title</v-card-title>
      <v-card-subtitle>This is a subtitle</v-card-subtitle>
      <v-card-text> This is content </v-card-text>
    </v-card>
    <v-btn class="mt-10">Hello Sass Changes</v-btn>
  </div>
  <MyComponent />
</template>

<style lang="scss">
@use './settings';
</style>
