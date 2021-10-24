import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Typography } from './Typography'

export default {
  title: 'Typography',
  component: Typography
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Typography'
}

export const Headline = Template.bind({})
Headline.args = {
  children: 'Headline Typography',
  as: 'h1'
}
