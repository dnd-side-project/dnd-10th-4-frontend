import { type ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { SoundOff } from '@/assets/icons';
import IconButton from '../IconButton';
import Tooltip from '.';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  subcomponents: {
    Trigger: Tooltip.Trigger as ComponentType<unknown>,
    Content: Tooltip.Content as ComponentType<unknown>,
  },
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

export const Composition: Story = {
  args: {
    delay: 3000,
  },
  decorators: (Story) => (
    <div css={styles.background}>
      <Story />
    </div>
  ),
  render: (args) => (
    <section>
      <Tooltip {...args}>
        <Tooltip.Trigger>
          <IconButton>
            <SoundOff color="white" />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>소리를 켜 바다를 느껴보세요</p>
        </Tooltip.Content>
      </Tooltip>
    </section>
  ),
};
