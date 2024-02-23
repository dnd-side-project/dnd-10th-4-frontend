import { css } from '@emotion/react';
import BottomSheet from '@/components/BottomSheet';
import COLORS from '@/constants/colors';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';

interface LetterCountBottomSheetProps extends ReturnType<typeof useBoolean> {
  letterCount: number;
}

const LetterCountBottomSheet = ({
  letterCount,
  value,
  on,
  off,
}: LetterCountBottomSheetProps) => {
  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>
        <span>보유한 편지지 갯수 </span>
        <span css={css({ color: COLORS.primary })}>{letterCount}/5</span>
        <span>개</span>
      </BottomSheet.Title>
      <BottomSheet.Description css={css({ marginTop: '0.75rem' })}>
        <p>편지지는 매일 밤 12시에 충전 돼요</p>
      </BottomSheet.Description>
      <BottomSheet.Divider />
      <BottomSheet.ButtonSection>
        <Button variant="primary" size="sm" onClick={off}>
          닫기
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default LetterCountBottomSheet;
