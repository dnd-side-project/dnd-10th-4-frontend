import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import useBoolean from '@/hooks/useBoolean';
import LetterHeader from '@/components/LetterHeader';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterTextarea from '@/components/LetterTextarea';
import LetterCard from '@/components/LetterCard';
import LetterContent from '../components/LetterContent';
import useLetterWithTags from '../hooks/useLetterWithTags';
import { ReplyInputs } from '..';
import ReplyButton from './ReplyButton';
import ReplyImage from './ReplyImage';
import style from './styles';
import ReceivedAccordionLetter from './ReceivedAccordionLetter';
import ReplyBottomSheet from './ReplyBottomSheet';

interface ReplyToLetterProps {
  letterId: number;
  onPrev: () => void;
}

const ReplyToLetter = ({ letterId, onPrev }: ReplyToLetterProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);
  const replyBottomSheetProps = useBoolean(false);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useFormContext<ReplyInputs>();

  useEffect(() => {
    if (errors.replyContent) {
      const message =
        watch('replyContent').length === 0
          ? '내용을 입력하세요'
          : errors.replyContent.message;
      toast.warn(message, {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else if (errors.image) {
      toast.warn(errors.image.message?.toString(), {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  }, [errors]);

  return (
    <LetterContent isBlock={true}>
      <form onSubmit={handleSubmit(replyBottomSheetProps.on)}>
        <div css={style.letter}>
          <ReceivedAccordionLetter receptionLetter={receptionLetter} />
          <LetterCard isOpen={true} css={style.card}>
            <LetterHeader
              title="To"
              nickname={receptionLetter.senderNickname}
            />
            <LetterTextarea
              {...register('replyContent')}
              name="replyContent"
              placeholder="하고싶은 이야기를 답장으로 적어보세요. (10자 이상)"
            />
            <LetterLengthDate letterLength={watch('replyContent').length} />
            <LetterHeader
              title="From"
              titlePosition="right"
              nickname={receptionLetter.receiverNickname ?? ''}
            />
            <ReplyImage />
          </LetterCard>
        </div>
        <ReplyButton onPrev={onPrev} />
      </form>
      <ReplyBottomSheet {...replyBottomSheetProps} letterId={letterId} />
    </LetterContent>
  );
};

export default ReplyToLetter;
