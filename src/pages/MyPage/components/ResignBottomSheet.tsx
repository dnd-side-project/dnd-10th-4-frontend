import { css } from '@emotion/react';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import useBoolean from '@/hooks/useBoolean';
import COLORS from '@/constants/colors';

interface ResignBottomSheetProps extends ReturnType<typeof useBoolean> {}

const ResignBottomSheet = ({ value, on, off }: ResignBottomSheetProps) => {
  const handleLogout = () => {
    alert('TODO: API 연동 예정');
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
        <Button variant="danger" size="sm" onClick={handleLogout}>
          탈퇴하기
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default ResignBottomSheet;
