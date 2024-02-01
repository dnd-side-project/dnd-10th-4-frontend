import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import BottomSheet from '@/components/BottomSheet';
import { ArrowClockWise } from '@/assets/icons';
import COLORS from '@/constants/colors';
import Chip from '@/components/Chip';
import textStyles from '@/styles/textStyles';
import style from '../styles';

interface LetterReceiverProps {
  isBottomSheetOpen: boolean;
  toggleBottomSheet: (state: boolean) => () => void;
}

const LetterReceiver = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: LetterReceiverProps) => {
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
        <div>
          <h3 css={style.label}>나이</h3>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            disableSwap
            min={15}
            max={50}
            css={style.slider}
          />
          <div css={style.age}>
            <p>{value[0]}세 이상</p>
            <p>{value[1]}세 이하</p>
          </div>
        </div>
        <div>
          <h3 css={style.label}>성별</h3>
          <div css={style.genderChip}>
            <Chip variant="form">모두에게 보내기</Chip>
            <Chip variant="form">나와 같은 성별에게 보내기</Chip>
          </div>
        </div>
        <div>
          <h3 css={[style.label, { paddingBottom: '4px' }]}>고민</h3>
          <p css={textStyles.description}>
            고민을 선택을 하면 나와 비슷한 고민을 가진 낯선 친구에게 전달되요
          </p>
          <div css={style.concernChip}>
            {chipLabels.map((label) => (
              <Chip key={label} variant="form">
                {label}
              </Chip>
            ))}
          </div>
        </div>
      </div>
      <div css={style.buttonContainer}>
        <button>닫기</button>
        <button>완료</button>
      </div>
    </BottomSheet>
  );
};

export default LetterReceiver;
