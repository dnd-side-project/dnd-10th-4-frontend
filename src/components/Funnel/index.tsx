import React, { useLayoutEffect } from 'react';

interface FunnelProps<T extends readonly string[]> {
  /** children 중에서 현재 렌더링하려는 스텝 이름입니다. */
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

interface StepProps<T extends readonly string[]> {
  /** Funnel 컴포넌트에서 렌더링 할 Step을 필터링하는데 사용됩니다. */
  name: T[number];
  /** 해당 스텝이 렌더링되면 실행되는 콜백 함수입니다. */
  onEnter?: () => void;
  /** 해당 스텝이 렌더링하려는 내용입니다. */
  children: React.ReactNode;
}

/** 퍼널에서 스텝 별로 렌더링 할 컴포넌트입니다. */
export const Step = <T extends readonly string[]>({
  children,
  onEnter,
}: StepProps<T>) => {
  useLayoutEffect(() => {
    if (onEnter) {
      onEnter();
    }
  }, []);

  return <>{children}</>;
};
