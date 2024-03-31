import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import adminAPI from '@/api/admin/apis';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import LoadingSpinner from '@/components/LoadingSpinner';
import useBoolean from '@/hooks/useBoolean';

interface UserExpelBottomSheetProps extends ReturnType<typeof useBoolean> {
  expelEmail: string;
}

const UserExpelBottomSheet = ({
  expelEmail,
  value,
  on,
  off,
}: UserExpelBottomSheetProps) => {
  const { mutate, isPending } = useMutation({
    mutationFn: adminAPI.deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  const queryClient = useQueryClient();

  const handleExpel = () => {
    mutate(expelEmail, {
      onSuccess: () => {
        toast.success('회원을 탈퇴시켰습니다.', { position: 'bottom-center' });
        off();
      },
    });
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>회원을 탈퇴시키시겠어요?</BottomSheet.Title>
      <BottomSheet.Description>
        <p>회원을 탈퇴시키면 해당 회원의 모든 데이터가 삭제됩니다.</p>
        <p>정말로 {expelEmail} 회원을 탈퇴시키시겠어요?</p>
      </BottomSheet.Description>
      <BottomSheet.Divider />
      <BottomSheet.ButtonSection>
        <Button variant="cancel" size="sm" onClick={off}>
          취소
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={handleExpel}
          disabled={isPending}
        >
          {isPending ? <LoadingSpinner size="1.25rem" /> : '탈퇴 시키기'}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default UserExpelBottomSheet;
