import React from 'react';
import { css } from '@emotion/react';
// import ReceivedLetter from './ReceivedLetter';
import ReplyToLetter from './ReplyToLetter';
// import ReceptionHeader from './components/ReceptionHeader';

const LetterReceptionPage = () => {
  return (
    <div css={style.container}>
      {/* <ReceptionHeader /> */}
      {/* <ReceivedLetter /> */}
      <ReplyToLetter />
    </div>
  );
};

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
};

export default LetterReceptionPage;
