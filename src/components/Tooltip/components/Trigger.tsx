import React from 'react';
import * as T from '@radix-ui/react-tooltip';

interface TriggerProps {
  /** 툴팁 트리거 요소에 들어갈 컨텐츠 */
  children?: React.ReactNode;
}

/** 마우스를 올렸을 때 툴팁을 보여줄 대상을 나타내는 컴포넌트입니다. */
const Trigger = ({ children }: TriggerProps) => {
  return <T.Trigger asChild>{children}</T.Trigger>;
};

export default Trigger;
