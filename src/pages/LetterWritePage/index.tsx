import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import { letterWrite } from '@/constants/schemaLiteral';
import letterAPI from '@/api/letter/apis';
import ERROR_RESPONSES from '@/constants/errorMessages';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import letterOptions from '@/api/letter/queryOptions';
import LetteWriteHeader from './components/LetterWriteHeader';
import { LetterWriteBottom, LetterPaper } from './components';
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

export { writeSchema };
export type WriteInputs = z.infer<typeof writeSchema>;

const LetterWritePage = () => {
  const navigate = useNavigate();
  const { value, on, off } = useBoolean(false);

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

  const { mutate: postLetter, isPending } = useMutation({
    mutationFn: letterAPI.postLetter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    },
  });
  const queryClient = useQueryClient();

  const onSubmit = (data: WriteInputs) => {
    postLetter(data, {
      onSuccess: () => {
        toast.success('편지를 바다에 띄어보냈어요', {
          position: 'bottom-center',
          autoClose: 1500,
        });

        navigate(ROUTER_PATHS.ROOT);
      },
      onError: (error) => {
        if (
          isAxiosError(error) &&
          error.response?.data === ERROR_RESPONSES.exceedSendLimit
        ) {
          navigate(ROUTER_PATHS.ROOT);
        }
      },
    });
  };

  useEffect(() => {
    if (errors.worryType || errors.gender || errors.age) {
      toast.warn('보낼 사람을 선택하세요', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else if (errors.content) {
      const message =
        watch('content').length === 0
          ? '내용을 입력하세요'
          : errors.content.message;
      toast.warn(message, {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else if (errors.image) {
      toast.warn(errors.image.message?.toString(), {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <div css={style.container}>
        <LetteWriteHeader />
        <form onSubmit={handleSubmit(on)} css={style.contentWrapper}>
          <LetterPaper />
          <LetterWriteBottom isPending={isPending} />
        </form>
      </div>
      <BottomSheet open={value} onOpen={on} onClose={off}>
        <BottomSheet.Title>편지를 보낼까요?</BottomSheet.Title>
        <BottomSheet.Description>
          바다로 띄어보낸 편지는 수정할 수 없어요
        </BottomSheet.Description>
        <BottomSheet.ButtonSection>
          <Button variant="cancel" onClick={off}>
            취소
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit(onSubmit)();
              off();
            }}
          >
            보내기
          </Button>
        </BottomSheet.ButtonSection>
      </BottomSheet>
    </FormProvider>
  );
};
export default LetterWritePage;
