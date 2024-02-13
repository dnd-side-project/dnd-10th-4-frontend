import { css } from '@emotion/react';
import ReplyHeader from './ReplyHeader';
import SentLetter from './sentLetter';
import ReplyLetter from './replyLetter';

const LetterReplyPage = () => {
  return (
    <div css={style.container}>
      <ReplyHeader />
      <div css={style.content}>
        <SentLetter />
        <ReplyLetter />
      </div>
    </div>
  );
};

export default LetterReplyPage;

const style = {
  container: css`
    width: 100%;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-inline: 1rem;
  `,
};
