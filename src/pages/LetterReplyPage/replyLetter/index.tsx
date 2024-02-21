import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
import PolaroidModal from '@/components/PolaroidModal';
import Button from '@/components/Button';
import LetterContent from '../components/LetterContent';
import useLetterReplyWithTag from '../hooks/useLetterReplyWithTag';

interface ReplyLetterProps {
  letterId: number;
}

const ReplyLetter = ({ letterId }: ReplyLetterProps) => {
  const { replyLetter } = useLetterReplyWithTag(letterId);

  return (
    <LetterCard isOpen={true}>
      <LetterContent
        receiver={replyLetter.receiverNickname}
        content={replyLetter.repliedContent}
        date={formatDate(new Date(replyLetter.repliedAt))}
        sender={replyLetter.senderNickname}
      />
      {replyLetter.replyImagePath !== null && (
        <PolaroidModal
          topPosition={5.2}
          leftPosition={1.2}
          img={replyLetter.replyImagePath}
        >
          <Button variant="secondary" size="sm">
            닫기
          </Button>
        </PolaroidModal>
      )}
    </LetterCard>
  );
};

export default ReplyLetter;
