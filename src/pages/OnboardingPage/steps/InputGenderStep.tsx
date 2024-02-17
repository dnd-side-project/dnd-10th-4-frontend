import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import GenderCard from '@/components/GenderCard';
import StepTemplate from '../components/StepTemplate';
import { Inputs } from '../hooks/useOnboardingForm';

const InputGenderStep = () => {
  const { getFieldState, trigger, formState, control } =
    useFormContext<Inputs>();
  const { invalid } = getFieldState('gender', formState);
  const { nickname } = useWatch({ control });

  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext} disabled={invalid}>
          선택 완료
        </Button>
      }
    >
      <p css={[textStyles.b3R, css({ marginBottom: '0.25rem' })]}>
        낯선 {nickname}님의 편지가 잘 전해질 수 있도록
      </p>
      <h3 css={textStyles.t1}>성별을 알려주세요</h3>
      <section css={styles.genderSection}>
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <GenderCard
              {...field}
              variant="primary"
              value="MALE"
              selectedValue={field.value}
              onChange={(e) => {
                field.onChange(e);
                trigger('gender');
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <GenderCard
              {...field}
              variant="primary"
              value="FEMALE"
              selectedValue={field.value}
              onChange={(e) => {
                field.onChange(e);
                trigger('gender');
              }}
            />
          )}
        />
      </section>
    </StepTemplate>
  );
};

export default InputGenderStep;

const styles = {
  genderSection: css`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;
    max-width: 15rem;
    margin-top: 1.5625rem;
  `,
};
