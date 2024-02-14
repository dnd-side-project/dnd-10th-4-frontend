import { useSuspenseQuery } from '@tanstack/react-query';
import LetterCard from '@/components/LetterCard';
import letterOptions from '@/api/letter/queryOptions';
import { formatDate } from '@/utils/dateUtils';
import LetterContent from '../components/LetterContent';

interface ReplyLetterProps {
  letterId: number;
}

const ReplyLetter = ({ letterId }: ReplyLetterProps) => {
  const { data } = useSuspenseQuery({
    ...letterOptions.singleReply(letterId),
  });

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
