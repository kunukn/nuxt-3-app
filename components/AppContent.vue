<template>
  <v-navigation-drawer v-model="drawer" location="right">
    <p>Nav content</p>
  </v-navigation-drawer>

  <v-app-bar>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-main class="">
    <div class="d-flex align-center flex-column -p-4">
      <p class="-underline">Underlined text</p>
      <v-icon class="-relative">mdi-home</v-icon>
      <v-card class="-px-4">
        <v-card-title>This is a title</v-card-title>
        <v-card-subtitle>This is a subtitle</v-card-subtitle>
        <v-card-text> This is content </v-card-text>
      </v-card>
      <v-btn class="mt-10 -font-bold">Hello Sass Changes</v-btn>
      <MyComponent />
    </div>
  </v-main>
</template>

<script lang="ts">
export default {
  data: () => ({ drawer: null }),
}
</script>
