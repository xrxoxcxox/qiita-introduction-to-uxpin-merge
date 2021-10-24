module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/Card/Card.tsx',
          'src/components/Select/Select.tsx',
          'src/components/Textfield/Textfield.tsx',
          'src/components/Typography/Typography.tsx'
        ]
      },
      {
        name: 'Layout',
        include: ['src/components/Stack/Stack.tsx']
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js'
  },
  name: 'introduction to UXPin Merge'
}
