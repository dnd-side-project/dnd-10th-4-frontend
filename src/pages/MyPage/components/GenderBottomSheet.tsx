import { css } from '@emotion/react';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import GenderCard from '@/components/GenderCard';
import { bottomSheetStyles } from '../style';

interface GenderBottomSheetProps extends ReturnType<typeof useBoolean> {}

const GenderBottomSheet = ({ value, on, off }: GenderBottomSheetProps) => {
  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <section css={bottomSheetStyles.mainSection}>
        <h2 css={bottomSheetStyles.title}>어떤 성별로 변경하시겠어요?</h2>
        <section css={styles.genderSection}>
          <GenderCard variant="secondary" value="MALE" />
          <GenderCard variant="secondary" value="FEMALE" />
        </section>
        <p css={bottomSheetStyles.description}>
          성별은 한 번만 수정할 수 있어요
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

export default GenderBottomSheet;

const styles = {
  genderSection: css`
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    max-width: 15rem;
  `,
};
