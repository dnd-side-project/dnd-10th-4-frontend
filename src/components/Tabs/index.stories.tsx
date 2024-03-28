import { type ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import Tabs from './';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: {
    List: Tabs.List as ComponentType<unknown>,
    Trigger: Tabs.Trigger as ComponentType<unknown>,
    Content: Tabs.Content as ComponentType<unknown>,
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  container: css`
    padding: 1.25rem;
    background-color: #8acef5;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    &:empty {
      display: none;
    }
  `,
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    defaultValue: 'tab2',
  },
  decorators: (Story) => (
    <div css={styles.container}>
      <Story />
    </div>
  ),
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">One</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Tab one content</Tabs.Content>
      <Tabs.Content value="tab2">Tab two content</Tabs.Content>
      <Tabs.Content value="tab3">Tab three content</Tabs.Content>
    </Tabs>
  ),
};

export const 보관함: Story = {
  ...Primary,
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">One</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1" css={styles.content}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>from. 낯선 고양이.... 보관한 편지 내용... {i}</div>
        ))}
      </Tabs.Content>
      <Tabs.Content value="tab2" css={styles.content}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>from. 낯선 고양이.... 보관한 편지 내용... {i}</div>
        ))}
      </Tabs.Content>
    </Tabs>
  ),
};
