import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
import ImageUploadButton from '@/components/ImageUploadButton';
import PolaroidModal from '@/components/PolaroidModal';
import IconButton from '@/components/IconButton';
import { TrashCan } from '@/assets/icons';
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
    setValue,
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    setValue('image', file);
  };

  const handleClickTrashCan = () => {
    setValue('image', undefined);
  };

  return (
    <LetterContent isBlock={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {watch('image') ? (
              <PolaroidModal
                topPosition={5}
                leftPosition={1.2}
                img={URL.createObjectURL(watch('image')[0])}
                headerRightContent={
                  <IconButton onClick={handleClickTrashCan}>
                    <TrashCan fill="white" />
                  </IconButton>
                }
              >
                <Button variant="secondary" size="sm">
                  닫기
                </Button>
              </PolaroidModal>
            ) : (
              <ImageUploadButton
                topPosition={5}
                leftPosition={1.2}
                onChangeImage={handleFileChange}
              />
            )}
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
      {errors.image && <p>{errors.image.message?.toString()}</p>}
    </LetterContent>
  );
};

export default ReplyToLetter;
