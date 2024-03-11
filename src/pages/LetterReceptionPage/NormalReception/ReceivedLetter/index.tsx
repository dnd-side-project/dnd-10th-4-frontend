import TagList from '@/components/TagList';
import LetterCard from '@/components/LetterCard';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import LetterHeader from '@/components/LetterHeader';
import { formatDate } from '@/utils/dateUtils';
import useBoolean from '@/hooks/useBoolean';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import LetterContent from '../components/LetterContent';
import useLetterWithTags from '../hooks/useLetterWithTags';
import TossBottomSheet from './TossBottomSheet';
import style from './styles';

interface ReceivedLetterProps {
  letterId: number;
  onNext: () => void;
}

const ReceivedLetter = ({ letterId, onNext }: ReceivedLetterProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);
  const tossBottomSheetProps = useBoolean(false);

  return (
    <LetterContent>
      <LetterCard isOpen={true}>
        <TagList tags={receptionLetter.tagList} />
        <LetterHeader nickname={receptionLetter.receiverNickname ?? ''} />
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
        {receptionLetter.sendImagePath !== null && (
          <ReceptionPolaroid img={receptionLetter.sendImagePath} />
        )}
      </LetterCard>
      <Navbar css={style.navbar}>
        <Button variant="secondary" size="sm" onClick={tossBottomSheetProps.on}>
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
      <TossBottomSheet {...tossBottomSheetProps} letterId={letterId} />
    </LetterContent>
  );
};

export default ReceivedLetter;
