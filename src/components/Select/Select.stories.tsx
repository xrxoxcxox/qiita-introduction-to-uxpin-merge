import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'Select',
  component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'default'
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  name: 'with label',
  label: 'label'
}
