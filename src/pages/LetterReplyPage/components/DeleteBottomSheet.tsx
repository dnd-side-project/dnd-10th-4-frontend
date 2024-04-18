import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import useBoolean from '@/hooks/useBoolean';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import ERROR_RESPONSES from '@/constants/errorMessages';

interface DeleteBottomSheetProps extends ReturnType<typeof useBoolean> {
  letterId: number;
}

const DeleteBottomSheet = ({
  value,
  on,
  off,
  letterId,
}: DeleteBottomSheetProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: letterAPI.deleteReply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    },
  });

  const handleDeleteLetter = async () => {
    mutate(letterId, {
      onSuccess: () => {
        toast.success('편지가 삭제됐어요', {
          position: 'bottom-center',
        });
        navigate(ROUTER_PATHS.ROOT);
      },
      onError: (err) => {
        if (
          isAxiosError(err) &&
          err.response?.data === ERROR_RESPONSES.accessDeniedLetter
        ) {
          navigate(ROUTER_PATHS.ROOT);
        }
        off();
      },
    });
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>편지를 정말 버릴까요?</BottomSheet.Title>
      <BottomSheet.Description>
        편지를 버리면 다시 복구 할 수 없어요. <br /> 정말로 버리시겠어요?
      </BottomSheet.Description>
      <BottomSheet.ButtonSection>
        <Button variant="cancel" onClick={off}>
          취소
        </Button>
        <Button
          disabled={isPending}
          variant="danger"
          onClick={handleDeleteLetter}
        >
          {isPending ? <LoadingSpinner /> : <>편지 버리기</>}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default DeleteBottomSheet;
