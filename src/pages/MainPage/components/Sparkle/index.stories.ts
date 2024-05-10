import type { Meta, StoryObj } from '@storybook/react';
import SparkleBig from '@/assets/images/sparkleBig.webp';
import Sparkle from './';

const meta = {
  title: 'Pages/MainPage/Sparkle',
  component: Sparkle,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sparkle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: SparkleBig,
  },
};
