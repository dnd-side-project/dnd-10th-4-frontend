import { useForm, FormProvider } from 'react-hook-form';
import { CaretLeft } from '@/assets/icons';
import Header from '@/components/Header';
import style from './styles';
import { LetterWriteContent, LetterWriteBottom } from './components';

const LetterWritePage = () => {
  const methods = useForm({
    defaultValues: {
      content: '',
    },
  });

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
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          css={style.contentWrapper}
        >
          <LetterWriteContent />
          <LetterWriteBottom />
        </form>
      </div>
    </FormProvider>
  );
};
export default LetterWritePage;
