module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/Card/Card.tsx',
          'src/components/Textfield/Textfield.tsx',
          'src/components/Typography/Typography.tsx'
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js'
  },
  name: 'introduction to UXPin Merge'
}
