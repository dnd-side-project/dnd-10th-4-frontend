import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { letterWrite } from '@/constants/schemaLiteral';
import useBoolean from '@/hooks/useBoolean';
import LetteWriteHeader from './components/LetterWriteHeader';
import { LetterWriteButton, LetterPaper } from './components';
import style from './styles';
import LetterWriteBottomSheet from './components/LetterWriteBottomSheet';

const L = letterWrite;

const writeSchema = z.object({
  age: z.array(z.number()).min(L.age.value, { message: L.age.message }),
  content: z
    .string()
    .min(L.content.min.value, { message: L.content.min.message })
    .max(L.content.max.value, { message: L.content.max.message }),
  gender: z.string().min(L.gender.value, { message: L.gender.message }),
  worryType: z
    .string()
    .min(L.worryType.value, { message: L.worryType.message }),
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

export { writeSchema };
export type WriteInputs = z.infer<typeof writeSchema>;

const LetterWritePage = () => {
  const LetterWriteBottomSheetProps = useBoolean(false);

  const methods = useForm<WriteInputs>({
    resolver: zodResolver(writeSchema),
    defaultValues: {
      age: [],
      content: '',
      gender: '',
      worryType: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const showToast = (message: string) => {
    toast.warn(message, {
      position: 'bottom-center',
      autoClose: 1500,
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    if (errors.worryType || errors.gender || errors.age) {
      showToast('보낼 사람을 선택하세요');
    } else if (errors.content) {
      const message =
        watch('content').length === 0
          ? '내용을 입력하세요'
          : errors.content.message;
      showToast(message);
    } else if (errors.image) {
      showToast(errors.image.message?.toString());
    }
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <div css={style.container}>
        <LetteWriteHeader />
        <form
          onSubmit={handleSubmit(LetterWriteBottomSheetProps.on)}
          css={style.contentWrapper}
        >
          <LetterPaper />
          <LetterWriteButton />
        </form>
      </div>
      <LetterWriteBottomSheet {...LetterWriteBottomSheetProps} />
    </FormProvider>
  );
};
export default LetterWritePage;
