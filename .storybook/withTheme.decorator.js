import { h } from 'vue'
import StoryWrapper from './StoryWrapper.vue'

export const DEFAULT_THEME = 'light'

export const withTheme = (storyFn, context) => {
  // Pull our global theme variable, fallback to DEFAULT_THEME
  const themeName = context.globals.theme || DEFAULT_THEME
  const story = storyFn()

  return () => {
    return h(
      StoryWrapper,
      // give themeName to StoryWrapper as a prop
      { themeName },
      {
        storySlot: () => h(story, { ...context.args }),
      }
    )
  }
}
