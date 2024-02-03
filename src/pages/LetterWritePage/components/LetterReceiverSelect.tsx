import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import BottomSheet from '@/components/BottomSheet';
import { ArrowClockWise } from '@/assets/icons';
import COLORS from '@/constants/colors';
import style from '../styles';
import { BottomSheetProps } from './LetterWriteContent';
import { AgeSlider, GenderSelect, ConcernSelect } from '.';

const LetterReceiverSelect = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const { setValue } = useFormContext();
  const [iconRotation, setIconRotation] = useState(0);

  const onCompleteButtonClick = () => {
    toggleBottomSheet(false)();
  };

  const onRefreshIconClick = () => {
    setValue('age', [15, 40]);
    setValue('gender', '');
    setValue('concern', '');
    setIconRotation((prev) => prev + 360);
  };

  return (
    <BottomSheet
      open={isBottomSheetOpen}
      onClose={toggleBottomSheet(false)}
      onOpen={toggleBottomSheet(true)}
    >
      <div css={style.bottomSheetContainer}>
        <div css={style.bottomSheetTitle}>
          <h2>누구에게 보낼까요?</h2>
          <ArrowClockWise
            css={{
              transform: `rotate(${iconRotation}deg)`,
              transition: 'transform 0.5s',
            }}
            color={COLORS.gray2}
            onClick={onRefreshIconClick}
          />
        </div>
        <AgeSlider />
        <GenderSelect />
        <ConcernSelect />
      </div>
      <div css={style.buttonContainer}>
        <button onClick={toggleBottomSheet(false)}>닫기</button>
        <button onClick={onCompleteButtonClick}>완료</button>
      </div>
    </BottomSheet>
  );
};

export default LetterReceiverSelect;
