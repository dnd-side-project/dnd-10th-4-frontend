import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { SoundOff } from '@/assets/icons';
import IconButton from '../IconButton';
import NewTooltip from './NewTooltip';

const meta = {
  title: 'Components/NewTooltip',
  component: NewTooltip,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NewTooltip>;

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
      <NewTooltip {...args}>
        <NewTooltip.Trigger>
          <IconButton>
            <SoundOff color="white" />
          </IconButton>
        </NewTooltip.Trigger>
        <NewTooltip.Content>
          <p>소리를 켜 바다를 느껴보세요</p>
        </NewTooltip.Content>
      </NewTooltip>
    </section>
  ),
};
