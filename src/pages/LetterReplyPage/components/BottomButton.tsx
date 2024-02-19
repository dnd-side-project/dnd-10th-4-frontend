import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { TreasureChestOutline } from '@/assets/icons';
import { ROUTER_PATHS } from '@/router';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import LoadingSpinner from '@/components/LoadingSpinner';
import Tooltip from '@/components/Tooltip';
import ERROR_RESPONSES from '@/constants/errorMessages';

interface BottomButtonProps {
  letterId: number;
}

const BottomButton = ({ letterId }: BottomButtonProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: patchStorage, isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionStorage,
  });

  const handleStorageLetter = async () => {
    try {
      await patchStorage(letterId);
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
      navigate(ROUTER_PATHS.ROOT);
    } catch (error) {
      if (
        isAxiosError(error) &&
        (error.response?.data === ERROR_RESPONSES.accessDeniedLetter ||
          error.response?.data === ERROR_RESPONSES.unAnsweredLetterStore)
      ) {
        console.error(error.response?.data);
      } else {
        throw error;
      }
    }
  };

  return (
    <Navbar css={styles.navbar}>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => navigate(ROUTER_PATHS.ROOT)}
      >
        닫기
      </Button>
      <Tooltip
        side="top"
        delay={10000}
        triggerContent={
          <Button
            disabled={isPending}
            variant="primary"
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
