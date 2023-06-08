<template>
  <v-app :theme="themeName">
    <v-main>
      <slot name="storySlot"></slot>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    themeName: String,
  },
}
</script>
