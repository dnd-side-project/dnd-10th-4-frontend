import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import testOptions from '@/api/test/queryOptions';
import MSWTestCard from './';

const meta = {
  title: 'Examples/MSWTestCard',
  component: MSWTestCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MSWTestCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    testId: '1',
  },
  name: '상세 조회 (GET /tests/:testId)',
  decorators: (Story) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Story />
    </Suspense>
  ),
};

export const 목록: Story = {
  ...Primary,
  name: '목록 조회 (GET /tests)',
  render: () => {
    const ListComponent = () => {
      const { data } = useSuspenseQuery({ ...testOptions.list() });

      return (
        <div>
          {data?.map((test) => (
            <ul key={test.id}>
              <li>{test.id}</li>
              <li>{test.name}</li>
              <li>{test.content}</li>
            </ul>
          ))}
        </div>
      );
    };

    return <ListComponent />;
  },
};
