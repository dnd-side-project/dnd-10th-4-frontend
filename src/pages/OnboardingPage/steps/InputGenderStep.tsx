import { useState } from 'react';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import { type Gender } from '@/types/member';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import GenderCard from '@/components/GenderCard';
import memberAPI from '@/api/member/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import StepTemplate from '../components/StepTemplate';

const InputGenderStep = () => {
  const [gender, setGender] = useState<Gender>();

  const { toNext } = useFunnelContext();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: memberAPI.patchGender,
  });

  const handleSubmit = async () => {
    if (!gender) {
      return;
    }

    await mutateAsync({ gender });
    toNext();
  };

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={handleSubmit} disabled={isPending}>
          {isPending ? <LoadingSpinner size="1.3rem" /> : '선택 완료'}
        </Button>
      }
    >
      <p css={[textStyles.b4m, css({ marginBottom: '0.25rem' })]}>
        낯선 거북이님의 편지가 잘 전해질 수 있도록
      </p>
      <h3 css={textStyles.t3}>성별을 알려주세요</h3>
      <section css={styles.genderSection}>
        <GenderCard
          variant="primary"
          gender="MALE"
          isSelected={gender === 'MALE'}
          onClick={() => setGender('MALE')}
        />
        <GenderCard
          variant="primary"
          gender="FEMALE"
          isSelected={gender === 'FEMALE'}
          onClick={() => setGender('FEMALE')}
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
