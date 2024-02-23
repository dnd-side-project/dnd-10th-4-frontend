import { useState } from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { WORRY_DICT, Worry } from '@/constants/users';
import memberAPI from '@/api/member/apis';
import memberOptions from '@/api/member/queryOptions';
import { toggleItemInArray } from '@/utils/arrayUtils';
import { formLiteral } from '@/pages/OnboardingPage/hooks/useOnboardingForm';
import LoadingSpinner from '@/components/LoadingSpinner';

interface WorryBottomSheetProps extends ReturnType<typeof useBoolean> {}

const WorryBottomSheet = ({ value, on, off }: WorryBottomSheetProps) => {
  const { data: member } = useSuspenseQuery({
    ...memberOptions.detail(),
    staleTime: Infinity,
  });
  const { mutateAsync: deleteWorry, isPending: isDeleting } = useMutation({
    mutationFn: memberAPI.deleteWorry,
  });
  const { mutateAsync: postWorry, isPending: isPosting } = useMutation({
    mutationFn: memberAPI.postWorry,
  });
  const queryClient = useQueryClient();

  const [worries, setWorries] = useState<Worry[]>(member.worryTypes);

  const isPending = isDeleting || isPosting;

  const handleToggleWorry = (worry: Worry) => {
    setWorries(toggleItemInArray(worries, worry));
  };

  const handleSubmit = async () => {
    try {
      await deleteWorry();
      await postWorry({ worries });

      queryClient.invalidateQueries({
        queryKey: memberOptions.detail().queryKey,
      });

      toast.success('고민이 변경되었어요', {
        position: 'bottom-center',
      });

      off();
    } catch (err) {
      console.error(err);

      const message =
        (isAxiosError(err) && err.response?.data) ?? '고민 변경에 실패했어요';

      toast.error(message, {
        position: 'bottom-center',
      });
    }
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>어떤 고민으로 변경하시겠어요?</BottomSheet.Title>
      <BottomSheet.Content>
        <section css={styles.chipSection}>
          {Object.entries(WORRY_DICT).map(([key, value]) => (
            <Chip
              key={key}
              variant={
                worries.includes(key as Worry)
                  ? 'form-selected'
                  : worries.length < formLiteral.worries.max
                    ? 'form'
                    : 'form-disabled'
              }
              onClick={() => handleToggleWorry(key as Worry)}
            >
              {value}
            </Chip>
          ))}
        </section>
      </BottomSheet.Content>
      <BottomSheet.Description>
        언제든지 다시 바꿀 수 있어요
      </BottomSheet.Description>
      <BottomSheet.Divider />
      <BottomSheet.ButtonSection>
        <Button variant="cancel" size="sm" onClick={off}>
          닫기
        </Button>
        <Button
          variant="primary"
          size="sm"
          disabled={worries.length === 0 || isPending}
          onClick={handleSubmit}
        >
          {isPending ? <LoadingSpinner /> : '변경하기'}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default WorryBottomSheet;

const styles = {
  chipSection: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    justify-content: center;
  `,
};
