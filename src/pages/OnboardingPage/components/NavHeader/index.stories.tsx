import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import NavHeader from './';

const meta = {
  title: 'OnboardingPage/Components/NavHeader',
  component: NavHeader,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  container: css`
    background-color: #8acef5;
    color: white;
  `,
};

export const Primary: Story = {
  args: {
    progressValue: 2,
    showBackButton: true,
    showSkipButton: true,
  },
  decorators: (Story) => (
    <div css={styles.container}>
      <Story />
    </div>
  ),
};
