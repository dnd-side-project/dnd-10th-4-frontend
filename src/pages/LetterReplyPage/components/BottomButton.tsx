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

const BottomButton = () => {
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const { mutateAsync: patchStorage, isPending: isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionStorage,
  });

  const handleStorageLetter = async () => {
    await patchStorage(1);
    queryClient.invalidateQueries({ queryKey: letterOptions.all });
    navigate(ROUTER_PATHS.ROOT);
  };

  return (
    <Navbar css={styles.navbar}>
      <Button
        variant="semi-transparent-unaccent"
        size="sm"
        onClick={() => navigate(ROUTER_PATHS.ROOT)}
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
