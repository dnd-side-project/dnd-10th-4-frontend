import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { letterWrite } from '@/constants/schemaLiteral';
import LetteWriteHeader from './components/LetterWriteHeader';
import style from './styles';
import LetterWriteContainer from './components/LetterWriteContainer';

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
  const methods = useForm<WriteInputs>({
    resolver: zodResolver(writeSchema),
    shouldFocusError: false,
    defaultValues: {
      age: [],
      content: '',
      gender: '',
      worryType: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <div css={style.container}>
        <LetteWriteHeader />
        <LetterWriteContainer />
      </div>
    </FormProvider>
  );
};
export default LetterWritePage;
