import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
import LetterContent from '../components/LetterContent';
import useLetterReply from '../hooks/useLetterReply';

interface ReplyLetterProps {
  letterId: number;
}

const ReplyLetter = ({ letterId }: ReplyLetterProps) => {
  const data = useLetterReply(letterId);

  return (
    <LetterCard isOpen={true}>
      <LetterContent
        receiver={data.receiverNickname}
        content={data.repliedContent}
        date={formatDate(new Date(data.createdAt))}
        sender={data.senderNickname}
      />
    </LetterCard>
  );
};

export default ReplyLetter;
