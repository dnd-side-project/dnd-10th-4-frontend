import { useState } from 'react';
import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
import style from '../styles';
import { BottomSheetProps } from './LetterWriteContent';
import { LetterReceiverContainer } from '.';

const LetterPaper = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const [letterContent, setLetterContent] = useState('');

  return (
    <LetterCard isOpen={true}>
      <LetterReceiverContainer
        onClick={toggleBottomSheet(true)}
        isOpen={isBottomSheetOpen}
      />
      <textarea
        rows={15}
        autoFocus
        placeholder="하고싶은 이야기를 적어보세요."
        css={style.textarea}
        value={letterContent}
        onChange={(e) => setLetterContent(e.target.value)}
      >
        {letterContent}
      </textarea>
      <div css={style.textCount}>
        <span>{letterContent.length}</span>
        <span>&nbsp;/ 300</span>
      </div>
      <div css={style.date}>
        <span>{formatDate(new Date())}</span>
      </div>
    </LetterCard>
  );
};

export default LetterPaper;
