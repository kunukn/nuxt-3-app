<template>
  <div>
    <p>This is an auto-imported component</p>
    <p>Counter: {{ count }}</p>
    <v-btn @click="increment">Increment</v-btn>
    <p>Counter: {{ getCount }}</p>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useCounterStore()
    const { increment } = store

    const { count, getCount } = storeToRefs(store)

    return { increment, count, getCount }
  },
})
</script>
