<template>
  <div class="-p-6">
    <p class="-p-2">This is an auto-imported component</p>
    <button @click="increment">Increment</button>
    <p class="-p-2">Counter: {{ count }}</p>
    <p class="-p-2">$t usage: {{ $t('{count} items', { count }) }}</p>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useCounterStore()
    const { increment } = store

    const { count } = storeToRefs(store)

    return { increment, count }
  },
})
</script>
