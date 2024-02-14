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
      <Button
        variant="semi-transparent-unaccent"
        size="sm"
        onClick={navigateToRoot}
      >
        닫기
      </Button>
      <Button
        variant="semi-transparent"
        size="sm"
        onClick={handleStorageLetter}
      >
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <>
            <TreasureChestOutline />
            보관하기
          </>
        )}
      </Button>
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
