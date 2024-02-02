import { useState } from 'react';
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
  const [selectAge, setSelectAge] = useState<number[]>([17, 25]);
  const [selectGender, setSelectGender] = useState<string>('');
  const [selectConcern, setSelectConcern] = useState<string>('');
  const [iconRotation, setIconRotation] = useState(0);

  const onCompleteButtonClick = () => {
    toggleBottomSheet(false)();
  };

  const onRefreshIconClick = () => {
    setSelectAge([17, 25]);
    setSelectGender('');
    setSelectConcern('');
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
        <AgeSlider selectAge={selectAge} setSelectAge={setSelectAge} />
        <GenderSelect
          selectGender={selectGender}
          setSelectGender={setSelectGender}
        />
        <ConcernSelect
          selectConcern={selectConcern}
          setSelectConcern={setSelectConcern}
        />
      </div>
      <div css={style.buttonContainer}>
        <button onClick={toggleBottomSheet(false)}>닫기</button>
        <button onClick={onCompleteButtonClick}>완료</button>
      </div>
    </BottomSheet>
  );
};

export default LetterReceiverSelect;
