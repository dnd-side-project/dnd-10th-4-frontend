import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LetterCard from '@/components/LetterCard';
import LetterAccordion from '@/components/LetterAccordion';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import ImageUploadButton from '@/components/ImageUploadButton';
import LetterTextarea from '@/components/LetterTextarea';
import useBoolean from '@/hooks/useBoolean';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterHeader from '@/components/LetterHeader';
import Chip from '@/components/Chip';
import letterAPI from '@/api/letter/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import { letterWrite } from '@/constants/schemaLiteral';
import { ReceptionLetterType } from '../hooks/useLetterTag';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import LetterContent from '../components/LetterContent';
import style from './styles';

interface ReplyToLetterProps {
  receptionLetter: ReceptionLetterType;
  onPrev: () => void;
}

const L = letterWrite;

const schema = z.object({
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

type Inputs = z.infer<typeof schema>;

const ReplyToLetter = ({ receptionLetter, onPrev }: ReplyToLetterProps) => {
  const methods = useForm<Inputs>({
    resolver: zodResolver(schema),
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

  const { value: isOpen, toggle: accordionToggle } = useBoolean(false);

  const tagList = receptionLetter.tagList;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
      setValue('image', file);
    }
  };

  const { mutateAsync: patchReply, isPending: isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionReply,
  });

  const onSubmit = async (data: Inputs) => {
    const formData = new FormData();
    formData.append('replyContent', data.replyContent);
    formData.append('image', data.image);
    await patchReply({ letterId: receptionLetter.letterId, body: formData });
  };

  return (
    <LetterContent isBlock={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={style.letter}>
          <LetterCard css={{ marginBottom: '1rem' }}>
            <div css={style.tag}>
              {tagList.map((tag) => (
                <Chip key={tag} variant="filter">
                  {tag}
                </Chip>
              ))}
            </div>
            <LetterAccordion
              isOpen={isOpen}
              onToggle={accordionToggle}
              id="1"
              text={receptionLetter.content}
              date={new Date(receptionLetter.createdAt)}
              nickname={receptionLetter.senderNickname}
              line={2}
              type="send"
            />
            <ReceptionPolaroid />
          </LetterCard>
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
