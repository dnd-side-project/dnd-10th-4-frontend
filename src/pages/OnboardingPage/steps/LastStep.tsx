import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import textStyles from '@/styles/textStyles';
import { ROUTER_PATHS } from '@/router';
import StepTemplate from '../components/StepTemplate';

const LastStep = () => {
  const navigate = useNavigate();

  return (
    <StepTemplate
      buttonContent={
        // TODO: 임시로 첫 스텝으로 이동시킴
        <Button variant="primary" onClick={() => navigate(ROUTER_PATHS.ROOT)}>
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
