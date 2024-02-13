import { css } from '@emotion/react';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { WORRY_DICT } from '@/constants/users';
import { bottomSheetStyles } from '../style';

interface WorryBottomSheetProps extends ReturnType<typeof useBoolean> {}

const WorryBottomSheet = ({ value, on, off }: WorryBottomSheetProps) => {
  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <section css={bottomSheetStyles.mainSection}>
        <h2 css={bottomSheetStyles.title}>어떤 고민으로 변경하시겠어요?</h2>
        <section css={styles.chipSection}>
          {Object.entries(WORRY_DICT).map(([key, value]) => (
            <Chip key={key} variant="form">
              {value}
            </Chip>
          ))}
        </section>
        <p css={bottomSheetStyles.description}>언제든지 다시 바꿀 수 있어요</p>
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

export default WorryBottomSheet;

const styles = {
  chipSection: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    justify-content: center;
  `,
};
