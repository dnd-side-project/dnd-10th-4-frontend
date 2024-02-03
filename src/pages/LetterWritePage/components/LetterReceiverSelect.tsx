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

  const [age, setAge] = useState([15, 40]);
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [concern, setConcern] = useState<string | undefined>(undefined);

  const [iconRotation, setIconRotation] = useState(0);

  const onCompleteButtonClick = () => {
    setValue('age', age);
    setValue('concern', concern);
    setValue('gender', gender);
    toggleBottomSheet(false)();
  };

  const onRefreshIconClick = () => {
    setValue('age', undefined);
    setValue('gender', undefined);
    setValue('concern', undefined);
    setAge([15, 45]);
    setGender(undefined);
    setConcern(undefined);
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
        <AgeSlider age={age} setAge={setAge} />
        <GenderSelect gender={gender} setGender={setGender} />
        <ConcernSelect concern={concern} setConcern={setConcern} />
      </div>
      <div css={style.buttonContainer}>
        <button onClick={toggleBottomSheet(false)}>닫기</button>
        <button onClick={onCompleteButtonClick}>완료</button>
      </div>
    </BottomSheet>
  );
};

export default LetterReceiverSelect;
