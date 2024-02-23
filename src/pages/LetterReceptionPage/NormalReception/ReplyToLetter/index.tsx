import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import LetterCard from '@/components/LetterCard';
import Button from '@/components/Button';
import LetterTextarea from '@/components/LetterTextarea';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterHeader from '@/components/LetterHeader';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import { ROUTER_PATHS } from '@/router';
import ERROR_RESPONSES from '@/constants/errorMessages';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import LetterContent from '../components/LetterContent';
import useLetterWithTags from '../hooks/useLetterWithTags';
import { ReplyInputs } from '..';
import ReplyButton from './ReplyButton';
import ReplyImage from './ReplyImage';
import style from './styles';
import ReceivedAccordionLetter from './ReceivedAccordionLetter';

interface ReplyToLetterProps {
  letterId: number;
  onPrev: () => void;
}

const ReplyToLetter = ({ letterId, onPrev }: ReplyToLetterProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);

  const navigate = useNavigate();
  const { value, on, off } = useBoolean(false);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useFormContext<ReplyInputs>();

  const { mutateAsync: patchReply, isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionReply,
  });

  const onSubmit = async (data: ReplyInputs) => {
    try {
      await patchReply({ letterId: receptionLetter.letterId, letter: data });
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
      navigate(ROUTER_PATHS.ROOT);
      toast.success('편지를 바다에 띄어보냈어요', {
        position: 'bottom-center',
        autoClose: 1500,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        if (
          error.response?.data === ERROR_RESPONSES.accessDeniedLetter ||
          error.response?.data === ERROR_RESPONSES.alreadyReplyExist
        ) {
          toast.error(error.response?.data, {
            position: 'bottom-center',
          });
          navigate(ROUTER_PATHS.ROOT);
        } else if (
          error.response?.data === ERROR_RESPONSES.unSupportExt ||
          error.response?.data === ERROR_RESPONSES.noExt
        ) {
          toast.error(error.response?.data, {
            position: 'bottom-center',
          });
        }
      } else {
        throw error;
      }
    }
  };

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
      <form onSubmit={handleSubmit(on)}>
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
        <ReplyButton isPending={isPending} onPrev={onPrev} />
      </form>
      <BottomSheet open={value} onOpen={on} onClose={off}>
        <BottomSheet.Title>답장을 보낼까요?</BottomSheet.Title>
        <BottomSheet.Description>
          낯선이에게 답장은 한번만 가능해요
        </BottomSheet.Description>
        <BottomSheet.ButtonSection>
          <Button variant="cancel" onClick={off}>
            취소
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit(onSubmit)();
              off();
            }}
          >
            보내기
          </Button>
        </BottomSheet.ButtonSection>
      </BottomSheet>
    </LetterContent>
  );
};

export default ReplyToLetter;
