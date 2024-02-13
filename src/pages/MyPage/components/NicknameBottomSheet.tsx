import { css } from '@emotion/react';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import { Shuffle } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import { bottomSheetStyles } from '../style';

interface NicknameBottomSheetProps extends ReturnType<typeof useBoolean> {}

const NicknameBottomSheet = ({ value, on, off }: NicknameBottomSheetProps) => {
  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <section css={bottomSheetStyles.mainSection}>
        <h2 css={bottomSheetStyles.title}>새로운 닉네임을 선택해주세요</h2>
        <div css={styles.input}>
          <p css={textStyles.t3}>
            <span>낯선 </span>
            <span css={{ color: COLORS.primaryHover }}>거북이</span>
          </p>
          <IconButton type="button" css={styles.icon}>
            <Shuffle width={18} height={18} />
          </IconButton>
        </div>
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

const styles = {
  input: css`
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 3.125rem;
    padding: 0.4375rem 0.875rem;
    border: 1px solid var(--gray-gray5, #e0e0e0);
    border-radius: 0.75rem;
    background: #fff;
  `,
  icon: css`
    position: absolute;
    top: 50%;
    right: 0.375rem;
    background-color: ${COLORS.primaryLight};
    transform: translateY(-50%);

    &:active {
      transform: translateY(-50%);
    }
  `,
};

export default NicknameBottomSheet;
