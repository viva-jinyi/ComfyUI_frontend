import type { Meta, StoryObj } from '@storybook/vue3-vite'

import SquareTag from './SquareTag.vue'

const meta: Meta<typeof SquareTag> = {
  title: 'Custom/SquareTag',
  component: SquareTag,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Tag'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const TagList: Story = {
  render: () => ({
    components: { SquareTag },
    template: `
      <div class="flex flex-wrap gap-2">
        <SquareTag label="JavaScript" />
        <SquareTag label="TypeScript" />
        <SquareTag label="Vue.js" />
        <SquareTag label="React" />
        <SquareTag label="Node.js" />
        <SquareTag label="Python" />
        <SquareTag label="Docker" />
        <SquareTag label="Kubernetes" />
      </div>
    `
  })
}
