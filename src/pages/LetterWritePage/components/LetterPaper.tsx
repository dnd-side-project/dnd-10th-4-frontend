import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
import { BottomSheetProps } from './LetterWriteContent';
import { LetterReceiverContainer, LetterTextarea, PolaroidImage } from '.';

const LetterPaper = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const { watch } = useFormContext();
  const MAX_CONTENT = 300;

  return (
    <LetterCard isOpen={true}>
      <LetterReceiverContainer
        onClick={toggleBottomSheet(true)}
        isOpen={isBottomSheetOpen}
      />
      <LetterTextarea />
      <div css={style.textCount}>
        <span>{watch('content').length}</span>
        <span>&nbsp;/ {MAX_CONTENT}</span>
      </div>
      <div css={style.date}>
        <span>{formatDate(new Date())}</span>
      </div>
      {watch('image') && <PolaroidImage />}
    </LetterCard>
  );
};

export default LetterPaper;

const style = {
  textCount: css`
    display: flex;
    justify-content: flex-end;

    ${textStyles.c1m}
    & > span:nth-of-type(1) {
      color: ${COLORS.gray1};
    }

    & > span:nth-of-type(2) {
      color: ${COLORS.gray4};
    }
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 2.5rem;
    ${textStyles.c1r}
    color: ${COLORS.gray4};
  `,
};
