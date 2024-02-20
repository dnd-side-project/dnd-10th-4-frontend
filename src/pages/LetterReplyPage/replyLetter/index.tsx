import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
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
    </LetterCard>
  );
};

export default ReplyLetter;
