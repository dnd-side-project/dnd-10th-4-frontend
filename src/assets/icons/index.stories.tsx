/* eslint-disable import/namespace */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import * as icons from '.';

const meta = {
  title: 'Assets/Icons',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
      description: '아이콘에 적용할 색상',
    },
    size: {
      control: {
        type: 'number',
      },
      description: '아이콘의 크기',
    },
  },
} as Meta<{ color: string; size: number }>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  `,
};

export const Primary: Story = {
  args: {
    color: 'black',
    size: 24,
  },
  render: (args) => (
    <div css={styles.container}>
      {Object.keys(icons).map((iconName) => (
        <div key={iconName}>
          {React.createElement(icons[iconName as keyof typeof icons], {
            ...args,
            width: args.size,
            height: args.size,
          })}
        </div>
      ))}
    </div>
  ),
};
