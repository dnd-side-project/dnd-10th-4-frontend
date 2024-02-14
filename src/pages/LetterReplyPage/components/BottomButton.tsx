import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { useMutation, QueryClient } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { TreasureChestOutline } from '@/assets/icons';
import { ROUTER_PATHS } from '@/router';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import LoadingSpinner from '@/components/LoadingSpinner';
import Tooltip from '@/components/Tooltip';

interface BottomButtonProps {
  letterId: number;
}

const BottomButton = ({ letterId }: BottomButtonProps) => {
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const navigateToRoot = () => {
    navigate(ROUTER_PATHS.ROOT);
  };

  const { mutateAsync: patchStorage, isPending: isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionStorage,
  });

  const handleStorageLetter = async () => {
    await patchStorage(letterId);
    queryClient.invalidateQueries({ queryKey: letterOptions.all });
    navigateToRoot();
  };

  return (
    <Navbar css={styles.navbar}>
      <Button variant="secondary" size="sm" onClick={navigateToRoot}>
        닫기
      </Button>
      <Tooltip
        side="top"
        delay={10000}
        triggerContent={
          <Button variant="primary" size="sm" onClick={handleStorageLetter}>
            {isPending ? (
              <LoadingSpinner />
            ) : (
              <>
                <TreasureChestOutline />
                보관하기
              </>
            )}
          </Button>
        }
      >
        편지를 보관하면 <br /> 시간이 지나도 사라지지 않아요
      </Tooltip>
    </Navbar>
  );
};

export default BottomButton;

const styles = {
  navbar: css`
    width: 100%;
    padding-inline: 0;
  `,
};
