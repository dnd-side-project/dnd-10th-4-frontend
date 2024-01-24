import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import Tabs from './';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div
      css={css`
        padding: 1.25rem;
        background-color: #94d1f5;
      `}
    >
      <Tabs {...args} />
    </div>
  ),
  args: {
    defaultValue: 'tab2',
    variant: 'primary',
    tabItems: [
      {
        key: 'tab1',
        label: 'One',
        content: 'Tab one content',
      },
      {
        key: 'tab2',
        label: 'Two',
        content: 'Tab two content',
      },
      {
        key: 'tab3',
        label: 'Three',
        content: 'Tab three content',
      },
    ],
  },
};

const 보관함Components = {
  Content: ({ children }: React.PropsWithChildren) => {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        `}
      >
        {children}
      </div>
    );
  },
};

export const 보관함: Story = {
  render: (args) => (
    <div
      css={css`
        padding: 1.25rem;
        background-color: #94d1f5;
      `}
    >
      <Tabs {...args} />
    </div>
  ),
  args: {
    variant: 'primary',
    tabItems: [
      {
        key: '1',
        label: '보관한 편지',
        content: (
          <보관함Components.Content>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>from. 낯선 고양이.... 보관한 편지 내용... {i}</div>
            ))}
          </보관함Components.Content>
        ),
      },
      {
        key: '2',
        label: '내가 보낸 편지',
        content: (
          <보관함Components.Content>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                from. 낯선 고양이.... 내가 보낸 편지 내용... {i}
              </div>
            ))}
          </보관함Components.Content>
        ),
      },
    ],
  },
};
