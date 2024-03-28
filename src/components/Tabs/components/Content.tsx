import React from 'react';
import * as T from '@radix-ui/react-tabs';

interface ContentProps {
  /** 탭의 value 값 */
  value: string;
  /** 안에 들어갈 컨텐츠 */
  children?: React.ReactNode;
}

const Content = ({ value, children, ...props }: ContentProps) => {
  return (
    <T.Content value={value} {...props}>
      {children}
    </T.Content>
  );
};

export default Content;
