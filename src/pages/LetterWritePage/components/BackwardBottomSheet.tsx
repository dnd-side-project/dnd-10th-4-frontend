import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import { ROUTER_PATHS } from '@/constants/routerPaths';

const BackwardBottomSheet = ({
  value,
  on,
  off,
}: ReturnType<typeof useBoolean>) => {
  const navigate = useNavigate();

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>편지쓰기를 취소할까요?</BottomSheet.Title>
      <BottomSheet.Description>
        편지 작성 취소시, <br /> 작성중인 글과 사진은 저장되지 않아요.
      </BottomSheet.Description>
      <BottomSheet.ButtonSection>
        <Button variant="cancel" onClick={off}>
          계속 쓰기
        </Button>
        <Button variant="danger" onClick={() => navigate(ROUTER_PATHS.ROOT)}>
          작성 취소
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default BackwardBottomSheet;
