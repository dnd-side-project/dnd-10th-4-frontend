import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import Button from '@/components/Button';
import letterAPI from '@/api/letter/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import letterOptions from '@/api/letter/queryOptions';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import ERROR_RESPONSES from '@/constants/errorMessages';

interface TossBottomSheetProps extends ReturnType<typeof useBoolean> {
  letterId: number;
}

const TossBottomSheet = ({
  value,
  on,
  off,
  letterId,
}: TossBottomSheetProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionPass,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    },
  });

  const handleTossLetter = async () => {
    mutate(letterId, {
      onSuccess: () => {
        toast.success('편지를 다시 바다에 흘러보냈어요', {
          autoClose: 1500,
          position: 'bottom-center',
        });
        navigate(ROUTER_PATHS.ROOT);
      },
      onError: (err) => {
        if (isAxiosError(err)) {
          if (
            err.response?.data === ERROR_RESPONSES.accessDeniedLetter ||
            err.response?.data === ERROR_RESPONSES.repliedLetterPass
          ) {
            navigate(ROUTER_PATHS.ROOT);
          }
        }
        off();
      },
    });
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>편지를 바다에 흘려보낼까요?</BottomSheet.Title>
      <BottomSheet.Description>
        흘려보낸 편지는 답장할 수 없어요
      </BottomSheet.Description>
      <BottomSheet.ButtonSection>
        <Button variant="cancel" onClick={off}>
          취소
        </Button>
        <Button
          disabled={isPending}
          variant="primary"
          onClick={() => {
            handleTossLetter();
          }}
        >
          {isPending ? <LoadingSpinner /> : <>흘려보내기</>}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default TossBottomSheet;
