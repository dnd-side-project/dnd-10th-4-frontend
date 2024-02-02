import { useState } from 'react';
import BottomSheet from '@/components/BottomSheet';
import { ArrowClockWise } from '@/assets/icons';
import COLORS from '@/constants/colors';
import style from '../styles';
import { AgeSlider, GenderSelect, ConcernSelect } from '.';

interface LetterReceiverSelectProps {
  isBottomSheetOpen: boolean;
  toggleBottomSheet: (state: boolean) => () => void;
}

const LetterReceiverSelect = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: LetterReceiverSelectProps) => {
  const [value, setValue] = useState<number[]>([17, 39]);

  const handleChange = (e: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const chipLabels = [
    '일·직장',
    '취업·진로',
    '인간관계',
    '이별·상실',
    '연애',
    '학업',
    '가족',
    '기타',
  ];

  return (
    <BottomSheet
      open={isBottomSheetOpen}
      onClose={toggleBottomSheet(false)}
      onOpen={toggleBottomSheet(true)}
    >
      <div css={{ paddingInline: '1rem' }}>
        <div css={style.bottomSheetTitle}>
          <h2>누구에게 보낼까요?</h2>
          <ArrowClockWise color={COLORS.gray2} />
        </div>
        <AgeSlider value={value} handleChange={handleChange} />
        <GenderSelect />
        <ConcernSelect chipLabels={chipLabels} />
      </div>
      <div css={style.buttonContainer}>
        <button>닫기</button>
        <button>완료</button>
      </div>
    </BottomSheet>
  );
};

export default LetterReceiverSelect;
