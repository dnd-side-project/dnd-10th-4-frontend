import { useState } from 'react';
import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
import textStyles from '@/styles/textStyles';
import style from '../styles';
import { LetterReceiverContainer } from '.';

interface LetterPaperProps {
  isBottomSheetOpen: boolean;
  toggleBottomSheet: (state: boolean) => () => void;
}

const LetterPaper = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: LetterPaperProps) => {
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
        css={[style.textarea, textStyles.l1m]}
        value={letterContent}
        onChange={(e) => setLetterContent(e.target.value)}
      >
        {letterContent}
      </textarea>
      <div css={style.textCount}>
        <p>{letterContent.length}</p>
        <p>&nbsp;/ 300</p>
      </div>
      <div css={style.date}>
        <p>{formatDate(new Date())}</p>
      </div>
    </LetterCard>
  );
};

export default LetterPaper;
