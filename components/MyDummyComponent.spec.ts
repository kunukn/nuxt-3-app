import { describe, it, expect } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { mount } from '@vue/test-utils'
import MyDummyComponent from './MyDummyComponent.vue'

describe('MyDummyComponent', () => {
  const vuetify = createVuetify({ components, directives })

  it('renders properly', () => {
    const wrapper = mount(MyDummyComponent, {
      global: {
        plugins: [vuetify],
      },
      props: { title: 'Hello Vitest' },
    })

    expect(wrapper.vm).toBeTruthy()
    // expect(wrapper.text()).toContain('Hello Vitest')
  })
})
