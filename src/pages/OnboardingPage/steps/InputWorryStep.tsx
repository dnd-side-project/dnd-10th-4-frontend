import { useState } from 'react';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import Chip from '@/components/Chip';
import { WORRY_DICT, type Worry } from '@/constants/users';
import memberAPI from '@/api/member/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import StepTemplate from '../components/StepTemplate';

const formLiteral = {
  worry: {
    min: 1,
    max: 3,
  },
} as const;

const InputWorryStep = () => {
  const [selectedWorries, setSelectedWorries] = useState<Worry[]>([]);

  const { toNext } = useFunnelContext();
  const { mutateAsync: deleteWorry, isPending: isDeleting } = useMutation({
    mutationFn: memberAPI.deleteWorry,
  });
  const { mutateAsync: postWorry, isPending: isPosting } = useMutation({
    mutationFn: memberAPI.postWorry,
  });

  const handleToggleWorry = (worry: Worry) => {
    if (selectedWorries.includes(worry)) {
      setSelectedWorries(selectedWorries.filter((w) => w !== worry));
    } else {
      setSelectedWorries([...selectedWorries, worry]);
    }
  };

  const getChipVariant = (worry: Worry) => {
    if (selectedWorries.length < formLiteral.worry.max) {
      return selectedWorries.includes(worry) ? 'primary-selected' : 'primary';
    } else {
      return selectedWorries.includes(worry)
        ? 'primary-selected'
        : 'primary-disabled';
    }
  };

  const isSubmitting = isDeleting || isPosting;

  const handleSubmit = async () => {
    if (
      selectedWorries.length < formLiteral.worry.min ||
      selectedWorries.length > formLiteral.worry.max
    ) {
      return;
    }

    await deleteWorry();
    await postWorry({ worries: selectedWorries });

    toNext();
  };

  return (
    <StepTemplate
      buttonContent={
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadingSpinner size="1.3rem" /> : '선택 완료'}
        </Button>
      }
    >
      <p css={[textStyles.b4m, css({ marginBottom: '0.25rem' })]}>
        비슷한 고민을 가진 사람과 연결될 수 있도록
      </p>
      <h3 css={[textStyles.t3, css({ marginBottom: '0.8125rem' })]}>
        고민을 알려주세요
      </h3>
      <p css={[textStyles.c1m, css({ marginBottom: '1.5rem' })]}>
        3개 까지 선택 할 수 있어요
      </p>
      <section css={styles.chipSection}>
        {Object.entries(WORRY_DICT).map(([key, value]) => {
          return (
            <Chip
              key={key}
              css={css({ marginBottom: '0.875rem' })}
              variant={getChipVariant(key as Worry)}
              onClick={() => handleToggleWorry(key as Worry)}
            >
              {value}
            </Chip>
          );
        })}
      </section>
    </StepTemplate>
  );
};

export default InputWorryStep;

const styles = {
  chipSection: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4375rem;
    justify-content: center;
    max-width: 20rem;
  `,
};
