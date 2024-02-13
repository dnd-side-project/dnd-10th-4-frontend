import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { ROUTER_PATHS } from '@/router';
import { CaretLeft } from '@/assets/icons';
import Header from '@/components/Header';
import { letterWrite } from '@/constants/schemaLiteral';
import letterAPI from '@/api/letter/apis';
import style from './styles';
import { LetterWriteContent, LetterWriteBottom } from './components';

const L = letterWrite;

const schema = z.object({
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

export type Inputs = z.infer<typeof schema>;

const LetterWritePage = () => {
  const navigate = useNavigate();

  const methods = useForm<Inputs>({
    resolver: zodResolver(schema),
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
  } = methods;

  const { mutateAsync: postLetter, isPending: isPosting } = useMutation({
    mutationFn: letterAPI.postLetter,
  });

  const onSubmit = async (data: Inputs) => {
    await postLetter(data);
  };

  return (
    <FormProvider {...methods}>
      <div css={style.container}>
        <Header
          css={style.header}
          leftContent={
            <CaretLeft
              strokeWidth={2.5}
              color="white"
              onClick={() => navigate(ROUTER_PATHS.ROOT)}
            />
          }
        />
        <form onSubmit={handleSubmit(onSubmit)} css={style.contentWrapper}>
          <LetterWriteContent />
          <LetterWriteBottom isPosting={isPosting} />
        </form>
        {/** 임시 에러 출력용 */}
        {errors.worryType && <p>{errors.worryType.message}</p>}
        {errors.gender && <p>{errors.gender.message}</p>}
        {errors.age && <p>{errors.age.message}</p>}
        {errors.content && <p>{errors.content.message}</p>}
        {errors.image && <p>{errors.image.message?.toString()}</p>}
      </div>
    </FormProvider>
  );
};
export default LetterWritePage;
