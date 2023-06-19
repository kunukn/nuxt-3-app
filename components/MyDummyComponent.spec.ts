import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MyDummyComponent from './MyDummyComponent.vue'

describe('MyDummyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyDummyComponent, {
      props: { title: 'Hello Vitest' },
    })

    expect(wrapper.vm).toBeTruthy()
    // expect(wrapper.text()).toContain('Hello Vitest')
  })
})
