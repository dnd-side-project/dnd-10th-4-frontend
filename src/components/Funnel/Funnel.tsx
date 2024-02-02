import React from 'react';
import Step, { StepProps } from './Step';

interface FunnelProps<T extends readonly string[]> {
  step: T[number];
  children: React.ReactNode;
}

/** 하위 노드 중에서 렌더링 해야 할 Step 컴포넌트를 그리는 컴포넌트입니다. */
const Funnel = <T extends readonly string[]>({
  step,
  children,
}: FunnelProps<T>) => {
  const validChildren = React.Children.toArray(children)
    .filter(React.isValidElement)
    .filter((child) => child.type === Step) as React.ReactElement<
    StepProps<T>
  >[];

  const currentStep = validChildren.find((child) => child.props.name === step);

  if (!currentStep) {
    throw new Error(
      `Funnel의 children 중에서 ${step} 스텝이 존재하지 않습니다.`,
    );
  }

  return <>{currentStep}</>;
};

export default Funnel;
