import { toast } from 'react-toastify';
import axios from 'axios';
import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
import PolaroidModal from '@/components/PolaroidModal';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { Download } from '@/assets/icons';
import LetterContent from '../components/LetterContent';
import useLetterReplyWithTag from '../hooks/useLetterReplyWithTag';

interface ReplyLetterProps {
  letterId: number;
}

const ReplyLetter = ({ letterId }: ReplyLetterProps) => {
  const { replyLetter } = useLetterReplyWithTag(letterId);

  const handleDownload = async () => {
    const response = await axios.get(replyLetter.replyImagePath!, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();

    window.URL.revokeObjectURL(url);

    toast.success('사진이 저장됐어요', {
      position: 'bottom-center',
    });
  };

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
            <IconButton id="download-button" onClick={handleDownload}>
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
