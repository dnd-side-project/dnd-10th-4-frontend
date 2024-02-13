import { css } from '@emotion/react';
import Button from '@/components/Button';
import textStyles from '@/styles/textStyles';
import StepTemplate from '../components/StepTemplate';

const LastStep = () => {
  return (
    <StepTemplate
      buttonContent={
        <Button type="submit" variant="primary">
          시작하기
        </Button>
      }
    >
      <h3 css={[textStyles.t3, css({ marginBottom: '0.5rem' })]}>
        프로필이 완성됐어요
      </h3>
      <p css={textStyles.b4R}>바다가 당신의 편지를 기다리고 있어요</p>
    </StepTemplate>
  );
};

export default LastStep;
