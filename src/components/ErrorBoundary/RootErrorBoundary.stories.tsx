import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import RootErrorBoundary from './RootErrorBoundary';

const meta = {
  title: 'Components/ErrorBoundary/RootErrorBoundary',
  component: RootErrorBoundary,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RootErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => {
    const ErrorComponent = () => {
      throw new Error('오류 원인은 ... 입니다.');
    };

    const Component = () => {
      const [showError, setShowError] = useState(false);

      return (
        <div>
          <Button variant="primary" onClick={() => setShowError(true)}>
            에러 Throw 하기
          </Button>
          {showError && <ErrorComponent />}
        </div>
      );
    };

    return (
      <RootErrorBoundary>
        <Component />
      </RootErrorBoundary>
    );
  },
};
