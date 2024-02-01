// import { useState } from 'react';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';
import style from './styles';
import LetterWriteContent from './components/LetterWriteContent';
import LetterWriteBottom from './components/LetterWriteBottom';

const LetterWritePage = () => {
  return (
    <div css={style.container}>
      <Header
        css={style.headerStyle}
        leftContent={<CaretLeft strokeWidth={2.5} color="white" />}
      />
      <div css={style.contentWrapper}>
        <LetterWriteContent />
        <LetterWriteBottom />
      </div>
    </div>
  );
};
export default LetterWritePage;
