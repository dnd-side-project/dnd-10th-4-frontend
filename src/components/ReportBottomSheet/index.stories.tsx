import type { Meta, StoryObj } from '@storybook/react';
import useBoolean from '@/hooks/useBoolean';
import Button from '../Button';
import ReportBottomSheet from '.';

const meta = {
  title: 'Components/ReportBottomSheet',
  component: ReportBottomSheet,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ReportBottomSheet>;

export default meta;

export const 신고_바텀시트: StoryObj = {
  render: () => {
    const BottomSheetComponent = () => {
      const ReportBottomSheetProps = useBoolean(false);

      return (
        <div>
          <Button onClick={ReportBottomSheetProps.on}>바텀시트열기</Button>
          <ReportBottomSheet {...ReportBottomSheetProps} />
        </div>
      );
    };

    return <BottomSheetComponent />;
  },
};
