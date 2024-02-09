import { letterWrite } from '@/constants/schemaLiteral';
import { formatDate } from '@/utils/dateUtils';
import style from './styles';

interface LetterLengthDateProps {
  letterLength: number;
}

const LetterLengthDate = ({ letterLength }: LetterLengthDateProps) => {
  return (
    <>
      <div css={style.textCount}>
        <span>{letterLength}</span>
        <span>&nbsp;/ {letterWrite.content.max.value}</span>
      </div>
      <div css={style.date}>
        <span>{formatDate(new Date())}</span>
      </div>
    </>
  );
};

export default LetterLengthDate;
