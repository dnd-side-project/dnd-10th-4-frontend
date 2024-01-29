import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { PencilLine } from '@/assets/icons';
import Button from './';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        <PencilLine />
        <p>button</p>
      </>
    ),
  },
};

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 21rem;
  `,
  semiTransparentContainer: css`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #fcecd0;
  `,
};

export const Primary: Story = {
  render: () => (
    <div css={styles.container}>
      <Button variant="primary">
        <PencilLine />
        <p>button</p>
      </Button>
      <Button disabled variant="primary">
        <PencilLine />
        <p>button</p>
      </Button>
    </div>
  ),
};

export const PrimaryOutline: Story = {
  render: () => (
    <div css={styles.container}>
      <Button variant="primary-outline">
        <PencilLine />
        <p>button</p>
      </Button>
      <Button disabled variant="primary-outline">
        <PencilLine />
        <p>button</p>
      </Button>
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div css={styles.container}>
      <Button variant="secondary">
        <PencilLine />
        <p>button</p>
      </Button>
      <Button disabled variant="secondary">
        <PencilLine />
        <p>button</p>
      </Button>
    </div>
  ),
};

export const SemiTransparent: Story = {
  render: () => (
    <div css={styles.semiTransparentContainer}>
      <Button variant="semi-transparent-unaccent">
        <PencilLine />
        <p>button</p>
      </Button>
      <Button disabled variant="semi-transparent">
        <PencilLine />
        <p>button</p>
      </Button>
    </div>
  ),
};
