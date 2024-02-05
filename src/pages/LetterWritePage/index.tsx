import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { ROUTER_PATHS } from '@/router';
import { CaretLeft } from '@/assets/icons';
import Header from '@/components/Header';
import { letterWrite } from '@/constants/schemaLiteral';
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
  concern: z.string().min(L.concern.value, { message: L.concern.message }),
  image: z.any(),
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
      concern: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (inputData: object) => {
    const currentDate = new Date();

    const data = {
      ...inputData,
      date: currentDate,
    };

    console.log(data);
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
          <LetterWriteBottom />
        </form>
        {/** 임시 에러 출력용 */}
        {errors.concern && <p>{errors.concern.message}</p>}
        {errors.gender && <p>{errors.gender.message}</p>}
        {errors.age && <p>{errors.age.message}</p>}
        {errors.content && <p>{errors.content.message}</p>}
      </div>
    </FormProvider>
  );
};
export default LetterWritePage;
