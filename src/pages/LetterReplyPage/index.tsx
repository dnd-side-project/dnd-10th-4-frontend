import { css } from '@emotion/react';
import ReplyHeader from './ReplyHeader';
import SentLetter from './sentLetter';
import ReplyLetter from './replyLetter';
import BottomButton from './components/BottomButton';

const LetterReplyPage = () => {
  return (
    <div css={style.container}>
      <ReplyHeader />
      <div css={style.content}>
        <div css={style.letter}>
          <SentLetter />
          <ReplyLetter />
        </div>
        <BottomButton />
      </div>
    </div>
  );
};

export default LetterReplyPage;

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-inline: 1rem;
  `,
  letter: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
};
