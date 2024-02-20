import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider, FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ROUTER_PATHS } from '@/router';
import { CaretLeft } from '@/assets/icons';
import Header from '@/components/Header';
import { letterWrite } from '@/constants/schemaLiteral';
import letterAPI from '@/api/letter/apis';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { LetterWriteContent, LetterWriteBottom } from './components';
import style from './styles';

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

export type WriteInputs = z.infer<typeof writeSchema>;

const LetterWritePage = () => {
  const navigate = useNavigate();

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
  } = methods;

  const { mutateAsync: postLetter, isPending } = useMutation({
    mutationFn: letterAPI.postLetter,
  });

  const onSubmit = async (data: WriteInputs) => {
    try {
      await postLetter(data);
      toast.success('편지를 성공적으로 작성했어요!', {
        position: 'bottom-center',
        autoClose: 1500,
      });
      navigate(ROUTER_PATHS.ROOT);
    } catch (error) {
      if (isAxiosError(error)) {
        if (
          error.response?.data === ERROR_RESPONSES.unSupportExt ||
          error.response?.data === ERROR_RESPONSES.noExt
        ) {
          toast.error(error.response?.data, {
            position: 'bottom-center',
          });
        } else if (error.response?.data === ERROR_RESPONSES.exceedSendLimit) {
          toast.error(error.response?.data, {
            position: 'bottom-center',
          });
          navigate(ROUTER_PATHS.ROOT);
        } else {
          throw error;
        }
      } else {
        throw error;
      }
    }
  };

  useEffect(() => {
    const showErrorToast = (error: FieldError) => {
      if ('message' in error) {
        toast.warn(error.message, {
          position: 'bottom-center',
          autoClose: 1500,
        });
      }
    };

    Object.values(errors).forEach((error) => {
      showErrorToast(error as FieldError);
    });
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <div css={style.container}>
        <Header
          css={style.header}
          leftContent={
            <CaretLeft
              strokeWidth={2.5}
              stroke="white"
              onClick={() => navigate(-1)}
            />
          }
        />
        <form onSubmit={handleSubmit(onSubmit)} css={style.contentWrapper}>
          <LetterWriteContent />
          <LetterWriteBottom isPending={isPending} />
        </form>
      </div>
    </FormProvider>
  );
};
export default LetterWritePage;
