import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import Progress from './';

const meta = {
  title: 'OnboardingPage/Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  container: css`
    padding: 1.25rem;
    background-color: #8acef5;
  `,
};

export const Primary: Story = {
  args: {
    max: 4,
    value: 1,
    width: '4.875rem',
    height: '0.5rem',
  },
  decorators: (Story) => (
    <div css={styles.container}>
      <Story />
    </div>
  ),
};
