import type { Meta, StoryObj } from '@storybook/react';
import { SoundOff } from '@/assets/icons';
import { Composition } from '../NewTooltip.stories';
import NewTooltip from '../NewTooltip';
import IconButton from '../../IconButton';
import Content from './Content';

const meta = {
  title: 'Components/NewTooltip/Content',
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
    <NewTooltip>
      <NewTooltip.Trigger>
        <IconButton>
          <SoundOff color="white" />
        </IconButton>
      </NewTooltip.Trigger>
      <Content {...args} />
    </NewTooltip>
  ),
};
