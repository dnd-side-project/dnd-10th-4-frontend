import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import BottomSheet from '@/components/BottomSheet';
import { ArrowClockWise } from '@/assets/icons';
import { letterWrite } from '@/constants/schemaLiteral';
import { type Worry, type EqualGender } from '@/constants/letters';
import Button from '@/components/Button';
import { type WriteInputs } from '..';
import { BottomSheetProps } from './LetterWriteContent';
import { AgeSlider, GenderSelect, WorrySelect } from '.';

const LetterReceiverSelect = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const { setValue } = useFormContext<WriteInputs>();

  const [age, setAge] = useState<[number, number]>([
    letterWrite.age.min,
    letterWrite.age.max,
  ]);
  const [gender, setGender] = useState<'' | EqualGender>('');
  const [worryType, setWorryType] = useState<'' | Worry>('');

  const [iconRotation, setIconRotation] = useState<number>(0);

  const onCompleteButtonClick = () => {
    setValue('age', age);
    setValue('worryType', worryType);
    setValue('gender', gender);
    toggleBottomSheet(false)();
  };

  const onRefreshIconClick = () => {
    setValue('age', []);
    setValue('gender', '');
    setValue('worryType', '');
    setAge([letterWrite.age.min, letterWrite.age.max]);
    setGender('');
    setWorryType('');
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
          <BottomSheet.Title>누구에게 보낼까요?</BottomSheet.Title>
          <ArrowClockWise color={COLORS.gray2} onClick={onRefreshIconClick} />
        </div>
        <AgeSlider age={age} setAge={setAge} />
        <GenderSelect gender={gender} setGender={setGender} />
        <WorrySelect worryType={worryType} setWorryType={setWorryType} />
      </div>
      <BottomSheet.Divider />
      <BottomSheet.ButtonSection>
        <Button variant="cancel" onClick={toggleBottomSheet(false)}>
          닫기
        </Button>
        <Button variant="primary" onClick={onCompleteButtonClick}>
          완료
        </Button>
      </BottomSheet.ButtonSection>
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
      padding-left: 0;
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
