<template>
  <button
    type="button"
    color="primary"
    :variant="variant"
    :size="size"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'large'].includes(value)
      },
      default: 'small',
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    return {
      onClick() {
        emit('click')
      },
      variant: computed(() => (props.primary ? 'flat' : 'outlined')),
    }
  },
}
</script>
