import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import PaginationBar from './';

const meta = {
  title: 'Components/PaginationBar',
  component: PaginationBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PaginationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  container: css`
    box-sizing: border-box;
    width: 100%;
    max-width: 600px;
    padding: 1rem;
    background-color: #ffefcf;
  `,
};

export const Primary: Story = {
  args: {
    defaultPage: 2,
    count: 10,
    onChange: (page: number) => console.log(`${page}번 아이템 클릭`),
  },
  decorators: [
    (Story) => (
      <div css={styles.container}>
        <Story />
      </div>
    ),
  ],
};
