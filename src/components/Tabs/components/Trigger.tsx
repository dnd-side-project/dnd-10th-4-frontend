import React from 'react';
import * as T from '@radix-ui/react-tabs';
import styles from '../styles';
import { useTabsContext } from '../contexts/TabsContext';

interface TriggerProps {
  /** 탭의 value 값 */
  value: string;
  /** 탭 트리거 요소 들어갈 컨텐츠 */
  children?: React.ReactNode;
}

const Trigger = ({ value, children, ...props }: TriggerProps) => {
  const { variant } = useTabsContext();

  return (
    <T.Trigger css={styles.trigger(variant)} value={value} {...props}>
      {children}
    </T.Trigger>
  );
};

export default Trigger;
