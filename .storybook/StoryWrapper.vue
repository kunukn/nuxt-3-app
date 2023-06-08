<template>
  <v-app :theme="themeName">
    <p>Theme: {{ themeName }}</p>
    <slot name="storySlot"></slot>
  </v-app>
</template>

<script>
export default {
  props: {
    themeName: String,
  },
}
</script>
