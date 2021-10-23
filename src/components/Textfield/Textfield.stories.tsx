import { useRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Textfield } from './Textfield'

export default {
  title: 'Textfield',
  component: Textfield
} as ComponentMeta<typeof Textfield>

const Template: ComponentStory<typeof Textfield> = (args) => {
  const ref = useRef<HTMLInputElement>(null)
  return <Textfield {...args} ref={ref} />
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'default'
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  placeholder: 'with label',
  label: 'label'
}
