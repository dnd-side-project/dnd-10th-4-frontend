import { useState } from 'react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import StepTemplate from '../components/StepTemplate';
import NavHeader from '../components/NavHeader';

const InputNicknameStep = () => {
  const { toNext } = useFunnelContext();
  const [count, setCount] = useState(0);

  return (
    <StepTemplate
      navHeaderContent={<NavHeader progressValue={1} showBackButton />}
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          다음
        </Button>
      }
    >
      <h1>닉네임을 알려주세요</h1>
      <NavHeader progressValue={count} />
      <Button onClick={() => setCount(count + 1)}>카운트 증가</Button>
      <Button onClick={() => setCount(count - 1)}>카운트 감소</Button>
    </StepTemplate>
  );
};

export default InputNicknameStep;
