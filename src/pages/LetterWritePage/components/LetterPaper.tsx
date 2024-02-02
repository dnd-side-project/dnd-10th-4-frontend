import { useState, ChangeEvent } from 'react';
import { formatDate } from '@/utils/dateUtils';
import LetterCard from '@/components/LetterCard';
import style from '../styles';
import { BottomSheetProps } from './LetterWriteContent';
import { LetterReceiverContainer } from '.';

const LetterPaper = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const [letterContent, setLetterContent] = useState('');
  const MAX_CONTENT = 300;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= MAX_CONTENT) {
      setLetterContent(inputValue);
    } else {
      setLetterContent(inputValue.slice(0, MAX_CONTENT - 1));
    }
  };

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
        onChange={handleChange}
      >
        {letterContent}
      </textarea>
      <div css={style.textCount}>
        <span>{letterContent.length}</span>
        <span>&nbsp;/ {MAX_CONTENT}</span>
      </div>
      <div css={style.date}>
        <span>{formatDate(new Date())}</span>
      </div>
    </LetterCard>
  );
};

export default LetterPaper;
