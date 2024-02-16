import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import LetterCard from '@/components/LetterCard';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import LetterHeader from '@/components/LetterHeader';
import { formatDate } from '@/utils/dateUtils';
import letterAPI from '@/api/letter/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ROUTER_PATHS } from '@/router';
import letterOptions from '@/api/letter/queryOptions';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import LetterContent from '../components/LetterContent';
import useLetterWithTags from '../hooks/useLetterWithTags';
import TagList from '../components/TagList';
import style from './styles';
interface ReceivedLetterProps {
  letterId: number;
  onNext: () => void;
}

const ReceivedLetter = ({ letterId, onNext }: ReceivedLetterProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: patchToss, isPending: isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionToss,
  });

  const handleTossLetter = async () => {
    await patchToss(receptionLetter.letterId);
    queryClient.invalidateQueries({ queryKey: letterOptions.all });
    navigate(ROUTER_PATHS.ROOT);
  };

  return (
    <LetterContent>
      <LetterCard isOpen={true}>
        <TagList tags={receptionLetter.tagList} />
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
        <Button variant="secondary" size="sm" onClick={handleTossLetter}>
          {isPending ? <LoadingSpinner /> : '다시 흘려보내기'}
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
