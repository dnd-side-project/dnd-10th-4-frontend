import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { SoundOff } from '@/assets/icons';
import IconButton from '../IconButton';
import Tooltip from './';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  background: css`
    display: flex;
    justify-content: flex-end;
    padding: 1rem 1rem 3rem;
    background-color: #9eddfc;
  `,
};

export const Primary: Story = {
  args: {
    side: 'bottom',
    align: 'end',
    delay: 1000,
    mountKey: undefined,
    triggerContent: (
      <IconButton>
        <SoundOff color="white" />
      </IconButton>
    ),
    children: '소리를 켜 바다를 느껴보세요',
  },
  decorators: (Story) => {
    return (
      <div css={styles.background}>
        <Story />
      </div>
    );
  },
};
