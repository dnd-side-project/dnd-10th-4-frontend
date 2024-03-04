import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import useBoolean from '@/hooks/useBoolean';
import COLORS from '@/constants/colors';
import memberAPI from '@/api/member/apis';
import memberOptions from '@/api/member/queryOptions';
import STORAGE_KEYS from '@/constants/storageKeys';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import LoadingSpinner from '@/components/LoadingSpinner';

interface ResignBottomSheetProps extends ReturnType<typeof useBoolean> {}

const ResignBottomSheet = ({ value, on, off }: ResignBottomSheetProps) => {
  const { mutate, isPending } = useMutation({
    mutationFn: memberAPI.deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: memberOptions.detail().queryKey,
      });
    },
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleResign = () => {
    mutate(undefined, {
      onSuccess: () => {
        toast.success('탈퇴되었습니다.', { position: 'bottom-center' });
        localStorage.removeItem(STORAGE_KEYS.accessToken);
        localStorage.removeItem(STORAGE_KEYS.refreshToken);
        navigate(ROUTER_PATHS.SIGNIN);
        off();
      },
    });
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>탈퇴하시겠어요?</BottomSheet.Title>
      <BottomSheet.Description
        css={css({ marginTop: '0.75rem', color: COLORS.danger })}
      >
        모든 정보가 삭제되며, 되돌릴 수 없어요.
      </BottomSheet.Description>
      <BottomSheet.Divider />
      <BottomSheet.ButtonSection>
        <Button variant="cancel" size="sm" onClick={off}>
          취소
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={handleResign}
          disabled={isPending}
        >
          {isPending ? <LoadingSpinner size="1.25rem" /> : '탈퇴하기'}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default ResignBottomSheet;
