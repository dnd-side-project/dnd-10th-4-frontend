import { css } from '@emotion/react';
import { CaretRight } from '@/assets/icons';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import useBoolean from '@/hooks/useBoolean';
import SentLetterModal from './sentLetterModal';

const SentLetter = () => {
  const { value: isOpen, on: open, off: close } = useBoolean(false);

  return (
    <>
      <div css={style.container} onClick={open}>
        <span css={style.text}>내가 보낸 편지</span>
        <CaretRight stroke={COLORS.gray4} width={24} height={24} />
      </div>
      <SentLetterModal isOpen={isOpen} close={close} />
    </>
  );
};

export default SentLetter;

const style = {
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;
    background: #fff;
    cursor: pointer;

    :hover {
      background: ${COLORS.gray6};
    }
  `,
  text: css`
    color: ${COLORS.gray4};
    ${textStyles.b4m}
  `,
};
