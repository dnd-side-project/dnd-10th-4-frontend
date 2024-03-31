import React from 'react';
import * as T from '@radix-ui/react-tabs';
import styles from '../styles';
import { useTabsContext } from '../contexts/TabsContext';

interface ListProps {
  /** 탭 목록에 들어갈 컨텐츠 */
  children?: React.ReactNode;
}

const List = ({ children, ...props }: ListProps) => {
  const { variant } = useTabsContext();

  return (
    <T.List css={styles.list(variant)} aria-label="Tabs" {...props}>
      {children}
    </T.List>
  );
};

export default List;
