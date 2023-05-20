import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VueComponent from './MyDummyComponent.vue'

describe('MyDummyComponent', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(VueComponent, {})

    expect(wrapper.vm).toBeTruthy()
  })
})
