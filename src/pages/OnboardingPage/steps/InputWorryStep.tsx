import { useFormContext, useWatch } from 'react-hook-form';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import Chip from '@/components/Chip';
import { WORRY_DICT, type Worry } from '@/constants/users';
import { toggleItemInArray } from '@/utils/arrayUtils';
import StepTemplate from '../components/StepTemplate';
import { Inputs, formLiteral } from '../hooks/useOnboardingForm';

const InputWorryStep = () => {
  const { setValue, getFieldState, trigger, formState, control } =
    useFormContext<Inputs>();
  const { invalid } = getFieldState('worries', formState);
  const { worries } = useWatch({ control });

  const { toNext } = useFunnelContext();

  if (!worries) {
    return;
  }

  const handleToggleWorry = (worry: Worry) => {
    setValue('worries', toggleItemInArray(worries, worry));
    trigger('worries');
  };

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext} disabled={invalid}>
          선택 완료
        </Button>
      }
    >
      <p css={[textStyles.b3R, css({ marginBottom: '0.25rem' })]}>
        비슷한 고민을 가진 사람과 연결될 수 있도록
      </p>
      <h3 css={[textStyles.t1, css({ marginBottom: '0.5rem' })]}>
        고민을 알려주세요
      </h3>
      <p css={[textStyles.b5m, css({ marginBottom: '1.25rem' })]}>
        3개 까지 선택 할 수 있어요
      </p>
      <section css={styles.chipSection}>
        {Object.entries(WORRY_DICT).map(([key, value]) => (
          <Chip
            key={key}
            css={css({ marginBottom: '0.875rem' })}
            variant={
              worries.includes(key as Worry)
                ? 'primary-selected'
                : worries.length < formLiteral.worries.max
                  ? 'primary'
                  : 'primary-disabled'
            }
            onClick={() => handleToggleWorry(key as Worry)}
          >
            {value}
          </Chip>
        ))}
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
