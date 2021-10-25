import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from './Card'

export default {
  title: 'Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  titleAs: 'h1'
}

export const WithImage = Template.bind({})
WithImage.args = {
  image: true,
  imageUrl: 'https://placehold.jp/1200x200.png',
  titleAs: 'h1'
}
