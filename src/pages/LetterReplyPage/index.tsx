import { css } from '@emotion/react';
import ReplyHeader from './ReplyHeader';
import SentLetter from './sentLetter';

const LetterReplyPage = () => {
  return (
    <div css={style.container}>
      <ReplyHeader />
      <div css={style.content}>
        <SentLetter />
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
    padding-inline: 1rem;
  `,
};
