import { useFormContext, Controller, useWatch } from 'react-hook-form';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import { clampValue } from '@/utils/stringUtils';
import StepTemplate from '../components/StepTemplate';
import onboardingStyles from '../styles';
import { Inputs, formLiteral } from '../hooks/useOnboardingForm';

const InputBirthdayStep = () => {
  const { trigger, getFieldState, formState, control } =
    useFormContext<Inputs>();
  const { invalid } = getFieldState('birthday', formState);
  const { nickname } = useWatch({ control });

  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button
          type="submit"
          variant="primary"
          disabled={invalid}
          onClick={toNext}
        >
          다음
        </Button>
      }
    >
      <p css={[textStyles.b3R, css({ marginBottom: '0.25rem' })]}>
        낯선 {nickname}님의 편지가 잘 전해질 수 있도록
      </p>
      <h3 css={[textStyles.t1, css({ marginBottom: '1.5625rem' })]}>
        생년월일을 알려주세요
      </h3>
      <section css={styles.inputSection}>
        <span css={css({ flexBasis: '5.9375rem' })}>
          <Controller
            name="birthday.year"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                css={onboardingStyles.input}
                type="text"
                inputMode="numeric"
                placeholder="YYYY"
                autoComplete="off"
                maxLength={formLiteral.year.length}
                onChange={(e) => {
                  e.target.value = clampValue(
                    e.target.value,
                    formLiteral.year.max,
                  );
                  field.onChange(e);
                  trigger('birthday.year');
                }}
              />
            )}
          />
        </span>
        <span css={css({ flexBasis: '4.6875rem' })}>
          <Controller
            name="birthday.month"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                css={onboardingStyles.input}
                type="text"
                inputMode="numeric"
                placeholder="MM"
                autoComplete="off"
                maxLength={formLiteral.month.length}
                onChange={(e) => {
                  e.target.value = clampValue(
                    e.target.value,
                    formLiteral.month.max,
                  );
                  field.onChange(e);
                  trigger('birthday.month');
                }}
              />
            )}
          />
        </span>
        <span css={css({ flexBasis: '4.6875rem' })}>
          <Controller
            name="birthday.day"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                css={onboardingStyles.input}
                type="text"
                inputMode="numeric"
                placeholder="DD"
                autoComplete="off"
                maxLength={formLiteral.day.length}
                onChange={(e) => {
                  e.target.value = clampValue(
                    e.target.value,
                    formLiteral.day.max,
                  );
                  field.onChange(e);
                  trigger('birthday.day');
                }}
              />
            )}
          />
        </span>
      </section>
    </StepTemplate>
  );
};

export default InputBirthdayStep;

const styles = {
  inputSection: css`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;

    input {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #fff;
    }
  `,
};
