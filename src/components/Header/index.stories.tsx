import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { LeftArrow, Siren, HourGlass } from '@/assets/icons';
import IconButton from '../IconButton';
import Header from './';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  background: css`
    background-color: #94d1f5;
    color: red;
  `,
  chip: css`
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    margin-left: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 6.25rem;
    background-color: #fff;
    color: black;
    font-weight: 500;
    line-height: 1rem;
  `,
  icon: css`
    cursor: pointer;
  `,
};

export const Primary: Story = {
  args: {
    left: <>왼쪽</>,
    center: <>가운데</>,
    right: <>오른쪽</>,
  },
  decorators: [
    (Story) => (
      <div css={styles.background}>
        <Story />
      </div>
    ),
  ],
};

export const 흘러온_편지: Story = {
  ...Primary,
  render: () => (
    <Header
      variant="primary"
      left={
        <>
          <LeftArrow css={styles.icon} strokeWidth={2} />
          <div css={styles.chip}>
            <HourGlass color="#828282" />
            <p>26h</p>
          </div>
        </>
      }
      right={
        <IconButton>
          <Siren color="white" />
        </IconButton>
      }
    />
  ),
};

export const 보관함_편지: Story = {
  ...Primary,
  render: () => (
    <Header
      variant="primary"
      left={<LeftArrow css={styles.icon} strokeWidth={2} />}
      center={<>보관함</>}
    />
  ),
};
