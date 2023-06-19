<template>
    <p>Theme: {{ themeName }}</p>
    <slot name="storySlot"></slot>
</template>

<script>
export default {
  props: {
    themeName: String,
  },
}
</script>
