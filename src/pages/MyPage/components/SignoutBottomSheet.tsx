import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import useBoolean from '@/hooks/useBoolean';
import STORAGE_KEYS from '@/constants/storageKeys';
import { ROUTER_PATHS } from '@/router';

interface SignoutBottomSheetProps extends ReturnType<typeof useBoolean> {}

const SignoutBottomSheet = ({ value, on, off }: SignoutBottomSheetProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.refreshToken);
    navigate(ROUTER_PATHS.SIGNIN);
    off();
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>로그아웃하시겠어요?</BottomSheet.Title>
      <BottomSheet.Description css={css({ marginTop: '0.75rem' })}>
        언제든 다시 로그인 할 수 있어요
      </BottomSheet.Description>
      <BottomSheet.Divider />
      <BottomSheet.ButtonSection>
        <Button variant="cancel" size="sm" onClick={off}>
          취소
        </Button>
        <Button variant="primary" size="sm" onClick={handleLogout}>
          로그아웃
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default SignoutBottomSheet;
