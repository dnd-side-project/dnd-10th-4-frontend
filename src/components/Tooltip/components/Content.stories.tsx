import type { Meta, StoryObj } from '@storybook/react';
import { SoundOff } from '@/assets/icons';
import { Composition } from '../index.stories';
import Tooltip from '..';
import IconButton from '../../IconButton';
import Content from './Content';

const meta = {
  title: 'Components/Tooltip/Content',
  component: Content,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    side: 'bottom',
    align: 'center',
    withPortal: true,
    children: '소리를 켜 바다를 느껴보세요',
  },
  decorators: Composition.decorators,
  render: (args) => (
    <Tooltip>
      <Tooltip.Trigger>
        <IconButton>
          <SoundOff color="white" />
        </IconButton>
      </Tooltip.Trigger>
      <Content {...args} />
    </Tooltip>
  ),
};
