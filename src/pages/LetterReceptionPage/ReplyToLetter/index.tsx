import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { isAxiosError } from 'axios';
import LetterCard from '@/components/LetterCard';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import LetterTextarea from '@/components/LetterTextarea';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterHeader from '@/components/LetterHeader';
import letterAPI from '@/api/letter/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import { letterWrite } from '@/constants/schemaLiteral';
import letterOptions from '@/api/letter/queryOptions';
import { ROUTER_PATHS } from '@/router';
import ERROR_RESPONSES from '@/constants/errorMessages';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import LetterContent from '../components/LetterContent';
import useLetterWithTags from '../hooks/useLetterWithTags';
import ReplyImage from './ReplyImage';
import style from './styles';
import ReceivedAccordionLetter from './ReceivedAccordionLetter';

const L = letterWrite;

const replySchema = z.object({
  replyContent: z
    .string()
    .min(L.content.min.value, { message: L.content.min.message })
    .max(L.content.max.value, { message: L.content.max.message }),
  image: z
    .any()
    .optional()
    .refine(
      (files) => !files || files[0].size <= L.image.maxFileSize.value,
      L.image.maxFileSize.message,
    )
    .refine(
      (files) => !files || L.image.acceptType.list.includes(files[0].type),
      L.image.acceptType.message,
    ),
});

export type ReplyInputs = z.infer<typeof replySchema>;

interface ReplyToLetterProps {
  letterId: number;
  onPrev: () => void;
}

const ReplyToLetter = ({ letterId, onPrev }: ReplyToLetterProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);

  const navigate = useNavigate();
  const { value, on, off } = useBoolean(false);
  const queryClient = useQueryClient();

  const methods = useForm<ReplyInputs>({
    resolver: zodResolver(replySchema),
    defaultValues: {
      replyContent: '',
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = methods;

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
    <FormProvider {...methods}>
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
                nickname={receptionLetter.receiverNickname}
              />
              <ReplyImage />
            </LetterCard>
          </div>
          <Navbar css={style.navbar}>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={onPrev}
            >
              취소
            </Button>
            <Button
              disabled={isPending}
              type="submit"
              variant="primary"
              size="sm"
            >
              {isPending ? <LoadingSpinner /> : '답장 보내기'}
            </Button>
          </Navbar>
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
    </FormProvider>
  );
};

export default ReplyToLetter;
