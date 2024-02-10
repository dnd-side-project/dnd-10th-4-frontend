import type { Meta, StoryObj } from '@storybook/react';
import TimeChip from './';

const meta = {
  title: 'Pages/MainPage/TimeChip',
  component: TimeChip,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TimeChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    createdAt: new Date(
      new Date().getTime() - 23 * 60 * 60 * 1000,
    ).toISOString(),
  },
};
