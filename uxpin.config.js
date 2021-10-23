module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: ['src/components/Button/Button.tsx', 'src/components/Textfield/Textfield.tsx']
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js'
  },
  name: 'introduction to UXPin Merge'
}
