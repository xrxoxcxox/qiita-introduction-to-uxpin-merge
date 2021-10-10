module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: (config) => {
    config.presets.push(require.resolve('@emotion/babel-preset-css-prop'))
    return config
  }
}
