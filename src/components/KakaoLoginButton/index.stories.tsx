import type { Meta, StoryObj } from '@storybook/react';
import KakaoLoginButton from './';

const meta = {
  title: 'Components/KakaoLoginButton',
  component: KakaoLoginButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof KakaoLoginButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
