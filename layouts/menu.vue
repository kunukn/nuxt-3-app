<template>
  <div data-layout="menu">
    <v-navigation-drawer v-model="drawer" location="right">
      <p>Nav content</p>
    </v-navigation-drawer>

    <v-app-bar>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({ drawer: null }),
}
</script>
