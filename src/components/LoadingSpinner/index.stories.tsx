import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from './';

const meta = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: '1rem',
    weight: '2px',
    color: 'black',
  },
};
