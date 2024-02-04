import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { ROUTER_PATHS } from '@/router';
import { CaretLeft } from '@/assets/icons';
import Header from '@/components/Header';
import { letterWriteMsg } from '@/constants/errorMessage';
import { LetterWriteContent, LetterWriteBottom } from './components';
import style from './styles';

const schema = z.object({
  age: z.array(z.number()).min(2, { message: letterWriteMsg.age }),
  content: z.string().min(10, { message: letterWriteMsg.content }).max(300),
  gender: z.string().min(1, { message: letterWriteMsg.gender }),
  concern: z.string().min(1, { message: letterWriteMsg.concern }),
  image: z.undefined().or(z.instanceof(File)),
});

const LetterWritePage = () => {
  const navigate = useNavigate();

  const methods = useForm({
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
