import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import letterAPI from '@/api/letter/apis';
import ERROR_RESPONSES from '@/constants/errorMessages';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import letterOptions from '@/api/letter/queryOptions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { WriteInputs } from '..';

interface LetterWriteBottomSheetProps extends ReturnType<typeof useBoolean> {}

const WriteBottomSheet = ({ value, on, off }: LetterWriteBottomSheetProps) => {
  const { handleSubmit } = useFormContext<WriteInputs>();
  const navigate = useNavigate();

  const { mutate: postLetter, isPending } = useMutation({
    mutationFn: letterAPI.postLetter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    },
  });
  const queryClient = useQueryClient();

  const onSubmit = (data: WriteInputs) => {
    console.log(data);
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

  return (
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
          disabled={isPending}
          variant="primary"
          onClick={() => {
            handleSubmit(onSubmit)();
            off();
          }}
        >
          {isPending ? <LoadingSpinner /> : <>보내기</>}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default WriteBottomSheet;
