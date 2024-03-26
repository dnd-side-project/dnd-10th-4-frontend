import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import Button from '@/components/Button';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import ERROR_RESPONSES from '@/constants/errorMessages';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ReplyInputs } from '..';

interface ReplyBottomSheetProps extends ReturnType<typeof useBoolean> {
  letterId: number;
}

const ReplyBottomSheet = ({
  value,
  on,
  off,
  letterId,
}: ReplyBottomSheetProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { handleSubmit } = useFormContext<ReplyInputs>();

  const { mutate, isPending } = useMutation({
    mutationFn: letterAPI.patchReceptionReply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    },
  });

  const onSubmit = async (data: ReplyInputs) => {
    mutate(
      { letterId: letterId, letter: data },
      {
        onSuccess: () => {
          toast.success('편지를 바다에 띄어보냈어요', {
            position: 'bottom-center',
            autoClose: 1500,
          });
          navigate(ROUTER_PATHS.ROOT);
        },
        onError: (err) => {
          if (isAxiosError(err)) {
            if (
              err.response?.data === ERROR_RESPONSES.accessDeniedLetter ||
              err.response?.data === ERROR_RESPONSES.alreadyReplyExist
            ) {
              navigate(ROUTER_PATHS.ROOT);
            }
          }
          off();
        },
      },
    );
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>답장을 보낼까요?</BottomSheet.Title>
      <BottomSheet.Description>
        낯선이에게 답장은 한번만 가능해요
      </BottomSheet.Description>
      <BottomSheet.ButtonSection>
        <Button variant="cancel" onClick={off}>
          취소
        </Button>
        <Button
          disabled={isPending}
          variant="primary"
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
        >
          {isPending ? <LoadingSpinner /> : <>보내기</>}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default ReplyBottomSheet;
