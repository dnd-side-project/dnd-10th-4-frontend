import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from '@/components/Button';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import BottomSheet from '@/components/BottomSheet';
import LoadingSpinner from '@/components/LoadingSpinner';
import useBoolean from '@/hooks/useBoolean';

interface StorageBottomSheetProps extends ReturnType<typeof useBoolean> {
  letterId: number;
}

const StorageBottomSheet = ({
  value,
  on,
  off,
  letterId,
}: StorageBottomSheetProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: letterAPI.patchReplyStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    },
  });

  const handleStorageLetter = async () => {
    mutate(letterId, {
      onSuccess: () => {
        toast.success('편지를 보관함에 넣었어요', {
          autoClose: 1500,
          position: 'bottom-center',
        });
        navigate(ROUTER_PATHS.ROOT);
      },
    });
    off();
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>편지를 보관함에 저장할까요?</BottomSheet.Title>
      <BottomSheet.Description>
        편지를 보관함에 저장해 언제든지 볼 수 있어요.
      </BottomSheet.Description>
      <BottomSheet.ButtonSection>
        <Button variant="cancel" onClick={off}>
          취소
        </Button>
        <Button
          disabled={isPending}
          variant="primary"
          onClick={() => {
            handleStorageLetter();
          }}
        >
          {isPending ? <LoadingSpinner /> : <>보관하기</>}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default StorageBottomSheet;
