import type { Meta, StoryObj } from '@storybook/react';
import DetailTimeChip from '.';

const meta = {
  title: 'Components/DetailTimeChip',
  component: DetailTimeChip,
  tags: ['autodocs'],
} satisfies Meta<typeof DetailTimeChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 한시간_이상: Story = {
  args: {
    createdAt: new Date(
      new Date().getTime() - 23 * 60 * 60 * 1000,
    ).toISOString(),
  },
};

export const 한시간_미만: Story = {
  args: {
    createdAt: new Date(
      new Date().getTime() - 47 * 60 * 60 * 1000,
    ).toISOString(),
  },
};
