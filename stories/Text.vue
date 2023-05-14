<template>
  <p class="-underline underline">{{ text }}</p>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'my-text',

  props: {
    text: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    props = reactive(props)
    return {}
  },
}
</script>
