import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MSWTestCard from './';

const meta = {
  title: 'Examples/MSWTestCard',
  component: MSWTestCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MSWTestCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    testId: '1',
  },
  decorators: (Story) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Story />
    </Suspense>
  ),
};
