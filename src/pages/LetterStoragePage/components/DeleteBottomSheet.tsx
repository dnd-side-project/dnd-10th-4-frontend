import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import useBoolean from '@/hooks/useBoolean';
import LoadingSpinner from '@/components/LoadingSpinner';

interface DeleteBottomSheetProps extends ReturnType<typeof useBoolean> {
  letterId: number;
  modalOff: () => void;
  type: 'reply' | 'sent';
}

const DeleteBottomSheet = ({
  value,
  on,
  off,
  letterId,
  modalOff,
  type,
}: DeleteBottomSheetProps) => {
  const queryClient = useQueryClient();

  const invalidateAllLetters = () => {
    queryClient.invalidateQueries({ queryKey: letterOptions.all });
  };

  const { mutate: mutateReply, isPending: isPendingReply } = useMutation({
    mutationFn: letterAPI.patchDeleteLetter,
    onSuccess: invalidateAllLetters,
  });

  const { mutate: mutateSent, isPending: isPendingSent } = useMutation({
    mutationFn: letterAPI.patchDeleteSend,
    onSuccess: invalidateAllLetters,
  });

  const handleDeleteLetter = async () => {
    const handleSuccess = () => {
      toast.success('편지가 삭제됐어요', {
        autoClose: 1500,
        position: 'bottom-center',
      });
    };

    const handleSettled = () => {
      off();
      modalOff();
    };

    const mutateLetter = type === 'reply' ? mutateReply : mutateSent;

    mutateLetter(letterId, {
      onSuccess: handleSuccess,
      onSettled: handleSettled,
    });
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>편지를 정말 버릴까요?</BottomSheet.Title>
      <BottomSheet.Description>
        <p>
          편지를 버리면 다시 복구 할 수 없어요. <br /> 정말로 버리시겠어요?
        </p>
      </BottomSheet.Description>
      <BottomSheet.ButtonSection>
        <Button variant="cancel" onClick={off}>
          취소
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleDeleteLetter();
          }}
          disabled={isPendingReply || isPendingSent}
        >
          {isPendingReply || isPendingSent ? (
            <LoadingSpinner />
          ) : (
            <>편지 버리기</>
          )}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default DeleteBottomSheet;
