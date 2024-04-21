import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
import PolaroidModal from '@/components/PolaroidModal';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { Download } from '@/assets/icons';
import { downloadImage } from '@/utils/downloadUtils';
import useLetterReplyWithTag from '../hooks/useLetterReplyWithTag';
import LetterContent from '../components/LetterContent';

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
          img={replyLetter.replyImagePath}
          headerRightContent={
            <IconButton
              id="download-button"
              onClick={() => downloadImage(replyLetter.replyImagePath!)}
            >
              <Download color="white" height={20} width={20} />
            </IconButton>
          }
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
