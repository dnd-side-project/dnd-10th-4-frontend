import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import LoadingSpinner from '@/components/LoadingSpinner';
import Tooltip from '@/components/Tooltip';
import ERROR_RESPONSES from '@/constants/errorMessages';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';

interface BottomButtonProps {
  letterId: number;
}

const BottomButton = ({ letterId }: BottomButtonProps) => {
  const { value, on, off } = useBoolean(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: patchStorage, isPending } = useMutation({
    mutationFn: letterAPI.patchReplyStorage,
  });

  const handleStorageLetter = async () => {
    try {
      await patchStorage(letterId);
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
      toast.success('편지를 보관함에 넣었어요', {
        autoClose: 1500,
        position: 'bottom-center',
      });
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
    <>
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
              onClick={on}
            >
              {isPending ? <LoadingSpinner /> : <>보관하기</>}
            </Button>
          }
        >
          편지를 보관하여 간직해보세요
        </Tooltip>
      </Navbar>
      <BottomSheet open={value} onOpen={on} onClose={off}>
        <BottomSheet.Title>편지를 보관함에 저장할까요?</BottomSheet.Title>
        <BottomSheet.Description>
          편지를 보관함에 저장해 언제든지 볼 수 있어요.
        </BottomSheet.Description>
        <BottomSheet.ButtonSection>
          <Button variant="cancel" onClick={off}>
            취소
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              off();
              handleStorageLetter();
            }}
          >
            보관하기
          </Button>
        </BottomSheet.ButtonSection>
      </BottomSheet>
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
