import { css } from '@emotion/react';
import ReplyHeader from './ReplyHeader';

const LetterReplyPage = () => {
  return (
    <div css={style.container}>
      <ReplyHeader />
    </div>
  );
};

export default LetterReplyPage;

const style = {
  container: css`
    width: 100%;
  `,
};
