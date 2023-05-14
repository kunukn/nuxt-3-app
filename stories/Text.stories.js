import MyText from './Text.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Text',
  component: MyText,
  tags: ['autodocs'],
  argTypes: {},
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    text: 'Hello word',
  },
}
