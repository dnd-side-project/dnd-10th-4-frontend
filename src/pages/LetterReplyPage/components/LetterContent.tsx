import { css } from '@emotion/react';
import LetterHeader from '@/components/LetterHeader';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

interface LetterContentProps {
  receiver: string;
  content: string;
  date: string;
  sender: string;
}

const LetterContent = ({
  receiver,
  content,
  date,
  sender,
}: LetterContentProps) => {
  return (
    <>
      <LetterHeader nickname={receiver} />
      <p css={style.letter}>{content}</p>
      <div css={style.date}>{date}</div>
      <LetterHeader title="From" titlePosition="right" nickname={sender} />
    </>
  );
};

export default LetterContent;

const style = {
  letter: css`
    height: 15rem;
    ${textStyles.l1m}
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 3.5rem;
    ${textStyles.c1r};
    color: ${COLORS.gray4};
  `,
};
