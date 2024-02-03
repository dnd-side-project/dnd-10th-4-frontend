import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { CaretLeft } from '@/assets/icons';
import Header from '@/components/Header';
import style from './styles';
import { LetterWriteContent, LetterWriteBottom } from './components';

const errorMessages = {
  age: '편지를 받을 사람의 나이를 선택해주세요.',
  content: '편지 내용은 10자 이상이어야 합니다.',
  gender: '편지를 받을 사람의 성별를 선택해주세요.',
  concern: '편지의 고민을 선택해주세요.',
};

const schema = z.object({
  age: z.array(z.number()).min(2, { message: errorMessages.age }),
  content: z.string().min(10, { message: errorMessages.content }).max(300),
  gender: z.string().min(1, { message: errorMessages.gender }),
  concern: z.string().min(1, { message: errorMessages.concern }),
  image: z.undefined().or(z.instanceof(File)),
});

const LetterWritePage = () => {
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
          leftContent={<CaretLeft strokeWidth={2.5} color="white" />}
        />
        <form onSubmit={handleSubmit(onSubmit)} css={style.contentWrapper}>
          <LetterWriteContent />
          <LetterWriteBottom />
        </form>
        {errors.concern && <p>{errors.concern.message}</p>}
        {errors.gender && <p>{errors.gender.message}</p>}
        {errors.age && <p>{errors.age.message}</p>}
        {errors.content && <p>{errors.content.message}</p>}
      </div>
    </FormProvider>
  );
};
export default LetterWritePage;
