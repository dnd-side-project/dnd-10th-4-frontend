import LetterCard from '@/components/LetterCard';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import LetterHeader from '@/components/LetterHeader';
import Chip from '@/components/Chip';
import { formatDate } from '@/utils/dateUtils';
import { ReceptionLetterType } from '../hooks/useLetterTag';
import LetterContent from '../components/LetterContent';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import style from './styles';

interface ReceivedLetterProps {
  receptionLetter: ReceptionLetterType;
  onNext: () => void;
}

const ReceivedLetter = ({ receptionLetter, onNext }: ReceivedLetterProps) => {
  const tagList = receptionLetter.tagList;

  return (
    <LetterContent>
      <LetterCard isOpen={true}>
        <div css={style.tag}>
          {tagList.map((tag) => (
            <Chip key={tag} variant="filter">
              {tag}
            </Chip>
          ))}
        </div>
        <div css={style.text}>
          <p>{receptionLetter.content}</p>
        </div>
        <div css={style.date}>
          <span>{formatDate(new Date(receptionLetter.createdAt))}</span>
        </div>
        <LetterHeader
          title="From"
          titlePosition="right"
          nickname={receptionLetter.senderNickname}
        />
        <ReceptionPolaroid />
      </LetterCard>
      <Navbar css={style.navbar}>
        <Button variant="secondary" size="sm">
          다시 흘려보내기
        </Button>
        <Tooltip
          side="top"
          delay={10000}
          triggerContent={
            <Button variant="primary" size="sm" onClick={onNext}>
              답장하기
            </Button>
          }
        >
          사라지기전에 답장을 보내보세요!
        </Tooltip>
      </Navbar>
    </LetterContent>
  );
};

export default ReceivedLetter;
