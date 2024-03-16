import type { Meta, StoryObj } from '@storybook/react';
import { Composition } from '../index.stories';
import Tooltip from '..';
import Trigger from './Trigger';

const meta = {
  title: 'Components/Tooltip/Trigger',
  component: Trigger,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Trigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'hover me',
  },
  decorators: Composition.decorators,
  render: (args) => (
    <Tooltip>
      <Tooltip.Trigger>
        <p>{args.children}</p>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>소리를 켜 바다를 느껴보세요</p>
      </Tooltip.Content>
    </Tooltip>
  ),
};
