import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';
import ApiErrorBoundary from './ApiErrorBoundary';

const meta = {
  title: 'Components/ErrorBoundary/ApiErrorBoundary',
  component: ApiErrorBoundary,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ApiErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => {
    const Component = () => {
      useSuspenseQuery({
        queryKey: ['apiErrorBoundary'],
        queryFn: () => axios.get('https://error.com'),
      });

      return <></>;
    };

    return (
      <ApiErrorBoundary>
        <Suspense fallback={<>로딩중...</>}>
          <Component />
        </Suspense>
      </ApiErrorBoundary>
    );
  },
};
