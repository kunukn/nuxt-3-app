import { defineStore } from 'pinia'

export const useNavmenuStore = defineStore('navmenu', {
  state: () => ({
    toggleValue: 0,
  }),
  getters: {
    isOpen: (state) => !!state.toggleValue,
  },
  actions: {
    toggle() {
      this.toggleValue = this.toggleValue ? 0 : 1
    },
    close() {
      this.toggleValue = 0
    },
    open() {
      this.toggleValue = 1
    },
  },
})
