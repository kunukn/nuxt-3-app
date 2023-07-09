const fs = require('fs');

// https://github.com/storybookjs/storybook/issues/20564
fs.copyFile('.storybook/.nojekyll', 'storybook-static/.nojekyll', (err) => {
  if (err) throw err
  console.log('copy done: .nojekyll')
})
