import type { Meta, StoryObj } from '@storybook/react';
import { Composition } from '../NewTooltip.stories';
import NewTooltip from '../NewTooltip';
import Trigger from './Trigger';

const meta = {
  title: 'Components/NewTooltip/Trigger',
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
    <NewTooltip>
      <NewTooltip.Trigger>
        <p>{args.children}</p>
      </NewTooltip.Trigger>
      <NewTooltip.Content>
        <p>소리를 켜 바다를 느껴보세요</p>
      </NewTooltip.Content>
    </NewTooltip>
  ),
};
