import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
import useLetterWithTags from '../hooks/useLetterWithTags';
import LetterContent from '../components/LetterContent';
import ReceivedAccordionLetter from './ReceivedAccordionLetter';
import style from './styles';

const L = letterWrite;

const replySchema = z.object({
  replyContent: z
    .string()
    .min(L.content.min.value, { message: L.content.min.message })
    .max(L.content.max.value, { message: L.content.max.message }),
});

export type ReplyInputs = z.infer<typeof replySchema>;

interface ReplyToLetterProps {
  letterId: number;
  onPrev: () => void;
}

const ReplyToLetter = ({ letterId, onPrev }: ReplyToLetterProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);

  const navigate = useNavigate();

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
      await patchReply({ letterId: receptionLetter.letterId, body: data });
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
      navigate(ROUTER_PATHS.ROOT);
    } catch (error) {
      if (
        isAxiosError(error) &&
        (error.response?.data === ERROR_RESPONSES.accessDeniedLetter ||
          error.response?.data === ERROR_RESPONSES.alreadyReplyExist)
      ) {
        console.error(error.response?.data);
      } else {
        throw error;
      }
    }
  };

  return (
    <LetterContent isBlock={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={style.letter}>
          <ReceivedAccordionLetter receptionLetter={receptionLetter} />
          <LetterCard isOpen={true}>
            <LetterHeader
              title="To"
              nickname={receptionLetter.senderNickname}
            />
            <LetterTextarea
              {...register('replyContent')}
              name="replyContent"
              placeholder="하고싶은 이야기를 답장으로 적어보세요."
            />
            <LetterLengthDate letterLength={watch('replyContent').length} />
          </LetterCard>
        </div>
        <Navbar css={style.navbar}>
          <Button type="button" variant="secondary" size="sm" onClick={onPrev}>
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
      {/** 임시 에러 출력용 */}
      {errors.replyContent && <p>{errors.replyContent.message}</p>}
    </LetterContent>
  );
};

export default ReplyToLetter;
