import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import BottomSheet from '@/components/BottomSheet';
import { ArrowClockWise } from '@/assets/icons';
import { type Inputs } from '..';
import { BottomSheetProps } from './LetterWriteContent';
import { AgeSlider, GenderSelect, ConcernSelect } from '.';

const LetterReceiverSelect = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const { setValue } = useFormContext<Inputs>();

  const [age, setAge] = useState([15, 40]);
  const [gender, setGender] = useState('');
  const [concern, setConcern] = useState('');

  const [iconRotation, setIconRotation] = useState(0);

  const onCompleteButtonClick = () => {
    setValue('age', age);
    setValue('concern', concern);
    setValue('gender', gender);
    toggleBottomSheet(false)();
  };

  const onRefreshIconClick = () => {
    setValue('age', []);
    setValue('gender', '');
    setValue('concern', '');
    setAge([15, 40]);
    setGender('');
    setConcern('');
    setIconRotation((prev) => prev + 360);
  };

  return (
    <BottomSheet
      open={isBottomSheetOpen}
      onClose={toggleBottomSheet(false)}
      onOpen={toggleBottomSheet(true)}
    >
      <div css={style.bottomSheetContainer}>
        <div css={style.bottomSheetTitle(iconRotation)}>
          <h2>누구에게 보낼까요?</h2>
          <ArrowClockWise color={COLORS.gray2} onClick={onRefreshIconClick} />
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

const style = {
  bottomSheetContainer: css`
    padding-inline: 1rem;
  `,
  bottomSheetTitle: (rotaion: number) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.75rem;

    h2 {
      ${textStyles.t2};
    }

    svg {
      cursor: pointer;
      transition: transform 0.5s;
      transform: rotate(${rotaion}deg);
    }
  `,
  buttonContainer: css`
    display: flex;

    button {
      cursor: pointer;
      flex: 1;
      padding: 0.75rem 1.25rem;
      border: 0;
      ${textStyles.t3}
    }

    & > button:nth-of-type(1) {
      background-color: ${COLORS.gray5};
      color: ${COLORS.gray1};
    }

    & > button:nth-of-type(2) {
      background-color: ${COLORS.primary};
      color: white;
    }
  `,
};
