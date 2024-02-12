import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, QueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import LetterCard from '@/components/LetterCard';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import ImageUploadButton from '@/components/ImageUploadButton';
import LetterTextarea from '@/components/LetterTextarea';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterHeader from '@/components/LetterHeader';
import letterAPI from '@/api/letter/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import { letterWrite } from '@/constants/schemaLiteral';
import letterOptions from '@/api/letter/queryOptions';
import LetterContent from '../components/LetterContent';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import { ReceptionLetterType } from '../hooks/useLetterTag';
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
  receptionLetter: ReceptionLetterType;
  onPrev: () => void;
}

const ReplyToLetter = ({ receptionLetter, onPrev }: ReplyToLetterProps) => {
  const queryClient = new QueryClient();

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
      setValue('image', file);
    }
  };

  const { mutateAsync: patchReply, isPending: isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionReply,
  });

  const onSubmit = async (data: ReplyInputs) => {
    await patchReply({ letterId: receptionLetter.letterId, body: data });
    queryClient.invalidateQueries({ queryKey: letterOptions.all });
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
            {watch('image') && (
              <ReceptionPolaroid img={URL.createObjectURL(watch('image')[0])} />
            )}
          </LetterCard>
        </div>
        <Navbar css={style.navbar}>
          <Button
            type="button"
            variant="semi-transparent-unaccent"
            size="sm"
            onClick={onPrev}
          >
            취소
          </Button>
          <Button type="submit" variant="semi-transparent" size="sm">
            {isPending ? <LoadingSpinner /> : '답장 보내기'}
          </Button>
          <ImageUploadButton onChangeImage={handleFileChange} />
        </Navbar>
      </form>
      {/** 임시 에러 출력용 */}
      {errors.replyContent && <p>{errors.replyContent.message}</p>}
      {errors.image && <p>{errors.image.message?.toString()}</p>}
    </LetterContent>
  );
};

export default ReplyToLetter;
