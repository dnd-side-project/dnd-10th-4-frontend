import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import Tooltip from '@/components/Tooltip';
import useBoolean from '@/hooks/useBoolean';
import StorageBottomSheet from './StorageBottomSheet';

interface BottomButtonProps {
  letterId: number;
}

const BottomButton = ({ letterId }: BottomButtonProps) => {
  const storageBottomSheetProps = useBoolean(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar css={styles.navbar}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate(ROUTER_PATHS.ROOT)}
        >
          닫기
        </Button>
        <Tooltip delay={10000}>
          <Tooltip.Trigger>
            <Button
              variant="primary"
              size="sm"
              onClick={storageBottomSheetProps.on}
            >
              보관하기
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="top">
            편지를 보관하여 간직해보세요
          </Tooltip.Content>
        </Tooltip>
      </Navbar>
      <StorageBottomSheet {...storageBottomSheetProps} letterId={letterId} />
    </>
  );
};

export default BottomButton;

const styles = {
  navbar: css`
    width: 100%;
    padding-inline: 0;
  `,
};
