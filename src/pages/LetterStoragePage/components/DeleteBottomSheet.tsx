import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import ERROR_RESPONSES from '@/constants/errorMessages';

interface DeleteBottomSheetProsp {
  value: boolean;
  on: () => void;
  off: () => void;
  letterId: number;
  type?: 'Letter' | 'Send';
}

const DeleteBottomSheet = ({
  value,
  on,
  off,
  letterId,
  type = 'Letter',
}: DeleteBottomSheetProsp) => {
  const queryClient = useQueryClient();

  const { mutateAsync: patchDeleteLetter } = useMutation({
    mutationFn: letterAPI.patchDeleteLetter,
  });

  const { mutateAsync: patchDeleteSend } = useMutation({
    mutationFn: letterAPI.patchDeleteSend,
  });

  const handleDeleteLetter = async (letterId: number) => {
    try {
      if (type === 'Letter') {
        await patchDeleteLetter(letterId);
      } else {
        await patchDeleteSend(letterId);
      }
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
      off();
      toast.error('편지가 삭제됐어요', {
        autoClose: 1500,
        position: 'bottom-center',
      });
    } catch (error) {
      if (
        isAxiosError(error) &&
        error.response?.data === ERROR_RESPONSES.accessDeniedLetter
      ) {
        console.error(error.response.data);
      } else {
        throw error;
      }
    }
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
            handleDeleteLetter(letterId);
            off();
          }}
        >
          편지 버리기
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default DeleteBottomSheet;
