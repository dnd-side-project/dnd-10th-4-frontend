import { useState } from 'react';
import { css } from '@emotion/react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
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
import { bottomSheetStyles } from '../style';

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
    await deleteWorry();
    await postWorry({ worries });

    queryClient.invalidateQueries({
      queryKey: memberOptions.detail().queryKey,
    });

    off();
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <section css={bottomSheetStyles.mainSection}>
        <h2 css={bottomSheetStyles.title}>어떤 고민으로 변경하시겠어요?</h2>
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
        <p css={bottomSheetStyles.description}>언제든지 다시 바꿀 수 있어요</p>
      </section>
      <section css={bottomSheetStyles.buttonSection}>
        <Button variant="cancel" rounded="none" size="sm" onClick={off}>
          닫기
        </Button>
        <Button
          variant="primary"
          rounded="none"
          size="sm"
          disabled={worries.length === 0 || isPending}
          onClick={handleSubmit}
        >
          {isPending ? <LoadingSpinner /> : '변경하기'}
        </Button>
      </section>
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
