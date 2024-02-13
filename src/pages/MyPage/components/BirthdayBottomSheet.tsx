import { css } from '@emotion/react';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { bottomSheetStyles } from '../style';

interface BirthdayBottomSheetProps extends ReturnType<typeof useBoolean> {}

const BirthdayBottomSheet = ({ value, on, off }: BirthdayBottomSheetProps) => {
  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <section css={bottomSheetStyles.mainSection}>
        <h2 css={bottomSheetStyles.title}>언제로 변경하시겠어요?</h2>
        <div css={styles.inputSection}>
          <span css={css({ flexBasis: '6.25rem' })}>
            <input type="text" placeholder="YYYY" />
          </span>
          <span css={css({ flexBasis: '4.6875rem' })}>
            <input type="text" placeholder="MM" />
          </span>
          <span css={css({ flexBasis: '4.6875rem' })}>
            <input type="text" placeholder="DD" />
          </span>
        </div>
        <p css={bottomSheetStyles.description}>
          생년월일은 한 번만 수정할 수 있어요
        </p>
      </section>
      <section css={bottomSheetStyles.buttonSection}>
        <Button variant="cancel" rounded="none" size="sm" onClick={off}>
          닫기
        </Button>
        <Button variant="primary" rounded="none" size="sm">
          완료
        </Button>
      </section>
    </BottomSheet>
  );
};

export default BirthdayBottomSheet;

const styles = {
  inputSection: css`
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    width: 100%;

    input {
      box-sizing: border-box;
      width: 100%;
      padding: 0.75rem 0.875rem;
      border: 1px solid var(--gray-gray5, #e0e0e0);
      border-radius: 0.75rem;
      background: #fff;
      text-align: center;

      &:focus {
        outline: 1px solid ${COLORS.primary};
      }

      ${textStyles.b3R};
    }
  `,
};
