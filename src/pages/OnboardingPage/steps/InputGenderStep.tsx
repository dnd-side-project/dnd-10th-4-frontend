import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import { type Gender } from '@/constants/users';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import GenderCard from '@/components/GenderCard';
import StepTemplate from '../components/StepTemplate';
import { Inputs } from '../hooks/useOnboardingForm';

const InputGenderStep = () => {
  const { setValue, getFieldState, watch, trigger, formState } =
    useFormContext<Inputs>();
  const { invalid } = getFieldState('gender', formState);
  const nickname = watch('nickname');
  const gender = watch('gender');

  const { toNext } = useFunnelContext();

  const handleSelect = (value: Gender) => {
    setValue('gender', value);
    trigger('gender');
  };

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext} disabled={invalid}>
          선택 완료
        </Button>
      }
    >
      <p css={[textStyles.b4m, css({ marginBottom: '0.25rem' })]}>
        낯선 {nickname}님의 편지가 잘 전해질 수 있도록
      </p>
      <h3 css={textStyles.t3}>성별을 알려주세요</h3>
      <section css={styles.genderSection}>
        <GenderCard
          variant="primary"
          gender="MALE"
          isSelected={gender === 'MALE'}
          onClick={() => handleSelect('MALE')}
        />
        <GenderCard
          variant="primary"
          gender="FEMALE"
          isSelected={gender === 'FEMALE'}
          onClick={() => handleSelect('FEMALE')}
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
